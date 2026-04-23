import type { APIRoute } from 'astro';

export const prerender = false;

type RuntimeEnv = Record<string, unknown>;

function getRuntimeEnv(locals: unknown): RuntimeEnv {
  if (
    locals &&
    typeof locals === 'object' &&
    'runtime' in locals &&
    locals.runtime &&
    typeof locals.runtime === 'object' &&
    'env' in locals.runtime &&
    locals.runtime.env &&
    typeof locals.runtime.env === 'object'
  ) {
    return locals.runtime.env as RuntimeEnv;
  }
  return {};
}

function readEnv(name: string, runtimeEnv: RuntimeEnv): string {
  const runtimeValue = runtimeEnv[name];
  if (typeof runtimeValue === 'string' && runtimeValue.trim().length > 0) {
    return runtimeValue.trim();
  }
  const staticValue = import.meta.env[name];
  return typeof staticValue === 'string' ? staticValue.trim() : '';
}

function sanitizeRedirect(candidate: string, requestUrl: URL): string {
  if (!candidate) return '';
  try {
    const u = new URL(candidate, requestUrl);
    return u.toString();
  } catch {
    return '';
  }
}

function required(value: FormDataEntryValue | null): string {
  return typeof value === 'string' ? value.trim() : '';
}

async function verifyTurnstile(token: string, secret: string, ip?: string | null): Promise<boolean> {
  const body = new URLSearchParams();
  body.set('secret', secret);
  body.set('response', token);
  if (ip) body.set('remoteip', ip);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  if (!response.ok) return false;
  const payload = (await response.json()) as { success?: boolean };
  return payload.success === true;
}

async function sendWithResend(apiKey: string, fromEmail: string, toEmail: string, subject: string, text: string) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend error ${response.status}: ${detail}`);
  }
}

export const POST: APIRoute = async ({ request, locals, url }) => {
  const runtimeEnv = getRuntimeEnv(locals);
  const mode = readEnv('CONTACT_FORM_MODE', runtimeEnv).toLowerCase() || 'dev';
  const resendApiKey = readEnv('CONTACT_FORM_RESEND_API_KEY', runtimeEnv);
  const fromEmail = readEnv('CONTACT_FORM_FROM_EMAIL', runtimeEnv);
  const toEmail = readEnv('CONTACT_FORM_TO_EMAIL', runtimeEnv);
  const turnstileSecret = readEnv('CONTACT_TURNSTILE_SECRET_KEY', runtimeEnv);

  const form = await request.formData();
  const redirectTarget =
    sanitizeRedirect(required(form.get('_next')), url) ||
    sanitizeRedirect(readEnv('PUBLIC_CONTACT_FORM_SUCCESS_REDIRECT', runtimeEnv), url) ||
    sanitizeRedirect(request.headers.get('referer') ?? '/', url) ||
    '/';

  const name = required(form.get('name'));
  const company = required(form.get('company'));
  const email = required(form.get('email'));
  const country = required(form.get('country'));
  const message = required(form.get('message'));

  if (!name || !email || !country || !message) {
    return new Response('Missing required contact fields.', { status: 400 });
  }

  const turnstileToken = required(form.get('cf-turnstile-response'));
  if (turnstileSecret) {
    const isHuman = await verifyTurnstile(
      turnstileToken,
      turnstileSecret,
      request.headers.get('CF-Connecting-IP'),
    );
    if (!isHuman) {
      return new Response('Turnstile verification failed.', { status: 400 });
    }
  }

  const subject = required(form.get('_subject')) || 'Richiesta contatto - sito NexStudio';
  const text = [
    `Nome: ${name}`,
    company ? `Azienda: ${company}` : '',
    `Email: ${email}`,
    `Paese: ${country}`,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  if (mode === 'live') {
    if (!resendApiKey || !fromEmail || !toEmail) {
      return new Response('Live mode requires CONTACT_FORM_RESEND_API_KEY, CONTACT_FORM_FROM_EMAIL and CONTACT_FORM_TO_EMAIL.', {
        status: 500,
      });
    }
    await sendWithResend(resendApiKey, fromEmail, toEmail, subject, text);
  } else {
    console.info('[contact:dev] Contact payload received', {
      name,
      company,
      email,
      country,
      subject,
    });
  }

  return Response.redirect(redirectTarget, 303);
};

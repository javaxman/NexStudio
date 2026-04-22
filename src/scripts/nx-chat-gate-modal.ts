interface ChatGateCfg {
  entryUrl: string;
  openInNewTab: boolean;
  actionUrl: string;
  mailto: string;
  notifySubject: string;
  successRedirect: string;
  fieldName: string;
  fieldEmail: string;
  openChatAfterSubmit: boolean;
}

const OVERLAY_ID = 'nx-chat-gate-overlay';
const PANEL_SEL = '[data-nx-chat-gate-panel]';

function readCfg(): ChatGateCfg {
  const el = document.getElementById('nx-chat-gate-model');
  const raw = el?.textContent?.trim();
  if (!raw) {
    return {
      entryUrl: '/#contatti',
      openInNewTab: false,
      actionUrl: '',
      mailto: '',
      notifySubject: '',
      successRedirect: '',
      fieldName: 'name',
      fieldEmail: 'email',
      openChatAfterSubmit: false,
    };
  }
  return JSON.parse(raw) as ChatGateCfg;
}

function overlayEl(): HTMLElement | null {
  return document.getElementById(OVERLAY_ID);
}

function isOpen(): boolean {
  const el = overlayEl();
  return Boolean(el && !el.hasAttribute('hidden'));
}

function showFormStep(): void {
  document.getElementById('nx-chat-gate-step-form')?.classList.remove('hidden');
  document.getElementById('nx-chat-gate-step-success')?.classList.add('hidden');
}

function showSuccessStep(): void {
  document.getElementById('nx-chat-gate-step-form')?.classList.add('hidden');
  document.getElementById('nx-chat-gate-step-success')?.classList.remove('hidden');
}

function closePanel(): void {
  const el = overlayEl();
  if (!el) return;
  el.setAttribute('hidden', '');
  el.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('overflow-hidden');
  const f = document.getElementById('nx-chat-gate-form') as HTMLFormElement | null;
  f?.reset();
  const err = document.getElementById('nx-chat-gate-form-error');
  if (err) {
    err.textContent = '';
    err.classList.add('hidden');
  }
  showFormStep();
}

function openChat(): void {
  const cfg = readCfg();
  const url = cfg.entryUrl;
  if (url.startsWith('http')) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    window.location.assign(url);
  }
}

function openPanel(): void {
  const el = overlayEl();
  if (!el) return;
  el.removeAttribute('hidden');
  el.setAttribute('aria-hidden', 'false');
  document.body.classList.add('overflow-hidden');
  showFormStep();
  requestAnimationFrame(() => {
    el.querySelector<HTMLElement>('#nx-cg-email')?.focus();
  });
}

function eventTargetElement(e: Event): Element | null {
  const t = e.target;
  if (t instanceof Element) return t;
  if (t instanceof Text) return t.parentElement;
  return null;
}

function bind(): void {
  const root = overlayEl();
  const form = document.getElementById('nx-chat-gate-form') as HTMLFormElement | null;
  if (!root || !form) return;

  document.querySelectorAll<HTMLElement>('[data-nx-chat-open]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPanel();
    });
  });

  root.querySelectorAll<HTMLButtonElement>('[data-nx-chat-gate-close]').forEach((b) => {
    b.addEventListener('click', () => closePanel());
  });

  document.getElementById('nx-chat-gate-open-chat')?.addEventListener('click', () => {
    openChat();
    closePanel();
  });

  const onDocClickCapture = (e: MouseEvent) => {
    if (!isOpen()) return;
    const el = eventTargetElement(e);
    if (!el || !root.contains(el)) return;
    if (el.closest('[data-nx-chat-gate-close]')) {
      e.preventDefault();
      e.stopPropagation();
      closePanel();
      return;
    }
    if (!el.closest(PANEL_SEL)) {
      e.preventDefault();
      e.stopPropagation();
      closePanel();
    }
  };
  document.addEventListener('click', onDocClickCapture, true);

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key !== 'Escape' || !isOpen()) return;
    e.preventDefault();
    closePanel();
  });

  form.addEventListener('submit', async (e) => {
    const cfg = readCfg();
    const err = document.getElementById('nx-chat-gate-form-error');
    if (err) err.classList.add('hidden');

    if (cfg.actionUrl) {
      e.preventDefault();
      const fd = new FormData(form);
      try {
        const res = await fetch(cfg.actionUrl, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: fd,
        });
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        if (!res.ok) {
          const msg =
            (data && typeof data.error === 'string' && data.error) ||
            'Invio non riuscito. Riprova tra poco.';
          if (err) {
            err.textContent = msg;
            err.classList.remove('hidden');
          }
          return;
        }
        if (cfg.openChatAfterSubmit) {
          openChat();
          closePanel();
          return;
        }
        showSuccessStep();
        document.getElementById('nx-chat-gate-open-chat')?.focus();
      } catch {
        if (err) {
          err.textContent = 'Errore di rete. Controlla la connessione e riprova.';
          err.classList.remove('hidden');
        }
      }
      return;
    }

    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get(cfg.fieldName) ?? '').trim();
    const email = String(fd.get(cfg.fieldEmail) ?? '').trim();
    if (cfg.mailto) {
      const subject = encodeURIComponent(cfg.notifySubject || 'Accesso chat');
      const body = encodeURIComponent(
        `Richiesta accesso alla chat.\n\nNome: ${name || '—'}\nEmail: ${email}\n`,
      );
      window.location.href = `mailto:${cfg.mailto}?subject=${subject}&body=${body}`;
      closePanel();
      return;
    }
    if (err) {
      err.textContent =
        'Configura `chat.prechat.actionUrl` (Formspree) o `chat.prechat.mailto` in `src/data/home/chat.ts`.';
      err.classList.remove('hidden');
    }
  });
}

if (typeof document !== 'undefined') {
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) closePanel();
  });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind, { once: true });
  } else {
    bind();
  }
}

/** Modulo contatti in pagina (#contatti): mailto o POST Formspree. */
interface ContactFormCfg {
  actionUrl: string;
  mailto: string;
  notifySubject: string;
  successRedirect: string;
  fieldName: string;
  fieldCompany: string;
  fieldCountry: string;
  fieldEmail: string;
  fieldMessage: string;
}

function readCfg(): ContactFormCfg {
  const el = document.getElementById('nx-contact-model');
  const raw = el?.textContent?.trim();
  if (!raw) {
    return {
      actionUrl: '',
      mailto: '',
      notifySubject: '',
      successRedirect: '',
      fieldName: 'name',
      fieldCompany: 'company',
      fieldCountry: 'country',
      fieldEmail: 'email',
      fieldMessage: 'message',
    };
  }
  return JSON.parse(raw) as ContactFormCfg;
}

function bind(): void {
  const form = document.getElementById('nx-contact-form') as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const cfg = readCfg();
    const err = document.getElementById('nx-contact-form-error');
    if (err) err.classList.add('hidden');

    if (cfg.actionUrl) {
      return;
    }
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get(cfg.fieldName) ?? '').trim();
    const company = String(fd.get(cfg.fieldCompany) ?? '').trim();
    const email = String(fd.get(cfg.fieldEmail) ?? '').trim();
    const country = String(fd.get(cfg.fieldCountry) ?? '').trim();
    const message = String(fd.get(cfg.fieldMessage) ?? '').trim();
    if (cfg.mailto) {
      const subject = encodeURIComponent(cfg.notifySubject || 'Contatto sito');
      const companyLine = company ? `\nAzienda: ${company}` : '';
      const body = encodeURIComponent(
        `Nome: ${name}${companyLine}\nEmail: ${email}\nPaese: ${country}\n\n${message}`,
      );
      window.location.href = `mailto:${cfg.mailto}?subject=${subject}&body=${body}`;
      return;
    }
    if (err) {
      err.textContent =
        'Configura `contactForm.actionUrl` (Formspree) o `contactForm.mailto` in `src/data/home/cta.ts`.';
      err.classList.remove('hidden');
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind, { once: true });
  } else {
    bind();
  }
}

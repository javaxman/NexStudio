/** Call-to-action (blocco contatti / chiusura pagina) */
const env = import.meta.env;
const contactActionUrl = (env.PUBLIC_CONTACT_FORM_ACTION_URL ?? '/api/contact').trim();
const contactSuccessRedirect = (env.PUBLIC_CONTACT_FORM_SUCCESS_REDIRECT ?? '').trim();
const contactMailto = (env.PUBLIC_CONTACT_FORM_MAILTO ?? '').trim();
const contactTurnstileSiteKey = (env.PUBLIC_CONTACT_TURNSTILE_SITE_KEY ?? '').trim();

export const cta = {
  /** Riga sezione (stesso ruolo di FAQ, Stack, …) */
  eyebrow: 'Contatti',

  /** Titolo CTA su due righe (dopo il punto) */
  titleLine1: 'Automatizza il complesso.',
  titleLine2: 'Velocizza il processo.',
  body:
    'Dai modelli LLM alla distribuzione globale in pochi millisecondi. La directory definitiva per il LegalTech e MedTech. Utilizza il modulo contatto qui a fianco e ti forniremo tutti i chiarimenti che ti servono.',

  /**
   * Modulo contatti in pagina (sezione Contatti).
   *
   * **Formspree:** crea un form su https://formspree.io e incolla l’URL in `actionUrl`.
   * **Solo mailto:** lascia `actionUrl` vuoto e imposta `mailto` con l’indirizzo destinatario
   * (si apre il client di posta dell’utente).
   */
  contactForm: {
    /** Lasciare vuoti endpoint/chiavi nelle fasi di sola UI. */
    title: 'Parliamone',
    description:
      'Lascia i tuoi dati e il messaggio: ti risponde il team NexStudio.',
    nameLabel: 'Nome',
    companyLabel: 'Azienda (opzionale)',
    countryLabel: 'Paese',
    departmentLabel: 'Reparto',
    emailLabel: 'Email',
    messageLabel: 'Scrivi qui il tuo messaggio',
    submitLabel: 'Invia messaggio',
    /** Formspree: `https://formspree.io/f/xxxx` — valorizzato via `PUBLIC_CONTACT_FORM_ACTION_URL` */
    actionUrl: contactActionUrl,
    /** Formspree `_next` — URL assoluta in produzione (`PUBLIC_CONTACT_FORM_SUCCESS_REDIRECT`) */
    successRedirect: contactSuccessRedirect,
    /**
     * Cloudflare Turnstile (anti-spam): inserisci qui la site key pubblica.
     * Se vuota, il CAPTCHA non viene mostrato.
     */
    turnstileSiteKey: contactTurnstileSiteKey,
    /** Formspree `_subject` e oggetto mailto */
    notifySubject: 'Richiesta contatto — sito NexStudio',
    /** Fallback se `actionUrl` e' vuoto (`PUBLIC_CONTACT_FORM_MAILTO`) */
    mailto: contactMailto,
    fieldName: 'name',
    fieldCompany: 'company',
    fieldCountry: 'country',
    fieldDepartment: 'department',
    fieldEmail: 'email',
    fieldMessage: 'message',
    departmentOptions: [
      { value: 'general', label: 'Generale' },
      { value: 'privacy', label: 'Privacy / DPO' },
      { value: 'security', label: 'Security / Incident Response' },
      { value: 'ethics', label: 'Segnalazioni confidenziali (Ethics)' },
      { value: 'legal', label: 'Legal' },
      { value: 'hr', label: 'HR' },
    ],
  },
} as const;

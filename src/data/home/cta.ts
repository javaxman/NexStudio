/** Call-to-action (blocco contatti / chiusura pagina) */
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
    emailLabel: 'Email',
    messageLabel: 'Scrivi qui il tuo messaggio',
    submitLabel: 'Invia messaggio',
    /** Formspree: `https://formspree.io/f/xxxx` — vuoto = prova `mailto` */
    actionUrl: '',
    /** Formspree: redirect dopo invio (`_next`) — URL **assoluta** in produzione */
    successRedirect: '',
    /**
     * Cloudflare Turnstile (anti-spam): inserisci qui la site key pubblica.
     * Se vuota, il CAPTCHA non viene mostrato.
     */
    turnstileSiteKey: '',
    /** Formspree `_subject` e oggetto mailto */
    notifySubject: 'Richiesta contatto — sito NexStudio',
    /** Se `actionUrl` è vuoto: email per `mailto:` (es. `info@tuodominio.com`) */
    mailto: '',
    fieldName: 'name',
    fieldCompany: 'company',
    fieldCountry: 'country',
    fieldEmail: 'email',
    fieldMessage: 'message',
  },
} as const;

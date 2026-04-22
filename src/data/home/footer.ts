/** Footer — griglia 4 colonne (link); newsletter in blocco unico sotto, allineata a sinistra */
export const footer = {
  brandName: 'NexStudio',
  tagline: 'Ingegneria del software e IA per settori regolamentati.',
  legalLine: 'P.IVA e note legali: da inserire.',

  columnTitles: {
    sections: 'Sezioni',
    legal: 'Normative',
    social: 'Reti sociali',
    company: 'Azienda',
  } as const,

  /** Colonna 1 — ancore sulla homepage */
  homeNav: [
    { label: 'Prodotti', href: '/#prodotti' },
    { label: 'Servizi', href: '/#servizi' },
    { label: 'Stack', href: '/#stack' },
    { label: 'FAQ', href: '/#faq' },
  ] as const,

  /** Pannello preferenze (CMP): non è un documento legale; tenuto fuori dalla colonna Normative */
  cookiePreferences: {
    label: 'Impostazioni cookie',
    hint: 'Preferenze di consenso sul tuo browser (non è un testo legale).',
  } as const,

  /** Colonna 2 — documenti legali (testi bozza nelle rispettive pagine) */
  legalColumnNav: [
    { label: 'Condizioni d’uso', href: '/terms' },
    { label: 'Informativa cookie', href: '/cookies' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Diritti privacy (GDPR)', href: '/gdpr' },
  ] as const,

  /**
   * Colonna 3 — social (sostituire gli URL con i profili reali).
   * Lasciare `href` vuoto per mostrare solo etichetta disabilitata finché non configurato.
   */
  socialLinks: [
    { label: 'Facebook', href: '' },
    { label: 'LinkedIn', href: '' },
    { label: 'Twitter / X', href: '' },
    { label: 'GitHub', href: '' },
  ] as const,

  /** Colonna 4 — pagine istituzionali e compliance */
  companyNav: [
    { label: 'Chi siamo', href: '/about' },
    { label: 'Codice etico', href: '/codice-etico' },
    { label: 'Modello organizzativo', href: '/modello-organizzativo' },
    { label: 'Dove siamo', href: '/dove-siamo' },
  ] as const,

  /**
   * Newsletter — invio via POST a un endpoint esterno.
   *
   * Opzione A (consigliata per partire): Formspree
   * 1. Crea account su https://formspree.io e un nuovo form.
   * 2. Copia l’URL tipo `https://formspree.io/f/abcdefgh` in `actionUrl`.
   * 3. Opzionale: `successRedirect` = URL assoluta della pagina di ringraziamento
   *    (es. `https://tuodominio.com/newsletter/grazie` — vedi `src/pages/newsletter/grazie.astro`).
   * 4. In Formspree collega l’invio a email / Slack / Google Sheets.
   *
   * Opzione B: Brevo, Mailchimp, Buttondown, ConvertKit — usano spesso un URL
   * dedicato o un embed; adatta `fieldName` al nome campo richiesto dalla doc.
   *
   * Opzione C: Worker Cloudflare + lista in KV/D1 (più controllo, più codice).
   */
  newsletter: {
    title: 'Newsletter',
    description: 'Aggiornamenti su prodotti e roadmap.',
    placeholder: 'La tua email',
    buttonLabel: 'Iscriviti',
    /** Formspree: `https://formspree.io/f/xxxx` — vuoto = modulo disabilitato */
    actionUrl: '',
    /** Nome campo email richiesto dal provider (Formspree: di solito `email`) */
    fieldName: 'email',
    /**
     * Formspree: redirect dopo invio (`_next`). Deve essere URL **assoluta**
     * (es. produzione). Vuoto = pagina di ringrazio predefinita Formspree.
     */
    successRedirect: '',
    /** Formspree: oggetto della mail di notifica (`_subject`) */
    notifySubject: 'Nuova iscrizione newsletter — NexStudio',
  },
} as const;

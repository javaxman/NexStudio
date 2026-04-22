/**
 * Chat live: prima identificazione (email → link/codice), poi sessione.
 *
 * `entryUrl`: dove aprire la chat dopo l’accesso (es. `/#contatti`, widget https, wa.me).
 * `prechat`: invio richiesta con Formspree (`actionUrl`) o `mailto:` se l’URL è vuoto.
 * `prechat.openChatAfterSubmit`: se `true`, dopo invio riuscito apre subito `entryUrl` (es. prova interna);
 *   con flusso token via email lasciare `false` e usare `successMessage`.
 */

/** Destinazione della chat dopo identificazione / click su «Entra» */
const entryUrl = '/#contatti';
// Esempio WhatsApp: `https://wa.me/TUO_NUMERO?text=` + encodeURIComponent('Ciao NexStudio...');

export const chat = {
  entryUrl,
  /** Nuova scheda solo per link esterni (wa.me, widget, ecc.) */
  openInNewTab: entryUrl.startsWith('http'),
  linkTitle:
    'Accesso alla chat NexStudio: stato canale, email di verifica e assistenza in più lingue.',

  /**
   * Cosa vede l’utente **prima** di inserire email: chi risponde (umano / bot / entrambi).
   * Aggiorna i testi in base agli orari effettivi del team.
   */
  availability: {
    badge: 'Operatore umano in orario · chatbot sempre attivo',
    body:
      'In orario lavorativo un operatore NexStudio può intervenire in chat; all’ingresso il chatbot può raccogliere il contesto iniziale e smistare la richiesta. Fuori orario la conversazione può proseguire con il solo chatbot fino al rientro del team. Lo stato effettivo è indicato qui sopra prima di procedere.',
  },

  prechat: {
    title: 'Prima della chat',
    intro:
      'Per evitare attese inutili chiediamo l’indirizzo email a cui inviarti un link o un codice monouso per aprire la sessione in modo sicuro. Dopo la verifica potrai usare la chat dal canale che ti indicheremo.',
    nameLabel: 'Nome (facoltativo)',
    emailLabel: 'Email',
    submitLabel: 'Richiedi accesso alla chat',
    /** Visibile dopo l’invio riuscito: utile se il link nella mail punta allo stesso `entryUrl` */
    enterChatLabel: 'Ho ricevuto il messaggio — apri la chat',
    closeLabel: 'Chiudi',
    successMessage:
      'Controlla la posta in arrivo: ti abbiamo inviato le istruzioni (link o codice) per entrare in chat. Se non vedi nulla, controlla anche lo spam.',
    /** Formspree dedicato alla richiesta accesso chat — vuoto = prova `mailto` */
    actionUrl: '',
    /** Se `actionUrl` è vuoto */
    mailto: '',
    notifySubject: 'Richiesta accesso chat — sito NexStudio',
    successRedirect: '',
    fieldName: 'name',
    fieldEmail: 'email',
    /**
     * Dopo POST Formspree riuscito: apri subito `entryUrl` (es. test con pagina contatti).
     * Con invio token via email da backend: `false`.
     */
    openChatAfterSubmit: false,
  },
} as const;

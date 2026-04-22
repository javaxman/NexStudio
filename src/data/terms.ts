/**
 * Condizioni d’uso del sito web pubblico NexStudio.
 * I contratti B2B su LexAura, MediAura o servizi professionali restano strumenti separati.
 * Aggiornare versione e data in sync con la pagina (box in testa).
 */
export const termsDocument = {
  version: '1.0',
  inVigoreDal: '22 aprile 2026',
} as const;

export type TermsSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export const termsSections: readonly TermsSection[] = [
  {
    id: 'premessa',
    title: '1. Premessa e ambito',
    paragraphs: [
      "Le presenti condizioni d’uso regolano l’accesso e la consultazione del sito web di NexStudio (di seguito «NexStudio», «noi») e dei contenuti informativi resi disponibili online. La sede operativa di riferimento è a Bangkok, Thailandia; i servizi software commerciali (inclusi prodotti e soluzioni per Legal Tech e Health Tech, ad es. le linee LexAura e MediAura) sono regolati da condizioni generali, ordini, offerte o accordi specifici sottoscritti con i clienti: in caso di conflitto tra il presente testo e un contratto B2B sottoscritto, prevalgono i documenti specifici del servizio e gli accordi contrattuali applicabili.",
      "Per il trattamento dei dati personali e i cookie si rimanda rispettivamente all’informativa privacy e alla cookie policy, citate più sotto.",
    ],
  },
  {
    id: 'accettazione',
    title: '2. Accettazione e requisiti',
    paragraphs: [
      "L’utilizzo del sito (navigazione oltre la mera apertura della home, invio di moduli ove presenti, uso di strumenti di contatto) implica la conoscenza e l’accettazione delle presenti condizioni e della versione in vigore della privacy policy e, ove applicabile, della cookie policy.",
      "L’utente dichiara di avere l’età e la capacità legale per vincolarsi, o di agire sotto la responsabilità di un rappresentante legale idoneo.",
    ],
  },
  {
    id: 'servizi',
    title: '3. Contenuti e servizi informativi',
    paragraphs: [
      "Il sito ha finalità promozionali e informative su NexStudio, sui prodotti e sull’organizzazione. Le descrizioni, schermate, esempi e roadmap non costituiscono offerta vincolante né promessa di feature: restano subordinati a contrattualizzazione, disponibilità tecnica e condizioni di mercato.",
      "NexStudio si impegna a mantenere le informazioni ragionevolmente aggiornate, senza obbligo di esaustività o di aggiornamento in tempo reale. Può modificare, sospendere o limitare l’accesso a sezioni del sito per manutenzione, sicurezza o evoluzione del prodotto.",
    ],
  },
  {
    id: 'uso-lecito',
    title: '4. Uso lecito del sito',
    paragraphs: [
      "L’utente si impegna a usare il sito in conformità a legge, buona fede e condotta professionale, in particolare a:",
    ],
    bullets: [
      'non introdurre malware, né tentare di eludere misure di sicurezza, né effettuare attività che sovraccaricano in modo abnorme o automatizzato non autorizzato l’infrastruttura;',
      'non copiare o sfruttare illecitamente i contenuti (cfr. sotto proprietà intellettuale) né impersonare NexStudio o terzi;',
      "non usare canali di contatto per contenuti illeciti, diffamatori, spam o al di fuori delle finalità richieste (commerciale, supporto, segnalazioni, ecc.).",
    ],
  },
  {
    id: 'proprieta',
    title: '5. Proprietà intellettuale',
    paragraphs: [
      "Testi, logotipi, elementi grafici, layout, nomi di prodotto (inclusi LexAura e MediAura) e, ove presenti, software dimostrativo o materiali scaricabili, sono protetti dalle norme sul diritto d’autore e dalle norme sui marchi applicabili. È vietata la riproduzione, distribuzione o modifica non espressamente autorizzata, salvo uso consentito per legge (citazione, breve estratto con attribuzione) o espressa deroga scritta.",
    ],
  },
  {
    id: 'terze-parti',
    title: '6. Link, servizi di terzi e strumenti incorporati',
    paragraphs: [
      "Il sito può contenere collegamenti a siti o servizi di terzi. NexStudio non controlla tali risorse e non risponde dei loro contenuti o politiche; l’accesso avviene sotto la responsabilità dell’utente, che dovrà leggere le condizioni e l’informativa privacy del terzo.",
    ],
  },
  {
    id: 'responsabilita',
    title: '7. Limitazione di responsabilità',
    paragraphs: [
      "Nella misura massima consentita dalla legge applicabile, il sito e i suoi contenuti sono forniti «così come sono» e «secondo disponibilità», senza garanzie implicite di adeguatezza a un fine particolare, non interruzione o assenza di errori. Il materiale informativo non sostituisce consulenza legale, sanitaria o professionale: decisioni e responsabilità restano a carico del visitatore o del professionista e dei propri clienti.",
      "NexStudio non risponde per danni indiretti, consequenziali, mancati guadagni, perdita di dati, interruzioni, azioni di terzi o fatti oltre il controllo ragionevole, salvo quanto non possa essere escluso o limitato per legge imperativa.",
    ],
  },
  {
    id: 'sospensione',
    title: '8. Sospensione, violazione e forza maggiore',
    paragraphs: [
      "NexStudio può sospendere, limitare o interrompere l’accesso in caso di violazione delle presenti condizioni, rischio per la sicurezza, ordini di autorità, o forza maggiore. La mancata esecuzione in tali casi non costituisce inadempimento a titolo di danno.",
    ],
  },
  {
    id: 'legge',
    title: '9. Legge applicabile e foro (da confermare con il legale)',
    paragraphs: [
      "Salvo disposizioni inderogabili, le presenti condizioni e ogni contestazione inerente al sito informativo sono regolate dalla legge indicata qui sotto, con foro competente ove ammesso (da definire in base alla entità operativa, ai clienti e al mercato: es. Tailandia, o altra scelta con parere legale).",
    ],
  },
  {
    id: 'contatti-termini',
    title: '10. Contatti in merito a queste condizioni',
    paragraphs: [
      "Per domande sulle presenti condizioni d’uso del sito, utilizzare i contatti e i canali indicati nel sito. Per trattamento dei dati personali e diritti, seguire l’informativa privacy; per cookie, la cookie policy.",
    ],
  },
] as const;

export const termsRiferimenti: readonly { label: string; href: string }[] = [
  { label: 'Informativa privacy', href: '/privacy' },
  { label: 'Cookie policy', href: '/cookies' },
  { label: 'Diritti GDPR', href: '/gdpr' },
  { label: 'Codice etico', href: '/codice-etico' },
] as const;

export const termsCrossReferences = {
  leadNote:
    'I documenti collegati vanno allineati alla stessa data di revisione ove si tratti di un pacchetto unico di pubblicazione; per LexAura e MediAura, le informative privacy dedicate pubblicate sui portali SaaS restano il riferimento di dettaglio del singolo prodotto.',
} as const;

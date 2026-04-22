/**
 * Pagina GDPR: diritti degli interessati e modalita' operative.
 * Documento di supporto alla privacy policy quadro del portale NexStudio.
 */
export const gdprDocument = {
  version: '1.0',
  inVigoreDal: '22 aprile 2026',
  ultimoAggiornamento: '22 aprile 2026',
} as const;

export const gdprCrossReferences = {
  lead:
    "Per LexAura e MediAura, i dettagli operativi del singolo prodotto sono indicati nelle rispettive informative privacy pubblicate sui portali SaaS dedicati.",
} as const;

export const gdprRiferimenti: readonly { label: string; href: string }[] = [
  { label: 'Informativa privacy', href: '/privacy' },
  { label: 'Cookie policy', href: '/cookies' },
  { label: "Condizioni d'uso", href: '/terms' },
] as const;

export type GdprSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export const gdprSections: readonly GdprSection[] = [
  {
    id: 'quadro',
    title: '1. Quadro normativo e ambito',
    paragraphs: [
      "Il Regolamento (UE) 2016/679 (GDPR) tutela i diritti degli interessati e disciplina il trattamento dei dati personali. Questa pagina spiega come esercitare tali diritti verso NexStudio nel contesto del portale corporate e dei servizi collegati.",
      "La presente pagina integra, ma non sostituisce, l'informativa privacy generale: per categorie dati, finalita' e basi giuridiche si rimanda a `/privacy`; per cookie e tecnologie simili si rimanda a `/cookies`.",
    ],
  },
  {
    id: 'diritti',
    title: '2. Diritti riconosciuti agli interessati',
    paragraphs: [
      "Nei limiti previsti dalla normativa applicabile, l'interessato puo' esercitare i seguenti diritti:",
    ],
    bullets: [
      "accesso ai dati personali e ottenimento di copia in formato intelligibile;",
      "rettifica dei dati inesatti e integrazione dei dati incompleti;",
      "cancellazione dei dati (diritto all'oblio), quando ne ricorrono i presupposti di legge;",
      "limitazione del trattamento in presenza delle condizioni previste dal GDPR;",
      "portabilita' dei dati trattati con mezzi automatizzati sulla base di consenso o contratto;",
      "opposizione al trattamento fondato su legittimo interesse, inclusa l'opposizione a comunicazioni marketing ove applicabile;",
      "revoca del consenso in qualsiasi momento, senza pregiudicare la liceita' del trattamento precedente;",
      "reclamo all'autorita' di controllo competente.",
    ],
  },
  {
    id: 'chi-contattare',
    title: '3. Chi contattare per esercitare i diritti',
    paragraphs: [
      "Per trattamenti in cui NexStudio agisce come titolare (es. contatti dal sito, gestione richieste corporate, sicurezza infrastrutturale di propria competenza), la richiesta puo' essere inviata tramite i canali di contatto privacy indicati nei riferimenti istituzionali.",
      "Per trattamenti svolti nei tenant SaaS del cliente (LexAura/MediAura), il primo punto di contatto resta di norma il cliente titolare (es. studio legale, struttura sanitaria, organizzazione cliente), che determina finalita' e mezzi del trattamento.",
      "NexStudio, ove operi come responsabile del trattamento, supporta il cliente titolare nella gestione delle richieste ricevute, secondo DPA e accordi contrattuali applicabili.",
    ],
  },
  {
    id: 'identificazione',
    title: "4. Verifica dell'identita' e gestione della richiesta",
    paragraphs: [
      "Per tutelare riservatezza e sicurezza, NexStudio puo' richiedere informazioni minime aggiuntive necessarie a verificare l'identita' del richiedente e la legittimazione ad agire.",
      "Le richieste sono gestite con procedure tracciate e prese in carico nei tempi previsti dal GDPR; in caso di richieste complesse o multiple, i termini possono essere prorogati nei limiti consentiti dalla legge, con comunicazione motivata.",
    ],
  },
  {
    id: 'limitazioni',
    title: '5. Casi di limitazione o rigetto',
    paragraphs: [
      "L'esercizio dei diritti puo' essere limitato o non accolto, in tutto o in parte, quando sussistono obblighi legali prevalenti, esigenze di difesa in giudizio, tutela dei diritti di terzi o altre eccezioni previste dalla normativa.",
      "In tali casi NexStudio fornisce, ove possibile, un riscontro motivato e indica i rimedi disponibili, incluso il diritto di proporre reclamo all'autorita' competente.",
    ],
  },
  {
    id: 'trasferimenti',
    title: '6. Trasferimenti internazionali e garanzie',
    paragraphs: [
      "Qualora il trattamento comporti trasferimenti extra SEE/UE, NexStudio adotta le misure richieste dalla normativa (es. clausole contrattuali standard e misure supplementari tecniche/organizzative) secondo quanto descritto nell'informativa privacy.",
      "Le informazioni rilevanti sui trasferimenti possono essere fornite all'interessato nei limiti consentiti e in coerenza con obblighi contrattuali e di sicurezza.",
    ],
  },
  {
    id: 'documenti-prodotto',
    title: '7. Coordinamento con le privacy dei SaaS',
    paragraphs: [
      "Le privacy policy dei portali SaaS LexAura e MediAura dettagliano, per ciascun prodotto, flussi dati, tempi di conservazione, ruoli privacy e canali dedicati. In caso di differenze tra documenti, prevalgono i documenti specifici del servizio e gli accordi contrattuali applicabili.",
      "Questa pagina mantiene funzione di riferimento generale sul quadro GDPR del gruppo di servizi NexStudio.",
    ],
  },
] as const;

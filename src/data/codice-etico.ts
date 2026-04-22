/**
 * Codice etico — riferimenti a prodotti e domini **separati in dati**:
 * aggiungere una riga a `productLines` e, se serve, un `ConformityBlock` in
 * `codiceEticoConformityBlocks` senza riscrivere la pagina intera.
 */
export const codiceEtico = {
  productLines: [
    { id: 'platform' as const, name: 'Piattaforme e servizi SaaS' },
    { id: 'legal' as const, name: 'Legal Tech', productName: 'LexAura' as const },
    { id: 'health' as const, name: 'Health Tech', productName: 'MediAura' as const },
  ],
} as const;

export type ConformityBlock = {
  id: string;
  anchorId: string;
  title: string;
  lead?: string;
  items: readonly string[];
};

/**
 * Sezione 4 — sottosezioni indipendenti. Per una nuova verticalità (es. fintech
 * regolamentato): `productLines` + un nuovo blocco qui, più eventuali li dedicati
 * altrove mappati da un piccolo elenco in questo file.
 */
export const codiceEticoConformityBlocks: readonly ConformityBlock[] = [
  {
    id: 'platform',
    anchorId: 'conformita-piattaforma',
    title: '4.1 Piattaforma e offerta SaaS (obblighi orizzontali)',
    lead:
      'Riferimenti comuni a tutte le attività di trattamento e a tutte le linee in abbonamento, indipendentemente dal dominio del cliente finale.',
    items: [
      'Thailand Personal Data Protection Act (PDPA).',
      "Regolamento generale sulla protezione dei dati (GDPR), quando applicabile per utenti o servizi nell'Unione europea.",
    ],
  },
  {
    id: 'legal',
    anchorId: 'conformita-legal',
    title: '4.2 Ambito legale (Legal Tech / LexAura)',
    lead:
      'Misure e riferimenti per software e flussi ad uso di studi legali e professioni regolamentate, inclusa l’attività riferibile a LexAura o ad evoluzioni nello stesso dominio.',
    items: [
      'Norme professionali e di segreto professionale per l’esercizio forense; rispetto di privilegi professionali (ad es. attorney–client privilege) ove applicabili; lealtà e correttezza verso controparti e terzi, nei limiti della legge e deontologia.',
    ],
  },
  {
    id: 'health',
    anchorId: 'conformita-sanitario',
    title: '4.3 Ambito sanitario (Health Tech / MediAura)',
    lead:
      'Dati, rischi e, se del caso, classificazioni regolatorie riferibili a Health Tech e a MediAura (e prodotti nello stesso perimetro).',
    items: [
      'Normative sanitarie e standard locali o internazionali pertinenti (requisiti per la gestione dei dati clinici, standard ISO rilevanti, continuità assistenziale ove toccata dal software).',
      'Requisiti per dispositivi medici o software a scopo medico (es. EU MDR, regolamenti locali) se le funzionalità rientrano nella definizione di dispositivo medico o equivalente per il mercato prescelto.',
      "Norme e buone pratiche su segreto e riservatezza in ambito sanitario (es. relazioni con operatori) e, se applicabile: HIPAA (Stati Uniti) oltre a quanto già previsto a livello orizzontale (GDPR, PDPA) per i trasferimenti.",
    ],
  },
] as const;

type ProductLine = (typeof codiceEtico.productLines)[number];

export function getCodiceEticoProductListPhrase(): string {
  const lines = codiceEtico.productLines.filter(
    (p): p is ProductLine & { id: 'legal' | 'health' } => p.id !== 'platform',
  );
  return lines
    .map((p) => (p.id !== 'platform' && 'productName' in p ? `${p.productName} (${p.name})` : p.name))
    .join(' e ');
}

/** Testo unico per §1, coerente con `productLines` */
export function getCodiceEticoPremessa(): string {
  const elenco = getCodiceEticoProductListPhrase();
  return (
    'Questo Codice Etico stabilisce i principi, i doveri e le regole di comportamento che tutti i ' +
    'soggetti coinvolti in NexStudio (di seguito «Società») devono osservare nello ' +
    'sviluppo, nella commercializzazione e nella gestione di soluzioni SaaS, con riferimento organizzato per linee (piattaforma comune, ambito legale, ambito sanitario) e, in concreto, in particolare a ' +
    elenco +
    ". Se l'offerta si arricchirà o diverrà, le nuove linee a elevata regolamentazione andranno descritte con lo stesso schema (piattaforma + perimetro di dominio), tramite allegati o revisione del testo, senza mescolare criteri tra verticalità. " +
    'Mira a garantire conformità normativa, tutela della privacy, sicurezza, ' +
    'qualità tecnica, protezione dei diritti degli utenti e responsabilità professionale.'
  );
}

/** Esempio: validazione in §7, separata per perimetro; estendere l'array con nuove righe. */
export const qualitaValidazioneProdotto: readonly { id: string; text: string }[] = [
  {
    id: 'legal',
    text: 'per funzionalità che supportano scelte o attività in ambito legale, validazione con esperti legali, studi pilota, documentazione di limiti e avvertenze, così come previsto per LexAura o equivalenti in Legal Tech.',
  },
  {
    id: 'health',
    text: 'per funzionalità che assistono decisioni cliniche o attività sanitarie, validazione con esperti clinici, studi pilota, avvertenze, così come previsto per MediAura o equivalenti in Health Tech.',
  },
];

/** Voci in “Note pratiche” che dipendono dalla stessa separazione dominio. */
export const notePraticheDPIA: readonly string[] = [
  "Eseguire DPIA per trattamenti critici per ciascun perimetro (in particolare trattamenti sanitari o legali a elevata criticità) documentando il nesso con le linee prodotto coinvolte.",
  "Per la linea Health Tech / MediAura o equivalenti, verificare se parti del prodotto rientrano nella definizione di dispositivo medico o software a scopo medico, ai fini di registrazione o approvazione secondo il mercato e la classificazione scelta.",
];

/**
 * §5.1 — separazione netta tra fornitore SaaS, sottoscrittori (medici, avvocati, strutture)
 * e interessati (pazienti, clienti delle parti). Il testo legale completo resta in
 * privacy policy, DPA e informative verso pazienti/clienti; qui solo principi e condotta.
 */
export const codiceEticoTutelaDatiRuoli = {
  anchorId: 'tutela-dati-ruoli',
  title: '5.1 Pazienti, clienti degli studi e abbonamento: ruoli e trattamento',
  intro:
    "Sì, va spiegata la divisione di ruoli: il Codice fissa cosa ci aspettiamo da ciascuna parte, senza sostituire l’informativa privacy né i contratti. Sotto, in sintesi, chi tratta i dati dei pazienti e dei clienti rispetto agli studi e con quali doveri (Società, sottoscrittori, interessati).",
  rows: [
    {
      label: 'NexStudio (fornitore / operatore del servizio)',
      text:
        "La Società tratta dati personali e, ove presenti, categorie particolari (es. salute, situazione giuridica) solo per fornire, proteggere e migliorare le piattaforme, per supporto, sicurezza, fatturazione, adempimenti di legge e, se contrattualmente previsto, per assistere il titolare nell’onorare i diritti degli interessati. Divieto, per chi lavora in Società, di usi incompatibili, di rivendere i dati a scopi estranei al servizio, e di accedere al contenuto professionale oltre quanto necessario tecnicamente o per la gestione del supporto autorizzata. Le qualifiche giuridiche esatte (es. responsabile del trattamento, art. 28 GDPR, o altro schema sotto PDPA) sono definite per iscritto in DPA e documenti privacy.",
    },
    {
      label: 'Sottoscrittori in abbonamento (studi legali, medici, strutture, team iscritti)',
      text:
        "I sottoscrittori sono, di regola, titolari o co-titolari del trattamento sui dati che inseriscono o fanno inserire nella piattaforma: in particolare pazienti o assistiti (Health Tech) e clienti, controparti o terzi coinvolti in fascicoli o pratiche (Legal Tech), oltre ai dati del proprio personale. Devono: avere base giuridica e informative adeguate verso i propri pazienti, clienti e assistiti, rispettare obblighi deontologici (segreto, riservatezza, tenuta degli atti), mappare finalità e tempi, dare istruzioni documentate al fornitore ove serva la nomina di responsabile, e rispondere in prima istanza alle richieste di accesso, rettifica, cancellazione e opposizione degli interessati, collaborando con NexStudio quando servono strumenti tecnici o log.",
    },
    {
      label: 'Pazienti e clienti (interessati)',
      text:
        "Esercitano i diritti privacy in primis verso lo studio, la struttura o il professionista che tratti i loro dati. NexStudio, salvo esercizio diretto previsto per legge o canale specifico, inoltra o supporta l’esercizio attraverso il titolare, nei tempi e modi del contratto e del prodotto.",
    },
  ],
  note:
    "I dettagli operativi (categorie, tempi, tabella del trattamento, sub-responsabili, trasferimenti extra-UE, testi informativa rivolti a pazienti o clienti delle parti) stanno in Privacy policy, informativa cookie, DPA, condizioni d’uso e allegati, aggiornabili senza riformulare l’intero Codice quando cambia solo l’allegato legale.",
} as const;

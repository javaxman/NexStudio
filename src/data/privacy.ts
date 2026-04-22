/**
 * Informativa privacy del portale NexStudio e dei prodotti SaaS LexAura / MediAura.
 * Questo file centralizza i contenuti della pagina /privacy per facilitare revisioni legali.
 */
export const privacyDocument = {
  version: '1.0',
  inVigoreDal: '22 aprile 2026',
  ultimoAggiornamento: '22 aprile 2026',
} as const;

export const privacyCrossReferences = {
  lead:
    "L'informativa distingue il portale istituzionale NexStudio dai servizi SaaS LexAura e MediAura, che rispondono a esigenze operative e livelli di rischio differenti; le informative privacy specifiche dei singoli SaaS, pubblicate nei rispettivi siti/portali applicativi, restano il riferimento di dettaglio per l'uso del prodotto.",
} as const;

export const privacyRiferimenti: readonly { label: string; href: string }[] = [
  { label: "Condizioni d'uso", href: '/terms' },
  { label: 'Cookie policy', href: '/cookies' },
  { label: 'Diritti GDPR', href: '/gdpr' },
] as const;

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export const privacySections: readonly PrivacySection[] = [
  {
    id: 'ambito',
    title: '1. Ambito della presente informativa',
    paragraphs: [
      "La presente informativa descrive il quadro generale con cui NexStudio tratta i dati personali raccolti tramite il sito istituzionale pubblico e i canali corporate (contatti, richieste demo, onboarding commerciale) collegati anche ai prodotti LexAura (Legal Tech) e MediAura (Health Tech).",
      "Per l'uso operativo dei SaaS (area riservata, tenant cliente, funzionalita' applicative), il livello di dettaglio e il ruolo privacy possono variare: NexStudio puo' operare come titolare, contitolare o responsabile del trattamento a seconda del servizio concretamente attivato e degli accordi contrattuali sottoscritti con il cliente business.",
      "In caso di conflitto tra questa pagina e un Data Processing Agreement (DPA), un contratto quadro o condizioni speciali firmate, prevalgono i documenti contrattuali specifici per il servizio acquistato.",
    ],
  },
  {
    id: 'titolare',
    title: "2. Identita' del titolare e punti di contatto",
    paragraphs: [
      "Titolare del trattamento: NexStudio (sede operativa a Bangkok, Thailandia). I dati anagrafici societari completi e il recapito privacy ufficiale sono indicati nei contatti istituzionali e nei documenti contrattuali applicabili.",
      "Canali per richieste privacy: sezione contatti del sito, recapito email privacy dedicato ove attivo, ed eventuali canali autenticati/ticket previsti per i clienti SaaS. Se nominato, il DPO/Privacy Lead e' indicato con i relativi contatti.",
    ],
  },
  {
    id: 'categorie-dati',
    title: '3. Categorie di dati trattati',
    paragraphs: [
      "Le categorie di dati variano in funzione del canale utilizzato e dei moduli/feature attivi. Di seguito il perimetro tipico a livello corporate; i dettagli di prodotto sono disciplinati nelle privacy dedicate dei singoli SaaS.",
    ],
    bullets: [
      "Portale NexStudio: dati di navigazione (log tecnici, IP, user agent), dati di contatto inviati volontariamente (nome, email, azienda, contenuto del messaggio), preferenze cookie e metriche aggregate.",
      "LexAura (Legal Tech): dati di account e profilo utente, metadati di workspace, documenti giuridici caricati o generati, richieste testuali ai motori di analisi/sintesi, log di audit su accessi e operazioni.",
      "MediAura (Health Tech): dati di account e ruoli, metadati organizzativi di struttura/reparto, documentazione sanitaria o amministrativa trattata nel servizio, input vocali e relative trascrizioni ove la funzione sia attivata, log tecnici e di sicurezza.",
      "Categorie particolari ex art. 9 GDPR: possono emergere in MediAura (e, in specifici casi, in LexAura) quando i clienti caricano contenuti che includono dati sanitari o altri dati sensibili; il trattamento avviene solo nei limiti del servizio e delle istruzioni ricevute dal cliente titolare.",
    ],
  },
  {
    id: 'finalita-basi',
    title: "4. Finalita' e basi giuridiche del trattamento",
    paragraphs: [
      "NexStudio tratta i dati personali per finalita' determinate e legittime, applicando la base giuridica adeguata al singolo trattamento.",
    ],
    bullets: [
      "Gestione del sito istituzionale, sicurezza e continuita' operativa (base: legittimo interesse alla sicurezza, prevenzione abusi e mantenimento del servizio).",
      "Gestione richieste pre-contrattuali, demo, contatti commerciali e supporto (base: misure precontrattuali su richiesta dell'interessato; legittimo interesse nella gestione B2B).",
      "Erogazione dei SaaS LexAura e MediAura, autenticazione utenti, gestione tenant e assistenza tecnica (base: esecuzione del contratto con il cliente business).",
      "Conformita' normativa, adempimenti amministrativi/fiscali, gestione contenziosi e difesa di diritti (base: obbligo legale e legittimo interesse alla tutela in giudizio).",
      "Comunicazioni marketing/newsletter, ove attive (base: consenso, salvo eccezioni di soft spam consentite dalla normativa applicabile).",
      "Attivita' di miglioramento del servizio, quality assurance e sviluppo funzionalita' IA con dati del cliente solo se previsto dal contratto o da istruzioni documentate; in assenza di tale base i dati non sono utilizzati per training generalista.",
    ],
  },
  {
    id: 'ruoli-saas',
    title: '5. Ruoli privacy specifici per LexAura e MediAura',
    paragraphs: [
      "Per i servizi SaaS B2B, il cliente (studio legale, impresa, struttura sanitaria, professionista) determina normalmente finalita' e mezzi del trattamento relativi ai dati caricati nel proprio ambiente applicativo, agendo come titolare del trattamento.",
      "NexStudio agisce di regola come responsabile del trattamento per conto del cliente, con nomina contrattuale e istruzioni documentate, limitando l'accesso ai dati al personale autorizzato che ne abbia necessita' operativa (supporto, manutenzione, sicurezza).",
      "Qualora NexStudio determini autonomamente finalita' specifiche (es. prevenzione frodi, sicurezza infrastrutturale, metriche aggregate non riconducibili al singolo interessato), agisce come titolare autonomo per tali trattamenti.",
      "Le informative privacy dedicate di LexAura e MediAura, pubblicate nei rispettivi siti o ambienti applicativi, approfondiscono categorie dati, flussi, tempi di retention e basi giuridiche specifiche del singolo prodotto.",
    ],
  },
  {
    id: 'conservazione',
    title: '6. Tempi di conservazione',
    paragraphs: [
      "I tempi di conservazione sono definiti in base a principio di minimizzazione, obblighi di legge e ciclo di vita del servizio. Durate puntuali possono essere regolate da contratto, configurazioni del cliente e policy interne.",
    ],
    bullets: [
      "Dati di contatto dal sito: per il tempo necessario alla gestione della richiesta e, se pertinente, per il successivo follow-up commerciale entro termini ragionevoli.",
      "Dati di account SaaS: per tutta la durata del rapporto contrattuale e per il periodo tecnico-amministrativo necessario a chiusura, backup, audit e adempimenti post-contratto.",
      "Log tecnici e di sicurezza: retention proporzionata a monitoraggio, incident response, prevenzione abusi e dimostrazione di conformita'.",
      "Dati contrattuali/amministrativi: conservazione secondo i termini imposti dalla normativa fiscale, civilistica e regolatoria applicabile.",
    ],
  },
  {
    id: 'destinatari',
    title: '7. Destinatari e categorie di soggetti autorizzati',
    paragraphs: [
      "I dati possono essere trattati da personale NexStudio autorizzato e istruito, nonche' da fornitori qualificati che operano come responsabili/sub-responsabili (es. hosting cloud, servizi infrastrutturali, monitoraggio sicurezza, strumenti di comunicazione e assistenza).",
      "L'elenco aggiornato dei responsabili e sub-responsabili rilevanti per i clienti SaaS e' messo a disposizione nei canali contrattuali o su richiesta, secondo quanto previsto dagli accordi in essere.",
    ],
  },
  {
    id: 'trasferimenti',
    title: '8. Trasferimenti internazionali di dati',
    paragraphs: [
      "In ragione della struttura operativa internazionale e dell'uso di fornitori cloud globali, alcuni trattamenti possono comportare trasferimenti verso Paesi extra SEE/UE.",
      "Quando richiesto dalla normativa, NexStudio adotta garanzie adeguate (es. clausole contrattuali standard, misure supplementari tecniche/organizzative, valutazioni di impatto sul trasferimento) e limita il trasferimento ai soli dati necessari.",
    ],
  },
  {
    id: 'sicurezza',
    title: '9. Misure di sicurezza e governance',
    paragraphs: [
      "NexStudio adotta misure tecniche e organizzative proporzionate al rischio, con particolare attenzione ai contesti Legal Tech e Health Tech dove integrita', riservatezza e tracciabilita' sono requisiti essenziali.",
    ],
    bullets: [
      "Controlli di accesso basati su ruoli, autenticazione, segregazione logica degli ambienti cliente e principio del minimo privilegio.",
      "Cifratura dei dati in transito e, ove previsto dall'architettura, a riposo; gestione sicura delle chiavi e dei segreti applicativi.",
      "Logging, monitoraggio, audit trail e procedure di gestione incidenti con escalation interna e tracciamento delle azioni correttive.",
      "Procedure di backup, continuita' operativa e disaster recovery in funzione del piano di servizio sottoscritto.",
    ],
  },
  {
    id: 'diritti',
    title: "10. Diritti degli interessati e modalita' di esercizio",
    paragraphs: [
      "Gli interessati possono esercitare i diritti previsti dalla normativa applicabile (accesso, rettifica, cancellazione, limitazione, opposizione, portabilita', revoca del consenso ove prestato, reclamo all'autorita' competente).",
      "Per dati trattati nel contesto dei SaaS, la richiesta va di norma indirizzata prima al cliente titolare (es. studio legale o struttura sanitaria) che determina finalita' e mezzi del trattamento. NexStudio fornisce supporto al cliente titolare secondo contratto.",
      "Per dati trattati da NexStudio come titolare (es. contatti dal sito, log di sicurezza propri), le richieste possono essere inviate ai recapiti privacy indicati in questa pagina o nella sezione contatti del sito.",
    ],
  },
  {
    id: 'cookie-tracking',
    title: '11. Cookie, analytics e tracciamenti',
    paragraphs: [
      "Le informazioni su cookie tecnici, eventuali cookie analitici e strumenti di tracciamento sono descritte nella Cookie Policy, da leggere congiuntamente alla presente informativa.",
      "La gestione delle preferenze cookie avviene tramite banner/strumenti dedicati, con possibilita' di revisione successiva delle scelte quando tecnicamente disponibile.",
    ],
  },
  {
    id: 'minori',
    title: '12. Trattamento dati di minori',
    paragraphs: [
      "I servizi NexStudio sono progettati per un'utenza professionale e business. Non sono rivolti intenzionalmente a minori e non viene perseguita la raccolta volontaria di dati di minori al di fuori dei casi strettamente necessari e leciti nel contesto sanitario gestito dal cliente titolare.",
      "Se viene rilevata una raccolta non appropriata di dati riferibili a minori al di fuori delle basi giuridiche consentite, NexStudio adotta le misure necessarie per la cancellazione o la regolarizzazione del trattamento, coordinandosi con il cliente titolare ove necessario.",
    ],
  },
  {
    id: 'aggiornamenti',
    title: '13. Aggiornamenti della policy',
    paragraphs: [
      "NexStudio puo' aggiornare questa informativa per adeguamenti normativi, evoluzione dei servizi, modifiche organizzative o introduzione di nuove funzionalita'.",
      "Le modifiche rilevanti saranno pubblicate su questa pagina con aggiornamento di versione e data. Per i clienti SaaS, ulteriori notifiche possono essere fornite tramite canali contrattuali o in-app, quando previsto.",
    ],
  },
] as const;

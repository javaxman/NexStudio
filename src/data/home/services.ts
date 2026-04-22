/**
 * Servizi (griglia bento).
 * layout: wide = 2 colonne, tall = 2 righe + elenco puntato
 */
export const services = {
  eyebrow: 'I nostri servizi',
  title: 'Implementazione, evoluzione e supporto',
  lead:
    'In NexStudio, il nostro impegno non si esaurisce con la fornitura della licenza software. Il nostro modello di servizio è progettato per garantire che ogni professionista e struttura possa estrarre il massimo valore dalle potenzialità dell’Intelligenza Artificiale integrata in LexAura e MediAura.',
  cards: [
    {
      layout: 'tall' as const,
      /** Sfera geodetica vettoriale (SVG) in basso a destra */
      decoration: 'wireframe-globe' as const,
      title: 'Onboarding e formazione specialistica',
      body:
        'L’adozione di un sistema basato su IA richiede un passaggio metodologico, non solo tecnico. Offriamo programmi di formazione dedicati per team legali e medici, finalizzati a:',
      bullets: [
        'Ottimizzare l’interazione con gli algoritmi di ricerca e sintesi.',
        'Padroneggiare i comandi vocali e l’automazione dei flussi documentali.',
        'Ridurre drasticamente la curva di apprendimento tecnologico.',
      ],
    },
    {
      layout: 'wide' as const,
      title: 'Supporto Tecnico e Consulenza Operativa',
      body:
        'Forniamo un’assistenza continua e di alto profilo per garantire la costante continuità operativa dei vostri sistemi. NexStudio non agisce come un semplice fornitore di supporto tecnico, ma come un partner strategico che affianca lo studio o la struttura sanitaria nell’ottimizzazione dei processi interni attraverso l’uso dei nostri SaaS.',
      callout: {
        title: 'Intervento «Breaking Glass»',
        body:
          'Per le situazioni di estrema urgenza o criticità sistemica, garantiamo protocolli di accesso rapido e intervento prioritario. Questa procedura di emergenza permette di superare i normali flussi di assistenza per risolvere istantaneamente anomalie che potrebbero impattare sulla continuità del servizio, assicurando che il professionista non resti mai isolato dai propri dati o strumenti decisionali.',
      },
    },
    {
      layout: 'default' as const,
      title: 'Estensioni e integrazioni personalizzate',
      body:
        'Sebbene LexAura e MediAura siano prodotti finiti e pronti all’uso, comprendiamo che strutture complesse possano avere esigenze di interconnessione specifiche.',
      bullets: [
        'API integration: supportiamo l’integrazione dei nostri SaaS con sistemi gestionali preesistenti.',
        'Custom modules: progettiamo estensioni su misura che aggiungono funzionalità specifiche all’interno del perimetro dei nostri prodotti, per rispondere a flussi di lavoro unici.',
      ],
    },
    {
      layout: 'default' as const,
      title: 'Aggiornamento e manutenzione evolutiva',
      body:
        'Il mondo dell’IA e delle normative (legali e sanitarie) è in costante mutamento. Il nostro servizio include l’aggiornamento continuo dei motori di analisi, garantendo che il software sia sempre allineato con le ultime tecnologie e le evoluzioni del mercato di riferimento.',
    },
  ],
} as const;

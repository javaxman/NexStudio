/** Sezione hero */
export const hero = {
  badge: 'Restituiamo valore al tuo tempo',
  /** Parte prima dell’evidenziazione nel titolo */
  titleBefore: "Ingegneria del software per l'era dell'",
  /** Segmento con gradiente nel titolo */
  titleHighlight: 'Intelligenza Artificiale',
  titleAfter: '.',
  subtitle:
    'Sviluppiamo soluzioni SaaS ad alta complessità per settori regolamentati.',
  /** Paragrafi introduttivi */
  paragraphs: [
    "Ci occupiamo di progettazione di ecosistemi digitali evoluti. La nostra specializzazione risiede nell'integrazione di modelli di Intelligenza Artificiale all'interno di flussi di lavoro professionali dove precisione, sicurezza e affidabilità sono requisiti non negoziabili.",
    'Il nostro approccio si concentra sulla trasformazione di dati complessi in strumenti operativi fluidi, attraverso lo sviluppo di algoritmi proprietari, interfacce vocali e architetture cloud scalabili.',
  ] as const,
  businessUnitsHeading: 'Le nostre Business Unit:',
  businessUnitsIntro:
    'Operiamo attraverso divisioni specializzate per garantire la massima verticalità e competenza di dominio:',
  businessUnits: [
    {
      name: 'Legal Tech',
      description: "Soluzioni per l'automazione e l'analisi normativa.",
    },
    {
      name: 'Health Tech',
      description: 'Sistemi avanzati per la gestione e l’automazione sanitaria.',
    },
  ] as const,
} as const;

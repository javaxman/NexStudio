/** Sezione prodotti — LexAura (Legal Tech), MediAura (Health Tech) */
export const productsSection = {
  eyebrow: 'Prodotti',
  title: 'LexAura e MediAura',
  lead:
    'Due piattaforme SaaS verticali per professionisti del diritto e della sanità: AI integrata dove precisione e conformità sono fondamentali.',
  items: [
    {
      id: 'lexaura',
      name: 'LexAura',
      badge: 'Legal Tech',
      tagline: 'Il supporto analitico per l’eccellenza legale.',
      focus: 'Gestione dati, memorie e contrattualistica.',
      body:
        'LexAura è la piattaforma SaaS di NexStudio dedicata ai professionisti del diritto. Sviluppata per ottimizzare la gestione di carichi informativi elevati, LexAura utilizza l’Intelligenza Artificiale per l’incrocio dinamico di leggi, sentenze e normative.',
      highlights: [
        {
          title: 'Sintesi normativa',
          text: 'Analisi accelerata dei precedenti e delle fonti.',
        },
        {
          title: 'Drafting assistito',
          text: 'Supporto alla stesura di memorie difensive e contratti complessi.',
        },
        {
          title: 'Workflow integration',
          text: 'Automazione dei processi documentali per lo studio legale moderno.',
        },
      ] as const,
      closing:
        'L’obiettivo di LexAura non è sostituire l’avvocato, ma liberarne il tempo, garantendo una base analitica solida e tempestiva.',
    },
    {
      id: 'mediaura',
      name: 'MediAura',
      badge: 'Health Tech',
      tagline: 'L’automazione intelligente al servizio della medicina.',
      focus: 'Flussi di lavoro, comandi vocali, scalabilità.',
      body:
        'MediAura è il sistema SaaS progettato da NexStudio per abbattere il carico burocratico in ambito sanitario. Dallo studio professionale alla struttura ospedaliera, il software coordina i flussi operativi attraverso un alto grado di automazione e interazione naturale.',
      highlights: [
        {
          title: 'Voice-first interface',
          text: 'Gestione dei flussi e della refertazione tramite comandi vocali avanzati.',
        },
        {
          title: 'Scalabilità operativa',
          text: 'Un’architettura che si adatta alle dimensioni della struttura, dal singolo medico alla gestione di reparti complessi.',
        },
        {
          title: 'Ottimizzazione del flusso',
          text: 'Automazione delle attività di routine per restituire centralità al rapporto medico-paziente.',
        },
      ] as const,
    },
  ] as const,
} as const;

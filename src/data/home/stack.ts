/** Sezione stack — infrastruttura Cloudflare e sicurezza */
export const stackSection = {
  eyebrow: 'Lo stack tecnologico',
  title: 'Infrastruttura e sicurezza',
  lead:
    'In NexStudio, la qualità dell’esperienza utente è inscindibile dalla solidità dell’infrastruttura. Per questo motivo ci affidiamo a partner globali ad alta efficienza che garantiscono i più elevati standard di disponibilità e protezione dei dati.',
  cloudflare: {
    title: 'Ecosistema Cloudflare',
    intro:
      "«Cloudflare punta ad accelerare le prestazioni, garantire la disponibilità delle app e ottimizzare l'esperienza web per gli utenti a livello globale.»",
    points: [
      {
        title: 'Performance senza compromessi',
        body:
          'L’accesso ai nostri servizi è immediato e a bassa latenza in qualsiasi parte del mondo, assicurando fluidità anche durante le operazioni di elaborazione dati più complesse.',
      },
      {
        title: 'Sicurezza Advanced',
        body:
          'Utilizziamo implementazioni di soluzioni di protezione di ultima generazione, tra cui crittografia end-to-end, protezione da attacchi DDoS e Web Application Firewall (WAF). Ogni interazione con i nostri software avviene in un ambiente protetto e isolato.',
      },
      {
        title: 'Compliance e data integrity',
        body:
          'Sfruttiamo le tecnologie di gestione dei dati geografici per garantire che il trattamento delle informazioni sensibili — legali e mediche — avvenga sempre nel pieno rispetto delle normative locali e internazionali sulla privacy e sulla sovranità del dato.',
      },
    ],
  },
  continuity: {
    title: 'Continuità e scalabilità',
    body:
      'Garantiamo una uptime SLA (Service Level Agreement) di livello professionale. La nostra architettura è cloud-native: può scalare istantaneamente per gestire picchi di lavoro o grandi uffici e strutture multi-sede senza mai degradare le prestazioni.',
  },
  /** Loghi stack (`public/logos/`; Simple Icons salvo badge testuale `hl7-fhir.svg`) */
  techSlider: {
    ariaLabel: 'Tecnologie e piattaforme del nostro ecosistema',
    items: [
      {
        name: 'Cloudflare',
        href: 'https://www.cloudflare.com/',
        iconSrc: '/logos/cloudflare.svg',
      },
      {
        name: 'GitHub',
        href: 'https://github.com/',
        iconSrc: '/logos/github.svg',
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        iconSrc: '/logos/docker.svg',
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        iconSrc: '/logos/tailwindcss.svg',
      },
      {
        name: 'Alpine.js',
        href: 'https://alpinejs.dev/',
        iconSrc: '/logos/alpinejs.svg',
      },
      {
        name: 'Astro',
        href: 'https://astro.build/',
        iconSrc: '/logos/astro.svg',
      },
      {
        name: 'Kubernetes',
        href: 'https://kubernetes.io/',
        iconSrc: '/logos/kubernetes.svg',
      },
      {
        name: 'HL7 FHIR',
        href: 'https://www.hl7.org/fhir/',
        iconSrc: '/logos/hl7-fhir.svg',
      },
      {
        name: 'Okta',
        href: 'https://www.okta.com/',
        iconSrc: '/logos/okta.svg',
      },
      {
        name: 'OpenAI',
        href: 'https://openai.com/',
        iconSrc: '/logos/openai.svg',
      },
    ] as const,
  },
  /** Punti chiave che ci distinguono dalla concorrenza (NexStudio, non il partner cloud) */
  whyThisChoice: {
    title: 'Perché NexStudio',
    points: [
      'Verticalità regolamentata: progettiamo per Legal Tech e Health Tech, dove tracciabilità, privacy e continuità operativa sono parte del prodotto, non un accessorio.',
      'IA nei processi professionali: integriamo modelli e automazioni nei flussi reali di studi e strutture, con attenzione a precisione, audit e supervisione umana.',
      'Responsabilità end-to-end: architettura, sviluppo ed evoluzione restano sotto il nostro cappello — meno frammentazione tra fornitori, più chiarezza su priorità, tempi e risultati.',
    ],
  },
  cloudflareBadge: {
    label: 'Ecosistema Cloudflare',
    slogan: '«Aiutiamo a costruire un Internet migliore.»',
    href: 'https://www.cloudflare.com/',
    /** Simple Icons, in `public/logos/cloudflare.svg` */
    iconSrc: '/logos/cloudflare.svg',
    iconAlt: 'Logo Cloudflare',
  },
  awsBadge: {
    label: 'Ecosistema AWS',
    slogan: '«La piattaforma cloud più completa e ampiamente adottata al mondo.»',
    href: 'https://aws.amazon.com/',
    iconSrc: '/logos/aws.svg',
    iconAlt: 'Logo AWS',
  },
  infrastructureCarousel: {
    ariaLabel: 'Partner infrastrutturali e tecnologici di NexStudio',
    items: [
      {
        label: 'Ecosistema Cloudflare',
        slogan: '«Aiutiamo a costruire un Internet migliore.»',
        href: 'https://www.cloudflare.com/',
        iconSrc: '/logos/cloudflare.svg',
        iconAlt: 'Logo Cloudflare',
      },
      {
        label: 'Ecosistema AWS',
        slogan: '«La piattaforma cloud più completa e ampiamente adottata al mondo.»',
        href: 'https://aws.amazon.com/',
        iconSrc: '/logos/aws.svg',
        iconAlt: 'Logo AWS',
      },
      {
        label: 'Ecosistema GitHub',
        slogan: '«Build and ship software on a single, collaborative platform.»',
        href: 'https://github.com/',
        iconSrc: '/logos/github.svg',
        iconAlt: 'Logo GitHub',
      },
      {
        label: 'Ecosistema OpenAI',
        slogan: '«Build with AI that advances your mission.»',
        href: 'https://openai.com/',
        iconSrc: '/logos/openai.svg',
        iconAlt: 'Logo OpenAI',
      },
    ] as const,
  },
} as const;

import type { SupportedLocale } from './navigation';

/** Sezione stack — infrastruttura Cloudflare e sicurezza */
const stackIt = {
  eyebrow: 'Lo stack tecnologico',
  title: 'Infrastruttura e sicurezza',
  lead:
    'In NexStudio, la qualità dell’esperienza utente è inscindibile dalla solidità dell’infrastruttura. Per questo motivo ci affidiamo a partner globali ad alta efficienza che garantiscono i più elevati standard di disponibilità e protezione dei dati.',
  infrastructureHeading: 'Infrastruttura',
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

const stackByLocale = {
  it: stackIt,
  en: {
    ...stackIt,
    eyebrow: 'Technology stack',
    title: 'Infrastructure and security',
    lead:
      'At NexStudio, user experience quality is inseparable from infrastructure resilience. That is why we rely on high-efficiency global partners that provide strong availability and data protection standards.',
    infrastructureHeading: 'Infrastructure',
    cloudflare: {
      ...stackIt.cloudflare,
      title: 'Cloudflare ecosystem',
      intro:
        '"Cloudflare helps accelerate performance, secure app availability, and optimize web experiences globally."',
      points: [
        {
          title: 'Performance without compromise',
          body:
            'Access to our services remains low-latency worldwide, ensuring fluid usage even during complex data-processing operations.',
        },
        {
          title: 'Advanced security',
          body:
            'We apply modern protection layers including end-to-end encryption, DDoS mitigation, and Web Application Firewall controls.',
        },
        {
          title: 'Compliance and data integrity',
          body:
            'We use geographic data-control capabilities to align legal and medical data processing with local and international privacy requirements.',
        },
      ] as const,
    },
    continuity: {
      title: 'Continuity and scalability',
      body:
        'We provide professional-grade SLA uptime. Our cloud-native architecture scales instantly for workload peaks, large offices, and multi-site organizations.',
    },
    whyThisChoice: {
      title: 'Why NexStudio',
      points: [
        'Regulated vertical focus: we design for Legal Tech and Health Tech, where traceability, privacy, and service continuity are core product requirements.',
        'AI in real professional workflows: we embed models and automation with attention to accuracy, auditability, and human oversight.',
        'End-to-end responsibility: architecture, development, and evolution stay under one ownership model for clearer priorities and delivery.',
      ] as const,
    },
    cloudflareBadge: {
      ...stackIt.cloudflareBadge,
      label: 'Cloudflare ecosystem',
      slogan: '"Helping build a better Internet."',
    },
    awsBadge: {
      ...stackIt.awsBadge,
      label: 'AWS ecosystem',
      slogan: '"The world’s most comprehensive and broadly adopted cloud platform."',
    },
    infrastructureCarousel: {
      ...stackIt.infrastructureCarousel,
      ariaLabel: 'NexStudio infrastructure and technology partners',
      items: [
        {
          ...stackIt.infrastructureCarousel.items[0],
          label: 'Cloudflare ecosystem',
          slogan: '"Helping build a better Internet."',
        },
        {
          ...stackIt.infrastructureCarousel.items[1],
          label: 'AWS ecosystem',
          slogan: '"The world’s most comprehensive and broadly adopted cloud platform."',
        },
        {
          ...stackIt.infrastructureCarousel.items[2],
          label: 'GitHub ecosystem',
        },
        {
          ...stackIt.infrastructureCarousel.items[3],
          label: 'OpenAI ecosystem',
        },
      ] as const,
    },
  },
  th: {
    ...stackIt,
    eyebrow: 'เทคโนโลยีสแตก',
    title: 'โครงสร้างพื้นฐานและความปลอดภัย',
    lead:
      'ที่ NexStudio คุณภาพประสบการณ์ผู้ใช้แยกไม่ออกจากความมั่นคงของโครงสร้างพื้นฐาน เราจึงเลือกพาร์ตเนอร์ระดับโลกที่มีประสิทธิภาพสูงเพื่อให้ได้มาตรฐานด้านความพร้อมใช้งานและความปลอดภัยของข้อมูล',
    infrastructureHeading: 'โครงสร้างพื้นฐาน',
    cloudflare: {
      ...stackIt.cloudflare,
      title: 'ระบบนิเวศ Cloudflare',
      intro:
        '"Cloudflare ช่วยเร่งประสิทธิภาพ รับประกันความพร้อมใช้งานของแอป และยกระดับประสบการณ์เว็บทั่วโลก"',
      points: [
        {
          title: 'ประสิทธิภาพที่ไม่ประนีประนอม',
          body:
            'เข้าถึงบริการของเราได้อย่างหน่วงต่ำจากทุกที่ทั่วโลก แม้ในงานประมวลผลข้อมูลที่ซับซ้อน',
        },
        {
          title: 'ความปลอดภัยขั้นสูง',
          body:
            'เราใช้กลไกป้องกันสมัยใหม่ เช่น การเข้ารหัส end-to-end การป้องกัน DDoS และ Web Application Firewall',
        },
        {
          title: 'การปฏิบัติตามข้อกำกับและความถูกต้องของข้อมูล',
          body:
            'เราใช้ความสามารถในการกำกับตำแหน่งข้อมูลเพื่อให้การจัดการข้อมูลอ่อนไหวด้านกฎหมายและการแพทย์สอดคล้องกับข้อกำกับความเป็นส่วนตัว',
        },
      ] as const,
    },
    continuity: {
      title: 'ความต่อเนื่องและการขยายตัว',
      body:
        'เรารับประกัน uptime ระดับมืออาชีพตาม SLA และสถาปัตยกรรม cloud-native ที่ขยายได้ทันทีเมื่อมีโหลดสูง',
    },
    whyThisChoice: {
      title: 'ทำไมต้อง NexStudio',
      points: [
        'เชี่ยวชาญอุตสาหกรรมที่มีข้อกำกับ: Legal Tech และ Health Tech',
        'ผสาน AI เข้ากับงานจริง โดยคำนึงถึงความแม่นยำ การตรวจสอบย้อนหลัง และการกำกับโดยมนุษย์',
        'รับผิดชอบแบบ end-to-end: สถาปัตยกรรม การพัฒนา และการต่อยอดอยู่ภายใต้ทีมเดียว',
      ] as const,
    },
    cloudflareBadge: {
      ...stackIt.cloudflareBadge,
      label: 'ระบบนิเวศ Cloudflare',
      slogan: '"ช่วยกันสร้างอินเทอร์เน็ตที่ดีกว่า"',
    },
    awsBadge: {
      ...stackIt.awsBadge,
      label: 'ระบบนิเวศ AWS',
      slogan: '"แพลตฟอร์มคลาวด์ที่ครอบคลุมและได้รับการใช้งานอย่างกว้างขวางที่สุดในโลก"',
    },
    infrastructureCarousel: {
      ...stackIt.infrastructureCarousel,
      ariaLabel: 'พาร์ตเนอร์โครงสร้างพื้นฐานและเทคโนโลยีของ NexStudio',
      items: [
        {
          ...stackIt.infrastructureCarousel.items[0],
          label: 'ระบบนิเวศ Cloudflare',
          slogan: '"ช่วยกันสร้างอินเทอร์เน็ตที่ดีกว่า"',
        },
        {
          ...stackIt.infrastructureCarousel.items[1],
          label: 'ระบบนิเวศ AWS',
          slogan: '"แพลตฟอร์มคลาวด์ที่ครอบคลุมและได้รับการใช้งานอย่างกว้างขวางที่สุดในโลก"',
        },
        {
          ...stackIt.infrastructureCarousel.items[2],
          label: 'ระบบนิเวศ GitHub',
        },
        {
          ...stackIt.infrastructureCarousel.items[3],
          label: 'ระบบนิเวศ OpenAI',
        },
      ] as const,
    },
  },
} as const;

export const getStackSection = (locale: SupportedLocale) => stackByLocale[locale];

/** Retro-compatibilità: fallback italiano. */
export const stackSection = stackByLocale.it;

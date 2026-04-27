/**
 * Servizi (griglia bento).
 * layout: wide = 2 colonne, tall = 2 righe + elenco puntato
 */
import type { SupportedLocale } from './navigation';

const servicesByLocale = {
  it: {
    eyebrow: 'I nostri servizi',
    title: 'Implementazione, evoluzione e supporto',
    lead:
      'In NexStudio, il nostro impegno non si esaurisce con la fornitura della licenza software. Il nostro modello di servizio è progettato per garantire che ogni professionista e struttura possa estrarre il massimo valore dalle potenzialità dell’Intelligenza Artificiale integrata in LexAura e MediAura.',
    cards: [
      {
        layout: 'tall' as const,
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
  },
  en: {
    eyebrow: 'Our services',
    title: 'Implementation, evolution, and support',
    lead:
      'At NexStudio, our commitment goes beyond software licensing. Our service model helps each professional and organization unlock the full value of AI integrated into LexAura and MediAura.',
    cards: [
      {
        layout: 'tall' as const,
        decoration: 'wireframe-globe' as const,
        title: 'Onboarding and specialist training',
        body:
          'Adopting AI-powered systems is a methodological shift, not only a technical one. We provide dedicated programs for legal and medical teams to:',
        bullets: [
          'Improve interaction with search and summarization algorithms.',
          'Master voice commands and document workflow automation.',
          'Significantly reduce the technology learning curve.',
        ],
      },
      {
        layout: 'wide' as const,
        title: 'Technical support and operational consulting',
        body:
          'We provide continuous, high-level assistance to ensure operational continuity. NexStudio is not just a support vendor, but a strategic partner for legal firms and healthcare organizations.',
        callout: {
          title: '“Breaking Glass” intervention',
          body:
            'For critical urgency or systemic incidents, we offer rapid-access and priority intervention protocols. This emergency procedure bypasses standard support flows to restore continuity as fast as possible.',
        },
      },
      {
        layout: 'default' as const,
        title: 'Custom extensions and integrations',
        body:
          'Although LexAura and MediAura are complete, ready-to-use products, complex organizations may still require specific interoperability needs.',
        bullets: [
          'API integration: we integrate our SaaS with your existing management systems.',
          'Custom modules: we build tailored extensions inside our product perimeter to support unique workflows.',
        ],
      },
      {
        layout: 'default' as const,
        title: 'Evolutionary updates and maintenance',
        body:
          'AI and regulated frameworks evolve continuously. Our service includes ongoing analysis-engine updates to keep software aligned with new technologies and market requirements.',
      },
    ],
  },
  th: {
    eyebrow: 'บริการของเรา',
    title: 'การติดตั้ง การพัฒนา และการสนับสนุน',
    lead:
      'ที่ NexStudio ความมุ่งมั่นของเราไม่ได้จบแค่การให้สิทธิ์ใช้งานซอฟต์แวร์ โมเดลบริการของเราช่วยให้ทีมงานดึงศักยภาพสูงสุดจาก AI ที่ผสานใน LexAura และ MediAura',
    cards: [
      {
        layout: 'tall' as const,
        decoration: 'wireframe-globe' as const,
        title: 'การเริ่มใช้งานและการอบรมเฉพาะทาง',
        body:
          'การนำระบบ AI มาใช้ต้องอาศัยการเปลี่ยนผ่านเชิงวิธีการ ไม่ใช่แค่เทคนิค เรามีโปรแกรมอบรมสำหรับทีมกฎหมายและการแพทย์เพื่อ:',
        bullets: [
          'เพิ่มประสิทธิภาพการใช้งานอัลกอริทึมค้นหาและสรุปผล',
          'ใช้งานคำสั่งเสียงและระบบงานเอกสารอัตโนมัติได้อย่างคล่องตัว',
          'ลดช่วงเวลาเรียนรู้เทคโนโลยีอย่างมีนัยสำคัญ',
        ],
      },
      {
        layout: 'wide' as const,
        title: 'สนับสนุนทางเทคนิคและที่ปรึกษาการปฏิบัติงาน',
        body:
          'เราให้การสนับสนุนอย่างต่อเนื่องเพื่อคงความต่อเนื่องในการดำเนินงาน NexStudio ไม่ได้เป็นเพียงผู้ให้บริการซัพพอร์ต แต่เป็นพาร์ตเนอร์เชิงกลยุทธ์สำหรับองค์กร',
        callout: {
          title: 'การแทรกแซงแบบ “Breaking Glass”',
          body:
            'เมื่อเกิดเหตุเร่งด่วนหรือความผิดปกติระดับวิกฤต เรามีโปรโตคอลเข้าถึงด่วนและจัดลำดับความสำคัญสูงสุด เพื่อแก้ปัญหาได้ทันทีและรักษาความต่อเนื่องของบริการ',
        },
      },
      {
        layout: 'default' as const,
        title: 'ส่วนขยายและการเชื่อมต่อแบบกำหนดเอง',
        body:
          'แม้ LexAura และ MediAura จะพร้อมใช้งานทันที แต่บางองค์กรอาจต้องการการเชื่อมต่อเฉพาะทางกับระบบเดิม',
        bullets: [
          'API integration: เชื่อม SaaS ของเราเข้ากับระบบจัดการที่ใช้อยู่แล้ว',
          'Custom modules: ออกแบบส่วนขยายเฉพาะงานภายในขอบเขตผลิตภัณฑ์ของเรา',
        ],
      },
      {
        layout: 'default' as const,
        title: 'อัปเดตและบำรุงรักษาเชิงพัฒนา',
        body:
          'โลกของ AI และข้อกำกับเปลี่ยนแปลงตลอดเวลา บริการของเรารวมถึงการอัปเดตเอนจินวิเคราะห์อย่างต่อเนื่องเพื่อให้ซอฟต์แวร์ทันสมัยและสอดคล้องบริบทตลาด',
      },
    ],
  },
} as const;

export const getServices = (locale: SupportedLocale) => servicesByLocale[locale];

/** Retro-compatibilità: fallback italiano. */
export const services = servicesByLocale.it;

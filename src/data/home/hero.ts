import type { SupportedLocale } from './navigation';

/** Sezione hero */
const heroByLocale = {
  it: {
    badge: 'Restituiamo valore al tuo tempo',
    titleBefore: "Ingegneria del software per l'era dell'",
    titleHighlight: 'Intelligenza Artificiale',
    titleAfter: '.',
    subtitle:
      'Sviluppiamo soluzioni SaaS ad alta complessità per settori regolamentati.',
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
  },
  en: {
    badge: 'We give your time back',
    titleBefore: "Software engineering for the era of ",
    titleHighlight: 'Artificial Intelligence',
    titleAfter: '.',
    subtitle:
      'We build high-complexity SaaS solutions for regulated industries.',
    paragraphs: [
      'We design advanced digital ecosystems. Our specialization is integrating AI models into professional workflows where accuracy, security, and reliability are non-negotiable requirements.',
      'Our approach turns complex data into smooth operational tools through proprietary algorithms, voice interfaces, and scalable cloud-native architectures.',
    ] as const,
    businessUnitsHeading: 'Our Business Units:',
    businessUnitsIntro:
      'We operate through specialized divisions to ensure deep domain expertise and vertical focus:',
    businessUnits: [
      {
        name: 'Legal Tech',
        description: 'Solutions for legal automation and regulatory analysis.',
      },
      {
        name: 'Health Tech',
        description:
          'Advanced systems for healthcare workflow management and automation.',
      },
    ] as const,
  },
  th: {
    badge: 'คืนคุณค่าให้กับเวลาของคุณ',
    titleBefore: 'วิศวกรรมซอฟต์แวร์สำหรับยุคของ',
    titleHighlight: 'ปัญญาประดิษฐ์',
    titleAfter: '.',
    subtitle: 'เราพัฒนาโซลูชัน SaaS ที่ซับซ้อนสูงสำหรับอุตสาหกรรมที่มีข้อกำกับ',
    paragraphs: [
      'เราออกแบบระบบนิเวศดิจิทัลขั้นสูง โดยเชี่ยวชาญในการผสานโมเดล AI เข้ากับเวิร์กโฟลว์ระดับมืออาชีพที่ต้องการความแม่นยำ ความปลอดภัย และความน่าเชื่อถือ',
      'แนวทางของเราคือเปลี่ยนข้อมูลที่ซับซ้อนให้เป็นเครื่องมือการทำงานที่ลื่นไหล ผ่านอัลกอริทึมเฉพาะทาง อินเทอร์เฟซเสียง และสถาปัตยกรรมคลาวด์ที่ขยายได้',
    ] as const,
    businessUnitsHeading: 'หน่วยธุรกิจของเรา:',
    businessUnitsIntro:
      'เราดำเนินงานผ่านทีมเฉพาะทางเพื่อให้ได้ความเชี่ยวชาญเชิงลึกในแต่ละโดเมน:',
    businessUnits: [
      {
        name: 'Legal Tech',
        description: 'โซลูชันสำหรับงานกฎหมายอัตโนมัติและการวิเคราะห์ข้อกำกับ',
      },
      {
        name: 'Health Tech',
        description: 'ระบบขั้นสูงสำหรับการจัดการและทำงานอัตโนมัติในภาคสุขภาพ',
      },
    ] as const,
  },
} as const;

export const getHero = (locale: SupportedLocale) => heroByLocale[locale];

/** Retro-compatibilità: fallback italiano. */
export const hero = heroByLocale.it;

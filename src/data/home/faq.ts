import type { SupportedLocale } from './navigation';

/** FAQ — domande/risposte allineate a hero, prodotti, servizi e stack */
const faqByLocale = {
  it: {
    eyebrow: 'FAQ',
    title: 'Domande frequenti',
    items: [
      {
        question: 'Che tipo di organizzazioni seguite con LexAura e MediAura?',
        answer:
          'Lavoriamo con studi legali e strutture sanitarie — dal professionista singolo a team e sedi multi‑unità — che gestiscono volumi elevati di informazione e hanno bisogno di strumenti affidabili in ambiti regolamentati. La verticalità su Legal Tech e Health Tech è parte della nostra proposta: meno genericismo, più requisiti operativi, tracciabilità e continuità del servizio.',
      },
      {
        question: 'L’intelligenza artificiale sostituisce avvocati o medici?',
        answer:
          'No. I nostri prodotti sono pensati per integrarsi nei flussi professionali: sintesi, ricerca, drafting assistito, automazione della documentazione e interfacce vocali liberano tempo, ma la decisione finale e la responsabilità restano del professionista. L’obiettivo è ridurre il carico ripetitivo e offrire una base analitica solida, non sostituire il giudizio umano.',
      },
      {
        question: 'Cosa succede dopo l’adozione del software?',
        answer:
          'Il modello di servizio va oltre la licenza: onboarding e formazione specialistica per team legali e sanitari, supporto tecnico e consulenza operativa continuativi, aggiornamento dei motori di analisi e manutenzione evolutiva rispetto a normative e contesto di mercato. Per criticità urgenti sono previsti protocolli di intervento prioritario, così che studi e strutture non restino isolati dai propri strumenti.',
      },
      {
        question: 'Potete collegare LexAura o MediAura ai nostri sistemi già in uso?',
        answer:
          'Sì, quando serve. Oltre ai prodotti standard supportiamo integrazioni tramite API e moduli personalizzati nel perimetro dei nostri SaaS, per collegare gestionali o flussi documentali preesistenti senza reinventare l’intero stack informativo.',
      },
      {
        question: 'Come gestite sicurezza, disponibilità e dati sensibili?',
        answer:
          'Progettiamo su architetture cloud‑native ad alta disponibilità, con attenzione a crittografia, protezione di perimetro (es. WAF, mitigazione DDoS) e continuità operativa. Il trattamento di informazioni legali e sanitarie è affrontato con criteri di integrità dei dati e conformità alle normative applicabili, inclusa la chiarezza su dove risiedono i dati e sui requisiti di due diligence che i settori regolamentati si attendono.',
      },
      {
        question: 'Lavorate solo in loco o anche con clienti in Italia e all’estero?',
        answer:
          'Siamo una software company con base operativa a Bangkok e collaboriamo con clienti a livello internazionale. Workshop e incontri possono essere online o in presenza in base al progetto; supporto e comunicazioni operative in italiano, inglese, tedesco, francese, spagnolo o tailandese, con orari concordati.',
      },
      {
        question: 'Diritto d’uso e proprietà del software: come le regolate?',
        answer:
          'Dipende dal contratto: in genere cediamo l’esclusiva sul deliverable a saldo, con clausole esplicite su componenti open source e librerie di terze parti. Per licenze SaaS, permessi d’uso e responsabilità sono definiti nei termini commerciali e nel contratto quadro.',
      },
      {
        question: 'Qual è il modo più rapido per parlarne con voi?',
        answer:
          'Il punto di ingresso principale è la chat dal pulsante «Chattiamo» in header: prima vedi se il canale è con operatore umano, solo chatbot o misto, poi lasci email (e facoltativamente il nome) per ricevere un link o un codice monouso e aprire la sessione senza perdite di tempo. In chat operatore umano e chatbot collaborano per orientamento iniziale, requisiti e passi successivi. Per il supporto via web ci interfacciamo in italiano, inglese, tedesco, francese, spagnolo o tailandese. Per materiale sensibile useremo sempre i canali concordati in fase di rapporto commerciale. Se ci si sente più a proprio agio usando un form di contatto, in fondo alla homepage nella sezione Contatti trovate il modulo a destra del testo introduttivo.',
      },
    ] as const,
  },
  en: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What organizations do you support with LexAura and MediAura?',
        answer:
          'We work with law firms and healthcare organizations, from solo professionals to multi-site teams, that manage high information volumes and need reliable tools in regulated environments.',
      },
      {
        question: 'Does AI replace lawyers or doctors?',
        answer:
          'No. Our products support professional workflows with summarization, research, assisted drafting, and automation. Final decisions and responsibility always remain with the professional.',
      },
      {
        question: 'What happens after software adoption?',
        answer:
          'Our service model goes beyond licensing: specialist onboarding and training, continuous technical support and consulting, and ongoing engine updates aligned with regulations and market context.',
      },
      {
        question: 'Can you integrate LexAura or MediAura with our existing systems?',
        answer:
          'Yes, when needed. We support API integrations and custom modules within our SaaS perimeter to connect existing management or document flows.',
      },
      {
        question: 'How do you handle security, availability, and sensitive data?',
        answer:
          'We design for high-availability cloud-native architectures, encryption, perimeter protection, and operational continuity, with clear data-governance practices aligned with applicable regulations.',
      },
      {
        question: 'Do you work only locally or also with international clients?',
        answer:
          'We are based in Bangkok and collaborate internationally. Workshops can be remote or on-site depending on the project.',
      },
      {
        question: 'How do you handle software usage rights and ownership?',
        answer:
          'This depends on the contract. In many engagements, exclusive rights on deliverables are transferred after final payment, with explicit clauses for open source and third-party components.',
      },
      {
        question: 'What is the fastest way to talk with your team?',
        answer:
          'The primary entry point is the chat button in the header. You provide your email to receive a one-time link or code, then start the session without delay.',
      },
    ] as const,
  },
  th: {
    eyebrow: 'คำถามที่พบบ่อย',
    title: 'คำถามที่พบบ่อย',
    items: [
      {
        question: 'องค์กรแบบไหนที่เหมาะกับ LexAura และ MediAura?',
        answer:
          'เราทำงานกับสำนักงานกฎหมายและองค์กรสุขภาพ ตั้งแต่ผู้เชี่ยวชาญเดี่ยวไปจนถึงทีมหลายสาขา ที่ต้องจัดการข้อมูลจำนวนมากในบริบทที่มีข้อกำกับสูง',
      },
      {
        question: 'AI จะแทนที่ทนายหรือแพทย์หรือไม่?',
        answer:
          'ไม่ใช่ เป้าหมายของเราคือช่วยงานเชิงวิเคราะห์ งานเอกสาร และเวิร์กโฟลว์ซ้ำ ๆ โดยการตัดสินใจสุดท้ายยังคงเป็นหน้าที่ของผู้เชี่ยวชาญ',
      },
      {
        question: 'หลังเริ่มใช้งานซอฟต์แวร์แล้วจะเกิดอะไรขึ้น?',
        answer:
          'เรามีบริการหลังการใช้งานครบวงจร ทั้ง onboarding การอบรมเฉพาะทาง การสนับสนุนทางเทคนิค และการอัปเดตระบบอย่างต่อเนื่อง',
      },
      {
        question: 'สามารถเชื่อม LexAura หรือ MediAura กับระบบเดิมของเราได้ไหม?',
        answer:
          'ได้ เรารองรับการเชื่อมต่อผ่าน API และโมดูลแบบกำหนดเองภายในขอบเขต SaaS ของเรา',
      },
      {
        question: 'จัดการความปลอดภัย ความพร้อมใช้งาน และข้อมูลอ่อนไหวอย่างไร?',
        answer:
          'เราใช้สถาปัตยกรรมคลาวด์ที่พร้อมใช้งานสูง การเข้ารหัส การป้องกันระดับเครือข่าย และแนวปฏิบัติด้านการกำกับข้อมูลให้สอดคล้องข้อกำกับที่เกี่ยวข้อง',
      },
      {
        question: 'รับงานเฉพาะในพื้นที่หรือรับลูกค้าต่างประเทศด้วย?',
        answer:
          'สำนักงานใหญ่ปฏิบัติการของเราอยู่ที่กรุงเทพฯ และทำงานกับลูกค้าต่างประเทศได้ ทั้งออนไลน์และออนไซต์ตามความเหมาะสมของโครงการ',
      },
      {
        question: 'สิทธิการใช้งานและความเป็นเจ้าของซอฟต์แวร์กำหนดอย่างไร?',
        answer:
          'ขึ้นกับสัญญา โดยทั่วไปจะระบุเงื่อนไขการใช้งาน ความรับผิดชอบ และสิทธิในชิ้นงานอย่างชัดเจน รวมถึงส่วนประกอบโอเพนซอร์สและ third-party',
      },
      {
        question: 'ถ้าต้องการคุยเร็วที่สุดควรติดต่อช่องทางไหน?',
        answer:
          'กดปุ่มแชทบนส่วนหัวเว็บไซต์ ใส่อีเมลเพื่อรับลิงก์หรือโค้ดแบบใช้ครั้งเดียว แล้วเริ่มเซสชันได้ทันที',
      },
    ] as const,
  },
} as const;

export const getFaq = (locale: SupportedLocale) => faqByLocale[locale];

/** Retro-compatibilità: fallback italiano. */
export const faq = faqByLocale.it;

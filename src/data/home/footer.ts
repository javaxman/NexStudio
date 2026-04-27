import type { SupportedLocale } from './navigation';

/** Footer — griglia 4 colonne (link); newsletter in blocco unico sotto, allineata a sinistra */
const footerByLocale = {
  it: {
    brandName: 'NexStudio',
    tagline: 'Ingegneria del software e IA per settori regolamentati.',
    legalLine: 'P.IVA e note legali: da inserire.',
    columnTitles: {
      sections: 'Sezioni',
      legal: 'Normative',
      social: 'Reti sociali',
      company: 'Azienda',
    } as const,
    homeNav: [
      { label: 'Prodotti', href: '/#prodotti' },
      { label: 'Servizi', href: '/#servizi' },
      { label: 'Stack', href: '/#stack' },
      { label: 'FAQ', href: '/#faq' },
    ] as const,
    cookiePreferences: {
      label: 'Impostazioni cookie',
      hint: 'Preferenze di consenso sul tuo browser (non è un testo legale).',
    } as const,
    legalColumnNav: [
      { label: 'Condizioni d’uso', href: '/terms' },
      { label: 'Informativa cookie', href: '/cookies' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Diritti privacy (GDPR)', href: '/gdpr' },
    ] as const,
    socialLinks: [
      { label: 'Facebook', href: '' },
      { label: 'LinkedIn', href: '' },
      { label: 'Twitter / X', href: '' },
      { label: 'GitHub', href: '' },
    ] as const,
    companyNav: [
      { label: 'Chi siamo', href: '/about' },
      { label: 'Codice etico', href: '/codice-etico' },
      { label: 'Modello organizzativo', href: '/modello-organizzativo' },
      { label: 'Dove siamo', href: '/dove-siamo' },
    ] as const,
    newsletter: {
      title: 'Newsletter',
      description: 'Aggiornamenti su prodotti e roadmap.',
      placeholder: 'La tua email',
      buttonLabel: 'Iscriviti',
      actionUrl: '',
      fieldName: 'email',
      successRedirect: '',
      notifySubject: 'Nuova iscrizione newsletter — NexStudio',
    },
    labels: {
      cookieTitle: 'Impostazioni cookie',
      socialPlaceholderTitle: 'URL da configurare in footer.ts',
      companyPlaceholderTitle: 'Collegamento in arrivo',
      newsletterComingSoon:
        'Iscrizione in arrivo: configura l’endpoint nel progetto per attivare il modulo.',
    },
  },
  en: {
    brandName: 'NexStudio',
    tagline: 'Software engineering and AI for regulated industries.',
    legalLine: 'VAT number and legal notes: to be added.',
    columnTitles: {
      sections: 'Sections',
      legal: 'Legal',
      social: 'Social',
      company: 'Company',
    } as const,
    homeNav: [
      { label: 'Products', href: '/#prodotti' },
      { label: 'Services', href: '/#servizi' },
      { label: 'Stack', href: '/#stack' },
      { label: 'FAQ', href: '/#faq' },
    ] as const,
    cookiePreferences: {
      label: 'Cookie settings',
      hint: 'Consent preferences in your browser (this is not a legal document).',
    } as const,
    legalColumnNav: [
      { label: 'Terms of use', href: '/terms' },
      { label: 'Cookie policy', href: '/cookies' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Privacy rights (GDPR)', href: '/gdpr' },
    ] as const,
    socialLinks: [
      { label: 'Facebook', href: '' },
      { label: 'LinkedIn', href: '' },
      { label: 'Twitter / X', href: '' },
      { label: 'GitHub', href: '' },
    ] as const,
    companyNav: [
      { label: 'About us', href: '/about' },
      { label: 'Code of ethics', href: '/codice-etico' },
      { label: 'Organizational model', href: '/modello-organizzativo' },
      { label: 'Where we are', href: '/dove-siamo' },
    ] as const,
    newsletter: {
      title: 'Newsletter',
      description: 'Updates on products and roadmap.',
      placeholder: 'Your email',
      buttonLabel: 'Subscribe',
      actionUrl: '',
      fieldName: 'email',
      successRedirect: '',
      notifySubject: 'New newsletter signup — NexStudio',
    },
    labels: {
      cookieTitle: 'Cookie settings',
      socialPlaceholderTitle: 'URL to configure in footer.ts',
      companyPlaceholderTitle: 'Coming soon',
      newsletterComingSoon:
        'Newsletter signups coming soon: configure the endpoint in the project to enable this form.',
    },
  },
  th: {
    brandName: 'NexStudio',
    tagline: 'วิศวกรรมซอฟต์แวร์และ AI สำหรับอุตสาหกรรมที่มีข้อกำกับ',
    legalLine: 'เลขประจำตัวผู้เสียภาษีและข้อมูลทางกฎหมาย: รอเพิ่มภายหลัง',
    columnTitles: {
      sections: 'ส่วนต่าง ๆ',
      legal: 'กฎหมาย',
      social: 'โซเชียล',
      company: 'บริษัท',
    } as const,
    homeNav: [
      { label: 'ผลิตภัณฑ์', href: '/#prodotti' },
      { label: 'บริการ', href: '/#servizi' },
      { label: 'สแตก', href: '/#stack' },
      { label: 'คำถามที่พบบ่อย', href: '/#faq' },
    ] as const,
    cookiePreferences: {
      label: 'ตั้งค่าคุกกี้',
      hint: 'การตั้งค่าความยินยอมในเบราว์เซอร์ของคุณ (ไม่ใช่เอกสารทางกฎหมาย)',
    } as const,
    legalColumnNav: [
      { label: 'เงื่อนไขการใช้งาน', href: '/terms' },
      { label: 'นโยบายคุกกี้', href: '/cookies' },
      { label: 'ความเป็นส่วนตัว', href: '/privacy' },
      { label: 'สิทธิความเป็นส่วนตัว (GDPR)', href: '/gdpr' },
    ] as const,
    socialLinks: [
      { label: 'Facebook', href: '' },
      { label: 'LinkedIn', href: '' },
      { label: 'Twitter / X', href: '' },
      { label: 'GitHub', href: '' },
    ] as const,
    companyNav: [
      { label: 'เกี่ยวกับเรา', href: '/about' },
      { label: 'จรรยาบรรณ', href: '/codice-etico' },
      { label: 'โมเดลองค์กร', href: '/modello-organizzativo' },
      { label: 'ที่ตั้ง', href: '/dove-siamo' },
    ] as const,
    newsletter: {
      title: 'จดหมายข่าว',
      description: 'อัปเดตเกี่ยวกับผลิตภัณฑ์และโรดแมป',
      placeholder: 'อีเมลของคุณ',
      buttonLabel: 'สมัครรับข่าวสาร',
      actionUrl: '',
      fieldName: 'email',
      successRedirect: '',
      notifySubject: 'มีผู้สมัครจดหมายข่าวใหม่ — NexStudio',
    },
    labels: {
      cookieTitle: 'ตั้งค่าคุกกี้',
      socialPlaceholderTitle: 'ต้องตั้งค่า URL ใน footer.ts',
      companyPlaceholderTitle: 'กำลังจะเปิดใช้งาน',
      newsletterComingSoon:
        'ระบบสมัครจดหมายข่าวกำลังจะเปิดใช้งาน: ตั้งค่า endpoint ในโปรเจกต์เพื่อเปิดฟอร์มนี้',
    },
  },
} as const;

export const getFooter = (locale: SupportedLocale) => footerByLocale[locale];

/** Retro-compatibilità: fallback italiano. */
export const footer = footerByLocale.it;

import { chat } from './chat';

export type SupportedLocale = 'it' | 'en' | 'th';

const navigationByLocale = {
  it: {
    brandName: 'NexStudio',
    items: [
      { label: 'Prodotti', href: '/#prodotti' },
      { label: 'Servizi', href: '/#servizi' },
      { label: 'Stack', href: '/#stack' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contattaci', href: '/#contatti' },
    ] as const,
    cta: {
      label: 'Chattiamo',
      linkTitle: chat.linkTitle,
      ariaLabel:
        'Richiedi accesso alla chat NexStudio: stato operatore e chatbot, identificazione con email (link o codice) prima della sessione.',
    },
    labels: {
      mainNavAria: 'Principale',
      mobileNavAria: 'Navigazione mobile',
      languageSelectorAria: 'Seleziona lingua',
      openMenuAria: 'Apri menu',
    },
  },
  en: {
    brandName: 'NexStudio',
    items: [
      { label: 'Products', href: '/#prodotti' },
      { label: 'Services', href: '/#servizi' },
      { label: 'Stack', href: '/#stack' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/#contatti' },
    ] as const,
    cta: {
      label: 'Let’s chat',
      linkTitle: 'Open NexStudio chat access request.',
      ariaLabel:
        'Request access to NexStudio chat: operator and chatbot availability, email verification link or code before session start.',
    },
    labels: {
      mainNavAria: 'Main navigation',
      mobileNavAria: 'Mobile navigation',
      languageSelectorAria: 'Select language',
      openMenuAria: 'Open menu',
    },
  },
  th: {
    brandName: 'NexStudio',
    items: [
      { label: 'ผลิตภัณฑ์', href: '/#prodotti' },
      { label: 'บริการ', href: '/#servizi' },
      { label: 'สแตก', href: '/#stack' },
      { label: 'คำถามที่พบบ่อย', href: '/#faq' },
      { label: 'ติดต่อเรา', href: '/#contatti' },
    ] as const,
    cta: {
      label: 'เริ่มแชท',
      linkTitle: 'เปิดคำขอเข้าใช้งานแชทของ NexStudio',
      ariaLabel:
        'ขอเข้าใช้งานแชท NexStudio: ตรวจสอบสถานะผู้ดูแลและแชทบอต พร้อมยืนยันตัวตนด้วยอีเมลก่อนเริ่มใช้งาน',
    },
    labels: {
      mainNavAria: 'เมนูหลัก',
      mobileNavAria: 'เมนูบนมือถือ',
      languageSelectorAria: 'เลือกภาษา',
      openMenuAria: 'เปิดเมนู',
    },
  },
} as const;

export const getNavigation = (locale: SupportedLocale) => navigationByLocale[locale];

/** Retro-compatibilità: fallback italiano. */
export const navigation = navigationByLocale.it;

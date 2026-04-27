/** Call-to-action (blocco contatti / chiusura pagina) */
const env = import.meta.env;
const contactActionUrl = (env.PUBLIC_CONTACT_FORM_ACTION_URL ?? '/api/contact').trim();
const contactSuccessRedirect = (env.PUBLIC_CONTACT_FORM_SUCCESS_REDIRECT ?? '').trim();
const contactMailto = (env.PUBLIC_CONTACT_FORM_MAILTO ?? '').trim();
const contactTurnstileSiteKey = (env.PUBLIC_CONTACT_TURNSTILE_SITE_KEY ?? '').trim();

import type { SupportedLocale } from './navigation';

const ctaByLocale = {
  it: {
    eyebrow: 'Contatti',
    titleLine1: 'Automatizza il complesso.',
    titleLine2: 'Velocizza il processo.',
    body:
      'Dai modelli LLM alla distribuzione globale in pochi millisecondi. La directory definitiva per il LegalTech e MedTech. Utilizza il modulo contatto qui a fianco e ti forniremo tutti i chiarimenti che ti servono.',
    contactForm: {
      title: 'Parliamone',
      description:
        'Lascia i tuoi dati e il messaggio: ti risponde il team NexStudio.',
      nameLabel: 'Nome',
      companyLabel: 'Azienda (opzionale)',
      countryLabel: 'Paese',
      departmentLabel: 'Area',
      emailLabel: 'Email',
      messageLabel: 'Scrivi qui il tuo messaggio',
      submitLabel: 'Invia messaggio',
      actionUrl: contactActionUrl,
      successRedirect: contactSuccessRedirect,
      turnstileSiteKey: contactTurnstileSiteKey,
      turnstileLanguage: 'it',
      turnstileHint:
        'Verifica anti-spam: completa il controllo prima di inviare il messaggio.',
      notifySubject: 'Richiesta contatto — sito NexStudio',
      mailto: contactMailto,
      mailtoFallbackSubject: 'Contatto sito',
      mailtoLabels: {
        name: 'Nome',
        company: 'Azienda',
        email: 'Email',
        country: 'Paese',
        department: 'Area',
        defaultDepartment: 'general',
      },
      errors: {
        turnstile: 'Completa il controllo anti-spam prima di inviare il messaggio.',
        config:
          'Configura `contactForm.actionUrl` (Formspree) o `contactForm.mailto` in `src/data/home/cta.ts`.',
      },
      fieldName: 'name',
      fieldCompany: 'company',
      fieldCountry: 'country',
      fieldDepartment: 'department',
      fieldEmail: 'email',
      fieldMessage: 'message',
      departmentOptions: [
        { value: 'info', label: 'Informazioni generali e commerciali' },
        { value: 'privacy', label: 'Privacy' },
        { value: 'careers', label: 'Careers / Collaborazioni' },
      ],
    },
  },
  en: {
    eyebrow: 'Contacts',
    titleLine1: 'Automate complexity.',
    titleLine2: 'Accelerate operations.',
    body:
      'From LLM models to global distribution in milliseconds. Use the contact form and our team will provide all the details you need.',
    contactForm: {
      title: 'Let’s talk',
      description: 'Share your details and message: the NexStudio team will reply.',
      nameLabel: 'Name',
      companyLabel: 'Company (optional)',
      countryLabel: 'Country',
      departmentLabel: 'Area',
      emailLabel: 'Email',
      messageLabel: 'Write your message',
      submitLabel: 'Send message',
      actionUrl: contactActionUrl,
      successRedirect: contactSuccessRedirect,
      turnstileSiteKey: contactTurnstileSiteKey,
      turnstileLanguage: 'en',
      turnstileHint:
        'Anti-spam verification: complete the challenge before sending your message.',
      notifySubject: 'Contact request — NexStudio website',
      mailto: contactMailto,
      mailtoFallbackSubject: 'Website contact',
      mailtoLabels: {
        name: 'Name',
        company: 'Company',
        email: 'Email',
        country: 'Country',
        department: 'Area',
        defaultDepartment: 'general',
      },
      errors: {
        turnstile: 'Complete the anti-spam check before sending your message.',
        config:
          'Configure `contactForm.actionUrl` (Formspree) or `contactForm.mailto` in `src/data/home/cta.ts`.',
      },
      fieldName: 'name',
      fieldCompany: 'company',
      fieldCountry: 'country',
      fieldDepartment: 'department',
      fieldEmail: 'email',
      fieldMessage: 'message',
      departmentOptions: [
        { value: 'info', label: 'General and commercial information' },
        { value: 'privacy', label: 'Privacy' },
        { value: 'careers', label: 'Careers / Collaborations' },
      ],
    },
  },
  th: {
    eyebrow: 'ติดต่อ',
    titleLine1: 'ทำงานซับซ้อนให้อัตโนมัติ',
    titleLine2: 'เร่งความเร็วกระบวนการ',
    body:
      'จากโมเดล LLM สู่การกระจายระบบระดับโลกภายในไม่กี่มิลลิวินาที ใช้ฟอร์มติดต่อด้านข้าง แล้วทีม NexStudio จะตอบกลับพร้อมข้อมูลที่คุณต้องการ',
    contactForm: {
      title: 'คุยกับเรา',
      description: 'กรอกข้อมูลและข้อความ แล้วทีม NexStudio จะติดต่อกลับ',
      nameLabel: 'ชื่อ',
      companyLabel: 'บริษัท (ไม่บังคับ)',
      countryLabel: 'ประเทศ',
      departmentLabel: 'แผนก',
      emailLabel: 'อีเมล',
      messageLabel: 'พิมพ์ข้อความของคุณ',
      submitLabel: 'ส่งข้อความ',
      actionUrl: contactActionUrl,
      successRedirect: contactSuccessRedirect,
      turnstileSiteKey: contactTurnstileSiteKey,
      turnstileLanguage: 'th',
      turnstileHint: 'การยืนยันป้องกันสแปม: กรุณาทำขั้นตอนให้เสร็จก่อนส่งข้อความ',
      notifySubject: 'คำขอติดต่อ — เว็บไซต์ NexStudio',
      mailto: contactMailto,
      mailtoFallbackSubject: 'ติดต่อจากเว็บไซต์',
      mailtoLabels: {
        name: 'ชื่อ',
        company: 'บริษัท',
        email: 'อีเมล',
        country: 'ประเทศ',
        department: 'แผนก',
        defaultDepartment: 'general',
      },
      errors: {
        turnstile: 'กรุณายืนยันการป้องกันสแปมก่อนส่งข้อความ',
        config:
          'กรุณาตั้งค่า `contactForm.actionUrl` (Formspree) หรือ `contactForm.mailto` ใน `src/data/home/cta.ts`',
      },
      fieldName: 'name',
      fieldCompany: 'company',
      fieldCountry: 'country',
      fieldDepartment: 'department',
      fieldEmail: 'email',
      fieldMessage: 'message',
      departmentOptions: [
        { value: 'info', label: 'ข้อมูลทั่วไปและเชิงพาณิชย์' },
        { value: 'privacy', label: 'ความเป็นส่วนตัว' },
        { value: 'careers', label: 'Careers / Collaborations' },
      ],
    },
  },
} as const;

export const getCta = (locale: SupportedLocale) => ctaByLocale[locale];

/** Retro-compatibilità: fallback italiano. */
export const cta = ctaByLocale.it;

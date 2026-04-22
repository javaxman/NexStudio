import { chat } from './chat';

/** Header — CTA unico: ingresso chat live (config in `chat.ts`) */
export const navigation = {
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
} as const;

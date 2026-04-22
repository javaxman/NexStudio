/**
 * Consenso cookie — NexStudio CMP (dimostrativo / produzione light).
 * Allineare `policyVersion` quando cambiano categorie o testi legali rilevanti.
 */
export const cookieConsentMeta = {
  storageKey: 'nexstudio.cookieConsent',
  policyVersion: '1.0',
} as const;

export type CookieCategoryId =
  | 'necessary'
  | 'preferences'
  | 'analytics'
  | 'marketing';

export const cookieCategories = [
  {
    id: 'necessary' as const,
    label: 'Strettamente necessari',
    description:
      'Memorizzazione delle preferenze di consenso, sicurezza e funzioni indispensabili al sito. Non possono essere disattivati dal pannello.',
    required: true,
  },
  {
    id: 'preferences' as const,
    label: 'Preferenze e funzionalità',
    description:
      'Ricordare impostazioni opzionali (es. lingua, tema) se introdotte in futuro.',
    required: false,
  },
  {
    id: 'analytics' as const,
    label: 'Misurazione e statistica',
    description:
      'Cookie o SDK per capire come viene usato il sito (es. analytics), solo se attivati dal codice dopo consenso.',
    required: false,
  },
  {
    id: 'marketing' as const,
    label: 'Marketing e profilazione leggera',
    description:
      'Strumenti pubblicitari, remarketing o pixel social, solo se collegati e dopo consenso esplicito.',
    required: false,
  },
] as const;

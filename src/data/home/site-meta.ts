import type { SupportedLocale } from './navigation';

/** Meta pagina principale — usato da BaseLayout */
const siteMetaByLocale = {
  it: {
    title: 'NexStudio — Ingegneria del software e IA per settori regolamentati',
    description:
      'NexStudio: software company con sede a Bangkok. SaaS ad alta complessità, integrazione di IA in flussi professionali, Legal Tech e Health Tech.',
  },
  en: {
    title: 'NexStudio — Software engineering and AI for regulated industries',
    description:
      'NexStudio is a software company based in Bangkok. We build high-complexity SaaS products and integrate AI into professional workflows across Legal Tech and Health Tech.',
  },
  th: {
    title: 'NexStudio — วิศวกรรมซอฟต์แวร์และ AI สำหรับอุตสาหกรรมที่มีข้อกำกับ',
    description:
      'NexStudio คือบริษัทซอฟต์แวร์ในกรุงเทพฯ พัฒนา SaaS ความซับซ้อนสูง และผสาน AI เข้ากับเวิร์กโฟลว์ระดับมืออาชีพในสาย Legal Tech และ Health Tech',
  },
} as const;

export const getSiteMeta = (locale: SupportedLocale) => siteMetaByLocale[locale];

/** Retro-compatibilità: fallback italiano. */
export const siteMeta = siteMetaByLocale.it;

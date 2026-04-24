// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import alpinejs from '@astrojs/alpinejs';

/**
 * Mitiga race su richieste SSR parallele durante l’ottimizzazione dipendenze
 * (Astro + Cloudflare + Vite 7: file mancanti sotto `node_modules/.vite/deps_*`).
 * Se l’errore persiste: `npm run dev:fresh` (cancella la cache Vite e riavvia).
 *
 * @returns {import('vite').Plugin}
 */
function viteSsrOptimizeIgnoreOutdated() {
  return {
    name: 'vite-ssr-optimize-ignore-outdated',
    enforce: /** @type {'post'} */ ('post'),
    /**
     * @param {string} name
     */
    configEnvironment(name) {
      if (name === 'astro' || name === 'ssr' || name === 'prerender') {
        return {
          optimizeDeps: {
            ignoreOutdatedRequests: true,
          },
        };
      }
    },
  };
}

// https://astro.build/config
export default defineConfig({
  /** Usato da Astro per URL assoluti (es. sitemap). Imposta il dominio di produzione. */
  site: 'https://nexstudio.ai',

  output: 'server', // per il deployment su Cloudflare Pages

  vite: {
    plugins: [tailwindcss(), viteSsrOptimizeIgnoreOutdated()],
  },

  adapter: cloudflare(),
  integrations: [alpinejs()],
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en', 'th'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
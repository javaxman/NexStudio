// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import alpinejs from '@astrojs/alpinejs';

/**
 * Mitiga race su richieste SSR parallele durante l’ottimizzazione dipendenze
 * (Astro + Cloudflare + Vite 7: file mancanti sotto `node_modules/.vite/deps_*`).
 * Se l’errore persiste: `npm run dev:fresh` (cancella la cache Vite e riavvia).
 */
function viteSsrOptimizeIgnoreOutdated() {
  return {
    name: 'vite-ssr-optimize-ignore-outdated',
    enforce: 'post',
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
  // site: 'https://www.tuodominio.com',

  vite: {
    plugins: [tailwindcss(), viteSsrOptimizeIgnoreOutdated()],
  },

  adapter: cloudflare(),
  integrations: [alpinejs()],
});
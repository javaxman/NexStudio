# NexStudio Website Runbook

Sito istituzionale NexStudio basato su Astro, con deploy su Cloudflare e form contatti protetto da Turnstile.

## Obiettivo del repository

- Presentazione aziendale e servizi (homepage e pagine legali).
- Entry point unico per richieste commerciali e supporto.
- Base pronta per contenuti multilingua IT/EN/TH.
- Pipeline di deploy stabile su Cloudflare.

## Stack tecnico

- Astro + Tailwind CSS
- Adapter Cloudflare (`@astrojs/cloudflare`)
- Sitemap (`@astrojs/sitemap`)
- Form backend su endpoint `/api/contact`
- Turnstile + Resend per anti-spam e invio email

## Struttura essenziale

- `src/pages/`: pagine pubbliche e route API (`src/pages/api/contact.ts`)
- `src/components/`: componenti UI condivisi
- `src/data/`: contenuti testuali e configurazioni pagine
- `public/`: asset statici (loghi, immagini, robots)
- `.env.example`: variabili locali di riferimento

## Prerequisiti

- Node.js 20+
- npm 10+
- Account Cloudflare (Pages/Workers + Turnstile)
- Account Resend (API key + sender verificato)

## Avvio locale

1. Installazione dipendenze:
   - `npm install`
2. Copia variabili di ambiente:
   - copia `.env.example` in `.env`
3. Avvio sviluppo:
   - `npm run dev`
4. Se Vite resta in cache incoerente:
   - `npm run dev:fresh`

## Comandi utili

- `npm run dev`: sviluppo locale
- `npm run dev:fresh`: reset cache `.vite` e `.astro` + avvio dev server
- `npm run build`: build produzione
- `npm run preview`: preview locale della build
- `npm run deploy:cf`: build + deploy con wrangler su output Astro

## Configurazione contatti

Variabili pubbliche (frontend):

- `PUBLIC_CONTACT_FORM_ACTION_URL` (default consigliato: `/api/contact`)
- `PUBLIC_CONTACT_FORM_SUCCESS_REDIRECT` (URL assoluto della pagina post-submit)
- `PUBLIC_CONTACT_FORM_MAILTO` (fallback se action URL non disponibile)
- `PUBLIC_CONTACT_TURNSTILE_SITE_KEY`

Variabili server (Cloudflare/local):

- `CONTACT_FORM_MODE` (`dev` oppure `live`)
- `CONTACT_FORM_RESEND_API_KEY`
- `CONTACT_FORM_FROM_EMAIL` (consigliato: `no-reply@nexstudio.ai`)
- `CONTACT_FORM_TO_EMAIL` (default destinatario, es. `info@nexstudio.ai`)
- `CONTACT_FORM_TO_EMAIL_INFO` (opzionale, override esplicito per area "info")
- `CONTACT_FORM_TO_EMAIL_PRIVACY`
- `CONTACT_FORM_TO_EMAIL_CAREERS`
- `CONTACT_TURNSTILE_SECRET_KEY`

Comportamento:

- `dev`: accetta submit e scrive payload nei log (senza invio reale)
- `live`: valida Turnstile e invia email via Resend

Routing pubblico consigliato (portale vetrina):

- `info`: informazioni generali/commerciali
- `privacy`: richieste privacy e diritti interessato
- `careers`: candidature e collaborazioni

Indirizzi consigliati portale:

- `info@nexstudio.ai`
- `privacy@nexstudio.ai`
- `careers@nexstudio.ai`
- `no-reply@nexstudio.ai` (solo invio comunicazioni/newsletter, non destinazione inbound)

## Deploy Cloudflare

Impostazioni consigliate:

- Build command: `npm run build`
- Deploy command: `npm run deploy:cf`

Questa configurazione evita errori tipo:
`The entry-point file at "@astrojs/cloudflare/entrypoints/server" was not found.`

## Dominio e sicurezza

- Dominio ufficiale: `https://nexstudio.ai`
- Hostname Turnstile da mantenere allineati:
  - `nexstudio.ai`
  - `www.nexstudio.ai` (se usato)
  - `localhost` (test locale)
- Accesso pre-go-live gestito con Cloudflare Zero Trust Access

## Stato operativo attuale

- Issue #1 (contact form live): implementata
- Issue #2 (anti-spam Turnstile): implementata
- Issue #3 (SEO base): implementata (sitemap, robots, canonical/OG/Twitter)
- Issue #4: in avanzamento (contenuti non placeholder)
- Issue #5: da completare (localizzazione reale IT/EN/TH)

## Note operative

- Per modifiche non minori usare branch dedicato (`feat/*`, `fix/*`) e merge su `main` dopo verifica.
- Evitare commit su `main` per attivita complesse.
- Rigenerare eventuali API key esposte e aggiornare subito i secret su Cloudflare.

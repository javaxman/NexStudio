# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Cloudflare deploy notes

If you deploy with Wrangler in CI/Cloudflare, build first and deploy using Astro's generated Worker config:

- Build command: `npm run build`
- Deploy command: `npm run deploy:cf`

This avoids entrypoint errors like `@astrojs/cloudflare/entrypoints/server` not found.

## Contact form configuration

Set these variables for the website contact form.

Public (frontend):

- `PUBLIC_CONTACT_FORM_ACTION_URL` (default `/api/contact`)
- `PUBLIC_CONTACT_FORM_SUCCESS_REDIRECT` (absolute URL for `_next`)
- `PUBLIC_CONTACT_FORM_MAILTO` (fallback only if `ACTION_URL` is empty)
- `PUBLIC_CONTACT_TURNSTILE_SITE_KEY`

Server-side (Cloudflare runtime / local `.env`):

- `CONTACT_FORM_MODE` (`dev` or `live`)
- `CONTACT_FORM_RESEND_API_KEY`
- `CONTACT_FORM_FROM_EMAIL` (verified sender in Resend, recommended `no-reply@nexstudio.com`)
- `CONTACT_FORM_TO_EMAIL` (default recipient inbox or alias, recommended `info@nexstudio.com`)
- `CONTACT_FORM_TO_EMAIL_SUPPORT`
- `CONTACT_FORM_TO_EMAIL_PRIVACY`
- `CONTACT_FORM_TO_EMAIL_SECURITY`
- `CONTACT_FORM_TO_EMAIL_ETHICS`
- `CONTACT_FORM_TO_EMAIL_LEGAL`
- `CONTACT_FORM_TO_EMAIL_HR`
- `CONTACT_TURNSTILE_SECRET_KEY`

Mode behavior:

- `dev`: accepts form and logs payload server-side (no real email send)
- `live`: verifies Turnstile (if secret configured) and sends via Resend API

Department routing:

- the contact form includes a department selector
- if a department-specific env is set, the email is routed to that recipient
- otherwise it falls back to `CONTACT_FORM_TO_EMAIL`

Suggested operational use:

- `info@...` for prospects and generic clarifications (non-clients)
- `support@...` for existing customers
- `no-reply@...` as sender for newsletters and automated communications

Copy `.env.example` to `.env` for local development and configure the same keys in Cloudflare Pages/Workers for production.

## Production domain

- Official domain: `https://nexstudio.ai`
- Keep Turnstile widget hostnames aligned with:
  - `nexstudio.ai`
  - `www.nexstudio.ai` (if used)
  - `localhost` (for local testing)

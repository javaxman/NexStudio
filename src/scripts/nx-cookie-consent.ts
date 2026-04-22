type CategoryId = 'necessary' | 'preferences' | 'analytics' | 'marketing';

interface CcConfig {
  storageKey: string;
  policyVersion: string;
  categories: readonly { id: CategoryId; required: boolean }[];
}

interface ConsentPayload {
  policyVersion: string;
  updatedAt: string;
  categories: Record<CategoryId, boolean>;
}

const EVENT_NAME = 'nexstudio:cookie-consent';
const PANEL_ID = 'nx-cc-dialog';

/** Chrome può usare come `target` un nodo `#text` dentro al `<button>` */
function eventTargetElement(e: Event): Element | null {
  const t = e.target;
  if (t instanceof Element) return t;
  if (t instanceof Text) return t.parentElement;
  return null;
}

function panelRoot(): HTMLElement | null {
  return document.getElementById(PANEL_ID);
}

function isPanelOpen(): boolean {
  const el = panelRoot();
  return Boolean(el && !el.hasAttribute('hidden'));
}

function closeConsentPanel(): void {
  const el = panelRoot();
  if (!el) return;
  el.setAttribute('hidden', '');
  el.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('overflow-hidden');
}

function openConsentPanel(): void {
  const el = panelRoot();
  if (!el) return;
  el.removeAttribute('hidden');
  el.setAttribute('aria-hidden', 'false');
  document.body.classList.add('overflow-hidden');
}

function defaultCategories(cfg: CcConfig): Record<CategoryId, boolean> {
  const out = {} as Record<CategoryId, boolean>;
  for (const c of cfg.categories) {
    out[c.id] = c.required ? true : false;
  }
  return out;
}

function parsePayload(raw: string | null, cfg: CcConfig): ConsentPayload | null {
  if (!raw) return null;
  try {
    const v = JSON.parse(raw) as Partial<ConsentPayload>;
    if (!v || typeof v !== 'object') return null;
    if (v.policyVersion !== cfg.policyVersion) return null;
    if (typeof v.updatedAt !== 'string') return null;
    if (!v.categories || typeof v.categories !== 'object') return null;
    const cats = { ...defaultCategories(cfg) };
    for (const c of cfg.categories) {
      if (typeof v.categories[c.id] === 'boolean') {
        cats[c.id] = c.required ? true : Boolean(v.categories[c.id]);
      }
    }
    return { policyVersion: cfg.policyVersion, updatedAt: v.updatedAt, categories: cats };
  } catch {
    return null;
  }
}

function readConfig(): CcConfig {
  const el = document.getElementById('nx-cc-model');
  const raw = el?.textContent?.trim();
  if (!raw) {
    return {
      storageKey: 'nexstudio.cookieConsent',
      policyVersion: '1.0',
      categories: [
        { id: 'necessary', required: true },
        { id: 'preferences', required: false },
        { id: 'analytics', required: false },
        { id: 'marketing', required: false },
      ],
    };
  }
  return JSON.parse(raw) as CcConfig;
}

function save(cfg: CcConfig, categories: Record<CategoryId, boolean>): ConsentPayload {
  const payload: ConsentPayload = {
    policyVersion: cfg.policyVersion,
    updatedAt: new Date().toISOString(),
    categories: { ...categories },
  };
  for (const c of cfg.categories) {
    if (c.required) payload.categories[c.id] = true;
  }
  try {
    localStorage.setItem(cfg.storageKey, JSON.stringify(payload));
  } catch {
    /* ignore quota / private mode */
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: payload }));
  return payload;
}

function getStored(cfg: CcConfig): ConsentPayload | null {
  try {
    return parsePayload(localStorage.getItem(cfg.storageKey), cfg);
  } catch {
    return null;
  }
}

let nxCcDocCapture: ((e: MouseEvent) => void) | undefined;

function bind(): void {
  const cfg = readConfig();
  const banner = document.getElementById('nx-cc-banner');
  const root = panelRoot();
  if (!banner || !root) return;

  closeConsentPanel();

  function readForm(): Record<CategoryId, boolean> {
    const d = panelRoot();
    const base = defaultCategories(cfg);
    base.preferences = Boolean(d?.querySelector<HTMLInputElement>('[data-nx-cc-cat="preferences"]')?.checked);
    base.analytics = Boolean(d?.querySelector<HTMLInputElement>('[data-nx-cc-cat="analytics"]')?.checked);
    base.marketing = Boolean(d?.querySelector<HTMLInputElement>('[data-nx-cc-cat="marketing"]')?.checked);
    return base;
  }

  function writeForm(cats: Record<CategoryId, boolean>) {
    const d = panelRoot();
    const p = d?.querySelector<HTMLInputElement>('[data-nx-cc-cat="preferences"]');
    const a = d?.querySelector<HTMLInputElement>('[data-nx-cc-cat="analytics"]');
    const m = d?.querySelector<HTMLInputElement>('[data-nx-cc-cat="marketing"]');
    if (p) p.checked = cats.preferences;
    if (a) a.checked = cats.analytics;
    if (m) m.checked = cats.marketing;
  }

  function hideBanner() {
    banner.setAttribute('hidden', '');
    banner.setAttribute('aria-hidden', 'true');
  }

  function showBanner() {
    banner.removeAttribute('hidden');
    banner.setAttribute('aria-hidden', 'false');
  }

  function applyFromStorage() {
    const stored = getStored(cfg);
    if (stored) {
      writeForm(stored.categories);
      hideBanner();
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: stored }));
    } else {
      writeForm(defaultCategories(cfg));
      showBanner();
    }
    closeConsentPanel();
  }

  function persistAndClose(cats: Record<CategoryId, boolean>) {
    save(cfg, cats);
    hideBanner();
    closeConsentPanel();
  }

  banner.querySelector('[data-nx-cc-reject]')?.addEventListener('click', () => {
    persistAndClose(defaultCategories(cfg));
  });

  banner.querySelector('[data-nx-cc-accept]')?.addEventListener('click', () => {
    const cats = defaultCategories(cfg);
    for (const c of cfg.categories) {
      if (!c.required) cats[c.id] = true;
    }
    persistAndClose(cats);
  });

  banner.querySelector('[data-nx-cc-customize]')?.addEventListener('click', () => {
    const stored = getStored(cfg);
    writeForm(stored?.categories ?? defaultCategories(cfg));
    openConsentPanel();
  });

  const onDocClickCapture = (e: MouseEvent) => {
    if (!isPanelOpen()) return;
    const d = panelRoot();
    if (!d) return;
    const el = eventTargetElement(e);
    if (!el || !d.contains(el)) return;

    if (el.closest('[data-nx-cc-save]')) {
      e.preventDefault();
      e.stopPropagation();
      persistAndClose(readForm());
      return;
    }
    if (el.closest('[data-nx-cc-cancel]')) {
      e.preventDefault();
      e.stopPropagation();
      closeConsentPanel();
      return;
    }
    if (!el.closest('[data-nx-cc-panel]')) {
      e.preventDefault();
      e.stopPropagation();
      closeConsentPanel();
    }
  };

  if (nxCcDocCapture) {
    document.removeEventListener('click', nxCcDocCapture, true);
  }
  nxCcDocCapture = onDocClickCapture;
  document.addEventListener('click', nxCcDocCapture, true);

  document.querySelectorAll<HTMLElement>('[data-nx-cc-open]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const stored = getStored(cfg);
      writeForm(stored?.categories ?? defaultCategories(cfg));
      openConsentPanel();
    });
  });

  applyFromStorage();

  (window as unknown as { NexStudioCookieConsent?: unknown }).NexStudioCookieConsent = {
    getConsent: () => getStored(cfg),
    openPreferences: () => {
      const stored = getStored(cfg);
      writeForm(stored?.categories ?? defaultCategories(cfg));
      openConsentPanel();
    },
    acceptAll: () => {
      const cats = defaultCategories(cfg);
      for (const c of cfg.categories) {
        if (!c.required) cats[c.id] = true;
      }
      persistAndClose(cats);
    },
    rejectOptional: () => {
      persistAndClose(defaultCategories(cfg));
    },
  };
}

if (typeof document !== 'undefined') {
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) closeConsentPanel();
  });

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;
    if (!isPanelOpen()) return;
    e.preventDefault();
    closeConsentPanel();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind, { once: true });
  } else {
    bind();
  }
}

/**
 * Home: evidenzia in bianco il link del menu che corrisponde alla sezione in vista.
 * `scrollPaddingTop` e l’altezza header hanno stesso valore. Lo spy usa +4px
 * (SPY_VIEWPORT_FUDGE_PX) così il collegamento attivo segue l’inizio sezione
 * a schermo, senza dover forzare altro scroll a mano.
 */
const SECTION_IDS = ['prodotti', 'servizi', 'stack', 'faq', 'contatti'] as const;
let headerOffset = 80;
/** Soglia leggermente sotto l’inizio reale sezione, così il link si accende in linea con lo sguardo. */
const SPY_VIEWPORT_FUDGE_PX = 4;

function documentTopY(el: Element): number {
  const { top } = el.getBoundingClientRect();
  return top + window.scrollY;
}

function getActiveSectionId(): string | null {
  // y = scrollY + (header reale) + leggera tolleranza: l’inizio sezione attraverso
  // l’orizzonte “link attivo” un poco prima del minimo in px.
  const y = window.scrollY + headerOffset + SPY_VIEWPORT_FUDGE_PX;
  let active: string | null = null;
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (documentTopY(el) <= y) active = id;
  }
  // Fuori focus dalla CTA: quando entra in vista il footer, non evidenziare Contattaci.
  if (active === 'contatti') {
    const siteFooter = document.getElementById('site-footer');
    if (siteFooter) {
      const { top: footerTop } = siteFooter.getBoundingClientRect();
      if (footerTop < window.innerHeight) {
        active = null;
      }
    }
  }
  return active;
}

function applyActive(): void {
  const active = getActiveSectionId();
  document.querySelectorAll<HTMLAnchorElement>('a[data-section]').forEach((a) => {
    const id = a.dataset.section;
    const on = Boolean(id && id === active);
    a.dataset.navActive = on ? 'true' : 'false';
    if (on) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
}

let scheduled = false;
function onScroll(): void {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    applyActive();
  });
}

function measureStickyBarHeight(): number {
  const header = document.querySelector<HTMLElement>('header');
  if (!header) return headerOffset;
  // Riga fissa o, se il menu mobile è aperto, pannello incluso: deve coincidere con
  // l’ingombro reale sotto al quale il main può iniziare.
  return Math.round(header.getBoundingClientRect().height);
}

function measureHeaderAndSync(): void {
  headerOffset = measureStickyBarHeight();
  if (headerOffset > 0) {
    document.documentElement.style.scrollPaddingTop = `${headerOffset}px`;
  }
  applyActive();
}

function bind(): void {
  const path = window.location.pathname;
  if (path !== '/' && path !== '/index.html') return;

  const header = document.querySelector('header');
  measureHeaderAndSync();
  const reflow = () => {
    requestAnimationFrame(() => {
      measureHeaderAndSync();
    });
  };
  reflow();
  if (header && 'ResizeObserver' in window) {
    new ResizeObserver(() => {
      reflow();
    }).observe(header);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', reflow, { passive: true });
  window.addEventListener('hashchange', () => {
    reflow();
  });
  window.addEventListener('load', reflow, { passive: true });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind, { once: true });
  } else {
    bind();
  }
}

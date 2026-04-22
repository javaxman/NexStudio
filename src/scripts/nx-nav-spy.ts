/**
 * Home: evidenzia in bianco il link del menu che corrisponde alla sezione in vista.
 */
const SECTION_IDS = ['prodotti', 'servizi', 'stack', 'faq', 'contatti'] as const;
const HEADER_OFFSET = 88;

function getActiveSectionId(): string | null {
  const y = window.scrollY + HEADER_OFFSET;
  let active: string | null = null;
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.offsetTop <= y) active = id;
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

function bind(): void {
  const path = window.location.pathname;
  if (path !== '/' && path !== '/index.html') return;

  applyActive();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('hashchange', applyActive);
  window.addEventListener('load', applyActive);
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind, { once: true });
  } else {
    bind();
  }
}

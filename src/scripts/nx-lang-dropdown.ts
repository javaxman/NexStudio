function bindLanguageDropdown(): void {
  const dropdowns = Array.from(
    document.querySelectorAll<HTMLDetailsElement>('details[data-lang-dropdown]'),
  );
  if (!dropdowns.length) return;

  document.addEventListener('click', (event) => {
    const target = event.target as Node | null;
    dropdowns.forEach((dd) => {
      if (!dd.open) return;
      if (target && dd.contains(target)) return;
      dd.open = false;
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    dropdowns.forEach((dd) => {
      dd.open = false;
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindLanguageDropdown, {
      once: true,
    });
  } else {
    bindLanguageDropdown();
  }
}

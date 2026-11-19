/* AKINI language registry and shared homepage language switch.
   Only languages with real, published pages are enabled. */
(() => {
  'use strict';
  const languages = [
    { code: 'bg', name: 'Български', locale: 'bg-BG', path: 'index-bg.html', enabled: true },
    { code: 'hr', name: 'Hrvatski', locale: 'hr-HR', path: 'index-hr.html', enabled: true },
    { code: 'cs', name: 'Čeština', locale: 'cs-CZ', path: 'index-cs.html', enabled: true },
    { code: 'da', name: 'Dansk', locale: 'da-DK', path: 'index-da.html', enabled: true },
    { code: 'nl', name: 'Nederlands', locale: 'nl-NL', path: 'nl', enabled: false },
    { code: 'en', name: 'English', locale: 'en', path: '/', enabled: true },
    { code: 'et', name: 'Eesti', locale: 'et-EE', path: 'et', enabled: false },
    { code: 'fi', name: 'Suomi', locale: 'fi-FI', path: 'fi', enabled: false },
    { code: 'fr', name: 'Français', locale: 'fr-FR', path: 'fr', enabled: false },
    { code: 'de', name: 'Deutsch', locale: 'de-DE', path: 'de', enabled: false },
    { code: 'el', name: 'Ελληνικά', locale: 'el-GR', path: 'el', enabled: false },
    { code: 'hu', name: 'Magyar', locale: 'hu-HU', path: 'hu', enabled: false },
    { code: 'ga', name: 'Gaeilge', locale: 'ga-IE', path: 'ga', enabled: false },
    { code: 'it', name: 'Italiano', locale: 'it-IT', path: 'index-it.html', enabled: true },
    { code: 'lv', name: 'Latviešu', locale: 'lv-LV', path: 'lv', enabled: false },
    { code: 'lt', name: 'Lietuvių', locale: 'lt-LT', path: 'lt', enabled: false },
    { code: 'mt', name: 'Malti', locale: 'mt-MT', path: 'mt', enabled: false },
    { code: 'pl', name: 'Polski', locale: 'pl-PL', path: 'pl', enabled: false },
    { code: 'pt', name: 'Português', locale: 'pt-PT', path: 'pt', enabled: false },
    { code: 'ro', name: 'Română', locale: 'ro-RO', path: 'ro', enabled: false },
    { code: 'sk', name: 'Slovenčina', locale: 'sk-SK', path: 'sk', enabled: false },
    { code: 'sl', name: 'Slovenščina', locale: 'sl-SI', path: 'sl', enabled: false },
    { code: 'es', name: 'Español', locale: 'es-ES', path: 'es', enabled: false },
    { code: 'sv', name: 'Svenska', locale: 'sv-SE', path: 'sv', enabled: false }
  ];

  window.AKINI_LANGUAGES = Object.freeze(languages.map(item => Object.freeze(item)));
  const selector = document.getElementById('lang');
  if (!selector) return;

  const current = document.documentElement.lang || 'en';
  selector.replaceChildren();
  languages.filter(item => item.enabled).forEach(item => {
    const option = document.createElement('option');
    option.value = item.code;
    option.textContent = item.name;
    option.selected = item.code === current;
    selector.appendChild(option);
  });

  selector.addEventListener('change', event => {
    const selected = languages.find(item => item.code === event.target.value && item.enabled);
    if (selected) window.location.assign(selected.code === 'en' ? '/' : '/' + selected.path);
  });
})();

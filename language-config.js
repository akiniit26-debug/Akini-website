/* AKINI language registry. All 24 official EU languages have homepage pages. */
(() => {
  'use strict';
  const languages = [
    { code: 'bg', name: 'Български', locale: 'bg-BG', path: 'index-bg.html', enabled: true },
    { code: 'hr', name: 'Hrvatski', locale: 'hr-HR', path: 'index-hr.html', enabled: true },
    { code: 'cs', name: 'Čeština', locale: 'cs-CZ', path: 'index-cs.html', enabled: true },
    { code: 'da', name: 'Dansk', locale: 'da-DK', path: 'index-da.html', enabled: true },
    { code: 'nl', name: 'Nederlands', locale: 'nl-NL', path: 'index-nl.html', enabled: true },
    { code: 'et', name: 'Eesti', locale: 'et-EE', path: 'index-et.html', enabled: true },
    { code: 'fi', name: 'Suomi', locale: 'fi-FI', path: 'index-fi.html', enabled: true },
    { code: 'fr', name: 'Français', locale: 'fr-FR', path: 'index-fr.html', enabled: true },
    { code: 'de', name: 'Deutsch', locale: 'de-DE', path: 'index-de.html', enabled: true },
    { code: 'el', name: 'Ελληνικά', locale: 'el-GR', path: 'index-el.html', enabled: true },
    { code: 'hu', name: 'Magyar', locale: 'hu-HU', path: 'index-hu.html', enabled: true },
    { code: 'ga', name: 'Gaeilge', locale: 'ga-IE', path: 'index-ga.html', enabled: true },
    { code: 'lv', name: 'Latviešu', locale: 'lv-LV', path: 'index-lv.html', enabled: true },
    { code: 'lt', name: 'Lietuvių', locale: 'lt-LT', path: 'index-lt.html', enabled: true },
    { code: 'mt', name: 'Malti', locale: 'mt-MT', path: 'index-mt.html', enabled: true },
    { code: 'pl', name: 'Polski', locale: 'pl-PL', path: 'index-pl.html', enabled: true },
    { code: 'pt', name: 'Português', locale: 'pt-PT', path: 'index-pt.html', enabled: true },
    { code: 'ro', name: 'Română', locale: 'ro-RO', path: 'index-ro.html', enabled: true },
    { code: 'sk', name: 'Slovenčina', locale: 'sk-SK', path: 'index-sk.html', enabled: true },
    { code: 'sl', name: 'Slovenščina', locale: 'sl-SI', path: 'index-sl.html', enabled: true },
    { code: 'es', name: 'Español', locale: 'es-ES', path: 'index-es.html', enabled: true },
    { code: 'sv', name: 'Svenska', locale: 'sv-SE', path: 'index-sv.html', enabled: true },
    { code: 'en', name: 'English', locale: 'en', path: '/', enabled: true },
    { code: 'it', name: 'Italiano', locale: 'it-IT', path: 'index-it.html', enabled: true }
  ];
  window.AKINI_LANGUAGES = Object.freeze(languages.map(item => Object.freeze(item)));
  const selector = document.getElementById('lang');
  if (!selector) return;
  const current = document.documentElement.lang || 'en';
  selector.replaceChildren();
  languages.forEach(item => {
    const option = document.createElement('option');
    option.value = item.code; option.textContent = item.name;
    option.selected = item.code === current; selector.appendChild(option);
  });
  selector.addEventListener('change', event => {
    const selected = languages.find(item => item.code === event.target.value);
    if (selected) window.location.assign(selected.code === 'en' ? '/' : '/' + selected.path);
  });
})();

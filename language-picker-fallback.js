/* Defensive searchable language-picker fallback.
   The native select remains the source of truth; this only restores the custom picker
   if language-config.js did not finish creating one. */
(() => {
  'use strict';
  document.documentElement.dataset.languageFallback = 'started';
  const selector = document.getElementById('lang');
  if (!selector) { document.documentElement.dataset.languageFallback = 'no-select'; return; }
  if (document.querySelector('.akini-language-trigger')) { document.documentElement.dataset.languageFallback = 'already-present'; return; }

  const picker = document.createElement('div');
  picker.className = 'akini-language-picker';
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'akini-language-trigger';
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', 'akini-language-fallback-panel');
  const panel = document.createElement('div');
  panel.className = 'akini-language-panel';
  panel.id = 'akini-language-fallback-panel';
  panel.hidden = true;
  const search = document.createElement('input');
  search.type = 'search';
  search.className = 'akini-language-search';
  search.placeholder = 'Search languages...';
  search.setAttribute('aria-label', 'Search languages');
  const options = document.createElement('div');
  options.className = 'akini-language-options';
  options.setAttribute('role', 'listbox');
  panel.append(search, options);
  picker.append(trigger, panel);
  selector.insertAdjacentElement('afterend', picker);

  const style = document.createElement('style');
  style.textContent = '.akini-language-picker{position:relative;display:inline-block;vertical-align:middle}.akini-language-trigger{border:0;background:transparent;color:#fff;font:inherit;font-weight:700;cursor:pointer;padding:8px 5px}.akini-language-panel{position:absolute;right:0;top:100%;z-index:1000;width:230px;padding:9px;background:#fff;border:1px solid #d9dee8;border-radius:10px;box-shadow:0 8px 24px #0003;color:#172033}.akini-language-panel[hidden]{display:none}.akini-language-search{box-sizing:border-box;width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:7px;font:inherit;color:#172033;background:#fff}.akini-language-options{max-height:260px;overflow-y:auto;margin-top:6px}.akini-language-option{display:block;width:100%;text-align:left;padding:8px 10px;border:0;border-radius:6px;background:#fff;color:#172033;font:inherit;cursor:pointer}.akini-language-option:hover,.akini-language-option:focus{background:#eef2f7}.akini-language-empty{padding:9px;color:#64748b;font-size:13px}';
  document.head.append(style);

  const languages = [...selector.options].map(option => ({
    code: option.value,
    name: option.textContent.trim()
  }));
  const current = languages.find(item => item.code === selector.value) || languages[0];
  trigger.textContent = (current ? current.name : 'English') + ' ▾';

  function render(query = '') {
    options.replaceChildren();
    const needle = query.trim().toLocaleLowerCase();
    const matches = languages.filter(item =>
      item.name.toLocaleLowerCase().includes(needle) || item.code.toLowerCase().includes(needle)
    );
    if (!matches.length) {
      const empty = document.createElement('div');
      empty.className = 'akini-language-empty';
      empty.textContent = 'No languages found';
      options.append(empty);
      return;
    }
    matches.forEach(item => {
      const option = document.createElement('button');
      option.type = 'button';
      option.className = 'akini-language-option';
      option.setAttribute('role', 'option');
      option.textContent = item.name;
      option.addEventListener('click', () => {
        selector.value = item.code;
        window.location.assign(item.code === 'en' ? '/' : '/index-' + item.code + '.html');
      });
      options.append(option);
    });
  }

  render();
  trigger.addEventListener('click', () => {
    const open = panel.hidden;
    panel.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
    if (open) { search.value = ''; render(); search.focus(); }
  });
  search.addEventListener('input', () => render(search.value));
  document.addEventListener('click', event => {
    if (!picker.contains(event.target)) {
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
  selector.hidden = true;
  document.documentElement.dataset.languageFallback = 'created';
})();

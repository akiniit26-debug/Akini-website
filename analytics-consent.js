/* AKINI consent-gated Google Analytics 4 loader. */
(function () {
  'use strict';
  var measurementId = 'G-BM804ST8G6';
  var storageKey = 'akiniAnalyticsConsent';
  var isItalian = /^it(?:-|$)/i.test(document.documentElement.lang || '');
  var copy = isItalian ? {
    label: 'Preferenze cookie',
    message: 'AKINI utilizza Google Analytics per capire come viene utilizzato il sito. Analytics viene attivato solo se scegli “Accetta Analytics”. Puoi rifiutare o modificare la scelta in qualsiasi momento.',
    accept: 'Accetta Analytics', reject: 'Rifiuta gli opzionali', close: 'Chiudi',
    settings: 'Impostazioni cookie', cookie: 'Informativa sui cookie', privacy: 'Informativa sulla privacy'
  } : {
    label: 'Cookie preferences',
    message: 'AKINI uses Google Analytics to understand how the website is used. Analytics is activated only if you choose “Accept analytics”. You can reject or change your choice at any time.',
    accept: 'Accept analytics', reject: 'Reject optional', close: 'Close',
    settings: 'Cookie settings', cookie: 'Cookie Policy', privacy: 'Privacy Policy'
  };
  function readChoice(){try{return localStorage.getItem(storageKey)}catch(e){return null}}
  function writeChoice(v){try{localStorage.setItem(storageKey,v)}catch(e){}}
  function loadAnalytics(){
    if(window.__akiniAnalyticsLoaded)return;
    window.__akiniAnalyticsLoaded=true;
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){window.dataLayer.push(arguments)};
    window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    window.gtag('consent','update',{analytics_storage:'granted'});
    window.gtag('js',new Date());
    window.gtag('config',measurementId,{allow_google_signals:false,allow_ad_personalization_signals:false});
    var tag=document.createElement('script');tag.async=true;
    tag.src='https://www.googletagmanager.com/gtag/js?id='+measurementId;
    document.head.appendChild(tag);
  }
  function revokeAnalytics(){
    if(window.gtag&&window.__akiniAnalyticsLoaded)window.gtag('consent','update',{analytics_storage:'denied'});
    document.cookie.split(';').forEach(function(item){
      var name=item.split('=')[0].trim();
      if(name.indexOf('_ga')===0)document.cookie=name+'=; Max-Age=0; path=/; SameSite=Lax';
    });
  }
  var style=document.createElement('style');
  style.textContent='#akini-consent-panel{position:fixed;z-index:2147483000;left:16px;right:16px;bottom:16px;max-width:760px;margin:0 auto;padding:18px;background:#fff;color:#09264a;border:1px solid #d9e1eb;border-radius:14px;box-shadow:0 8px 32px #09264a30;font:14px/1.55 Arial,sans-serif}#akini-consent-panel[hidden],#akini-consent-settings[hidden]{display:none!important}#akini-consent-panel p{margin:0 0 12px}#akini-consent-panel a{color:#1264b5;text-decoration:underline}#akini-consent-actions{display:flex;flex-wrap:wrap;gap:8px}#akini-consent-actions button,#akini-consent-settings{border:0;border-radius:22px;padding:10px 15px;font:700 13px Arial,sans-serif;cursor:pointer}#akini-consent-accept{background:#062b52;color:#fff}#akini-consent-reject,#akini-consent-close{background:#edf1f5;color:#09264a}#akini-consent-settings{position:fixed;z-index:2147482999;right:14px;bottom:14px;background:#062b52;color:#fff;box-shadow:0 3px 12px #09264a30}@media(max-width:520px){#akini-consent-panel{left:10px;right:10px;bottom:10px;padding:14px}#akini-consent-actions button{flex:1}}';
  document.head.appendChild(style);
  var panel=document.createElement('section');panel.id='akini-consent-panel';panel.hidden=true;
  panel.setAttribute('role','dialog');panel.setAttribute('aria-label',copy.label);
  var message=document.createElement('p');message.textContent=copy.message+' ';
  var cookie=document.createElement('a');cookie.href=isItalian?'/cookie-policy-it.html':'/cookie-policy.html';cookie.textContent=copy.cookie;
  var privacy=document.createElement('a');privacy.href=isItalian?'/privacy-policy-it.html':'/privacy-policy.html';privacy.textContent=copy.privacy;
  message.append(cookie,document.createTextNode(' · '),privacy);
  var actions=document.createElement('div');actions.id='akini-consent-actions';
  function button(id,label){var b=document.createElement('button');b.type='button';b.id=id;b.textContent=label;return b}
  var accept=button('akini-consent-accept',copy.accept),reject=button('akini-consent-reject',copy.reject),close=button('akini-consent-close',copy.close);
  actions.append(accept,reject,close);panel.append(message,actions);
  var settings=button('akini-consent-settings',copy.settings);settings.hidden=true;
  document.body.append(panel,settings);
  function show(){panel.hidden=false;settings.hidden=true}
  function hide(){panel.hidden=true;settings.hidden=false}
  accept.addEventListener('click',function(){writeChoice('accepted');loadAnalytics();hide()});
  reject.addEventListener('click',function(){writeChoice('rejected');revokeAnalytics();hide()});
  close.addEventListener('click',hide);settings.addEventListener('click',show);
  var choice=readChoice();
  if(choice==='accepted'){loadAnalytics();hide()}else if(choice==='rejected'){hide()}else{show()}
})();
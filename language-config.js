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

  // Correct shared interface copy that was left untranslated or copied from another locale.
  const copy = {
    bg:["Към съдържанието","Условията за доставка на търговеца важат","Плащането се извършва на сайта на търговеца","Свържете се с AKINI","Меню","Щастливи любимци, по-щастливи стопани!","Открийте полезни продукти","Сравнете предложенията на търговците","Пазарувайте директно от търговците"],
    hr:["Preskoči na sadržaj","Primjenjuju se uvjeti dostave trgovca","Plaćanje se obavlja na stranici trgovca","Kontaktirajte AKINI","Izbornik","Sretni ljubimci, sretniji vi!","Otkrijte korisne proizvode","Usporedite ponude trgovaca","Kupujte izravno kod trgovaca"],
    cs:["Přejít k obsahu","Platí podmínky dopravy prodejce","Platba probíhá na webu prodejce","Kontaktujte AKINI","Nabídka","Spokojení mazlíčci, spokojenější vy!","Objevte užitečné produkty","Porovnejte nabídky prodejců","Nakupujte přímo u prodejců"],
    da:["Gå til indhold","Forhandlerens leveringsvilkår gælder","Betaling foregår på forhandlerens hjemmeside","Kontakt AKINI","Menu","Glade kæledyr, gladere dig!","Find nyttige produkter","Sammenlign forhandlernes muligheder","Køb direkte hos forhandlerne"],
    nl:["Ga naar de inhoud","De verzendvoorwaarden van de verkoper zijn van toepassing","Afrekenen gebeurt op de website van de verkoper","Contact met AKINI","Menu","Blije huisdieren, een blijere jij!","Ontdek handige producten","Vergelijk opties van verkopers","Koop rechtstreeks bij verkopers"],
    et:["Liigu sisu juurde","Kehtivad müüja tarnetingimused","Maksmine toimub müüja veebilehel","Võta AKINI-ga ühendust","Menüü","Õnnelikud lemmikud, õnnelikum sina!","Avasta kasulikke tooteid","Võrdle müüjate pakkumisi","Osta otse müüjatelt"],
    fi:["Siirry sisältöön","Jälleenmyyjän toimitusehdot ovat voimassa","Maksaminen tapahtuu jälleenmyyjän sivustolla","Ota yhteyttä AKINIin","Valikko","Onnelliset lemmikit, onnellisempi sinä!","Löydä hyödyllisiä tuotteita","Vertaile jälleenmyyjien vaihtoehtoja","Osta suoraan jälleenmyyjiltä"],
    fr:["Aller au contenu","Les conditions de livraison du vendeur s’appliquent","Le paiement s’effectue sur le site du vendeur","Contacter AKINI","Menu","Des animaux heureux, pour vous rendre plus heureux !","Découvrez des produits utiles","Comparez les offres des vendeurs","Achetez directement auprès des vendeurs"],
    de:["Zum Inhalt springen","Es gelten die Versandbedingungen des Händlers","Die Zahlung erfolgt auf der Website des Händlers","AKINI kontaktieren","Menü","Glückliche Haustiere, glücklicheres Leben!","Nützliche Produkte entdecken","Angebote der Händler vergleichen","Direkt bei Händlern einkaufen"],
    el:["Μετάβαση στο περιεχόμενο","Ισχύουν οι όροι αποστολής του εμπόρου","Η πληρωμή γίνεται στον ιστότοπο του εμπόρου","Επικοινωνία με την AKINI","Μενού","Χαρούμενα κατοικίδια, πιο χαρούμενοι άνθρωποι!","Ανακαλύψτε χρήσιμα προϊόντα","Συγκρίνετε επιλογές εμπόρων","Αγοράστε απευθείας από εμπόρους"],
    hu:["Ugrás a tartalomhoz","A kereskedő szállítási feltételei érvényesek","A fizetés a kereskedő weboldalán történik","Kapcsolatfelvétel az AKINI-val","Menü","Boldog háziállatok, boldogabb gazdik!","Hasznos termékek felfedezése","Kereskedői ajánlatok összehasonlítása","Vásároljon közvetlenül a kereskedőktől"],
    ga:["Téigh chuig an ábhar","Tá téarmaí seachadta an mhiondíoltóra i bhfeidhm","Déantar íocaíocht ar shuíomh an mhiondíoltóra","Déan teagmháil le AKINI","Roghchlár","Peataí sona, tusa níos sona!","Aimsigh táirgí úsáideacha","Déan comparáid idir roghanna miondíoltóirí","Ceannaigh go díreach ó mhiondíoltóirí"],
    lv:["Pāriet uz saturu","Piemēro tirgotāja piegādes noteikumus","Maksājums notiek tirgotāja vietnē","Sazināties ar AKINI","Izvēlne","Laimīgi mājdzīvnieki, laimīgāks tu!","Atklāj noderīgus produktus","Salīdzini tirgotāju piedāvājumus","Iegādājies tieši pie tirgotājiem"],
    lt:["Pereiti prie turinio","Taikomos pardavėjo pristatymo sąlygos","Apmokėjimas vyksta pardavėjo svetainėje","Susisiekti su AKINI","Meniu","Laimingi augintiniai, laimingesni jūs!","Atraskite naudingų produktų","Palyginkite pardavėjų pasiūlymus","Pirkite tiesiogiai iš pardavėjų"],
    mt:["Aqbeż għall-kontenut","Japplikaw il-kundizzjonijiet tat-tbaħħir tal-bejjiegħ","Il-ħlas isir fuq is-sit tal-bejjiegħ","Ikkuntattja lil AKINI","Menu","Annimali domestiċi ferħanin, int aktar ferħan!","Skopri prodotti utli","Qabbel l-għażliet tal-bejjiegħa","Ixtri direttament mingħand il-bejjiegħa"],
    pl:["Przejdź do treści","Obowiązują warunki dostawy sprzedawcy","Płatność odbywa się na stronie sprzedawcy","Skontaktuj się z AKINI","Menu","Szczęśliwe zwierzęta, szczęśliwszy Ty!","Odkryj przydatne produkty","Porównaj oferty sprzedawców","Kupuj bezpośrednio u sprzedawców"],
    pt:["Saltar para o conteúdo","Aplicam-se as condições de envio do vendedor","O pagamento é efetuado no site do vendedor","Contactar a AKINI","Menu","Animais felizes, uma vida mais feliz!","Descubra produtos úteis","Compare as opções dos vendedores","Compre diretamente aos vendedores"],
    ro:["Treci la conținut","Se aplică termenii de livrare ai comerciantului","Plata se face pe site-ul comerciantului","Contactează AKINI","Meniu","Animale fericite, tu mai fericit!","Descoperă produse utile","Compară ofertele comercianților","Cumpără direct de la comercianți"],
    sk:["Prejsť na obsah","Platia podmienky doručenia predajcu","Platba prebieha na stránke predajcu","Kontaktovať AKINI","Ponuka","Šťastné domáce zvieratá, šťastnejší vy!","Objavte užitočné produkty","Porovnajte ponuky predajcov","Nakupujte priamo u predajcov"],
    sl:["Preskoči na vsebino","Veljajo pogoji dostave trgovca","Plačilo poteka na spletni strani trgovca","Stopite v stik z AKINI","Meni","Srečni ljubljenčki, še srečnejši vi!","Odkrijte uporabne izdelke","Primerjajte ponudbe trgovcev","Kupujte neposredno pri trgovcih"],
    es:["Ir al contenido","Se aplican las condiciones de envío del vendedor","El pago se realiza en el sitio web del vendedor","Contactar con AKINI","Menú","Mascotas felices, ¡tú más feliz!","Descubre productos útiles","Compara las opciones de los vendedores","Compra directamente a los vendedores"],
    sv:["Hoppa till innehållet","Återförsäljarens leveransvillkor gäller","Betalning sker på återförsäljarens webbplats","Kontakta AKINI","Meny","Glada husdjur, gladare du!","Upptäck användbara produkter","Jämför återförsäljarnas alternativ","Handla direkt från återförsäljare"],
    it:["Vai al contenuto","Si applicano le condizioni di spedizione del rivenditore","Il pagamento avviene sul sito del rivenditore","Contatta AKINI","Menu","Animali felici, una vita più felice!","Scopri prodotti utili","Confronta le opzioni dei rivenditori","Acquista direttamente dai rivenditori"]
  };
  const code = (document.documentElement.lang || 'en').slice(0,2);
  const words = copy[code];
  if (words) {
    const source = [
      "Gå til indhold","Retailer shipping terms apply","Se aplican las condiciones del vendedor",
      "Checkout on retailer sites","Contact AKINI","☰ Menu","Happy Pets,\nHappier You!",
      "Happy pets,","Happier you!","Explore useful finds","Discover useful finds",
      "Compare retailer options","Shop directly with retailers"
    ];
    const replacements = new Map([
      [source[0],words[0]],[source[1],words[1]],[source[2],words[1]],
      [source[3],words[2]],[source[4],words[3]],["☰ Menu","☰ "+words[4]],
      ["Happy Pets,\nHappier You!",words[5]],["Happy pets,",words[5].split(/[!,]/)[0]],["Happy Pets,",words[5].split(/[!,]/)[0]],
      ["Happier you!",words[5]],["Happier You!",words[5]],["✔ Explore useful finds","✔ "+words[6]],
      ["✔ Discover useful finds","✔ "+words[6]],["Explore useful finds",words[6]],
      ["Discover useful finds",words[6]],["✔ Compare retailer options","✔ "+words[7]],
      ["Compare retailer options",words[7]],["✔ Shop directly with retailers","✔ "+words[8]],
      ["Shop directly with retailers",words[8]],["Se aplican las condiciones del vendedor",words[1]]
    ]);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const value = node.nodeValue.trim();
      if (replacements.has(value)) node.nodeValue = node.nodeValue.replace(value,replacements.get(value));
      else for (const [from,to] of replacements) { if (from && node.nodeValue.includes(from)) node.nodeValue = node.nodeValue.replace(from,to); }
    }
    document.querySelectorAll('[aria-label],[placeholder]').forEach(el => {
      for (const attr of ['aria-label','placeholder']) {
        const value = el.getAttribute(attr);
        if (value === 'Choose website language') el.setAttribute(attr,code==='en'?'Choose website language':'');
        if (value === 'Search products') el.setAttribute(attr,words[6]);
      }
    });
  }


  // Localize visible shared homepage controls and merchandising copy.
  const ui = {
    bg:["Към съдържанието","Условията за доставка на търговеца важат","Плащането се извършва на сайта на търговеца","Свържете се с AKINI","Меню","Всички продукти за вашите любимци, дома и начина ви на живот!","Щастливи любимци, по-щастливи стопани!","Открийте полезни продукти","Сравнете офертите на търговците","Пазарувайте директно от търговците","Любимци","Дом","Начин на живот"],
    hr:["Preskoči na sadržaj","Primjenjuju se uvjeti dostave trgovca","Plaćanje se obavlja na web-stranici trgovca","Kontaktirajte AKINI","Izbornik","Proizvodi za vaše ljubimce, dom i stil života!","Sretni ljubimci, sretniji vi!","Otkrijte korisne proizvode","Usporedite ponude trgovaca","Kupujte izravno kod trgovaca","Ljubimci","Dom","Životni stil"],
    cs:["Přejít k obsahu","Platí podmínky dopravy prodejce","Platba probíhá na webu prodejce","Kontaktujte AKINI","Nabídka","Produkty pro vaše mazlíčky, domov a životní styl!","Spokojení mazlíčci, spokojenější vy!","Objevte užitečné produkty","Porovnejte nabídky prodejců","Nakupujte přímo u prodejců","Mazlíčci","Domov","Životní styl"],
    da:["Gå til indhold","Forhandlerens leveringsvilkår gælder","Betaling foregår på forhandlerens hjemmeside","Kontakt AKINI","Menu","Produkter til dine kæledyr, dit hjem og din livsstil!","Glade kæledyr, gladere dig!","Find nyttige produkter","Sammenlign forhandlernes muligheder","Køb direkte hos forhandlerne","Kæledyr","Hjem","Livsstil"],
    nl:["Ga naar de inhoud","De verzendvoorwaarden van de verkoper zijn van toepassing","Afrekenen gebeurt op de website van de verkoper","Neem contact op met AKINI","Menu","Producten voor je huisdieren, huis en levensstijl!","Blije huisdieren, een blijere jij!","Ontdek handige producten","Vergelijk opties van verkopers","Koop rechtstreeks bij verkopers","Huisdieren","Thuis","Levensstijl"],
    et:["Liigu sisu juurde","Kehtivad müüja tarnetingimused","Maksmine toimub müüja veebilehel","Võta AKINI-ga ühendust","Menüü","Tooted sinu lemmikloomadele, koju ja elustiiliks!","Õnnelikud lemmikud, õnnelikum sina!","Avasta kasulikke tooteid","Võrdle müüjate pakkumisi","Osta otse müüjatelt","Lemmikloomad","Kodu","Elustiil"],
    fi:["Siirry sisältöön","Jälleenmyyjän toimitusehdot ovat voimassa","Maksaminen tapahtuu jälleenmyyjän sivustolla","Ota yhteyttä AKINIin","Valikko","Tuotteita lemmikeille, kotiin ja elämäntyyliin!","Onnelliset lemmikit, onnellisempi sinä!","Löydä hyödyllisiä tuotteita","Vertaile jälleenmyyjien vaihtoehtoja","Osta suoraan jälleenmyyjiltä","Lemmikit","Koti","Elämäntyyli"],
    fr:["Aller au contenu","Les conditions de livraison du vendeur s’appliquent","Le paiement s’effectue sur le site du vendeur","Contacter AKINI","Menu","Des produits pour vos animaux, votre maison et votre style de vie !","Des animaux heureux, pour une vie plus heureuse !","Découvrez des produits utiles","Comparez les offres des vendeurs","Achetez directement auprès des vendeurs","Animaux","Maison","Style de vie"],
    de:["Zum Inhalt springen","Es gelten die Versandbedingungen des Händlers","Die Zahlung erfolgt auf der Website des Händlers","AKINI kontaktieren","Menü","Produkte für Haustiere, Zuhause und Lifestyle!","Glückliche Haustiere, glücklicheres Leben!","Nützliche Produkte entdecken","Angebote der Händler vergleichen","Direkt bei Händlern einkaufen","Haustiere","Zuhause","Lifestyle"],
    el:["Μετάβαση στο περιεχόμενο","Ισχύουν οι όροι αποστολής του εμπόρου","Η πληρωμή γίνεται στον ιστότοπο του εμπόρου","Επικοινωνία με την AKINI","Μενού","Προϊόντα για κατοικίδια, σπίτι και τρόπο ζωής!","Χαρούμενα κατοικίδια, πιο χαρούμενοι άνθρωποι!","Ανακαλύψτε χρήσιμα προϊόντα","Συγκρίνετε επιλογές εμπόρων","Αγοράστε απευθείας από εμπόρους","Κατοικίδια","Σπίτι","Τρόπος ζωής"],
    hu:["Ugrás a tartalomhoz","A kereskedő szállítási feltételei érvényesek","A fizetés a kereskedő weboldalán történik","Kapcsolatfelvétel az AKINI-val","Menü","Termékek háziállatoknak, otthonra és életstílushoz!","Boldog háziállatok, boldogabb gazdik!","Hasznos termékek felfedezése","Kereskedői ajánlatok összehasonlítása","Vásároljon közvetlenül a kereskedőktől","Háziállatok","Otthon","Életmód"],
    ga:["Téigh chuig an ábhar","Tá téarmaí seachadta an mhiondíoltóra i bhfeidhm","Déantar íocaíocht ar shuíomh an mhiondíoltóra","Déan teagmháil le AKINI","Roghchlár","Táirgí do pheataí, do theach agus do stíl mhaireachtála!","Peataí sona, tusa níos sona!","Aimsigh táirgí úsáideacha","Déan comparáid idir roghanna miondíoltóirí","Ceannaigh go díreach ó mhiondíoltóirí","Peataí","Baile","Stíl mhaireachtála"],
    lv:["Pāriet uz saturu","Piemēro tirgotāja piegādes noteikumus","Maksājums notiek tirgotāja vietnē","Sazināties ar AKINI","Izvēlne","Produkti mājdzīvniekiem, mājai un dzīvesveidam!","Laimīgi mājdzīvnieki, laimīgāks tu!","Atklāj noderīgus produktus","Salīdzini tirgotāju piedāvājumus","Iegādājies tieši pie tirgotājiem","Mājdzīvnieki","Mājas","Dzīvesveids"],
    lt:["Pereiti prie turinio","Taikomos pardavėjo pristatymo sąlygos","Apmokėjimas vyksta pardavėjo svetainėje","Susisiekti su AKINI","Meniu","Produktai augintiniams, namams ir gyvenimo būdui!","Laimingi augintiniai, laimingesni jūs!","Atraskite naudingų produktų","Palyginkite pardavėjų pasiūlymus","Pirkite tiesiogiai iš pardavėjų","Augintiniai","Namai","Gyvenimo būdas"],
    mt:["Aqbeż għall-kontenut","Japplikaw il-kundizzjonijiet tat-tbaħħir tal-bejjiegħ","Il-ħlas isir fuq is-sit tal-bejjiegħ","Ikkuntattja lil AKINI","Menu","Prodotti għall-annimali domestiċi, għad-dar u għall-istil tal-ħajja!","Annimali domestiċi ferħanin, int aktar ferħan!","Skopri prodotti utli","Qabbel l-għażliet tal-bejjiegħa","Ixtri direttament mingħand il-bejjiegħa","Annimali domestiċi","Dar","Stil ta’ ħajja"],
    pl:["Przejdź do treści","Obowiązują warunki dostawy sprzedawcy","Płatność odbywa się na stronie sprzedawcy","Skontaktuj się z AKINI","Menu","Produkty dla zwierząt, domu i stylu życia!","Szczęśliwe zwierzęta, szczęśliwszy Ty!","Odkryj przydatne produkty","Porównaj oferty sprzedawców","Kupuj bezpośrednio u sprzedawców","Zwierzęta","Dom","Styl życia"],
    pt:["Saltar para o conteúdo","Aplicam-se as condições de envio do vendedor","O pagamento é efetuado no site do vendedor","Contactar a AKINI","Menu","Produtos para animais, casa e estilo de vida!","Animais felizes, uma vida mais feliz!","Descubra produtos úteis","Compare as opções dos vendedores","Compre diretamente aos vendedores","Animais","Casa","Estilo de vida"],
    ro:["Treci la conținut","Se aplică termenii de livrare ai comerciantului","Plata se face pe site-ul comerciantului","Contactează AKINI","Meniu","Produse pentru animale, casă și stilul tău de viață!","Animale fericite, tu mai fericit!","Descoperă produse utile","Compară ofertele comercianților","Cumpără direct de la comercianți","Animale","Casă","Stil de viață"],
    sk:["Prejsť na obsah","Platia podmienky doručenia predajcu","Platba prebieha na stránke predajcu","Kontaktovať AKINI","Ponuka","Produkty pre domácich miláčikov, domov a životný štýl!","Šťastné domáce zvieratá, šťastnejší vy!","Objavte užitočné produkty","Porovnajte ponuky predajcov","Nakupujte priamo u predajcov","Domáce zvieratá","Domov","Životný štýl"],
    sl:["Preskoči na vsebino","Veljajo pogoji dostave trgovca","Plačilo poteka na spletni strani trgovca","Stopite v stik z AKINI","Meni","Izdelki za hišne ljubljenčke, dom in življenjski slog!","Srečni ljubljenčki, še srečnejši vi!","Odkrijte uporabne izdelke","Primerjajte ponudbe trgovcev","Kupujte neposredno pri trgovcih","Hišni ljubljenčki","Dom","Življenjski slog"],
    es:["Ir al contenido","Se aplican las condiciones de envío del vendedor","El pago se realiza en el sitio web del vendedor","Contactar con AKINI","Menú","Productos para tus mascotas, tu hogar y tu estilo de vida","Mascotas felices, ¡tú más feliz!","Descubre productos útiles","Compara las opciones de los vendedores","Compra directamente a los vendedores","Mascotas","Hogar","Estilo de vida"],
    sv:["Hoppa till innehållet","Återförsäljarens leveransvillkor gäller","Betalning sker på återförsäljarens webbplats","Kontakta AKINI","Meny","Produkter för husdjur, hem och livsstil!","Glada husdjur, gladare du!","Upptäck användbara produkter","Jämför återförsäljarnas alternativ","Handla direkt från återförsäljare","Husdjur","Hem","Livsstil"],
    it:["Vai al contenuto","Si applicano le condizioni di spedizione del rivenditore","Il pagamento avviene sul sito del rivenditore","Contatta AKINI","Menu","Prodotti per animali, casa e stile di vita!","Animali felici, una vita più felice!","Scopri prodotti utili","Confronta le opzioni dei rivenditori","Acquista direttamente dai rivenditori","Animali","Casa","Stile di vita"]
  };
  const localeCopy = ui[code];
  if (localeCopy) {
    const skip = document.querySelector('.skip-link');
    if (skip) skip.textContent = localeCopy[0];
    const bar = document.querySelector('.topbar');
    if (bar) bar.textContent = '🚚 ' + localeCopy[1] + '  🛡 ' + localeCopy[2] + '  🎧 ' + localeCopy[3];
    const menu = document.querySelector('.mobile-menu-toggle');
    if (menu && !menu.getAttribute('aria-expanded') || (menu && menu.getAttribute('aria-expanded') === 'false')) menu.textContent = '☰ ' + localeCopy[4];
    const heroTitle = document.querySelector('.hero-copy h1');
    if (heroTitle) heroTitle.textContent = localeCopy[5];
    const heroStrong = document.querySelector('.hero-aside strong');
    if (heroStrong) heroStrong.textContent = localeCopy[6];
    const heroPoints = document.querySelector('.hero-aside p');
    if (heroPoints) heroPoints.innerHTML = '<span>✔</span> ' + localeCopy[7] + '<br><span>✔</span> ' + localeCopy[8] + '<br><span>✔</span> ' + localeCopy[9];
    document.querySelectorAll('.category').forEach((card, i) => {
      const label = card.querySelectorAll('span')[1];
      if (label && i < 3) label.firstChild.textContent = localeCopy[10+i] + ' ';
    });
  }

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

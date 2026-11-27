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
  // Keep every language in alphabetical order by its displayed native name.
  languages.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
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
  // The English homepage template accidentally retained a Danish skip-link label.
  if (code === 'en') {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink && skipLink.textContent.trim() === 'Gå til indhold') skipLink.textContent = 'Skip to content';
  }
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


  // Complete the most visible category, filter, preview and footer labels per locale.
  const more = {
    bg:["Храна, играчки и аксесоари","Декор, кухня и обзавеждане","Мода, грижа и още","Всички продукти","Любимци","Котки","Дом","Начин на живот","Пример","Само преглед","Няма намерени продукти. Опитайте друго търсене.","Доставка","Важат условията на търговеца","Плащане при търговеца","Контакт","Връщане","Важи политиката на търговеца","Преглед на продукти"],
    hr:["Hrana, igračke i dodaci","Dekor, kuhinja i namještaj","Moda, njega i još mnogo toga","Svi proizvodi","Ljubimci","Mačke","Dom","Životni stil","Primjer","Samo pregled","Nema proizvoda. Pokušajte drugu pretragu.","Dostava","Primjenjuju se uvjeti trgovca","Plaćanje kod trgovca","Kontakt","Povrati","Primjenjuju se pravila trgovca","Pregled proizvoda"],
    cs:["Krmivo, hračky a doplňky","Dekorace, kuchyně a vybavení","Móda, péče a další","Všechny produkty","Mazlíčci","Kočky","Domov","Životní styl","Ukázka","Pouze náhled","Nebyly nalezeny žádné produkty. Zkuste jiné hledání.","Doprava","Platí podmínky prodejce","Platba u prodejce","Kontakt","Vrácení zboží","Platí pravidla prodejce","Náhled produktů"],
    da:["Foder, legetøj og tilbehør","Indretning, køkken og bolig","Mode, velvære og mere","Alle produkter","Kæledyr","Katte","Hjem","Livsstil","Eksempel","Kun forhåndsvisning","Ingen produkter fundet. Prøv en anden søgning.","Levering","Forhandlerens vilkår gælder","Betaling hos forhandleren","Kontakt","Returnering","Forhandlerens regler gælder","Produktvisning"],
    nl:["Voeding, speelgoed en accessoires","Decoratie, keuken en wonen","Mode, welzijn en meer","Alle producten","Huisdieren","Katten","Thuis","Levensstijl","Voorbeeld","Alleen voorbeeldweergave","Geen producten gevonden. Probeer een andere zoekopdracht.","Verzending","Voorwaarden van de verkoper zijn van toepassing","Betalen bij de verkoper","Contact","Retourneren","Retourbeleid van de verkoper geldt","Productvoorbeeld"],
    et:["Toit, mänguasjad ja tarvikud","Sisustus, köök ja kodu","Mood, heaolu ja muu","Kõik tooted","Lemmikloomad","Kassid","Kodu","Elustiil","Näidis","Ainult eelvaade","Tooteid ei leitud. Proovi teist otsingut.","Tarne","Kehtivad müüja tingimused","Maksmine müüja juures","Kontakt","Tagastamine","Kehtivad müüja reeglid","Toote eelvaade"],
    fi:["Ruoka, lelut ja tarvikkeet","Sisustus, keittiö ja koti","Muoti, hyvinvointi ja muuta","Kaikki tuotteet","Lemmikit","Kissat","Koti","Elämäntyyli","Esimerkki","Vain esikatselu","Tuotteita ei löytynyt. Kokeile toista hakua.","Toimitus","Jälleenmyyjän ehdot ovat voimassa","Maksu jälleenmyyjälle","Yhteystiedot","Palautukset","Jälleenmyyjän käytännöt ovat voimassa","Tuote-esikatselu"],
    fr:["Nourriture, jouets et accessoires","Décoration, cuisine et maison","Mode, bien-être et plus","Tous les produits","Animaux","Chats","Maison","Style de vie","Exemple","Aperçu uniquement","Aucun produit trouvé. Essayez une autre recherche.","Livraison","Les conditions du vendeur s’appliquent","Paiement chez le vendeur","Contact","Retours","Les règles du vendeur s’appliquent","Aperçu des produits"],
    de:["Futter, Spielzeug und Zubehör","Deko, Küche und Wohnen","Mode, Wohlbefinden und mehr","Alle Produkte","Haustiere","Katzen","Zuhause","Lifestyle","Beispiel","Nur Vorschau","Keine Produkte gefunden. Bitte andere Suche versuchen.","Versand","Es gelten die Bedingungen des Händlers","Zahlung beim Händler","Kontakt","Rückgabe","Es gelten die Rückgaberegeln des Händlers","Produktvorschau"],
    el:["Τροφή, παιχνίδια και αξεσουάρ","Διακόσμηση, κουζίνα και σπίτι","Μόδα, ευεξία και άλλα","Όλα τα προϊόντα","Κατοικίδια","Γάτες","Σπίτι","Τρόπος ζωής","Δείγμα","Μόνο προεπισκόπηση","Δεν βρέθηκαν προϊόντα. Δοκιμάστε άλλη αναζήτηση.","Αποστολή","Ισχύουν οι όροι του εμπόρου","Πληρωμή στον έμπορο","Επικοινωνία","Επιστροφές","Ισχύουν οι πολιτικές του εμπόρου","Προεπισκόπηση προϊόντων"],
    hu:["Étel, játékok és kiegészítők","Dekoráció, konyha és otthon","Divat, jóllét és egyebek","Minden termék","Háziállatok","Macskák","Otthon","Életmód","Minta","Csak előnézet","Nem található termék. Próbáljon másik keresést.","Szállítás","A kereskedő feltételei érvényesek","Fizetés a kereskedőnél","Kapcsolat","Visszaküldés","A kereskedő szabályai érvényesek","Termékelőnézet"],
    ga:["Bia, bréagáin agus gabhálais","Maisiú, cistin agus baile","Faisean, folláine agus tuilleadh","Gach táirge","Peataí","Cait","Baile","Stíl mhaireachtála","Sampla","Réamhamharc amháin","Níor aimsíodh táirgí. Bain triail as cuardach eile.","Seachadadh","Tá téarmaí an mhiondíoltóra i bhfeidhm","Íocaíocht leis an miondíoltóir","Teagmháil","Tuairisceáin","Tá beartais an mhiondíoltóra i bhfeidhm","Réamhamharc táirge"],
    lv:["Barība, rotaļlietas un piederumi","Dekori, virtuve un mājoklis","Mode, labsajūta un vēl","Visi produkti","Mājdzīvnieki","Kaķi","Mājas","Dzīvesveids","Paraugs","Tikai priekšskatījums","Produkti nav atrasti. Izmēģini citu meklēšanu.","Piegāde","Piemēro tirgotāja noteikumus","Maksājums pie tirgotāja","Kontakti","Atgriešana","Piemēro tirgotāja politiku","Produkta priekšskatījums"],
    lt:["Maistas, žaislai ir priedai","Dekoras, virtuvė ir namai","Mada, gerovė ir daugiau","Visi produktai","Augintiniai","Katės","Namai","Gyvenimo būdas","Pavyzdys","Tik peržiūra","Produktų nerasta. Pabandykite kitą paiešką.","Pristatymas","Taikomos pardavėjo sąlygos","Mokėjimas pardavėjui","Kontaktai","Grąžinimas","Taikoma pardavėjo politika","Produktų peržiūra"],
    mt:["Ikel, ġugarelli u aċċessorji","Dekorazzjoni, kċina u dar","Moda, benesseri u aktar","Il-prodotti kollha","Annimali domestiċi","Qtates","Dar","Stil ta’ ħajja","Eżempju","Previżjoni biss","Ma nstab l-ebda prodott. Ipprova tfittxija oħra.","Kunsinna","Japplikaw il-kundizzjonijiet tal-bejjiegħ","Ħlas għand il-bejjiegħ","Kuntatt","Ritorn","Japplikaw il-politiki tal-bejjiegħ","Previżjoni tal-prodott"],
    pl:["Karma, zabawki i akcesoria","Dekoracje, kuchnia i dom","Moda, dobre samopoczucie i więcej","Wszystkie produkty","Zwierzęta","Koty","Dom","Styl życia","Przykład","Tylko podgląd","Nie znaleziono produktów. Spróbuj innego wyszukiwania.","Dostawa","Obowiązują warunki sprzedawcy","Płatność u sprzedawcy","Kontakt","Zwroty","Obowiązują zasady sprzedawcy","Podgląd produktu"],
    pt:["Alimentos, brinquedos e acessórios","Decoração, cozinha e casa","Moda, bem-estar e mais","Todos os produtos","Animais","Gatos","Casa","Estilo de vida","Exemplo","Apenas pré-visualização","Não foram encontrados produtos. Tente outra pesquisa.","Envio","Aplicam-se as condições do vendedor","Pagamento ao vendedor","Contacto","Devoluções","Aplicam-se as políticas do vendedor","Pré-visualização de produtos"],
    ro:["Hrană, jucării și accesorii","Decorațiuni, bucătărie și casă","Modă, bunăstare și altele","Toate produsele","Animale","Pisici","Casă","Stil de viață","Exemplu","Doar previzualizare","Nu s-au găsit produse. Încearcă altă căutare.","Livrare","Se aplică termenii comerciantului","Plata către comerciant","Contact","Retururi","Se aplică politicile comerciantului","Previzualizare produse"],
    sk:["Krmivo, hračky a doplnky","Dekorácie, kuchyňa a bývanie","Móda, zdravie a ďalšie","Všetky produkty","Domáce zvieratá","Mačky","Domov","Životný štýl","Ukážka","Iba náhľad","Nenašli sa žiadne produkty. Skúste iné vyhľadávanie.","Doručenie","Platia podmienky predajcu","Platba predajcovi","Kontakt","Vrátenie tovaru","Platia pravidlá predajcu","Náhľad produktov"],
    sl:["Hrana, igrače in dodatki","Dekor, kuhinja in dom","Moda, dobro počutje in več","Vsi izdelki","Hišni ljubljenčki","Mačke","Dom","Življenjski slog","Primer","Samo predogled","Ni najdenih izdelkov. Poskusite drugo iskanje.","Dostava","Veljajo pogoji trgovca","Plačilo trgovcu","Stik","Vračila","Veljajo pravila trgovca","Predogled izdelkov"],
    es:["Comida, juguetes y accesorios","Decoración, cocina y hogar","Moda, bienestar y más","Todos los productos","Mascotas","Gatos","Hogar","Estilo de vida","Ejemplo","Solo vista previa","No se encontraron productos. Prueba otra búsqueda.","Envío","Se aplican las condiciones del vendedor","Pago al vendedor","Contacto","Devoluciones","Se aplican las políticas del vendedor","Vista previa de productos"],
    sv:["Foder, leksaker och tillbehör","Inredning, kök och hem","Mode, välmående och mer","Alla produkter","Husdjur","Katter","Hem","Livsstil","Exempel","Endast förhandsvisning","Inga produkter hittades. Försök med en annan sökning.","Leverans","Återförsäljarens villkor gäller","Betalning till återförsäljaren","Kontakt","Returer","Återförsäljarens regler gäller","Produktförhandsvisning"],
    it:["Cibo, giochi e accessori","Arredo, cucina e casa","Moda, benessere e altro","Tutti i prodotti","Animali","Gatti","Casa","Stile di vita","Esempio","Solo anteprima","Nessun prodotto trovato. Prova un'altra ricerca.","Spedizione","Si applicano le condizioni del rivenditore","Pagamento al rivenditore","Contatti","Resi","Si applicano le politiche del rivenditore","Anteprima prodotti"]
  };
  const moreCopy = more[code];
  if (moreCopy) {
    const cats = document.querySelectorAll('.category');
    cats.forEach((card,i) => { const small=card.querySelector('small'); if(small) small.textContent=moreCopy[i]; });
    const heading=document.querySelector('.section-title'); if(heading) heading.textContent=moreCopy[17] + ' · ' + moreCopy[9];
    const filters=document.querySelectorAll('.filters button');
    const filterLabels=[moreCopy[3],moreCopy[4],moreCopy[5],moreCopy[6],moreCopy[7]];
    filters.forEach((b,i)=>{if(filterLabels[i]) b.textContent=filterLabels[i];});
    document.querySelectorAll('.product .discount').forEach(el=>{if(el.textContent.trim()) el.textContent=moreCopy[8];});
    document.querySelectorAll('.product .visit').forEach(el=>el.textContent=moreCopy[9]);
    const empty=document.querySelector('.empty'); if(empty) empty.textContent=moreCopy[10];
    const benefits=document.querySelectorAll('.benefits > div');
    const benefitLabels=[[moreCopy[11],moreCopy[12]],[moreCopy[13],moreCopy[14]],[moreCopy[15],moreCopy[16]],[moreCopy[16],moreCopy[12]]];
    benefits.forEach((el,i)=>{if(benefitLabels[i]){const icon=el.querySelector('b');el.textContent='';if(icon)el.appendChild(icon);el.append(' '+benefitLabels[i][0]);const small=document.createElement('small');small.textContent=benefitLabels[i][1];el.appendChild(small);}});
  }


  // Product names and remaining visible homepage copy.
  const productCopy = {
    bg:["Удобно легло за домашни любимци","Прибиращ се повод за куче","Купа от неръждаема стомана","Издръжлива играчка за куче","Катерушка за котки","Модерен домашен декор","Ежедневна раница","Начало","Оферти","За нас","Ръководства","Контакт","Добави в количката","Добавено","Количка","Списък с желания","Затвори","Продължи пазаруването","Списъкът ви с желания е празен.","Преглед само: AKINI е некомерсиален сайт за представяне на продукти. Не продаваме продукти, не приемаме поръчки или плащания и не използваме партньорско проследяване. Данните за продуктите са примерни и не представляват проверени оферти."],
    hr:["Udoban krevet za ljubimce","Povodac za pse na izvlačenje","Zdjelica od nehrđajućeg čelika","Izdržljiva igračka za pse","Penjalica za mačke","Moderan kućni dekor","Torba za svaki dan","Početna","Ponude","O nama","Vodiči","Kontakt","Dodaj u košaricu","Dodano","Košarica","Lista želja","Zatvori","Nastavi kupnju","Vaša lista želja je prazna.","Samo pregled: AKINI je nekomercijalna stranica za otkrivanje proizvoda. Ne prodajemo proizvode, ne primamo narudžbe ni plaćanja i ne koristimo partnersko praćenje. Podaci o proizvodima su ilustrativni, a ne provjerene ponude."],
    cs:["Pohodlný pelíšek pro mazlíčky","Zatahovací vodítko pro psa","Miska z nerezové oceli","Odolná hračka pro psa","Kočičí strom","Moderní bytové dekorace","Taška na každý den","Domů","Nabídky","O nás","Průvodci","Kontakt","Přidat do košíku","Přidáno","Košík","Seznam přání","Zavřít","Pokračovat v nákupu","Váš seznam přání je prázdný.","Pouze náhled: AKINI je nekomerční web pro objevování produktů. Produkty neprodáváme, nepřijímáme objednávky ani platby a nepoužíváme partnerské sledování. Údaje o produktech jsou ilustrační, nikoli ověřené nabídky."],
    da:["Komfortabel kæledyrsseng","Udtrækkelig hundesnor","Skål i rustfrit stål","Robust hundelegetøj","Kattetræ","Moderne boligindretning","Hverdagstaske","Hjem","Tilbud","Om os","Guides","Kontakt","Læg i kurv","Tilføjet","Kurv","Ønskeliste","Luk","Fortsæt med at handle","Din ønskeliste er tom.","Kun forhåndsvisning: AKINI er et ikke-kommercielt produktunivers. Vi sælger ikke produkter, modtager ikke ordrer eller betalinger og bruger ikke affiliate-sporing. Produktoplysningerne er eksempler og ikke verificerede tilbud."],
    nl:["Comfortabel huisdierenbed","Oprolbare hondenriem","Roestvrijstalen voerbak","Stevig hondenspeelgoed","Kattenboom","Moderne woondecoratie","Tas voor dagelijks gebruik","Home","Aanbiedingen","Over ons","Gidsen","Contact","Toevoegen aan winkelwagen","Toegevoegd","Winkelwagen","Verlanglijst","Sluiten","Verder winkelen","Je verlanglijst is leeg.","Alleen voorbeeld: AKINI is een niet-commerciële website om producten te ontdekken. We verkopen geen producten, nemen geen bestellingen of betalingen aan en gebruiken geen affiliate-tracking. Productgegevens zijn voorbeelden en geen geverifieerde aanbiedingen."],
    et:["Mugav lemmikloomavoodi","Sissetõmmatav koerarihm","Roostevabast terasest kauss","Vastupidav koeramänguasi","Kassipuu","Moodne kodusisustus","Igapäevane kott","Avaleht","Pakkumised","Meist","Juhendid","Kontakt","Lisa ostukorvi","Lisatud","Ostukorv","Soovide nimekiri","Sulge","Jätka ostlemist","Sinu soovide nimekiri on tühi.","Ainult eelvaade: AKINI on mitteäriline toodete avastamise veebisait. Me ei müü tooteid, võta vastu tellimusi ega makseid ega kasuta partnerluslinkide jälgimist. Tooteteave on näitlik ega ole kontrollitud pakkumine."],
    fi:["Mukava lemmikkieläimen peti","Kelautuva koiran talutin","Ruostumattomasta teräksestä valmistettu kulho","Kestävä koiranlelu","Kissan kiipeilypuu","Moderni kodinsisustus","Arkilaukku","Etusivu","Tarjoukset","Tietoa meistä","Oppaat","Yhteystiedot","Lisää ostoskoriin","Lisätty","Ostoskori","Toivelista","Sulje","Jatka ostoksia","Toivelistasi on tyhjä.","Vain esikatselu: AKINI on voittoa tavoittelematon tuote-esittelysivusto. Emme myy tuotteita, ota vastaan tilauksia tai maksuja emmekä käytä kumppanuusseurantaa. Tuotetiedot ovat esimerkkejä, eivät vahvistettuja tarjouksia."],
    fr:["Couchage confortable pour animal","Laisse rétractable pour chien","Gamelle en acier inoxydable","Jouet résistant pour chien","Arbre à chat","Décoration intérieure moderne","Sac du quotidien","Accueil","Offres","À propos","Guides","Contact","Ajouter au panier","Ajouté","Panier","Liste de souhaits","Fermer","Continuer les achats","Votre liste de souhaits est vide.","Aperçu uniquement : AKINI est un site non commercial de découverte de produits. Nous ne vendons aucun produit, ne prenons aucune commande ni aucun paiement et n’utilisons aucun suivi d’affiliation. Les informations produits sont illustratives et ne constituent pas des offres vérifiées."],
    de:["Bequemes Haustierbett","Einziehbare Hundeleine","Edelstahlnapf","Robustes Hundespielzeug","Katzenkratzbaum","Moderne Wohndekoration","Alltagstasche","Startseite","Angebote","Über uns","Ratgeber","Kontakt","In den Warenkorb","Hinzugefügt","Warenkorb","Wunschliste","Schließen","Weiter einkaufen","Deine Wunschliste ist leer.","Nur Vorschau: AKINI ist eine nicht kommerzielle Website zur Produktentdeckung. Wir verkaufen keine Produkte, nehmen keine Bestellungen oder Zahlungen an und verwenden kein Affiliate-Tracking. Produktangaben sind Beispiele und keine geprüften Angebote."],
    el:["Άνετο κρεβάτι κατοικιδίου","Επανατυλισσόμενο λουρί σκύλου","Μπολ από ανοξείδωτο ατσάλι","Ανθεκτικό παιχνίδι σκύλου","Ονυχοδρόμιο γάτας","Μοντέρνα διακόσμηση σπιτιού","Τσάντα καθημερινής χρήσης","Αρχική","Προσφορές","Σχετικά","Οδηγοί","Επικοινωνία","Προσθήκη στο καλάθι","Προστέθηκε","Καλάθι","Λίστα επιθυμιών","Κλείσιμο","Συνέχεια αγορών","Η λίστα επιθυμιών σας είναι κενή.","Μόνο προεπισκόπηση: Το AKINI είναι μη εμπορικός ιστότοπος ανακάλυψης προϊόντων. Δεν πουλάμε προϊόντα, δεν δεχόμαστε παραγγελίες ή πληρωμές και δεν χρησιμοποιούμε παρακολούθηση συνεργατών. Οι πληροφορίες προϊόντων είναι ενδεικτικές και όχι επαληθευμένες προσφορές."],
    hu:["Kényelmes kisállatfekhely","Visszahúzható kutyapóráz","Rozsdamentes acél etetőtál","Tartós kutyajáték","Macskabútor","Modern lakásdekoráció","Mindennapi táska","Kezdőlap","Ajánlatok","Rólunk","Útmutatók","Kapcsolat","Kosárba teszem","Hozzáadva","Kosár","Kívánságlista","Bezárás","Vásárlás folytatása","A kívánságlistád üres.","Csak előnézet: az AKINI nem kereskedelmi termékfelfedező weboldal. Nem értékesítünk termékeket, nem fogadunk rendeléseket vagy fizetéseket, és nem használunk partnerkövetést. A termékadatok szemléltető példák, nem ellenőrzött ajánlatok."],
    ga:["Leaba chompordach do pheata","Léas madra in-aistarraingthe","Babhla cruach dhosmálta","Bréagán madra marthanach","Crann dreapadó do chait","Maisiúchán tí nua-aimseartha","Mála laethúil","Baile","Margaí","Fúinn","Treoracha","Teagmháil","Cuir sa tralaí","Curtha leis","Tralaí","Liosta mianta","Dún","Lean ort ag siopadóireacht","Tá do liosta mianta folamh.","Réamhamharc amháin: suíomh neamhthráchtála chun táirgí a aimsiú is ea AKINI. Ní dhíolaimid táirgí, ní ghlacaimid le horduithe ná íocaíochtaí agus ní úsáidimid rianú cleamhnaithe. Samplaí amháin iad sonraí na dtáirgí, ní tairiscintí fíoraithe."],
    lv:["Ērta mājdzīvnieku guļvieta","Ievelkama suņa pavada","Nerūsējošā tērauda bļoda","Izturīga suņu rotaļlieta","Kaķu koks","Mūsdienīgs mājas dekors","Ikdienas soma","Sākums","Piedāvājumi","Par mums","Ceļveži","Kontakti","Pievienot grozam","Pievienots","Grozs","Vēlmju saraksts","Aizvērt","Turpināt iepirkšanos","Vēlmju saraksts ir tukšs.","Tikai priekšskatījums: AKINI ir nekomerciāla produktu iepazīšanas vietne. Mēs nepārdodam preces, nepieņemam pasūtījumus vai maksājumus un neizmantojam partneru izsekošanu. Produktu dati ir ilustratīvi piemēri, nevis pārbaudīti piedāvājumi."],
    lt:["Patogi augintinio lova","Ištraukiamas šuns pavadėlis","Nerūdijančio plieno dubenėlis","Patvarus šuns žaislas","Kačių laipynė","Modernus namų dekoras","Kasdienis krepšys","Pradžia","Pasiūlymai","Apie mus","Gidai","Kontaktai","Įdėti į krepšelį","Pridėta","Krepšelis","Norų sąrašas","Uždaryti","Tęsti apsipirkimą","Norų sąrašas tuščias.","Tik peržiūra: AKINI yra nekomercinė produktų atradimo svetainė. Mes neparduodame produktų, nepriimame užsakymų ar mokėjimų ir nenaudojame partnerių stebėjimo. Produktų duomenys yra pavyzdžiai, o ne patikrinti pasiūlymai."],
    mt:["Sodda komda għall-annimali","Ċinga tal-klieb li tinġibed lura","Skutella tal-azzar inossidabbli","Ġugarell durabbli għall-klieb","Siġra għall-qtates","Dekorazzjoni moderna tad-dar","Borża ta’ kuljum","Paġna ewlenija","Offerti","Dwarna","Gwidi","Kuntatt","Żid mal-karrettun","Miżjud","Karrettun","Lista tax-xewqat","Agħlaq","Kompli x-xiri","Il-lista tax-xewqat tiegħek hija vojta.","Previżjoni biss: AKINI huwa sit mhux kummerċjali għall-iskoperta ta’ prodotti. Ma nbiegħux prodotti, ma naċċettawx ordnijiet jew ħlasijiet u ma nużawx traċċar tal-affiljati. Id-dettalji tal-prodotti huma eżempji, mhux offerti verifikati."],
    pl:["Wygodne legowisko dla zwierząt","Smycz automatyczna dla psa","Miska ze stali nierdzewnej","Wytrzymała zabawka dla psa","Drapak dla kota","Nowoczesne dekoracje do domu","Torba na co dzień","Strona główna","Oferty","O nas","Poradniki","Kontakt","Dodaj do koszyka","Dodano","Koszyk","Lista życzeń","Zamknij","Kontynuuj zakupy","Twoja lista życzeń jest pusta.","Tylko podgląd: AKINI to niekomercyjna witryna do odkrywania produktów. Nie sprzedajemy produktów, nie przyjmujemy zamówień ani płatności i nie używamy śledzenia afiliacyjnego. Dane produktów są przykładowe, a nie zweryfikowane oferty."],
    pt:["Cama confortável para animais","Trela retrátil para cães","Taça de aço inoxidável","Brinquedo resistente para cães","Árvore para gatos","Decoração moderna para casa","Saco para o dia a dia","Início","Ofertas","Sobre nós","Guias","Contacto","Adicionar ao carrinho","Adicionado","Carrinho","Lista de desejos","Fechar","Continuar a comprar","A sua lista de desejos está vazia.","Apenas pré-visualização: a AKINI é um site não comercial de descoberta de produtos. Não vendemos produtos, não aceitamos encomendas nem pagamentos e não usamos rastreamento de afiliados. Os dados dos produtos são exemplos, não ofertas verificadas."],
    ro:["Pat confortabil pentru animale","Lesă retractabilă pentru câini","Bol din oțel inoxidabil","Jucărie rezistentă pentru câini","Ansamblu de joacă pentru pisici","Decor modern pentru casă","Geantă de zi cu zi","Acasă","Oferte","Despre noi","Ghiduri","Contact","Adaugă în coș","Adăugat","Coș","Listă de dorințe","Închide","Continuă cumpărăturile","Lista ta de dorințe este goală.","Doar previzualizare: AKINI este un site necomercial de descoperire a produselor. Nu vindem produse, nu acceptăm comenzi sau plăți și nu folosim urmărire afiliată. Detaliile produselor sunt exemple, nu oferte verificate."],
    sk:["Pohodlný pelech pre zvieratá","Samonavíjacie vodítko pre psa","Miska z nehrdzavejúcej ocele","Odolná hračka pre psa","Mačací strom","Moderná bytová dekorácia","Taška na každý deň","Domov","Ponuky","O nás","Sprievodcovia","Kontakt","Pridať do košíka","Pridané","Košík","Zoznam želaní","Zavrieť","Pokračovať v nákupe","Váš zoznam želaní je prázdny.","Iba náhľad: AKINI je nekomerčná stránka na objavovanie produktov. Produkty nepredávame, neprijímame objednávky ani platby a nepoužívame partnerské sledovanie. Údaje o produktoch sú ilustračné príklady, nie overené ponuky."],
    sl:["Udobna postelja za hišne ljubljenčke","Zložljiv pasji povodec","Skleda iz nerjavnega jekla","Trpežna pasja igrača","Mačje drevo","Sodoben dekor za dom","Torba za vsak dan","Domov","Ponudbe","O nas","Vodniki","Kontakt","Dodaj v košarico","Dodano","Košarica","Seznam želja","Zapri","Nadaljuj z nakupovanjem","Vaš seznam želja je prazen.","Samo predogled: AKINI je nekomercialno spletno mesto za odkrivanje izdelkov. Izdelkov ne prodajamo, ne sprejemamo naročil ali plačil in ne uporabljamo partnerskega sledenja. Podatki o izdelkih so ilustrativni primeri, ne preverjene ponudbe."],
    es:["Cama cómoda para mascotas","Correa extensible para perro","Cuenco de acero inoxidable","Juguete resistente para perros","Árbol para gatos","Decoración moderna para el hogar","Bolso para el día a día","Inicio","Ofertas","Sobre nosotros","Guías","Contacto","Añadir al carrito","Añadido","Carrito","Lista de deseos","Cerrar","Seguir comprando","Tu lista de deseos está vacía.","Solo vista previa: AKINI es un sitio no comercial para descubrir productos. No vendemos productos, no aceptamos pedidos ni pagos y no utilizamos seguimiento de afiliados. Los datos de productos son ejemplos, no ofertas verificadas."],
    sv:["Bekväm husdjurssäng","Utdragbart hundkoppel","Skål i rostfritt stål","Hållbar hundleksak","Kattträd","Modern heminredning","Vardagsväska","Hem","Erbjudanden","Om oss","Guider","Kontakt","Lägg i varukorgen","Tillagd","Varukorg","Önskelista","Stäng","Fortsätt handla","Din önskelista är tom.","Endast förhandsvisning: AKINI är en icke-kommersiell webbplats för produktupptäckt. Vi säljer inga produkter, tar inte emot beställningar eller betalningar och använder ingen affiliatspårning. Produktuppgifterna är exempel, inte verifierade erbjudanden."],
    it:["Cuccia comoda per animali","Guinzaglio estensibile per cani","Ciotola in acciaio inox","Gioco resistente per cani","Tiragraffi per gatti","Arredo moderno per la casa","Borsa da tutti i giorni","Home","Offerte","Chi siamo","Guide","Contatti","Aggiungi al carrello","Aggiunto","Carrello","Lista dei desideri","Chiudi","Continua gli acquisti","La tua lista dei desideri è vuota.","Solo anteprima: AKINI è un sito non commerciale per la scoperta di prodotti. Non vendiamo prodotti, non accettiamo ordini o pagamenti e non utilizziamo il tracciamento affiliato. I dati dei prodotti sono esempi e non offerte verificate."]
  };
  const pc = productCopy[code];
  if (pc) {
    const cards = document.querySelectorAll('.product');
    cards.forEach((card,i) => {
      const h=card.querySelector('h3'); if(h && pc[i]) h.textContent=pc[i];
      const img=card.querySelector('img'); if(img) img.alt=pc[i] || img.alt;
      const save=card.querySelector('.save'); if(save) save.setAttribute('aria-label',pc[15]+' '+(h?h.textContent:''));
    });
    const nav=document.querySelectorAll('#siteNav a');
    const navMap=[pc[7],(localeCopy&&localeCopy[10])||pc[7],(localeCopy&&localeCopy[11])||pc[7],(localeCopy&&localeCopy[12])||pc[7],pc[8],pc[9],pc[10],pc[11]];
    nav.forEach((a,i)=>{if(navMap[i]){const icon=(a.textContent.match(/^[^A-Za-zА-Яа-яÀ-ÿΑ-ωĀ-ž]+/)||[''])[0];a.textContent=icon+' '+navMap[i]+(a.dataset.category?'⌄':'');}});
    const disclosure=document.querySelector('#affiliate-note');
    if(disclosure) disclosure.textContent=pc[19];
    const cartTitle=document.querySelector('#cartDialogTitle'); if(cartTitle) cartTitle.textContent=pc[14];
    const wishTitle=document.querySelector('#wishlistDialogTitle'); if(wishTitle) wishTitle.textContent=pc[15];
    document.querySelectorAll('#cartDialog button').forEach(b=>b.textContent=pc[17]);
    document.querySelectorAll('#wishlistDialog button').forEach(b=>b.textContent=pc[16]);
    window.AKINI_PRODUCT_COPY={addCart:pc[12],added:pc[13],cart:pc[14],wishlist:pc[15],close:pc[16],continueShopping:pc[17],emptyWishlist:pc[18]};
    const search=document.getElementById('searchInput'); if(search) search.placeholder=(localeCopy&&localeCopy[7])||pc[10];
    document.querySelectorAll('.footer > div').forEach((el,i)=>{if(i===1){const strong=el.querySelector('strong');if(strong)strong.textContent=pc[9];} if(i===2){const strong=el.querySelector('strong');if(strong)strong.textContent=pc[10];}});
    document.querySelectorAll('.add-cart').forEach(b=>b.textContent='+ '+pc[12]);
  }

  // Final pass: translate remaining fixed homepage labels that were previously left in English.
  if (localeCopy && moreCopy && pc) {
    const fixedText = new Map([
      ['Wishlist', pc[15]],
      ['Product Ideas · Preview Only', moreCopy[17] + ' · ' + moreCopy[9]],
      ['All', moreCopy[3]],
      ['Demo', moreCopy[8]],
      ['(demo)', ''],
      ['Preview only', moreCopy[9]],
      ['Explore Buying Guides →', localeCopy[7] + ' →'],
      ['Shipping', moreCopy[11]],
      ['Retailer terms apply', moreCopy[12]],
      ['Retailer Checkout', moreCopy[13]],
      ['Payments handled by retailer', moreCopy[14]],
      ['Returns', moreCopy[15]],
      ['Retailer policies apply', moreCopy[16]],
      ['Product preview:', moreCopy[17]],
      ['Questions and feedback', moreCopy[14]],
      ['Affiliate Disclosure', pc[9]],
      ['Buying Guides', pc[10]],
      ['About', pc[9]],
      ['Information', pc[10]]
    ]);
    document.querySelectorAll('body *').forEach(el => {
      if (el.children.length === 0) {
        const value = (el.textContent || '').trim();
        if (fixedText.has(value)) el.textContent = fixedText.get(value);
      }
    });
    const heroTitle = document.querySelector('.hero-copy h1');
    if (heroTitle) heroTitle.textContent = localeCopy[5];
    const wishlistButton = [...document.querySelectorAll('button')].find(b => (b.textContent || '').trim() === 'Wishlist');
    if (wishlistButton) wishlistButton.textContent = pc[15];
    const cartTitle = document.querySelector('#cartDialogTitle');
    if (cartTitle) cartTitle.textContent = pc[14];
    const wishTitle = document.querySelector('#wishlistDialogTitle');
    if (wishTitle) wishTitle.textContent = pc[15];
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

  // Searchable language picker: visitors can type a language name instead of scrolling.
  const picker = document.createElement('div');
  picker.className = 'akini-language-picker';
  picker.innerHTML = '<button type="button" class="akini-language-trigger" aria-expanded="false" aria-controls="akini-language-panel"></button><div class="akini-language-panel" id="akini-language-panel" hidden><input type="search" class="akini-language-search" placeholder="Search languages..." aria-label="Search languages"><div class="akini-language-options" role="listbox"></div></div>';
  selector.insertAdjacentElement('afterend', picker);
  const trigger = picker.querySelector('.akini-language-trigger');
  const panel = picker.querySelector('.akini-language-panel');
  const search = picker.querySelector('.akini-language-search');
  const options = picker.querySelector('.akini-language-options');
  const activeLanguage = languages.find(item => item.code === current) || languages[0];
  trigger.textContent = activeLanguage.name + ' ▾';
  const style = document.createElement('style');
  style.textContent = '.akini-language-picker{position:relative;display:inline-block;vertical-align:middle}.akini-language-trigger{border:0;background:transparent;color:#fff;font:inherit;font-weight:700;cursor:pointer;padding:8px 5px}.akini-language-panel{position:absolute;right:0;top:100%;z-index:1000;width:230px;padding:9px;background:#fff;border:1px solid #d9dee8;border-radius:10px;box-shadow:0 8px 24px #0003;color:#172033}.akini-language-panel[hidden]{display:none}.akini-language-search{box-sizing:border-box;width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:7px;font:inherit;color:#172033;background:#fff}.akini-language-options{max-height:260px;overflow-y:auto;margin-top:6px}.akini-language-option{display:block;width:100%;text-align:left;padding:8px 10px;border:0;border-radius:6px;background:#fff;color:#172033;font:inherit;cursor:pointer}.akini-language-option:hover,.akini-language-option:focus{background:#eef2f7}.akini-language-empty{padding:9px;color:#64748b;font-size:13px}';
  document.head.appendChild(style);
  function renderLanguageOptions(query='') {
    options.replaceChildren();
    const matches = languages.filter(item => item.name.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()) || item.code.toLowerCase().includes(query.trim().toLowerCase()));
    if (!matches.length) { const empty = document.createElement('div'); empty.className='akini-language-empty'; empty.textContent='No languages found'; options.append(empty); return; }
    matches.forEach(item => {
      const option = document.createElement('button');
      option.type='button'; option.className='akini-language-option'; option.setAttribute('role','option');
      option.textContent=item.name; option.addEventListener('click', () => { selector.value=item.code; selector.dispatchEvent(new Event('change')); });
      options.append(option);
    });
  }
  renderLanguageOptions();
  trigger.addEventListener('click', () => {
    const open = panel.hidden; panel.hidden = !open; trigger.setAttribute('aria-expanded', String(open));
    if (open) { search.value=''; renderLanguageOptions(); search.focus(); }
  });
  search.addEventListener('input', () => renderLanguageOptions(search.value));
  document.addEventListener('click', event => { if (!picker.contains(event.target)) { panel.hidden=true; trigger.setAttribute('aria-expanded','false'); } });
  // Hide the native fallback only after the searchable picker is fully initialized.
  // If any earlier step fails, the visitor still has a working language selector.
  selector.hidden = true;
})();

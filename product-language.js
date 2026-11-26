/* AKINI multilingual live product catalogue. Uses public Supabase data only. */
(() => {
  'use strict';
  const config = window.AKINI_SUPABASE;
  const grid = document.getElementById('productGrid');
  if (!grid || !config?.url || !config?.publishableKey) return;
  const lang = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
  const copy = {
    bg:{pets:'Домашни любимци',home:'Дом',life:'Начин на живот',visit:'Виж продукта в магазина',price:'Проверете актуалната цена',rating:'Оценката не е потвърдена',reviews:'отзива',note:'Цените и наличността може да се променят. Проверете подробностите при търговеца.'},
    hr:{pets:'Kućni ljubimci',home:'Dom',life:'Životni stil',visit:'Pogledajte kod trgovca',price:'Provjerite aktualnu cijenu',rating:'Ocjena nije potvrđena',reviews:'recenzija',note:'Cijene i dostupnost mogu se promijeniti. Provjerite pojedinosti kod trgovca.'},
    cs:{pets:'Mazlíčci',home:'Domov',life:'Životní styl',visit:'Zobrazit u prodejce',price:'Ověřit aktuální cenu',rating:'Hodnocení není ověřeno',reviews:'recenzí',note:'Ceny a dostupnost se mohou změnit. Aktuální informace ověřte u prodejce.'},
    da:{pets:'Kæledyr',home:'Hjem',life:'Livsstil',visit:'Se hos forhandleren',price:'Tjek den aktuelle pris',rating:'Bedømmelse ikke bekræftet',reviews:'anmeldelser',note:'Priser og tilgængelighed kan ændre sig. Se de aktuelle oplysninger hos forhandleren.'},
    nl:{pets:'Huisdieren',home:'Thuis',life:'Levensstijl',visit:'Bekijk bij verkoper',price:'Controleer de actuele prijs',rating:'Beoordeling niet geverifieerd',reviews:'reviews',note:'Prijzen en beschikbaarheid kunnen wijzigen. Controleer de actuele informatie bij de verkoper.'},
    et:{pets:'Lemmikloomad',home:'Kodu',life:'Elustiil',visit:'Vaata müüja juures',price:'Kontrolli hetke hinda',rating:'Hinnang pole kinnitatud',reviews:'arvustust',note:'Hinnad ja saadavus võivad muutuda. Kontrolli müüja veebilehelt värskeid andmeid.'},
    fi:{pets:'Lemmikit',home:'Koti',life:'Elämäntyyli',visit:'Katso jälleenmyyjältä',price:'Tarkista nykyinen hinta',rating:'Arvosanaa ei ole vahvistettu',reviews:'arvostelua',note:'Hinnat ja saatavuus voivat muuttua. Tarkista ajantasaiset tiedot jälleenmyyjältä.'},
    fr:{pets:'Animaux',home:'Maison',life:'Style de vie',visit:'Voir chez le vendeur',price:'Vérifier le prix actuel',rating:'Note non vérifiée',reviews:'avis',note:'Les prix et la disponibilité peuvent changer. Vérifiez les informations actuelles auprès du vendeur.'},
    de:{pets:'Haustiere',home:'Zuhause',life:'Lifestyle',visit:'Beim Händler ansehen',price:'Aktuellen Preis prüfen',rating:'Bewertung nicht verifiziert',reviews:'Bewertungen',note:'Preise und Verfügbarkeit können sich ändern. Aktuelle Angaben beim Händler prüfen.'},
    el:{pets:'Κατοικίδια',home:'Σπίτι',life:'Τρόπος ζωής',visit:'Προβολή στον πωλητή',price:'Ελέγξτε την τρέχουσα τιμή',rating:'Η βαθμολογία δεν έχει επαληθευτεί',reviews:'κριτικές',note:'Οι τιμές και η διαθεσιμότητα ενδέχεται να αλλάξουν. Ελέγξτε τις τρέχουσες πληροφορίες στον πωλητή.'},
    hu:{pets:'Kisállatok',home:'Otthon',life:'Életmód',visit:'Megtekintés a kereskedőnél',price:'Aktuális ár ellenőrzése',rating:'Az értékelés nem ellenőrzött',reviews:'értékelés',note:'Az árak és az elérhetőség változhatnak. Ellenőrizze a kereskedő aktuális adatait.'},
    ga:{pets:'Peataí',home:'Baile',life:'Stíl mhaireachtála',visit:'Féach ar an miondíoltóir',price:'Seiceáil an praghas reatha',rating:'Níl an rátáil fíoraithe',reviews:'léirmheas',note:'D’fhéadfadh praghsanna agus infhaighteacht athrú. Seiceáil sonraí reatha an mhiondíoltóra.'},
    lv:{pets:'Mājdzīvnieki',home:'Mājas',life:'Dzīvesveids',visit:'Skatīt pie tirgotāja',price:'Pārbaudīt pašreizējo cenu',rating:'Vērtējums nav pārbaudīts',reviews:'atsauksmes',note:'Cenas un pieejamība var mainīties. Pārbaudiet aktuālo informāciju pie tirgotāja.'},
    lt:{pets:'Augintiniai',home:'Namai',life:'Gyvenimo būdas',visit:'Žiūrėti pas pardavėją',price:'Tikrinti dabartinę kainą',rating:'Įvertinimas nepatvirtintas',reviews:'atsiliepimai',note:'Kainos ir prieinamumas gali keistis. Naujausią informaciją patikrinkite pardavėjo svetainėje.'},
    mt:{pets:'Annimali domestiċi',home:'Dar',life:'Stil ta’ ħajja',visit:'Ara għand il-bejjiegħ',price:'Iċċekkja l-prezz attwali',rating:'Il-klassifikazzjoni mhijiex ivverifikata',reviews:'reviżjonijiet',note:'Il-prezzijiet u d-disponibbiltà jistgħu jinbidlu. Iċċekkja d-dettalji attwali għand il-bejjiegħ.'},
    pl:{pets:'Zwierzęta',home:'Dom',life:'Styl życia',visit:'Zobacz u sprzedawcy',price:'Sprawdź aktualną cenę',rating:'Ocena niezweryfikowana',reviews:'opinii',note:'Ceny i dostępność mogą ulec zmianie. Sprawdź aktualne informacje u sprzedawcy.'},
    pt:{pets:'Animais',home:'Casa',life:'Estilo de vida',visit:'Ver na loja',price:'Verificar preço atual',rating:'Classificação não verificada',reviews:'avaliações',note:'Os preços e a disponibilidade podem mudar. Consulte os dados atuais do vendedor.'},
    ro:{pets:'Animale',home:'Casă',life:'Stil de viață',visit:'Vezi la comerciant',price:'Verifică prețul actual',rating:'Evaluare neverificată',reviews:'recenzii',note:'Prețurile și disponibilitatea se pot schimba. Verifică informațiile actuale la comerciant.'},
    sk:{pets:'Domáce zvieratá',home:'Domov',life:'Životný štýl',visit:'Zobraziť u predajcu',price:'Overiť aktuálnu cenu',rating:'Hodnotenie nie je overené',reviews:'recenzií',note:'Ceny a dostupnosť sa môžu zmeniť. Aktuálne informácie si overte u predajcu.'},
    sl:{pets:'Hišni ljubljenčki',home:'Dom',life:'Življenjski slog',visit:'Oglej si pri prodajalcu',price:'Preveri trenutno ceno',rating:'Ocena ni preverjena',reviews:'mnenj',note:'Cene in razpoložljivost se lahko spremenijo. Preverite aktualne podatke pri prodajalcu.'},
    es:{pets:'Mascotas',home:'Hogar',life:'Estilo de vida',visit:'Ver en la tienda',price:'Consultar precio actual',rating:'Valoración no verificada',reviews:'reseñas',note:'Los precios y la disponibilidad pueden cambiar. Consulta los datos actualizados en la tienda.'},
    sv:{pets:'Husdjur',home:'Hem',life:'Livsstil',visit:'Visa hos återförsäljaren',price:'Kontrollera aktuellt pris',rating:'Betyget är inte verifierat',reviews:'recensioner',note:'Priser och tillgänglighet kan ändras. Kontrollera aktuell information hos återförsäljaren.'}
  };
  const t = copy[lang] || {pets:'Pets',home:'Home',life:'Lifestyle',visit:'View at retailer',price:'Check current price',rating:'Rating not verified',reviews:'reviews',note:'Prices and availability may change. Check current details with the retailer.'};
  const categoryLabels = {Pets:t.pets,Home:t.home,Lifestyle:t.life};
  const format = new Intl.NumberFormat(document.documentElement.lang || 'en');
  const el = (tag, cls, value) => { const node=document.createElement(tag); if(cls) node.className=cls; if(value!==undefined) node.textContent=value; return node; };
  const render = async () => {
    try {
      const endpoint = config.url.replace(/\/$/, '') + '/rest/v1/products?select=*&active=eq.true&order=category.asc,name.asc';
      const response = await fetch(endpoint,{headers:{apikey:config.publishableKey,Authorization:'Bearer '+config.publishableKey},cache:'no-store'});
      if(!response.ok) throw new Error('Catalogue request failed');
      const rows = await response.json();
      if(!Array.isArray(rows) || !rows.length) return;
      const products = rows.map(row=>({...row,...(row.extra||{})}));
      const fragment=document.createDocumentFragment();
      products.forEach(p=>{
        if(!p.id||!p.name||!p.image||!p.url) return;
        const name = p['name_'+lang] || (lang==='it'?p.name_it:'') || p.name;
        const description = p['description_'+lang] || (lang==='it'?p.description_it:'') || p.description || '';
        const card=el('article','product');
        card.dataset.category=p.category||'';
        card.dataset.productId=p.id;
        card.dataset.name=(name+' '+description).toLocaleLowerCase(document.documentElement.lang||'en');
        const imageBox=el('div','product-image');
        const image=document.createElement('img'); image.loading='lazy'; image.src=p.image; image.alt=name;
        imageBox.append(image);
        const info=el('div','product-info');
        info.append(el('h3','',name));
        if(description) info.append(el('p','product-description',description));
        const price=el('a','price-check',p.price ? String(p.price)+' · '+t.price : t.price);
        price.href=p.url; price.target='_blank'; price.rel='sponsored nofollow noopener';
        info.append(price);
        const rating=el('p','rating-line');
        if(Number(p.rating)>0){rating.textContent='★ '+Number(p.rating).toFixed(1)+' / 5 ('+(Number(p.review_count)>0?format.format(Number(p.review_count))+' '+t.reviews:t.reviews)+')';}
        else rating.textContent=t.rating;
        info.append(rating);
        const note=el('p','price-note',t.note); info.append(note);
        const actions=el('div','product-actions');
        const visit=el('a','visit',t.visit); visit.href=p.url; visit.target='_blank'; visit.rel='sponsored nofollow noopener';
        actions.append(visit); info.append(actions); card.append(imageBox,info); fragment.append(card);
      });
      if(fragment.childNodes.length){grid.replaceChildren(fragment);}
      grid.dataset.catalogueLanguage=lang;
      grid.dataset.catalogueLoaded='true';
    } catch(error) {
      console.warn('AKINI multilingual catalogue could not load; leaving the page fallback in place.',error);
    }
  };
  render();
})();
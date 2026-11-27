/* AKINI multilingual live product catalogue. Uses public Supabase data only. */
(() => {
  'use strict';
  const config = window.AKINI_SUPABASE;
  const grid = document.getElementById('productGrid');
  if (!grid || !config?.url || !config?.publishableKey) return;
  const lang = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
  const copy = {
    it:{pets:'Animali',home:'Casa',life:'Lifestyle',visit:'Acquista su Amazon',price:'Controlla il prezzo attuale',rating:'Valutazione non verificata',reviews:'recensioni',note:'Prezzi e disponibilità possono cambiare. Verifica i dettagli aggiornati presso il rivenditore.'},
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
  const t = copy[lang] || {pets:'Pets',home:'Home',life:'Lifestyle',visit:'Shop on Amazon',price:'Check current price',rating:'Rating not verified',reviews:'reviews',note:'Prices and availability may change. Check current details with the retailer.'};
  const categoryLabels = {Pets:t.pets,Home:t.home,Lifestyle:t.life};
const format = new Intl.NumberFormat(document.documentElement.lang || 'en');
  const render = async () => {
    try {
      const endpoint = config.url.replace(/\/$/, '') + '/rest/v1/products?select=*&active=eq.true&order=category.asc,name.asc';
      const response = await fetch(endpoint, {
        headers: { apikey: config.publishableKey, Authorization: 'Bearer ' + config.publishableKey },
        cache: 'no-store'
      });
      if (!response.ok) throw new Error('Catalogue request failed: HTTP ' + response.status);
      const rows = await response.json();
      if (!Array.isArray(rows) || !rows.length) throw new Error('Supabase returned no active products.');

      const products = rows.map(row => ({ ...row, ...(row.extra || {}) }));
      const byId = new Map(products.map(product => [String(product.id), product]));
      const cards = [...grid.querySelectorAll('.product')];
      let updated = 0;

      cards.forEach(card => {
        const product = byId.get(String(card.dataset.productId || ''));
        if (!product) return;

        const name = product['name_' + lang] || (lang === 'it' ? product.name_it : '') || product.name;
        const description = product['description_' + lang] || (lang === 'it' ? product.description_it : '') || product.description || '';
        const info = card.querySelector('.product-info');
        const heading = info && info.querySelector('h3');
        if (!info || !heading) return;

        heading.textContent = name;
        card.dataset.category = lang === 'it'
          ? ({ Pets: 'Animali', Home: 'Casa', Lifestyle: 'Lifestyle' }[product.category] || product.category || '')
          : (product.category || '');
        if (product.subcategory) card.dataset.subcategory = String(product.subcategory).trim();
        else delete card.dataset.subcategory;
        card.dataset.blackFriday = String(product.black_friday === true);
        card.dataset.name = (name + ' ' + description).toLocaleLowerCase(document.documentElement.lang || 'en');

        const image = card.querySelector('.product-image img');
        if (image && product.image) {
          image.src = product.image;
          image.alt = name;
        }

        let price = info.querySelector('.product-price');
        if (product.price) {
          if (!price) {
            price = document.createElement('div');
            price.className = 'product-price';
            heading.insertAdjacentElement('afterend', price);
          }
          price.textContent = String(product.price);
        } else if (price) {
          price.remove();
        }

        let rating = info.querySelector('.rating-line');
        if (!rating) {
          rating = document.createElement('p');
          rating.className = 'rating-line';
          if (price) price.insertAdjacentElement('afterend', rating);
          else heading.insertAdjacentElement('afterend', rating);
        }
        rating.replaceChildren();
        if (Number(product.rating) > 0) {
          rating.append(document.createTextNode('★ ' + Number(product.rating).toFixed(1) + ' / 5'));
          const reviews = document.createElement('small');
          reviews.textContent = ' (' + (Number(product.review_count) > 0
            ? format.format(Number(product.review_count)) + ' ' + t.reviews
            : t.reviews) + ')';
          rating.append(reviews);
        } else {
          rating.textContent = t.rating;
        }

        let detail = info.querySelector('.product-description');
        if (!detail) {
          detail = [...info.querySelectorAll('p')].find(node =>
            !node.classList.contains('price-note') && !node.classList.contains('rating-line')
          );
        }
        if (!detail && description) {
          detail = document.createElement('p');
          info.append(detail);
        }
        if (detail) {
          detail.classList.add('product-description');
          detail.textContent = description;
        }

        let note = info.querySelector('.price-note');
        if (!note) {
          note = document.createElement('p');
          note.className = 'price-note';
          info.append(note);
        }
        note.textContent = t.note;

        card.querySelectorAll('a.visit, a.price-check').forEach(link => {
          link.href = product.url;
          link.target = '_blank';
          link.rel = 'sponsored nofollow noopener';
        });
        const visit = card.querySelector('a.visit');
        if (visit) visit.textContent = t.visit;

        const save = card.querySelector('.save');
        if (save) save.setAttribute('aria-label', 'Save ' + name + ' to wishlist');
        updated++;
      });

      if (!updated) throw new Error('No existing product cards matched the Supabase product IDs.');
      grid.dataset.catalogueLanguage = lang;
      grid.dataset.catalogueSource = 'supabase';
      grid.dataset.catalogueUpdated = String(updated);
      grid.dataset.catalogueLoaded = 'true';
      if (typeof window.updateProducts === 'function') window.updateProducts();
      console.info('AKINI catalogue hydrated in place:', updated, 'products for', lang);
    } catch (error) {
      grid.dataset.catalogueLanguage = lang;
      grid.dataset.catalogueSource = 'static-fallback';
      grid.dataset.catalogueLoaded = 'true';
      console.warn('AKINI catalogue kept its static fallback:', error);
    }
  };
  render();
})();

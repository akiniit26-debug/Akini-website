import html
import json
import re
from pathlib import Path

PRODUCTS = Path("products.json")
UI_TRANSLATIONS = Path("ui_translations.json")
try:
    UI = json.loads(UI_TRANSLATIONS.read_text(encoding="utf-8"))
except (FileNotFoundError, json.JSONDecodeError):
    UI = {}
PAGES = {
    "index.html": "en",
    "index-bg.html": "bg",
    "index-cs.html": "cs",
    "index-da.html": "da",
    "index-de.html": "de",
    "index-el.html": "el",
    "index-es.html": "es",
    "index-et.html": "et",
    "index-fi.html": "fi",
    "index-fr.html": "fr",
    "index-ga.html": "ga",
    "index-hr.html": "hr",
    "index-hu.html": "hu",
    "index-it.html": "it",
    "index-lt.html": "lt",
    "index-lv.html": "lv",
    "index-mt.html": "mt",
    "index-nl.html": "nl",
    "index-pl.html": "pl",
    "index-pt.html": "pt",
    "index-ro.html": "ro",
    "index-sk.html": "sk",
    "index-sl.html": "sl",
    "index-sv.html": "sv",
}

def esc(value):
    return html.escape(str(value or ""), quote=True)

def ui_text(lang, key, fallback):
    return UI.get(lang, {}).get(key, fallback)

def category_for(category, lang):
    return ui_text(lang, category, category)

def render_card(p, lang, index):
    name = p.get("name") if lang == "en" else (p.get("name_" + lang) or p.get("name_it") or p.get("name", "") if lang == "it" else p.get("name_" + lang) or p.get("name", ""))
    description = p.get("description") if lang == "en" else (p.get("description_" + lang) or p.get("description_it") or p.get("description", "") if lang == "it" else p.get("description_" + lang) or p.get("description", ""))
    category = category_for(p.get("category", ""), lang)
    image = p.get("image", "")
    url = p.get("url", "")
    pid = p.get("id", "")
    if not all((name, image.startswith("https://"), url.startswith("https://"), pid)):
        raise SystemExit(f"Product has missing/invalid required fields: {pid or name or 'unknown'}")
    searchable = (str(name) + " " + str(description)).lower()
    subcategory = p.get("subcategory", "")
    black_friday = "true" if p.get("black_friday") is True else "false"
    price = str(p.get("price") or "").strip()
    rating = p.get("rating")
    review_count = p.get("review_count")
    try:
        rating = float(rating) if rating not in (None, "") else None
    except (TypeError, ValueError):
        rating = None
    try:
        review_count = int(review_count) if review_count not in (None, "") else None
    except (TypeError, ValueError):
        review_count = None
    if rating is not None and not 0 <= rating <= 5:
        rating = None
    if review_count is not None and review_count < 0:
        review_count = None
    price_html = f'<div class="product-price">{esc(price)}</div>' if price else ""
    reviews_label = ui_text(lang, "reviews", "reviews")
    rating_html = (f'<div class="rating-line">★ {rating:.1f}/5' +
                   (f' <small>({review_count:,} {reviews_label})</small>' if review_count is not None else '') +
                   '</div>') if rating is not None else ""
    price_note = ui_text(lang, "Price and availability may change. Check the retailer for current details.",
                         "Price and availability may change. Check the retailer for current details.")
    shop = ui_text(lang, "Shop", "Shop")
    target = ui_text(lang, "the retailer", "the retailer")
    loading = "eager" if index == 0 else "lazy"
    attrs = [
        f'data-category="{esc(category)}"',
        f'data-product-id="{esc(pid)}"',
        f'data-black-friday="{black_friday}"',
        f'data-name="{esc(searchable)}"',
    ]
    if subcategory:
        attrs.append(f'data-subcategory="{esc(subcategory)}"')
    return (
        f'<article class="product" {" ".join(attrs)}>'
        f'<div class="product-image"><img src="{esc(image)}" alt="{esc(name)}" loading="{loading}" decoding="async"></div>'
        f'<div class="product-info"><h3>{esc(name)}</h3>'
        f'{price_html}{rating_html}'
        f'<p class="price-note">{price_note}</p>'
        f'<p style="font-size:12px;color:#64748b;margin:4px 0">{esc(description)}</p>'
        f'<div class="product-actions"><a class="visit" href="{esc(url)}" target="_blank" rel="sponsored nofollow noopener">{shop} {target}</a></div>'
        f'</div></article>'
    )

def replace_grid(source, replacement):
    marker = '<div class="product-grid" id="productGrid">'
    start = source.find(marker)
    if start < 0:
        raise SystemExit("Could not find productGrid in homepage")
    open_start = start
    pos = start
    depth = 0
    token = re.compile(r'<div\b[^>]*>|</div\s*>', re.I)
    for match in token.finditer(source, pos):
        tag = match.group(0)
        if tag.lower().startswith("</div"):
            depth -= 1
            if depth == 0:
                return source[:open_start] + replacement + source[match.end():]
        else:
            depth += 1
    raise SystemExit("Could not find the closing productGrid div")

products = json.loads(PRODUCTS.read_text(encoding="utf-8"))
if not isinstance(products, list):
    raise SystemExit("products.json must be a JSON list")
for page, lang in PAGES.items():
    path = Path(page)
    source = path.read_text(encoding="utf-8")
    cards = "\n".join(render_card(p, lang, i) for i, p in enumerate(products) if p.get("active", True))
    path.write_text(replace_grid(source, '<div class="product-grid" id="productGrid">\n' + cards + '\n</div>'), encoding="utf-8")
    print(f"Synced {len(products)} products to {page}")

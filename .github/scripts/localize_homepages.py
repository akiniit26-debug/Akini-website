#!/usr/bin/env python3
"""Build consistent localized AKINI homepages from the canonical English template."""
import html
import hashlib
import json
import os
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

API_KEY = os.environ.get("DEEPL_API_KEY", "").strip()
SOURCE = Path("index.html")
CACHE = Path("ui_translations.json")
LOCALIZATION_VERSION = 3
LANGUAGES = {
    "bg": ("BG", "bg_BG"), "cs": ("CS", "cs_CZ"), "da": ("DA", "da_DK"),
    "de": ("DE", "de_DE"), "el": ("EL", "el_GR"), "es": ("ES", "es_ES"),
    "et": ("ET", "et_EE"), "fi": ("FI", "fi_FI"), "fr": ("FR", "fr_FR"),
    "hr": ("HR", "hr_HR"), "hu": ("HU", "hu_HU"), "it": ("IT", "it_IT"),
    "lt": ("LT", "lt_LT"), "lv": ("LV", "lv_LV"), "nl": ("NL", "nl_NL"),
    "pl": ("PL", "pl_PL"), "pt": ("PT-PT", "pt_PT"), "ro": ("RO", "ro_RO"),
    "sk": ("SK", "sk_SK"), "sl": ("SL", "sl_SI"), "sv": ("SV", "sv_SE"),
}
URLS = {"en": "https://akini.eu/"}
URLS.update({lang: f"https://akini.eu/index-{lang}.html" for lang in
             ["bg","cs","da","de","el","es","et","fi","fr","ga","hr","hu","it","lt","lv","mt","nl","pl","pt","ro","sk","sl","sv"]})
BATCH_SIZE = 40
LABELS = [
    "Price and availability may change. Check the retailer for current details.",
    "Shop the retailer", "reviews",
]
COUNTRIES = {
    "bg": "🇧🇬 България", "cs": "🇨🇿 Česko", "da": "🇩🇰 Danmark",
    "de": "🇩🇪 Deutschland", "el": "🇬🇷 Ελλάδα", "es": "🇪🇸 España",
    "et": "🇪🇪 Eesti", "fi": "🇫🇮 Suomi", "fr": "🇫🇷 France",
    "hr": "🇭🇷 Hrvatska", "hu": "🇭🇺 Magyarország", "it": "🇮🇹 Italia",
    "lt": "🇱🇹 Lietuva", "lv": "🇱🇻 Latvija", "nl": "🇳🇱 Nederland",
    "pl": "🇵🇱 Polska", "pt": "🇵🇹 Portugal", "ro": "🇷🇴 România",
    "sk": "🇸🇰 Slovensko", "sl": "🇸🇮 Slovenija", "sv": "🇸🇪 Sverige",
    "ga": "🇮🇪 Éire", "mt": "🇲🇹 Malta",
}
CATEGORY_CONTEXT = "These are short navigation and filter category labels for an affiliate product discovery website: Pets means pet products; Home means home and household products (decor, kitchen, living), not a website homepage; Lifestyle means fashion, wellness and everyday lifestyle products."
HOME_LABELS = {
    "BG": "Дом", "CS": "Domov", "DA": "Hjem", "DE": "Wohnen",
    "EL": "Σπίτι", "ES": "Hogar", "ET": "Kodu", "FI": "Koti",
    "FR": "Maison", "HR": "Dom", "HU": "Otthon", "IT": "Casa",
    "LT": "Namai", "LV": "Mājoklis", "NL": "Wonen", "PL": "Dom",
    "PT-PT": "Casa", "RO": "Casă", "SK": "Domácnosť",
    "SL": "Dom", "SV": "Hem",
}

def translate_batch(texts, target, context=None):
    endpoint = "https://api-free.deepl.com/v2/translate" if API_KEY.endswith(":fx") else "https://api.deepl.com/v2/translate"
    fields = [("source_lang", "EN"), ("target_lang", target), ("preserve_formatting", "1")]
    if context:
        fields.append(("context", context))
    fields.extend(("text", value) for value in texts)
    req = urllib.request.Request(endpoint, data=urllib.parse.urlencode(fields).encode(),
        headers={"Authorization": f"DeepL-Auth-Key {API_KEY}", "Content-Type": "application/x-www-form-urlencoded"},
        method="POST")
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=60) as response:
                result = json.loads(response.read().decode()).get("translations", [])
            if len(result) != len(texts):
                raise RuntimeError("DeepL returned an unexpected translation count")
            return [x["text"] for x in result]
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", "replace")[:300]
            if exc.code in (429, 500, 502, 503, 504) and attempt < 3:
                time.sleep(2 ** attempt)
                continue
            raise RuntimeError(f"DeepL HTTP {exc.code}: {detail}") from None
        except (urllib.error.URLError, TimeoutError) as exc:
            if attempt < 3:
                time.sleep(2 ** attempt)
                continue
            raise RuntimeError(f"DeepL connection failed: {exc}") from None

def translate_all(values, target, context=None):
    unique = list(dict.fromkeys(v for v in values if v.strip()))
    result = {}
    for offset in range(0, len(unique), BATCH_SIZE):
        batch = unique[offset:offset+BATCH_SIZE]
        result.update(zip(batch, translate_batch(batch, target, context)))
    return result

def strip_product_grid(source):
    marker = '<div class="product-grid" id="productGrid">'
    start = source.find(marker)
    if start < 0:
        raise RuntimeError("Canonical homepage is missing productGrid")
    token = re.compile(r'<div\b[^>]*>|</div\s*>', re.I)
    depth = 0
    for match in token.finditer(source, start):
        if match.group(0).lower().startswith("</div"):
            depth -= 1
            if depth == 0:
                return source[:start] + marker + "</div>" + source[match.end():]
        else:
            depth += 1
    raise RuntimeError("Could not locate productGrid closing tag")

def translate_page(source, target):
    # Keep executable code, CSS and native language names in the language picker intact.
    protected = []
    def hold(value):
        protected.append(value)
        return f"__AKINI_HOLD_{len(protected)-1}__"
    source = re.sub(r"<(script|style)\b[^>]*>.*?</\1\s*>", lambda m: hold(m.group(0)), source, flags=re.I|re.S)
    source = re.sub(r'(<select\b[^>]*id=["\']lang["\'][^>]*>).*?</select>',
        lambda m: m.group(1) + hold(re.search(r"<select\b[^>]*id=[\"']lang[\"'][^>]*>.*?</select>", m.group(0), re.I|re.S).group(0)[len(m.group(1)):-9]) + "</select>",
        source, flags=re.I|re.S)

    strings = []
    # Text nodes outside protected script/style and language-picker options.
    for m in re.finditer(r">([^<>]+)<", source):
        raw = m.group(1)
        if raw.strip() and not re.fullmatch(r"__AKINI_HOLD_\d+__", raw.strip()):
            strings.append(html.unescape(raw.strip()))
    # Translate user-facing accessibility and search attributes.
    for m in re.finditer(r'\b(?:placeholder|aria-label|alt|title)=["\']([^"\']+)["\']', source, re.I):
        strings.append(html.unescape(m.group(1)))
    # Translate SEO description/title metadata while leaving URLs and locale values alone.
    for tag in re.findall(r"<meta\b[^>]*>", source, re.I):
        if re.search(r'(?:name|property)=["\'](?:description|og:title|og:description|og:image:alt|twitter:title|twitter:description)["\']', tag, re.I):
            m = re.search(r'\bcontent=["\']([^"\']*)["\']', tag, re.I)
            if m:
                strings.append(html.unescape(m.group(1)))
    translated = translate_all(strings, target)
    translated.update(translate_all(["Pets", "Home", "Lifestyle"], target, CATEGORY_CONTEXT))
    translated["Home"] = HOME_LABELS[target]

    def text_node(m):
        raw = m.group(1)
        if not raw.strip() or re.fullmatch(r"__AKINI_HOLD_\d+__", raw.strip()):
            return m.group(0)
        leading = raw[:len(raw)-len(raw.lstrip())]
        trailing = raw[len(raw.rstrip()):]
        original = html.unescape(raw.strip())
        return ">" + leading + html.escape(translated.get(original, original), quote=False) + trailing + "<"
    source = re.sub(r">([^<>]+)<", text_node, source)

    def attr(m):
        original = html.unescape(m.group(2))
        return m.group(1) + html.escape(translated.get(original, original), quote=True) + m.group(3)
    source = re.sub(r'(\b(?:placeholder|aria-label|alt|title)=["\'])([^"\']+)(["\'])', attr, source, flags=re.I)

    def meta_tag(m):
        tag = m.group(0)
        if re.search(r'(?:name|property)=["\'](?:description|og:title|og:description|twitter:title|twitter:description)["\']', tag, re.I):
            tag = re.sub(r'(\bcontent=["\'])([^"\']*)(["\'])',
                lambda a: a.group(1) + html.escape(translated.get(html.unescape(a.group(2)), html.unescape(a.group(2))), quote=True) + a.group(3), tag, count=1, flags=re.I)
        return tag
    source = re.sub(r"<meta\b[^>]*>", meta_tag, source, flags=re.I)
    source = re.sub(r"__AKINI_HOLD_(\d+)__", lambda m: protected[int(m.group(1))], source)
    return source

def main():
    if not API_KEY:
        raise SystemExit("DEEPL_API_KEY is missing.")
    if not SOURCE.exists():
        raise SystemExit("Canonical index.html is missing.")
    source_text = SOURCE.read_text(encoding="utf-8")
    canonical = strip_product_grid(source_text)
    source_hash = hashlib.sha256(canonical.encode("utf-8")).hexdigest()
    if CACHE.exists():
        try:
            cached = json.loads(CACHE.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            cached = {}
        meta = cached.get("_meta", {})
        pages_exist = all(Path(f"index-{lang}.html").exists() for lang in URLS if lang != "en")
        if meta.get("source_sha256") == source_hash and meta.get("version") == LOCALIZATION_VERSION and pages_exist:
            print("Homepage localization cache is current; skipping DeepL UI requests.")
            return
    labels = {}
    for lang, (target, locale) in LANGUAGES.items():
        page = translate_page(canonical, target)
        page = re.sub(r'<html\b([^>]*)lang=["\']en["\']', lambda m: '<html' + m.group(1) + f'lang="{lang}"', page, count=1, flags=re.I)
        page = re.sub(r'(<link\s+rel=["\']canonical["\']\s+href=["\'])https://akini\.eu/(["\'])',
                      rf'\g<1>{URLS[lang]}\2', page, count=1, flags=re.I)
        page = re.sub(r'(<meta\s+property=["\']og:url["\']\s+content=["\'])https://akini\.eu/(["\'])',
                      rf'\g<1>{URLS[lang]}\2', page, count=1, flags=re.I)
        page = re.sub(r'(<meta\s+property=["\']og:locale["\']\s+content=["\'])en_GB(["\'])',
                      rf'\g<1>{locale}\2', page, count=1, flags=re.I)
        desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']*)["\']', page, re.I)
        if desc_match:
            description = html.unescape(desc_match.group(1))
            def update_jsonld(match):
                data = json.loads(match.group(2))
                data["description"] = description
                data["inLanguage"] = lang
                return match.group(1) + json.dumps(data, ensure_ascii=False, indent=2) + match.group(3)
            page = re.sub(r'(<script\s+type=["\']application/ld\+json["\']\s*>)(.*?)(</script>)',
                          update_jsonld, page, count=1, flags=re.I|re.S)
        labels[lang] = translate_all(LABELS, target)
        labels[lang].update(translate_all(["Pets", "Home", "Lifestyle"], target, CATEGORY_CONTEXT))
        labels[lang]["Home"] = HOME_LABELS[target]
        page = re.sub(r'(<div>)🇮🇹 [^<]*(<select id=["\']lang["\'])', lambda m: m.group(1) + COUNTRIES[lang] + "　" + m.group(2), page, count=1)
        Path(f"index-{lang}.html").write_text(page, encoding="utf-8")
        print(f"Localized static homepage: {lang}")
    # Irish and Maltese are not DeepL targets in this API configuration; use a clean English fallback.
    for lang in ("ga", "mt"):
        page = re.sub(r'<html\b([^>]*)lang=["\']en["\']', lambda m: '<html' + m.group(1) + f'lang="{lang}"', canonical, count=1, flags=re.I)
        page = re.sub(r'(<link\s+rel=["\']canonical["\']\s+href=["\'])https://akini\.eu/(["\'])', rf'\g<1>{URLS[lang]}\2', page, count=1, flags=re.I)
        page = re.sub(r'(<meta\s+property=["\']og:url["\']\s+content=["\'])https://akini\.eu/(["\'])', rf'\g<1>{URLS[lang]}\2', page, count=1, flags=re.I)
        labels[lang] = {}
        page = re.sub(r'(<div>)🇮🇹 [^<]*(<select id=["\']lang["\'])', lambda m: m.group(1) + COUNTRIES[lang] + "　" + m.group(2), page, count=1)
        Path(f"index-{lang}.html").write_text(page, encoding="utf-8")
        print(f"English fallback homepage: {lang}")
    labels["_meta"] = {"source_sha256": source_hash, "version": LOCALIZATION_VERSION}
    Path("ui_translations.json").write_text(json.dumps(labels, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Localized {len(LANGUAGES)} languages; ga and mt use explicit English fallback.")

if __name__ == "__main__":
    main()

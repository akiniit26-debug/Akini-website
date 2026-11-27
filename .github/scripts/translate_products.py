#!/usr/bin/env python3
"""Fill missing AKINI product translations with the DeepL API.

The English product name/description are the source of truth. Existing
translations are preserved; only missing language fields are translated.
"""
import json
import os
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

PRODUCTS = Path("products.json")
API_KEY = os.environ.get("DEEPL_API_KEY", "").strip()

# DeepL-supported targets among AKINI's 23 non-English homepage languages.
# Irish (ga) and Maltese (mt) are not currently offered by DeepL's API and
# are deliberately left untouched rather than populated with bad translations.
TARGET_LANGUAGES = {
    "bg": "BG", "cs": "CS", "da": "DA", "de": "DE", "el": "EL",
    "es": "ES", "et": "ET", "fi": "FI", "fr": "FR", "hr": "HR",
    "hu": "HU", "it": "IT", "lt": "LT", "lv": "LV", "nl": "NL",
    "pl": "PL", "pt": "PT-PT", "ro": "RO", "sk": "SK", "sl": "SL",
    "sv": "SV",
}

def deepl_translate(texts, target_code):
    endpoint = (
        "https://api-free.deepl.com/v2/translate"
        if API_KEY.endswith(":fx")
        else "https://api.deepl.com/v2/translate"
    )
    fields = [
        ("source_lang", "EN"),
        ("target_lang", target_code),
        ("preserve_formatting", "1"),
    ]
    fields.extend(("text", value) for value in texts)
    request = urllib.request.Request(
        endpoint,
        data=urllib.parse.urlencode(fields).encode("utf-8"),
        headers={
            "Authorization": f"DeepL-Auth-Key {API_KEY}",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "AKINI-product-translator/1.0",
        },
        method="POST",
    )
    for attempt in range(4):
        try:
            with urllib.request.urlopen(request, timeout=45) as response:
                payload = json.loads(response.read().decode("utf-8"))
            translations = payload.get("translations", [])
            if len(translations) != len(texts):
                raise RuntimeError("DeepL returned an unexpected number of translations")
            return [item["text"] for item in translations]
        except urllib.error.HTTPError as exc:
            # Never print request headers or the API key.
            detail = exc.read().decode("utf-8", errors="replace")[:500]
            if exc.code in (429, 500, 502, 503, 504) and attempt < 3:
                time.sleep(min(2 ** attempt, 8))
                continue
            raise RuntimeError(f"DeepL API returned HTTP {exc.code}: {detail}") from None
        except (urllib.error.URLError, TimeoutError) as exc:
            if attempt < 3:
                time.sleep(min(2 ** attempt, 8))
                continue
            raise RuntimeError(f"Could not reach DeepL API: {exc}") from None

def main():
    if not API_KEY:
        raise SystemExit("DEEPL_API_KEY is missing; add it as a GitHub Actions repository secret.")
    try:
        products = json.loads(PRODUCTS.read_text(encoding="utf-8"))
    except FileNotFoundError:
        raise SystemExit("products.json was not found.")
    if not isinstance(products, list):
        raise SystemExit("products.json must be a JSON list.")

    translated = 0
    skipped = 0
    for product in products:
        if not isinstance(product, dict):
            continue
        source_name = str(product.get("name") or "").strip()
        source_description = str(product.get("description") or "").strip()
        if not source_name and not source_description:
            continue

        for lang, target_code in TARGET_LANGUAGES.items():
            name_key = f"name_{lang}"
            description_key = f"description_{lang}"
            missing = []
            keys = []
            if source_name and not str(product.get(name_key) or "").strip():
                missing.append(source_name)
                keys.append(name_key)
            if source_description and not str(product.get(description_key) or "").strip():
                missing.append(source_description)
                keys.append(description_key)
            if not missing:
                continue
            results = deepl_translate(missing, target_code)
            for key, value in zip(keys, results):
                product[key] = value.strip()
            translated += len(results)
            print(f"Translated {product.get('id', 'product')} -> {lang}")

    # Keep unsupported language fields absent; the homepage builder uses its
    # documented English fallback for those pages.
    skipped = len(products) * 2
    PRODUCTS.write_text(
        json.dumps(products, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"DeepL completed: {translated} fields translated. Irish and Maltese remain on fallback text.")

if __name__ == "__main__":
    main()

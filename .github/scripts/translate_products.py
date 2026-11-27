#!/usr/bin/env python3
"""Fill missing AKINI product translations with the DeepL API."""
import json
import os
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

PRODUCTS = Path("products.json")
API_KEY = os.environ.get("DEEPL_API_KEY", "").strip()
TARGET_LANGUAGES = {
    "bg": "BG", "cs": "CS", "da": "DA", "de": "DE", "el": "EL",
    "es": "ES", "et": "ET", "fi": "FI", "fr": "FR", "hr": "HR",
    "hu": "HU", "it": "IT", "lt": "LT", "lv": "LV", "nl": "NL",
    "pl": "PL", "pt": "PT-PT", "ro": "RO", "sk": "SK", "sl": "SL",
    "sv": "SV",
}
BATCH_SIZE = 40

class QuotaExceededError(RuntimeError):
    pass

def deepl_translate(texts, target_code):
    endpoint = (
        "https://api-free.deepl.com/v2/translate"
        if API_KEY.endswith(":fx")
        else "https://api.deepl.com/v2/translate"
    )
    fields = [("source_lang", "EN"), ("target_lang", target_code), ("preserve_formatting", "1")]
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
            with urllib.request.urlopen(request, timeout=60) as response:
                payload = json.loads(response.read().decode("utf-8"))
            results = payload.get("translations", [])
            if len(results) != len(texts):
                raise RuntimeError("DeepL returned an unexpected number of translations")
            return [item["text"] for item in results]
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", errors="replace")[:500]
            if exc.code == 456:
                raise QuotaExceededError("DeepL monthly API character quota is exhausted.") from None
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
    try:
        products = json.loads(PRODUCTS.read_text(encoding="utf-8"))
    except FileNotFoundError:
        raise SystemExit("products.json was not found.")
    if not isinstance(products, list):
        raise SystemExit("products.json must be a JSON list.")

    missing_fields = sum(
        1 for product in products if isinstance(product, dict)
        for field in ("name", "description")
        for lang in TARGET_LANGUAGES
        if str(product.get(field) or "").strip()
        and not str(product.get(f"{field}_{lang}") or "").strip()
    )
    if not API_KEY:
        if missing_fields:
            print(f"WARNING: DEEPL_API_KEY is unavailable; {missing_fields} new or changed product fields will keep the English fallback.")
        else:
            print("All supported product translations are already present; DeepL API key is not needed.")
        return

    translated = 0
    quota_exhausted = False
    for lang, target_code in TARGET_LANGUAGES.items():
        pending = []
        # Store references to the product dictionaries and fields, then send
        # several products together to reduce API calls and workflow runtime.
        for product in products:
            if not isinstance(product, dict):
                continue
            for source_field, target_field in (
                ("name", f"name_{lang}"),
                ("description", f"description_{lang}"),
            ):
                source_text = str(product.get(source_field) or "").strip()
                if source_text and not str(product.get(target_field) or "").strip():
                    pending.append((product, target_field, source_text))

        for offset in range(0, len(pending), BATCH_SIZE):
            batch = pending[offset:offset + BATCH_SIZE]
            try:
                results = deepl_translate([item[2] for item in batch], target_code)
            except QuotaExceededError as exc:
                print(f"WARNING: {exc} New or changed product fields without translations will use the English fallback.")
                quota_exhausted = True
                break
            for (product, field, _), value in zip(batch, results):
                product[field] = value.strip()
            translated += len(results)
        if pending and not quota_exhausted:
            print(f"Translated {len(pending)} fields into {lang}")
        if quota_exhausted:
            break

    PRODUCTS.write_text(
        json.dumps(products, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"DeepL completed: {translated} fields translated across {len(TARGET_LANGUAGES)} supported languages.")
    print("Irish (ga) and Maltese (mt) are not supported by this DeepL target-language configuration and retain the existing fallback.")

if __name__ == "__main__":
    main()

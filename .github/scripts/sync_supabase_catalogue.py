#!/usr/bin/env python3
"""Pull the public AKINI catalogue from Supabase into the static Pages source."""
import json
import re
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[2]
CONFIG = ROOT / "supabase-config.js"
OUTPUT = ROOT / "products.json"

def config_value(source, key):
    match = re.search(r'\b' + re.escape(key) + r'\s*:\s*["\']([^"\']+)["\']', source)
    if not match:
        raise SystemExit(f"Missing {key} in supabase-config.js")
    return match.group(1)

source = CONFIG.read_text(encoding="utf-8")
base_url = config_value(source, "url").rstrip("/")
api_key = config_value(source, "publishableKey")
query = urlencode({"select": "*", "order": "category.asc,name.asc"})
request = Request(
    f"{base_url}/rest/v1/products?{query}",
    headers={"apikey": api_key, "Accept": "application/json"},
)
try:
    with urlopen(request, timeout=30) as response:
        rows = json.loads(response.read().decode("utf-8"))
except Exception as exc:
    raise SystemExit(f"Could not read the public Supabase product catalogue: {exc}")

if not isinstance(rows, list) or not rows:
    raise SystemExit("Supabase returned an empty or invalid catalogue; refusing to overwrite products.json")

try:
    previous_products = json.loads(OUTPUT.read_text(encoding="utf-8"))
except (FileNotFoundError, json.JSONDecodeError):
    previous_products = []
previous_by_id = {
    str(item.get("id")): item for item in previous_products
    if isinstance(item, dict) and item.get("id")
}

products = []
for row in rows:
    if not isinstance(row, dict):
        continue
    product = {key: value for key, value in row.items() if key != "extra"}
    extra = row.get("extra") or {}
    if isinstance(extra, dict):
        product.update(extra)
    previous = previous_by_id.get(str(product.get("id")), {})
    # Supabase stores the source catalogue; retain generated DeepL fields from
    # the previous static catalogue when their English source has not changed.
    for source_field in ("name", "description"):
        if previous.get(source_field) == product.get(source_field):
            prefix = source_field + "_"
            for key, value in previous.items():
                if key.startswith(prefix) and value and not product.get(key):
                    product[key] = value
    products.append(product)

if not products:
    raise SystemExit("No valid product records were returned; refusing to overwrite products.json")

OUTPUT.write_text(json.dumps(products, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Pulled {len(products)} AKINI products from Supabase into products.json")

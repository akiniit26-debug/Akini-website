import json
import re
import os
from pathlib import Path
from urllib.parse import urlparse
from datetime import datetime, timezone

def required(name):
    value = os.environ.get(name, "").strip()
    if not value:
        raise SystemExit(f"Missing required field: {name}")
    return value

def https_url(value, field):
    parsed = urlparse(value)
    if parsed.scheme != "https" or not parsed.netloc:
        raise SystemExit(f"{field} must be a valid HTTPS URL")
    return value

name = required("PRODUCT_NAME")
category = required("PRODUCT_CATEGORY")
if category not in {"Pets", "Home", "Lifestyle"}:
    raise SystemExit("Invalid category")
image_url = https_url(required("PRODUCT_IMAGE"), "Image URL")
retailer_url = https_url(required("PRODUCT_URL"), "Retailer URL")
slug = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")[:60]
if not slug:
    raise SystemExit("Could not create a product ID from the name")

asin = os.environ.get("PRODUCT_ASIN", "").strip().upper()
if not asin:
    match = re.search(r"/(?:dp|gp/product)/([A-Z0-9]{10})", retailer_url, re.I)
    asin = match.group(1).upper() if match else ""
if asin and not re.fullmatch(r"[A-Z0-9]{10}", asin):
    raise SystemExit("ASIN must be exactly 10 letters/numbers")

path = Path("products.json")
try:
    products = json.loads(path.read_text(encoding="utf-8"))
except FileNotFoundError:
    products = []
if not isinstance(products, list):
    raise SystemExit("products.json must contain a JSON list")

existing_index = next((i for i, old in enumerate(products)
                       if isinstance(old, dict) and old.get("id") == slug), None)
existing = products[existing_index] if existing_index is not None else {}
product = {
    **existing,
    "id": slug,
    "name": name,
    "name_it": os.environ.get("PRODUCT_NAME_IT", "").strip() or existing.get("name_it", ""),
    "category": category,
    "image": image_url,
    "url": retailer_url,
    "description": os.environ.get("PRODUCT_DESCRIPTION", "").strip() or existing.get("description", ""),
    "description_it": os.environ.get("PRODUCT_DESCRIPTION_IT", "").strip() or existing.get("description_it", ""),
    "updated_at": datetime.now(timezone.utc).isoformat()
}
if asin:
    product["asin"] = asin
if existing_index is not None:
    products[existing_index] = product
else:
    products.append(product)
path.write_text(json.dumps(products, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Saved product: {name} ({category})")

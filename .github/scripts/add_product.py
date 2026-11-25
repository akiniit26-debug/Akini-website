import json
import re
import os
from pathlib import Path
from urllib.parse import urlparse

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

path = Path("products.json")
try:
    products = json.loads(path.read_text(encoding="utf-8"))
except FileNotFoundError:
    products = []
if not isinstance(products, list):
    raise SystemExit("products.json must contain a JSON list")

product = {
    "id": slug,
    "name": name,
    "name_it": os.environ.get("PRODUCT_NAME_IT", "").strip(),
    "category": category,
    "image": image_url,
    "url": retailer_url,
    "description": os.environ.get("PRODUCT_DESCRIPTION", "").strip(),
    "description_it": os.environ.get("PRODUCT_DESCRIPTION_IT", "").strip(),
    "updated_at": __import__("datetime").datetime.now(__import__("datetime").timezone.utc).isoformat()
}
for index, old in enumerate(products):
    if isinstance(old, dict) and old.get("id") == slug:
        products[index] = product
        break
else:
    products.append(product)
path.write_text(json.dumps(products, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Saved product: {name} ({category})")

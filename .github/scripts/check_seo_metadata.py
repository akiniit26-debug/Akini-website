#!/usr/bin/env python3
"""Validate AKINI SEO metadata and sitemap consistency on every push."""
from html.parser import HTMLParser
from pathlib import Path
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
BASE = "https://akini.eu/"
EXCLUDED = {"404.html", "manage-products.html"}

class HeadParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_head = False
        self.in_title = False
        self.title_parts = []
        self.titles = 0
        self.descriptions = []
        self.canonicals = []
        self.robots = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag.lower() == "head":
            self.in_head = True
        elif self.in_head and tag.lower() == "title":
            self.titles += 1
            self.in_title = True
        elif self.in_head and tag.lower() == "meta":
            if attrs.get("name", "").lower() == "description":
                self.descriptions.append(attrs.get("content", "").strip())
            if attrs.get("name", "").lower() == "robots":
                self.robots.append(attrs.get("content", "").lower())
        elif self.in_head and tag.lower() == "link":
            rel = {x.lower() for x in attrs.get("rel", "").split()}
            if "canonical" in rel:
                self.canonicals.append(attrs.get("href", "").strip())

    def handle_endtag(self, tag):
        if tag.lower() == "title":
            self.in_title = False
        elif tag.lower() == "head":
            self.in_head = False

    def handle_data(self, data):
        if self.in_title:
            self.title_parts.append(data)

def fail(message):
    print("ERROR:", message)
    return False

errors = []
html_files = sorted(p for p in ROOT.glob("*.html") if p.name not in EXCLUDED)
canonical_seen = {}
for page in html_files:
    parser = HeadParser()
    try:
        parser.feed(page.read_text(encoding="utf-8"))
    except Exception as exc:
        errors.append(f"{page.name}: could not parse HTML: {exc}")
        continue
    title = "".join(parser.title_parts).strip()
    desc = parser.descriptions
    canonical = parser.canonicals
    expected = BASE if page.name == "index.html" else BASE + page.name
    if parser.titles != 1 or not title:
        errors.append(f"{page.name}: expected exactly one non-empty <title>")
    if len(desc) != 1 or not desc[0]:
        errors.append(f"{page.name}: expected exactly one non-empty meta description")
    if len(canonical) != 1 or not canonical[0]:
        errors.append(f"{page.name}: expected exactly one canonical link")
    elif canonical[0] != expected:
        errors.append(f"{page.name}: canonical is {canonical[0]!r}; expected {expected!r}")
    if canonical:
        url = canonical[0]
        if url in canonical_seen:
            errors.append(f"{page.name}: canonical duplicates {canonical_seen[url]}")
        else:
            canonical_seen[url] = page.name

sitemap_path = ROOT / "sitemap.xml"
if not sitemap_path.exists():
    errors.append("sitemap.xml is missing")
else:
    try:
        ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        root = ET.parse(sitemap_path).getroot()
        sitemap_urls = {node.text.strip() for node in root.findall(".//sm:loc", ns) if node.text}
        expected_urls = {BASE if p.name == "index.html" else BASE + p.name for p in html_files}
        missing = sorted(expected_urls - sitemap_urls)
        stale = sorted(url for url in sitemap_urls if url.startswith(BASE) and (ROOT / url.removeprefix(BASE)).is_file() is False and url != BASE)
        if missing:
            errors.append(f"sitemap.xml is missing {len(missing)} indexable HTML pages: " + ", ".join(missing[:12]))
        if stale:
            errors.append(f"sitemap.xml contains {len(stale)} URLs without matching files: " + ", ".join(stale[:12]))
    except Exception as exc:
        errors.append(f"sitemap.xml could not be parsed: {exc}")

if errors:
    print(f"AKINI SEO validation failed with {len(errors)} issue(s):")
    for item in errors:
        print(" -", item)
    sys.exit(1)
print(f"AKINI SEO validation passed: {len(html_files)} indexable HTML pages have unique titles, descriptions and self-canonical URLs; sitemap.xml covers them all.")

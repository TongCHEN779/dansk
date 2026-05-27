# -*- coding: utf-8 -*-
"""
Fetch pronunciation data from ordnet.dk and update _data/vocabulary/*.yml files.

Usage (from repo root):
    python _pages/ord_og_gram/ordnet.py adj fortrolig
    python _pages/ord_og_gram/ordnet.py adj fortrolig frodig
    python _pages/ord_og_gram/ordnet.py verb abonnere
"""

from urllib import request, parse
from bs4 import BeautifulSoup
import argparse
import yaml
import os
import sys

DATA_DIR = os.path.join(os.path.dirname(__file__), "../../_data/vocabulary")

WORD_KEY = {
    "adj":  "dansk",
    "sub":  "dansk",
    "verb": "dansk",
    "adv":  "adverb",
    "praep": "praep",
}

def fetch_pronunciation(word):
    url = "https://ordnet.dk/ddo/ordbog?query=" + parse.quote(word)
    req = request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    page = request.urlopen(req)
    soup = BeautifulSoup(page, "html.parser")

    mp3_tag = soup.find("a", href=lambda h: h and ".mp3" in h)
    mp3 = mp3_tag["href"].strip() if mp3_tag else ""

    ipa_tag = soup.find("span", class_="lydskrift")
    ipa = ipa_tag.text.strip() if ipa_tag else ""

    return mp3, ipa

def update_flat(data, word_key, word, mp3, ipa):
    for entry in data:
        if entry.get(word_key, "").strip().lstrip("at ") == word or entry.get(word_key, "") == word:
            entry["mp3"] = mp3
            entry["ipa"] = ipa
            entry["audio_id"] = word
            return True
    return False

def update_sections(data, word_key, word, mp3, ipa):
    for section in data.get("sections", []):
        for entry in section.get("entries", []):
            if entry.get(word_key, "") == word:
                entry["mp3"] = mp3
                entry["ipa"] = ipa
                entry["audio_id"] = word
                return True
    return False

def main():
    parser = argparse.ArgumentParser(description="Fetch pronunciation from ordnet.dk into YAML vocabulary files.")
    parser.add_argument("vocab_type", help="Vocabulary type: adj, sub, verb, adv, praep, konj, fast, pron")
    parser.add_argument("words", nargs="+", help="Danish word(s) to update")
    args = parser.parse_args()

    yml_path = os.path.join(DATA_DIR, args.vocab_type + ".yml")
    if not os.path.exists(yml_path):
        print(f"Error: {yml_path} not found.", file=sys.stderr)
        sys.exit(1)

    with open(yml_path, encoding="utf-8") as f:
        data = yaml.safe_load(f)

    is_sections = isinstance(data, dict) and "sections" in data
    word_key = WORD_KEY.get(args.vocab_type, "dansk")

    for word in args.words:
        print(f"Fetching '{word}' from ordnet.dk...", end=" ", flush=True)
        try:
            mp3, ipa = fetch_pronunciation(word)
            if not mp3:
                print("WARNING: no mp3 found, skipping.")
                continue
        except Exception as e:
            print(f"ERROR: {e}")
            continue

        if is_sections:
            found = update_sections(data, word_key, word, mp3, ipa)
        else:
            found = update_flat(data, word_key, word, mp3, ipa)

        if found:
            print(f"updated  ipa={ipa}  mp3={mp3}")
        else:
            print(f"WARNING: '{word}' not found in {args.vocab_type}.yml — add the entry first.")

    with open(yml_path, "w", encoding="utf-8") as f:
        yaml.dump(data, f, allow_unicode=True, default_flow_style=False, sort_keys=False, width=10000)
    print("Saved.")

if __name__ == "__main__":
    main()
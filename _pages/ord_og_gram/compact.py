# -*- coding: utf-8 -*-
"""
Write the short ordnet-style inflection strings used by the vocabulary tables
into _data/vocabulary/{sub,verb,adj}.yml (fields `bojning`, and `grad` for adjectives).

    en adfærd      ->  -en, -, -ene
    at abonnere    ->  -r, -de, -t
    adelig         ->  -t, -e      /   mere -, mest -

Irregular words are written out in full.  Run from the repo root after adding or
editing entries (the tables fall back to the long forms if `bojning` is missing):

    python _pages/ord_og_gram/compact.py
"""
import os
import re
import sys
import yaml

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../_data/vocabulary")
NONE = "–"   # "no such form" (the data uses "-")


# ---------------------------------------------------------------- helpers
def strip_note(word):
    return re.sub(r"\(.*?\)", "", word).strip()


def noun_stem(dansk):
    return re.sub(r"^(en|et)\s+", "", strip_note(dansk)).strip()


def verb_stem(dansk):
    return re.sub(r"^at\s+", "", strip_note(dansk)).strip()


def common_prefix(a, b):
    n = 0
    while n < min(len(a), len(b)) and a[n] == b[n]:
        n += 1
    return n


def noun_suffix(stem, form):
    """-xx relative to the stem, '-' if identical, else the whole form."""
    if form == stem:
        return "-"
    n = common_prefix(stem, form)
    if n >= 3 and n * 2 >= len(stem):
        return "-" + form[n:]
    return form


def per_alt(fn, form):
    return "/".join(fn(part.strip()) for part in form.split("/"))


# ---------------------------------------------------------------- nouns
def compact_noun(e):
    stem = noun_stem(e["dansk"])
    b, p, pb = (str(e.get(k, "-")) for k in ("bestemt", "flertal_ubestemt", "flertal_bestemt"))
    parts = []
    for i, form in enumerate((b, p, pb)):
        if form in ("-", ""):
            parts.append(NONE)
        elif i == 1:                                 # plural: identical to singular is "-"
            parts.append(per_alt(lambda f: noun_suffix(stem, f), form))
        else:
            parts.append(per_alt(lambda f: noun_suffix(stem, f), form))
    while len(parts) > 1 and parts[-1] == NONE:       # no plural: just the definite form
        parts.pop()
    return ", ".join(parts)


# ---------------------------------------------------------------- verbs
def verb_part(stem, form):
    bases = [stem] + ([stem[:-1]] if stem.endswith("e") else [])
    for base in bases:
        if form.startswith(base) and len(form) > len(base):
            return "-" + form[len(base):]
    return None


def compact_verb(e, group):
    stem = verb_stem(e["dansk"])
    n, d, f = (str(e.get(k, "")) for k in ("nutid", "datid", "fornutid"))
    full = ", ".join((n, d, f))
    if str(group) not in ("1", "2"):                  # irregular: write everything
        return full
    if not f.startswith("har "):
        return full
    f = f[4:]
    out = []
    for form in (n, d, f):
        alts = [verb_part(stem, a.strip()) for a in form.split("/")]
        if any(a is None for a in alts):
            return full
        out.append("/".join(alts))
    return ", ".join(out)


# ---------------------------------------------------------------- adjectives
def compact_adj(e):
    stem = strip_note(e["dansk"])
    t, el = str(e.get("t_form", "")), str(e.get("e_form", ""))
    k, s = str(e.get("komparativ", "")), str(e.get("superlativ", ""))
    te = "-t, -e" if (t == stem + "t" and el == stem + "e") else f"{t}, {el}"
    grad = "mere -, mest -" if (k == "mere " + stem and s == "mest " + stem) else f"{k}, {s}"
    return te, grad


# ---------------------------------------------------------------- yml (line based, keeps the file's formatting)
def scalar(key, value):
    return yaml.safe_dump({key: value}, allow_unicode=True, width=10 ** 6).rstrip("\n")


def set_field(block, key, value, after):
    """block = list of lines of one entry. Replace/insert `  key: value`."""
    line = "  " + scalar(key, value)
    for i, l in enumerate(block):
        if l.startswith("  %s:" % key):
            block[i] = line
            return
    for i in range(len(block) - 1, -1, -1):
        if any(block[i].startswith("  %s:" % a) for a in after):
            block.insert(i + 1, line)
            return
    block.append(line)


def split_blocks(text):
    lines = text.split("\n")
    head, blocks, cur = [], [], None
    for l in lines:
        if l.startswith("- "):
            cur = [l]
            blocks.append(cur)
        elif cur is not None:
            cur.append(l)
        else:
            head.append(l)
    return head, blocks


def process(kind):
    path = os.path.join(DATA_DIR, kind + ".yml")
    text = open(path, encoding="utf-8").read()
    head, blocks = split_blocks(text)
    changed = 0
    for blk in blocks:
        trailing = []
        while blk and blk[-1] == "":
            trailing.append(blk.pop())
        e = yaml.safe_load("\n".join(blk))[0]
        before = list(blk)
        if kind == "sub":
            set_field(blk, "bojning", compact_noun(e), ["kinesisk", "engelsk"])
        elif kind == "verb":
            set_field(blk, "bojning", compact_verb(e, e.get("gruppe")), ["kinesisk", "engelsk"])
        else:
            te, grad = compact_adj(e)
            set_field(blk, "bojning", te, ["kinesisk", "engelsk"])
            set_field(blk, "grad", grad, ["bojning"])
        changed += blk != before
        blk.extend(trailing)
    out = "\n".join(head + [l for b in blocks for l in b])
    open(path, "w", encoding="utf-8").write(out)
    print("%s: %d entries updated" % (kind, changed))


if __name__ == "__main__":
    for k in (sys.argv[1:] or ["sub", "verb", "adj"]):
        process(k)

#!/usr/bin/env python3
"""Complete the self-hosted fonts used by the site.

Italiana (OFL, reserved name "Italiana") has no latin-ext file. Its full
source, not only the latin subset, lacks:
  U+0153 œ, U+00A0 no-break space, U+202F narrow no-break space, U+20AC euro.
The display face is therefore rebuilt from the upstream TTF, with those
glyphs added, and renamed "Coac Display" so the reserved name is not reused.

Montserrat latin 400/500/600 already covers œ, Œ, the French accents, the
guillemets, the apostrophe, the ellipsis, the no-break space and the euro.
latin-ext does not contain œ (it lives in latin) and is kept as published.
The full Montserrat also lacks U+202F. Each used weight gets a one-glyph
file whose advance matches Montserrat's own thin space (U+2009).

Requires: fonttools, brotli, skia-pathops.
"""

from __future__ import annotations

import copy
import sys
from pathlib import Path

import pathops
from fontTools.pens.cu2quPen import Cu2QuPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.transformPen import TransformPen
from fontTools.subset import Options, Subsetter
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
ITALIANA_SRC = ROOT / "src/fonts/upstream/Italiana-Regular.ttf"
MONTSERRAT_LATIN = {
    400: ROOT / "node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff2",
    500: ROOT / "node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff2",
    600: ROOT / "node_modules/@fontsource/montserrat/files/montserrat-latin-600-normal.woff2",
}
OUT_DIR = ROOT / "src/fonts"
DISPLAY_OUT = OUT_DIR / "coac-display-400.woff2"

# Shift of the Italiana "e" onto "o". 360–460 produce one outer contour
# plus the two counters; 370 is the tightest join that stays a single letter.
OE_SHIFT = 370
# Right side bearing of the source "e".
OE_RSB = 30
# Euro bars follow the cap-height proportions of a conventional euro
# (centers at 40% and 60% of the 700-unit cap) and the hairline weight of
# Italiana's horizontal strokes.
EURO_CENTERS = (0.401, 0.599)
EURO_THICKNESS = 10
EURO_LEFT_OVERHANG = 22
EURO_RIGHT_INSET = 70

REQUIRED_DISPLAY = [
    0x0152, 0x0153, 0x00C0, 0x00C7, 0x00C9, 0x00CA,
    0x00E0, 0x00E2, 0x00E7, 0x00E8, 0x00E9, 0x00EA, 0x00EB, 0x00EE, 0x00F4, 0x00FB,
    0x00AB, 0x00BB, 0x00B7, 0x2019, 0x2026, 0x00A0, 0x202F, 0x20AC,
]
REQUIRED_BODY = REQUIRED_DISPLAY


def glyph_path(font: TTFont, name: str, dx: float = 0) -> pathops.Path:
    path = pathops.Path()
    pen = pathops.PathPen(path)
    drawer = TransformPen(pen, (1, 0, 0, 1, dx, 0)) if dx else pen
    font.getGlyphSet()[name].draw(drawer)
    return path


def rect(x0: float, y0: float, x1: float, y1: float) -> pathops.Path:
    path = pathops.Path()
    path.moveTo(x0, y0)
    path.lineTo(x1, y0)
    path.lineTo(x1, y1)
    path.lineTo(x0, y1)
    path.close()
    return path


def path_to_glyph(path: pathops.Path, glyph_set):
    pen = TTGlyphPen(glyph_set)
    quad = Cu2QuPen(pen, max_err=0.5, reverse_direction=False)
    for verb, points in path:
        if verb == pathops.PathVerb.MOVE:
            quad.moveTo(points[0])
        elif verb == pathops.PathVerb.LINE:
            quad.lineTo(points[0])
        elif verb == pathops.PathVerb.QUAD:
            quad.qCurveTo(*points)
        elif verb == pathops.PathVerb.CUBIC:
            quad.curveTo(*points)
        elif verb == pathops.PathVerb.CLOSE:
            quad.closePath()
    glyph = pen.glyph()
    glyph.recalcBounds(glyph_set)
    return glyph


def add_glyph(font: TTFont, name: str, glyph, advance: int, lsb: int) -> None:
    order = font.getGlyphOrder()
    if name not in order:
        order.append(name)
        font.setGlyphOrder(order)
    font["glyf"][name] = glyph
    font["hmtx"][name] = (int(advance), int(lsb))
    font["maxp"].numGlyphs = len(font.getGlyphOrder())


def rename_display(font: TTFont) -> None:
    copyright_notice = (
        "Copyright (c) 2011 Santiago Orozco (hi@typemade.mx), "
        "with reserved font name Italiana. "
        "Modified in 2026 for Mon COACHhabitat: U+0153, U+00A0, U+202F and "
        "U+20AC were added. This modified version is not named Italiana."
    )
    names = {
        0: copyright_notice,
        1: "Coac Display",
        2: "Regular",
        3: "Coac Display Regular; 2026; Mon COACHhabitat",
        4: "Coac Display Regular",
        6: "CoacDisplay-Regular",
        13: "This Font Software is licensed under the SIL Open Font License, Version 1.1.",
        14: "https://scripts.sil.org/OFL",
    }
    table = font["name"]
    table.names = []
    for name_id, text in names.items():
        table.setName(text, name_id, 3, 1, 0x409)
        table.setName(text, name_id, 1, 0, 0)
    kept = []
    for record in table.names:
        if "italiana" in record.toUnicode().lower() and record.nameID != 0:
            continue
        kept.append(record)
    table.names = kept


def build_display() -> None:
    font = TTFont(ITALIANA_SRC)
    source = TTFont(ITALIANA_SRC)
    cmap = source.getBestCmap()
    missing = [hex(cp) for cp in (0x0153, 0x00A0, 0x202F, 0x20AC) if cp in cmap]
    if missing:
        sys.exit(f"upstream Italiana now contains {missing}; revisit the patch")

    oe = pathops.op(
        glyph_path(source, "o"),
        glyph_path(source, "e", OE_SHIFT),
        pathops.PathOp.UNION,
    )
    oe_glyph = path_to_glyph(oe, font.getGlyphSet())
    closes = sum(1 for verb, _ in oe if verb == pathops.PathVerb.CLOSE)
    if closes != 3:
        sys.exit(f"œ union has {closes} contours, expected 3 (outer + two counters)")

    cap = 700
    thickness = EURO_THICKNESS
    c_glyph = source["glyf"]["C"]
    left = c_glyph.xMin - EURO_LEFT_OVERHANG
    right = c_glyph.xMax - EURO_RIGHT_INSET
    euro = glyph_path(source, "C")
    for center in EURO_CENTERS:
        mid = cap * center
        euro = pathops.op(
            euro,
            rect(left, mid - thickness / 2, right, mid + thickness / 2),
            pathops.PathOp.UNION,
        )
    euro_glyph = path_to_glyph(euro, font.getGlyphSet())

    space_adv, _ = font["hmtx"]["space"]
    nbsp = copy.deepcopy(font["glyf"]["space"])
    nnbsp = copy.deepcopy(font["glyf"]["space"])
    add_glyph(font, "oe.custom", oe_glyph, int(round(oe_glyph.xMax + OE_RSB)), int(round(oe_glyph.xMin)))
    add_glyph(font, "Euro.custom", euro_glyph, int(round(euro_glyph.xMax + 40)), int(round(euro_glyph.xMin)))
    add_glyph(font, "nbspace", nbsp, space_adv, 0)
    add_glyph(font, "nnbsp", nnbsp, int(round(space_adv / 2)), 0)

    for table in font["cmap"].tables:
        if table.isUnicode():
            table.cmap[0x0153] = "oe.custom"
            table.cmap[0x20AC] = "Euro.custom"
            table.cmap[0x00A0] = "nbspace"
            table.cmap[0x202F] = "nnbsp"

    rename_display(font)
    font["head"].fontRevision = 1.003
    font.flavor = "woff2"
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    font.save(DISPLAY_OUT)
    check_font(DISPLAY_OUT, REQUIRED_DISPLAY, family="Coac Display", forbidden="italiana")
    print(f"wrote {DISPLAY_OUT.relative_to(ROOT)} ({DISPLAY_OUT.stat().st_size} bytes)")


def build_nnbsp(weight: int, source: Path) -> None:
    if not source.exists():
        sys.exit(f"missing {source}; run npm install before rebuilding the body spaces")
    font = TTFont(source)
    cmap = font.getBestCmap()
    if 0x202F in cmap:
        sys.exit(f"Montserrat {weight} already has U+202F; drop the patch file")
    space_name = cmap[0x0020]
    space_adv, _ = font["hmtx"][space_name]
    advance = int(round(space_adv / 2))
    add_glyph(font, "nnbsp", copy.deepcopy(font["glyf"][space_name]), advance, 0)
    for table in font["cmap"].tables:
        if table.isUnicode():
            table.cmap[0x202F] = "nnbsp"

    options = Options()
    options.layout_features = []
    options.hinting = True
    options.desubroutinize = False
    options.name_IDs = ["*"]
    options.notdef_outline = True
    options.recommended_glyphs = True
    subsetter = Subsetter(options=options)
    subsetter.populate(unicodes=[0x202F])
    subsetter.subset(font)

    out = OUT_DIR / f"montserrat-nnbsp-{weight}.woff2"
    font.flavor = "woff2"
    font.save(out)
    saved = TTFont(out)
    got = saved.getBestCmap()
    if list(got) != [0x202F]:
        sys.exit(f"{out.name} cmap is {list(got)}, expected only U+202F")
    name = got[0x202F]
    if saved["hmtx"][name][0] != advance:
        sys.exit(f"{out.name} advance {saved['hmtx'][name][0]} != {advance}")
    if saved["OS/2"].usWeightClass != weight:
        sys.exit(f"{out.name} weight {saved['OS/2'].usWeightClass} != {weight}")
    print(
        f"wrote {out.relative_to(ROOT)} ({out.stat().st_size} bytes, "
        f"U+202F advance {advance}, space was {space_adv})"
    )


def check_font(path: Path, required: list[int], family: str, forbidden: str | None) -> None:
    font = TTFont(path)
    cmap = font.getBestCmap()
    absent = [f"U+{cp:04X}" for cp in required if cp not in cmap]
    if absent:
        sys.exit(f"{path.name} still misses {', '.join(absent)}")
    families = []
    for record in font["name"].names:
        if record.nameID in (1, 4, 6, 16):
            text = record.toUnicode()
            families.append(text)
            if forbidden and forbidden in text.lower():
                sys.exit(f"{path.name} name table still contains the reserved name: {text}")
    if family not in families:
        sys.exit(f"{path.name} family names {families} do not include {family}")


def main() -> None:
    build_display()
    for weight, source in MONTSERRAT_LATIN.items():
        build_nnbsp(weight, source)


if __name__ == "__main__":
    main()

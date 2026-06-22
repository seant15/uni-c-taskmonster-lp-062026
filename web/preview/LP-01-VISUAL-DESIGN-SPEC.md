# LP #1 Visual Design Spec — Circuit Breaker (live-site aligned)

Date: 2026-06-16 rev.4 | Preview: `web/preview/lp-01-circuit-breaker-tripping.html`  
Source: `design/SITE-EXTRACT.md` from https://gettaskmonsters.com/

---

## App screenshots wired (rev.4 — 2026-06-17)

Sean dropped 23 unnamed PNGs in `web/app_screenshots/`. LP #1 preview now uses real app UI:

| Section | Asset |
| --- | --- |
| Hero | `screenshot_step_2_electrical.PNG` + `screenshot_step_3_sheetrock_experts.PNG` (dual phone stack) |
| Problem | `screenshot_prestep_0.PNG` (I NEED HELP) |
| Steps 1–3 | `screenshot_step_1.PNG`, `screenshot_step_2_electrical.PNG`, `screenshot_step_3_auto_repair_tires_experts.PNG` |
| Safety G/A/R | CSS badges + center demo phone (step_2 electrical) + `screenshot_prestep_0b.PNG` warning strip |
| Before / After | prestep_0 → step_3 + `IMG_6635.PNG` review |

Slot map for dev: `web/app_screenshots/SCREENSHOT-MANIFEST.md`

Hero lifestyle photo: `web/assets/hero-lifestyle-breaker-panel.png` (Higgsfield). Before GIF: `web/assets/before-breaker-frustration.gif`.

Rev.5: Safety H2 centered; red warning text-only; After phones compact side-by-side.

---

## Alignment change (rev.3 — Joseph feedback 2026-06-17)

- H1: **Show** your panel on live video (not "see")
- How it works: Choose trade → topic → Helper (SME) — rescue app framing
- No "real electrician" / generic "expert" in hero or steps
- Lead magnet = **Fit Check Quiz** (replaces PDF)
- Mike story: 10 minutes

Full QA lock: `ops/JOSEPH-CONCEPTUAL-REQUIREMENTS.md`

VERDICT: **Approved for dev handoff** — pending Joseph case study swap

| Element | Live site | LP preview |
| --- | --- | --- |
| Accent | `#007aff` | ✓ |
| Font | Lato 800 headings | ✓ |
| Hero | Blue gradient + slider bg + white type | ✓ |
| Price | H2 uppercase under H1 | ✓ |
| CTA | White pill buttons | ✓ |
| Section H2 | UPPERCASE 34px | ✓ |
| Alt bg | `#f6f6f6` | ✓ |
| Logo / phone | Production assets URL | ✓ |

---

## TASTE AUDIT (design-taste)

DIALS: Variance 4 / Motion 4 / Density 5  
VARIANT: **Soft** — matches live site's friendly blue consumer app landing

ANTI-SLOP (avoided):
- No purple gradient slop stack
- No green CTA off-brand
- No Inter/Plus Jakarta when site uses Lato
- No amber price chip (site uses white H2 hook)

PASSES:
- Matches production color + type + button patterns
- Conversion sections (stat strip, safety, FAQ) use live tokens
- Hero uses real `inner-1.png` + `slider-02.png` overlay

VERDICT: **Approved** — on-brand with gettaskmonsters.com

---

## Open before dev ship

- [ ] Joseph: privacy line legal wording
- [ ] Replace Mike story with questionnaire case
- [ ] Optional: custom hero bg for electrical (breaker photo) — keep blue system

---

## Preview

Open `web/preview/lp-01-circuit-breaker-tripping.html` in browser (desktop + 390px).

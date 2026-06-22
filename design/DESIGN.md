# Task Monsters — Design Constitution

Read this before any LP build, copy change, or dev handoff on gettaskmonsters.com.

## Stack

- Platform: WordPress (Joseph's developer)
- Delivery route: **Route 2-style constitution** (tokens + HTML/CSS classes) — no Elementor MCP on this client
- SEO: **Route 5** blueprints in `design/pages/*.yaml`
- Source of truth: `design/tokens.json` → `design/variables.css` → `design/classes.css`

Brand note: Tokens **extracted from gettaskmonsters.com** (Jun 2026). See `design/SITE-EXTRACT.md`. Do not use UNI green/slate defaults.

## Non-negotiables

1. Primary brand color is ONLY `--tm-blue-500` (`#007AFF`). CTAs on white sections use blue fill; hero CTAs use **white pills** (live `.download-buttons .button` pattern).
2. Page background: white + `#F6F6F6` alt sections (`.bg-grey`). Footer `#1D1D1D`.
3. Fonts: **Lato** for headings and body (matches live `style.css`).
4. Scroll reveal via `.tm-a` + IntersectionObserver — no bounce/elastic easing.
5. No card-inside-card. Feature/step icons = blue circles (70px), not mixed icon packs.
6. Exactly **one H1** per page (`tm-hero-h1`).
7. Price hook in hero: **uppercase H2** — `NO SUBSCRIPTION EVER` / `$9.99 PER CALL` (live site pattern).

## Conversion Laws (locked YES for all 4 LPs)

- Single primary action per screen: **Get the app — $9.99 per call**
- Secondary subordinate: ghost button for free PDF guide (web page only — not in-app)
- **Rescue app positioning** + **App flow steps** — see `ops/JOSEPH-CONCEPTUAL-REQUIREMENTS.md`
- AIDA section order — see `web/COMPETITOR-LP-BLUEPRINT-AUDIT.md`
- Proof at decision points: stat strip below hero, before/after before lead gate
- Nav ≤ 5 items
- Mobile 390px: primary CTA visible without scroll

## Class registry (do not reinvent)

| Class | Role | Count per page |
| --- | --- | --- |
| `tm-hero-h1` | Page H1 | 1 |
| `tm-price-chip` | $9.99 + no subscription | 1 (hero) |
| `tm-stat-strip` | Speed / price / savings proof | 1 |
| `tm-steps` | How it works (3 steps) | 1 |
| `tm-story-card` | Before/after narrative | 1 |
| `tm-trust-strip` | Trust badges | 1 |
| `tm-lead-gate` | Email capture for PDF | 1 |
| `tm-cta-band` | Final app download | 1 |
| `tm-sticky-cta` | Mobile sticky primary CTA | 1 |
| `tm-compare-table` | LP #3 optional, LP #4 required | 0–1 |

## Page assembly

1. Read `design/pages/{slug}.yaml` for SEO + section order
2. Read `web/copy/LP-{nn}-*.md` for final selling copy
3. Apply classes from `design/classes.css` — no one-off hex values in page CSS
4. Run conversion ship checklist in `web/COMPETITOR-LP-BLUEPRINT-AUDIT.md`
5. Designer QA: `/design-review` before dev build

## SEO (Route 5)

Global rules: `design/seo-rules.yaml`
Per-page: `design/pages/*.yaml`
Keyword source: `seo/KEYWORD-MAP.md`

## Deploy safety

- Target site: **gettaskmonsters.com** only
- Joseph's dev owns tracking — spec in `ops/TRACKING-INSTALL-SPEC-DEV.md`
- Privacy claim "patent-pending anonymous" — verify exact wording with Joseph before publish

## Related docs

| Doc | Purpose |
| --- | --- |
| `web/COMPETITOR-LP-BLUEPRINT-AUDIT.md` | Competitor LP patterns |
| `web/LANDING-PAGE-BLUEPRINTS.md` | 8 concepts, 4 build routes |
| `web/copy/LP-*.md` | Full selling copy per page |
| `ops/JOSEPH-CONCEPTUAL-REQUIREMENTS.md` | Joseph feedback lock-in + dev QA |

# S — Task Monsters

Special project client (Growth Pack). Not foldered like standard retainer accounts.

| Field | Value |
| --- | --- |
| Client | Joseph (Joe) Lynott — Founder |
| Email | joelynottsr@gettaskmonsters.com |
| Site | https://gettaskmonsters.com |
| Package | Growth Pack (4 LPs + SEO + Meta/Google + lead magnet) |
| Geo | US first (Pennsylvania incubator context) |
| Status | Kickoff + billing active |

## Folder map

```
S - Task Monsters/
├── README.md                 ← this file
├── design/                   ← constitution: tokens, CSS classes, page SEO yaml
├── web/                      ← copy, competitor audit, designer handoff
│   └── copy/                 ← LP-01 … LP-04 full selling copy
├── seo/                      ← keyword map, blog briefs, on-page
├── paid/                     ← ad structure, creative briefs (later)
├── content/                  ← lead magnets, social, case studies
└── ops/                      ← tracking spec, questionnaires, access
```

## Ownership

| Workstream | Owner | Notes |
| --- | --- | --- |
| Tracking install (Pixel, CAPI, GA4, GTM) | Joseph's developer | UNI delivers spec in `ops/TRACKING-INSTALL-SPEC-DEV.md` |
| Landing page build (4 pages) | Joseph's developer | UNI delivers blueprints + copy in `web/` |
| Strategy, copy, keyword map, ads, SEO | UNI | Sean + team run end-to-end |
| Lead magnet stories / real cases | Joseph | Fill `ops/JOSEPH-QUESTIONNAIRE.md` |
| Reddit / Quora organic | Joseph | UNI provides link targets only |

## Key docs (start here)

1. `ops/JOSEPH-CONCEPTUAL-REQUIREMENTS.md` — **Joseph feedback lock-in + dev QA checklist**
2. `design/LP-GOLDEN-TEMPLATE.md` — **homepage + LP #1 golden template for LPs #2–#4**
3. `web/preview/lp-01-circuit-breaker-tripping.html` — visual reference (open locally)
4. `web/DESIGNER-HANDOFF.md` — designer start here (constitution + wireframe)
5. `web/COMPETITOR-LP-BLUEPRINT-AUDIT.md` — competitor LP patterns
6. `design/SITE-EXTRACT.md` — live site design language from gettaskmonsters.com
7. `design/DESIGN.md` — tokens, classes, conversion guardrails
8. `web/copy/LP-01` … `LP-04` — full selling copy per page
9. `web/LANDING-PAGE-BLUEPRINTS.md` — 8 LP concepts, 4 build routes
10. `seo/KEYWORD-MAP.md` — Keyword Planner data (US, Jun 2026)
11. `ops/TRACKING-INSTALL-SPEC-DEV.md` — developer tracking handoff
12. `ops/JOSEPH-QUESTIONNAIRE.md` — case studies (internal)
13. `ops/GOOGLE-DOC-DELIVERY.md` — Google Doc paste master

## Vercel client preview (Jun 2026)

Static deploy repo for Joseph review — **not** production WordPress.

| Route | Page |
| --- | --- |
| `/` | Preview hub (links to all LPs) |
| `/lp1` | Circuit breaker tripping |
| `/lp2` | Leak under sink |
| `/lp3` | Negotiate contractor quote |
| `/lp4` | Smart home setup stuck |

### Deploy on Vercel

1. Import GitHub repo `seant15/uni-c-taskmonster-lp-062026`
2. Framework preset: **Other** (static)
3. Build command: `npm run build` (regenerates `lp1`–`lp4` from `web/preview/` via Node — Vercel-compatible)
4. Output directory: **`public`** (set automatically via `vercel.json`; do not use repo root)
5. Deploy — no env vars required

### Regenerate routes after editing preview HTML

```powershell
npm run build
# or: powershell -File scripts/build-vercel-pages.ps1
```

Source of truth for page content: `web/preview/lp-0X-*.html` → built to `lpN/index.html`.

## Notion references

- RFP (sent): Task Monsters | 4-Milestone Growth Roadmap & Pricing Options
- Strategy RFP: Task Monsters Strategy Approach x Sean
- Handoff: Client Handoff | Task Monsters | 2026-06-11
- Meetings: Jun 1 + Jun 9, 2026 (Joseph Lynott)

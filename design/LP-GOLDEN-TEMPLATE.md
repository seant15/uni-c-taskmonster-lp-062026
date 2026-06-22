# Task Monsters — LP Golden Template

Date: 2026-06-17 | Status: LP #1 locked as reference · LPs #2–#4 clone from this

Sources:
- Production homepage: https://gettaskmonsters.com/ → `design/SITE-EXTRACT.md`
- LP #1 preview (canonical): `web/preview/lp-01-circuit-breaker-tripping.html`
- Shared CSS: `design/css/lp-shared.css`
- Per-LP overrides: `design/css/lp-XX-page.css` (hero bg image only)
- Fit Check Quiz: `web/quiz/` + `FIT-CHECK-QUIZ-SPEC.md`
- Screenshots: `web/app_screenshots/SCREENSHOT-MANIFEST.md`
- Copy: `web/copy/LP-XX-*.md`
- Joseph QA: `ops/JOSEPH-CONCEPTUAL-REQUIREMENTS.md`

---

## Homepage → LP parity (golden rules)

| Homepage element | LP equivalent | Class / asset |
| --- | --- | --- |
| Blue hero gradient + slider texture | Hero + optional Higgsfield lifestyle | `.tm-hero` + `lp-XX-page.css` bg |
| NO SUBSCRIPTION / $9.99 H2 | Same price hook | `.tm-hero-h2-price` |
| White pill Play/App Store | Primary CTAs | `.tm-btn-primary` in `.tm-download-buttons` |
| ABOUT grey section | Problem "Sound familiar?" | `.tm-section--grey` + `.tm-problem-split` |
| FEATURES 3-column | How it works (3 app steps) | `.tm-steps__grid` + `.tm-step--visual` |
| App screenshots strip | Hero dual phones + steps | `screenshot_step_*` |
| Dark footer | Footer + sticky CTA | `.tm-footer` + `.tm-sticky-cta` |
| Lato 800 uppercase H2 | All section titles | `.tm-section-h2` |

Do not use: UNI green, amber price chips, emoji icons, nested card borders on dark sections.

---

## Standard LP block order (all 4 pages)

```
1. Nav                    .tm-nav — links + dual CTA (Fit check ghost · Download primary)
2. Hero                   .tm-hero + dual phones
3. Stat strip             .tm-stat-strip
4. Problem                .tm-problem-split + Higgsfield + floating app
5. How it works           .tm-steps__grid (3 visual cards)
6. Safety (if trade LP)   .tm-safety__orbit — floating G/A/R + expert phone
7. Before / After         .tm-story__split (GIF top · text bottom)
8. Fit Check band — `.tm-fit-check-band` stop-scroll CTA + quiz (`tm-fit-check-quiz.js`)
9. Trust strip            .tm-trust-strip
10. FAQ                   .tm-faq-wrap
11. Final CTA band        .tm-cta-band
12. Footer + sticky       .tm-footer · .tm-sticky-cta
```

LP #3 (contractor) may swap Safety for honesty/negotiation block. LP #4 adds comparison table per `DESIGNER-HANDOFF.md`.

---

## CSS load order (every LP HTML)

```html
<link rel="stylesheet" href="../../design/variables.css">
<link rel="stylesheet" href="../../design/classes.css">
<link rel="stylesheet" href="../../design/css/site-base.css">
<link rel="stylesheet" href="../../design/css/lp-shared.css">
<link rel="stylesheet" href="../../design/css/lp-XX-page.css">
<link rel="stylesheet" href="../../design/css/tm-fit-check-quiz.css">
```

---

## Per-LP asset + config matrix

| Slot | LP #1 Electrical | LP #2 Plumbing | LP #3 Contractor | LP #4 Smart home |
| --- | --- | --- | --- | --- |
| Hero bg | `hero-lifestyle-breaker-panel.png` | TBD Higgsfield leak/kitchen | TBD quote at table | TBD Ring/Nest setup |
| Hero phone 1 | `step_2_electrical` | `step_2_plumbing` | `step_2_auto_negotiation` | `step_2_computer` |
| Hero phone 2 | `step_3_sheetrock_experts` | same | same | same |
| Problem bg | `problem-plumbing-leak-under-sink.png` | `problem-contractor-quote-overwhelm.png` | TBD | `problem-smart-home-ring-stuck.png` |
| Problem float app | `prestep_0` I NEED HELP | same | same | same |
| Step 1 | `step_1` | same | same | same |
| Step 2 | `step_2_electrical` | `step_2_plumbing` | `step_2_auto_negotiation` | `step_2_computer` |
| Step 3 | `step_3_sheetrock_experts` | same | same | same |
| Safety center | `IMG_6635` Helper profile | same | same | same |
| Before GIF | `before-breaker-frustration.gif` | TBD plumbing GIF | TBD | TBD |
| After phones | step_3 + IMG_6635 | same pattern | same | same |
| Quiz Q7 | Breakers/outlets? | Leak under sink? | Contractor quote? | Smart setup stuck? |
| lpTrade | Electrical | Plumbing | Auto | Computer |
| lpHelpType | craft | craft | negotiate | tech |

---

## Safety section — floating orbit (LP #1 pattern)

Center: Helper expert screenshot (`IMG_6635.PNG` — profile + reviews).

Orbit cards: Green top-left · Amber top-right · Red bottom-left — no borders, glass blur, subtle color glow.

Mobile: phone first, then stacked cards.

---

## Build checklist — clone LP #2–#4

1. Copy `lp-01-circuit-breaker-tripping.html` → `lp-0X-{slug}.html`
2. Swap copy from `web/copy/LP-0X-*.md`
3. Update all screenshot `src` per matrix above
4. Create `design/css/lp-0X-page.css` — hero `::before` bg URL only
5. Set `window.TM_FIT_CHECK_CONFIG` (lpTrade, lpTopic, q7Question, q7Options)
6. Run Joseph QA checklist
7. Optional: generate problem + hero Higgsfield assets per LP pain

---

## Files to create next

| LP | HTML preview | Page CSS | Status |
| --- | --- | --- | --- |
| #2 | `web/preview/lp-02-leak-under-sink.html` | `design/css/lp-02-page.css` | Done 2026-06-21 |
| #3 | `web/preview/lp-03-negotiate-quote.html` | `design/css/lp-03-page.css` | Done 2026-06-21 |
| #4 | `web/preview/lp-04-smart-home-setup-stuck.html` | `design/css/lp-04-page.css` | Done 2026-06-21 |

Pending per LP: Higgsfield hero + problem lifestyle images; LP-specific before GIFs.

---

## Change log

| Date | Note |
| --- | --- |
| 2026-06-21 | LPs #2–#4 HTML previews + lp-02/03/04-page.css; tm-compare-table in lp-shared.css |
| 2026-06-17 | Golden template from homepage + LP #1; safety orbit; lp-shared.css; Fit Check + DISCOUNT20 |

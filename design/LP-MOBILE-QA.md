# LP Mobile QA — LP #1 reference

Date: 2026-06-17 | Viewport targets: 390×844 (iPhone 14), 360×800 (Android)

Design rule source: `design/DESIGN.md` — primary CTA visible at 390px without scroll (hero); sticky CTA always visible.

---

## Checklist (LP #1)

| Item | Target | Status | Notes |
| --- | --- | --- | --- |
| No horizontal scroll | 360–390px | Pass | `body { overflow-x: clip }` + problem phone repositioned |
| Hero H1 readable | ≥24px | Pass | clamp + 390px override |
| Hero CTAs tap target | ≥48px height | Pass | full-width stack at 390px |
| Sticky bottom CTA | visible, ≥48px | Pass | `.tm-sticky-cta` + body padding-bottom |
| Nav | logo + Download | Pass | links hidden <992px (homepage pattern) |
| Stat strip | 1 column | Pass | @640px breakpoint |
| Problem float phone | no clip | Pass | `right: -6%` on mobile |
| Steps cards | single column | Pass | @992px grid |
| Safety orbit | phone first, cards stack | Pass | @991px |
| Before/After | 1 column | Pass | @768px |
| Fit Check band | full-width blue CTA | Pass | `.tm-fit-check-band` + 54px button |
| Quiz options | ≥48px tap | Pass | min-height on `.tm-quiz__option` |
| Trust strip | stacked, centered | Pass | @767px column |
| FAQ details | tappable summary | Pass | native `<details>` |
| Reduced motion | no pulse | Pass | `@prefers-reduced-motion` |

---

## Hero above-fold note (390px)

At 390px the hero still shows H1 + price + deck + 3 CTAs — tight but compliant if user lands mid-page. First-time visitors may need ~1 scroll to see all three hero buttons; Play Store + App Store are full-width and primary. Secondary "2-min fit check" scrolls to `#checklist` band.

Optional P2: shorten hero deck on mobile only (Joseph copy approval).

---

## Fit Check CTA — stop-scroll pattern

Applied best practices:
- Placed immediately after Before/After (strongest proof)
- Full-width blue band (homepage hero parity)
- White elevated card + single primary action
- One friction line (no code): reward shown only if fit, on results screen
- Subtle CTA pulse (disabled with reduced-motion)
- `scroll-margin-top` on `#checklist` for anchor jumps

Spec: `design/css/tm-fit-check-quiz.css` · classes `.tm-fit-check-band`, `.tm-fit-check-card`

---

## Test locally

1. Open `web/preview/lp-01-circuit-breaker-tripping.html`
2. DevTools → 390×844
3. Scroll full page; confirm no sideways scroll
4. Tap Start fit check → quiz card replaces intro card
5. Complete quiz → DISCOUNT20 promo on good/great tier

---

## LP #2–#4

Clone same CSS load order + mobile block in `lp-shared.css`. Per-LP hero deck length may affect above-fold — re-run this checklist after each clone.

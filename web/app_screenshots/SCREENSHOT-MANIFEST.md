# App screenshots — LP slot mapping (auto-inferred)

Folder: `web/app_screenshots/` | Used by: `web/preview/lp-01-circuit-breaker-tripping.html`

Joseph did not name files — mapping below is UNI inference from screen content for LP #1 (Electrical / breakers).

## LP #1 — locked slots

| Slot | File | Screen content |
| --- | --- | --- |
| Hero primary phone | `screenshot_step_2_electrical.PNG` | Electrical topics — **Breakers** row visible |
| Hero secondary phone | `screenshot_step_3_sheetrock_experts.PNG` | Choose Helper — Connect the call UI (same flow all trades) |
| Step 1 — Choose trade | `screenshot_step_1.PNG` | SME CATEGORY list (Electrical DIY…) |
| Step 2 — Choose topic | `screenshot_step_2_electrical.PNG` | Breakers / Outlets / Switches |
| Step 3 — Choose Helper | `screenshot_step_3_sheetrock_experts.PNG` | Expert cards + Connect the call |
| Problem / rescue | `screenshot_prestep_0.PNG` | I NEED HELP — DIY rescue onboarding |
| Before story | `../assets/before-breaker-frustration.gif` (Giphy — frustration) |
| After story — connect | `screenshot_step_3_sheetrock_experts.PNG` (side-by-side, xs frame) |
| After story — proof | `IMG_6635.PNG` (side-by-side, xs frame) |
| Safety visual (expert center) | `IMG_6635.PNG` | Helper profile + reviews — orbit layout |
| Safety — pro warning tone | Text only (Terms screenshot removed from LP) |

## LP #2 — leak under sink

| Slot | File |
| --- | --- |
| Hero primary | `screenshot_step_2_plumbing.PNG` |
| Step 2 | `screenshot_step_2_plumbing.PNG` |
| Safety center | `IMG_6635.PNG` |
| Before story | `../assets/before-breaker-frustration.gif` (plumbing alt — swap when asset ready) |

Preview: `web/preview/lp-02-leak-under-sink.html`

## LP #3 — negotiate quote

| Slot | File |
| --- | --- |
| Hero primary | `screenshot_step_2_auto_negotiation.PNG` |
| Step 2 | `screenshot_step_2_auto_negotiation.PNG` |
| Compare table | no app screenshot |

Preview: `web/preview/lp-03-negotiate-quote.html`

## LP #4 — smart home setup stuck

| Slot | File |
| --- | --- |
| Hero primary | `screenshot_step_2_computer.PNG` |
| Step 2 | `screenshot_step_2_computer.PNG` |
| Scope honesty | text block only |

Preview: `web/preview/lp-04-smart-home-setup-stuck.html`

## Available for other LPs (not used on LP #1)

| File | Best for |
| --- | --- |
| `screenshot_step_2_plumbing.PNG` | LP #2 plumbing topic |
| `screenshot_step_2_auto_negotiation.PNG` | LP #3 contractor |
| `screenshot_step_2_handyman.PNG` | General / handyman |
| `screenshot_prestep_0c.PNG` | Sign in (dev reference only) |
| `screenshot_prestep_0d.PNG` | Home — SME category card |
| `notification tab.PNG` | Notifications / welcome |
| `IMG_6636.PNG` | Add card / call timing note |

## Green / Amber / Red

No dedicated G/A/R screens in folder. LP uses:

- CSS traffic-light badges (design tokens)
- In-app **Breakers** screenshot as green-tier example
- Terms **WARNING** screenshot as red-tier “stop / pro” tone reference

If Joseph adds G/A/R app screens later, replace `tm-safety__demo` image only.

## Dev note

Preview HTML uses relative paths: `../app_screenshots/{filename}`. Joseph's WordPress build should copy assets to theme or CDN and update `src` in production template.

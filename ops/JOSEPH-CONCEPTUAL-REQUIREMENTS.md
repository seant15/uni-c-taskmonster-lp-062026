# Task Monsters — Joseph Conceptual Requirements (Dev QA Lock)

Date: 2026-06-17 | Source: Google Doc feedback — Joseph Lynott  
Doc: https://docs.google.com/document/d/1Cq7r8Rb7TpV7TVrxG4YnaSuGdVYl-tOKoBC9JRxKLfE/edit

Use this checklist before shipping any LP, ad, or App Store copy. All items are client-mandated conceptual locks from Jun 2026 doc review.

---

## 1. Product positioning — Rescue App

Joseph lock-in: Task Monsters is a **rescue app for DIYers**, not a generic "ask an expert" marketplace.

| Do | Don't |
| --- | --- |
| Frame visitor journey: Google → YouTube → AI → **still stuck → rescue on Task Monsters** | Open with "match an expert in 60 seconds" as the product story |
| Use "rescue", "get unstuck", "when DIY fails" language in hero/problem sections | Describe the app as a questionnaire or intake form product |
| Acknowledge DIYers try free sources first — then need human help on **their** setup | Imply Task Monsters replaces Google/YouTube as step one |

Dev QA: Problem section mentions YouTube/AI/search before App CTA. Hero deck includes rescue framing.

---

## 2. How it works — App flow (exact 3 steps)

Joseph lock-in: In-app flow after download is **NOT** "describe → match → video". It is:

| Step | In-app action | LP copy label |
| --- | --- | --- |
| 1 | Choose the **DIY subject trade** (e.g. Electrical) | Choose your trade |
| 2 | Choose a **topic** (e.g. Circuit breaker keeps tripping) | Choose your topic |
| 3 | Choose a **Helper** (Subject Matter Expert) → live video rescue | Choose a Helper — get rescued on live video |

Per-LP examples (pre-fill topic in Step 2 where page is use-case specific):

- LP #1 Electrical: Trade = Electrical · Topic = Circuit breaker keeps tripping  
- LP #2 Plumbing: Trade = Plumbing · Topic = Leak under the sink  
- LP #3 Contractor: Trade = Home improvement / negotiation · Topic = Contractor quote review  
- LP #4 Smart home: Trade = Smart home · Topic = Setup stuck (Ring / Nest / camera)

Dev QA: No step titled "Get matched in seconds" or "Describe what's happening" as Step 1. Step 3 must say Helper or SME, not generic "expert" alone.

---

## 3. Terminology — Subject Matter Expert (SME)

| Use | Avoid |
| --- | --- |
| Subject Matter Expert, SME, Helper, Task Monster, someone with experience | "Real electrician", "real plumber", "real expert" (implies licensed trade) |
| "Licensed electrician" only in RED safety / when-to-call-a-pro blocks | Licensed trade titles in hero or How it works |

Joseph edits in doc: replaced "a real electrician" → "someone with experience"; added "Subject Matter Expert" in template step 2.

Dev QA: Grep LP for `real electrician`, `real plumber`, `real expert` before publish — should be zero in hero/how-it-works.

---

## 4. Hero copy — LP #1 electrical (locked edits)

| Field | Locked copy direction |
| --- | --- |
| H1 | **Show** your panel on live video — not "See your panel" (Joseph: "Show your panel on Live Video?") |
| Hero A angle | Talk to someone with experience — not "a real electrician in 60 seconds" |
| Hero B | One live **Subject Matter Expert** walkthrough — not generic "expert" |
| Before/After timing | **10-minute** call (not 12) until Joseph supplies real case study |

Dev QA: H1 contains "show" + "live video". Mike story says 10 minutes.

---

## 5. Lead magnet vs questionnaire — not the app

Joseph confusion (doc top): "Are these ads? Are these tasks for me?" + "I can't create a new section that sends questionnaires. That is not the app."

| Item | What it is | What it is NOT |
| --- | --- | --- |
| **Fit Check Quiz** on LP (Jun 2026 rev.) | Web marketing — 8-question self-assessment (~2 min) to see if Task Monsters fits; optional email on result | An in-app feature or questionnaire flow |
| Old PDF lead magnets | **Retired** — replaced by shared Fit Check Quiz | — |
| `ops/JOSEPH-QUESTIONNAIRE.md` | Internal doc for Joseph to supply case studies to UNI | Something visitors fill out on the live site as part of app UX |
| Funnel | Ad/search → LP → App download (primary) or fit check → optional email (secondary) | Joseph's task to build ads himself |

Copy requirement near quiz:

> Web only — not part of the app. Download when you're ready to get rescued on live video.

Dev QA: No UI copy saying "fill out our questionnaire" as **app steps**. Quiz is labeled as web fit check only. Spec: `web/quiz/FIT-CHECK-QUIZ-SPEC.md`

---

## 6. Route 4 honesty line — plain English

Original (confusing to Joseph): "not certified Ring/Nest installers for every SKU…"

Approved plain version for all Route 4 touchpoints:

> We're not Ring- or Nest-certified installers. If you're stuck mid-install, a Helper can look at your wiring and app on live video and help you decide whether to fix it yourself or call a pro — $9.99 once, no subscription.

Dev QA: Route 4 pages include this or shorter variant in hero deck or honesty block. No jargon-only "SKU" in customer-facing copy without explanation.

---

## 7. Funnel & lead magnet — client education (for replies, not on LP)

When Joseph asks again, UNI standard answer:

- **Funnel** = path from ad/Google → landing page → App Store / Play Store (main conversion).  
- **Lead magnet** = **Fit Check Quiz** on the page (8 Q, ~2 min) — captures optional email on result; spec `web/quiz/FIT-CHECK-QUIZ-SPEC.md`; **not** an app feature.  
- **UNI delivers**: strategy, LP copy/design, keywords, ad creative spec, tracking spec.  
- **Joseph / dev delivers**: site build, tracking install, real case stories, App Store assets.

---

## Pre-ship checklist (all 4 LPs)

```
[ ] Rescue app framing in problem/hero (after YouTube/AI, not before)
[ ] How it works = Choose trade → Choose topic → Choose Helper (SME)
[ ] No "real electrician/plumber/expert" in hero or steps
[ ] SME / Helper / someone with experience used consistently
[ ] Fit check quiz labeled as web only — not app questionnaire
[ ] LP #1 H1 uses "show your panel on live video"
[ ] Route 4 honesty in plain English (if applicable)
[ ] Before/after uses Joseph-approved numbers/stories when available
[ ] Privacy line verified with Joseph before publish
```

---

## Change log

| Date | Change |
| --- | --- |
| 2026-06-17 | Initial lock from Google Doc suggesting mode — 10 comments, Joseph Lynott |

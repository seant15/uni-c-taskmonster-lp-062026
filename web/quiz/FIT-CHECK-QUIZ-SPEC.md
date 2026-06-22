# Task Monsters Fit Check — Self-Assessment Quiz (all LPs)

Date: 2026-06-17 | Owner: UNI | Dev wire: `web/quiz/tm-fit-check-quiz.js` + `design/css/tm-fit-check-quiz.css`

Purpose: Replace per-page PDF lead magnets with one shared **2-minute fit check** (~8 questions + result). Visitor learns if Task Monsters is right before downloading. Lives on **web LP only** — not in-app (Joseph lock-in).

---

## Design principles

- Under 10 questions, under 2 minutes (target ~90 seconds)
- One question per screen, progress bar, big tap targets (mobile-first)
- No email required to see result; optional email capture on result screen for follow-up
- LP-specific hook question pre-selects trade/topic context where page is use-case specific
- Hard disqualifiers: medical, legal, tax/financial licensed advice
- Soft redirects: haven't tried free research yet; want someone to do the job for you; can't use video

---

## Service catalog alignment (from app Step 1 / Step 2)

| App trade (Step 1) | Typical Step 2 modes |
| --- | --- |
| Electrical | DIY topics (Breakers, Outlets…) + Help Negotiate with Electrician |
| Plumbing | DIY + negotiate |
| Handyman / Carpentry / Painting / Gardening | Craft DIY |
| Computer | Tech / setup |
| Auto Salesman | Negotiation |
| Per-LP override | LP injects `lpTrade`, `lpTopic`, `lpHelpType` in config |

Help type taxonomy (Q3):

1. **Craft / DIY** — fix, install, troubleshoot with hands-on guidance on video
2. **Consult / understand** — interpret a quote, scope, or "what should I do next?"
3. **Negotiate** — price, scope, or contractor conversation (Auto Salesman / Help Negotiate rows)

---

## Question set (8 core + result)

### Q1 — Rescue readiness (multi-select)

**"What have you already tried?"**

- Searched Google / forums
- Watched YouTube how-to videos
- Asked AI (ChatGPT, etc.)
- Asked friends or family
- Got a quote or talked to a pro — still unsure
- Nothing yet — just starting

Scoring: +5 per option except "Nothing yet" (−5 if alone). Rescue narrative = 2+ non-pro sources.

### Q2 — Licensed-profession gate (single, hard stop)

**"Is this mainly about…"**

- Home repair, DIY, or contractor help → continue
- **Medical or health** → NOT A FIT
- **Legal or court matter** → NOT A FIT
- **Tax, investing, or financial advice** → NOT A FIT

### Q3 — Help type (single)

**"What kind of help do you need?"**

- Fix or troubleshoot something myself (craft / DIY)
- Understand a quote or scope before I decide
- Negotiate price or terms with a contractor or seller
- Tech / app / device setup help

Maps to catalog; LP config boosts matching type.

### Q4 — Category (single)

**"Which area fits best?"**

Options: Electrical · Plumbing · Handyman · Carpentry · Painting · Gardening · Computer / tech · Auto / buying · Not sure

LP config can highlight default (e.g. LP #1 → Electrical pre-highlighted in copy, not auto-selected).

### Q5 — Safety / urgency (single)

**"Right now, is there immediate danger?"**

- No — annoying or stuck, but safe to keep looking
- Not sure — I'd want someone to look with me on video
- **Yes** — burning smell, shock, major flood, gas smell → STOP: call 911 / licensed pro first (result: emergency, not app now)

### Q6 — Live video (single)

**"Could you show the problem on a live video call with your phone?"**

- Yes — point the camera at it
- Probably — with a little privacy comfort
- No — can't show on video (−25 score)

### Q7 — LP fit (single, injected per page)

**LP #1 (Electrical):** "Does your issue involve breakers, outlets, or household electrical?"

- Yes — breakers or panel
- Yes — outlets, switches, or lighting
- Maybe electrical — not sure
- No — different area (redirect to browse app categories)

**LP #2:** leak / plumbing under sink  
**LP #3:** contractor quote or negotiation  
**LP #4:** smart home / Ring / Nest / camera setup  

### Q8 — Intent & price (combined screen)

**"What are you hoping for?"** (single)

- Guide me while I do it myself — best fit
- Help me decide DIY vs hiring a pro
- Someone to do the work for me — not our model (soft −30)

**"$9.99 for about 10 minutes on live video — works for you?"** (single)

- Yes · I'd try it · Need to think about it

---

## Result tiers

| Score | Tier | Headline | CTA |
| --- | --- | --- | --- |
| 80+ | Great fit | Task Monsters looks like a strong match | Download app + reveal **DISCOUNT20** on result only |
| 60–79 | Good fit | Worth a try — rescue on live video | Reveal **DISCOUNT20** on result only |
| 40–59 | Try first | You might still use us — try free research first | No code — soft CTA only |
| Hard stop | Not a fit | Medical/legal/financial OR emergency | No code |

Pre-quiz reward tease (visual locked box — no code name):
- Label: Locked reward · fit matches only
- Value: 20% off your first rescue call (tease amount OK; code name hidden)
- Blurred code placeholder + "Promo code unlocks on your results screen"
- CTA: Start fit check · unlock my reward

DISCOUNT20 code revealed on result screen only when tier is great or good.

Discount config (result screen only, great/good tiers):

- `discountCode`: `DISCOUNT20`
- `discountPercent`: `20`
- `discountNote`: Apply at checkout in the app on first Helper call

Joseph dev: wire promo code validation in app checkout when ready.

Emergency override: Q5 = Yes → always "Call a licensed pro / 911" regardless of score.

---

## Tracking events (Joseph dev)

- `quiz_start`
- `quiz_step` (step index)
- `quiz_complete` (tier + score bucket)
- `quiz_email_capture` (optional, result screen only)
- `app_store_click` / `play_store_click` from result CTA

---

## Per-LP config keys

```js
window.TM_FIT_CHECK_CONFIG = {
  lpId: 'circuit-breaker',
  lpTrade: 'Electrical',
  lpTopic: 'Breakers',
  lpHelpType: 'craft',
  q7Question: '...',
  q7Options: [ ... ]
};
```

---

## Copy replacement (all 4 LPs)

Replace PDF lead magnet blocks with:

- H2: **Is Task Monsters right for you?**
- Sub: **8 quick questions · about 2 minutes · no email required**
- CTA entry: **Start fit check** (do not mention DISCOUNT20 before quiz)
- Hook: If you're a fit, reward appears on results screen only
- Hero secondary CTA: **Take the 2-min fit check**

Joseph QA: Quiz is **web marketing only** — same as old PDF gate, not an app feature.

# Task Monsters — Tracking Installation Spec (Developer Handoff)

For: Joseph's development team
From: UNI Marketing Agency
Date: 2026-06-16
Site: https://gettaskmonsters.com

Purpose: Install measurement before any paid traffic. GA4 does not exist yet — create from scratch. Meta Pixel status unconfirmed — install fresh and verify.

---

## Prerequisites (Joseph / UNI to confirm)

- [ ] Meta Business Manager access — UNI as partner (Ads + Pixel)
- [ ] Google account for GA4 property (recommend `joelynottsr@gettaskmonsters.com` or dedicated analytics@)
- [ ] Ability to edit site `<head>` and deploy GTM container
- [ ] App Store / Play Store URLs confirmed for click tracking
- [ ] Optional email on quiz result endpoint (Mailchimp, GHL, or native form)

---

## Part 1 — Google Analytics 4 (create new)

### Step 1: Create property

1. Go to https://analytics.google.com
2. Admin → Create → Property
3. Property name: `Task Monsters - Production`
4. Time zone: `America/New_York`
5. Currency: USD
6. Industry: Software / Technology
7. Business size: Small

### Step 2: Web data stream

1. Admin → Data streams → Add stream → Web
2. URL: `https://gettaskmonsters.com`
3. Stream name: `Get Task Monsters Website`
4. Enable Enhanced measurement (scrolls, outbound clicks, site search, video, file downloads)

Copy the Measurement ID: `G-XXXXXXXXXX` — send to UNI.

### Step 3: Recommended events (mark as conversions)

Configure in GA4 → Admin → Events → Mark as conversion:

| Event name | Trigger | Conversion? |
| --- | --- | --- |
| `app_store_click` | User clicks iOS App Store link/button | Yes |
| `play_store_click` | User clicks Google Play link/button | Yes |
| `email_capture` | Quiz result optional email submitted | Yes |
| `quiz_start` | User taps Start fit check | Yes |
| `quiz_step` | Each question advance (param: step 1–8) | Optional |
| `quiz_complete` | Result shown (param: tier, score bucket) | Yes |
| `quiz_discount_copy` | User copies DISCOUNT20 from result | Optional |
| `cta_click` | Primary hero CTA clicked | No (micro) |
| `scroll_75` | User scrolls 75% of LP | No (micro) |
| `phone_click` | Clicks tel: link if present | No (micro) |

### Step 4: Custom parameters (all events)

Pass on LP events where available:

- `page_niche` — e.g. `electrical`, `plumbing`, `contractor`, `smart_home`
- `lp_slug` — e.g. `circuit-breaker-tripping`

---

## Part 2 — Google Tag Manager

### Step 1: Create container

1. https://tagmanager.google.com → Create account `Task Monsters`
2. Container: Web → `gettaskmonsters.com`
3. Install GTM snippet in site `<head>` (first script) and `<body>` (noscript) on **every page**

### Step 2: Tags to configure

| Tag name | Type | Trigger |
| --- | --- | --- |
| GA4 Configuration | Google Tag (GA4) | All Pages |
| GA4 - app_store_click | GA4 Event | Click — links matching `apps.apple.com` or App Store button class |
| GA4 - play_store_click | GA4 Event | Click — links matching `play.google.com` |
| GA4 - email_capture | GA4 Event | Form submission — lead magnet forms only |
| Meta Pixel Base | Custom HTML or Meta template | All Pages |
| Meta - Lead | Meta Pixel Event | email_capture trigger |
| Meta - ViewContent | Meta Pixel Event | LP pages only |

Use CSS selectors or `data-track` attributes — UNI will provide final selectors per LP. Recommended pattern:

```html
<a href="..." data-track="app_store_click" data-niche="electrical">Download on App Store</a>
<a href="..." data-track="play_store_click" data-niche="electrical">Get it on Google Play</a>
<form data-track="email_capture" data-niche="electrical">...</form>
```

GTM trigger: Click / Form Submit where `data-track` equals event name.

---

## Part 3 — Meta Pixel + Conversions API (CAPI)

### Step 1: Create Pixel

1. Meta Events Manager → Connect data sources → Web → Meta Pixel
2. Pixel name: `Task Monsters Website`
3. Copy Pixel ID: `XXXXXXXXXXXXXXX`

### Step 2: Standard events

| Meta event | When | Priority |
| --- | --- | --- |
| PageView | Every page load | Required |
| ViewContent | Each niche LP view | Required |
| Lead | Email capture form submit | Required |
| CompleteRegistration | If app signup tracked on web funnel later | Optional Month 2 |

### Step 3: Conversions API (CAPI)

Browser pixel alone is insufficient (Safari/iOS blocking). Implement CAPI via:

- Option A (preferred if server access): Meta CAPI gateway on server — forward `Lead` + `ViewContent` from form handler
- Option B: GTM server-side container (if Joseph has server-side GTM)
- Option C: Partner integration (Zapier/Make from form webhook — less ideal but acceptable for Month 1)

Minimum CAPI events to duplicate from browser: `Lead`, `ViewContent`

Send with event:

- `event_id` (same as browser for deduplication)
- `user_data`: hashed email if captured (`em`), client IP, user agent
- `custom_data`: `content_name` = niche slug

### Step 4: Domain verification

Meta Business Settings → Brand safety → Domains → add `gettaskmonsters.com` → verify via DNS TXT or meta tag

---

## Part 4 — UTM convention (UNI ads)

All paid links must use:

```
?utm_source={platform}&utm_medium=paid&utm_campaign={niche}_{objective}&utm_content={creative_id}
```

Example:

```
?utm_source=meta&utm_medium=paid&utm_campaign=electrical_install&utm_content=before_after_v1
```

Developer: no action required except ensuring GA4 captures UTM params (default in GA4).

---

## Part 5 — QA checklist (complete before UNI launches ads)

Developer signs off each item; UNI verifies in Tag Assistant + Meta Events Manager Test Events.

| # | Check | Tool | Pass |
| --- | --- | --- | --- |
| 1 | GTM loads on homepage | View source / Tag Assistant | ☐ |
| 2 | GA4 realtime shows homepage visit | GA4 Realtime | ☐ |
| 3 | Click App Store → `app_store_click` in GA4 DebugView | GTM Preview | ☐ |
| 4 | Click Play Store → `play_store_click` in GA4 DebugView | GTM Preview | ☐ |
| 5 | Submit test email form → `email_capture` in GA4 + Meta Lead | Both | ☐ |
| 6 | Meta Pixel PageView fires | Meta Test Events | ☐ |
| 7 | Meta ViewContent fires on LP URL | Meta Test Events | ☐ |
| 8 | CAPI Lead event received (not browser only) | Events Manager → Overview | ☐ |
| 9 | No duplicate GA4 tags (check old agency leftovers) | Tag Assistant | ☐ |
| 10 | UNI granted GA4 Editor + Meta Analyst access | Admin | ☐ |

---

## Part 6 — Access to grant UNI

| Platform | Access level | UNI email |
| --- | --- | --- |
| GA4 | Editor | seant@unimarketingagency.com |
| GTM | Publish | seant@unimarketingagency.com |
| Meta Business Manager | Analyst on Pixel + Ads account | seant@unimarketingagency.com |
| Google Ads | Standard or Admin (via MCC invite) | seant@unimarketingagency.com |

---

## Part 7 — What UNI delivers after tracking is live

1. Final LP URLs with niche slugs
2. Updated `data-track` selectors per page
3. Lead magnet form field names
4. Paid campaign launch (Meta + Google) — only after QA pass

---

## Notes for developer

- Remove any legacy tracking from prior agency before installing new tags (duplicate pixels inflate data)
- Do not send all homepage traffic events as conversions — only the 3 conversion events listed above
- If site is not WordPress, install GTM manually in template header/footer
- If WordPress: use GTM plugin or theme header injection — confirm stack with UNI before LP build

Questions: seant@unimarketingagency.com

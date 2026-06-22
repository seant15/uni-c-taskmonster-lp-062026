# Task Monsters — Live Site Design Extract

Date: 2026-06-16 | Source: https://gettaskmonsters.com/ + `assets/css/style.css`

Use this file when aligning LPs, ads, or new pages to the **production** brand — not UNI agency tokens.

---

## Stack on live site

- Bootstrap-based template (Young Decade IT Software Solution)
- CSS: `bootstrap.min.css`, `plugins.css`, `style.css`
- Fonts (Google): **Lato** (primary), Raleway, Quicksand imported — body uses Lato

---

## Color system (extracted)

| Token | Hex | Live usage |
| --- | --- | --- |
| Brand blue | `#007aff` | Links, icons, feature circles, scroll-up, sticky header, `.c-blue` |
| Hero gradient | `#007aff` → `#c1eafa` | `.gradient-overly` |
| Body text | `#333` | `body` color |
| Heading text | `#383838` | `h1–h6` default |
| Section alt bg | `#f6f6f6` | `.bg-grey` (About section) |
| Footer dark | `#1d1d1d` | `.bg-black` |
| White | `#fff` | Hero text, button fills |
| Bootstrap success/warning/danger | `#28a745` / `#ffc107` / `#dc3545` | Available on site |

---

## Typography patterns

| Element | Live spec |
| --- | --- |
| Hero H1 | 45px, weight 800, capitalize, white on blue |
| Hero H2 (price hook) | White, uppercase — "NO SUBSCRIPTION EVER / $9.99 PER CALL" |
| Hero body | 18px, white, line-height ~24px |
| Section H2 | 34px, weight 800, **UPPERCASE** (ABOUT, FEATURES) |
| Feature H4 | 20px, weight 600 |
| Body | 16px Lato |

---

## Component patterns

### Navigation (`.header-top-2`)
- White link text on hero
- Sticky state: `background: #007aff` (`.is-sticky .header-top-2`)

### Hero (`.hero-slider`)
- Background image `slider/slider-02.png` over blue gradient
- Two-column: copy left, phone mock `inner-1.png` right
- White text class `.white-text`

### Download buttons (`.download-buttons .button`)
- White pill, `border-radius: 30px`
- Uppercase label, dark text `#222`
- Icon color `#007aff`
- Hover: black bg, white text

### Feature icons (`.feature-icon i`)
- 70×70px circle, `#007aff` fill, white icon
- Optional ring animation on hover

### Section rhythm
- `.section-ptb`: 120px vertical padding (desktop)
- About: grey bg + illustration left, copy right
- Features: centered title + 3-column feature layout

---

## LP alignment rules (derived)

1. Primary accent = **`#007aff` only** — not green, not UNI orange
2. Font = **Lato** for headings and body
3. Hero = blue gradient + white type + white pill store buttons
4. Price hook = **uppercase H2** under H1 (site pattern), not amber chip
5. Section titles = **UPPERCASE**, weight 800, 34px
6. Alt sections = `#f6f6f6` grey
7. Logo asset: `https://gettaskmonsters.com/assets/images/logo/logo.png`
8. Phone mock: `assets/images/slider/inner-1.png`

---

## What LPs add (not on homepage)

Conversion sections kept from Growth Pack blueprint but styled with live tokens:
- Stat strip (blue band)
- Safety GREEN/AMBER/RED block (electrical LP)
- Before/after story
- Email lead gate (blue panel)
- FAQ accordion
- Sticky mobile CTA (blue button)

---

## Previous UNI-proposed tokens (superseded)

| Old | New |
| --- | --- |
| `--tm-green-500` CTA | `--tm-blue-500` `#007aff` |
| Plus Jakarta Sans | Lato |
| Slate-50 page bg | White + `#f6f6f6` sections |
| Amber price chip | Hero H2 uppercase price line |

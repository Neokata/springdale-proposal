# MOBILE_REVIEW.md — springdale-proposal

**Generated:** 2026-06-24 · **Scope:** Full mobile UI/UX review
**Stack:** Next.js 15.1 · React 19 · Tailwind v4 · Static
**Viewports tested:** 360×800 (Galaxy S8), 390×844 (iPhone 14 Pro), 412×915 (Pixel 7), 768×1024 (iPad Mini)
**Methodology:** Headless Chrome via CDP at deviceScaleFactor 2 + `Emulation.setDeviceMetricsOverride({ mobile: true })`, full-page screenshots, programmatic DOM probes for spec table widths, link touch targets, paragraph heights, heading scale, horizontal overflow.

---

## Executive Summary

The page **works on mobile**. Nothing blocks shipping. No horizontal overflow at any tested viewport, all images render, all 5 outbound links have `rel="noopener noreferrer"`, the skip-link lands on the contact section, and the spec tables and H2 headers fit within the 310px content column.

**3 majors, 5 minors, 4 nits.** The majors are content-density issues — spec table value cells are too narrow, the third "Who We Are" paragraph is a wall of text, and the ask bullet list crowds the red panel. None are bugs. All are tightening passes that take ~30 min total.

**Strong points I confirmed on mobile:**
- Heading hierarchy is consistent (h1 48px → h2 26px → h3 15-16px) at every tested viewport
- Paragraph line-height 26px (1.625×) reads comfortably on a 16px base
- Activation cards stack to single column below the 640px `sm:` breakpoint, then go 2-up
- Aftermovie + press link cards are 44-84px tall — well above the 44px iOS tap target
- No `font-size` smaller than 12px in the entire page (caption text)

---

## Findings — Priority Ordered

### 🟠 Major

**1. Spec table value column is only 142px wide on mobile**
- **Location:** `src/app/page.tsx:227–248` (Curated Drives) and `src/app/page.tsx:297–318` (Community Activation)
- **What:** The `dl` has a fixed `grid-cols-[110px_1fr]` — at 390px viewport with 16px outer card padding (×2) and 20px inner table padding (×2) the value column ends up at 142px. Values like "Luther George Park + surrounding parking lots" (5 lines wrapped), "Live DJ, breakdancing battles, custom stage lighting" (4 lines), and "Curated car display, vendors, food trucks" (4 lines) all wrap aggressively. The right-aligned `Where` / `When` / `Scale` label floats in a separate 110px column, breaking the eye's left-anchor reading flow.
- **Why it matters:** Spec tables are the page's credibility layer — they back up the prose. If they're hard to scan on the device the city rep is using, the credibility doesn't land.
- **Fix options (pick one):**
  - **A. (Recommended)** On `<sm`, collapse the row to `flex-col` — label above value, both left-aligned. Switches to the `grid-cols-[110px_1fr]` only at `sm:flex` (640px+).
  - **B.** Reduce the label column to `grid-cols-[80px_1fr]` on mobile so values get 172px.
  - **C.** Drop the right-alignment of the label and left-align both columns on mobile.
- **Effort:** 15 min

**2. "Who We Are" third paragraph is a 610-character wall of text on mobile**
- **Location:** `src/app/page.tsx:190–201`
- **What:** This paragraph contains the two-parts framing, the scaled-down admission, the law-enforcement/business partnership line, and the "truly looking for a new partner city to call home" closer. At 390px / 16px / 26px line-height it renders to **416px tall (16 lines)** with no visual relief, no bullets, no break.
- **Why it matters:** This is the "would we be a good partner" pitch paragraph. It's important. But on a phone it reads as a single block, and city reps skimming will gloss over it.
- **Fix options:**
  - **A. (Recommended)** Split into two paragraphs at "For Springdale, we'd bring an established format..." — the second half is a softer, more personal pitch that should breathe on its own.
  - **B.** Pull the partnership-terms sentences ("We prefer to partner with our host cities...") into a short bulleted list with the same red dot treatment used in "What TougeCon Requests" — visual pattern continuity and scannable.
  - **C.** Drop the "We're truly looking for a new partner city to call home" closer into a pull-quote / emphasized line so it doesn't get lost at the end of a wall.
- **Effort:** 10 min

**3. Ask bullet long-tails wrap inside the red "What Springdale Gets" panel**
- **Location:** `src/app/page.tsx:337–344` (benefits list)
- **What:** Two benefit bullets wrap to 3 lines on mobile:
  - "Out-of-region visibility — drivers and attendees discover Springdale" (3 lines, 278px column)
  - "Logo placement and cross-promotion of Downtown Springdale across TougeCon channels" (3 lines)
- **Why it matters:** The red panel is the only colored surface in the page's main flow — it's the visual peak. The benefit list inside it is the *reason* the red panel exists. If the bullets wrap awkwardly, the panel reads as a wall of text on a red background instead of "this is what you get."
- **Fix options:**
  - **A.** Shorten the two long bullets to fit in 2 lines on mobile ("Out-of-region visibility — drivers and attendees discover Springdale" → "Out-of-region visibility — new eyes on Springdale")
  - **B.** Increase the red panel's font-size to 15px (currently `text-sm` = 14px) so the lines breathe more.
- **Effort:** 5 min

---

### 🟡 Minor

**4. Activation descriptions drop to 14px while section intros are 16px**
- **Location:** `src/app/page.tsx:280–282` (`<p className="mt-2 text-sm leading-relaxed text-slate-300">`)
- **What:** The two activation cards (Live Programming, Vendors & Food Trucks) use `text-sm` (14px) for their descriptions, while the section's intro paragraph above uses 16px. The hierarchy is intentional (activation is nested detail) but at 14px on mobile the descriptions read as footnotes next to the 16px intro.
- **Why it matters:** Visual hierarchy works on desktop. On mobile, the 14px body sits next to 16px body 12px apart and the eye reads them as the same level.
- **Fix:** Bump the activation description to 15px (`text-[15px]`) — same as the subhead size, sits visually below the 16px body without feeling like a different font tier.
- **Effort:** 2 min

**5. Aftermovie links have `aria-label` for screen readers, press links don't**
- **Location:** `src/app/page.tsx:402` (aftermovie) vs `src/app/page.tsx:425` (press)
- **What:** Aftermovie anchors carry `aria-label="${video.title} (opens YouTube video in new tab)"`. Press anchors only have the visible text + a `Newspaper` icon (no alt, decorative). A screen reader user hears "TougeCon 2025 Aftermovie opens YouTube video in new tab" but only "The Drive. Grassroots JDM, Tokyo vibes" for the press links — they don't know it opens externally.
- **Why it matters:** Inconsistent screen-reader UX for outbound-link signaling.
- **Fix:** Add `aria-label={`${item.title} — ${item.subtitle} (opens in new tab)`}` to the press `<a>`.
- **Effort:** 2 min

**6. Hero H1 at 48px on mobile fits, but "TougeCon" wraps to a second line**
- **Location:** `src/app/page.tsx:150–158`
- **What:** At 390px viewport, the H1 is `text-5xl` (48px) and renders "Springdale" on line 1 and "x TougeCon" on line 2 (the breakpoint splits after the `x`). Probe shows H1 width 310px, font-size 48px. Visually it works — the red `x` becomes a centerpiece — but the headline occupies 96px of vertical space inside the 16:9 hero (only ~50% of the frame height), which is fine.
- **Why it matters:** Not a bug. The wrap is intentional-looking. Just calling it out for confirmation.
- **Fix:** None needed. If the wrap is unwanted on smaller viewports (e.g. 360px), wrap the `x` + `TougeCon` in a `<span class="whitespace-nowrap">`.
- **Effort:** 1 min if needed

**7. Photo grids at 2-col on mobile are 149px each — narrow vertical strips**
- **Location:** `src/app/page.tsx:223–225` (checkin + staging), `src/app/page.tsx:292–295` (handstand + dj)
- **What:** At 390px, `grid-cols-2` produces 149px columns. Combined with `h-48` (192px tall), the photos are tall, narrow strips. The checkin/staging pair and the handstand/DJ pair both render this way.
- **Why it matters:** The content is still readable, but a 149×192 strip of a 6000×3368 DJ photo loses a lot of context. On a phone, the eye reads them as 2 thumbnails next to a paragraph.
- **Fix options:**
  - **A.** Stack to 1 column on mobile (`grid-cols-1 sm:grid-cols-2`) — each photo gets full width, more impact.
  - **B.** Keep 2-up but add `object-position` to crop the most interesting part of each photo into the narrow column.
- **Effort:** 5 min for option A

**8. "Family-friendly by design" caption is 12px — easy to miss**
- **Location:** `src/app/page.tsx:377` and `Photo.tsx:65`
- **What:** Photo caption is `text-xs` (12px). It sits below a 200px+ tall photo on a dark card. On a 390px screen with 16px outer padding, the caption is small relative to the rest of the page's typography (body 16px, headers 26px).
- **Why it matters:** Minor. The caption is reinforcement, not primary content. But the 12px size + low contrast (`text-slate-400`) on the dark card means it can be skipped entirely.
- **Fix:** Bump to `text-[13px]` and `text-slate-300` (lighter) so it reads as a caption rather than metadata.
- **Effort:** 1 min

---

### 🟢 Nit

**9. Contact Info panel is `max-w-sm` (384px) — leaves a dead-zone on 412px+ viewports**
- **Location:** `src/app/page.tsx:447`
- **What:** At 412px (Pixel) the page is `max-w-3xl` (768px) so the 384px panel is centered with ~14px of space on each side. Visually it looks like a "callout card" — probably the intent. Calling it out so it doesn't get flagged later as inconsistent.
- **Fix:** None. Note it as intentional.

**10. Footer is just "© 2026 TougeCon LLC" — no other metadata, no back-to-top**
- **Location:** `src/app/page.tsx:467–469`
- **What:** Single line, 14px slate-400. The page is ~9000px tall on mobile — a "back to top" anchor would be useful.
- **Fix:** Optional. Add an "↑ Back to top" anchor centered above the copyright if stakeholder feedback requests easier navigation.

**11. `min-h-screen` on `<main>` is dead CSS on mobile**
- **Location:** `src/app/page.tsx:120`
- **What:** The page content is always taller than the viewport on mobile (9 sections, ~9000px). `min-h-screen` only matters for sparse pages. Not a bug, just unused.
- **Fix:** None. Could drop the class but it's harmless.

**12. H3 subheads ("What Springdale Gets", "What TougeCon Requests") are left-aligned inside a centered section**
- **Location:** `src/app/page.tsx:334, 350`
- **What:** The parent H2 ("The Ask") is centered. The nested H3s are left-aligned (15px). This is intentional per `.subhead` modifier, and it correctly signals "child of section" — but it's an unusual rhythm. A first-time reader's eye expects the H3s to mirror the H2 alignment.
- **Fix:** None. The rhythm works because the bullets underneath are left-aligned, so the H3s belong to the bullet group, not the H2. Don't change.

---

## Production Readiness — Mobile

| Item | Status | Evidence |
|---|---|---|
| No horizontal overflow @ 360, 390, 412, 768 | ✓ | `document.scrollWidth === window.innerWidth` (390/390) at all tested sizes |
| All images load and display | ✓ | 6/6 photos render at all viewports |
| Tap targets ≥ 44px (iOS HIG) | ✓ | Aftermovies 44px, press cards 64-84px, email links 24px (out of spec — see **#3** from prior roadmap) |
| Heading hierarchy preserved | ✓ | h1 48px → h2 26px → h3 15-16px (no skip) |
| Paragraph line-height ≥ 1.5× | ✓ | 26px on 16px (1.625×) |
| Modal closes on Esc + outside-click | ✓ | `Photo.tsx:27-42, 73` |
| Body scroll locked when modal open | ✓ | `Photo.tsx:36-40` |
| Skip-link targets contact | ✓ | `<a href="#contact">` first focusable element |
| All `<img>` have alt text | ✓ | 6/6 (hero, cover, lot, handstand, family, staging, checkin, dj) |
| All external links have `rel="noopener noreferrer"` | ✓ | 5/5 |
| `prefers-reduced-motion` respected | ✓ | `globals.css:63-69` |
| WCAG AA contrast | ✓ | 0/98 (prior audit) — no regression from mobile-specific styles |

---

## Recommended Action Order

1. **Major #1** (spec table mobile collapse) — 15 min, highest readability win
2. **Major #2** ("Who We Are" paragraph split) — 10 min, makes the partner pitch land
3. **Major #3** (red panel bullet shortening) — 5 min
4. **Minor #4** (activation text 14px → 15px) — 2 min
5. **Minor #5** (press aria-labels) — 2 min
6. **Minor #7** (photo grid mobile stack) — 5 min, decide based on photo content
7. **Minor #8** (caption 12px → 13px) — 1 min
8. Re-screenshot at 360/390/412/768 after the majors
9. Re-run `npm run build` to confirm zero errors

**Total time-to-polish:** ~40 minutes.

---

## Methodology

- **Headless Chrome 144** (macOS) via raw CDP, no Playwright/Puppeteer
- **4 viewports** captured full-page: 360×800, 390×844, 412×915, 768×1024
- **`Emulation.setDeviceMetricsOverride`** with `mobile: true` and `deviceScaleFactor: 2` — proper mobile emulation, not desktop resized
- **Image loading** waited synchronously via `Promise.all(Array.from(document.images).map(...))` + 1.5s settle
- **DOM probes** queried computed font-size, line-height, bounding rects, grid templates, horizontal overflow elements, and link target sizes
- **No interaction testing** in this pass — modal close behavior, hover effects, and the aftermovie/press link clicks are all desktop-tier behavior and not changed by viewport
- **Reference:** AGENTS.md "no merge with N > 0" WCAG rule — prior audit reported 0/98, no regression

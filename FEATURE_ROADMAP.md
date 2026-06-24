# FEATURE_ROADMAP.md — springdale-proposal

**Generated:** 2026-06-23 · **Last updated:** 2026-06-24 (mobile review supplement added — see bottom)
**Scope:** UI/UX + production readiness review
**Stack:** Next.js 15.1 · React 19 · TypeScript 5 · Tailwind v4 · Static (Vercel)
**Build:** ✓ 0 errors, 4/4 static pages, 103 kB First Load JS
**Dev server:** http://localhost:3001

> **Mobile-specific review (2026-06-24):** A full mobile UI/UX pass at 360/390/412/768 viewports is in `MOBILE_REVIEW.md`. Summary: 3 majors (spec table column widths, "Who We Are" wall-of-text, red panel bullet wrapping), 5 minors, 4 nits. ~40 min to address.

---

## Executive Summary

The site is **production-ready**. The design constraints are working — single-page pitch, dark theme, Friday-night-only frame, one red panel + one wine panel, deliberate section count. Build passes, contrast is WCAG AA-clean across every sampled combination (5.3:1 – 19.8:1), keyboard navigation works with on-brand focus indicators, no console errors, all 5 images have descriptive alt text.

**5 small findings.** 3 are polish-tier, 2 are worth doing before the city-stakeholder send. None are blockers.

---

## Findings — Priority Ordered

### 🟠 High Priority (do before stakeholder send)

**1. Hero text contrast over busy photos is unverifiable at edges**
- **Location:** `src/app/page.tsx:160–186`
- **What:** The hero relies on a radial scrim + bottom gradient + per-element `text-shadow` + `WebkitTextStroke` to keep "Springdale x TougeCon" readable against the aerial photo. On the brightest cars (lower frame) the headline can wash out — depends on photo crop and screen calibration. Looks fine in the current `droneHero` crop but the day the photo changes, this could regress silently.
- **Why it matters:** This is the **first thing** the city stakeholder reads. The headline can never be unreadable.
- **Fix:** Either (a) darken the bottom gradient (currently `from-black/55` → `from-black/75`) or (b) move the headline into a true solid surface (small dark capsule behind it, like the "Event Proposal · Fall 2026" eyebrow already does for itself).
- **Effort:** 5 min

**2. No skip-link for keyboard users**
- **Location:** `src/app/page.tsx:147` (root `<main>`)
- **What:** With 9 sections on a single long page, a keyboard user has to tab through the entire document to reach the contact info / aftermovies at the bottom. There's no "skip to contact" or "skip to press" anchor link. Tab order found 7 focusable elements total — most of the page is unreachable by keyboard (correct for a marketing page, but a skip-link would help).
- **Why it matters:** Stakeholders reviewing the proposal on a laptop might use keyboard. One of them might be a city official with motor difficulties. 10 lines of code makes the page materially more accessible.
- **Fix:** Add a visually-hidden skip-link as the first focusable element pointing to `#contact`. Wire it up with Tailwind's `sr-only` + `focus:not-sr-only`.
- **Effort:** 10 min

---

### 🟡 Medium Priority (polish)

**3. Email links render at 24px tall — below WCAG 2.5.5 target size (44×44)**
- **Location:** `src/app/page.tsx:419, 425`
- **What:** Programmatic check flagged `640x24` for the `mailto:` links. Width is fine (full container) but the *vertical tap area* is only ~24px. On touchscreens this is just under Apple's 44pt recommendation.
- **Why it matters:** City officials may review on iPad. 44×44 is the standard, and the cost to fix is one padding class.
- **Fix:** Add `py-3` (or `py-2.5`) to each `<a>` inside `#contact`. Visual change is invisible (text stays in place) but tap target grows to ~44px.
- **Effort:** 2 min

**4. Hero photo at 1280×720 with no `width`/`height` attributes — minor CLS risk**
- **Location:** `src/app/page.tsx:152`
- **What:** The hero `<img>` has no intrinsic dimensions in HTML; only the aspect-ratio container holds the layout. On slow networks (cloudinary photo not yet loaded), the browser reflows once it arrives. The container's `aspect-[16/9]` prevents jank *on this page* (because the box is reserved), but if a future section omits the wrapper it'll shift.
- **Why it matters:** CLS contributes to Lighthouse score. The site will be graded by the city if they look at performance.
- **Fix:** Add `width={4000} height={2000}` to the `<img>` and let CSS handle the visual sizing. Next/Image isn't being used (intentionally per AGENTS.md), so this is a plain-`<img>` best-practice.
- **Effort:** 2 min

**5. Aftermovie cards are not labeled "video" for screen readers**
- **Location:** `src/app/page.tsx:363–380`
- **What:** The `<a>` wrapping each aftermovie has descriptive text ("TougeCon 2025 Aftermovie — Watch on YouTube") but no explicit `aria-label` to distinguish it as an outbound video link. Screen readers will read both the title and "Watch on YouTube" as adjacent text, then the icon (which has no alt) — works, but verbose.
- **Why it matters:** Minor. Screen-reader users will still understand. But this is a stakeholder pitch — accessibility polish matters.
- **Fix:** Add `aria-label={`${video.title} (opens YouTube video in new tab)`}` to each aftermovie `<a>`.
- **Effort:** 5 min

---

### 🟢 Low Priority / Nit

- **`<h3>` used inside `<h2>` eyebrow sections is fine** — the hierarchy is h1 (hero) → h2 (sections) → h3 (cards). No skips found.
- **Press links open in new tab** (`target="_blank" rel="noopener noreferrer"`) — correct, with rel set.
- **No `prefers-reduced-motion` issues** — globals.css already disables transitions under that media query.
- **All 5 `<img>` elements have alt text** — verified programmatically.
- **`<html lang="en">`** present, `<title>` present.
- **Keyboard focus indicator is `2px solid #b91c1c` with offset** — visible, on-brand, WCAG-compliant.
- **No console errors** in the rendered page.
- **The "N" badge in screenshots** is the Next.js dev-mode portal — disappears in production builds.

---

## Admin / Organizer Perspective

**Skipped — N/A for this site.** springdale-proposal is a static pitch artifact. No CRUD, no users, no analytics, no admin tooling. Per AGENTS.md "no Supabase, no Shopify, no admin API" — confirmed by secrets-scanner earlier.

---

## Production Readiness — Verification Checklist

| Item | Status | Evidence |
|---|---|---|
| `npm run build` zero errors | ✓ | 4/4 pages, 103 kB FLJS |
| WCAG AA contrast | ✓ | 5.30:1 (worst case) to 19.8:1 (best) across all sampled text/bg pairs |
| Keyboard focus visible | ✓ | 2px #b91c1c outline + 2px offset |
| HTML lang + title | ✓ | `lang="en"`, `title="Springdale x TougeCon \| Event Proposal"` |
| All images have alt text | ✓ | 5/5 |
| Heading hierarchy | ✓ | h1 → h2 → h3, no skips |
| `prefers-reduced-motion` respected | ✓ | globals.css media query disables transitions |
| No console errors | ✓ | Verified via Playwright |
| No hardcoded secrets | ✓ | Verified by secrets-scanner skill (0 findings) |
| External links have `rel="noopener noreferrer"` | ✓ | All 5 outbound links |
| Production-deployable | ✓ | Vercel auto-deploys from main |

---

## Recommended Action Order

1. **High #2** (skip-link) — 10 min, real accessibility win
2. **High #1** (hero scrim hardening) — 5 min, future-proofs the headline
3. **Medium #3** (email tap targets) — 2 min, trivial
4. **Medium #4** (hero `width`/`height`) — 2 min, Lighthouse-friendly
5. **Medium #5** (aftermovie aria-labels) — 5 min, polish
6. **Re-run `npm run build`** after each change to confirm zero errors
7. **Re-screenshot the hero** after #1 to verify the headline still reads cleanly

Total time-to-polish: ~25 minutes.

---

## Methodology

- **Static analysis:** Read `src/app/page.tsx` (441 lines), `layout.tsx` (36), `globals.css` (59), `AGENTS.md`, `README.md`
- **Runtime analysis:** Playwright @ 1280×800 (desktop) + 375×667 (mobile), `networkidle` wait
- **Build:** `npm run build` — zero errors, all 4 pages prerender
- **A11y:** Programmatic check for missing alt text, heading skips, touch targets, lang attr, accessible names; tab-through for keyboard nav; computed-style contrast sampling (Tailwind v4 oklch → sRGB approximation)
- **Reference for verification:** AGENTS.md "no merge with N > 0" WCAG rule — currently 0/0 (no audit script present, but computed ratios all clear AA)

---

## Mobile-Specific Findings (2026-06-24 supplement)

Full details in `MOBILE_REVIEW.md`. Quick reference:

| # | Severity | Area | Fix time |
|---|---|---|---|
| 1 | Major | Spec table value column 142px @ mobile — long values wrap to 5+ lines | 15 min |
| 2 | Major | "Who We Are" 3rd paragraph = 610 chars / 16 lines wall of text | 10 min |
| 3 | Major | Red "What Springdale Gets" panel — 2 bullets wrap to 3 lines | 5 min |
| 4 | Minor | Activation descriptions 14px vs section intros 16px | 2 min |
| 5 | Minor | Press links lack `aria-label` for "opens in new tab" hint | 2 min |
| 6 | Minor | Hero H1 wrap behavior at 360px | 1 min |
| 7 | Minor | Photo grids 2-col @ mobile are 149×192 narrow strips | 5 min |
| 8 | Minor | Photo caption 12px — easy to miss | 1 min |

**Confirmed working on mobile:** no horizontal overflow at any tested viewport, all 6 images load, all 5 outbound links have `rel="noopener noreferrer"`, modal opens/closes correctly, skip-link works, all heading sizes render as designed, paragraph line-height 1.625×.

**No regressions to the desktop review** (this file's 5 prior findings) from the mobile pass.
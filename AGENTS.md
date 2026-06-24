# AGENTS.md — springdale-proposal

Project-specific context for the Springdale partnership proposal site.
**Read `../../AGENTS.md` first** for the workspace-wide rules (port
management, multi-repo layout, theme colors, frozen-archive policy).

## What this repo is

A single-page Next.js site that pitches a TougeCon × Springdale
**Friday-night** downtown activation to the Downtown Springdale Alliance
and Springdale city officials. Static, deployed on Vercel, no runtime
data. The artifact itself is `src/app/page.tsx` — everything else
supports it.

> **Date:** 2026-06-24. Repo holds one page, 6 sections, dark-themed.
> Last validated against `main` at commit `14afb2f`.

## Architecture

- **Framework:** Next.js 15.1 (App Router) + React 19 + TypeScript 5 + Tailwind v4
- **Styling:** Tailwind v4 via `@tailwindcss/postcss`. Design tokens are
  *not* in `globals.css` — they're co-located at the top of
  `src/app/page.tsx` (card surface, hover lift, brand red shades). This
  is deliberate: the page is the only consumer, so co-locating keeps the
  diff focused on the visible artifact.
- **Icons:** `lucide-react` only. No icon font, no sprite.
- **Images:** All photos are Cloudinary URLs (named keys in a `photo`
  object near the top of `page.tsx`). No local image assets.
- **Fonts:** System font stack via Tailwind defaults. No `next/font`.
- **Database / API:** None. Static prerender (4/4 pages, zero API routes).
- **Hosting:** Vercel, auto-deploys from `main` to
  `https://springdale-proposal.vercel.app`.

## File layout

```
springdale-proposal/
├── src/app/
│   ├── page.tsx           ← the entire site (6 sections)
│   ├── Photo.tsx          ← client component, photo + click-to-open modal
│   ├── layout.tsx         ← root layout
│   └── globals.css        ← Tailwind v4 import + minimal globals
├── next.config.ts         ← Next config (security headers, redirects)
├── tailwind config is in globals.css via @import "tailwindcss"
├── package.json
├── README.md
├── AGENTS.md              ← this file
└── .tmp/                  ← gitignored scratch (audit scripts, screenshots)
```

## Page contents — current as of HEAD

| # | Section | Notes |
|---|---|---|
| 1 | Who We Are | Dark card, three paragraphs: org framing, brag (15K attendees / 19 states / $750K / annual-vacation attendees), Springdale turnkey pitch with two-parts framing + scaled-down admission |
| 2 | Curated Drives | Dark card, experience-first intro paragraph (Special Stage sub-event), 2-up checkin + lineup photos, spec table at end (Where / When / Scale / Programming / Our Activation) |
| 3 | Community Activation | Dark card, expanded intro (logistics + culture + inside/outside park framing), 2 activation rows (Live Programming, Vendors & Food Trucks), lot photo, 2-up breakdancing/DJ photos, spec table at end |
| 4 | The Proposal | One outer dark card containing: 4a **What Springdale Gets** (red sub-panel, 6 benefit bullets, single column) + 4b **What TougeCon Requests** (asks, 5 items) + 4c family-friendly closer (photo + centered caption) |
| 5 | TougeCon in Action | Three YouTube aftermovies + two press cards |
| 6 | Contact Info | Centered, max-w-sm, dark wine-tinted panel with two emails |

**Section comments in `page.tsx` are numbered 1–6 in order.** If you
add/remove/reorder, renumber the comments to match.

## Design constraints

- **Weekend scope, Friday-night spectacle.** The page pitches a full
  weekend (Curated Drives out of a secured lot + Friday-night
  Community Activation at Luther George Park) but the *public-facing*
  Friday-night piece is the visual heart of the proposal. Don't quote
  multi-day aggregate numbers (e.g. weekend totals across all sessions)
  where the city would read them as a Friday-night promise. The
  staging schedule stays at "mornings and afternoons" — no specific
  clock times (7:30am, 2:00pm). Dates are stated as **"Oct 2-3, 2026
  (dates flexible)"** so the city can plan while the operator keeps
  an escape hatch.
- **One red panel, one near-red panel.** "What Springdale Gets" is
  `#b91c1c`. "Contact Info" is `#171013` (deep wine). Everything else
  is dark surface (`bg-white/5` cards on `#0a0a0a` page). Adding a
  third tinted panel breaks the visual rhythm — keep it at two.
- **Brand red reserved for accent, not body text.** Headline x, stat
  numbers, ask bullets, icon strokes. Body copy stays slate-200/300.
- **Track record language stays in past tense.** Phrases like "out-of-state
  competitors and local crews" describe past TougeCon events, not a
  commitment to the Springdale activation. Use past tense ("the same
  format we've run") to keep that distinction.
- **No `next/image`.** Photos are Cloudinary URLs in `<img loading="lazy">`.
  Premature optimization for a static marketing page that needs to be
  easy to swap images in/out of. Photos that should open in a modal use
  the `Photo` client component (`src/app/Photo.tsx`).

## Local workflow

### Run / build / preview

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # must complete with zero errors
npm run start        # serve the static build
```

### Vercel deploy

`main` auto-deploys. Pushes to other branches produce preview
deployments at `<hash>-neokatas-projects.vercel.app` (SSO-gated — use
the production URL `https://springdale-proposal.vercel.app` for
unstaged review).

```bash
git push origin main
vercel ls            # confirm latest is ● Ready in Production
```

## WCAG AA contrast audit

The page is dark-themed, so contrast is the most common regression
class. The audit script in `.tmp/` drives headless Chrome via CDP and
walks ancestors to find the *effective* background of every text element,
then applies WCAG 2.x's relative-luminance formula. Tailwind v4 emits
colors as `oklch(L C H)` and the script handles that conversion.

```bash
node .tmp/audit-contrast.mjs
```

Should report `0/N elements fail WCAG AA contrast`. Recent scores:
`0/98` (post-weekend reframe + Partnership rework).

**Hard rule:** no merge with `N > 0`. The only colors that may be below
AA are inside the hero scrim (where the photo provides context, not a
solid background) — and even there the text uses text-shadow.

## Common pitfalls

- **`next start` serves the build, not live source.** Edits don't
  propagate until you re-run `next build` and restart the server.
  Symptom: change saves, page refresh, no diff.
- **Tailwind v4 emits colors as `oklch(L C H)`**, not `rgb()`.
  `getComputedStyle(...).color` returns `oklch(...)`. Audit scripts
  must parse oklch (the working script does — it converts via OKLab →
  linear sRGB → gamma).
- **PowerShell escapes `$` aggressively.** Inline `Get-NetTCPConnection
  | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }` works,
  but `$proc = ...; if ($proc) { ... }` tends to get mangled. For
  multi-step shell commands, write to `.tmp/*.ps1` and invoke via
  `powershell -File <path>` instead of one-liners.
- **Git Bash doesn't have `Select-Object`.** Use `tail` for output
  truncation, not PowerShell pipeline operators.
- **Vercel preview URLs require SSO.** `https://springdale-proposal-<hash>-neokatas-projects.vercel.app`
  redirects to a Vercel login. The un-gated URL is
  `https://springdale-proposal.vercel.app` (production).

## Service-role / admin keys

This repo has **no Supabase, no Shopify, no admin API**. There are no
service-role keys to leak. If a future change introduces one, follow
the workspace rule: store in `.env` (gitignored), never paste in chat,
never `console.log`.

## Session history (recent)

- **HEAD** — Weekend reframe. Page now pitches a full TougeCon weekend
  (Curated Drives at a secured lot + Friday-night Community Activation
  at Luther George Park) instead of a single-night activation. New
  structure: Who We Are (combined with The Weekend framing), Special
  Stage, Community Activation, The Proposal (4a + 4b + 4c), Press,
  Contact. Staging schedule softened to "mornings and afternoons" (no
  specific clock times). Dates stated as "Oct 2-3, 2026 (dates flexible)".
  Photo modal added (client component `src/app/Photo.tsx`). Unused photos
  removed. WCAG AA audit clean: 0/98.
- **2026-06-23 (`14afb2f`)** — Dropped the "2025 Track Record" section.
  Page now leads straight from "Who We Are" into the 7,500+ footprint.
  Reason: weekend-aggregate numbers (600+ cars, 19 states, $750K) were
  misrepresenting the Friday-night-only scope.
- **2026-06-23 (`1bf0e77`)** — Full rework: dark cards, reordered
  sections, 9-section flow. WCAG AA audit clean.
- Earlier (pre-bucket): Mobile-first visual redesign, drone hero,
  breakdancing battles, press additions.

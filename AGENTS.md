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

> **Date:** 2026-06-23. Repo holds one page, 9 sections, dark-themed.
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
│   ├── page.tsx           ← the entire site (9 sections)
│   ├── layout.tsx         ← root layout
│   └── globals.css        ← Tailwind v4 import + minimal globals
├── next.config.ts         ← Next config (security headers, redirects)
├── tailwind config is in globals.css via @import "tailwindcss"
├── package.json
├── README.md
├── AGENTS.md              ← this file
└── .tmp/                  ← gitignored scratch (audit scripts, screenshots)
```

## Page contents — current as of `14afb2f`

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Centered headline + scrim; aerial of 2025 lot |
| 2 | Last Year's Footprint | The **7,500+ in one night** stat — only scale evidence on the page |
| 3 | On Stage | Two-up photo grid (breakdancing + DJ) |
| 4 | The Activation Plan | Four cards (Park, Lot, Stage, Vendors) |
| 5 | What Springdale Gets | The one red panel — six benefit bullets |
| 6 | Why Springdale, Why Now | Family photo floated right at md+, paragraph wraps magazine-style |
| 7 | The Ask | Four red-bullet asks (Park, Lot, Co-marketing, Sponsorship) |
| 8 | See It In the Press | Three YouTube aftermovies + two press cards |
| 9 | Contact Info | Dark-red panel with two emails |

**Section comments in `page.tsx` are numbered 1–9 in order.** If you
add/remove/reorder, renumber the comments to match.

## Design constraints

- **Friday-night-only frame.** The page never quotes weekend-aggregate
  numbers. No `600+ cars`, no `19 states`, no `$750K impact` — those are
  multi-day totals and misrepresent the scope we're pitching. The only
  scale number is the 7,500+ *single-night* stat from the 2025
  Underground event.
- **One red panel, one near-red panel.** "What Springdale Gets" is
  `#b91c1c`. "Contact Info" is `#171013` (deep wine). Everything else
  is dark surface (`bg-white/5` cards on `#0a0a0a` page). Adding a
  third tinted panel breaks the visual rhythm — keep it at two.
- **Brand red reserved for accent, not body text.** Headline x, stat
  numbers, ask bullets, icon strokes. Body copy stays slate-200/300.
- **No `next/image`.** Photos are Cloudinary URLs in `<img loading="lazy">`.
  Premature optimization for a static marketing page that needs to be
  easy to swap images in/out of.

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
class. There's a Playwright audit script in `.tmp/`:

```bash
python .tmp/audit-contrast2.py
```

Should report `0/N elements fail WCAG AA contrast`. The script walks
ancestors to find the *effective* background of every text element and
applies WCAG 2.x's relative-luminance formula. Recent scores:
`0/52` (post Track Record removal).

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

- **2026-06-23 (`14afb2f`)** — Dropped the "2025 Track Record" section.
  Page now leads straight from "Who We Are" into the 7,500+ footprint.
  Reason: weekend-aggregate numbers (600+ cars, 19 states, $750K) were
  misrepresenting the Friday-night-only scope.
- **2026-06-23 (`1bf0e77`)** — Full rework: dark cards, reordered
  sections, 9-section flow. WCAG AA audit clean.
- Earlier (pre-bucket): Mobile-first visual redesign, drone hero,
  breakdancing battles, press additions.

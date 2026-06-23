# springdale-proposal

A single-page partnership proposal site for a **TougeCon × Springdale**
Friday-night downtown activation. Pitched to the Downtown Springdale
Alliance (DSA) and Springdale city officials — the artifact a city
stakeholder opens to decide whether the partnership goes forward.

Live at: **https://springdale-proposal.vercel.app**
Repo: `Neokata/springdale-proposal`

## What it is

One page (`src/app/page.tsx`), 9 sections, dark-themed. Sells a single
idea: bring TougeCon's Friday-night programming to downtown Springdale
for one night in Fall 2026.

The page's only scale evidence is the **7,500+ in one night** stat from
the 2025 Underground event — chosen specifically because that number is
*Friday-night-shaped*, so the page never quotes weekend-aggregate
numbers (600+ cars / 19 states / $750K) the city can't hold us to.

## Sections (in order)

1. **Hero** — aerial of 2025 lot, "Springdale × TougeCon" + descriptor
2. **Last Year's Footprint** — full-bleed aerial with `7,500+ in one night`
3. **On Stage** — breakdancing + DJ proof photos
4. **The Activation Plan** — four cards (Park, Lot, Stage, Vendors)
5. **What Springdale Gets** — the one red panel with six benefits
6. **Why Springdale, Why Now** — family photo floated right at md+,
   paragraph wraps magazine-style
7. **The Ask** — four red bullets
8. **See It In the Press** — three aftermovies + two press cards
9. **Contact Info** — dark-red panel with two email addresses

## Stack

- **Next.js 15.1** (App Router) + **React 19** + **TypeScript 5** +
  **Tailwind v4** (`@tailwindcss/postcss`, `@theme` in `globals.css`)
- **lucide-react** for icons
- Static prerender (4/4 pages, no runtime API)
- Deployed on **Vercel** (auto-deploys from `main`)

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static build → .next/
npm run start        # serve the build
```

## Design tokens

Defined in `src/app/page.tsx` near the top of the file (not in
`globals.css` — this repo is small enough that co-locating them with the
single page keeps the diff focused):

- **Card surface:** `bg-white/5 ring-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.4)]`
- **Hover lift:** `hover:-translate-y-0.5 hover:shadow-[...] hover:ring-white/20`
- **Page bg:** `#0a0a0a` (near-black)
- **Brand red:** `#ef4444` (headline x), `#f87171` (small accents),
  `#b91c1c` (the "What Springdale Gets" red panel)
- **Contact panel:** `#171013` (deep wine) — only other tinted surface

## Related artifacts

| Role | Location |
|---|---|
| Main public site | `1-Website/tougecon-website/` |
| This proposal (DSA pitch) | `1-Website/springdale-proposal/` ← *you are here* |
| Admin / ops tooling | `4-Admin/tougecon-admin/` |

## Working rules

- **Never commit `.tmp/` or `.shots/`** — both are local scratch (audit
  scripts, screenshots, design experiments). Both are gitignored; leave
  the gitignore entry in place.
- **Don't add new sections without a "why"**. The page is deliberately
  tight (9 sections, one number). Anything new competes with the 7,500+
  stat for the reader's attention.
- **Keep the Friday-night-only frame.** No weekend numbers, no
  multi-day-promise copy. If a future number is needed, it must be
  Friday-night-shaped.
- **Build locally before pushing.** `npm run build` must complete with
  zero errors and the WCAG AA contrast audit (script in `.tmp/`) must
  report `0/N fail`.

# springdale-proposal

A single-page partnership proposal site for a **TougeCon × Springdale**
weekend activation. Pitched to the Downtown Springdale Alliance (DSA) and
Springdale city officials — the artifact a city stakeholder opens to
decide whether the partnership goes forward.

Live at: **https://springdale-proposal.vercel.app**

## What it is

One page (`src/app/page.tsx`), 6 sections, dark-themed. Sells a single
idea: bring the TougeCon weekend to Springdale in Fall 2026 — Special
Stage drives staged out of a city-owned parking lot across Friday and
Saturday, with a Friday-night Community Celebration at Luther George
Park.

The staging schedule is kept at "Friday and Saturday mornings and
afternoons" so the city can plan around the shape without the page
over-committing to specific times or dates.

## Sections (in order)

1. **Hero** — aerial of 2025 lot, "Springdale × TougeCon" + descriptor
2. **Special Stage** — city-owned parking lot staging (4 sessions, up
   to 175 cars each), backed by check-in and lineup photos
3. **Community Celebration** — Luther George Park Friday night
   (`~3,000 attendees` as the working planning number), two activation
   rows (Live Programming, Vendors & Restaurants), On Stage proof photos
4. **The Partnership** — combined section: 4a "What Springdale Gets"
   (red panel, what TougeCon offers the city) + 4b "What TougeCon
   Requests" (dark card, what TougeCon needs) + 4c family-friendly
   closer
5. **See It In the Press** — three aftermovies + two press cards
6. **Contact Info** — dark wine-tinted panel with two email addresses

## Scale evidence policy

The page leads with `~3,000 attendees` framed as a planning number, on
the theory that the city's first question is "how many should we plan
for?" rather than "how many have you done this for?" — and the 3,000
answer is the actionable one.

Track-record language (DJ + breakdancing battles, out-of-state
competitors and local crews) is kept in past tense to describe prior
TougeCon events, not as a commitment to the Springdale activation.

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

## Working rules

- **Never commit `.tmp/` or `.shots/`** — both are local scratch (audit
  scripts, screenshots, design experiments). Both are gitignored; leave
  the gitignore entry in place.
- **Don't add new sections without a "why"**. The page is deliberately
  tight. Anything new competes with the ask for the reader's attention.
- **Keep the staging schedule non-specific.** "Friday and Saturday
  mornings and afternoons" only — no specific times or dates until the
  city confirms.
- **Build locally before pushing.** `npm run build` must complete with
  zero errors and the WCAG AA contrast audit (`node .tmp/audit-contrast.mjs`)
  must report `0/N fail`.

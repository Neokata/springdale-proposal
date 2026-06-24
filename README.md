# springdale-proposal

A single-page partnership proposal site for a **TougeCon × Springdale**
weekend activation. Pitched to the Downtown Springdale Alliance (DSA) and
Springdale city officials — the artifact a city stakeholder opens to
decide whether the partnership goes forward.

Live at: **https://springdale-proposal.vercel.app**

## What it is

One page (`src/app/page.tsx`), 6 sections, dark-themed. Sells a single
idea: bring the TougeCon weekend to Springdale in Fall 2026 — Special
Stage drives staged out of a secured parking lot across Friday and
Saturday, with a Friday-night Community Activation at Luther George
Park.

The staging schedule is kept at "Fri am/pm + Sat am/pm" so the city
can plan around the shape without the page over-committing to specific
clock times. Dates are stated as "Oct 2-3, 2026 (dates flexible)."

## Sections (in order)

1. **Hero** — crowd photo, "Springdale × TougeCon" + descriptor
2. **Curated Drives** — experience-first intro (Special Stage sub-event),
   check-in and lineup photos, spec table (Where / When / Scale /
   Programming / Our Activation)
3. **Community Activation** — expanded intro (logistics + culture +
   inside/outside park framing), two activation rows (Live Programming,
   Vendors & Food Trucks), lot photo, breakdancing/DJ photos, spec table
4. **The Ask** — one outer dark card containing: 4a "What Springdale Gets"
   (red sub-panel, 6 benefits, single column) + 4b "What TougeCon
   Requests" (5 asks) + 4c family-friendly closer (photo + caption)
5. **See It In the Press** — three aftermovies + two press cards
6. **Contact Info** — centered, max-w-sm, dark wine-tinted panel with
   two email addresses

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
- **Keep the staging schedule time-non-specific.** "Mornings and
  afternoons" only — no specific clock times. Dates are stated as
  **"Oct 2-3, 2026 (dates flexible)"** so the city can plan while
  the operator keeps an escape hatch.
- **Build locally before pushing.** `npm run build` must complete with
  zero errors and the WCAG AA contrast audit (`node .tmp/audit-contrast.mjs`)
  must report `0/N fail`.

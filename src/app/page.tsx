import {
  Music,
  Utensils,
  Sparkles,
  Film,
  Newspaper,
  ExternalLink,
} from "lucide-react";
import { Photo } from "./Photo";

// Named photos so each one lives in exactly one place on the page.
const photo = {
  // Hero image — the crowd around the breakdancing floor.
  hero: {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/v1782003860/AZ3A1319_dxnerw.jpg",
    alt: "Crowd around the breakdancing floor at a TougeCon event",
  },
  // Aerial of a packed TougeCon lot. Used under the Community Activation
  // intro paragraph to show scale of the public-facing Friday night.
  lot: {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/v1782333892/copy_of_2025-09-19-tougecon_underground_tmoreno-15_gfk3g4.jpg",
    alt: "Aerial view of a packed TougeCon lot",
  },
  // Used as the closer of the Who We Are section.
  cover: {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/v1782332890/copy_of_resized_cover_photo_aoecam.jpg",
    alt: "TougeCon event in full swing",
  },
  handstand: {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/v1782316378/copy_of_az3a1557_r0k14k.jpg",
    alt: "Breakdancer doing a handstand on the dance floor",
  },
  family: {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/q_auto/v1782098846/vanceGreen_DSC00890_zs1ggu.jpg",
    alt: "Family-friendly atmosphere at TougeCon",
  },
  staging: {
    // Cars lined up post-check-in at a TougeCon staging lot. Used in the
    // Curated Drives section to back up the parking-lot staging ask.
    src: "https://res.cloudinary.com/djucof8mn/image/upload/v1782316831/ian_toguecon_specialstage_-14_ti0ql6.jpg",
    alt: "Cars lined up at a TougeCon staging lot after check-in",
  },
  checkin: {
    // Car at the TougeCon check-in tent. Second photo in the Curated Drives
    // section, alongside `staging`.
    src: "https://res.cloudinary.com/djucof8mn/image/upload/v1782317047/ian_toguecon_specialstage_-1_Large_wxjwic.jpg",
    alt: "Car checking in at a TougeCon staging tent",
  },
  dj: {
    // DJ on the decks at a TougeCon event, 6000x3368 original.
    src: "https://res.cloudinary.com/djucof8mn/image/upload/q_auto/v1782003665/P1781366_b2iwji.jpg",
    alt: "DJ on the decks at a TougeCon event",
  },
};

const aftermovies = [
  {
    year: "2025",
    id: "Np3sk6odXOo",
    title: "TougeCon 2025 Aftermovie",
  },
  {
    year: "2024",
    id: "iKmdQehWpJA",
    title: "TougeCon 2024 Aftermovie",
  },
  {
    year: "2023",
    id: "Wzd25skwZPs",
    title: "TougeCon 2023 Aftermovie",
  },
];

const press = [
  {
    title: "The Drive",
    subtitle: "Grassroots JDM, Tokyo vibes",
    url: "https://www.thedrive.com/news/this-grassroots-drift-culture-car-show-made-northwest-arkansas-feel-like-tokyo",
  },
  {
    title: "Experience Fayetteville",
    subtitle: "Featured event: TougeCon Japanese Car Festival",
    url: "https://www.experiencefayetteville.com/experience/touge-con-japanese-car-festival",
  },
];

const activations = [
  {
    icon: Music,
    title: "Live Programming",
    desc: "DJ sets plus breakdancing battles produced with Classic Flow — the same format we've run in past years with out-of-state competitors and local crews on the same stage.",
  },
  {
    icon: Utensils,
    title: "Vendors & Food Trucks",
    desc: "A small set of local vendors and food trucks curated by TougeCon, with the surrounding restaurants positioned to capture most of the night's spending.",
  },
];

const benefits = [
  "New out-of-town visitors spending downtown",
  "A flagship fall event for the calendar",
  "Turnkey programming the city doesn't have to produce",
  "Out-of-region visibility — new eyes on Springdale",
  "Logo placement and Downtown Springdale cross-promotion across TougeCon channels",
  "Media content and photography for city use",
];

// Dark surface tokens — three-step elevation scale. /5 is the base card,
// /10 is mid-elevation (panel), /15 is high (contact). Each ring + shadow
// carries a tiny bit of white so edges read against the near-black page.
const cardRing = "ring-1 ring-white/10";
const cardBg = "bg-white/5";
const cardShadow = "shadow-[0_1px_2px_rgba(0,0,0,0.4)]";
const hoverLift =
  "transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-14px_rgba(0,0,0,0.55)] hover:ring-white/20 active:translate-y-0";

export default function SpringdaleProposalPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-100">
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#b91c1c] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg"
      >
        Skip to contact info
      </a>
      <div className="mx-auto max-w-3xl px-5 pt-8 md:px-8 md:pt-12">
        {/* Hero — Option C: centered headline, scrim on both edges */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] ring-1 ring-black/5">
          <img
            src={photo.hero.src}
            alt={photo.hero.alt}
            className="h-full w-full object-cover object-center"
          />
          {/* Center-focused radial scrim — lighter than the previous aerial
              crop so the crowd in the photo stays visible; the headline's
              text-shadow carries most of the legibility load. */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.3)_45%,rgba(0,0,0,0.1)_75%,transparent_100%)]" />
          {/* Soft bottom darken so the descriptor line stays legible without
              burying the lower frame. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-100"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.85), 0 0 4px rgba(0,0,0,0.6)" }}
            >
              Event Proposal · Proposed Oct 2-3, 2026 (dates flexible)
            </p>
            <h1
              className="mt-3 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl"
              style={{
                textShadow:
                  "0 0 24px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.6)",
                WebkitTextStroke: "0.5px rgba(0,0,0,0.4)",
              }}
            >
              Springdale <span className="text-[#ef4444]">x</span> TougeCon
            </h1>
            <p
              className="mt-3 max-w-xl text-sm text-white md:text-base"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.85), 0 0 4px rgba(0,0,0,0.6)" }}
            >
              A weekend of cars, music, and culture — based in Springdale.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-8 md:px-8 md:py-12">
        {/* 1. Who We Are — single dark card, the only "tell" before proof */}
        <section className={`rounded-2xl ${cardBg} p-5 ${cardRing} ${cardShadow} md:p-6`}>
          <h2 className="eyebrow text-slate-400">
            Who We Are
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300 md:text-lg">
            TougeCon is the premier celebration of Japanese cars, culture, and
            mountain-pass driving in the country — a multi-day event based in
            Northwest Arkansas with a reputation for organized programming,
            quality execution, and a community that travels for the experience
            and spends locally when they arrive.
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-300 md:text-lg">
            Our events have drawn as many as 15,000 attendees in a single
            weekend, with drivers from 19 states, plus overseas attendees, and
            have generated up to $750K in economic impact for the host city.
            Our attendees often come early and stay late, and they spend money
            in the city they stay in — for many, this is their annual
            vacation.
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-100 md:text-lg">
            The weekend has two parts — Curated Drives on Friday and Saturday,
            and a Community Celebration on Friday night. For Springdale, we'd
            bring an established format and co-create a Springdale version of
            it — not asking the city to build something from scratch. This
            first year would be a scaled-down version, ramping up in the years
            ahead as the relationship develops.
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-100 md:text-lg">
            We prefer to partner with our host cities, working with local law
            enforcement, government representatives, restaurants, and
            businesses — this is as much for them as it is for our attendees.
            We're truly looking for a new partner city to call home.
          </p>
          <Photo img={photo.cover} className="mt-5 w-full" />
        </section>

        {/* 2. Curated Drives — the operational backbone: four staging sessions
            across Friday and Saturday at a city-owned parking lot large
            enough for 175 cars per session. The Friday-night Community
            Celebration lives in section 3. */}
        <section className="mt-10">
          <div className={`rounded-2xl ${cardBg} p-5 ${cardRing} ${cardShadow} md:p-6`}>
            <h2 className="eyebrow text-slate-400">
              Curated Drives
            </h2>
            <p className="mt-2 text-base leading-relaxed text-slate-300 md:text-lg">
              Our driving event, Special Stage, puts the Ozarks' best driving
              roads on display — the unique routes, the elevation changes, the
              scenery that makes this region worth driving. Drivers check in,
              get routed into small groups, and head out with our team in the
              lead. For most of our attendees, this is the thing they look
              forward to all year — the chance to get out and enjoy their cars
              with like-minded people, on roads that were made for it.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Photo img={photo.checkin} className="h-40 w-full sm:h-52 md:h-60" />
              <Photo img={photo.staging} className="h-40 w-full sm:h-52 md:h-60" />
            </div>
            <dl className="mx-auto mt-8 max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-black/20 text-sm">
              <div className="flex flex-col gap-0.5 border-b border-white/5 px-5 py-2.5 last:border-b-0 sm:grid sm:grid-cols-[110px_1fr] sm:gap-x-4 sm:gap-y-0">
                <dt className="font-bold text-[#f87171] sm:text-right">Where</dt>
                <dd className="text-slate-100">A reserved parking lot in Springdale that can hold up to 175 cars</dd>
              </div>
              <div className="flex flex-col gap-0.5 border-b border-white/5 px-5 py-2.5 last:border-b-0 sm:grid sm:grid-cols-[110px_1fr] sm:gap-x-4 sm:gap-y-0">
                <dt className="font-bold text-[#f87171] sm:text-right">When</dt>
                <dd className="text-slate-100">Oct 2-3, 2026 · Fri am/pm + Sat am/pm</dd>
              </div>
              <div className="flex flex-col gap-0.5 border-b border-white/5 px-5 py-2.5 last:border-b-0 sm:grid sm:grid-cols-[110px_1fr] sm:gap-x-4 sm:gap-y-0">
                <dt className="font-bold text-[#f87171] sm:text-right">Scale</dt>
                <dd className="text-slate-100">4 sessions, up to 175 cars per session</dd>
              </div>
              <div className="flex flex-col gap-0.5 border-b border-white/5 px-5 py-2.5 last:border-b-0 sm:grid sm:grid-cols-[110px_1fr] sm:gap-x-4 sm:gap-y-0">
                <dt className="font-bold text-[#f87171] sm:text-right">Programming</dt>
                <dd className="text-slate-100">Staff-led cruises on the best Ozark roads</dd>
              </div>
              <div className="flex flex-col gap-0.5 px-5 py-2.5 sm:grid sm:grid-cols-[110px_1fr] sm:gap-x-4 sm:gap-y-0">
                <dt className="font-bold text-[#f87171] sm:text-right">Our Activation</dt>
                <dd className="text-slate-100">Branded tents, A-frames, cones</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* 3. Community Celebration — the public-facing Friday night at
            Luther George Park. Pairs with Curated Drives (section 2) as the two
            halves of the weekend. */}
        <section className="mt-10">
          <div className={`rounded-2xl ${cardBg} p-5 ${cardRing} ${cardShadow} md:p-6`}>
            <h2 className="eyebrow text-slate-400">
              Community Activation
            </h2>
            <p className="mt-2 text-base leading-relaxed text-slate-300 md:text-lg">
              We're proposing the Friday-night activation for around three
              thousand attendees — the working number for crowd flow, vendor
              capacity, parking, and downtown impact, and the number we'd
              coordinate with the city around. More than a car show, the night
              surfaces the culture that makes this community what it is — the
              art, the food, the music, the hobbies and interests our
              attendees bring beyond their builds. Inside the park, a curated
              display of the coolest cars and a stage with live programming.
              Outside the park, attendees tend to gather in the surrounding
              lots — cars get talked about, friendships get made, and the
              downtown lots fill with the same community on their own time.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {activations.map((item) => (
                <div key={item.title} className="py-3 px-4">
                  <div className="flex items-center gap-2 text-[#f87171]">
                    <item.icon className="h-5 w-5" strokeWidth={2.25} />
                    <h3 className="font-bold text-slate-100">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <Photo img={photo.lot} className="mt-5 w-full" />
            {/* Breakdancing + DJ proof that backs up the "Live Programming"
                activation above. Two equal photos side by side at md+,
                stacked on mobile. Photos align to card edges; gap between
                them matches the vertical spacing above/below. */}
            <div className="mt-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Photo img={photo.handstand} className="h-48 w-full sm:h-60 md:h-72" />
                <Photo img={photo.dj} className="h-48 w-full sm:h-60 md:h-72" />
              </div>
            </div>
            <dl className="mx-auto mt-8 max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-black/20 text-sm">
              <div className="flex flex-col gap-0.5 border-b border-white/5 px-5 py-2.5 last:border-b-0 sm:grid sm:grid-cols-[110px_1fr] sm:gap-x-4 sm:gap-y-0">
                <dt className="font-bold text-[#f87171] sm:text-right">Where</dt>
                <dd className="text-slate-100">Luther George Park + surrounding parking lots</dd>
              </div>
              <div className="flex flex-col gap-0.5 border-b border-white/5 px-5 py-2.5 last:border-b-0 sm:grid sm:grid-cols-[110px_1fr] sm:gap-x-4 sm:gap-y-0">
                <dt className="font-bold text-[#f87171] sm:text-right">When</dt>
                <dd className="text-slate-100">Oct 3, 2026 · Friday night</dd>
              </div>
              <div className="flex flex-col gap-0.5 border-b border-white/5 px-5 py-2.5 last:border-b-0 sm:grid sm:grid-cols-[110px_1fr] sm:gap-x-4 sm:gap-y-0">
                <dt className="font-bold text-[#f87171] sm:text-right">Scale</dt>
                <dd className="text-slate-100">~3,000 attendees (working planning number)</dd>
              </div>
              <div className="flex flex-col gap-0.5 border-b border-white/5 px-5 py-2.5 last:border-b-0 sm:grid sm:grid-cols-[110px_1fr] sm:gap-x-4 sm:gap-y-0">
                <dt className="font-bold text-[#f87171] sm:text-right">Programming</dt>
                <dd className="text-slate-100">Live DJ, breakdancing battles, custom stage lighting</dd>
              </div>
              <div className="flex flex-col gap-0.5 px-5 py-2.5 sm:grid sm:grid-cols-[110px_1fr] sm:gap-x-4 sm:gap-y-0">
                <dt className="font-bold text-[#f87171] sm:text-right">Our Activation</dt>
                <dd className="text-slate-100">Curated car display, vendors, food trucks</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* 4. The Ask — combines "What Springdale Gets" (red sub-panel),
            "What TougeCon Requests" (asks), and the family-friendly closer
            photo into one outer dark card. */}
        <section className="mt-10">
          <div className={`rounded-2xl ${cardBg} p-5 ${cardRing} ${cardShadow} md:p-6`}>
            <h2 className="eyebrow text-slate-400">
              The Ask
            </h2>

            {/* 4a. What Springdale Gets — the one red panel, nested as a
                sub-box inside the outer dark card. */}
            <div className="mt-5 rounded-2xl bg-[#b91c1c] p-5 text-white shadow-[0_18px_40px_-20px_rgba(185,28,28,0.55)] ring-1 ring-red-900/30 md:p-6">
              <h3 className="eyebrow subhead text-red-100">
                What Springdale Gets
              </h3>
              <ul className="mt-3 space-y-2">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.25} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4b. What TougeCon Requests — asks. Sits below the red panel
                inside the same outer card, separated by a thin divider. */}
            <div className="mt-5 border-t border-white/10 pt-5">
              <h3 className="eyebrow subhead text-slate-400">
                What TougeCon Requests
              </h3>
              <ul className="mt-3 space-y-2 text-slate-200">
                {[
                  "Assistance securing a parking lot large enough to stage 175 cars",
                  "Use of Luther George Park for programmed activation",
                  "Help securing overflow parking within walking distance of Luther George Park",
                  "Co-marketing support from Downtown Springdale",
                  "Consideration of a presenting sponsorship or in-kind partnership",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f87171]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4c. Family-friendly closer — visual evidence that the
                activation is built to be multigenerational. Sits below
                the asks in the same outer card. */}
            <div className="mt-5 border-t border-white/10 pt-5">
              <Photo
                img={photo.family}
                className="w-full"
                caption="Family-friendly by design — the next generation of the community"
              />
            </div>
          </div>
        </section>

        {/* 5. TougeCon in Action — aftermovies + press credibility, one
            section. Two sub-blocks so the proof and the press read as a
            single "outside validation" closing block before contact. */}
        <section className="mt-10">
          <h2 className="eyebrow text-slate-400">
            TougeCon in Action
          </h2>

          {/* Videos */}
          <div className="mt-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Aftermovies
            </p>
            <div className="mt-2 space-y-1.5">
              {aftermovies.map((video) => (
                <a
                  key={video.year}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${video.title} (opens YouTube video in new tab)`}
                  className={`flex items-center justify-between rounded-2xl ${cardBg} px-4 py-2.5 ${cardRing} ${cardShadow} ${hoverLift}`}
                >
                  <div className="flex items-center gap-3">
                    <Film className="h-5 w-5 text-[#f87171]" strokeWidth={2.25} />
                    <p className="font-bold text-slate-100">{video.title}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-[#f87171]" />
                </a>
              ))}
            </div>
          </div>

          {/* Press */}
          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Press
            </p>
            <div className="mt-2 space-y-1.5">
              {press.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} — ${item.subtitle} (opens in new tab)`}
                  className={`flex items-center justify-between gap-4 rounded-2xl ${cardBg} px-4 py-2.5 ${cardRing} ${cardShadow} ${hoverLift}`}
                >
                  <div className="flex items-center gap-3">
                    <Newspaper className="h-5 w-5 shrink-0 text-[#f87171]" strokeWidth={2.25} />
                    <div>
                      <p className="font-bold text-slate-100">{item.title}</p>
                      <p className="text-sm text-slate-400">{item.subtitle}</p>
                    </div>
                  </div>
                  <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-[#f87171]" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Contact Info — the close. Dark red-tinted panel, only one
            outside-the-system surface in the page (other than the red
            "What Springdale Gets" panel) so it reads as a deliberate cap.
            Centered, sized to fit the email content comfortably. */}
        <section className="mx-auto mt-10 max-w-sm rounded-2xl bg-[#171013] p-6 text-center text-white shadow-[0_30px_70px_-36px_rgba(20,5,10,0.7)] ring-1 ring-[#b91c1c]/25 md:p-8">
          <h2 className="text-xl font-bold">Contact Info</h2>
          <div className="mt-3 space-y-1 text-slate-300">
            <a
              href="mailto:caleb@tougecon.com"
              className="block text-slate-100 transition hover:text-white"
              style={{ textShadow: "0 0 12px rgba(239,68,68,0.45)" }}
            >
              Caleb Yam - caleb@tougecon.com
            </a>
            <a
              href="mailto:noah@tougecon.com"
              className="block text-slate-100 transition hover:text-white"
              style={{ textShadow: "0 0 12px rgba(239,68,68,0.45)" }}
            >
              Noah Spain - noah@tougecon.com
            </a>
          </div>
        </section>

        <footer className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} TougeCon LLC
        </footer>
      </div>
    </main>
  );
}
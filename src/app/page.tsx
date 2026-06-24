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
  // Hero crop: drop the top quarter (sky) so the cars fill the frame.
  // Original is 4000x2667; this slice is 4000x2000 starting at y=667.
  droneHero: {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/c_fill,g_auto,h_2000,w_4000,y_667/v1782003664/2025-09-19-TougeCon_Underground_TMoreno-15_gfk3g4.jpg",
    alt: "Aerial view of the TougeCon 2025 lot, packed with cars",
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
    // Special Stage section to back up the parking-lot staging ask.
    src: "https://res.cloudinary.com/djucof8mn/image/upload/v1782316831/ian_toguecon_specialstage_-14_ti0ql6.jpg",
    alt: "Cars lined up at a TougeCon staging lot after check-in",
  },
  checkin: {
    // Car at the TougeCon check-in tent. Second photo in the Special Stage
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
    title: "Vendors & Restaurants",
    desc: "A small set of local vendors and food trucks curated by TougeCon, with the surrounding restaurants positioned to capture most of the night's spending.",
  },
];

const benefits = [
  "New out-of-town visitors spending downtown",
  "A flagship fall event for the DSA calendar",
  "Logo placement and cross-promotion of Downtown Springdale Alliance across TougeCon channels",
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
            src={photo.droneHero.src}
            alt={photo.droneHero.alt}
            width={4000}
            height={2000}
            className="h-full w-full object-cover object-center"
          />
          {/* Center-focused radial scrim — keeps the car edges visible while
              darkening behind the text so the headline reads cleanly. */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.2)_75%,transparent_100%)]" />
          {/* Extra bottom darken so the descriptor line is still legible
              against brighter cars at the bottom of the frame. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-100"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.85), 0 0 4px rgba(0,0,0,0.6)" }}
            >
              Event Proposal · Fall 2026
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
            mountain-pass driving in the Ozarks — a multi-day event based in
            Northwest Arkansas with a reputation for organized programming,
            quality builds, and a community that travels for the experience
            and spends locally when they arrive.
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-100 md:text-lg">
            For Springdale, we'd bring the audience, production experience, and
            track record to deliver a flagship fall event in one weekend —
            offering an established format and co-creating a Springdale
            version of it, not asking the city to build something from
            scratch.
          </p>
        </section>

        {/* 2. Special Stage — the operational backbone: four staging sessions
            across Friday and Saturday at a city-owned parking lot large
            enough for 175 cars per session. The Friday-night Community
            Celebration lives in section 3. */}
        <section className="mt-10">
          <div className={`rounded-2xl ${cardBg} p-5 ${cardRing} ${cardShadow} md:p-6`}>
            <h2 className="eyebrow text-slate-400">
              Special Stage
            </h2>
            <p className="mt-2 font-bold text-slate-100">
              City-owned parking lot
            </p>
            <p className="mt-2 text-base leading-relaxed text-slate-300 md:text-lg">
              We need a parking lot large enough to stage up to 175 cars per
              session — checked in, routed into run groups, and sent out
              with staff leaders. Branded 10x10 / 10x20 tents, A-frame
              signage, cones.
            </p>
            <p className="mt-2 text-base leading-relaxed text-slate-300 md:text-lg">
              Four sessions across the weekend — Friday and Saturday
              mornings and afternoons — running staff-led cruises on the
              best roads in the Ozarks.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Photo img={photo.checkin} className="h-40 w-full sm:h-52 md:h-60" />
              <Photo img={photo.staging} className="h-40 w-full sm:h-52 md:h-60" />
            </div>
          </div>
        </section>

        {/* 3. Community Celebration — the public-facing Friday night at
            Luther George Park. Pairs with Special Stage (section 2) as the two
            halves of the weekend. */}
        <section className="mt-10">
          <div className={`rounded-2xl ${cardBg} p-5 ${cardRing} ${cardShadow} md:p-6`}>
            <h2 className="eyebrow text-slate-400">
              Community Celebration
            </h2>
            <p className="mt-2 font-bold text-slate-100">
              Luther George Park
            </p>
            <p className="mt-2 text-base leading-relaxed text-slate-300 md:text-lg">
              We're proposing the Friday-night activation for around three
              thousand attendees — the working number for crowd flow, vendor
              capacity, parking, and downtown impact, and the number we'd
              coordinate with the city around.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {activations.map((item) => (
                <div key={item.title}>
                  <div className="flex items-center gap-2 text-[#f87171]">
                    <item.icon className="h-5 w-5" strokeWidth={2.25} />
                    <h3 className="font-bold text-slate-100">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* On Stage — breakdancing + DJ proof that backs up the "Live Stage
                Programming" activation above. Two equal photos side by side at
                md+, stacked on mobile. */}
            <div className="mt-6">
              <h3 className="eyebrow text-slate-400">
                On Stage
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Photo img={photo.handstand} className="h-48 w-full sm:h-60 md:h-72" />
                <Photo img={photo.dj} className="h-48 w-full sm:h-60 md:h-72" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Breakdancing battles and headline DJ sets from past TougeCon events — the format we'd bring to Friday night.
              </p>
            </div>
          </div>
        </section>

        {/* 4. The Partnership — combines "What Springdale Gets" and "What TougeCon Requests"
            into a single section. Same visual treatments preserved: the
            red panel still pays off the city's value; the dark card still
            closes with the asks. The shared eyebrow binds them as one
            trade. */}
        <section className="mt-10">
          <h2 className="eyebrow text-slate-400">
            The Partnership
          </h2>

          {/* 4a. What Springdale Gets — the one red panel. */}
          <div className="mt-5 rounded-2xl bg-[#b91c1c] p-5 text-white shadow-[0_18px_40px_-20px_rgba(185,28,28,0.55)] ring-1 ring-red-900/30 md:p-6">
            <h3 className="eyebrow text-red-100">
              What Springdale Gets
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.25} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4b. What TougeCon Requests — dark card. */}
          <div className={`mt-5 rounded-2xl ${cardBg} p-5 ${cardRing} ${cardShadow} md:p-6`}>
            <h3 className="eyebrow text-slate-400">
              What TougeCon Requests
            </h3>
            <ul className="mt-3 space-y-2 text-slate-200">
              {[
                "Use of a city-owned parking lot large enough to stage 175 cars per session",
                "Use of Luther George Park for programmed activation",
                "Help securing overflow parking within walking distance of Luther George Park",
                "Co-marketing support from Downtown Springdale Alliance",
                "Consideration of a presenting sponsorship or in-kind partnership",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f87171]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4c. Family-friendly closer — visual evidence that the activation
              is built to be multigenerational, not just a car event. */}
          <div className={`mt-5 rounded-2xl ${cardBg} p-5 ${cardRing} ${cardShadow} md:p-6`}>
            <Photo
              img={photo.family}
              className="w-full"
              caption="Family-friendly by design — the next generation of the community"
            />
          </div>
        </section>

        {/* 5. See It In the Press — videos + press credibility, one section.
            Two sub-blocks so the proof and the press read as a single
            "outside validation" closing block before contact. */}
        <section className="mt-10">
          <h2 className="eyebrow text-slate-400">
            See It In the Press
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
            "What Springdale Gets" panel) so it reads as a deliberate cap. */}
        <section className="mt-10 rounded-2xl bg-[#171013] p-6 text-white shadow-[0_30px_70px_-36px_rgba(20,5,10,0.7)] ring-1 ring-[#b91c1c]/25 md:p-8">
          <h2 className="text-xl font-bold">Contact Info</h2>
          <div className="mt-3 space-y-0 text-slate-300">
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
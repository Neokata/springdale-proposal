import {
  MapPin,
  Car,
  Music,
  Utensils,
  Sparkles,
  Film,
  Newspaper,
  ExternalLink,
} from "lucide-react";

// Named photos so each one lives in exactly one place on the page.
const photo = {
  drone: {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/v1782003664/2025-09-19-TougeCon_Underground_TMoreno-15_gfk3g4.jpg",
    alt: "Aerial view of the TougeCon 2025 lot, packed with cars",
  },
  // Hero crop: drop the top quarter (sky) so the cars fill the frame.
  // Original is 4000x2667; this slice is 4000x2000 starting at y=667.
  droneHero: {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/c_fill,g_auto,h_2000,w_4000,y_667/v1782003664/2025-09-19-TougeCon_Underground_TMoreno-15_gfk3g4.jpg",
    alt: "Aerial view of the TougeCon 2025 lot, packed with cars",
  },
  crowd: {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/v1782003860/AZ3A1319_dxnerw.jpg",
    alt: "Crowd around the breakdancing floor",
  },
  handstand: {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/v1782003665/AZ3A1557_r0k14k.jpg",
    alt: "Breakdancer doing a handstand on the dance floor",
  },
  family: {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/q_auto/v1782098846/vanceGreen_DSC00890_zs1ggu.jpg",
    alt: "Family-friendly atmosphere at TougeCon",
  },
  aerial: {
    // Wide aerial of a packed TougeCon lot, same series as `drone`.
    src: "https://res.cloudinary.com/djucof8mn/image/upload/q_auto/v1782003754/received_828660012845891_dsmsei.jpg",
    alt: "Aerial view of a packed TougeCon lot at dusk",
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
    subtitle: "'This Grassroots JDM Car Show Made Northwest Arkansas Feel Like Tokyo'",
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
    icon: MapPin,
    title: "Luther George Park",
    desc: "Green-space stage program: live performances, vendors, food trucks, and spectator seating.",
  },
  {
    icon: Car,
    title: "Tyson Foods Lot",
    desc: "Curated car meet anchor. JDM, Euro, muscle, and custom builds organized by category with clear traffic flow.",
  },
  {
    icon: Music,
    title: "Live Stage Programming",
    desc: "Headline DJ plus official breakdancing battles — out-of-state competitors and local crews on the same stage.",
  },
  {
    icon: Utensils,
    title: "Vendors + Food Trucks",
    desc: "Local and regional vendors plus a rotating food lineup that keeps people downtown for hours.",
  },
];

const benefits = [
  "New out-of-town visitors spending downtown",
  "A flagship fall event for the DSA calendar",
  "Co-branded marketing across TougeCon channels",
  "Post-event economic impact report",
  "Media content and photography for city use",
  "No cost to the city for production and staffing",
];

// Dark surface tokens — three-step elevation scale. /5 is the base card,
// /10 is mid-elevation (panel), /15 is high (contact). Each ring + shadow
// carries a tiny bit of white so edges read against the near-black page.
const cardRing = "ring-1 ring-white/10";
const cardBg = "bg-white/5";
const cardShadow = "shadow-[0_1px_2px_rgba(0,0,0,0.4)]";
const hoverLift =
  "transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-14px_rgba(0,0,0,0.55)] hover:ring-white/20 active:translate-y-0";
const photoFrame = `h-full w-full overflow-hidden rounded-2xl ${cardRing} shadow-[0_18px_44px_-30px_rgba(0,0,0,0.7)]`;

function Photo({
  img,
  className = "",
  caption,
}: {
  img: { src: string; alt: string };
  className?: string;
  caption?: string;
}) {
  return (
    <div className={className}>
      <div className={photoFrame}>
        <img
          src={img.src}
          alt={img.alt}
          className="block h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      {caption ? (
        <p className="mt-2 text-xs text-slate-400">{caption}</p>
      ) : null}
    </div>
  );
}

export default function SpringdaleProposalPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-100">
      <div className="mx-auto max-w-3xl px-5 pt-8 md:px-8 md:pt-12">
        {/* Hero — Option C: centered headline, scrim on both edges */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] ring-1 ring-black/5">
          <img
            src={photo.droneHero.src}
            alt={photo.droneHero.alt}
            className="h-full w-full object-cover object-center"
          />
          {/* Center-focused radial scrim — keeps the car edges visible while
              darkening behind the text so the headline reads cleanly. */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.15)_75%,transparent_100%)]" />
          {/* Extra bottom darken so the descriptor line is still legible
              against brighter cars at the bottom of the frame. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
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
              A Friday-night downtown activation of cars, music, and culture.
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
            and spends locally when they arrive. For Springdale, that means
            out-of-town visitors downtown on a Friday night.
          </p>
        </section>

        {/* 2. Last Year's Footprint — the proof hero. Full-bleed aerial with
            a left-side scrim and the 7,500+ stat as the page's central
            evidence. This is the visual that earns the rest of the proposal. */}
        <section className="mt-10">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10 sm:h-80 md:h-96">
            <img
              src={photo.aerial.src}
              alt={photo.aerial.alt}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-12 max-w-xl">
              <p className="eyebrow text-slate-300">
                Last Year's Footprint
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                7,500+ in one night
              </h3>
              <p className="mt-3 text-sm text-slate-200 sm:text-base">
                Cars filling up an entire lot, thousands of people pouring into the
                venue. This is what a fully-programmed Friday night with TougeCon
                looks like at scale.
              </p>
            </div>
          </div>
          <p className="mt-2 px-1 text-xs text-slate-400">
            Aerial of our 2025 activation at Evelyn Hills shopping mall, working with
            the property owner.
          </p>
        </section>

        {/* 3. On Stage — breakdancing + DJ proof that backs up the "Live Stage
            Programming" card in the activation plan below. Two equal photos
            side by side at md+, stacked on mobile. */}
        <section className="mt-10">
          <h2 className="eyebrow text-slate-400">
            On Stage
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Photo img={photo.handstand} className="h-48 w-full sm:h-60 md:h-72" />
            <Photo img={photo.dj} className="h-48 w-full sm:h-60 md:h-72" />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Official breakdancing battles produced with Classic Flow, plus headline
            DJ sets — out-of-state competitors and local crews sharing one stage.
          </p>
        </section>

        {/* 4. The Activation Plan — four cards. The "Live Stage" card in this
            grid is the item the On Stage photos above are proof for. */}
        <section className="mt-10">
          <h2 className="eyebrow text-slate-400">
            The Activation Plan
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {activations.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl ${cardBg} p-5 ${cardRing} ${cardShadow} ${hoverLift}`}
              >
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
        </section>

        {/* 5. What Springdale Gets — the one red panel. Stays loud on purpose:
            this is the "what's in it for the city" payoff. */}
        <section className="mt-10 rounded-2xl bg-[#b91c1c] p-5 text-white shadow-[0_18px_40px_-20px_rgba(185,28,28,0.55)] ring-1 ring-red-900/30 md:p-6">
          <h2 className="eyebrow text-red-100">
            What Springdale Gets
          </h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.25} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Why Springdale, Why Now — family photo floated right at md+ so the
            4:3 image fills the column without dominating; paragraph wraps
            around it magazine-style. Below md, the photo stacks full-width
            above the paragraph at its native 4:3 ratio. */}
        <section className="mt-10">
          <h2 className="eyebrow text-slate-400">
            Why Springdale, Why Now
          </h2>
          <figure className="mt-4 w-full md:float-right md:mb-3 md:ml-5 md:mt-3 md:w-[48%]">
            <div className={`aspect-[4/3] w-full overflow-hidden rounded-2xl ${cardRing} shadow-[0_18px_44px_-30px_rgba(0,0,0,0.7)]`}>
              <img
                src={photo.family.src}
                alt={photo.family.alt}
                className="block h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 px-1 text-xs text-slate-400">
              Family-friendly by design — the next generation of the community
            </figcaption>
          </figure>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg md:mt-3">
            Downtown Springdale Alliance is building a vibrant, connected
            downtown. TougeCon brings the audience, production experience, and
            track record to deliver a flagship fall event in one weekend. We are
            offering to bring an established format and co-create a Springdale
            version of it — not ask the city to build something from scratch.
          </p>
        </section>

        {/* 7. The Ask — the close. Dark card, the red bullets are the only
            spot of brand color here so the eye lands on them. */}
        <section className={`mt-10 clear-both rounded-2xl ${cardBg} p-5 ${cardRing} ${cardShadow} md:p-6`}>
          <h2 className="eyebrow text-slate-400">
            The Ask
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300 md:text-lg">
            To move forward, here is what we need from this partnership:
          </p>
          <ul className="mt-3 space-y-2 text-slate-200">
            {[
              "Use of Luther George Park for programmed activation",
              "Use of the Tyson Foods parking lot for the car meet",
              "Co-marketing support from Downtown Springdale Alliance",
              "Consideration of a presenting sponsorship or in-kind partnership",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f87171]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 8. See It In the Press — videos + press credibility, one section.
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
            <div className="mt-2 space-y-2">
              {aftermovies.map((video) => (
                <a
                  key={video.year}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between rounded-2xl ${cardBg} p-4 ${cardRing} ${cardShadow} ${hoverLift}`}
                >
                  <div className="flex items-center gap-3">
                    <Film className="h-5 w-5 text-[#f87171]" strokeWidth={2.25} />
                    <div>
                      <p className="font-bold text-slate-100">{video.title}</p>
                      <p className="text-sm text-slate-400">Watch on YouTube</p>
                    </div>
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
            <div className="mt-2 space-y-2">
              {press.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start justify-between gap-4 rounded-2xl ${cardBg} p-4 ${cardRing} ${cardShadow} ${hoverLift}`}
                >
                  <div className="flex items-start gap-3">
                    <Newspaper className="mt-0.5 h-5 w-5 shrink-0 text-[#f87171]" strokeWidth={2.25} />
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

        {/* 9. Contact Info — the close. Dark red-tinted panel, only one
            outside-the-system surface in the page (other than the red
            "What Springdale Gets" panel) so it reads as a deliberate cap. */}
        <section className="mt-10 rounded-2xl bg-[#171013] p-6 text-white shadow-[0_30px_70px_-36px_rgba(20,5,10,0.7)] ring-1 ring-[#b91c1c]/25 md:p-8">
          <h2 className="text-xl font-bold">Contact Info</h2>
          <div className="mt-3 space-y-2 text-slate-300">
            <a
              href="mailto:caleb@tougecon.com"
              className="block text-slate-100 transition hover:text-white"
              style={{ textShadow: "0 0 12px rgba(239,68,68,0.45)" }}
            >
              caleb@tougecon.com
            </a>
            <a
              href="mailto:noah@tougecon.com"
              className="block text-slate-100 transition hover:text-white"
              style={{ textShadow: "0 0 12px rgba(239,68,68,0.45)" }}
            >
              noah@tougecon.com
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
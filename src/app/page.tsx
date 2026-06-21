import {
  MapPin,
  Car,
  Music,
  Utensils,
  Sparkles,
  ArrowRight,
  Film,
  Newspaper,
  ExternalLink,
  Camera,
  Mail,
  Phone,
} from "lucide-react";

const stats = [
  { label: "Attendees", value: "14,744" },
  { label: "States", value: "19" },
  { label: "Local Impact", value: "$750K" },
  { label: "2026 Projection", value: "$1M+" },
];

const photos = [
  {
    src: "https://res.cloudinary.com/djucof8mn/image/upload/v1782003754/received_828660012845891_dsmsei.jpg",
    alt: "TougeCon Underground 2025 drone shot",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0617/5090/2952/files/AZ3A2152.jpg?v=1759291697&width=800",
    alt: "TougeCon crowd",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0617/5090/2952/files/AZ3A1955.jpg?v=1759291697&width=800",
    alt: "TougeCon cars",
  },
];

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
    desc: "Green-space stage program: DJ, breakdancing battles, vendors, food trucks, and spectator seating.",
  },
  {
    icon: Car,
    title: "Tyson Foods Lot",
    desc: "Curated car meet anchor. JDM, Euro, muscle, and custom builds organized by category with clear traffic flow.",
  },
  {
    icon: Music,
    title: "DJ Afrosia + Classic Flow",
    desc: "Official breakdancing battles produced with Classic Flow, bringing out-of-state competitors and local crews to the same stage.",
  },
  {
    icon: Utensils,
    title: "Vendors + Food Trucks",
    desc: "Local and regional vendors plus a rotating food lineup that keeps people downtown for hours.",
  },
];

const benefits = [
  "New out-of-region visitors spending downtown",
  "A flagship fall event for the DSA calendar",
  "Co-branded marketing across TougeCon channels",
  "Post-event economic impact report",
  "Media content and photography for city use",
  "No cost to the city for production and staffing",
];

export default function SpringdaleProposalPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero with full-width image strip */}
      <div className="relative h-56 w-full sm:h-72 md:h-96">
        <img
          src={photos[0].src}
          alt={photos[0].alt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-5 pb-6 md:px-8 md:pb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-300">
            Partnership Proposal · {new Date().getFullYear()}
          </p>
          <h1 className="mt-2 text-3xl font-black leading-[1.1] text-white sm:text-4xl md:text-5xl">
            TougeCon in{" "}
            <span className="text-[#ef4444]">Downtown Springdale</span>
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-8 md:px-8 md:py-12">
        {/* Sticky CTA on mobile */}
        <div className="sticky top-3 z-30 mb-8 md:hidden">
          <a
            href="mailto:sponsors@tougecon.com?subject=TougeCon%20Springdale%20Partnership"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#b91c1c] px-5 py-3.5 text-sm font-bold text-white shadow-lg"
          >
            <Mail className="h-4 w-4" />
            Request the full deck
          </a>
        </div>

        <p className="text-lg leading-snug text-slate-600 md:text-xl">
          A proposal for Downtown Springdale Alliance and the City of Springdale
          to host a fall TougeCon activation at Luther George Park and the Tyson
          Foods parking lot.
        </p>

        {/* The Ask */}
        <section className="mt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            The Ask
          </h2>
          <p className="mt-3 text-base leading-relaxed md:text-lg">
            Partner with Downtown Springdale to bring a proven automotive + culture
            activation to Luther George Park and the adjacent Tyson Foods lot:
            curated cars, DJ Afrosia, breakdancing battles with Classic Flow, local
            vendors, and food trucks — all designed to drive foot traffic to downtown
            businesses and introduce Springdale to a travel-ready audience.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            {[
              "Use of Luther George Park for programmed activation",
              "Use of the Tyson Foods parking lot for the car meet",
              "Co-marketing support from Downtown Springdale Alliance",
              "Consideration of a presenting sponsorship or in-kind partnership",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b91c1c]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Who We Are */}
        <section className="mt-10 rounded-2xl bg-slate-50 p-5 md:p-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Who We Are
          </h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            TougeCon is the premier celebration of Japanese cars, culture, and
            mountain-pass driving in the Ozarks. What started as a grassroots
            mountain-drive meet has grown into a multi-day event anchored in
            Fayetteville, with a reputation for quality builds, organized
            programming, and a passionate community that travels for the experience.
          </p>
          <p className="mt-3 leading-relaxed text-slate-700">
            Our audience spends locally: hotels, restaurants, gas, parts shops,
            and retail.
          </p>
        </section>

        {/* Stats */}
        <section className="mt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            2025 Proof Points
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
              >
                <p className="text-2xl font-black text-[#b91c1c] sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Source: TougeCon 2025 event recap and Fayetteville economic impact
            estimate. Full report available on request.
          </p>
        </section>

        {/* Photos */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
            <Camera className="h-4 w-4" />
            The Event in Photos
          </h2>
          <div className="mt-4 flex gap-3 overflow-x-auto pb-2 snap-x">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="relative w-72 shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 shadow-sm"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-48 w-72 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Aftermovies */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
            <Film className="h-4 w-4" />
            Aftermovies
          </h2>
          <div className="mt-4 space-y-3">
            {aftermovies.map((video) => (
              <a
                key={video.year}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors active:bg-slate-50"
              >
                <div>
                  <p className="font-bold">{video.title}</p>
                  <p className="text-sm text-slate-500">Watch on YouTube</p>
                </div>
                <ExternalLink className="h-5 w-5 text-[#b91c1c]" />
              </a>
            ))}
          </div>
        </section>

        {/* Press */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
            <Newspaper className="h-4 w-4" />
            Press Coverage
          </h2>
          <div className="mt-4 space-y-3">
            {press.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors active:bg-slate-50"
              >
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.subtitle}</p>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-[#b91c1c]" />
              </a>
            ))}
          </div>
        </section>

        {/* Activation plan */}
        <section className="mt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            The Activation Plan
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {activations.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-2 text-[#b91c1c]">
                  <item.icon className="h-5 w-5" />
                  <h3 className="font-bold">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-10 rounded-2xl bg-[#b91c1c] p-5 text-white md:p-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-red-100">
            What Springdale Gets
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Why Now */}
        <section className="mt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Why Now
          </h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            Downtown Springdale Alliance is focused on creating a vibrant,
            connected downtown and supporting local businesses. TougeCon has the
            audience, production experience, and track record to deliver that in
            one weekend. We are not asking Springdale to build something from
            scratch — we are offering to bring an established event format and
            co-create a Springdale version of it.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white md:p-8">
          <h2 className="text-2xl font-bold">Next Step</h2>
          <p className="mt-2 text-slate-300">
            Let&apos;s schedule a 30-minute call with Paxton Roberts and the Downtown
            Springdale Alliance team to walk through the site plan, partnership
            tiers, and 2026 calendar.
          </p>
          <a
            href="mailto:sponsors@tougecon.com?subject=TougeCon%20Springdale%20Partnership"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#b91c1c] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#991b1b]"
          >
            <Mail className="h-4 w-4" />
            Request the full deck <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs text-slate-400">
            Direct: tougecon@gmail.com
          </p>
        </section>

        <footer className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} TougeCon LLC
        </footer>
      </div>
    </main>
  );
}

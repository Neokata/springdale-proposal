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
} from "lucide-react";

const stats = [
  { label: "Attendees in 2025", value: "14,744" },
  { label: "States represented", value: "19" },
  { label: "Local economic impact", value: "$750K" },
  { label: "2026 projection", value: "$1M+" },
];

const photos = [
  "https://res.cloudinary.com/djucof8mn/image/upload/v1782003754/received_828660012845891_dsmsei.jpg",
  "https://cdn.shopify.com/s/files/1/0617/5090/2952/files/AZ3A2152.jpg?v=1759291697&width=800",
  "https://cdn.shopify.com/s/files/1/0617/5090/2952/files/AZ3A1955.jpg?v=1759291697&width=800",
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
    desc: "Family-friendly green-space program: live DJ stage, breakdancing battles, vendor rows, food trucks, and spectator seating.",
  },
  {
    icon: Car,
    title: "Tyson Foods Lot",
    desc: "Curated car meet anchor across a paved, walkable footprint. JDM, Euro, muscle, and custom builds organized by category.",
  },
  {
    icon: Music,
    title: "Music + Dance",
    desc: "DJ Afrosia headlining the stage, with official breakdancing battles produced in partnership with Classic Flow — bringing competitors from out of state and local youth crews together.",
  },
  {
    icon: Utensils,
    title: "Vendors + Food",
    desc: "Local and regional vendors plus a rotating food truck lineup that keeps people downtown for hours.",
  },
];

const benefits = [
  "New out-of-region visitors spending in downtown",
  "A flagship fall event to anchor the DSA calendar",
  "Co-branded marketing across TougeCon channels",
  "Post-event economic impact report",
  "Media content and photography for city use",
  "No cost to the city for production and staffing",
];

export default function SpringdaleProposalPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Partnership Proposal · {new Date().getFullYear()}
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
          TougeCon in{" "}
          <span className="text-[#b91c1c]">Downtown Springdale</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A proposal for Downtown Springdale Alliance and the City of Springdale
          to host a fall TougeCon activation at Luther George Park and the Tyson
          Foods parking lot.
        </p>

        <section className="mt-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            The Ask
          </h2>
          <p className="mt-3 text-lg leading-relaxed">
            We want to partner with Downtown Springdale to bring a proven,
            high-energy automotive + culture activation to Luther George Park and
            the adjacent Tyson Foods lot. The event combines a curated car meet,
            DJ Afrosia, official breakdancing battles with Classic Flow, local
            vendors, and food trucks — designed to drive foot traffic to downtown
            businesses and put Springdale on the map for a new, travel-ready
            audience.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
            <li>Use of Luther George Park for programmed activation</li>
            <li>Use of the Tyson Foods parking lot for the car meet</li>
            <li>Co-marketing support from Downtown Springdale Alliance</li>
            <li>Consideration of a presenting sponsorship or in-kind city partnership</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Who We Are
          </h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            TougeCon is the premier celebration of Japanese cars, culture, and
            mountain-pass driving in the Ozarks. What started as a grassroots
            mountain-drive meet has grown into a multi-day event anchored in
            Fayetteville, with a reputation for quality builds, organized
            programming, and a passionate community that travels for the
            experience.
          </p>
          <p className="mt-3 leading-relaxed text-slate-700">
            Our audience cares about driving, build quality, and the culture
            around it. They also spend locally: hotels, restaurants, gas, parts
            shops, and retail.
          </p>
        </section>

        <section className="mt-12 border-y border-slate-200 py-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            2025 Proof Points
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-[#b91c1c]">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Source: TougeCon 2025 event recap and Fayetteville economic impact
            estimate. Full report and 2026 model available on request.
          </p>
        </section>

        {/* Photo gallery */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
            <Camera className="h-4 w-4" />
            The Event in Photos
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {photos.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-slate-200">
                <img
                  src={src}
                  alt={`TougeCon event photo ${i + 1}`}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Aftermovies */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
            <Film className="h-4 w-4" />
            Aftermovies
          </h2>
          <div className="mt-4 space-y-4">
            {aftermovies.map((video) => (
              <a
                key={video.year}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-[#b91c1c] hover:bg-slate-100"
              >
                <div>
                  <p className="font-bold">{video.title}</p>
                  <p className="text-sm text-slate-500">Watch on YouTube</p>
                </div>
                <ExternalLink className="h-5 w-5 text-slate-400" />
              </a>
            ))}
          </div>
        </section>

        {/* Press */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
            <Newspaper className="h-4 w-4" />
            Press Coverage
          </h2>
          <div className="mt-4 space-y-4">
            {press.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 p-4 transition-colors hover:border-[#b91c1c]"
              >
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.subtitle}</p>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            The Activation Plan
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {activations.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 p-5">
                <div className="flex items-center gap-2 text-[#b91c1c]">
                  <item.icon className="h-5 w-5" />
                  <h3 className="font-bold">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            What Springdale Gets
          </h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#b91c1c]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
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

        <section className="mt-12 rounded-xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-bold">Next Step</h2>
          <p className="mt-2 text-slate-300">
            Let&apos;s schedule a 30-minute call with Paxton Roberts and the Downtown
            Springdale Alliance team to walk through the site plan, partnership
            tiers, and 2026 calendar.
          </p>
          <a
            href="mailto:sponsors@tougecon.com?subject=TougeCon%20Springdale%20Partnership"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#b91c1c] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#991b1b]"
          >
            Request the full deck <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs text-slate-400">Direct: tougecon@gmail.com</p>
        </section>

        <footer className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} TougeCon LLC
        </footer>
      </div>
    </main>
  );
}

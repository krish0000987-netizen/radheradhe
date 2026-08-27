import servicesHero from "@/assets/radhe/innova-crysta.jpeg";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    icon: "📍",
    title: "Local Ujjain Travel",
    img: "https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=600&h=350&fit=crop&auto=format",
    desc: "Comfortable local travel within Ujjain city — temple visits, sightseeing, local errands and short trips.",
    benefits: ["Convenient city coverage", "Flexible duration", "Local driver knowledge"],
  },
  {
    icon: "🕌",
    title: "Mahakaleshwar Darshan Travel",
    img: "https://images.unsplash.com/photo-1658730510499-8c8e84f4db38?w=600&h=350&fit=crop&auto=format",
    desc: "Dedicated vehicle arrangements for Mahakaleshwar darshan — timed pickups, comfortable waiting and drop.",
    benefits: ["Experienced local drivers", "Temple-aware scheduling", "Flexible group sizes"],
  },
  {
    icon: "✈️",
    title: "Airport Transfers",
    img: "https://images.unsplash.com/photo-1784240256561-96f3264d221a?w=600&h=350&fit=crop&auto=format",
    desc: "Reliable and timely airport pickup and drop services from Ujjain to Indore Airport and other airports.",
    benefits: ["On-time guaranteed", "Flight-aware scheduling", "All vehicle types"],
  },
  {
    icon: "🚉",
    title: "Railway Station Transfers",
    img: "https://images.unsplash.com/photo-1785651975036-a282bbf0275d?w=600&h=350&fit=crop&auto=format",
    desc: "Convenient pickup and drop from Ujjain Railway Station — available for all trains.",
    benefits: ["Prompt service", "Available for all trains", "City-wide drop"],
  },
  {
    icon: "🛣️",
    title: "Outstation Trips",
    img: "https://images.unsplash.com/photo-1784240256663-f53a45989d1c?w=600&h=350&fit=crop&auto=format",
    desc: "Professional intercity travel from Ujjain to destinations across Madhya Pradesh and beyond.",
    benefits: ["Comfortable long-distance", "Experienced drivers", "All vehicle categories"],
  },
  {
    icon: "→",
    title: "One-Way Trips",
    img: "https://images.unsplash.com/photo-1784240256561-96f3264d221a?w=600&h=350&fit=crop&auto=format",
    desc: "Cost-efficient one-way transportation when you only need a single-direction journey.",
    benefits: ["Point-to-point service", "Best route planning", "No return commitment"],
  },
  {
    icon: "↔",
    title: "Round Trips",
    img: "https://images.unsplash.com/photo-1694667509674-676629c9d069?w=600&h=350&fit=crop&auto=format",
    desc: "Travel to your destination and return at your convenience — fully flexible scheduling.",
    benefits: ["Flexible return timing", "Same driver comfort", "Complete trip management"],
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Travel",
    img: "https://images.unsplash.com/photo-1567122087721-47b09b61e1d1?w=600&h=350&fit=crop&auto=format",
    desc: "Spacious and comfortable vehicles designed for families — with ample room for all members and luggage.",
    benefits: ["Child-friendly vehicles", "Luggage space", "SUV and minivan options"],
  },
  {
    icon: "🏢",
    title: "Group Travel",
    img: "https://images.unsplash.com/photo-1642342397404-fed6450eb964?w=600&h=350&fit=crop&auto=format",
    desc: "Well-maintained tempo travellers and group vehicles for large families, pilgrim groups and corporate teams.",
    benefits: ["12–20+ seating", "Roof luggage carriers", "AC throughout"],
  },
  {
    icon: "🛕",
    title: "Pilgrimage Tours",
    img: "https://images.unsplash.com/photo-1658730557753-caf6bbc4a0bc?w=600&h=350&fit=crop&auto=format",
    desc: "Multi-destination spiritual travel — Ujjain, Omkareshwar, Kashi, Shirdi and more.",
    benefits: ["Itinerary planning support", "Group vehicle options", "Experienced drivers"],
  },
  {
    icon: "💼",
    title: "Corporate Travel",
    img: "https://images.unsplash.com/photo-1641803187805-3592b4cfeddb?w=600&h=350&fit=crop&auto=format",
    desc: "Professional, punctual transportation for corporate meetings, events and business travel requirements.",
    benefits: ["Punctual service", "Professional vehicles", "Corporate convenience"],
  },
  {
    icon: "🗺️",
    title: "Customized Travel",
    img: "https://images.unsplash.com/photo-1710987759289-ee6d002cb7d9?w=600&h=350&fit=crop&auto=format",
    desc: "Any destination, any group size, any duration — we customize travel to fit your unique requirements perfectly.",
    benefits: ["Fully flexible", "Any destination", "Tailor-made solution"],
  },
];

export default function Services({ onNavigate }: ServicesProps) {
  const nav = (page: string) => { onNavigate(page); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={servicesHero}
          alt="Shree Radhe Radhe Innova Crysta - Premium Services MP09BD6826"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1214]/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center pt-16 px-4">
          <div>
            <div className="section-label mb-3">What We Do</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
              Transportation Solutions<br />Designed Around You
            </h1>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Our Services</div>
            <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-4">
              Complete Travel <span className="text-[#6B1E2E]">Solutions</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl overflow-hidden card-hover border border-[#E0D4C0]">
                <div className="img-hover-zoom h-44">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-2xl">{s.icon}</span>
                    <h3 className="font-display text-lg font-bold text-[#6B1E2E]">{s.title}</h3>
                  </div>
                  <p className="text-sm text-[#7A6A5A] font-body leading-relaxed mb-4">{s.desc}</p>
                  <div className="space-y-1.5 mb-5">
                    {s.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-xs text-[#7A6A5A] font-body">
                        <span className="w-4 h-4 rounded-full bg-[#C9973A]/20 text-[#C9973A] flex items-center justify-center text-[9px] font-bold flex-shrink-0">✓</span>
                        {b}
                      </div>
                    ))}
                  </div>
                  <button onClick={() => nav("contact")} className="w-full text-sm font-body font-semibold text-[#6B1E2E] border border-[#6B1E2E] rounded-lg py-2.5 hover:bg-[#6B1E2E] hover:text-white transition-colors">
                    Enquire →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#6B1E2E] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Ready to Book a Service?</h2>
          <p className="text-white/70 font-body text-sm mb-8">Call or WhatsApp us to discuss your requirements. We will find the perfect solution.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => nav("contact")} className="btn-gold">Book Now →</button>
            <a href="tel:9039223022" className="btn-outline">📞 Call 9039223022</a>
          </div>
        </div>
      </section>
    </div>
  );
}

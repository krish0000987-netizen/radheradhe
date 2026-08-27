import packagesHero from "@/assets/radhe/solanki-2.jpeg";

interface TourPackagesProps {
  onNavigate: (page: string) => void;
}

const packages = [
  {
    title: "Ujjain Spiritual Experience",
    duration: "1 Day",
    vehicle: "Sedan / SUV",
    destinations: ["Mahakaleshwar Temple", "Mahakal Lok", "Harsiddhi Temple", "Ram Ghat", "Kal Bhairav Temple"],
    ideal: "Individuals, Couples, Small Families",
    desc: "A complete one-day spiritual tour of Ujjain's major temples and sacred sites. Ideal for first-time visitors and devoted pilgrims.",
    color: "bg-[#6B1E2E]",
  },
  {
    title: "Ujjain–Omkareshwar Journey",
    duration: "1–2 Days",
    vehicle: "SUV / Tempo Traveller",
    destinations: ["Ujjain Darshan", "Omkareshwar Jyotirlinga", "Narmada River Ghats"],
    ideal: "Families, Pilgrimage Groups",
    desc: "Visit both sacred Jyotirlingas — Mahakaleshwar in Ujjain and Omkareshwar on the Narmada. A deeply spiritual two-destination journey.",
    color: "bg-[#4A1020]",
  },
  {
    title: "Ujjain–Indore Travel",
    duration: "1 Day",
    vehicle: "Sedan / SUV",
    destinations: ["Ujjain Darshan", "Indore City", "Rajwada Palace", "Sarafa Bazaar"],
    ideal: "Tourists, Family Groups",
    desc: "Combine the sacred city of Ujjain with the vibrant culture and food scene of Indore — a 55 km scenic drive away.",
    color: "bg-[#5A3010]",
  },
  {
    title: "Madhya Pradesh Pilgrimage Tour",
    duration: "2–4 Days",
    vehicle: "Tempo Traveller",
    destinations: ["Ujjain", "Omkareshwar", "Maheshwar", "Mandu"],
    ideal: "Groups, Extended Family",
    desc: "A multi-destination pilgrimage and heritage journey through the best of Madhya Pradesh — fully customizable to your requirements.",
    color: "bg-[#1A1214]",
  },
  {
    title: "Family Custom Tour",
    duration: "Flexible",
    vehicle: "Any Vehicle",
    destinations: ["Your chosen destinations"],
    ideal: "Families, Custom Groups",
    desc: "Design your own itinerary — tell us your preferred destinations, duration and group size. We will arrange the perfect vehicle and travel plan.",
    color: "bg-[#2E1E28]",
  },
];

export default function TourPackages({ onNavigate }: TourPackagesProps) {
  const nav = (page: string) => { onNavigate(page); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={packagesHero}
          alt="Shree Radhe Radhe Traveller Solanki - Tour Packages"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1214]/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center pt-16 px-4">
          <div>
            <div className="section-label mb-3">Explore More</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
              Discover More.<br />Travel Better.
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 bg-white border-b border-[#E0D4C0]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#7A6A5A] font-body leading-relaxed text-sm">
            We offer a range of suggested tour packages and can build completely custom itineraries around your requirements. All packages are enquiry-based — contact us to discuss dates, vehicle needs and customizations. <strong className="text-[#6B1E2E]">Prices are not listed</strong> as they depend on group size, vehicle type and travel dates.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Our Packages</div>
            <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-4">
              Travel <span className="text-[#6B1E2E]">Packages</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl overflow-hidden card-hover border border-[#E0D4C0]">
                <div className={`${p.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-body font-semibold text-[#C9973A] uppercase tracking-wider">{p.duration}</span>
                    <span className="text-xs font-body font-semibold text-white/70 bg-white/10 px-2 py-0.5 rounded">{p.vehicle}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#7A6A5A] font-body leading-relaxed mb-4">{p.desc}</p>
                  <div className="mb-4">
                    <div className="text-xs font-body font-semibold text-[#6B1E2E] uppercase tracking-wider mb-2">Destinations</div>
                    <div className="space-y-1.5">
                      {p.destinations.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-xs text-[#7A6A5A] font-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9973A] flex-shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-5">
                    <span className="text-xs font-body text-[#B8A898]">Ideal for: </span>
                    <span className="text-xs font-body font-semibold text-[#1A1214]">{p.ideal}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-body text-[#7A6A5A] mb-4">
                    <span className="flex items-center gap-1"><span className="text-[#C9973A]">✓</span> Customization Available</span>
                  </div>
                  <button onClick={() => nav("contact")} className="w-full btn-primary justify-center text-sm py-2.5">
                    Enquire Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM TOUR */}
      <section className="py-20 bg-[#6B1E2E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=1920&h=600&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="section-label mb-4" style={{ color: "#C9973A" }}>Fully Flexible</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Tour?
          </h2>
          <p className="text-white/70 font-body text-sm mb-8 max-w-xl mx-auto">
            We can design a completely custom travel itinerary around your preferred destinations, budget, group size and dates. No standard package required.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => nav("contact")} className="btn-gold text-base">
              Create My Trip →
            </button>
            <a href="https://wa.me/919039223022?text=Hello%2C%20I%20want%20to%20create%20a%20custom%20tour%20package." target="_blank" rel="noopener noreferrer" className="btn-outline">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

interface UjjainDarshanProps {
  onNavigate: (page: string) => void;
}

const destinations = [
  {
    name: "Mahakaleshwar Temple",
    img: "https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=500&h=350&fit=crop&auto=format",
    desc: "One of the 12 Jyotirlingas of Lord Shiva, Mahakaleshwar is the spiritual heart of Ujjain and the primary pilgrimage destination.",
  },
  {
    name: "Mahakal Lok",
    img: "https://images.unsplash.com/photo-1658730510499-8c8e84f4db38?w=500&h=350&fit=crop&auto=format",
    desc: "The magnificent Mahakal Lok corridor — a grand spiritual walkway lined with sculptures and depictions of Lord Shiva.",
  },
  {
    name: "Ram Ghat",
    img: "https://images.unsplash.com/photo-1584185438408-88532feff8d4?w=500&h=350&fit=crop&auto=format",
    desc: "The most prominent ghat on the Shipra River, Ram Ghat is a sacred site for rituals and the venue of the grand Kumbh Mela.",
  },
  {
    name: "Kal Bhairav Temple",
    img: "https://images.unsplash.com/photo-1658730600296-a0276b5749ca?w=500&h=350&fit=crop&auto=format",
    desc: "An ancient temple dedicated to Kal Bhairav, considered the guardian deity of Ujjain city.",
  },
  {
    name: "Harsiddhi Mata Temple",
    img: "https://images.unsplash.com/photo-1658730458768-8b8cc0c00955?w=500&h=350&fit=crop&auto=format",
    desc: "A shakti peetha of great importance, Harsiddhi Mata temple is revered by devotees throughout India.",
  },
  {
    name: "Mangalnath Temple",
    img: "https://images.unsplash.com/photo-1658730557753-caf6bbc4a0bc?w=500&h=350&fit=crop&auto=format",
    desc: "Situated on the banks of Shipra, Mangalnath is considered the birthplace of Mars and is a significant astrological site.",
  },
  {
    name: "Sandipani Ashram",
    img: "https://images.unsplash.com/photo-1705291490318-6cc8cb88a1f3?w=500&h=350&fit=crop&auto=format",
    desc: "The ancient ashram where Lord Krishna, Balarama and Sudama received their education from Guru Sandipani.",
  },
  {
    name: "Vedh Shala (Observatory)",
    img: "https://images.unsplash.com/photo-1641803187805-3592b4cfeddb?w=500&h=350&fit=crop&auto=format",
    desc: "An ancient astronomical observatory built by Maharaja Jai Singh II — one of five he built across India.",
  },
];

const routes = [
  {
    title: "Ujjain Full Darshan",
    duration: "Full Day",
    stops: ["Mahakaleshwar Temple", "Mahakal Lok", "Ram Ghat", "Harsiddhi Temple", "Kal Bhairav Temple", "Sandipani Ashram"],
  },
  {
    title: "Mahakaleshwar Morning Darshan",
    duration: "Half Day",
    stops: ["Hotel/Accommodation", "Mahakaleshwar Temple (Bhasma Aarti/Darshan)", "Mahakal Lok", "Ram Ghat"],
  },
  {
    title: "Shipra River Circuit",
    duration: "Half Day",
    stops: ["Ram Ghat", "Mangalnath Temple", "Other Shipra Ghats", "Return"],
  },
];

export default function UjjainDarshan({ onNavigate }: UjjainDarshanProps) {
  const nav = (page: string) => { onNavigate(page); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=1920&h=1080&fit=crop&auto=format"
          alt="Mahakaleshwar Jyotirlinga Ujjain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1214]/65" />
        <div className="absolute inset-0 flex items-center justify-center text-center pt-16 px-4">
          <div>
            <div className="section-label mb-4">Sacred Pilgrimage Travel</div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Experience Ujjain Darshan<br />With Comfortable Travel
            </h1>
            <p className="text-white/80 font-body text-base max-w-xl mx-auto mb-7">
              Dedicated vehicle arrangements for individual, family and group pilgrimages across all major Ujjain destinations.
            </p>
            <button onClick={() => nav("contact")} className="btn-gold">
              Book a Vehicle for Darshan →
            </button>
          </div>
        </div>
      </section>

      {/* MAHAKALESHWAR */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-label mb-3">Jyotirlinga</div>
              <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-5">
                Mahakaleshwar <span className="text-[#6B1E2E]">Jyotirlinga</span>
              </h2>
              <div className="space-y-4 text-sm text-[#7A6A5A] font-body leading-relaxed">
                <p>
                  Mahakaleshwar Jyotirlinga is one of the twelve sacred Jyotirlingas of Lord Shiva and the divine centerpiece of Ujjain. Pilgrims travel from across India and the world to seek the blessings of Mahakal and experience the revered Bhasma Aarti.
                </p>
                <p>
                  Shree Radhe Radhe Travels specializes in comfortable vehicle arrangements for your Mahakaleshwar darshan — whether you are travelling alone, with family or as part of a large pilgrimage group.
                </p>
              </div>
              <div className="mt-6 p-4 bg-[#6B1E2E]/10 rounded-xl border-l-4 border-[#6B1E2E]">
                <p className="text-xs text-[#6B1E2E] font-body font-semibold">
                  Temple timings and aarti schedules are subject to official announcements. Please verify current information with the temple authorities.
                </p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=800&h=600&fit=crop&auto=format"
              alt="Mahakaleshwar Temple"
              className="rounded-2xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Holy Sites</div>
            <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-4">
              Popular Ujjain <span className="text-[#6B1E2E]">Destinations</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destinations.map((d) => (
              <div key={d.name} className="rounded-xl overflow-hidden card-hover border border-[#E0D4C0] bg-white">
                <div className="img-hover-zoom h-44">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold text-[#6B1E2E] mb-2">{d.name}</h3>
                  <p className="text-xs text-[#7A6A5A] font-body leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL SUPPORT */}
      <section className="py-16 bg-[#6B1E2E]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="section-label mb-3" style={{ color: "#C9973A" }}>Vehicle Arrangements</div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Darshan Travel Support
          </h2>
          <p className="text-white/70 font-body text-sm max-w-2xl mx-auto mb-8">
            We can arrange convenient vehicles for individual pilgrims, families and large pilgrimage groups. Simply share your travel date, group size and requirements — and we will suggest the right vehicle and plan your comfortable darshan journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { icon: "🧘", title: "Individual Darshan", desc: "Solo or couple — compact, comfortable sedan" },
              { icon: "👨‍👩‍👧‍👦", title: "Family Darshan", desc: "Family SUV with space for 6–7 pilgrims" },
              { icon: "🕌", title: "Group Darshan", desc: "Tempo travellers for 12–20+ pilgrims" },
            ].map((s) => (
              <div key={s.title} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="font-display text-base font-bold text-white mb-1">{s.title}</h3>
                <p className="text-xs text-white/70 font-body">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUGGESTED ROUTES */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Suggested Itineraries</div>
            <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-2">
              Popular Darshan <span className="text-[#6B1E2E]">Routes</span>
            </h2>
            <p className="text-xs text-[#B8A898] font-body">These are suggested itineraries only — not guaranteed schedules. Custom routes available on request.</p>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {routes.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl p-7 border border-[#E0D4C0] card-hover">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-bold text-[#6B1E2E]">{r.title}</h3>
                  <span className="text-xs bg-[#FAF6F0] text-[#7A6A5A] font-body font-semibold px-2.5 py-1 rounded-full border border-[#E0D4C0]">{r.duration}</span>
                </div>
                <div className="space-y-2.5">
                  {r.stops.map((stop, i) => (
                    <div key={stop} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6B1E2E] text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                      <span className="text-sm text-[#7A6A5A] font-body">{stop}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => nav("contact")} className="mt-6 w-full btn-primary justify-center text-sm py-2.5">
                  Book This Route
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

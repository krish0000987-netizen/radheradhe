import travellerSide from "@/assets/radhe/traveller-side.jpeg";

interface AboutProps {
  onNavigate: (page: string) => void;
}

const values = [
  { icon: "🎯", title: "Reliability", desc: "You can count on us to be there on time, every time." },
  { icon: "💺", title: "Comfort", desc: "Well-maintained, clean vehicles with AC for every journey." },
  { icon: "🛡️", title: "Safety", desc: "Experienced drivers and well-serviced vehicles for safe travel." },
  { icon: "📋", title: "Transparency", desc: "Clear communication with no hidden surprises." },
  { icon: "🤝", title: "Customer Service", desc: "Your convenience is at the heart of everything we do." },
  { icon: "⏰", title: "Punctuality", desc: "Respecting your time and your travel schedule." },
];

export default function About({ onNavigate }: AboutProps) {
  const nav = (page: string) => { onNavigate(page); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={travellerSide}
          alt="Shree Radhe Radhe Travels Fleet - Traveller Side View Ujjain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1214]/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center pt-16">
          <div>
            <div className="section-label mb-3">Our Story</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
              Travel With Comfort.<br />Travel With Confidence.
            </h1>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-label mb-3">Who We Are</div>
              <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-6">
                Shree Radhe Radhe <span className="text-[#6B1E2E]">Travels</span>
              </h2>
              <div className="space-y-4 text-[#7A6A5A] font-body leading-relaxed text-sm">
                <p>
                  Shree Radhe Radhe Travels is a Ujjain-based travel and vehicle service provider dedicated to making every journey comfortable, dependable and memorable. Located in the sacred city of Mahakaleshwar Jyotirlinga, we serve pilgrims, families, tourists, corporate travellers and groups travelling across Ujjain and beyond.
                </p>
                <p>
                  We understand that travel — whether for a sacred darshan or a family outstation trip — deserves reliability and comfort. Our commitment is to provide well-maintained vehicles, professional service and the local knowledge that only a truly Ujjain-based travel partner can offer.
                </p>
                <p>
                  From a single sedan for a couple to a tempo traveller for a large pilgrimage group, we have the right vehicle and the right team to make your journey effortless.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=600&h=700&fit=crop&auto=format"
                alt="Mahakaleshwar Temple"
                className="rounded-xl w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1584185438408-88532feff8d4?w=600&h=700&fit=crop&auto=format"
                alt="Ram Ghat Ujjain"
                className="rounded-xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 bg-[#6B1E2E]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="section-label mb-4" style={{ color: "#C9973A" }}>Our Mission</div>
          <blockquote className="font-display text-2xl md:text-3xl font-bold italic text-white leading-snug">
            "To make every journey from Ujjain comfortable, dependable and memorable."
          </blockquote>
          <div className="gold-divider mx-auto mt-6" />
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Our Values</div>
            <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-4">
              What We Stand <span className="text-[#6B1E2E]">For</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl bg-[#FAF6F0] border border-[#E0D4C0] card-hover text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-display text-lg font-semibold text-[#6B1E2E] mb-2">{v.title}</h3>
                <p className="text-xs text-[#7A6A5A] font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1784240256561-96f3264d221a?w=800&h=600&fit=crop&auto=format"
                alt="Scenic India road journey"
                className="rounded-2xl w-full h-80 object-cover"
              />
            </div>
            <div>
              <div className="section-label mb-3">Why Choose Us</div>
              <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-6">
                Why Travellers <span className="text-[#6B1E2E]">Choose Us</span>
              </h2>
              <div className="space-y-5">
                {[
                  "Deep local knowledge of Ujjain, Mahakaleshwar and surrounding pilgrimage destinations",
                  "Wide range of vehicles for individuals, families and large groups",
                  "Flexible booking — just call or WhatsApp to enquire",
                  "Comfortable, well-maintained fleet with AC",
                  "Experienced drivers familiar with pilgrimage routes",
                  "Available for local darshan, outstation, airport transfers and custom tours",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#C9973A] flex items-center justify-center text-white text-xs mt-0.5 flex-shrink-0">✓</span>
                    <p className="text-sm text-[#7A6A5A] font-body leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => nav("contact")} className="btn-primary mt-8">
                Plan Your Journey With Us →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

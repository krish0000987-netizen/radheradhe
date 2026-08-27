import { useState } from "react";

interface OutstationProps {
  onNavigate: (page: string) => void;
}

const tripTypes = [
  { icon: "→", title: "One-Way Travel", desc: "Convenient point-to-point transportation from Ujjain to your destination. Ideal when you only need a one-way drop." },
  { icon: "↔", title: "Round Trips", desc: "Travel to your destination and return at your convenience. Perfect for family day trips and sightseeing." },
  { icon: "🏙️", title: "Intercity Travel", desc: "Comfortable travel between Ujjain and other cities in Madhya Pradesh and neighbouring states." },
  { icon: "🕌", title: "Pilgrimage Travel", desc: "Multi-destination spiritual journeys — Ujjain to Omkareshwar, Kashi, Shirdi and more." },
  { icon: "💼", title: "Corporate Travel", desc: "Professional, on-time transportation for business meetings and corporate travel requirements." },
  { icon: "🗺️", title: "Custom Routes", desc: "Tell us your itinerary — we will arrange the right vehicle for your specific route." },
];

const popularDestinations = [
  { city: "Indore", dist: "~55 km", img: "https://images.unsplash.com/photo-1641803187805-3592b4cfeddb?w=400&h=300&fit=crop&auto=format", desc: "Commercial capital of MP — shopping, food and culture" },
  { city: "Omkareshwar", dist: "~130 km", img: "https://images.unsplash.com/photo-1658730557753-caf6bbc4a0bc?w=400&h=300&fit=crop&auto=format", desc: "Sacred Jyotirlinga island destination on Narmada River" },
  { city: "Bhopal", dist: "~185 km", img: "https://images.unsplash.com/photo-1705291490318-6cc8cb88a1f3?w=400&h=300&fit=crop&auto=format", desc: "Capital of Madhya Pradesh — lakes, history and heritage" },
  { city: "Dewas", dist: "~35 km", img: "https://images.unsplash.com/photo-1710987759289-ee6d002cb7d9?w=400&h=300&fit=crop&auto=format", desc: "Nearby city known for the Chamunda Mata temple" },
  { city: "Maheshwar", dist: "~90 km", img: "https://images.unsplash.com/photo-1667667186743-924d5172fa4a?w=400&h=300&fit=crop&auto=format", desc: "Historic fort town on the Narmada with stunning ghats" },
  { city: "Mandu", dist: "~100 km", img: "https://images.unsplash.com/photo-1784240256663-f53a45989d1c?w=400&h=300&fit=crop&auto=format", desc: "Ancient fortress city with magnificent Mughal-era monuments" },
];

export default function Outstation({ onNavigate }: OutstationProps) {
  const [form, setForm] = useState({ from: "Ujjain", to: "", date: "", passengers: "", vehicle: "", phone: "" });
  const nav = (page: string) => { onNavigate(page); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1784240256561-96f3264d221a?w=1920&h=800&fit=crop&auto=format"
          alt="Scenic Indian highway outstation travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1214]/65" />
        <div className="absolute inset-0 flex items-center justify-center text-center pt-16 px-4">
          <div>
            <div className="section-label mb-3">Intercity & Long Distance</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
              Comfortable Outstation<br />Travel From Ujjain
            </h1>
          </div>
        </div>
      </section>

      {/* TRIP TYPES */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">How We Travel</div>
            <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-4">
              Travel Options for <span className="text-[#6B1E2E]">Every Need</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tripTypes.map((t) => (
              <div key={t.title} className="bg-white rounded-xl p-7 card-hover border border-[#E0D4C0] flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#6B1E2E] text-white flex items-center justify-center text-lg font-bold flex-shrink-0">{t.icon}</div>
                <div>
                  <h3 className="font-display text-base font-semibold text-[#6B1E2E] mb-1.5">{t.title}</h3>
                  <p className="text-xs text-[#7A6A5A] font-body leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Where We Go</div>
            <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-2">
              Popular <span className="text-[#6B1E2E]">Destinations</span>
            </h2>
            <p className="text-xs text-[#B8A898] font-body">Distances are approximate from Ujjain. Contact us for any destination.</p>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((d) => (
              <div key={d.city} className="rounded-2xl overflow-hidden card-hover border border-[#E0D4C0] bg-white">
                <div className="img-hover-zoom h-40">
                  <img src={d.img} alt={d.city} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-lg font-bold text-[#1A1214]">{d.city}</h3>
                    <span className="text-xs font-body font-semibold text-[#C9973A] bg-[#FAF6F0] px-2.5 py-1 rounded-full">{d.dist}</span>
                  </div>
                  <p className="text-xs text-[#7A6A5A] font-body leading-relaxed mb-3">{d.desc}</p>
                  <button onClick={() => nav("contact")} className="text-xs font-body font-semibold text-[#6B1E2E] hover:underline">
                    Book Travel →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="py-20 bg-[#1A1214]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="section-label mb-3" style={{ color: "#C9973A" }}>Tell Us Your Destination</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Submit Your Travel Enquiry
            </h2>
            <p className="text-white/60 font-body text-sm">We will get back to you with the best vehicle option and fare estimate.</p>
          </div>
          <div className="bg-[#261820] rounded-2xl p-8 border border-[#3A2830]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: "From", key: "from", type: "text", placeholder: "Ujjain" },
                { label: "To (Destination)", key: "to", type: "text", placeholder: "Enter destination" },
                { label: "Travel Date", key: "date", type: "date", placeholder: "" },
                { label: "Phone Number", key: "phone", type: "tel", placeholder: "Your mobile number" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="text-xs text-[#B8A898] font-body font-semibold uppercase tracking-wider block mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full bg-[#1A1214] border border-[#3A2830] rounded-lg px-4 py-3 text-sm text-[#FAF6F0] font-body placeholder-[#7A6A5A] focus:outline-none focus:border-[#C9973A]"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs text-[#B8A898] font-body font-semibold uppercase tracking-wider block mb-1.5">Passengers</label>
                <select
                  value={form.passengers}
                  onChange={(e) => setForm({ ...form, passengers: e.target.value })}
                  className="w-full bg-[#1A1214] border border-[#3A2830] rounded-lg px-4 py-3 text-sm text-[#FAF6F0] font-body focus:outline-none focus:border-[#C9973A]"
                >
                  <option value="">Select</option>
                  <option>1–4</option>
                  <option>5–7</option>
                  <option>8–12</option>
                  <option>13+</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-[#B8A898] font-body font-semibold uppercase tracking-wider block mb-1.5">Vehicle Requirement</label>
                <select
                  value={form.vehicle}
                  onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                  className="w-full bg-[#1A1214] border border-[#3A2830] rounded-lg px-4 py-3 text-sm text-[#FAF6F0] font-body focus:outline-none focus:border-[#C9973A]"
                >
                  <option value="">Select vehicle</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Tempo Traveller</option>
                  <option>Group Vehicle</option>
                </select>
              </div>
            </div>
            <a
              href={`https://wa.me/919039223022?text=Hello%2C%20I%20need%20outstation%20travel%20from%20${form.from || "Ujjain"}%20to%20${form.to || "[destination]"}%20on%20${form.date || "[date]"}%20for%20${form.passengers || "[passengers]"}%20passengers.%20Vehicle%3A%20${form.vehicle || "[vehicle]"}.%20My%20number%3A%20${form.phone || "[number]"}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full justify-center mt-6"
            >
              Submit Enquiry via WhatsApp →
            </a>
            <p className="text-center text-xs text-[#7A6A5A] font-body mt-3">Or call directly: 9039223022 / 8349655520</p>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";

interface TravelGuideProps {
  onNavigate: (page: string) => void;
}

const faqs = [
  {
    q: "How can I book a vehicle?",
    a: "Simply call us at 9039223022 / 8349655520 or send a WhatsApp message. Share your pickup, destination, date and group size — we will arrange the right vehicle and share the fare.",
  },
  {
    q: "What types of vehicles are available?",
    a: "We have sedans (Maruti Dzire, Tata Indigo), SUVs (Toyota Innova Crysta, Chevrolet Tavera) and Force Tempo Travellers for groups of 12 to 20+ passengers.",
  },
  {
    q: "Can I book a vehicle for Ujjain Darshan?",
    a: "Yes — we specialize in Mahakaleshwar and Ujjain temple darshan travel. We can arrange pickups from your hotel, accommodation or any point in Ujjain and cover all major temple destinations.",
  },
  {
    q: "Do you provide outstation travel?",
    a: "Yes, we offer outstation travel from Ujjain to Indore, Omkareshwar, Bhopal, Maheshwar, Mandu and other destinations across Madhya Pradesh and beyond.",
  },
  {
    q: "Can families book vehicles?",
    a: "Absolutely. We have SUVs and spacious vehicles specifically suited to families — with ample luggage space and comfortable seating for all family members.",
  },
  {
    q: "Are group vehicles available?",
    a: "Yes — we have Force Tempo Travellers available for groups of 12, 17 and 20+ passengers, ideal for pilgrimage groups, corporate teams and large families.",
  },
  {
    q: "Can I request a customized trip?",
    a: "Yes. We can plan custom itineraries for multi-destination tours, pilgrimage journeys and special travel requirements. Contact us to discuss your needs.",
  },
  {
    q: "How do I get a quotation?",
    a: "Call or WhatsApp us with your travel details — from, to, date, number of passengers and vehicle preference. We will provide a clear fare estimate promptly.",
  },
  {
    q: "How can I contact Shree Radhe Radhe Travels?",
    a: "Phone: 9039223022 or 8349655520. WhatsApp is also available on 9039223022. We are based at Mahakaleshwar Jyotirlinga, Ujjain, Madhya Pradesh.",
  },
];

const guides = [
  {
    icon: "🕌",
    title: "Ujjain Attractions",
    tips: [
      "Mahakaleshwar Jyotirlinga — one of India's 12 sacred Jyotirlingas",
      "Mahakal Lok — the grand spiritual corridor",
      "Ram Ghat — the main ghat on the Shipra River",
      "Kal Bhairav Temple — the guardian deity of Ujjain",
      "Harsiddhi Mata Temple — a significant shakti peetha",
      "Sandipani Ashram — associated with Lord Krishna",
      "Vedh Shala — ancient astronomical observatory",
    ],
  },
  {
    icon: "🚗",
    title: "Vehicle Selection Tips",
    tips: [
      "1–4 passengers: A sedan is comfortable and cost-efficient",
      "5–7 passengers: An SUV provides ample space for the whole family",
      "8–12 passengers: A 12-seater Tempo Traveller is ideal",
      "13–20 passengers: A 17 or 20-seater Tempo is recommended",
      "Consider luggage space when selecting your vehicle",
      "For extended trips, Tempo Travellers with roof carriers are ideal",
    ],
  },
  {
    icon: "🧳",
    title: "Travel Planning Tips",
    tips: [
      "Book your vehicle 1–2 days in advance for best availability",
      "Share your full itinerary when enquiring for accurate pricing",
      "Inform us of any early morning Bhasma Aarti requirements",
      "For outstation multi-day trips, confirm pickup times clearly",
      "Keep the driver's contact number handy during travel",
      "Share your hotel/accommodation location for accurate pickup",
    ],
  },
  {
    icon: "🏛️",
    title: "Pilgrimage Travel",
    tips: [
      "Mahakaleshwar temple timings are subject to official schedule — verify before travel",
      "Bhasma Aarti happens in the early morning — plan your pickup accordingly",
      "Ram Ghat is ideal for an evening walk and Shipra River view",
      "Multiple temples can be covered in a single full-day darshan trip",
      "Comfortable closed-toe footwear recommended for temple visits",
    ],
  },
];

export default function TravelGuide({ onNavigate }: TravelGuideProps) {
  const [open, setOpen] = useState<number | null>(null);
  const nav = (page: string) => { onNavigate(page); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=1920&h=600&fit=crop&auto=format"
          alt="Plan your Ujjain journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1214]/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center pt-16 px-4">
          <div>
            <div className="section-label mb-3">Resources</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
              Plan Your Ujjain<br />Journey With Ease
            </h1>
          </div>
        </div>
      </section>

      {/* GUIDE */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Travel Guide</div>
            <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-4">
              Useful <span className="text-[#6B1E2E]">Travel Information</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((g) => (
              <div key={g.title} className="bg-white rounded-2xl p-7 border border-[#E0D4C0] card-hover">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{g.icon}</span>
                  <h3 className="font-display text-xl font-bold text-[#6B1E2E]">{g.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {g.tips.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-[#7A6A5A] font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9973A] flex-shrink-0 mt-1.5" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Answers</div>
            <h2 className="font-display text-3xl font-bold text-[#1A1214] mb-4">
              Frequently Asked <span className="text-[#6B1E2E]">Questions</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-[#E0D4C0] overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-[#FAF6F0] transition-colors"
                >
                  <span className="font-display font-semibold text-[#1A1214] text-sm pr-4">{faq.q}</span>
                  <span className={`text-[#C9973A] text-lg font-light flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 bg-[#FAF6F0] border-t border-[#E0D4C0]">
                    <p className="text-sm text-[#7A6A5A] font-body leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#6B1E2E] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Have a Question? Talk to Us.</h2>
          <p className="text-white/70 font-body text-sm mb-7">Our team is ready to answer any travel question and help plan your Ujjain journey.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => nav("contact")} className="btn-gold">Contact Us →</button>
            <a href="tel:9039223022" className="btn-outline">📞 9039223022</a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import travellerSide from "@/assets/radhe/traveller-side.jpeg";
import travellerRear from "@/assets/radhe/traveller-rear.jpeg";
import travellerFront from "@/assets/radhe/traveller-front-adhiraj.jpeg";
import travellerSolanki1 from "@/assets/radhe/traveller-solanki-1.jpeg";
import solanki2 from "@/assets/radhe/solanki-2.jpeg";
import innovaCrysta from "@/assets/radhe/innova-crysta.jpeg";
import dzireFront from "@/assets/radhe/dzire-front.jpeg";
import indigo1 from "@/assets/radhe/indigo-1.jpeg";
import indigo2 from "@/assets/radhe/indigo-2.jpeg";
import taveraBittu from "@/assets/radhe/tavera-bittu.jpeg";
import logo from "@/assets/radhe/logo.jpeg";

const heroSlides = [
  {
    url: travellerSide,
    alt: "Force Traveller – Shri Radhe Radhe fleet on Ujjain roads",
    caption: "Premium Traveller Fleet",
  },
  {
    url: travellerFront,
    alt: "Force Traveller Adhiraj – Pilgrimage ready vehicle",
    caption: "Group Pilgrimage Ready",
  },
  {
    url: innovaCrysta,
    alt: "Toyota Innova Crysta - MP09BD6826 - Shri Radhe Radhe Travels",
    caption: "Innova Crysta Comfort",
  },
  {
    url: dzireFront,
    alt: "Maruti Dzire MP09WG4852 - Sedan for family travel",
    caption: "Swift Dzire Sedan",
  },
  {
    url: indigo1,
    alt: "Tata Indigo eCS - Shri Radhe Radhe branding - Ujjain streets",
    caption: "Reliable Sedan Service",
  },
  {
    url: travellerSolanki1,
    alt: "Force Traveller Tourist - Solanki fleet",
    caption: "Madhya Pradesh Tours",
  },
];

const vehicles = [
  {
    category: "Sedan – Dzire / Indigo",
    image: dzireFront,
    passengers: "4",
    luggage: "2 Bags",
    ac: true,
    ideal: "Couples & Small Families",
  },
  {
    category: "SUV / Innova Crysta",
    image: innovaCrysta,
    passengers: "6–7",
    luggage: "4 Bags",
    ac: true,
    ideal: "Families & Groups",
  },
  {
    category: "Tempo Traveller 12-17",
    image: travellerRear,
    passengers: "12–17",
    luggage: "Large Group",
    ac: true,
    ideal: "Pilgrimage Groups",
  },
  {
    category: "Traveller – Group",
    image: travellerSide,
    passengers: "20+",
    luggage: "Event Travel",
    ac: true,
    ideal: "Corporate & Events",
  },
];

const realFleet = [
  { img: indigo1, title: "Tata Indigo eCS", plate: "MP 13 TA 3159", tag: "Sedan" },
  { img: indigo2, title: "Tata Indigo eCS", plate: "MP 09 CQ 5415", tag: "Sedan" },
  { img: dzireFront, title: "Maruti Suzuki Dzire", plate: "MP 09 WG 4852", tag: "Sedan" },
  { img: innovaCrysta, title: "Toyota Innova Crysta", plate: "MP 09 BD 6826", tag: "SUV" },
  { img: taveraBittu, title: "Chevrolet Tavera", plate: "MP 13 BA 3016", tag: "SUV • Bittu" },
  { img: travellerFront, title: "Force Traveller", plate: "DD 01 U 9893 • Adhiraj", tag: "Traveller" },
  { img: travellerRear, title: "Force Traveller Super", plate: "DD 01 U 9893", tag: "Traveller" },
  { img: travellerSide, title: "Force Traveller – Side View", plate: "DD 01 U 9893", tag: "Traveller" },
  { img: travellerSolanki1, title: "Force Tourist – Solanki", plate: "MP 13 ZD 5254", tag: "Traveller" },
  { img: solanki2, title: "Force Traveller – Solanki", plate: "MP 09 FA 8612", tag: "Traveller" },
];

const destinations = [
  { name: "Mahakaleshwar Temple", img: "https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=400&h=300&fit=crop&auto=format" },
  { name: "Mahakal Lok", img: "https://images.unsplash.com/photo-1658730510499-8c8e84f4db38?w=400&h=300&fit=crop&auto=format" },
  { name: "Ram Ghat", img: "https://images.unsplash.com/photo-1584185438408-88532feff8d4?w=400&h=300&fit=crop&auto=format" },
  { name: "Shipra River", img: "https://images.unsplash.com/photo-1694667509674-676629c9d069?w=400&h=300&fit=crop&auto=format" },
  { name: "Kal Bhairav Temple", img: "https://images.unsplash.com/photo-1658730600296-a0276b5749ca?w=400&h=300&fit=crop&auto=format" },
  { name: "Harsiddhi Temple", img: "https://images.unsplash.com/photo-1658730458768-8b8cc0c00955?w=400&h=300&fit=crop&auto=format" },
  { name: "Sandipani Ashram", img: "https://images.unsplash.com/photo-1658730557753-caf6bbc4a0bc?w=400&h=300&fit=crop&auto=format" },
];

const services = [
  { icon: "🕌", title: "Ujjain Darshan", desc: "Comfortable vehicles for Mahakaleshwar and all major Ujjain temples" },
  { icon: "🚗", title: "Outstation Travel", desc: "Reliable point-to-point travel across Madhya Pradesh and nearby states" },
  { icon: "✈️", title: "Airport Transfers", desc: "Timely pickup and drop to airports from Ujjain" },
  { icon: "🚉", title: "Railway Transfers", desc: "Convenient station pickups and drops" },
  { icon: "👨‍👩‍👧‍👦", title: "Family Travel", desc: "Spacious, comfortable vehicles designed for family journeys" },
  { icon: "🎯", title: "Custom Tours", desc: "Tailor-made travel itineraries for your unique requirements" },
];

const steps = [
  { num: "01", title: "Choose Vehicle", desc: "Select the right vehicle for your group size and travel need" },
  { num: "02", title: "Share Details", desc: "Tell us your pickup, destination, date and passengers" },
  { num: "03", title: "Get Your Quote", desc: "Receive a clear, transparent quote for your journey" },
  { num: "04", title: "Confirm Booking", desc: "Confirm and relax — we handle the rest" },
  { num: "05", title: "Enjoy Journey", desc: "Travel comfortably with our professional service" },
];

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [slide, setSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSlide((s) => (s + 1) % heroSlides.length);
        setFade(true);
      }, 400);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goSlide = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setFade(false);
    setTimeout(() => { setSlide(i); setFade(true); startTimer(); }, 400);
  };

  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity duration-500 bg-[#1A1214]"
          style={{ opacity: fade ? 1 : 0 }}
        >
          <img
            src={heroSlides[slide].url}
            alt={heroSlides[slide].alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goSlide(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === slide ? "w-8 bg-[#C9973A]" : "w-3 bg-white/50"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Caption */}
        <div className="absolute top-1/3 right-8 z-10 hidden lg:block">
          <div className="text-xs text-[#C9973A] font-body font-semibold tracking-widest uppercase rotate-90 origin-right translate-x-full">
            {heroSlides[slide].caption}
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 w-full pt-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4 animate-fade-slide">
                <img src={logo} alt="Logo" className="w-12 h-12 rounded-full bg-white p-1 shadow-lg border border-[#C9973A]/50" />
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1">
                  <span className="text-white text-xs font-body font-semibold tracking-wider">SHRI RADHE RADHE • 9039223022</span>
                </div>
              </div>
              <div className="section-label mb-4 animate-fade-slide">Ujjain · Mahakaleshwar · Madhya Pradesh</div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-slide" style={{ animationDelay: "0.1s" }}>
                Your Trusted Travel<br />Partner in <span className="text-[#C9973A]">Ujjain</span>
              </h1>
              <p className="text-white/80 font-body text-lg leading-relaxed mb-8 max-w-xl animate-fade-slide" style={{ animationDelay: "0.2s" }}>
                Premium Cars, Comfortable Journeys & Reliable Travel Services Around Mahakaleshwar and Beyond.
              </p>
              <div className="flex flex-wrap gap-3 animate-fade-slide" style={{ animationDelay: "0.3s" }}>
                <button onClick={() => nav("contact")} className="btn-primary text-sm">
                  Book Your Vehicle →
                </button>
                <a href="tel:9039223022" className="btn-outline text-sm">
                  📞 Call Now
                </a>
              </div>

              {/* Trust strip */}
              <div className="mt-10 flex flex-wrap gap-5 animate-fade-slide" style={{ animationDelay: "0.4s" }}>
                {["All Vehicle Categories", "Professional Service", "Comfortable Travel", "Ujjain-Based"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-white/80 text-sm font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9973A]" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK BOOKING PANEL */}
      <section className="bg-white shadow-lg relative z-20 -mt-0.5">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 items-end">
            <div className="col-span-2 md:col-span-1">
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Pickup</label>
              <input type="text" placeholder="Ujjain" className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Destination</label>
              <input type="text" placeholder="Where to?" className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]" />
            </div>
            <div>
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Date</label>
              <input type="date" className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]" />
            </div>
            <div>
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Vehicle</label>
              <select className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]">
                <option>Sedan</option>
                <option>SUV</option>
                <option>Tempo Traveller</option>
                <option>Group Vehicle</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Passengers</label>
              <select className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]">
                <option>1–4</option>
                <option>5–7</option>
                <option>8–12</option>
                <option>13+</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1">Trip Type</label>
              <select className="w-full border border-[#E0D4C0] rounded px-3 py-2.5 text-sm font-body focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]">
                <option>One Way</option>
                <option>Round Trip</option>
                <option>Local</option>
              </select>
            </div>
            <button
              onClick={() => nav("contact")}
              className="btn-primary justify-center w-full"
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Why Choose Us</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1214] mb-4">
              Travel With <span className="text-[#6B1E2E]">Confidence</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🚗", title: "Wide Vehicle Range", desc: "From compact sedans to spacious tempo travellers — we have the right vehicle for your group size and travel need." },
              { icon: "🛡️", title: "Reliable Service", desc: "Dependable, on-time service so your plans are never disrupted. Your comfort is our priority." },
              { icon: "🤝", title: "Professional Drivers", desc: "Experienced, courteous drivers familiar with Ujjain routes and pilgrimage destinations." },
              { icon: "📍", title: "Local Expertise", desc: "Deep knowledge of Ujjain, Mahakaleshwar and Madhya Pradesh — your best local travel partner." },
              { icon: "📋", title: "Flexible Options", desc: "One-way, round trip, local darshan, outstation — customize your travel exactly as you need." },
              { icon: "💬", title: "Easy Booking", desc: "Simple enquiry via call or WhatsApp. No complicated booking systems. Just reach out and we will arrange." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-7 card-hover border border-[#E0D4C0]">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display text-lg font-semibold text-[#6B1E2E] mb-2">{f.title}</h3>
                <p className="text-sm text-[#7A6A5A] font-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FLEET */}
      <section className="py-20 bg-[#1A1214]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3" style={{ color: "#C9973A" }}>Our Fleet</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Choose the Right <span className="text-[#C9973A]">Vehicle</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vehicles.map((v) => (
              <div key={v.category} className="bg-[#261820] rounded-xl overflow-hidden card-hover border border-[#3A2830]">
                <div className="img-hover-zoom h-44">
                  <img src={v.image} alt={v.category} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white mb-3">{v.category}</h3>
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-xs font-body text-[#B8A898]">
                      <span>Passengers</span><span className="font-semibold text-white">{v.passengers}</span>
                    </div>
                    <div className="flex justify-between text-xs font-body text-[#B8A898]">
                      <span>Luggage</span><span className="font-semibold text-white">{v.luggage}</span>
                    </div>
                    <div className="flex justify-between text-xs font-body text-[#B8A898]">
                      <span>AC</span><span className="font-semibold text-[#C9973A]">{v.ac ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex justify-between text-xs font-body text-[#B8A898]">
                      <span>Ideal for</span><span className="font-semibold text-white text-right">{v.ideal}</span>
                    </div>
                  </div>
                  <button onClick={() => nav("contact")} className="w-full text-center text-xs font-body font-semibold text-[#C9973A] border border-[#C9973A] rounded py-2 hover:bg-[#C9973A] hover:text-[#1A1214] transition-colors">
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => nav("vehicles")} className="btn-gold">
              View Full Fleet →
            </button>
          </div>
        </div>
      </section>

      {/* REAL FLEET GALLERY - Images from /radhe folder */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="section-label mb-3">Our Actual Fleet</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1214] mb-3">
              Shri Radhe Radhe <span className="text-[#6B1E2E]">Real Vehicles</span>
            </h2>
            <p className="text-sm text-[#7A6A5A] font-body max-w-2xl mx-auto">
              No stock photos — every image below is from our own fleet operating from Ujjain & Indore region. All vehicles carry “Radhe Radhe” branding.
            </p>
            <div className="gold-divider mx-auto mt-4" />
          </div>

          {/* Logo showcase */}
          <div className="flex justify-center mb-10">
            <div className="bg-[#1A1214] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg border border-[#3A2830]">
              <img src={logo} alt="Shri Radhe Radhe Tour & Travels Logo" className="w-40 h-40 object-contain bg-white rounded-xl p-2" />
              <div className="text-center md:text-left">
                <h3 className="font-display text-xl font-bold text-white">SHRI RADHE RADHE TOUR & TRAVELS</h3>
                <p className="text-[#C9973A] font-body text-lg tracking-[0.3em] font-semibold mt-1">9039223022</p>
                <p className="text-white/60 text-xs font-body mt-2">Ujjain • Mahakaleshwar • Trusted Local Fleet</p>
                <div className="mt-4 flex gap-2 justify-center md:justify-start">
                  <a href="tel:9039223022" className="btn-gold text-xs py-2 px-4">Call Now</a>
                  <a href="https://wa.me/919039223022" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-4 !border-[#C9973A] !text-[#C9973A]">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {realFleet.map((v) => (
              <div key={v.plate} className="bg-white rounded-xl overflow-hidden border border-[#E0D4C0] card-hover group">
                <div className="h-40 overflow-hidden bg-[#1A1214]">
                  <img src={v.img} alt={`${v.title} ${v.plate}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-3">
                  <div className="text-[10px] tracking-widest font-body font-bold text-[#C9973A] uppercase">{v.tag}</div>
                  <div className="text-sm font-display font-semibold text-[#1A1214] leading-tight">{v.title}</div>
                  <div className="text-xs font-body text-[#7A6A5A] font-mono mt-0.5">{v.plate}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => nav("gallery")} className="btn-primary">View Full Gallery →</button>
          </div>
        </div>
      </section>

      {/* EXPLORE UJJAIN */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Sacred Destinations</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1214] mb-4">
              Explore <span className="text-[#6B1E2E]">Ujjain</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {destinations.map((d) => (
              <div key={d.name} className="img-hover-zoom rounded-xl overflow-hidden relative group cursor-pointer" onClick={() => nav("ujjain")}>
                <img src={d.img} alt={d.name} className="w-full h-48 object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1214]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-display text-sm font-semibold text-white">{d.name}</p>
                </div>
              </div>
            ))}
            <div
              className="rounded-xl overflow-hidden relative cursor-pointer bg-[#6B1E2E] flex flex-col items-center justify-center h-48 card-hover"
              onClick={() => nav("ujjain")}
            >
              <span className="text-4xl mb-2">🕌</span>
              <p className="font-display text-sm font-semibold text-white text-center px-3">More Destinations →</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">What We Offer</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1214] mb-4">
              Popular <span className="text-[#6B1E2E]">Services</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-xl border border-[#E0D4C0] card-hover bg-[#FAF6F0] flex gap-4">
                <span className="text-3xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="font-display text-base font-semibold text-[#6B1E2E] mb-1">{s.title}</h3>
                  <p className="text-xs text-[#7A6A5A] font-body leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => nav("services")} className="btn-primary">
              All Services →
            </button>
          </div>
        </div>
      </section>

      {/* HOW BOOKING WORKS */}
      <section className="py-20 bg-[#6B1E2E]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3" style={{ color: "#C9973A" }}>Easy Process</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              How Booking Works
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-[#C9973A] flex items-center justify-center mx-auto mb-4 font-display font-bold text-[#C9973A] text-lg">
                  {s.num}
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-white/70 font-body leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-label mb-3">What Travellers Say</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1214] mb-4">
              Customer <span className="text-[#6B1E2E]">Testimonials</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Comfortable and timely service for our Ujjain darshan trip. The driver was very courteous and knowledgeable about all the temple locations.",
                name: "[Customer Name]",
                from: "Indore",
              },
              {
                text: "Excellent tempo traveller for our family group of 14. Clean vehicle, AC working well throughout our Mahakaleshwar pilgrimage.",
                name: "[Customer Name]",
                from: "Bhopal",
              },
              {
                text: "Booked for an outstation trip to Omkareshwar. Very professional service and flexible timing. Will definitely use again.",
                name: "[Customer Name]",
                from: "Dewas",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-7 border border-[#E0D4C0] card-hover">
                <div className="text-[#C9973A] text-2xl mb-3">"</div>
                <p className="text-sm text-[#7A6A5A] font-body leading-relaxed italic mb-5">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EDE3D6] flex items-center justify-center text-lg">👤</div>
                  <div>
                    <div className="text-sm font-display font-semibold text-[#1A1214]">{t.name}</div>
                    <div className="text-xs text-[#7A6A5A] font-body">From {t.from} — Placeholder review</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#B8A898] font-body mt-6">* Placeholder testimonials — to be replaced with real customer reviews.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#1A1214] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=1920&h=600&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="section-label mb-4" style={{ color: "#C9973A" }}>Ready to Travel?</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Planning Your Ujjain Journey?
          </h2>
          <p className="text-white/70 font-body mb-8">
            Contact us today for a comfortable, reliable and memorable travel experience from Ujjain.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => nav("contact")} className="btn-gold">
              Book Your Vehicle →
            </button>
            <a href="tel:9039223022" className="btn-outline">
              📞 Call 9039223022
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

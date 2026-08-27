import { useState } from "react";
import innovaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM.jpeg";
import tavernaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.16_PM__1_.jpeg";
import traveller7Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM__1_.jpeg";
import dzireImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM.jpeg";
import travellerFront1Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.13_PM.jpeg";
import travellerFront2Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.14_PM.jpeg";
import indigoImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM__1_.jpeg";

interface VehiclesProps {
  onNavigate: (page: string) => void;
}

const filters = ["All", "Small Family", "Family", "Group", "Pilgrimage", "Outstation"];

const fleet = [
  {
    category: "Sedan",
    name: "Maruti Suzuki Dzire",
    image: dzireImg,
    passengers: "4",
    luggage: "2 Medium Bags",
    ac: true,
    ideal: "Couples, Small Families, City Travel",
    tags: ["Small Family", "Outstation"],
    desc: "Compact, fuel-efficient and comfortable sedan ideal for couples and small families. Perfect for local Ujjain darshan and short outstation trips.",
  },
  {
    category: "Sedan",
    name: "Tata Indigo eCS",
    image: indigoImg,
    passengers: "4",
    luggage: "2 Medium Bags",
    ac: true,
    ideal: "Small Families, Point-to-Point Travel",
    tags: ["Small Family", "Outstation"],
    desc: "Reliable and comfortable sedan for smooth city and outstation journeys. Ideal for small group travel.",
  },
  {
    category: "SUV",
    name: "Toyota Innova Crysta",
    image: innovaImg,
    passengers: "6–7",
    luggage: "4 Bags",
    ac: true,
    ideal: "Families, Premium Travel",
    tags: ["Family", "Outstation", "Pilgrimage"],
    desc: "Premium SUV offering spacious interiors and superior comfort. The go-to choice for families seeking a premium travel experience across Ujjain and outstation destinations.",
  },
  {
    category: "SUV",
    name: "Chevrolet Tavera",
    image: tavernaImg,
    passengers: "7–8",
    luggage: "3–4 Bags",
    ac: true,
    ideal: "Families & Groups",
    tags: ["Family", "Pilgrimage"],
    desc: "Spacious and sturdy SUV with ample room for families and luggage. Well-suited for pilgrimage group travel and family outstation trips.",
  },
  {
    category: "Tempo Traveller",
    name: "Force Traveller (12 Seater)",
    image: travellerFront1Img,
    passengers: "12",
    luggage: "Large Luggage Compartment",
    ac: true,
    ideal: "Large Families, Pilgrimage Groups",
    tags: ["Group", "Pilgrimage"],
    desc: "Well-maintained Force Traveller ideal for larger pilgrimage groups visiting Mahakaleshwar and other Ujjain temples.",
  },
  {
    category: "Tempo Traveller",
    name: "Force Traveller (17 Seater)",
    image: travellerFront2Img,
    passengers: "17",
    luggage: "Large Luggage Compartment",
    ac: true,
    ideal: "Group Travel, Corporate",
    tags: ["Group", "Pilgrimage", "Outstation"],
    desc: "Spacious 17-seater tempo traveller for corporate outings, family pilgrimages and group travel across Madhya Pradesh.",
  },
  {
    category: "Tempo Traveller",
    name: "Force Traveller Super",
    image: traveller7Img,
    passengers: "20+",
    luggage: "Roof Carrier + Rear",
    ac: true,
    ideal: "Large Groups, Events",
    tags: ["Group", "Pilgrimage"],
    desc: "Our largest tempo traveller, equipped with roof carrier for extended group journeys and multi-day pilgrimage tours.",
  },
];

export default function Vehicles({ onNavigate }: VehiclesProps) {
  const [active, setActive] = useState("All");
  const nav = (page: string) => { onNavigate(page); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const filtered = active === "All" ? fleet : fleet.filter((v) => v.tags.includes(active));

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1784240256561-96f3264d221a?w=1920&h=800&fit=crop&auto=format"
          alt="Vehicle fleet road journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1214]/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center pt-16">
          <div>
            <div className="section-label mb-3">Our Fleet</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
              Choose the Right Vehicle<br />for Your Journey
            </h1>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="bg-white border-b border-[#E0D4C0] sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all ${
                active === f
                  ? "bg-[#6B1E2E] text-white"
                  : "bg-[#FAF6F0] text-[#7A6A5A] hover:bg-[#EDE3D6] border border-[#E0D4C0]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* FLEET GRID */}
      <section className="py-16 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((v) => (
              <div key={v.name} className="bg-white rounded-2xl overflow-hidden card-hover border border-[#E0D4C0]">
                <div className="img-hover-zoom h-56">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[#C9973A] font-body font-semibold uppercase tracking-wider">{v.category}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1A1214] mb-3">{v.name}</h3>
                  <p className="text-sm text-[#7A6A5A] font-body leading-relaxed mb-4">{v.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      { label: "Passengers", value: v.passengers },
                      { label: "Luggage", value: v.luggage },
                      { label: "AC", value: v.ac ? "Yes" : "No" },
                      { label: "Ideal For", value: v.ideal },
                    ].map((d) => (
                      <div key={d.label} className="bg-[#FAF6F0] rounded-lg p-2.5">
                        <div className="text-[10px] text-[#B8A898] font-body font-semibold uppercase tracking-wider">{d.label}</div>
                        <div className="text-xs font-body font-semibold text-[#1A1214] mt-0.5">{d.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => nav("contact")} className="flex-1 btn-primary justify-center text-sm py-2.5">
                      Enquire Now
                    </button>
                    <a href="tel:9039223022" className="flex-1 flex items-center justify-center gap-1.5 text-sm font-body font-semibold text-[#6B1E2E] border border-[#6B1E2E] rounded-md py-2.5 hover:bg-[#6B1E2E] hover:text-white transition-colors">
                      📞 Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#6B1E2E] text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Vehicle Not Listed?
          </h2>
          <p className="text-white/70 font-body text-sm mb-6">
            Contact us directly — we can arrange vehicles for all group sizes and requirements.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => nav("contact")} className="btn-gold">Get a Custom Quote →</button>
            <a href="tel:9039223022" className="btn-outline">📞 9039223022</a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import innovaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM.jpeg";
import tavernaImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.16_PM__1_.jpeg";
import traveller7Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM__1_.jpeg";
import dzireImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.17_PM.jpeg";
import travellerFront1Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.13_PM.jpeg";
import travellerFront2Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.14_PM.jpeg";
import travellerFront3Img from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.14_PM__1_.jpeg";
import indigoImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.15_PM__1_.jpeg";
import travellerSideImg from "@/imports/WhatsApp_Image_2026-08-27_at_2.20.16_PM.jpeg";

const categories = ["All", "Our Vehicles", "Ujjain", "Destinations"];

const photos = [
  // Real vehicles
  { src: innovaImg, alt: "Toyota Innova Crysta — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: travellerFront1Img, alt: "Force Traveller Tempo — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: traveller7Img, alt: "Force Traveller 7 Seater — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: dzireImg, alt: "Maruti Suzuki Dzire — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: travellerFront2Img, alt: "Force Traveller Front — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: travellerFront3Img, alt: "Force Traveller Fleet — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: tavernaImg, alt: "Chevrolet Tavera — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: indigoImg, alt: "Tata Indigo — Shree Radhe Radhe Travels", cat: "Our Vehicles" },
  { src: travellerSideImg, alt: "Force Traveller Side View", cat: "Our Vehicles" },
  // Ujjain
  { src: "https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=600&h=450&fit=crop&auto=format", alt: "Mahakaleshwar Jyotirlinga Temple Ujjain", cat: "Ujjain" },
  { src: "https://images.unsplash.com/photo-1658730510499-8c8e84f4db38?w=600&h=450&fit=crop&auto=format", alt: "Mahakal Lok Ujjain", cat: "Ujjain" },
  { src: "https://images.unsplash.com/photo-1584185438408-88532feff8d4?w=600&h=450&fit=crop&auto=format", alt: "Ram Ghat Shipra River Ujjain", cat: "Ujjain" },
  { src: "https://images.unsplash.com/photo-1694667509674-676629c9d069?w=600&h=450&fit=crop&auto=format", alt: "Ujjain City View", cat: "Ujjain" },
  { src: "https://images.unsplash.com/photo-1658730600296-a0276b5749ca?w=600&h=450&fit=crop&auto=format", alt: "Ujjain Temple", cat: "Ujjain" },
  { src: "https://images.unsplash.com/photo-1658730458768-8b8cc0c00955?w=600&h=450&fit=crop&auto=format", alt: "Ujjain Harsiddhi Temple", cat: "Ujjain" },
  { src: "https://images.unsplash.com/photo-1667667186743-924d5172fa4a?w=600&h=450&fit=crop&auto=format", alt: "Shipra River Bridge Ujjain", cat: "Ujjain" },
  // Destinations
  { src: "https://images.unsplash.com/photo-1784240256561-96f3264d221a?w=600&h=450&fit=crop&auto=format", alt: "Scenic Indian road journey", cat: "Destinations" },
  { src: "https://images.unsplash.com/photo-1785651975036-a282bbf0275d?w=600&h=450&fit=crop&auto=format", alt: "Indian highway bridge", cat: "Destinations" },
  { src: "https://images.unsplash.com/photo-1705291490318-6cc8cb88a1f3?w=600&h=450&fit=crop&auto=format", alt: "Madhya Pradesh landscape", cat: "Destinations" },
  { src: "https://images.unsplash.com/photo-1641803187805-3592b4cfeddb?w=600&h=450&fit=crop&auto=format", alt: "MP City Aerial View", cat: "Destinations" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(null);

  const filtered = active === "All" ? photos : photos.filter((p) => p.cat === active);

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=1920&h=600&fit=crop&auto=format"
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1214]/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center pt-16">
          <div>
            <div className="section-label mb-3">Visual Journey</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
              Gallery
            </h1>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="bg-white border-b border-[#E0D4C0] sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all ${
                active === c
                  ? "bg-[#6B1E2E] text-white"
                  : "bg-[#FAF6F0] text-[#7A6A5A] hover:bg-[#EDE3D6] border border-[#E0D4C0]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="py-12 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="break-inside-avoid img-hover-zoom rounded-xl overflow-hidden cursor-pointer border border-[#E0D4C0]"
                onClick={() => setLightbox(p)}
              >
                <img
                  src={p.src as unknown as string}
                  alt={p.alt}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl font-light hover:text-[#C9973A] transition-colors"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img
            src={lightbox.src as unknown as string}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-body text-center px-4">
            {lightbox.alt}
          </p>
        </div>
      )}
    </div>
  );
}

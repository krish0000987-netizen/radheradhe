import { useState, useEffect } from "react";
import logo from "@/assets/radhe/logo.jpeg";

const navLinks = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Vehicles", page: "vehicles" },
  { label: "Ujjain Darshan", page: "ujjain" },
  { label: "Outstation", page: "outstation" },
  { label: "Packages", page: "packages" },
  { label: "Services", page: "services" },
  { label: "Gallery", page: "gallery" },
  { label: "Contact", page: "contact" },
];

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const nav = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => nav("home")}
            className="flex items-center gap-2.5 group"
          >
            <img
              src={logo}
              alt="Shri Radhe Radhe Tour & Travels - 9039223022"
              className="w-10 h-10 rounded-full object-cover bg-white p-0.5 shadow-md flex-shrink-0 border border-[#C9973A]/30"
            />
            <div className="text-left">
              <div
                className={`font-display font-bold text-sm leading-tight transition-colors ${
                  scrolled ? "text-[#6B1E2E]" : "text-white"
                }`}
              >
                Shree Radhe Radhe
              </div>
              <div
                className={`text-[10px] font-body font-medium tracking-wider uppercase transition-colors ${
                  scrolled ? "text-[#C9973A]" : "text-[#C9973A]"
                }`}
              >
                Travels
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => nav(link.page)}
                className={`px-3 py-1.5 rounded text-sm font-body font-medium transition-all ${
                  currentPage === link.page
                    ? "text-[#C9973A]"
                    : scrolled
                    ? "text-[#1A1214] hover:text-[#6B1E2E]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9039223022"
              className={`text-sm font-body font-semibold transition-colors ${
                scrolled ? "text-[#6B1E2E]" : "text-white"
              }`}
            >
              📞 9039223022
            </a>
            <button
              onClick={() => nav("contact")}
              className="btn-primary text-sm py-2 px-4"
            >
              Book Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded transition-colors ${
              scrolled ? "text-[#6B1E2E]" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E0D4C0] shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => nav(link.page)}
                  className={`text-left px-3 py-2.5 rounded text-sm font-body font-medium transition-colors ${
                    currentPage === link.page
                      ? "bg-[#FAF6F0] text-[#6B1E2E] font-semibold"
                      : "text-[#1A1214] hover:bg-[#FAF6F0] hover:text-[#6B1E2E]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="px-4 pb-4 flex gap-2">
              <a
                href="tel:9039223022"
                className="flex-1 btn-primary text-center justify-center text-sm py-2.5"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919039223022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-gold text-center justify-center text-sm py-2.5"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

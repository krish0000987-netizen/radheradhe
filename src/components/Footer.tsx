import logo from "@/assets/radhe/logo.jpeg";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1214] text-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 - Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Shri Radhe Radhe Logo" className="w-10 h-10 rounded-full object-cover bg-white p-0.5 border border-[#C9973A]/30" />
              <div>
                <div className="font-display font-bold text-[#FAF6F0] leading-tight">Shree Radhe Radhe</div>
                <div className="text-[10px] text-[#C9973A] font-body font-medium tracking-widest uppercase">Travels • 9039223022</div>
              </div>
            </div>
            <p className="text-sm text-[#B8A898] font-body leading-relaxed mb-5">
              Your trusted travel partner for Ujjain darshan, outstation journeys, and comfortable group travel across Madhya Pradesh and beyond.
            </p>
            <p className="text-xs text-[#C9973A] font-body italic">"Your Journey. Our Responsibility."</p>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="text-sm font-body font-semibold tracking-widest uppercase text-[#C9973A] mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", page: "home" },
                { label: "About Us", page: "about" },
                { label: "Vehicles", page: "vehicles" },
                { label: "Services", page: "services" },
                { label: "Tour Packages", page: "packages" },
                { label: "Gallery", page: "gallery" },
                { label: "Contact", page: "contact" },
              ].map((l) => (
                <li key={l.page}>
                  <button
                    onClick={() => nav(l.page)}
                    className="text-sm text-[#B8A898] hover:text-[#FAF6F0] transition-colors font-body"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Travel */}
          <div>
            <h4 className="text-sm font-body font-semibold tracking-widest uppercase text-[#C9973A] mb-4">Travel</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Ujjain Darshan", page: "ujjain" },
                { label: "Outstation Travel", page: "outstation" },
                { label: "Family Travel", page: "services" },
                { label: "Group Travel", page: "services" },
                { label: "Pilgrimage Travel", page: "ujjain" },
                { label: "Travel Guide & FAQ", page: "guide" },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => nav(l.page)}
                    className="text-sm text-[#B8A898] hover:text-[#FAF6F0] transition-colors font-body"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="text-sm font-body font-semibold tracking-widest uppercase text-[#C9973A] mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:9039223022"
                className="flex items-center gap-2.5 text-sm text-[#B8A898] hover:text-[#FAF6F0] transition-colors font-body"
              >
                <span className="w-7 h-7 rounded-full bg-[#6B1E2E] flex items-center justify-center text-xs flex-shrink-0">📞</span>
                9039223022
              </a>
              <a
                href="tel:8349655520"
                className="flex items-center gap-2.5 text-sm text-[#B8A898] hover:text-[#FAF6F0] transition-colors font-body"
              >
                <span className="w-7 h-7 rounded-full bg-[#6B1E2E] flex items-center justify-center text-xs flex-shrink-0">📞</span>
                8349655520
              </a>
              <a
                href="https://wa.me/919039223022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#B8A898] hover:text-[#FAF6F0] transition-colors font-body"
              >
                <span className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-xs flex-shrink-0">💬</span>
                WhatsApp Us
              </a>
              <div className="flex items-start gap-2.5 text-sm text-[#B8A898] font-body">
                <span className="w-7 h-7 rounded-full bg-[#6B1E2E] flex items-center justify-center text-xs flex-shrink-0 mt-0.5">📍</span>
                <span>Mahakaleshwar Jyotirlinga,<br />Ujjain, Madhya Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2E1E28] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#7A6A5A] font-body text-center">
            © {new Date().getFullYear()} Shree Radhe Radhe Travels. All Rights Reserved.
          </p>
          <p className="text-xs text-[#7A6A5A] font-body">
            Mahakaleshwar Jyotirlinga · Ujjain · Madhya Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}

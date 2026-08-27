import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", mobile: "", pickup: "", destination: "",
    date: "", returnDate: "", passengers: "", vehicle: "", tripType: "", notes: ""
  });

  const whatsappMsg = () => {
    const msg = `Hello Shree Radhe Radhe Travels!
Name: ${form.name}
Mobile: ${form.mobile}
Pickup: ${form.pickup}
Destination: ${form.destination}
Travel Date: ${form.date}
Return Date: ${form.returnDate}
Passengers: ${form.passengers}
Vehicle: ${form.vehicle}
Trip Type: ${form.tripType}
Notes: ${form.notes}`;
    return `https://wa.me/919039223022?text=${encodeURIComponent(msg)}`;
  };

  const update = (k: string, v: string) => setForm({ ...form, [k]: v });

  return (
    <div className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658730487395-dcc99f5d997c?w=1920&h=600&fit=crop&auto=format"
          alt="Contact Shree Radhe Radhe Travels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1214]/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center pt-16 px-4">
          <div>
            <div className="section-label mb-3">Get In Touch</div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
              Let's Plan<br />Your Journey
            </h1>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="section-label mb-3">Reach Us</div>
              <h2 className="font-display text-2xl font-bold text-[#1A1214] mb-6">
                Shree Radhe Radhe <span className="text-[#6B1E2E]">Travels</span>
              </h2>

              <div className="space-y-5 mb-8">
                <div className="bg-white rounded-xl p-5 border border-[#E0D4C0] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#6B1E2E] flex items-center justify-center text-white text-base flex-shrink-0">📞</div>
                  <div>
                    <div className="text-xs font-body font-semibold text-[#7A6A5A] uppercase tracking-wider mb-1">Phone</div>
                    <a href="tel:9039223022" className="block font-display font-bold text-[#1A1214] text-lg hover:text-[#6B1E2E] transition-colors">9039223022</a>
                    <a href="tel:8349655520" className="block font-display font-bold text-[#1A1214] text-lg hover:text-[#6B1E2E] transition-colors">8349655520</a>
                  </div>
                </div>

                <a
                  href="https://wa.me/919039223022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] rounded-xl p-5 border border-transparent flex items-start gap-4 card-hover block"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-base flex-shrink-0">💬</div>
                  <div>
                    <div className="text-xs font-body font-semibold text-white/80 uppercase tracking-wider mb-1">WhatsApp</div>
                    <div className="font-display font-bold text-white text-lg">WhatsApp Us Now</div>
                    <div className="text-xs text-white/70 font-body">Quick response guaranteed</div>
                  </div>
                </a>

                <div className="bg-white rounded-xl p-5 border border-[#E0D4C0] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#6B1E2E] flex items-center justify-center text-white text-base flex-shrink-0">📍</div>
                  <div>
                    <div className="text-xs font-body font-semibold text-[#7A6A5A] uppercase tracking-wider mb-1">Location</div>
                    <div className="font-body font-semibold text-[#1A1214]">Mahakaleshwar Jyotirlinga</div>
                    <div className="font-body text-sm text-[#7A6A5A]">Ujjain, Madhya Pradesh, India</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <div className="section-label mb-2">Quick Actions</div>
                <a href="tel:9039223022" className="w-full btn-primary justify-center block text-center">
                  📞 Call 9039223022
                </a>
                <a href="tel:8349655520" className="w-full flex items-center justify-center gap-2 font-body font-semibold text-[#6B1E2E] border border-[#6B1E2E] rounded-md py-3 hover:bg-[#6B1E2E] hover:text-white transition-colors text-sm">
                  📞 Call 8349655520
                </a>
                <a
                  href={whatsappMsg()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold justify-center block text-center"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-[#E0D4C0]">
                <div className="section-label mb-2">Booking Enquiry</div>
                <h3 className="font-display text-xl font-bold text-[#1A1214] mb-6">Request a Quote</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", key: "name", type: "text", placeholder: "Your full name" },
                    { label: "Mobile Number", key: "mobile", type: "tel", placeholder: "Your phone number" },
                    { label: "Pickup Location", key: "pickup", type: "text", placeholder: "e.g. Ujjain Hotel" },
                    { label: "Destination", key: "destination", type: "text", placeholder: "Where to?" },
                    { label: "Travel Date", key: "date", type: "date", placeholder: "" },
                    { label: "Return Date (if applicable)", key: "returnDate", type: "date", placeholder: "" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => update(f.key, e.target.value)}
                        className="w-full border border-[#E0D4C0] rounded-lg px-4 py-3 text-sm font-body text-[#1A1214] placeholder-[#B8A898] focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1.5">Passengers</label>
                    <select value={form.passengers} onChange={(e) => update("passengers", e.target.value)} className="w-full border border-[#E0D4C0] rounded-lg px-4 py-3 text-sm font-body text-[#1A1214] focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]">
                      <option value="">Select</option>
                      <option>1–4</option><option>5–7</option><option>8–12</option><option>13–17</option><option>18+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1.5">Vehicle Category</label>
                    <select value={form.vehicle} onChange={(e) => update("vehicle", e.target.value)} className="w-full border border-[#E0D4C0] rounded-lg px-4 py-3 text-sm font-body text-[#1A1214] focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]">
                      <option value="">Select vehicle</option>
                      <option>Sedan</option><option>SUV</option><option>Tempo Traveller (12 Seater)</option><option>Tempo Traveller (17 Seater)</option><option>Any Available</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1.5">Trip Type</label>
                    <select value={form.tripType} onChange={(e) => update("tripType", e.target.value)} className="w-full border border-[#E0D4C0] rounded-lg px-4 py-3 text-sm font-body text-[#1A1214] focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0]">
                      <option value="">Select</option>
                      <option>Local Darshan</option><option>One Way</option><option>Round Trip</option><option>Outstation</option><option>Pilgrimage Tour</option><option>Custom</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs text-[#7A6A5A] font-body font-semibold uppercase tracking-wider block mb-1.5">Additional Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Any special requirements, destinations, or information..."
                      value={form.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      className="w-full border border-[#E0D4C0] rounded-lg px-4 py-3 text-sm font-body text-[#1A1214] placeholder-[#B8A898] focus:outline-none focus:border-[#6B1E2E] bg-[#FAF6F0] resize-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a
                    href={whatsappMsg()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center text-center"
                  >
                    GET QUOTE via WhatsApp →
                  </a>
                  <a href="tel:9039223022" className="flex items-center justify-center gap-2 font-body font-semibold text-[#6B1E2E] border border-[#6B1E2E] rounded-md py-3 px-6 hover:bg-[#6B1E2E] hover:text-white transition-colors text-sm">
                    📞 CALL NOW
                  </a>
                </div>
                <p className="text-center text-xs text-[#B8A898] font-body mt-3">We typically respond within a few minutes during working hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="bg-[#EDE3D6] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="section-label mb-3">Find Us</div>
          <h2 className="font-display text-2xl font-bold text-[#1A1214] mb-4">
            Based at <span className="text-[#6B1E2E]">Mahakaleshwar, Ujjain</span>
          </h2>
          <div className="bg-white rounded-2xl h-72 flex items-center justify-center border border-[#E0D4C0] max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <p className="font-display font-bold text-[#6B1E2E] text-lg mb-1">Shree Radhe Radhe Travels</p>
              <p className="font-body text-sm text-[#7A6A5A]">Mahakaleshwar Jyotirlinga, Ujjain, Madhya Pradesh</p>
              <a
                href="https://maps.google.com/?q=Mahakaleshwar+Temple+Ujjain+Madhya+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-body font-semibold text-[#6B1E2E] hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

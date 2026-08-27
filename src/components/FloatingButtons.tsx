export default function FloatingButtons() {
  return (
    <>
      {/* Desktop floating WhatsApp */}
      <a
        href="https://wa.me/919039223022?text=Hello%2C%20I%20would%20like%20to%20book%20a%20vehicle%20from%20Shree%20Radhe%20Radhe%20Travels."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-24 z-40 hidden md:flex w-14 h-14 bg-[#25D366] rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.83 6.5L4 29l7.7-1.82A12.93 12.93 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.83 0-3.555-.48-5.056-1.32l-.36-.21-3.74.885.92-3.65-.23-.375A9.94 9.94 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.47-7.5c-.3-.15-1.77-.87-2.044-.97-.274-.1-.474-.15-.673.15-.2.3-.773.97-.946 1.17-.174.2-.347.22-.647.07-.3-.15-1.266-.466-2.41-1.486-.892-.793-1.494-1.774-1.67-2.073-.174-.3-.018-.46.13-.61.134-.134.3-.347.45-.52.15-.174.2-.3.3-.5.1-.2.05-.374-.025-.524-.075-.15-.673-1.62-.922-2.22-.243-.583-.49-.504-.673-.513l-.573-.01c-.2 0-.524.075-.798.374-.274.3-1.047 1.023-1.047 2.493s1.072 2.893 1.222 3.093c.15.2 2.11 3.22 5.11 4.514.714.308 1.272.492 1.707.63.717.227 1.37.194 1.886.118.575-.085 1.77-.723 2.02-1.42.25-.7.25-1.3.174-1.42-.075-.12-.275-.2-.575-.35z" />
        </svg>
      </a>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex border-t border-[#E0D4C0] bg-white">
        <a
          href="tel:9039223022"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-[#6B1E2E] hover:bg-[#FAF6F0] transition-colors"
        >
          <span className="text-xl">📞</span>
          <span className="text-[10px] font-body font-semibold uppercase tracking-wider">Call</span>
        </a>
        <a
          href="https://wa.me/919039223022?text=Hello%2C%20I%20want%20to%20book%20a%20vehicle."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-[#25D366] hover:bg-[#FAF6F0] transition-colors border-x border-[#E0D4C0]"
        >
          <span className="text-xl">💬</span>
          <span className="text-[10px] font-body font-semibold uppercase tracking-wider">WhatsApp</span>
        </a>
        <a
          href="tel:9039223022"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-[#6B1E2E] text-white hover:bg-[#8B2840] transition-colors"
        >
          <span className="text-xl">🚗</span>
          <span className="text-[10px] font-body font-semibold uppercase tracking-wider">Book Now</span>
        </a>
      </div>
    </>
  );
}

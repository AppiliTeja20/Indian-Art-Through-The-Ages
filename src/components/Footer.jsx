export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/60 py-14">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid sm:grid-cols-3 gap-10">
        <div>
          <h4 className="font-serif text-xl text-ivory mb-3">Indian Art Through the Ages</h4>
          <p className="font-body text-sm leading-relaxed">
            An interactive digital timeline built for the "Interactive Timeline with Artifacts" assignment (CO1),
            exploring 5,000+ years of Indian artistic heritage.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-gold mb-3">Image Sources</h4>
          <p className="font-body text-sm leading-relaxed">
            All artifact photographs are sourced from Wikimedia Commons and are in the public domain or
            released under Creative Commons licenses, originating from institutions including the
            Metropolitan Museum of Art, the British Museum, the National Museum (New Delhi), the
            Government Museum (Chennai), LACMA, the Kimbell Art Museum, the Victoria &amp; Albert
            Museum, the Freer Gallery of Art, and the Ashmolean Museum. Individual credit lines appear
            on every artifact detail page.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-gold mb-3">Built With</h4>
          <p className="font-body text-sm leading-relaxed">
            React · Vite · Tailwind CSS · Framer Motion · Lucide Icons
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-10 pt-6 border-t border-ivory/10 font-sans text-xs text-ivory/40">
        © {new Date().getFullYear()} Indian Art Through the Ages — Academic project. Not for commercial use.
      </div>
    </footer>
  );
}

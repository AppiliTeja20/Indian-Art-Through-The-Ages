import { useState, useEffect } from "react";
import { Menu, X, Heart, Search } from "lucide-react";

const NAV_LINKS = [
  { id: "timeline", label: "Timeline" },
  { id: "artifacts", label: "Artifacts" },
  { id: "gallery", label: "Gallery" },
  { id: "journey", label: "Journey" },
  { id: "quiz", label: "Quiz" },
];

export default function Header({ onSearchClick, favoritesCount, onCollectionClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-charcoal/95 backdrop-blur-md shadow-museum py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-ivory tracking-wide text-lg md:text-xl flex items-center gap-2"
        >
          <span className="text-gold text-2xl leading-none">卐</span>
          <span className="hidden sm:inline">Indian Art</span>
          <span className="text-gold italic font-normal">Through the Ages</span>
        </button>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-widest text-ivory/80">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="hover:text-gold transition-colors">
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onSearchClick}
            aria-label="Search artifacts"
            className="text-ivory hover:text-gold transition-colors p-2"
          >
            <Search size={19} />
          </button>
          <button
            onClick={onCollectionClick}
            aria-label="My collection"
            className="relative text-ivory hover:text-gold transition-colors p-2"
          >
            <Heart size={19} />
            {favoritesCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-terracotta text-ivory text-[10px] font-sans font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden text-ivory p-2"
            onClick={() => setMenuOpen((m) => !m)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden mt-4 px-5 pb-4 flex flex-col gap-3 font-sans text-sm uppercase tracking-widest text-ivory/90 bg-charcoal/95">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left py-2 hover:text-gold">
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, MapPin, Calendar, Layers, Shapes, Sparkles, BookOpen, Lightbulb, Gem } from "lucide-react";
import ArtifactImage from "./ArtifactImage.jsx";
import { PERIODS } from "../data/periods.js";

export default function ArtifactModal({ artifact, onClose, isFavorite, onToggleFavorite }) {
  useEffect(() => {
    if (!artifact) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [artifact, onClose]);

  const period = artifact ? PERIODS.find((p) => p.key === artifact.period) : null;

  return (
    <AnimatePresence>
      {artifact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 bg-charcoal/85 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-ivory w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-5xl sm:rounded-sm overflow-y-auto grid md:grid-cols-2"
          >
            {/* LEFT: image */}
            <div className="relative h-72 sm:h-96 md:h-full md:min-h-[500px]">
              <ArtifactImage src={artifact.image} alt={artifact.name} className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-charcoal/10 pointer-events-none" />
              <span
                className="absolute top-4 left-4 font-sans text-xs uppercase tracking-widest px-3 py-1.5 text-ivory"
                style={{ backgroundColor: period?.color || "#8C6B4F" }}
              >
                {period?.name}
              </span>
              <p className="absolute bottom-3 left-4 font-sans text-[10px] text-ivory/80 tracking-wide">
                Image source: {artifact.imageCredit}
              </p>
            </div>

            {/* RIGHT: content */}
            <div className="p-6 sm:p-9 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-charcoal/5 hover:bg-charcoal/10 flex items-center justify-center text-charcoal"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal pr-10 leading-tight">{artifact.name}</h2>

              <div className="grid grid-cols-2 gap-3 mt-5 mb-6 font-sans text-sm">
                <InfoRow icon={<Layers size={14} />} label="Period" value={period?.name} />
                <InfoRow icon={<Calendar size={14} />} label="Date" value={artifact.date} />
                <InfoRow icon={<MapPin size={14} />} label="Location" value={artifact.location} />
                <InfoRow icon={<Shapes size={14} />} label="Material" value={artifact.material} />
                <InfoRow icon={<Gem size={14} />} label="Art Form" value={artifact.artForm} className="col-span-2" />
              </div>

              <Section icon={<BookOpen size={16} />} title="Description" text={artifact.description} />
              <Section icon={<Sparkles size={16} />} title="Historical Context" text={artifact.historicalContext} />
              <Section icon={<Shapes size={16} />} title="Artistic Features" text={artifact.artisticFeatures} />
              <Section icon={<Gem size={16} />} title="Cultural Significance" text={artifact.culturalSignificance} />

              <div className="mt-5">
                <h4 className="font-sans text-xs uppercase tracking-widest text-bronze flex items-center gap-1.5 mb-2">
                  <Lightbulb size={14} /> Interesting Facts
                </h4>
                <ul className="space-y-1.5">
                  {artifact.facts.map((f, i) => (
                    <li key={i} className="font-body text-[16px] text-charcoal/85 leading-snug pl-4 relative">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 mt-8 pt-6 border-t border-bronze/15">
                <button
                  onClick={() => onToggleFavorite(artifact.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 font-sans text-sm uppercase tracking-wider transition-colors ${
                    isFavorite
                      ? "bg-terracotta text-ivory hover:bg-deepred"
                      : "bg-charcoal text-ivory hover:bg-charcoal2"
                  }`}
                >
                  <Heart size={15} className={isFavorite ? "fill-ivory" : ""} />
                  {isFavorite ? "Saved to Collection" : "Add to My Collection"}
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-bronze/30 font-sans text-sm uppercase tracking-wider text-charcoal/70 hover:border-charcoal hover:text-charcoal transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InfoRow({ icon, label, value, className = "" }) {
  return (
    <div className={`${className}`}>
      <p className="text-bronze flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
        {icon}
        {label}
      </p>
      <p className="text-charcoal font-body text-base mt-0.5">{value}</p>
    </div>
  );
}

function Section({ icon, title, text }) {
  return (
    <div className="mb-4">
      <h4 className="font-sans text-xs uppercase tracking-widest text-bronze flex items-center gap-1.5 mb-1.5">
        {icon}
        {title}
      </h4>
      <p className="font-body text-[17px] leading-relaxed text-charcoal/85">{text}</p>
    </div>
  );
}

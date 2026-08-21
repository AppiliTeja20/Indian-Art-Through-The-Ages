import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";
import ArtifactImage from "./ArtifactImage.jsx";
import { PERIODS } from "../data/periods.js";

export default function ArtifactCard({ artifact, onOpen, isFavorite, onToggleFavorite, index = 0 }) {
  const period = PERIODS.find((p) => p.key === artifact.period);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index, 8) * 0.05 }}
      className="group bg-ivory border border-bronze/15 shadow-sm hover:shadow-museum transition-shadow duration-300 flex flex-col"
    >
      <button onClick={() => onOpen(artifact)} className="relative block w-full aspect-[4/3] overflow-hidden text-left">
        <ArtifactImage
          src={artifact.image}
          alt={artifact.name}
          className="w-full h-full"
          imgClassName="group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span
          className="absolute top-3 left-3 font-sans text-[10px] uppercase tracking-widest px-2.5 py-1 text-ivory"
          style={{ backgroundColor: period?.color || "#8C6B4F" }}
        >
          {period?.short}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(artifact.id);
          }}
          aria-label="Toggle favorite"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-charcoal/50 backdrop-blur flex items-center justify-center hover:bg-charcoal/80 transition-colors"
        >
          <Heart size={15} className={isFavorite ? "fill-terracotta text-terracotta" : "text-ivory"} />
        </button>
      </button>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-serif text-lg text-charcoal leading-snug">{artifact.name}</h3>
        <p className="font-sans text-xs text-bronze uppercase tracking-wide mt-1">{period?.name}</p>
        <p className="font-body text-sm text-charcoal/60 mt-0.5">{artifact.date}</p>
        <button
          onClick={() => onOpen(artifact)}
          className="mt-3 pt-3 border-t border-bronze/10 flex items-center justify-between font-sans text-xs uppercase tracking-widest text-terracotta hover:text-deepred transition-colors"
        >
          Explore Artifact
          <ArrowUpRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}

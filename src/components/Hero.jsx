import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ArtifactImage from "./ArtifactImage.jsx";
import { ARTIFACTS } from "../data/artifacts.js";

const byId = (id) => ARTIFACTS.find((a) => a.id === id);

const COLLAGE = [
  { a: byId("dancing-girl"), cls: "col-span-2 row-span-2" },
  { a: byId("lion-capital-ashoka"), cls: "col-span-1 row-span-1" },
  { a: byId("ajanta-painting"), cls: "col-span-1 row-span-1" },
  { a: byId("nataraja"), cls: "col-span-1 row-span-2" },
  { a: byId("mughal-miniature"), cls: "col-span-1 row-span-1" },
  { a: byId("ravi-varma-lady-swarbat"), cls: "col-span-1 row-span-1" },
];

export default function Hero({ onExploreTimeline, onExploreArtifacts }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-charcoal flex items-center pt-24 pb-16">
      {/* subtle grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/70 to-charcoal pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 items-center w-full">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-sans uppercase tracking-[0.3em] text-gold text-xs md:text-sm mb-5">
            A Digital Museum Experience
          </p>
          <h1 className="font-serif text-ivory text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-shadow-lg">
            INDIAN ART
          </h1>
          <h2 className="font-serif italic text-goldLight text-3xl sm:text-4xl md:text-5xl mt-2 mb-6">
            Through the Ages
          </h2>
          <p className="text-ivory/80 text-lg md:text-xl max-w-lg leading-relaxed mb-9">
            Explore 5,000+ years of Indian creativity, culture, craftsmanship and artistic heritage —
            from Harappan bronzes to modernist canvases.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onExploreTimeline}
              className="px-7 py-3.5 bg-gold hover:bg-goldLight text-charcoal font-sans font-semibold uppercase tracking-wider text-sm transition-colors"
            >
              Explore Timeline
            </button>
            <button
              onClick={onExploreArtifacts}
              className="px-7 py-3.5 border border-ivory/40 hover:border-gold hover:text-gold text-ivory font-sans font-semibold uppercase tracking-wider text-sm transition-colors"
            >
              Explore Artifacts
            </button>
          </div>
        </motion.div>

        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="grid grid-cols-3 grid-rows-3 gap-2.5 h-[420px] sm:h-[480px] md:h-[540px]"
        >
          {COLLAGE.map(({ a, cls }, i) =>
            a ? (
              <motion.div
                key={a.id}
                className={`relative rounded-sm overflow-hidden shadow-museum group ${cls}`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <ArtifactImage src={a.image} alt={a.name} className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <p className="font-sans text-ivory text-[10px] sm:text-xs uppercase tracking-wider leading-tight">
                    {a.name}
                  </p>
                </div>
                <div className="absolute inset-0 ring-1 ring-gold/0 group-hover:ring-gold/60 transition-all" />
              </motion.div>
            ) : null
          )}
        </motion.div>
      </div>

      <motion.button
        onClick={onExploreTimeline}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/70 hover:text-gold"
        aria-label="Scroll to timeline"
      >
        <ChevronDown size={26} />
      </motion.button>
    </section>
  );
}

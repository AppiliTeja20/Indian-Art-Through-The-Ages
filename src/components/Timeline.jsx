import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ArtifactImage from "./ArtifactImage.jsx";
import { PERIODS } from "../data/periods.js";

export default function Timeline({ onSelectPeriod }) {
  return (
    <section id="timeline" className="relative py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="5,000 Years, One Line"
          title="The Interactive Timeline"
          subtitle="Click any period to jump straight to its artifacts. Each node marks a distinct chapter of Indian art history."
        />

        <div className="relative mt-16">
          {/* the spine */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-bronze/20 via-gold/60 to-bronze/20" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-bronze/20 via-gold/60 to-bronze/20" />

          <div className="flex flex-col gap-10 md:gap-4">
            {PERIODS.map((p, i) => (
              <TimelineNode key={p.key} period={p} index={i} onSelect={onSelectPeriod} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineNode({ period, index, onSelect }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`relative flex items-center gap-5 md:gap-0 pl-16 md:pl-0 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* dot on spine */}
      <span className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold ring-4 ring-ivory shadow z-10" />

      {/* card */}
      <button
        onClick={() => onSelect(period.key)}
        className={`group w-full md:w-[46%] flex items-center gap-4 bg-white/60 hover:bg-white border border-bronze/15 hover:border-gold/60 rounded-sm p-3 text-left transition-all duration-300 hover:shadow-museum ${
          isEven ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <ArtifactImage src={period.image} alt={period.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-sm shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-sans text-[10px] uppercase tracking-widest text-terracotta">{period.range}</p>
          <h3 className="font-serif text-xl text-charcoal leading-tight mt-0.5">{period.name}</h3>
          <p className="font-body text-sm text-charcoal/60 mt-1 line-clamp-2">{period.blurb}</p>
        </div>
        <ArrowRight size={18} className="hidden sm:block text-bronze group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0" />
      </button>

      {/* spacer for the opposite side on desktop */}
      <div className="hidden md:block md:w-[46%]" />
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, dark = false }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <p className={`font-sans uppercase tracking-[0.25em] text-xs mb-3 ${dark ? "text-gold" : "text-terracotta"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-[2.75rem] leading-tight ${dark ? "text-ivory" : "text-charcoal"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-lg mt-4 leading-relaxed ${dark ? "text-ivory/70" : "text-charcoal/60"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

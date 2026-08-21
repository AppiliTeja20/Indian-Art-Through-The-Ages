import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ArtifactImage from "./ArtifactImage.jsx";
import { PERIODS } from "../data/periods.js";

export default function PeriodCards({ onSelectPeriod }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {PERIODS.map((p, i) => (
        <motion.button
          key={p.key}
          onClick={() => onSelectPeriod(p.key)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
          whileHover={{ y: -4 }}
          className="group relative h-56 rounded-sm overflow-hidden text-left shadow-sm hover:shadow-museum transition-shadow"
        >
          <ArtifactImage
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full"
            imgClassName="group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/10" />
          <div className="relative h-full flex flex-col justify-end p-5">
            <p className="font-sans text-[11px] uppercase tracking-widest text-goldLight">{p.range}</p>
            <h3 className="font-serif text-2xl text-ivory mt-1 leading-tight">{p.name}</h3>
            <span className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-ivory/80 group-hover:text-gold transition-colors">
              Explore Period <ArrowRight size={13} />
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

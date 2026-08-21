import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ArtifactImage from "./ArtifactImage.jsx";
import { SectionHeading } from "./Timeline.jsx";
import { PERIODS } from "../data/periods.js";

export default function Journey({ onSelectPeriod }) {
  return (
    <section id="journey" className="py-24 bg-ivory2">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Walk The Path"
          title="Your Journey Through Indian Art"
          subtitle="Ten steps, five thousand years — follow the thread from the Indus Valley to Indian modernism."
        />

        <div className="mt-14 flex flex-col items-center">
          {PERIODS.map((p, i) => (
            <div key={p.key} className="flex flex-col items-center w-full max-w-md">
              <motion.button
                onClick={() => onSelectPeriod(p.key)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="group w-full flex items-center gap-4 bg-white border border-bronze/15 hover:border-gold rounded-sm p-3 shadow-sm hover:shadow-museum transition-all"
              >
                <span className="font-serif text-2xl text-gold/70 w-8 text-center shrink-0">{i + 1}</span>
                <ArtifactImage src={p.image} alt={p.name} className="w-16 h-16 rounded-sm shrink-0" />
                <div className="text-left flex-1 min-w-0">
                  <h3 className="font-serif text-lg text-charcoal leading-tight">{p.name}</h3>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-terracotta mt-0.5">{p.range}</p>
                </div>
              </motion.button>
              {i < PERIODS.length - 1 && (
                <ArrowDown size={18} className="my-2 text-bronze/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

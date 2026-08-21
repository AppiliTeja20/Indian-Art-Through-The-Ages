import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ArtifactImage from "./ArtifactImage.jsx";
import { ARTIFACTS } from "../data/artifacts.js";

const byId = (id) => ARTIFACTS.find((a) => a.id === id);

const FACTS = [
  {
    a: byId("nataraja"),
    text: "The Chola Nataraja represents Shiva's cosmic dance and became one of the most recognizable images of Indian art, later invoked by physicists as a metaphor for the dance of subatomic particles.",
  },
  {
    a: byId("dancing-girl"),
    text: "The Dancing Girl is one of the best-known surviving bronze sculptures associated with the Indus Valley Civilization — cast nearly 4,500 years ago using the lost-wax method.",
  },
  {
    a: byId("lion-capital-ashoka"),
    text: "The Lion Capital of Ashoka was adopted as India's National Emblem in 1950 and appears on every rupee note, coin, and government seal in the country.",
  },
  {
    a: byId("ajanta-painting"),
    text: "The Ajanta caves were abandoned and swallowed by jungle for centuries before being 'rediscovered' by a British officer on a tiger hunt in 1819.",
  },
];

export default function DidYouKnow() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-sans uppercase tracking-[0.25em] text-xs text-gold mb-3">Learn As You Explore</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory">Did You Know?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {FACTS.map(({ a, text }, i) =>
            a ? (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 bg-charcoal2 border border-ivory/10 rounded-sm p-4 sm:p-5"
              >
                <ArtifactImage src={a.image} alt={a.name} className="w-24 h-24 sm:w-28 sm:h-28 rounded-sm shrink-0" />
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold flex items-center gap-1.5 mb-1.5">
                    <Sparkles size={12} /> {a.name}
                  </p>
                  <p className="font-body text-[17px] text-ivory/85 leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}

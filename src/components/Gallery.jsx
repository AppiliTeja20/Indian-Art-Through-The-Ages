import { motion } from "framer-motion";
import ArtifactImage from "./ArtifactImage.jsx";
import { SectionHeading } from "./Timeline.jsx";
import { ARTIFACTS } from "../data/artifacts.js";
import { PERIODS } from "../data/periods.js";

// A curated, visually varied subset for the masonry gallery.
const GALLERY_IDS = [
  "dancing-girl", "lion-capital-ashoka", "nataraja", "ajanta-painting", "mughal-miniature",
  "ravi-varma-galaxy-musicians", "khajuraho-sculpture", "gandhara-buddha", "krishna-radha-painting",
  "didarganj-yakshi", "konark-sculpture", "bharat-mata", "sarnath-buddha", "pashupati-seal",
  "amrita-shergil-painting", "hoysala-sculpture",
];

const SPANS = ["row-span-2", "row-span-1", "row-span-1", "row-span-2", "row-span-1", "row-span-1"];

export default function Gallery({ onOpenArtifact }) {
  const items = GALLERY_IDS.map((id) => ARTIFACTS.find((a) => a.id === id)).filter(Boolean);

  return (
    <section id="gallery" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Explore The Collection"
          title="Image Gallery"
          subtitle="A closer look at the pieces that define each chapter of Indian art history."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[190px] gap-3">
          {items.map((a, i) => {
            const period = PERIODS.find((p) => p.key === a.period);
            return (
              <motion.button
                key={a.id}
                onClick={() => onOpenArtifact(a)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                className={`group relative overflow-hidden rounded-sm text-left ${SPANS[i % SPANS.length]}`}
              >
                <ArtifactImage
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full"
                  imgClassName="group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-sans text-[10px] uppercase tracking-widest text-goldLight">{period?.short}</p>
                  <p className="font-serif text-ivory text-base leading-tight">{a.name}</p>
                  <p className="font-sans text-[10px] text-ivory/70 mt-1">{a.date}</p>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-gold mt-2">View Artifact →</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

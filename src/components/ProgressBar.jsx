import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { TOTAL_ARTIFACTS } from "../data/artifacts.js";

export default function ProgressBar({ exploredCount }) {
  const pct = Math.min(100, Math.round((exploredCount / TOTAL_ARTIFACTS) * 100));

  return (
    <div className="bg-charcoal text-ivory rounded-sm p-5 sm:p-6 flex items-center gap-5">
      <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
        <Compass size={20} className="text-gold" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <p className="font-sans text-xs uppercase tracking-widest text-ivory/70">Artifacts Explored</p>
          <p className="font-serif text-lg text-gold shrink-0">
            {exploredCount} / {TOTAL_ARTIFACTS}
          </p>
        </div>
        <div className="h-2 bg-ivory/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-bronze to-gold rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

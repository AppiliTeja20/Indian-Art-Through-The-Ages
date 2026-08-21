import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";
import ArtifactImage from "./ArtifactImage.jsx";
import { ARTIFACTS } from "../data/artifacts.js";

export default function MyCollectionDrawer({ open, onClose, favorites, onOpenArtifact, onToggleFavorite }) {
  const items = ARTIFACTS.filter((a) => favorites.includes(a.id));

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/70 z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-ivory z-50 overflow-y-auto shadow-museum"
          >
            <div className="sticky top-0 bg-ivory border-b border-bronze/15 px-5 py-4 flex items-center justify-between z-10">
              <h3 className="font-serif text-2xl text-charcoal flex items-center gap-2">
                <Heart size={18} className="fill-terracotta text-terracotta" /> My Collection
              </h3>
              <button onClick={onClose} className="p-2 text-charcoal/60 hover:text-charcoal" aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="p-5">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <Heart size={36} className="mx-auto text-bronze/30 mb-4" />
                  <p className="font-body text-lg text-charcoal/50">
                    Tap the heart on any artifact to save it here.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {items.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => {
                        onOpenArtifact(a);
                        onClose();
                      }}
                      className="group flex items-center gap-3 bg-white border border-bronze/10 hover:border-gold/60 rounded-sm p-2.5 text-left transition-colors"
                    >
                      <ArtifactImage src={a.image} alt={a.name} className="w-16 h-16 rounded-sm shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-base text-charcoal leading-tight truncate">{a.name}</p>
                        <p className="font-sans text-[11px] text-bronze uppercase tracking-wide mt-0.5">{a.date}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(a.id);
                        }}
                        className="p-1.5 text-terracotta hover:text-deepred shrink-0"
                        aria-label="Remove from collection"
                      >
                        <Heart size={16} className="fill-terracotta" />
                      </button>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

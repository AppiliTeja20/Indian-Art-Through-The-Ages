import { useMemo, useState, forwardRef } from "react";
import ArtifactCard from "./ArtifactCard.jsx";
import PeriodCards from "./PeriodCards.jsx";
import ProgressBar from "./ProgressBar.jsx";
import SearchFilterBar from "./SearchFilterBar.jsx";
import { SectionHeading } from "./Timeline.jsx";
import { ARTIFACTS } from "../data/artifacts.js";
import { PERIODS } from "../data/periods.js";

const toggleIn = (arr, val) => (arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

const ArtifactsSection = forwardRef(function ArtifactsSection(
  { onOpenArtifact, favorites, onToggleFavorite, exploredCount, jumpToPeriod },
  ref
) {
  const [query, setQuery] = useState("");
  const [activePeriods, setActivePeriods] = useState([]);
  const [activeForms, setActiveForms] = useState([]);
  const [activeMaterials, setActiveMaterials] = useState([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTIFACTS.filter((a) => {
      const period = PERIODS.find((p) => p.key === a.period);
      const matchesQuery =
        !q ||
        [a.name, period?.name, a.location, a.material, a.artForm, ...a.tags].join(" ").toLowerCase().includes(q);
      const matchesPeriod = !activePeriods.length || activePeriods.includes(a.period);
      const matchesForm = !activeForms.length || activeForms.includes(a.artForm);
      const matchesMaterial = !activeMaterials.length || activeMaterials.some((m) => a.material.includes(m));
      return matchesQuery && matchesPeriod && matchesForm && matchesMaterial;
    });
  }, [query, activePeriods, activeForms, activeMaterials]);

  const grouped = useMemo(() => {
    const map = {};
    PERIODS.forEach((p) => (map[p.key] = []));
    filtered.forEach((a) => map[a.period]?.push(a));
    return map;
  }, [filtered]);

  const clearAll = () => {
    setQuery("");
    setActivePeriods([]);
    setActiveForms([]);
    setActiveMaterials([]);
  };

  return (
    <section id="artifacts" ref={ref} className="py-24 bg-ivory2">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Browse The Collection"
          title="Artifacts By Period"
          subtitle="Every major period of Indian art, illustrated with real pieces you can search, filter, and open in full detail."
        />

        <PeriodCards onSelectPeriod={jumpToPeriod} />

        <div className="mt-10">
          <ProgressBar exploredCount={exploredCount} />
        </div>

        <div className="mt-6 sticky top-[68px] z-20">
          <SearchFilterBar
            query={query}
            setQuery={setQuery}
            activePeriods={activePeriods}
            togglePeriod={(v) => setActivePeriods((p) => toggleIn(p, v))}
            activeForms={activeForms}
            toggleForm={(v) => setActiveForms((f) => toggleIn(f, v))}
            activeMaterials={activeMaterials}
            toggleMaterial={(v) => setActiveMaterials((m) => toggleIn(m, v))}
            clearAll={clearAll}
            resultCount={filtered.length}
          />
        </div>

        <div className="mt-14 flex flex-col gap-16">
          {PERIODS.map((period) => {
            const items = grouped[period.key];
            if (!items || items.length === 0) return null;
            return (
              <div key={period.key} id={`period-${period.key}`} className="scroll-mt-32">
                <div className="flex items-baseline justify-between mb-6 border-b border-bronze/20 pb-3">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">{period.name}</h3>
                    <p className="font-sans text-xs uppercase tracking-widest text-terracotta mt-1">{period.range}</p>
                  </div>
                  <span className="font-sans text-xs text-charcoal/50 uppercase tracking-wider hidden sm:inline">
                    {items.length} artifact{items.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {items.map((a, i) => (
                    <ArtifactCard
                      key={a.id}
                      artifact={a}
                      onOpen={onOpenArtifact}
                      isFavorite={favorites.includes(a.id)}
                      onToggleFavorite={onToggleFavorite}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-serif text-2xl text-charcoal/60">No artifacts match your search.</p>
              <button onClick={clearAll} className="mt-4 font-sans text-sm uppercase tracking-widest text-terracotta hover:text-deepred">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

export default ArtifactsSection;

import { Search, X, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { PERIODS, ART_FORMS, MATERIALS } from "../data/periods.js";

export default function SearchFilterBar({
  query,
  setQuery,
  activePeriods,
  togglePeriod,
  activeForms,
  toggleForm,
  activeMaterials,
  toggleMaterial,
  clearAll,
  resultCount,
}) {
  const [showFilters, setShowFilters] = useState(false);
  const hasActive = activePeriods.length || activeForms.length || activeMaterials.length || query;

  return (
    <div className="bg-white/70 border border-bronze/15 rounded-sm p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-bronze" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search Indian Artifacts... (name, period, region, material)"
            className="w-full pl-10 pr-9 py-3 bg-ivory border border-bronze/20 focus:border-gold outline-none font-body text-base rounded-sm placeholder:text-charcoal/40"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters((s) => !s)}
          className={`flex items-center justify-center gap-2 px-5 py-3 font-sans text-sm uppercase tracking-wider border transition-colors ${
            showFilters ? "bg-charcoal text-ivory border-charcoal" : "border-bronze/30 text-charcoal hover:border-charcoal"
          }`}
        >
          <SlidersHorizontal size={15} />
          Filters
          {(activePeriods.length + activeForms.length + activeMaterials.length) > 0 && (
            <span className="bg-terracotta text-ivory rounded-full w-5 h-5 text-[11px] flex items-center justify-center">
              {activePeriods.length + activeForms.length + activeMaterials.length}
            </span>
          )}
        </button>
      </div>

      {showFilters && (
        <div className="mt-5 grid sm:grid-cols-3 gap-6">
          <FilterGroup
            label="Period"
            options={PERIODS.map((p) => ({ value: p.key, label: p.short }))}
            active={activePeriods}
            onToggle={togglePeriod}
          />
          <FilterGroup
            label="Art Form"
            options={ART_FORMS.map((f) => ({ value: f, label: f }))}
            active={activeForms}
            onToggle={toggleForm}
          />
          <FilterGroup
            label="Material"
            options={MATERIALS.map((m) => ({ value: m, label: m }))}
            active={activeMaterials}
            onToggle={toggleMaterial}
          />
        </div>
      )}

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-bronze/10 font-sans text-xs uppercase tracking-wider text-charcoal/50">
        <span>{resultCount} artifact{resultCount === 1 ? "" : "s"} found</span>
        {hasActive && (
          <button onClick={clearAll} className="text-terracotta hover:text-deepred">
            Clear all
          </button>
        )}
      </div>
    </div>
  );
}

function FilterGroup({ label, options, active, onToggle }) {
  return (
    <div>
      <p className="font-sans text-[11px] uppercase tracking-widest text-bronze mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            onClick={() => onToggle(o.value)}
            className={`px-3 py-1.5 text-xs font-sans rounded-full border transition-colors ${
              active.includes(o.value)
                ? "bg-terracotta text-ivory border-terracotta"
                : "border-bronze/25 text-charcoal/70 hover:border-terracotta hover:text-terracotta"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

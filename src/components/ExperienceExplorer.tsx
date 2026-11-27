"use client";

import { ExperienceGrid } from "./ExperienceGrid";
import { FilterBar } from "./FilterBar";
import { SearchBar } from "./SearchBar";
import { useFilters } from "@/hooks/useFilters";

export const ExperienceExplorer = () => {
  const { filters, setFilter, results } = useFilters();

  return (
    <div className="space-y-5">
      <SearchBar value={filters.search} onChange={(v) => setFilter("search", v)} />
      <FilterBar filters={filters} onChange={setFilter} />
      <p className="text-sm text-slate-500">{results.length} experiencias</p>
      <ExperienceGrid experiences={results} />
    </div>
  );
};

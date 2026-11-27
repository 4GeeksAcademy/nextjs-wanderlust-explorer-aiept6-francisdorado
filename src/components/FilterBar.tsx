import { categories, countries } from "@/data/options";
import type { Filters } from "@/types/experience";

interface Props {
  filters: Filters;
  onChange: (key: keyof Filters, value: string) => void;
}

const selectClass =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-teal-500";

export const FilterBar = ({ filters, onChange }: Props) => (
  <div className="grid gap-3 sm:grid-cols-2">
    <select
      aria-label="Categoría"
      value={filters.category.toLowerCase()}
      onChange={(e) => onChange("category", e.target.value)}
      className={selectClass}
    >
      <option value="">Todas las categorías</option>
      {categories.map((c) => (
        <option key={c.value} value={c.value.toLowerCase()}>
          {c.label}
        </option>
      ))}
    </select>
    <select
      aria-label="Destino"
      value={filters.destination}
      onChange={(e) => onChange("destination", e.target.value)}
      className={selectClass}
    >
      <option value="">Todos los destinos</option>
      {countries.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  </div>
);

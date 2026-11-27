interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: Props) => (
  <input
    type="search"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Buscar por título (ej. vela)"
    aria-label="Buscar experiencias"
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-500"
  />
);

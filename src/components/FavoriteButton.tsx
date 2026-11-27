interface Props {
  isFavorite: boolean;
  onToggle: () => void;
}

export const FavoriteButton = ({ isFavorite, onToggle }: Props) => (
  <button
    type="button"
    onClick={onToggle}
    aria-pressed={isFavorite}
    aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl shadow"
  >
    <span className={isFavorite ? "text-rose-500" : "text-slate-400"}>
      {isFavorite ? "♥" : "♡"}
    </span>
  </button>
);

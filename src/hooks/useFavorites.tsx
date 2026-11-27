"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface FavoritesValue {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesValue | null>(null);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const value = useContext(FavoritesContext);
  if (!value) throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  return value;
};

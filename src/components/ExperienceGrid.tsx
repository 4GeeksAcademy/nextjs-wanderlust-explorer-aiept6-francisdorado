"use client";

import { ExperienceCard } from "./ExperienceCard";
import { useFavorites } from "@/hooks/useFavorites";
import type { Experience } from "@/types/experience";

export const ExperienceGrid = ({ experiences }: { experiences: Experience[] }) => {
  const { favoriteIds, toggleFavorite } = useFavorites();

  if (experiences.length === 0) {
    return <p className="py-12 text-center text-slate-500">No se encontraron resultados</p>;
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {experiences.map((e) => (
        <ExperienceCard
          key={e.id}
          experience={e}
          isFavorite={favoriteIds.includes(e.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

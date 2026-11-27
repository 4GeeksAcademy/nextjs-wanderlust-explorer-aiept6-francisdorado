"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FavoriteButton } from "./FavoriteButton";
import { useFavorites } from "@/hooks/useFavorites";
import type { Experience } from "@/types/experience";

export const ExperienceDetail = ({ experience }: { experience: Experience }) => {
  const { favoriteIds, toggleFavorite } = useFavorites();

  useEffect(() => {
    document.title = `${experience.title} · Wanderlust`;
  }, [experience.title]);

  return (
    <article className="space-y-5">
      <Link href="/experiences" className="text-sm text-teal-700 hover:underline">
        ← Volver a experiencias
      </Link>
      <div className="relative h-64 overflow-hidden rounded-2xl sm:h-96">
        <Image src={experience.imageUrl} alt={experience.title} fill unoptimized className="object-cover" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase text-teal-700">{experience.category}</p>
          <h1 className="text-2xl font-bold">{experience.title}</h1>
          <p className="text-slate-500">{experience.destination}</p>
        </div>
        <FavoriteButton
          isFavorite={favoriteIds.includes(experience.id)}
          onToggle={() => toggleFavorite(experience.id)}
        />
      </div>
      <p className="text-slate-700">{experience.description}</p>
      <p className="text-lg">
        <span className="font-semibold">{experience.price} €</span> por persona · ★ {experience.rating}
      </p>
    </article>
  );
};

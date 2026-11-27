"use client";

import Link from "next/link";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";

const FavoritesPage = () => {
  const { favoriteIds } = useFavorites();
  const favorites = experiences.filter((e) => favoriteIds.includes(e.id));

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Mis favoritos</h1>
      {favorites.length === 0 ? (
        <p className="text-slate-500">
          Aún no tienes favoritos.{" "}
          <Link href="/experiences" className="text-teal-700 underline">
            Explora experiencias
          </Link>
        </p>
      ) : (
        <ExperienceGrid experiences={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;

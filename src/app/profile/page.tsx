"use client";

import { useFavorites } from "@/hooks/useFavorites";

const user = { name: "Alex Viajero", email: "alex@wanderlust.test", city: "Madrid, Spain" };

const ProfilePage = () => {
  const { favoriteIds } = useFavorites();

  return (
    <div className="max-w-md space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-slate-500">{user.email}</p>
      <p className="text-slate-500">{user.city}</p>
      <p className="rounded-xl bg-teal-50 p-4 text-teal-800">
        Favoritos guardados: <span className="font-bold">{favoriteIds.length}</span>
      </p>
    </div>
  );
};

export default ProfilePage;

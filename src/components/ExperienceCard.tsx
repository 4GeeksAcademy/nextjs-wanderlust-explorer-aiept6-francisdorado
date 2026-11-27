import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "./FavoriteButton";
import type { Experience } from "@/types/experience";

interface Props {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const ExperienceCard = ({ experience, isFavorite, onToggleFavorite }: Props) => (
  <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className="relative h-44">
      <Image
        src={experience.imageUrl}
        alt={experience.title}
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute right-3 top-3">
        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={() => onToggleFavorite(experience.id)}
        />
      </div>
    </div>
    <div className="space-y-1 p-4">
      <p className="text-xs font-medium uppercase text-teal-700">{experience.category}</p>
      <Link href={`/experiences/${experience.id}`} className="block font-semibold hover:underline">
        {experience.title}
      </Link>
      <p className="text-sm text-slate-500">{experience.destination}</p>
      <p className="text-sm">
        <span className="font-semibold">{experience.price} €</span> · ★ {experience.rating}
      </p>
    </div>
  </article>
);

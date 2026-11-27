import { experiences } from "./experiences";
import type { Category } from "@/types/experience";

export const categories: { value: Category; label: string }[] = [
  { value: "Adventure", label: "Aventura" },
  { value: "Culture", label: "Cultura" },
  { value: "Food", label: "Gastronomía" },
  { value: "Wellness", label: "Bienestar" },
  { value: "Nature", label: "Naturaleza" },
];

export const countries: string[] = Array.from(
  new Set(experiences.map((e) => e.destination.split(", ")[1])),
).sort();

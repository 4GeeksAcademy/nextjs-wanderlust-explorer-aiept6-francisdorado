"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { experiences } from "@/data/experiences";
import type { Experience, Filters } from "@/types/experience";

const escapeRegex = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const buildRegex = (term: string) => {
  try {
    return new RegExp(term, "i");
  } catch {
    return new RegExp(escapeRegex(term), "i");
  }
};

export const filterExperiences = (list: Experience[], filters: Filters) => {
  const regex = buildRegex(filters.search);
  return list.filter(
    (e) =>
      regex.test(e.title) &&
      (!filters.category || e.category.toLowerCase() === filters.category.toLowerCase()) &&
      (!filters.destination ||
        e.destination.toLowerCase().includes(filters.destination.toLowerCase())),
  );
};

export const useFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const filters: Filters = {
    search: searchParams.get("search") ?? "",
    category: searchParams.get("category") ?? "",
    destination: searchParams.get("destination") ?? "",
  };

  const setFilter = (key: keyof Filters, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return { filters, setFilter, results: filterExperiences(experiences, filters) };
};

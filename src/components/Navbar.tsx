"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/hooks/useFavorites";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/experiences", label: "Experiencias" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/profile", label: "Perfil" },
];

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export const Navbar = () => {
  const pathname = usePathname();
  const { favoriteIds } = useFavorites();

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="text-lg font-bold text-teal-700">
          Wanderlust
        </Link>
        <ul className="flex items-center gap-1 text-sm sm:gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-full px-3 py-1.5 ${
                  isActive(pathname, l.href)
                    ? "bg-teal-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {l.label}
                {l.href === "/favorites" && favoriteIds.length > 0 && ` (${favoriteIds.length})`}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

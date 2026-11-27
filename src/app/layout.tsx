import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { FavoritesProvider } from "@/hooks/useFavorites";

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Descubre y guarda experiencias únicas alrededor del mundo",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="es">
    <body className="bg-slate-50 text-slate-900 antialiased">
      <FavoritesProvider>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </FavoritesProvider>
    </body>
  </html>
);

export default RootLayout;

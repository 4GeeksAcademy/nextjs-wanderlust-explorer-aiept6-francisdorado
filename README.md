# Wanderlust Explorer

Explorador de experiencias de viaje hecho con **Next.js 16 (App Router)**, **TypeScript** y **Tailwind CSS**. Sin librerías externas de estado: todo con `useState`, props, un contexto y custom hooks.

## Páginas

| Ruta | Qué muestra |
|---|---|
| `/` | Home con sección hero y botón a `/experiences` |
| `/experiences` | Explorador: 100 tarjetas, búsqueda y filtros por categoría y destino |
| `/experiences/[id]` | Detalle de una experiencia, leída del dataset local por su ID |
| `/favorites` | Experiencias marcadas con el corazón |
| `/profile` | Perfil simulado con el número de favoritos |

Ejemplo de enlace compartible: `/experiences?search=vela&category=adventure&destination=Croatia`

## Cómo funciona

- **Búsqueda y filtros en la URL**: `useFilters` lee `useSearchParams` y escribe con `router.replace`. Al cargar con parámetros, los inputs salen prerrellenados y los resultados ya filtrados.
- **Búsqueda con regex**: `new RegExp(term, "i").test(title)`. Si el término no es una regex válida (por ejemplo `(`), se escapa para no romper la página.
- **Filtros combinables**: búsqueda, categoría y destino (ciudad o país) se aplican a la vez.
- **Favoritos**: `useState` en `FavoritesProvider` (en el layout, para que se mantenga al cambiar de página) y se pasan a las tarjetas por props. No hay persistencia.
- **`useEffect`**: la página de detalle actualiza el título del documento.
- **Custom hooks**: `useFilters` (lógica de filtrado) y `useFavorites`.
- **Dataset**: `src/data/experiences.ts`, 100 experiencias (20 destinos × 5 categorías), tipadas con `interface Experience`.

## Estructura

```
src/
  app/          páginas (/, /experiences, /experiences/[id], /favorites, /profile)
  components/   Navbar, SearchBar, FilterBar, ExperienceCard, ExperienceGrid...
  hooks/        useFilters, useFavorites
  data/         experiences.ts, options.ts
  types/        experience.ts
```

## Design References

Interfaces reales que han inspirado el diseño (tarjetas con foto grande y corazón, barra de búsqueda arriba, filtros claros):

1. **Airbnb Experiences** — https://www.airbnb.es/s/experiences — rejilla de tarjetas con imagen, título, precio, valoración y corazón de favoritos.
2. **GetYourGuide** — https://www.getyourguide.es — filtros por categoría y destino y tarjetas con precio y valoración bien visibles.
3. **Tripadvisor Experiencias** — https://www.tripadvisor.es/Attractions — buscador por destino y listados filtrables.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

# Spec — Módulo 08 · Custom hooks

## Objetivo
Extraer lógica reutilizable en **hooks propios** (funciones que empiezan con `use`).

## Modelo de datos
`useFetch<T>(url)` → `{ datos: T | null, cargando: boolean, error: string | null }`

## Requisitos
- **R1** — Extraer `useEffect` + `fetch` en un hook `useFetch<T>`.
- **R2** — Devolver `{ datos, cargando, error }` tipados genéricamente.
- **R3** — Reutilizar el hook en **2+ componentes** (dos endpoints).
- **R4** — Cleanup para evitar actualizaciones tras desmontar.

## Fuera de alcance
- Caching (eso es TanStack Query, módulo 06) · Estado global.

## Criterios de aceptación
- [ ] El hook empieza con `use` y usa hooks adentro.
- [ ] Es genérico (`useFetch<T>`).
- [ ] Lo reutilicé en 2+ componentes.
- [ ] Respeté las rules of hooks (nada de hooks en condicionales).

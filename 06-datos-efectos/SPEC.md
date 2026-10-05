# Spec — Módulo 06 · Efectos y data fetching

## Objetivo
Traer datos de una API entendiendo `useEffect` y usando **TanStack Query** para el fetch moderno.

## Modelo de datos
`interface` tipada de la respuesta (ej. `Post { id, title, body }` de JSONPlaceholder).

## Requisitos
- **R1** — Hacer el fetch manual con `useEffect` + `fetch` (para entenderlo).
- **R2** — Reimplementar con **TanStack Query** (`useQuery`).
- **R3** — Mostrar los tres estados: **loading / error / success**.
- **R4** — Tipar la respuesta con `interface`.

## Fuera de alcance
- Caching avanzado / mutaciones · Autenticación.

## Criterios de aceptación
- [ ] Usé `useQuery` para traer datos.
- [ ] Manejo loading/error/success.
- [ ] La respuesta está tipada con `interface` (cero `any`).
- [ ] Puedo explicar la diferencia con `useEffect` + `fetch` manual.

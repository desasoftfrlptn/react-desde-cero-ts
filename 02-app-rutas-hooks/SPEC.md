# Spec — Módulo 02 · Catálogo de libros (proyecto para hacer solo)

## Objetivo
Construir una app React + TypeScript (**TSX**) navegable para **listar, ver y crear libros**, aplicando rutas + hooks + container/presentational.

## Modelo de datos
`Libro { id: number · titulo: string · autor: string · genero: 'ficcion' | 'no-ficcion' | 'tecnico' }`

## Requisitos
- **R1** — `/` lista los libros (estado de carga incluido).
- **R2** — `/libros/:id` detalle (`useParams`).
- **R3** — `/nuevo` alta con **`useActionState`** (React 19).
- **R4** — Layout con `NavBar` + `<Outlet />`.

## Fuera de alcance
- Autenticación · Edición/borrado · Persistencia real (BD, los datos son mock).

## Criterios de aceptación
- [ ] Navego las 3 rutas.
- [ ] Separé **container** (estado/fetch) de **presentational** (props).
- [ ] Cero `any` (todas las props con `interface`).
- [ ] El formulario usa `useActionState` (no `onSubmit`).
- [ ] Entendí qué hace `<Outlet />` y por qué `key` es obligatoria.

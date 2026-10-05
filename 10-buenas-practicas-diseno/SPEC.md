# Spec — Módulo 10 · Catálogo de productos

> Especificación del proyecto del módulo. Leela ANTES de codear; es tu contrato de "qué construir".

---

## Objetivo

Construir una app React + TypeScript (**TSX**) navegable que liste un catálogo de productos **paginado**, aplicando buenas prácticas de diseño (arquitectura por feature, design system, mobile first) y recursos útiles (menú sandwich, paginación, componentes reutilizables).

## Modelo de datos

| Entidad | Campos |
|---|---|
| `Producto` | `id: number` · `nombre: string` · `precio: number` · `categoria: Categoria` · `stock: boolean` |
| `Categoria` | unión de literales: `'electronica' | 'hogar' | 'indumentaria'` |
| `Pagina<T>` | genérico: `items: T[]` · `total: number` · `pagina: number` · `totalPaginas: number` |

## Requisitos funcionales

- **R1** — `/` lista los productos con paginación (estado de carga incluido).
- **R2** — Paginación: navegar entre páginas, botones deshabilitados en los extremos.
- **R3** — Menú sandwich: oculto en móvil (botón ☰), siempre visible en desktop.
- **R4** — Layout mobile first: 1 columna en móvil, 2 en tablet, 3 en desktop.
- **R5** — Design system reutilizable: `Button`, `Badge`, `Card`.

## Arquitectura exigida

- **Screaming architecture**: el dominio vive en `features/productos/`.
- **Container/presentational**: `ProductosPage` (container) delega en `ProductosGrid`/`ProductoCard` (presentational).
- **Design system** en `components/ui/` (átomos y molécula).

## Fuera de alcance

- Detalle de producto (`/productos/:id`).
- Carrito, checkout, autenticación.
- Persistencia real (BD) — los datos son mock.
- Testing automatizado (se ve en un módulo posterior).

## Criterios de aceptación

- [ ] La app levanta con `pnpm dev` y navego el catálogo.
- [ ] La paginación funciona (3 páginas, extremos deshabilitados).
- [ ] El menú sandwich abre/cierra en móvil y queda fijo en desktop.
- [ ] Redimensionando la ventana, el grid pasa de 1 → 2 → 3 columnas.
- [ ] Separé container de presentational.
- [ ] Cero `any`: todas las props tipadas con `interface`.
- [ ] Los átomos del design system se reutilizan (no hay CSS duplicado en el feature).

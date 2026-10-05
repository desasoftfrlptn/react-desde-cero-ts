# Guía — Módulo 02 · Catálogo de libros

> **Backlog en orden.** Esta guía NO te da código: te obliga a **razonar** cada decisión. Si te trabás, mirá el código del módulo (la app "Panel de incidencias") como REFERENCIA — pero no lo copies: es otro dominio, tenés que adaptar el razonamiento.

## T-01 · Modelar el libro
**Objetivo:** decidir la forma del dato antes de tocar UI.
📝 **Nota de aprendizaje:** un `interface` es el **contrato** del dato. Decidí si `genero` es unión de literales o string libre, y justificá.
🧭 **Pistas:** ¿qué campos describen un libro? ¿`genero` es finito? (pensá en `EstadoIncidencia`).
⚠️ **Trampas:** tipar con `any`; usar `string` donde una unión evita errores de tipeo.
✔ **Hecho cuando:** tenés `Libro` tipado y sabés justificar cada tipo.

## T-02 · El mock como API
**Objetivo:** simular la fuente de datos.
📝 **Nota:** la capa de datos se aísla (`data.ts`) para que mañana la API real no toque la UI.
🧭 **Pistas:** `fetchLibros(): Promise<Libro[]>` con un `setTimeout` para ver el "Cargando…".
⚠️ **Trampas:** devolver los datos sincrónicamente (no verías el loading).
✔ **Hecho cuando:** `fetchLibros()` devuelve una Promise con 4+ libros.

## T-03 · Los presentationals
**Objetivo:** piezas que reciben props y dibujan.
📝 **Nota:** el presentational **no sabe** de dónde salen los datos; solo dibuja.
🧭 **Pistas:** `LibroCard` (un libro) y `LibroList` (recorre con `map` y `key`).
⚠️ **Trampas:** meter `fetch` adentro del presentational; olvidar la `key`.
✔ **Hecho cuando:** `LibroList` dibuja la lista sin lógica de carga.

## T-04 · El layout con Outlet
**Objetivo:** el esqueleto con menú.
📝 **Nota:** `<Outlet />` es el hueco donde React Router dibuja la ruta hija.
🧭 **Pistas:** `AppLayout` con `NavBar` (menú "Catálogo" y "Nuevo") + `<Outlet />`.
⚠️ **Trampas:** dibujar el menú en cada página (eso rompe el layout).
✔ **Hecho cuando:** el menú aparece en todas las páginas, sin repetirlo.

## T-05 · El container (listado)
**Objetivo:** la lógica del listado.
📝 **Nota:** el **container** tiene estado (`useState`) y efecto (`useEffect`); delega el dibujo.
🧭 **Pistas:** `useState<Libro[]>` + `useEffect` (con bandera `activo`) + `LibroList`.
⚠️ **Trampas:** setState tras desmontar; cargar en el presentational.
✔ **Hecho cuando:** la lista carga con "Cargando…" y delega el dibujo.

## T-06 · Ruta dinámica
**Objetivo:** ver un libro por id.
📝 **Nota:** `useParams()` lee el `:id` de la URL (siempre **string**, convertí con `Number`).
🧭 **Pistas:** `/libros/:id` + `useParams()` + estado "no encontrado".
⚠️ **Trampas:** olvidar que `id` viene como string.
✔ **Hecho cuando:** `/libros/2` muestra el libro y `/libros/999` avisa "no encontrado".

## T-07 · Formulario con Actions
**Objetivo:** dar de alta con React 19.
📝 **Nota:** `useActionState` reemplaza `onSubmit` + `preventDefault`; `useFormStatus` (de `react-dom`) da el `pending`.
🧭 **Pistas:** `<form action={formAction}>` + botón que use `useFormStatus`.
⚠️ **Trampas:** `onSubmit` manual; importar `useFormStatus` desde `react`.
✔ **Hecho cuando:** el alta usa `action` y el botón muestra "Enviando…".

## T-08 · Integrar y verificar
**Objetivo:** rutas + verificación final.
📝 **Nota:** la tabla de rutas conecta layout (padre) → páginas (hijas).
🧭 **Pistas:** `createBrowserRouter` + `RouterProvider`, igual que el módulo.
⚠️ **Trampas:** rutas apuntando a presentationals en vez de containers.
✔ **Hecho cuando:** cumplís TODOS los criterios de `SPEC.md`.

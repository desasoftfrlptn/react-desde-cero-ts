# Guía — Módulo 10 · Catálogo de productos

> **Backlog de desarrollo.** Trabajá las tareas EN ORDEN. Cada una trae su **nota de aprendizaje**: no la marques hecha hasta que puedas explicarla. No copies el código de `src/` — usalo solo si te trabás.

---

## T-01 · Modelar los datos

**Objetivo:** definir la forma del producto antes de tocar UI.

📝 **Nota de aprendizaje:** un `interface` es el **contrato** del dato. Un **genérico** (`Pagina<T>`) te permite reutilizar lógica para cualquier lista. Entender cuándo un campo pide una **unión de literales** (`categoria`) y por qué.

🧭 **Pistas:** ¿qué campos describe un producto? ¿`categoria` es libre o finita? Pensá en `EstadoIncidencia` del módulo 02.

⚠️ **Trampas:** tipar con `any`; usar `string` donde corresponde una unión; olvidar que `precio` es `number`.

✔ **Hecho cuando:** tenés `Producto`, `Categoria` y `Pagina<T>` tipados, sin `any`.

---

## T-02 · El mock con paginación

**Objetivo:** simular una API que devuelve **una página**, no todo.

📝 **Nota de aprendizaje:** la **paginación** se decide en la capa de datos, no en la UI. El frontend pide "dame la página N"; el backend (o mock) responde cuántas páginas hay.

🧭 **Pistas:** `slice()` sobre el array; `Math.ceil()` para el total de páginas. Devolvé un `Pagina<T>`.

⚠️ **Trampas:** devolver el array completo; calcular mal el `totalPaginas`; olvidar el delay para ver el "Cargando…".

✔ **Hecho cuando:** `fetchProductos(1)` devuelve 6 ítems y `totalPaginas: 3`.

---

## T-03 · El design system (átomos)

**Objetivo:** crear piezas reutilizables e independientes del dominio.

📝 **Nota de aprendizaje:** **atomic design** — un **átomo** no sabe del negocio (`Button` no conoce "producto"). **Composición sobre herencia**: un `Card` flexible con `children` vale más que 10 cards rígidas.

🧭 **Pistas:** `variant` como prop para variantes visuales; `children: ReactNode` en el `Card`.

⚠️ **Trampas:** meter nombres de dominio en los átomos; crear un `ButtonProducto` (eso NO es reutilizable).

✔ **Hecho cuando:** `Button`, `Badge` y `Card` funcionan sin importar el dominio.

---

## T-04 · El layout con menú sandwich

**Objetivo:** un header con menú hamburguesa responsive.

📝 **Nota de aprendizaje:** el **menú sandwich** es estado (`abierto/cerrado`) + CSS. En móvil la lista está oculta y un botón la abre; en desktop el CSS oculta el botón y muestra la lista. La lógica es un simple `useState`.

🧭 **Pistas:** `aria-expanded` en el botón (accesibilidad); `useState<boolean>`.

⚠️ **Trampas:** controlar el menú con CSS puro sin estado; olvidar `aria-*`; duplicar la lista para móvil y desktop.

✔ **Hecho cuando:** el menú abre/cierra en móvil y queda fijo en desktop.

---

## T-05 · Los presentationals del feature

**Objetivo:** dibujar el producto usando el design system.

📝 **Nota de aprendizaje:** **screaming architecture** — `ProductoCard` vive en `features/productos/`, no en `components/`. El presentational recibe **props** y compone átomos; el container hará el resto.

🧭 **Pistas:** `ProductoCard` usa `Card` + `Badge`; `ProductosGrid` recorre con `map` y usa `key`.

⚠️ **Trampas:** olvidar la `key` en `map`; meter `fetch` adentro del presentational.

✔ **Hecho cuando:** `ProductosGrid` dibuja la lista sin saber de dónde salen los datos.

---

## T-06 · El container con paginación

**Objetivo:** conectar estado, efecto y paginación.

📝 **Nota de aprendizaje:** el **container** es el que **sabe**: guarda `pagina` en `useState`, recarga con `useEffect` cuando cambia, y **delega** el dibujo. La paginación es estado del container, no del componente de paginación.

🧭 **Pistas:** `useEffect` depende de `[pagina]`; el componente `Paginacion` recibe `pagina`, `totalPaginas` y un callback.

⚠️ **Trampas:** `useEffect` sin `[pagina]` (nunca recarga); el componente de paginación con estado propio (eso rompe SRP).

✔ **Hecho cuando:** cambio de página → recarga la lista y los extremos se deshabilitan.

---

## T-07 · Mobile first (CSS)

**Objetivo:** estilos pensados para móvil, que se ensanchan.

📝 **Nota de aprendizaje:** **mobile first** = la base es móvil (1 columna, menú oculto) y los `media query` con `min-width` van **agregando** layout. Nunca al revés.

🧭 **Pistas:** `@media (min-width: 640px)` y `@media (min-width: 1024px)`.

⚠️ **Trampas:** usar `max-width` (al revés); diseñar desktop primero.

✔ **Hecho cuando:** redimensionando, el grid pasa 1 → 2 → 3 columnas y el menú cambia de modo.

---

## T-08 · Integrar rutas y verificar

**Objetivo:** conectar `router.tsx` + `main.tsx` y probar todo.

📝 **Nota de aprendizaje:** el **layout** (ruta padre) sostiene el menú; la ruta hija apunta al **container** del feature. La navegación no sabe de diseño de componentes.

🧭 **Pistas:** `createBrowserRouter` + `<Outlet />` (igual que el módulo 02).

⚠️ **Trampas:** rutas que apuntan a presentationals en vez del container.

✔ **Hecho cuando:** corrés la app y cumplís TODOS los criterios de `SPEC.md`.

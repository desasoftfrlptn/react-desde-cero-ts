# Módulo 02 — App con rutas y hooks (TSX)

> **Concepto:** construir una app React REAL con TypeScript: estructura de componentes, **navegación** (React Router v7) y **estado/efectos** (hooks de React 19). Todo en TSX — acá ya no hay "JSX suelto", **todo es TypeScript**.

> 🔗 **Engancha con el viernes:** retomamos el patrón **container/presentational** que ya investigaste y lo llevamos a una app navegable, con datos y formularios.

---

## 📖 Nota Académica

### 1. La estructura de una app (no es un archivo gigante)

En el módulo 01 teníamos un solo `App.tsx`. Una app real **se descompone por responsabilidad**:

| Carpeta | Qué va | Ejemplo |
|---|---|---|
| `src/layout/` | El "esqueleto" que se repite (menú, header) | `AppLayout.tsx` |
| `src/pages/` | Una pantalla por ruta | `HomePage`, `IncidenciaPage` |
| `src/components/` | Piezas reutilizables | `NavBar`, `IncidenciaCard` |
| `src/types.ts` | Los **tipos** (el contrato de datos) | `interface Incidencia` |
| `src/data.ts` | Capa de datos (hoy mock, mañana API) | `fetchIncidencias()` |

> **Regla de oro:** un componente por archivo, una responsabilidad por componente. Eso no es capricho — es **mantenibilidad** (Cap. 8, Clean Architecture en el Frontend).

### 2. Container / Presentational (lo del viernes, formalizado)

El patrón que investigaste el viernes ahora lo ves **aplicado de verdad**:

- **Presentational** (tonto): recibe datos por **props** y los dibuja. No tiene estado, no hace `fetch`. Ej: `IncidenciaList`, `IncidenciaCard`, `NavBar`.
- **Container** (inteligente): tiene **estado** y **efectos**, consigue los datos, y **delega** el dibujo al presentational. Ej: `HomePage`.

> **¿Por qué importa?** Si mañana cambiás la API por otra, tocás **solo el container**. El presentational ni se entera. Eso es **desacoplar lógica de presentación**.

### 3. Rutas con React Router v7

React Router v7 unificó todo en **un solo paquete**: `react-router` (ya no `react-router-dom`).

- **`createBrowserRouter` + `RouterProvider`**: definís la tabla de rutas una vez, fuera del render.
- **Rutas anidadas + `<Outlet />`**: el layout es una ruta *padre* que deja un hueco para la ruta *hija*.
- **`useParams()`**: lee la parte dinámica de la URL (`/incidencias/:id`).
- **`Link` / `NavLink`**: navegación declarativa (sin recargar la página).
- **`useNavigate()`**: navegación programática (ej. después de guardar un formulario).

### 4. Hooks: la gran diferencia con HTML estático

Un hook es una función que "engancha" tu componente al ciclo de vida de React.

| Hook | Qué resuelve | Estado / Efecto |
|---|---|---|
| `useState<T>()` | Guardar un valor que cambia con el tiempo | Estado |
| `useEffect()` | Correr código después de renderizar (fetch, suscripciones) | Efecto |

### 5. ⚡ Lo nuevo en React 19 (prestale atención a esto)

React 19 cambió varias reglas. **No uses la sintaxis vieja**:

- **Actions + `useActionState`**: reemplaza al `onSubmit` + `useState` manual para formularios. El formulario se envía con `action={...}` y React gestiona el estado *pending*. (Antes se llamaba `useFormState`, ya **no**).
- **`useFormStatus`** (desde `react-dom`): lee si el `<form>` padre está enviando (`pending`). Ideal para deshabilitar el botón.
- **`useOptimistic`**: mostrá el resultado esperado ANTES de que llegue la respuesta (UX instantánea).
- **`use()`**: lee una **Promise o un Context** directamente en el render (sin `useEffect`).
- **`useEffectEvent`**: lógica no reactiva dentro de un `useEffect` (sin agregarla a las dependencias).
- **`ref` como prop**: ya **no** se usa `forwardRef`. El `ref` es una prop más.
- **`<Context>` como provider**: ya no se escribe `<Context.Provider>`, se usa `<Context>` a secas.
- **React Compiler**: memoiza **automáticamente**. `useMemo` / `useCallback` / `React.memo` manuales están quedando obsoletos.

---

## 🛠️ Paso a Paso (guiado)

Vas a construir la app **"Panel de incidencias"** desde cero. No copies — escribí cada archivo y entendé qué hace.

### 0. Creá el proyecto

```bash
pnpm create vite 02-app-rutas-hooks --template react-ts
cd 02-app-rutas-hooks
pnpm install
pnpm add react-router        # ← v7, un solo paquete
pnpm dev                     # abrí http://localhost:5173
```

### 1. Definí los tipos (`src/types.ts`)

Antes de tocar UI, definí la **forma** de los datos:

```ts
export type EstadoIncidencia = 'abierta' | 'en-proceso' | 'resuelta'

export interface Incidencia {
  id: number
  titulo: string
  descripcion: string
  estado: EstadoIncidencia
  fecha: string
}
```

> 💡 **TypeScript-first:** el tipo es el contrato. Si después la API te devuelve otra cosa, el compilador te avisa antes de romper la UI.

### 2. Armá la capa de datos (`src/data.ts`)

Un mock que simula una API. La clave: `fetchIncidencias()` devuelve una **`Promise`** — mañana la reemplazás por un `fetch` real sin tocar el resto.

### 3. Componentes presentacionales (`src/components/`)

- `IncidenciaCard`: recibe `{ incidencia }` por props y la dibuja.
- `IncidenciaList`: recibe `{ incidencias }` y hace `.map()` (con `key`).
- `NavBar`: usa `NavLink` para marcar la ruta activa.

### 4. El layout (`src/layout/AppLayout.tsx`)

El esqueleto con `<NavBar />` + `<Outlet />`. El `<Outlet />` es el hueco donde entra la página según la URL.

### 5. El container (`src/pages/HomePage.tsx`)

Acá vive la lógica:

```tsx
const [incidencias, setIncidencias] = useState<Incidencia[]>([])
const [cargando, setCargando] = useState(true)

useEffect(() => {
  fetchIncidencias().then((datos) => {
    setIncidencias(datos)
    setCargando(false)
  })
}, [])
```

> Fijate: `useState` + `useEffect` en el **container**; `IncidenciaList` recibe los datos por **props**. Ese es el patrón.

### 6. Ruta dinámica (`src/pages/IncidenciaPage.tsx`)

```tsx
const { id } = useParams()                 // ← lee el :id de la URL
const incidencia = getIncidenciaById(Number(id))
```

### 7. Formulario con Actions (`src/pages/NuevaIncidenciaPage.tsx`)

```tsx
const [estado, formAction] = useActionState(crearIncidencia, { mensaje: '' })
// ...
<form action={formAction}> … </form>
```

> **React 19:** nada de `onSubmit` + `preventDefault`. El `action` gestiona todo.

### 8. Conectá las rutas (`src/router.tsx` + `src/main.tsx`)

`router.tsx` define la tabla de rutas; `main.tsx` monta `<RouterProvider router={router} />`.

### 9. Probá la navegación

- `/` → listado (con "Cargando…" mientras llega el mock).
- Clic en una incidencia → `/incidencias/:id` (detalle).
- `/nueva` → formulario (botón "Creando…" mientras envía).
- Escribí `/incidencias/999` a mano → estado "no encontrada".

---

## 📄 Código completo

Todo el código está en `src/`, **comentado didácticamente**. Estudiá cada archivo en este orden:

1. `types.ts` → el contrato de datos
2. `data.ts` → el mock (que mañana es la API)
3. `components/IncidenciaCard.tsx` → presentacional
4. `components/IncidenciaList.tsx` → presentacional
5. `components/NavBar.tsx` → navegación
6. `layout/AppLayout.tsx` → el esqueleto
7. `pages/HomePage.tsx` → **container** (estado + efecto)
8. `pages/IncidenciaPage.tsx` → ruta dinámica
9. `pages/NuevaIncidenciaPage.tsx` → **Actions de React 19**
10. `router.tsx` + `main.tsx` → el pegamento

---

## 🎯 Proyecto para hacer solo

Creá una app nueva llamada `02-biblioteca-practica` — un **catálogo de libros**:

1. Definí `interface Libro { id, titulo, autor, genero }` en `types.ts`.
2. Mock con **al menos 4 libros** en `data.ts` (con `fetchLibros(): Promise<Libro[]>`).
3. Ruta `/` que liste los libros (container con `useState` + `useEffect` + presentational `LibroList`).
4. Ruta dinámica `/libros/:id` con detalle (`useParams`).
5. Ruta `/nuevo` con formulario usando **`useActionState`** (React 19).
6. Un layout con `NavBar` (menú "Catálogo" y "Nuevo libro") y `<Outlet />`.

**Checklist:**
- [ ] `pnpm dev` levanta y navego entre las 3 rutas
- [ ] Separé **container** (estado/fetch) de **presentational** (props)
- [ ] Tipé TODAS las props con `interface` (cero `any`)
- [ ] El formulario usa `useActionState` (no `onSubmit` manual)
- [ ] Entendí qué hace `<Outlet />` y por qué `key` es obligatoria

---

## 🔗 Referencias

- React Router v7 (docs) — https://reactrouter.com
- React 19 (novedades) — https://react.dev/blog/2024/12/05/react-19
- React hooks — https://react.dev/reference/react/hooks
- TypeScript en React — https://react.dev/learn/typescript
- Container/Presentational — https://www.patterns.dev/react/presentational-container-pattern

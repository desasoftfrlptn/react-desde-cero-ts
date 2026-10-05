# Guía — Módulo 06 · Efectos y data fetching

> **Backlog en orden.** No marques hecha una tarea sin poder explicar su nota de aprendizaje.

## T-01 · useEffect + fetch manual
**Objetivo:** entender la versión "a pata" antes de la herramienta.
📝 **Nota:** `useEffect` sirve para **sincronizar** con sistemas externos (la red).
🧭 **Pistas:** `useEffect(() => { fetch(...).then(...) }, [])` con cleanup.
⚠️ **Trampas:** setState tras desmontar (usá bandera `activo` o cleanup).
✔ **Hecho cuando:** la lista carga con `useEffect` + `fetch`.

## T-02 · TanStack Query (useQuery)
**Objetivo:** el fetch moderno.
📝 **Nota:** TanStack Query maneja **caching, re-fetch, loading/error** por vos.
🧭 **Pistas:** `const { data, isLoading, error } = useQuery({ queryKey, queryFn })`.
⚠️ **Trampas:** mezclar `useEffect` manual con `useQuery`.
✔ **Hecho cuando:** los datos llegan vía `useQuery`.

## T-03 · Estados loading / error / success
**Objetivo:** UI clara para cada estado.
📝 **Nota:** todo fetch real tiene 3 estados — no mostrar solo el éxito.
🧭 **Pistas:** `if (isLoading)`, `if (error)`, else success.
⚠️ **Trampas:** solo mostrar "Cargando…" y olvidar el error.
✔ **Hecho cuando:** los 3 estados se ven en la UI.

## T-04 · Tipar la respuesta
**Objetivo:** el contrato de datos.
📝 **Nota:** la respuesta se tipa con `interface`; es el contrato de la API.
🧭 **Pistas:** `useQuery<Post[]>(...)`.
⚠️ **Trampas:** `any` en la respuesta.
✔ **Hecho cuando:** la respuesta está tipada, cero `any`.

## T-05 · Comparar y anotar
**Objetivo:** saber cuándo usar cada enfoque.
📝 **Nota:** `useEffect`+`fetch` es el fundamento; TanStack Query es la herramienta.
🧭 **Pistas:** anotá qué te dio TanStack "gratis" (caching, re-fetch).
⚠️ **Trampas:** no entender el porqué y solo copiar `useQuery`.
✔ **Hecho cuando:** podés explicar la diferencia en 2 renglones.

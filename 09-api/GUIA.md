# Guía — Módulo 09 · API e integración

> **Backlog en orden.** No marques hecha una tarea sin poder explicar su nota de aprendizaje.

## T-01 · Definir la interface desde el contrato
**Objetivo:** tipar la respuesta antes de consumirla.
📝 **Nota:** el **contrato OpenAPI** define la forma de los datos; el `interface` la materializa en el frontend.
🧭 **Pistas:** mirá el contrato (o el mock) y tipá campo por campo.
⚠️ **Trampas:** `any` en la respuesta; inventar campos que no existen.
✔ **Hecho cuando:** tenés la `interface` fiel al contrato.

## T-02 · Consumir con TanStack Query
**Objetivo:** traer los datos con la herramienta moderna.
📝 **Nota:** `useQuery` maneja caching y estados; tu backend FastAPI va a devolver esa misma forma.
🧭 **Pistas:** `useQuery<Tipo>({ queryKey: [...], queryFn: fetch... })`.
⚠️ **Trampas:** volver a `useEffect` + `fetch` manual sin razón.
✔ **Hecho cuando:** los datos llegan vía `useQuery`.

## T-03 · Loading / error / success
**Objetivo:** los tres estados en la UI.
📝 **Nota:** un fetch real SIEMPRE puede fallar — la UI debe contarlo.
🧭 **Pistas:** `isLoading`, `isError`, y el render condicional.
⚠️ **Trampas:** solo mostrar el éxito.
✔ **Hecho cuando:** se ven los 3 estados.

## T-04 · Error con mensaje claro
**Objetivo:** un error entendible, no un `console.log`.
📝 **Nota:** el usuario no ve la consola; mostrá un mensaje accionable.
🧭 **Pistas:** render condicional `if (isError)` con texto claro.
⚠️ **Trampas:** `console.log(error)` y listo.
✔ **Hecho cuando:** el error se ve en la UI con mensaje claro.

## T-05 · URL configurable
**Objetivo:** cambiar de mock a FastAPI sin tocar componentes.
📝 **Nota:** separar la **URL** (config) del **código** (componentes) es el puente a la M3.
🧭 **Pistas:** constante o variable de entorno (`API_URL`).
⚠️ **Trampas:** URL hardcodeada en cada `fetch`.
✔ **Hecho cuando:** cambio la URL en UN lugar y toda la app apunta al backend.

# Guía — Módulo 08 · Custom hooks

> **Backlog en orden.** No marques hecha una tarea sin poder explicar su nota de aprendizaje.

## T-01 · Identificar lógica duplicada
**Objetivo:** ver qué se repite.
📝 **Nota:** un custom hook comparte **lógica** (no UI) entre componentes.
🧭 **Pistas:** si dos componentes hacen `useEffect` + `fetch` casi igual, eso es un hook.
⚠️ **Trampas:** extraer un hook para una sola cosa (no es reutilizable).
✔ **Hecho cuando:** identificás la lógica duplicada.

## T-02 · useFetch<T>
**Objetivo:** el hook genérico.
📝 **Nota:** `useFetch<T>` devuelve datos tipados según el llamador.
🧭 **Pistas:** `function useFetch<T>(url: string)`.
⚠️ **Trampas:** hardcodear el tipo de respuesta (rompe la genericidad).
✔ **Hecho cuando:** el hook es genérico y funciona.

## T-03 · Devolver { datos, cargando, error }
**Objetivo:** la interfaz del hook.
📝 **Nota:** un buen hook expone el **estado completo** (datos + carga + error).
🧭 **Pistas:** tres `useState` o un solo estado objeto.
⚠️ **Trampas:** devolver solo los datos y esconder el error.
✔ **Hecho cuando:** el consumidor puede manejar los 3 estados.

## T-04 · Cleanup
**Objetivo:** evitar setState tras desmontar.
📝 **Nota:** el cleanup previene actualizaciones sobre un componente muerto.
🧭 **Pistas:** bandera `activo` + `return () => { activo = false }`.
⚠️ **Trampas:** olvidar el cleanup (warnings y bugs sutiles).
✔ **Hecho cuando:** no hay actualizaciones tras desmontar.

## T-05 · Reutilizar en 2 componentes
**Objetivo:** probar la reutilización real.
📝 **Nota:** la prueba de un hook es usarlo en **varios** componentes.
🧭 **Pistas:** dos endpoints distintos con el mismo `useFetch`.
⚠️ **Trampas:** usar el hook una sola vez (no demuestra nada).
✔ **Hecho cuando:** `useFetch` corre en 2+ componentes.

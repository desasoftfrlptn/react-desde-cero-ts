# Guía — Módulo 04 · Estado

> **Backlog en orden.** No marques hecha una tarea sin poder explicar su nota de aprendizaje.

## T-01 · Contador básico
**Objetivo:** un valor que cambia y re-renderiza.
📝 **Nota:** `useState<T>()` es la **memoria** del componente; cambia el estado → re-render.
🧭 **Pistas:** `useState<number>(0)`; actualizar con `setContador(contador + 1)`.
⚠️ **Trampas:** mutar sin setState; confundir props con estado.
✔ **Hecho cuando:** `+1` y `-1` actualizan la pantalla.

## T-02 · Historial inmutable
**Objetivo:** guardar cada valor sin mutar.
📝 **Nota:** el estado es **inmutable** — creá un array nuevo con spread, nunca `push`.
🧭 **Pistas:** `setHistorial([...historial, contador])`.
⚠️ **Trampas:** `historial.push(x)` (muta y rompe el re-render).
✔ **Hecho cuando:** el historial acumula valores correctamente.

## T-03 · Botón "deshacer"
**Objetivo:** volver al valor anterior.
📝 **Nota:** derivar el valor anterior desde el historial (no guardar dos estados que se desincronizan).
🧭 **Pistas:** `historial[historial.length - 2]` o mantener `ultimo`.
⚠️ **Trampas:** estados duplicados que se desincronizan.
✔ **Hecho cuando:** "deshacer" restaura el valor previo.

## T-04 · Verificar inmutabilidad
**Objetivo:** confirmar que entendiste el porqué.
📝 **Nota:** si mutás el estado, React **no detecta** el cambio (misma referencia).
🧭 **Pistas:** probá con `push` y mirá que no re-renderiza.
⚠️ **Trampas:** asumir que "funciona igual" mutando.
✔ **Hecho cuando:** podés explicar por qué `push` está mal.

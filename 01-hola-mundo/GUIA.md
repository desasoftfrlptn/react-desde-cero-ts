# Guía — Módulo 01 · Hola, mundo

> **Backlog en orden.** Corto, pero con lo esencial: entender el "arranque" de una app React.

## T-01 · Crear el proyecto
**Objetivo:** el scaffold desde el template.
📝 **Nota:** Vite + React + TS te dan la estructura base; no "magia", es una app mínima.
🧭 **Pistas:** `pnpm create vite 01-hola-mundo-practica --template react-ts`.
⚠️ **Trampas:** saltarse la verificación de Node (`node -v`).
✔ **Hecho cuando:** `pnpm dev` levanta en `localhost:5173`.

## T-02 · Identificar las 3 piezas
**Objetivo:** entender el flujo de arranque.
📝 **Nota:** `index.html` (`<div id="root">`) → `main.tsx` (`createRoot` + `render`) → `App.tsx` (el componente).
🧭 **Pistas:** abrí los 3 archivos y seguí el hilo.
⚠️ **Trampas:** no distinguir `createRoot` de `render`.
✔ **Hecho cuando:** podés explicar el flujo de arranque.

## T-03 · Escribir tu componente
**Objetivo:** el hola-mundo propio.
📝 **Nota:** un componente es una **función que devuelve JSX/TSX**.
🧭 **Pistas:** `App` con `<main>` + `<h1>` (nombre + legajo) + `<p>` (stack).
⚠️ **Trampas:** usar `<div>` en vez de `<main>`.
✔ **Hecho cuando:** veo tu nombre + legajo + stack.

## T-04 · Romperlo y arreglarlo
**Objetivo:** ver el error como aliado.
📝 **Nota:** TypeScript te marca el error ANTES de correr; aprendé a leerlo.
🧭 **Pistas:** escribí JSX mal a propósito (etiqueta sin cerrar) y mirá el mensaje.
⚠️ **Trampas:** ignorar los mensajes del editor.
✔ **Hecho cuando:** entendés qué error te mostraba y por qué.

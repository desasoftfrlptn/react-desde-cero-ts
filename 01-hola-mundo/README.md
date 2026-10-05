# Módulo 01 — Hola, mundo

> **Concepto:** el mínimo para ver algo en pantalla: `createRoot`, `render` y tu primer **componente**.

---

## 📖 Nota Académica

**¿Qué es un componente?** Una **función que devuelve JSX**. JSX se parece a HTML, pero es JavaScript (por eso el archivo termina en `.tsx`).

Tres piezas hacen que la app arranque:

| Pieza | Qué hace | Dónde |
|---|---|---|
| `index.html` | Tiene el `<div id="root">` vacío | raíz |
| `src/main.tsx` | `createRoot(...)` monta React ahí + `render(<App />)` lo dibuja | punto de entrada |
| `src/App.tsx` | El componente: una función que devuelve JSX | el contenido |

**El flujo:** `main.tsx` agarra el `<div id="root">`, le pone React adentro y le pide que dibuje `<App />`. `App` es una función que devuelve lo que ves.

> **TypeScript todavía no hace nada visible acá.** Recién aparece en serio cuando tipemos props (módulo 04) y estado (módulo 05). Por ahora, `.tsx` es JSX con superpoderes de tipado que van a pagar después.

---

## 🛠️ Paso a Paso

1. **Creá el proyecto** (ya viene con el scaffold Vite + React + TS):

```bash
pnpm create vite 01-hola-mundo --template react-ts
cd 01-hola-mundo
pnpm install
pnpm dev          # abrí http://localhost:5173
```

2. **Abrí `src/main.tsx`** e identificá las 3 cosas: `createRoot`, `render` y `<App />`.
3. **Abrí `src/App.tsx`** y cambiá el `<h1>Hola, mundo</h1>` por algo tuyo. Guardá y mirá cómo se actualiza solo (**hot reload**).
4. **Borrón y cuenta nueva:** borrá el contenido de `App.tsx` y volvé a escribirlo vos. Sentí que el componente es solo una función.

---

## 📄 Código completo

**`src/App.tsx`** — el componente:

```tsx
function App() {
  return (
    <main>
      <h1>Hola, mundo 👋</h1>
      <p>Este es mi primer componente React con TypeScript.</p>
    </main>
  )
}

export default App
```

**`src/main.tsx`** — el punto de entrada:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

> El `!` en `getElementById('root')!` es un **non-null assertion**: le dice a TypeScript "confiá, este elemento existe". Si lo sacás, TS te marca un error (porque `getElementById` puede devolver `null`). Ese es el primer destello del tipado trabajando para vos.

---

## 🎯 Proyecto para hacer solo

Creá un proyecto nuevo llamado `01-hola-mundo-practica`:

1. El componente `App` debe mostrar tu **nombre y legajo** en un `<h1>`.
2. Agregá un `<p>` con el **stack** que estás aprendiendo (React + TypeScript + Vite).
3. Usá **`<main>`** como contenedor raíz (HTML semántico desde el día 1).
4. Tip: escribí el JSX mal a propósito (ej. sin cerrar una etiqueta) y mirá qué error te muestra el editor.

**Checklist:**
- [ ] `pnpm dev` levanta en `localhost:5173`
- [ ] Veo mi nombre + legajo
- [ ] Usé `<main>` (no un `<div>`)
- [ ] Entendí que un componente es una función que devuelve JSX

---

## 📂 Docs del módulo

- **`SPEC.md`** → la especificación del proyecto.
- **`GUIA.md`** → el backlog con notas de aprendizaje.
- **`LECCIONES_APRENDIDAS.md`** → tu registro personal (en blanco, completalo).

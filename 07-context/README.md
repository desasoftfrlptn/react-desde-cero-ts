# Módulo 07 — Context (estado global)

> **Concepto:** compartir datos entre componentes lejanos sin pasar props por todos lados (prop drilling).
> **Estado:** 🔜 **spec** — lectura + videos + referencias. Vos hacés el 🎯 Proyecto solo.

---

## 📖 Lectura

| # | Tema | Tipo | Dónde |
|---|---|---|---|
| 1 | Pasar datos en profundidad con Context | **(O)** | 🌐 https://es.react.dev/learn/passing-data-deeply-with-context |
| 2 | Referencia de `createContext` / `useContext` | **(O)** | 🌐 https://es.react.dev/reference/react/createContext |

> ⚡ **React 19:** el **`<Context>` se usa directamente como provider** — ya no se escribe `<Context.Provider>`. Simplemente `<MiContext value={...}>`.
>
> 💡 **Ojo:** Context no es un reemplazo de todo. Para datos que cambian MUY seguido (ej. cada keystroke), a veces conviene el estado local o una librería de estado. Usá Context para datos "globales" estables: usuario, tema, idioma.

## 🎬 Videos (cortos y concretos)

- Fernando Herrera — *Context* (lección de la playlist): https://www.youtube.com/playlist?list=PL3x8UHsMKD3k1M-jf5_esxuzmTcqSYCTx

## 🔗 Referencias

- React docs (es) — https://es.react.dev/learn

---

## 🎯 Proyecto para hacer solo

Creá `07-context-practica` — un **tema claro/oscuro global**:

1. Creá un `ThemeContext` con `createContext`.
2. Un provider `<ThemeContext value={...}>` (sin `.Provider`).
3. Un botón en el layout que alterne claro/oscuro.
4. Varios componentes **lejanos** que lean el tema con `useContext`.

**Checklist:**
- [ ] Usé `<Context>` como provider (React 19, sin `.Provider`)
- [ ] Consumí con `useContext`
- [ ] Evité el prop drilling
- [ ] Entendí cuándo SÍ y cuándo NO usar Context

---

## 📂 Docs del módulo

- **`SPEC.md`** → la especificación del proyecto.
- **`GUIA.md`** → el backlog con notas de aprendizaje.
- **`LECCIONES_APRENDIDAS.md`** → tu registro personal (en blanco, completalo).

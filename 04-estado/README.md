# Módulo 04 — Estado (`useState` tipado)

> **Concepto:** memoria del componente: `useState` guarda valores que cambian y re-renderizan la UI.
> **Estado:** 🔜 **spec** — lectura + videos + referencias. Vos hacés el 🎯 Proyecto solo.

---

## 📖 Lectura

| # | Tema | Tipo | Dónde |
|---|---|---|---|
| 1 | El estado: la memoria de un componente | **(O)** | 🌐 https://es.react.dev/learn/state-a-components-memory |
| 2 | Referencia de `useState` (con tipado genérico) | **(O)** | 🌐 https://es.react.dev/reference/react/useState |
| 3 | Tipar el estado en TypeScript | **(O)** | 🌐 https://es.react.dev/learn/typescript |

> 💡 **Clave:** `useState<Tipo>()` tipa el estado. La regla de oro: **el estado debe tratarse como inmutable** — nunca hagas `estado.push(x)`, creá un array/objeto nuevo.
>
> ⚡ **React 19:** con el **React Compiler**, React memoiza automáticamente; ya no necesitás `useMemo`/`useCallback` a mano.

## 🎬 Videos (cortos y concretos)

- Fernando Herrera — *useState* (lección de la playlist): https://www.youtube.com/playlist?list=PL3x8UHsMKD3k1M-jf5_esxuzmTcqSYCTx

## 🔗 Referencias

- React docs (es) — https://es.react.dev/learn
- React Compiler — https://react.dev/learn/react-compiler

---

## 🎯 Proyecto para hacer solo

Creá `04-estado-practica` — un **contador con historial**:

1. Un botón `+1` y otro `-1` que modifiquen un `useState<number>`.
2. Un **historial** (`useState<number[]>`) que guarde cada valor — inmutable, con spread (`[...historial, nuevo]`).
3. Un botón "deshacer" que vuelva al valor anterior.
4. Tipá el estado explícitamente: `useState<number[]>([])`.

**Checklist:**
- [ ] El estado está tipado explícitamente
- [ ] Actualizo el estado de forma **inmutable** (nada de `push`)
- [ ] Entendí por qué el estado re-renderiza la UI
- [ ] Probé el React Compiler (sin `useMemo` manual)

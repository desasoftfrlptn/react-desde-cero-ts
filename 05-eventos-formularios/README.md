# Módulo 05 — Eventos y formularios (Actions)

> **Concepto:** responder al usuario (clicks, inputs) y manejar formularios con **Actions** de React 19.
> **Estado:** 🔜 **spec** — lectura + videos + referencias. Vos hacés el 🎯 Proyecto solo.

---

## 📖 Lectura

| # | Tema | Tipo | Dónde |
|---|---|---|---|
| 1 | Responder a eventos (tipos de evento) | **(O)** | 🌐 https://es.react.dev/learn/responding-to-events |
| 2 | Formularios con **Actions** (`useActionState`, `useFormStatus`) | **(O)** | 🌐 https://react.dev/reference/react/useActionState |
| 3 | `useFormStatus` (desde `react-dom`) | **(O)** | 🌐 https://react.dev/reference/react-dom/hooks/useFormStatus |

> ⚡ **React 19:** olvidate de `onSubmit` + `preventDefault` + `useState` manual. El `<form>` usa `action={...}` y React gestiona el estado *pending* por vos. `useActionState` reemplazó al viejo `useFormState`.

## 🎬 Videos (cortos y concretos)

- Fernando Herrera — *eventos y formularios* (lección de la playlist): https://www.youtube.com/playlist?list=PL3x8UHsMKD3k1M-jf5_esxuzmTcqSYCTx

## 🔗 Referencias

- React 19 (novedades) — https://react.dev/blog/2024/12/05/react-19
- React docs (es) — https://es.react.dev/learn

---

## 🎯 Proyecto para hacer solo

Creá `05-formulario-practica` — un **formulario de alta con validación**:

1. Un `<form>` con `action={formAction}` (no `onSubmit`).
2. Usá **`useActionState`** para guardar el resultado del envío.
3. Un botón que use **`useFormStatus`** para mostrar "Enviando…" (deshabilitado).
4. Tipá los eventos (`React.ChangeEvent<HTMLInputElement>`) si usás inputs controlados.

**Checklist:**
- [ ] El form usa `action={...}` (React 19, no `onSubmit`)
- [ ] Usé `useActionState` y `useFormStatus`
- [ ] Tipé los eventos correctamente
- [ ] Entendí qué reemplazó a `onSubmit` + `preventDefault`

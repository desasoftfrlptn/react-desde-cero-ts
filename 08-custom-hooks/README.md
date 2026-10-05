# Módulo 08 — Custom hooks

> **Concepto:** extraer lógica reutilizable en tus propios hooks (funciones que empiezan con `use`).
> **Estado:** 🔜 **spec** — lectura + videos + referencias. Vos hacés el 🎯 Proyecto solo.

---

## 📖 Lectura

| # | Tema | Tipo | Dónde |
|---|---|---|---|
| 1 | Reutilizar lógica con custom hooks | **(O)** | 🌐 https://es.react.dev/learn/reusing-logic-with-custom-hooks |
| 2 | Reglas de los hooks (por qué empiezan con `use`) | **(O)** | 🌐 https://es.react.dev/reference/rules/rules-of-hooks |

> 💡 **Clave:** un custom hook es una función normal que **adentro usa otros hooks**. La regla: **empieza con `use`** (React la valida así) y **no la llames dentro de condicionales/bucles**. Es la forma de compartir *lógica* (no UI) entre componentes.

## 🎬 Videos (cortos y concretos)

- Fernando Herrera — *custom hooks* (lección de la playlist): https://www.youtube.com/playlist?list=PL3x8UHsMKD3k1M-jf5_esxuzmTcqSYCTx

## 🔗 Referencias

- React docs (es) — https://es.react.dev/learn

---

## 🎯 Proyecto para hacer solo

Creá `08-custom-hooks-practica` — un hook de **fetch genérico**:

1. Extraé la lógica de `useEffect` + `fetch` en un `useFetch<T>(url)`.
2. Devolvé `{ datos, cargando, error }` (tipados genéricos con `<T>`).
3. Usalo en **dos** componentes distintos (dos endpoints).
4. Agregá cleanup para evitar actualizaciones tras desmontar.

**Checklist:**
- [ ] El hook empieza con `use` y usa hooks adentro
- [ ] Es **genérico** (`useFetch<T>`)
- [ ] Lo reutilicé en 2+ componentes
- [ ] Respeté las rules of hooks (nada de hooks en condicionales)

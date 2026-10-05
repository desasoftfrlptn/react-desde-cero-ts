# Módulo 06 — Efectos y data fetching

> **Concepto:** `useEffect` para sincronizar con el exterior; y **TanStack Query** para traer datos como un profesional.
> **Estado:** 🔜 **spec** — lectura + videos + referencias. Vos hacés el 🎯 Proyecto solo.

---

## 📖 Lectura

| # | Tema | Tipo | Dónde |
|---|---|---|---|
| 1 | Sincronizar con efectos (`useEffect`, cleanup) | **(O)** | 🌐 https://es.react.dev/learn/synchronizing-with-effects |
| 2 | Tal vez no necesités un efecto (⚠️ anti-patrones) | **(O)** | 🌐 https://es.react.dev/learn/you-might-not-need-an-effect |
| 3 | TanStack Query (data fetching moderno: caching, loading, error) | **(O)** | 🌐 https://tanstack.com/query/latest/docs/framework/react/overview |

> 💡 **Clave:** `useEffect` NO es para "correr código en cada render" — es para **sincronizar** con sistemas externos. Para traer datos, preferí **TanStack Query** (maneja caching, re-fetch, loading/error por vos). El `useEffect` + `fetch` manual es la versión "a pata" que conviene entender, no usar a ciegas.

## 🎬 Videos (cortos y concretos)

- Fernando Herrera — *useEffect* (lección de la playlist): https://www.youtube.com/playlist?list=PL3x8UHsMKD3k1M-jf5_esxuzmTcqSYCTx

## 🔗 Referencias

- TanStack Query — https://tanstack.com/query/latest
- React docs (es) — https://es.react.dev/learn

---

## 🎯 Proyecto para hacer solo

Creá `06-datos-practica` — consumí una API pública (ej. JSONPlaceholder):

1. Traé una lista con **TanStack Query** (`useQuery`).
2. Mostrá los tres estados: **loading**, **error**, **success**.
3. Compará: hacé lo mismo con `useEffect` + `fetch` manual y anotá la diferencia.
4. Tipá la respuesta con una `interface` (el contrato de datos).

**Checklist:**
- [ ] Usé TanStack Query (`useQuery`) para traer datos
- [ ] Manejo loading/error/success
- [ ] Tipé la respuesta con `interface`
- [ ] Entendí la diferencia con `useEffect` + `fetch` manual

---

## 📂 Docs del módulo

- **`SPEC.md`** → la especificación del proyecto.
- **`GUIA.md`** → el backlog con notas de aprendizaje.
- **`LECCIONES_APRENDIDAS.md`** → tu registro personal (en blanco, completalo).

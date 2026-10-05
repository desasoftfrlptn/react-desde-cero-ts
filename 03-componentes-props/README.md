# Módulo 03 — Componentes y props (tipadas)

> **Concepto:** componentes reutilizables que reciben datos por **props tipadas** con `interface`.
> **Estado:** 🔜 **spec** — lectura + videos + referencias. Vos hacés el 🎯 Proyecto solo.

---

## 📖 Lectura

| # | Tema | Tipo | Dónde |
|---|---|---|---|
| 1 | Pasar props a un componente (`interface`, valores por defecto) | **(O)** | 🌐 https://es.react.dev/learn/passing-props-to-a-component |
| 2 | Tipar props y componentes en TypeScript | **(O)** | 🌐 https://es.react.dev/learn/typescript |
| 3 | Patrón container/presentational | **(A)** | 🌐 https://www.patterns.dev/react/presentational-container-pattern |

> 💡 **Clave:** las props son de **solo lectura**. Un componente nunca muta sus props — si necesita cambiar algo, ese valor vive en un **estado** (módulo 04).

## 🎬 Videos (cortos y concretos)

- Fernando Herrera — *React: componentes y props* (primeras lecciones de la playlist): https://www.youtube.com/playlist?list=PL3x8UHsMKD3k1M-jf5_esxuzmTcqSYCTx

## 🔗 Referencias

- React docs (es) — https://es.react.dev/learn
- patterns.dev — https://www.patterns.dev/react

---

## 🎯 Proyecto para hacer solo

Extendé la app del módulo 02 (o creá `03-componentes-practica`):

1. Creá un componente `IncidenciaCard` que reciba **props tipadas** (`interface IncidenciaCardProps`).
2. Agregá una prop opcional con **valor por defecto** (ej. `destacada?: boolean = false`).
3. Usá `children` en un componente contenedor (ej. un `<Card>` que envuelva contenido).
4. Tipá **todo** — prohibido el `any`.

**Checklist:**
- [ ] Todas las props están tipadas con `interface`
- [ ] Usé `children` al menos una vez
- [ ] Ningún componente muta sus props
- [ ] Entendí por qué las props son de solo lectura

---

## 📂 Docs del módulo

- **`SPEC.md`** → la especificación del proyecto.
- **`GUIA.md`** → el backlog con notas de aprendizaje.
- **`LECCIONES_APRENDIDAS.md`** → tu registro personal (en blanco, completalo).

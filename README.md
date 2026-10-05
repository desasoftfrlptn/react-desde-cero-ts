# React desde cero — TypeScript

Curso práctico de **React + TypeScript**. **Un concepto por módulo, sin mezclar nada.**

> Versión TypeScript del curso `react-desde-cero`, alineada al **stack del TCI S32**. Pensado para que lo **forkees**, lo estudies a tu ritmo y recibas los cambios que la cátedra va sumando.

---

## 🧰 Stack

| Herramienta | Versión | Para qué |
|---|---|---|
| **React** | 19.3 | La librería de UI (Actions, `use`, ref as prop, Compiler) |
| **TypeScript** | 6+ (estricto) | Tipado estático: atrapa errores antes de correr |
| **Vite** | 8+ | Dev server con hot reload + build |
| **pnpm** | 12+ | Gestor de paquetes (rápido, determinista) |

> ⚠️ **Node ≥ 20.19** es obligatorio (Vite lo exige). Verificá con `node -v`.

---

## 📖 Filosofía

- **Todo es TypeScript (TSX).** No hay "JSX suelto": cada componente, prop y hook está tipado desde el día 1. TypeScript no es un extra, es el idioma.
- **Progresivo, sin mezclar.** El módulo 01 arranca mínimo; el 02 integra construcción + rutas + hooks; el 03 en adelante profundiza un concepto por spec.
- **No copies y pegues.** Escribí cada línea, rompela, fixeala, entendé qué pasa. Esa es la única forma de aprender de verdad.
- Cada módulo trae: **📖 Nota Académica** (el concepto) + **🛠️ Paso a Paso** (crealo desde cero) + **📄 Código completo** (comentado) + **🎯 Proyecto para hacer solo** (no es opcional).

---

## 📚 Módulos

| # | Módulo | Concepto | Estado |
|---|---|---|---|
| 01 | `01-hola-mundo` | Scaffold Vite + TS, `createRoot`, primer componente | ✅ |
| 02 | `02-app-rutas-hooks` | Construcción React + rutas (React Router v7) + hooks (React 19) | ✅ |
| 03 | `03-componentes-props` | Componentes tipados + props con `interface`, `children` | 🔜 spec |
| 04 | `04-estado` | `useState` tipado — estado local | 🔜 spec |
| 05 | `05-eventos-formularios` | Eventos tipados + formularios con Actions (React 19) | 🔜 spec |
| 06 | `06-datos-efectos` | `useEffect` + data fetching + TanStack Query | 🔜 spec |
| 07 | `07-context` | Context como provider + estado global | 🔜 spec |
| 08 | `08-custom-hooks` | Extraer lógica reutilizable en hooks propios | 🔜 spec |
| 09 | `09-api` | Tipos desde OpenAPI + integración con el backend | 🔜 spec |

> **Módulos 03–09:** son **specs detalladas** (lectura + videos + referencias), no guiados completos. Vos hacés el 🎯 Proyecto solo con esa guía. Los módulos **01 y 02** son guiados paso a paso.

> Los módulos se suman **de a poco**. Mantené tu fork sincronizado para recibirlos.

---

## 🔀 Cómo forkeá y recibí las actualizaciones (flujo upstream)

Este repo es el **upstream** (la fuente de verdad). Vos trabajás en **tu fork**.

```bash
# 1. Forkeá el repo desde GitHub (botón "Fork") → queda en TU cuenta

# 2. Cloná tu fork
git clone https://github.com/TU_USUARIO/react-desde-cero-ts.git
cd react-desde-cero-ts

# 3. Agregá el upstream (la cátedra) — solo una vez
git remote add upstream https://github.com/desasoftfrlptn/react-desde-cero-ts.git

# 4. Cada vez que la cátedra sume un módulo, recibí los cambios
git pull upstream main
```

**Regla de oro:** vos **recibís** del upstream y **trabajás** en tu fork. Nunca pusheés al upstream.

---

## 🚀 Cómo estudiar cada módulo

```bash
cd 01-hola-mundo
pnpm install
pnpm dev        # abrí http://localhost:5173
```

1. **Leé el `README.md`** del módulo — entendé el concepto con la Nota Académica.
2. **Seguí el Paso a Paso** — creá tu propio proyecto desde cero (no copies el de la carpeta).
3. **Compará con `src/`** — si te trabás, el código comentado te guía.
4. **Experimentá** — cambiá algo, rompelo, arreglalo.
5. **Hacé el 🎯 Proyecto para hacer solo** — no es opcional, es donde el concepto se graba.

---

## 📂 Estructura de cada módulo

```
NN-concepto/
├── README.md          ← LEÉ ESTO PRIMERO (Nota Académica + Paso a Paso + 🎯 Proyecto solo)
├── src/
│   ├── main.tsx       ← código comentado didácticamente
│   └── *.tsx          ← componentes tipados
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🎯 El orden importa

> *Proyecto N → enseña el concepto X. Proyecto N+1 → enseña Y (y repasa X sin explicarlo).*
> Completá los módulos en orden y hacé el 🎯 Proyecto solo antes de avanzar.

---

## 🔗 Referencias

- React docs (es) — https://es.react.dev/learn
- TypeScript Handbook — https://www.typescriptlang.org/docs/
- Vite — https://vite.dev/guide/
- Gentleman Programming Book — https://the-amazing-gentleman-programming-book.vercel.app/es

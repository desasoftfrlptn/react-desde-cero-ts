# Módulo 10 — Buenas prácticas de diseño frontend (React)

> **Concepto:** estructurar una app React **mantenible**: arquitectura, diseño de componentes y recursos útiles de UI. Todo aplicado con código TSX.
> **Tipo:** ✅ guiado completo (con código) + temas para el **MCQ**.

---

## 📖 Nota Académica

### Bloque A — Buenas prácticas de diseño

1. **Clean Architecture en el frontend.** Separar capas: **UI** (componentes) · **aplicación** (hooks, casos de uso) · **dominio** (tipos, reglas) · **infraestructura** (API, storage). La UI nunca habla directo con la BD: pasa por capas intermedias.
2. **Atomic design.** Componer de menor a mayor: **átomos** (`Button`, `Badge`) → **moléculas** (`Card`) → **organismos** (`ProductoCard`) → **templates** → **páginas**.
3. **Composición sobre herencia.** React no usa herencia de clases: se **compone** con `children` y props. Un componente flexible (que acepta `children`) es mejor que uno rígido.
4. **SOLID en React.** **SRP**: una responsabilidad por componente. **DIP**: depender de abstracciones (props) y no de implementaciones concretas.
5. **Screaming architecture.** Las carpetas "gritan" el dominio: `features/productos/`, no `components/cosas-sueltas/`.
6. **Container / presentational.** El patrón del módulo 02, ahora aplicado dentro de un feature.

### Bloque B — Recursos útiles

7. **Mobile first.** Diseñar primero para móvil; los `media query` con `min-width` van **ensanchando** el layout.
8. **Menú sandwich.** Menú hamburguesa: oculto en móvil, siempre visible en desktop.
9. **Paginación.** Dividir listas largas en páginas (no tirar 10.000 ítems de una).
10. **Componentes reutilizables.** Un mini design system (`Button`, `Badge`, `Card`) que el dominio reutiliza.

---

## 🛠️ Paso a Paso

El código completo está en `src/`, comentado didácticamente. Para **construirlo vos desde cero**, seguí el **`GUIA.md`** (backlog con notas de aprendizaje) — no copies: razoná cada tarea.

**Orden de lectura del código:**

1. `features/productos/types.ts` → el contrato (incluye el genérico `Pagina<T>`)
2. `features/productos/data.ts` → el mock con paginación
3. `components/ui/{Button,Badge,Card}.tsx` → el design system (átomos + molécula)
4. `components/MenuSandwich.tsx` + `components/Paginacion.tsx` → componentes reutilizables
5. `features/productos/{ProductoCard,ProductosGrid}.tsx` → presentationals
6. `features/productos/ProductosPage.tsx` → **container** (estado + paginación)
7. `app/AppLayout.tsx` + `router.tsx` + `main.tsx` → el pegamento
8. `index.css` → **mobile first** (base móvil + `min-width`)

---

## 🧠 Conceptos clave para el MCQ

- ¿Qué es **mobile first**? → diseñar para móvil primero; los `media query` usan `min-width`.
- ¿Qué capas tiene **Clean Architecture** en el frontend? → UI, aplicación, dominio, infraestructura.
- ¿Qué es un **átomo** vs una **molécula** (atomic design)? → átomo = pieza indivisible (Button); molécula = composición de átomos (Card).
- ¿Por qué **composición > herencia**? → React no hereda; compone con `children` y props.
- ¿Qué separa **container** de **presentational**? → lógica/estado/fetch vs. render por props.
- ¿Qué es la **paginación** y para qué? → dividir listas largas en páginas.
- ¿Qué pide **SRP** en un componente? → una sola responsabilidad.
- ¿Qué es **screaming architecture**? → carpetas que reflejan el dominio.

---

## 📚 Lectura · 🎬 Videos · 🔗 Referencias

| Tema | Dónde |
|---|---|
| Atomic design | 🌐 https://atomicdesign.bradfrost.com/ |
| Mobile first / responsive | 🌐 https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Responsive_Design |
| Composición (React) | 🌐 https://es.react.dev/learn/passing-props-to-a-component |
| Container/Presentational | 🌐 https://www.patterns.dev/react/presentational-container-pattern |

🎬 Fernando Herrera — *React de 0*: https://www.youtube.com/playlist?list=PL3x8UHsMKD3k1M-jf5_esxuzmTcqSYCTx

---

## 📂 Docs del módulo

- **`SPEC.md`** → la especificación del proyecto (catálogo de productos).
- **`GUIA.md`** → el backlog con notas de aprendizaje (para construir vos).
- **`LECCIONES_APRENDIDAS.md`** → tu registro personal (en blanco, completalo).

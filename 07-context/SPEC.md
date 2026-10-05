# Spec — Módulo 07 · Context (estado global)

## Objetivo
Compartir estado entre componentes lejanos con **Context**, sin prop drilling.

## Modelo de datos
- `ThemeContext` con valor `{ tema: 'claro' | 'oscuro', alternar: () => void }`.

## Requisitos
- **R1** — `createContext` para el contexto.
- **R2** — Provider usando **`<ThemeContext>`** a secas (React 19, sin `.Provider`).
- **R3** — Un botón en el layout que alterne el tema.
- **R4** — Componentes **lejanos** que lean el tema con `useContext`.

## Fuera de alcance
- Librerías de estado (Redux/Zustand) · Persistencia del tema.

## Criterios de aceptación
- [ ] Usé `<Context>` como provider (sin `.Provider`).
- [ ] Consumí con `useContext`.
- [ ] Evité el prop drilling.
- [ ] Entendí cuándo SÍ y cuándo NO usar Context.

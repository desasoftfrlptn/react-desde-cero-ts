# Spec — Módulo 04 · Estado (useState tipado)

## Objetivo
Manejar **estado local** con `useState` tipado, respetando la **inmutabilidad**.

## Modelo de datos
- `contador: number` · `historial: number[]`

## Requisitos
- **R1** — Contador con `+1` y `-1` usando `useState<number>`.
- **R2** — Un historial (`useState<number[]>`) que guarde cada valor.
- **R3** — Actualización **inmutable** (spread, sin `push`).
- **R4** — Botón "deshacer" que vuelve al valor anterior.

## Fuera de alcance
- Context / estado global (→ módulo 07) · `useReducer`.

## Criterios de aceptación
- [ ] El estado está tipado explícitamente.
- [ ] Actualizo de forma inmutable (nada de `push`).
- [ ] "Deshacer" restaura el valor anterior.
- [ ] Entendí por qué el estado re-renderiza la UI.

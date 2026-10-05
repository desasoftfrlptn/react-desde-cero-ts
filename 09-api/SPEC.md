# Spec — Módulo 09 · API e integración

## Objetivo
Consumir una API con **tipos derivados del contrato OpenAPI**, preparando el salto a FastAPI (M3).

## Modelo de datos
`interface` de la respuesta derivada del contrato OpenAPI (la forma del endpoint).

## Requisitos
- **R1** — Definir `interface` para la respuesta (tipos desde el contrato).
- **R2** — Consumir con **TanStack Query** (loading/error/success).
- **R3** — Manejar el **error** con mensaje claro (no un `console.log`).
- **R4** — **URL configurable**: fácil de apuntar del mock a FastAPI sin tocar componentes.

## Fuera de alcance
- Autenticación · Mutaciones (POST/PUT/DELETE complejos).

## Criterios de aceptación
- [ ] Tipé la respuesta desde el contrato (cero `any`).
- [ ] Manejo loading/error/success.
- [ ] La URL es configurable.
- [ ] Entendí qué es CORS y cuándo aparece.

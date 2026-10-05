# Spec — Módulo 05 · Eventos y formularios (Actions)

## Objetivo
Manejar eventos y formularios con **Actions** de React 19 (adiós `onSubmit` + `preventDefault`).

## Modelo de datos
`EstadoFormulario { mensaje: string }`

## Requisitos
- **R1** — Un `<form>` con `action={formAction}` (no `onSubmit`).
- **R2** — **`useActionState`** para guardar el resultado del envío.
- **R3** — Un botón con **`useFormStatus`** que muestre "Enviando…" y se deshabilite.
- **R4** — Eventos tipados (`React.ChangeEvent<HTMLInputElement>`) si usás inputs controlados.

## Fuera de alcance
- Validación compleja · Backend real (se simula el envío).

## Criterios de aceptación
- [ ] El form usa `action={...}` (no `onSubmit`).
- [ ] Usé `useActionState` y `useFormStatus`.
- [ ] Los eventos están tipados.
- [ ] Entendí qué reemplazó a `onSubmit` + `preventDefault`.

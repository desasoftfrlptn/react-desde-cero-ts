# Spec — Módulo 03 · Componentes y props (tipadas)

## Objetivo
Crear componentes reutilizables que reciben datos por **props tipadas** con `interface`.

## Modelo de datos
`Incidencia { id: number · titulo: string · estado: 'abierta' | 'en-proceso' | 'resuelta' }`

## Requisitos
- **R1** — `IncidenciaCard` recibe `{ incidencia }` tipado con `interface IncidenciaCardProps`.
- **R2** — Una prop opcional con valor por defecto (`destacada?: boolean`).
- **R3** — Un componente contenedor `Card` que recibe `children` (composición).
- **R4** — Patrón container/presentational aplicado.

## Fuera de alcance
- Estado local (→ módulo 04) · Eventos (→ módulo 05).

## Criterios de aceptación
- [ ] Todas las props tipadas con `interface` (cero `any`).
- [ ] Un componente usa `children`.
- [ ] Un componente se reutiliza 2+ veces.
- [ ] Ninguna prop se muta (las props son de solo lectura).

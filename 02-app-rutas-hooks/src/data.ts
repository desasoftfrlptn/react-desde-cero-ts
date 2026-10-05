// ============================================================
// Capa de datos (mock) — simula una API
// ============================================================
// Por ahora NO hay backend: estos datos están "hardcodeados".
// En la M3, `fetchIncidencias()` se reemplaza por un `fetch` real
// contra tu contrato (FastAPI o Prism mock). La firma no cambia.
// ============================================================

import type { Incidencia } from './types'

// Los datos de ejemplo, ya tipados con `Incidencia`.
const incidencias: Incidencia[] = [
  {
    id: 1,
    titulo: 'Filtro de agua sin funcionar',
    descripcion: 'El filtro del comedor comunitario dejó de purificar.',
    estado: 'abierta',
    fecha: '2026-09-28',
  },
  {
    id: 2,
    titulo: 'Faltan insumos de limpieza',
    descripcion: 'No hay detergente ni lavandina para el turno tarde.',
    estado: 'en-proceso',
    fecha: '2026-09-30',
  },
  {
    id: 3,
    titulo: 'Voluntario sin credencial',
    descripcion: 'El nuevo voluntario no tiene su credencial de acceso.',
    estado: 'resuelta',
    fecha: '2026-10-02',
  },
]

// Simula una llamada asíncrona (la red tarda). Devuelve una Promise.
// El `setTimeout` es solo para que veas el estado de "cargando…".
export function fetchIncidencias(): Promise<Incidencia[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(incidencias), 800)
  })
}

// Busca una incidencia por id. Devuelve `undefined` si no existe.
export function getIncidenciaById(id: number): Incidencia | undefined {
  return incidencias.find((incidencia) => incidencia.id === id)
}

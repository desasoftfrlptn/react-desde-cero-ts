// ============================================================
// IncidenciaList — PRESENTACIONAL
// ============================================================
// Recibe el array de incidencias por props y lo recorre.
// No sabe de dónde salen los datos ni cómo se cargan:
// eso es problema del CONTAINER (HomePage).
// ============================================================

import type { Incidencia } from '../types'
import { IncidenciaCard } from './IncidenciaCard'

interface IncidenciaListProps {
  incidencias: Incidencia[]
}

export function IncidenciaList({ incidencias }: IncidenciaListProps) {
  // Estado vacío: buena práctica mostrar algo cuando no hay datos.
  if (incidencias.length === 0) {
    return <p>No hay incidencias para mostrar.</p>
  }

  return (
    <ul className="incidencia-list">
      {/* `key` es obligatoria: le dice a React qué item cambió */}
      {incidencias.map((incidencia) => (
        <IncidenciaCard key={incidencia.id} incidencia={incidencia} />
      ))}
    </ul>
  )
}

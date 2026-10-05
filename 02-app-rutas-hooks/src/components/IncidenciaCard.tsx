// ============================================================
// IncidenciaCard — PRESENTACIONAL
// ============================================================
// Recibe TODO por props (nada de estado, nada de fetch).
// Es "tonta": le das una incidencia y la dibuja. Punto.
// ============================================================

import { Link } from 'react-router'
import type { Incidencia } from '../types'

// Las props van TIPADAS con `interface`. TypeScript te obliga
// a pasarle un objeto con la forma exacta de `Incidencia`.
interface IncidenciaCardProps {
  incidencia: Incidencia
}

export function IncidenciaCard({ incidencia }: IncidenciaCardProps) {
  return (
    <li className="incidencia-card">
      <Link to={`/incidencias/${incidencia.id}`}>{incidencia.titulo}</Link>
      <span className={`badge ${incidencia.estado}`}>{incidencia.estado}</span>
      <p>{incidencia.descripcion}</p>
    </li>
  )
}

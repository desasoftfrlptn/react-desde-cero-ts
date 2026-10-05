// ============================================================
// IncidenciaPage — ruta DINÁMICA (:id)
// ============================================================
// `useParams()` lee lo que vino en la URL (el `:id` de la ruta).
// Con eso buscamos la incidencia y la mostramos, o avisamos
// que no existe.
// ============================================================

import { Link, useParams } from 'react-router'
import { getIncidenciaById } from '../data'

export function IncidenciaPage() {
  // `id` viene como STRING (todo en la URL es texto).
  const { id } = useParams()
  const incidencia = getIncidenciaById(Number(id))

  // Ruta inválida (ej. /incidencias/999): estado "no encontrado".
  if (!incidencia) {
    return (
      <section>
        <h1>Incidencia no encontrada</h1>
        <p>Ese id no existe en la base.</p>
        <Link to="/">← Volver al inicio</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>{incidencia.titulo}</h1>
      <span className={`badge ${incidencia.estado}`}>{incidencia.estado}</span>
      <p>{incidencia.descripcion}</p>
      <p>
        <small>Registrada el {incidencia.fecha}</small>
      </p>
      <Link to="/">← Volver al inicio</Link>
    </section>
  )
}

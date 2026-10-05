// ============================================================
// HomePage — CONTAINER (el "inteligente")
// ============================================================
// Este es el lado CONTAINER del patrón container/presentational:
//   - tiene ESTADO (useState): qué datos mostrar + si está cargando
//   - tiene EFECTOS (useEffect): va a buscar los datos
//   - y DELEGA el dibujo a un componente presentacional (IncidenciaList)
// ============================================================

import { useEffect, useState } from 'react'
import type { Incidencia } from '../types'
import { fetchIncidencias } from '../data'
import { IncidenciaList } from '../components/IncidenciaList'

export function HomePage() {
  // Estado: la lista de incidencias (empieza vacía).
  const [incidencias, setIncidencias] = useState<Incidencia[]>([])
  // Estado: ¿todavía estamos cargando? (para mostrar "Cargando…").
  const [cargando, setCargando] = useState(true)

  // useEffect corre DESPUÉS de renderizar. Acá "disparamos" la carga.
  useEffect(() => {
    let activo = true // bandera anti race-condition (React 19 no la elimina)

    fetchIncidencias().then((datos) => {
      // Si el componente se desmontó antes de terminar, no actualizamos.
      if (activo) {
        setIncidencias(datos)
        setCargando(false)
      }
    })

    // Cleanup: al desmontar, `activo` pasa a false.
    return () => {
      activo = false
    }
  }, []) // [] = solo corre una vez al montar

  // UI mientras carga (estado de carga — clave para la M3).
  if (cargando) {
    return <p>Cargando incidencias…</p>
  }

  return (
    <section>
      <h1>Incidencias</h1>
      {/* El presentacional recibe los datos por props */}
      <IncidenciaList incidencias={incidencias} />
    </section>
  )
}

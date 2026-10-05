// ============================================================
// Tipos compartidos de la app — TODO en TypeScript (TSX)
// ============================================================
// Acá vive el "contrato" de los datos. En la M3, estos tipos
// van a salir de tu contrato OpenAPI. Por ahora los definimos a mano.
// ============================================================

// Una unión de literales: el estado solo puede ser uno de estos 3.
// Si escribís 'abiertas' (con s), TypeScript te lo marca ANTES de correr.
export type EstadoIncidencia = 'abierta' | 'en-proceso' | 'resuelta'

// La "forma" de una incidencia. `interface` es el contrato del objeto.
export interface Incidencia {
  id: number
  titulo: string
  descripcion: string
  estado: EstadoIncidencia
  fecha: string
}

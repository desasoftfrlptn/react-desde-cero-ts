// ============================================================
// types.ts — el contrato de datos del dominio "productos"
// ============================================================
// Screaming architecture: los tipos viven DENTRO de su feature.
// El dominio "grita" desde la estructura de carpetas.
// ============================================================

export type Categoria = 'electronica' | 'hogar' | 'indumentaria'

export interface Producto {
  id: number
  nombre: string
  precio: number
  categoria: Categoria
  stock: boolean
}

// Un tipo GENERICO para paginar CUALQUIER cosa.
// Reutilizable: sirve para productos, libros, incidencias…
export interface Pagina<T> {
  items: T[]
  total: number
  pagina: number
  totalPaginas: number
}

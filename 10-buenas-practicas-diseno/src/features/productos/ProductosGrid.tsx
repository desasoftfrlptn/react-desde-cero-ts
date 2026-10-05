// ============================================================
// ProductosGrid — PRESENTACIONAL (lista de cards)
// ============================================================
// Recibe el array y lo recorre. La `key` es OBLIGATORIA:
// le dice a React qué item cambió. Sin key, bugs sutiles.
// ============================================================

import type { Producto } from './types'
import { ProductoCard } from './ProductoCard'

interface ProductosGridProps {
  productos: Producto[]
}

export function ProductosGrid({ productos }: ProductosGridProps) {
  if (productos.length === 0) {
    return <p>No hay productos en esta página.</p>
  }

  return (
    <div className="productos-grid">
      {productos.map((producto) => (
        <ProductoCard key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

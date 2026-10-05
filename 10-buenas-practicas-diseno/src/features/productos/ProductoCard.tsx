// ============================================================
// ProductoCard — PRESENTACIONAL (compone átomos del design system)
// ============================================================
// No sabe nada de estado ni fetch. Recibe un Producto por props
// y lo dibuja usando los átomos reutilizables (Card + Badge).
// ============================================================

import type { Producto } from './types'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'

interface ProductoCardProps {
  producto: Producto
}

export function ProductoCard({ producto }: ProductoCardProps) {
  return (
    <Card>
      <h3>{producto.nombre}</h3>
      <Badge variant="categoria">{producto.categoria}</Badge>
      <p>${producto.precio.toLocaleString('es-AR')}</p>
      <Badge variant={producto.stock ? 'stock' : 'sin-stock'}>
        {producto.stock ? 'En stock' : 'Sin stock'}
      </Badge>
    </Card>
  )
}

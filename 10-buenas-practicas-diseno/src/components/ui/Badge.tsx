// ============================================================
// Badge — ÁTOMO reutilizable
// ============================================================
// Una etiqueta chica con "variantes" semánticas (stock, categoría).
// Composición > herencia: no creamos 3 componentes distintos,
// un solo Badge con una prop `variant`.
// ============================================================

import type { ReactNode } from 'react'

type BadgeVariant = 'stock' | 'sin-stock' | 'categoria'

interface BadgeProps {
  children: ReactNode
  variant: BadgeVariant
}

export function Badge({ children, variant }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>
}

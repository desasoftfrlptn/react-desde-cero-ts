// ============================================================
// Card — MOLÉCULA (composición con children)
// ============================================================
// Una molécula compone átomos. Acá la clave es `children`:
// la Card NO sabe qué va adentro, solo provee el contenedor.
// Eso es COMPOSICIÓN: flexible, sin herencia.
// ============================================================

import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return <article className={`card ${className}`}>{children}</article>
}

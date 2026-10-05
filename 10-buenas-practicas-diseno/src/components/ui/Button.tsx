// ============================================================
// Button — ÁTOMO (atomic design)
// ============================================================
// La pieza más chica e indivisible. No sabe nada del dominio:
// solo es un botón reutilizable con una variante visual.
// ============================================================

import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primario' | 'secundario'
  onClick?: () => void
  disabled?: boolean
  'aria-expanded'?: boolean
}

export function Button({
  children,
  variant = 'primario',
  onClick,
  disabled,
  'aria-expanded': ariaExpanded,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
      aria-expanded={ariaExpanded}
    >
      {children}
    </button>
  )
}

// ============================================================
// MenuSandwich — menú hamburguesa RESPONSIVE
// ============================================================
// En MÓVIL: la lista está oculta y un botón (☰) la abre/cierra.
// En DESKTOP: el CSS oculta el botón y muestra la lista siempre.
// La lógica es solo un `useState` (abierto/cerrado).
// ============================================================

import { useState } from 'react'
import { NavLink } from 'react-router'
import { Button } from './ui/Button'

export function MenuSandwich() {
  const [abierto, setAbierto] = useState(false)

  return (
    <nav className="menu-sandwich" aria-label="Navegación principal">
      {/* Botón hamburguesa: solo visible en móvil (el CSS lo oculta en desktop) */}
      <Button
        variant="secundario"
        onClick={() => setAbierto((prev) => !prev)}
        aria-expanded={abierto}
      >
        ☰ Menú
      </Button>

      <ul className={`menu-lista ${abierto ? 'abierto' : ''}`}>
        <li>
          <NavLink to="/" end>
            Catálogo
          </NavLink>
        </li>
        <li>
          <NavLink to="/ofertas">Ofertas</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  )
}

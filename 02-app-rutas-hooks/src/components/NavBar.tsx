// ============================================================
// NavBar — PRESENTACIONAL (no tiene estado, solo muestra)
// ============================================================
// Usa `NavLink`: es como `<a>`, pero React Router le agrega
// la clase `active` cuando la ruta coincide. Perfecto para
// marcar "dónde estoy" en el menú.
// ============================================================

import { NavLink } from 'react-router'

export function NavBar() {
  return (
    <nav className="nav">
      {/* `end` evita que "/" quede activa en todas las rutas */}
      <NavLink to="/" end className="nav-link">
        Inicio
      </NavLink>
      <NavLink to="/nueva" className="nav-link">
        Nueva incidencia
      </NavLink>
    </nav>
  )
}

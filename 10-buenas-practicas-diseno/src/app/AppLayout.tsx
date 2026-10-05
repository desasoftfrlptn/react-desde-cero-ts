// ============================================================
// AppLayout — el esqueleto (header con menú sandwich + contenido)
// ============================================================
// Ruta PADRE: siempre muestra el header y deja <Outlet /> para
// la ruta hija. El menú sandwich vive acá, en el layout.
// ============================================================

import { Outlet } from 'react-router'
import { MenuSandwich } from '../components/MenuSandwich'

export function AppLayout() {
  return (
    <div className="app">
      <header className="app-header">
        <span className="marca">Catálogo</span>
        <MenuSandwich />
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

// ============================================================
// AppLayout — el "esqueleto" de la app
// ============================================================
// Es una ruta PADRE: renderiza el menú siempre y deja un
// hueco (<Outlet />) donde React Router dibuja la ruta HIJA
// (Home, Detalle o Nueva) según la URL.
// ============================================================

import { Outlet } from 'react-router'
import { NavBar } from '../components/NavBar'

export function AppLayout() {
  return (
    <div>
      <NavBar />
      <main>
        {/* Acá se dibuja la página activa */}
        <Outlet />
      </main>
    </div>
  )
}

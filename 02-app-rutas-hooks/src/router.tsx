// ============================================================
// router.tsx — la tabla de rutas (React Router v7)
// ============================================================
// `createBrowserRouter` define TODAS las rutas en un solo lugar.
// Es el patrón "data router" moderno de v7.
// ============================================================

import { createBrowserRouter } from 'react-router'
import { AppLayout } from './layout/AppLayout'
import { HomePage } from './pages/HomePage'
import { IncidenciaPage } from './pages/IncidenciaPage'
import { NuevaIncidenciaPage } from './pages/NuevaIncidenciaPage'

export const router = createBrowserRouter([
  {
    // Ruta PADRE: el layout. Tiene hijos, que se dibujan en su <Outlet />.
    path: '/',
    Component: AppLayout,
    children: [
      // `index: true` = se muestra cuando la URL es exactamente "/".
      { index: true, Component: HomePage },
      // Ruta dinámica: `:id` captura lo que venga en esa posición.
      { path: 'incidencias/:id', Component: IncidenciaPage },
      { path: 'nueva', Component: NuevaIncidenciaPage },
    ],
  },
])

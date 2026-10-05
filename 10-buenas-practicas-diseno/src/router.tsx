// ============================================================
// router.tsx — tabla de rutas (React Router v7)
// ============================================================
// Screaming architecture: la ruta apunta al CONTAINER del feature.
// ============================================================

import { createBrowserRouter } from 'react-router'
import { AppLayout } from './app/AppLayout'
import { ProductosPage } from './features/productos/ProductosPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: ProductosPage },
      // "/ofertas" y "/contacto" existen en el menú, pero por ahora
      // no tienen página — React Router muestra su "no match".
    ],
  },
])

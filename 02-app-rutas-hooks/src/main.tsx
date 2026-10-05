// ============================================================
// main.tsx — punto de entrada
// ============================================================
// A diferencia del módulo 01 (donde montábamos <App />),
// ahora montamos un ROUTER: él decide qué página se ve según la URL.
// ============================================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './router'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

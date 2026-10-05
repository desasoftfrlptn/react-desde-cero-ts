// ============================================================
// ProductosPage — CONTAINER (el "inteligente")
// ============================================================
// Acá vive el ESTADO de la paginación y el EFECTO que trae la
// página de productos. DELEGA el dibujo a ProductosGrid y la
// navegación de páginas a Paginacion.
// ============================================================

import { useEffect, useState } from 'react'
import type { Producto } from './types'
import { fetchProductos } from './data'
import { ProductosGrid } from './ProductosGrid'
import { Paginacion } from '../../components/Paginacion'

export function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [pagina, setPagina] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)
  const [cargando, setCargando] = useState(true)

  // El efecto depende de `pagina`: cada vez que cambia, se recarga.
  // OJO: no reseteamos `cargando` acá — lo hacemos en el EVENTO (cambiarPagina).
  useEffect(() => {
    let activo = true

    fetchProductos(pagina).then((res) => {
      if (activo) {
        setProductos(res.items)
        setTotalPaginas(res.totalPaginas)
        setCargando(false)
      }
    })

    return () => {
      activo = false
    }
  }, [pagina]) // ← re-ejecuta cuando cambia la página

  // El "cargando" se activa en el EVENTO del usuario (cambiar página),
  // no en el efecto. Es más idiomático y evita renders en cascada.
  function cambiarPagina(nueva: number) {
    setCargando(true)
    setPagina(nueva)
  }

  if (cargando) {
    return <p>Cargando productos…</p>
  }

  return (
    <section>
      <h1>Catálogo de productos</h1>
      <ProductosGrid productos={productos} />
      <Paginacion
        pagina={pagina}
        totalPaginas={totalPaginas}
        onCambiarPagina={cambiarPagina}
      />
    </section>
  )
}

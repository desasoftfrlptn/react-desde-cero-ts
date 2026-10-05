// ============================================================
// Paginacion — componente REUTILIZABLE (no sabe de productos)
// ============================================================
// Recibe la página actual, el total, y un callback para cambiar.
// No conoce el dominio: sirve para paginar productos, libros, lo que sea.
// SRP: una sola responsabilidad — navegar páginas.
// ============================================================

interface PaginacionProps {
  pagina: number
  totalPaginas: number
  onCambiarPagina: (pagina: number) => void
}

export function Paginacion({ pagina, totalPaginas, onCambiarPagina }: PaginacionProps) {
  return (
    <nav className="paginacion" aria-label="Paginación">
      <button
        className="btn btn-secundario"
        onClick={() => onCambiarPagina(pagina - 1)}
        disabled={pagina <= 1}
      >
        ← Anterior
      </button>

      <span>
        Página {pagina} de {totalPaginas}
      </span>

      <button
        className="btn btn-secundario"
        onClick={() => onCambiarPagina(pagina + 1)}
        disabled={pagina >= totalPaginas}
      >
        Siguiente →
      </button>
    </nav>
  )
}

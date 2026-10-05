// ============================================================
// data.ts — capa de datos (mock) con PAGINACIÓN
// ============================================================
// Simula una API que pagina resultados: no devuelve "todos",
// devuelve una página. En la M3, acá iría un fetch real.
// ============================================================

import type { Pagina, Producto } from './types'

// Suficientes productos para que la paginación tenga sentido (3 páginas).
const productos: Producto[] = [
  { id: 1, nombre: 'Auriculares inalámbricos', precio: 12000, categoria: 'electronica', stock: true },
  { id: 2, nombre: 'Teclado mecánico', precio: 18000, categoria: 'electronica', stock: true },
  { id: 3, nombre: 'Mouse ergonómico', precio: 9000, categoria: 'electronica', stock: false },
  { id: 4, nombre: 'Monitor 24"', precio: 95000, categoria: 'electronica', stock: true },
  { id: 5, nombre: 'Cafetera eléctrica', precio: 22000, categoria: 'hogar', stock: true },
  { id: 6, nombre: 'Licuadora', precio: 15000, categoria: 'hogar', stock: false },
  { id: 7, nombre: 'Sartén antiadherente', precio: 11000, categoria: 'hogar', stock: true },
  { id: 8, nombre: 'Set de cubiertos', precio: 7000, categoria: 'hogar', stock: true },
  { id: 9, nombre: 'Remera básica', precio: 8000, categoria: 'indumentaria', stock: true },
  { id: 10, nombre: 'Campera impermeable', precio: 32000, categoria: 'indumentaria', stock: false },
  { id: 11, nombre: 'Zapatillas urbanas', precio: 28000, categoria: 'indumentaria', stock: true },
  { id: 12, nombre: 'Gorro de lana', precio: 5000, categoria: 'indumentaria', stock: true },
  { id: 13, nombre: 'Parlante bluetooth', precio: 14000, categoria: 'electronica', stock: true },
  { id: 14, nombre: 'Cargador rápido 65W', precio: 10000, categoria: 'electronica', stock: false },
  { id: 15, nombre: 'Robot de cocina', precio: 45000, categoria: 'hogar', stock: true },
  { id: 16, nombre: 'Aspiradora', precio: 25000, categoria: 'hogar', stock: true },
  { id: 17, nombre: 'Bufanda', precio: 6000, categoria: 'indumentaria', stock: true },
  { id: 18, nombre: 'Mochila 20L', precio: 16000, categoria: 'indumentaria', stock: true },
]

export const PRODUCTOS_POR_PAGINA = 6

// Devuelve UNA página de productos (no el array completo).
// La firma es idéntica a lo que devolvería un endpoint real.
export async function fetchProductos(pagina: number): Promise<Pagina<Producto>> {
  await new Promise((r) => setTimeout(r, 600)) // simula la red

  const inicio = (pagina - 1) * PRODUCTOS_POR_PAGINA
  const items = productos.slice(inicio, inicio + PRODUCTOS_POR_PAGINA)

  return {
    items,
    total: productos.length,
    pagina,
    totalPaginas: Math.ceil(productos.length / PRODUCTOS_POR_PAGINA),
  }
}

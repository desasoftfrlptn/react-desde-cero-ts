// ============================================================
// NuevaIncidenciaPage — formulario con ACTIONS (React 19)
// ============================================================
// Lo NUEVO de React 19: en vez de manejar el submit con
// `onSubmit` + `useState` a mano, usamos un ACTION:
//   - useActionState: ejecuta el action y guarda su resultado
//   - useFormStatus:  lee si el formulario está "pending" (cargando)
// ============================================================

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

// El "resultado" del action: un mensaje para mostrar al usuario.
interface EstadoFormulario {
  mensaje: string
}

// El ACTION: una función que recibe el estado previo y el FormData.
// React la llama cuando se envía el formulario. Acá iría el POST real.
async function crearIncidencia(
  _prev: EstadoFormulario,
  formData: FormData,
): Promise<EstadoFormulario> {
  // `formData.get('titulo')` lee el campo `<input name="titulo">`.
  const titulo = formData.get('titulo') as string
  const descripcion = formData.get('descripcion') as string

  // Simulamos la llamada al backend (en la M3: fetch POST).
  await new Promise((r) => setTimeout(r, 500))
  console.log('Creando:', { titulo, descripcion })

  // Lo que devolvamos acá se convierte en el NUEVO estado.
  return { mensaje: `Incidencia "${titulo}" creada ✓` }
}

// Componente chico que vive DENTRO del formulario para poder
// usar useFormStatus (lee el estado del <form> más cercano).
function BotonEnviar() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Creando…' : 'Crear incidencia'}
    </button>
  )
}

export function NuevaIncidenciaPage() {
  // [estado, formAction] — `formAction` va directo al `action` del <form>.
  const [estado, formAction] = useActionState(crearIncidencia, {
    mensaje: '',
  })

  return (
    <section>
      <h1>Nueva incidencia</h1>
      {/* `action={formAction}` reemplaza al clásico onSubmit */}
      <form action={formAction}>
        <label>
          Título
          <input name="titulo" required placeholder="Ej. Filtro roto" />
        </label>
        <label>
          Descripción
          <textarea name="descripcion" required rows={4} />
        </label>
        <BotonEnviar />
      </form>
      {estado.mensaje && <p role="status">{estado.mensaje}</p>}
    </section>
  )
}

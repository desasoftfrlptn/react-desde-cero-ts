# Guía — Módulo 05 · Eventos y formularios

> **Backlog en orden.** No marques hecha una tarea sin poder explicar su nota de aprendizaje.

## T-01 · Form con action (no onSubmit)
**Objetivo:** el formulario envía con un Action.
📝 **Nota:** React 19 reemplaza `onSubmit` + `preventDefault` por el prop `action` del `<form>`.
🧭 **Pistas:** `async function crearX(_prev, formData)` y `<form action={...}>`.
⚠️ **Trampas:** seguir con `onSubmit` + `preventDefault` (sintaxis vieja).
✔ **Hecho cuando:** el form envía sin `preventDefault` manual.

## T-02 · useActionState para el resultado
**Objetivo:** guardar el resultado del envío.
📝 **Nota:** `useActionState` reemplaza al viejo `useFormState`.
🧭 **Pistas:** `const [estado, formAction] = useActionState(accion, { mensaje: '' })`.
⚠️ **Trampas:** usar `useFormState` (deprecado).
✔ **Hecho cuando:** veo el mensaje de resultado tras enviar.

## T-03 · Botón con useFormStatus
**Objetivo:** mostrar "Enviando…" y deshabilitar.
📝 **Nota:** `useFormStatus` (desde `react-dom`) lee el `pending` del `<form>` padre.
🧭 **Pistas:** componente interno que use `useFormStatus()`.
⚠️ **Trampas:** importar `useFormStatus` desde `react` (es de `react-dom`).
✔ **Hecho cuando:** el botón se deshabilita y cambia a "Enviando…" durante el envío.

## T-04 · Tipar los eventos
**Objetivo:** inputs controlados con tipos correctos.
📝 **Nota:** cada evento tiene su tipo (`React.ChangeEvent<HTMLInputElement>`).
🧭 **Pistas:** si usás `value` + `onChange`, tipá el handler.
⚠️ **Trampas:** `any` en los eventos; olvidar el tipo del elemento.
✔ **Hecho cuando:** los handlers están tipados, cero `any`.

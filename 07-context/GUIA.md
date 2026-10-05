# Guía — Módulo 07 · Context

> **Backlog en orden.** No marques hecha una tarea sin poder explicar su nota de aprendizaje.

## T-01 · createContext
**Objetivo:** crear el contexto del tema.
📝 **Nota:** Context resuelve el **prop drilling**: datos que atraviesan muchos niveles.
🧭 **Pistas:** `const ThemeContext = createContext<TemaContext>(...)`.
⚠️ **Trampas:** usar Context para TODO (no es un cajón de sastre).
✔ **Hecho cuando:** el contexto está creado y tipado.

## T-02 · Provider (React 19)
**Objetivo:** proveer el valor.
📝 **Nota:** React 19 usa **`<ThemeContext value={...}>`** — sin `.Provider`.
🧭 **Pistas:** `<ThemeContext value={{ tema, alternar }}>`.
⚠️ **Trampas:** escribir `<ThemeContext.Provider>` (sintaxis vieja).
✔ **Hecho cuando:** el provider envuelve la app sin `.Provider`.

## T-03 · Botón alternar
**Objetivo:** cambiar el tema global.
📝 **Nota:** el estado del tema vive en el provider (un solo lugar).
🧭 **Pistas:** `useState<'claro' | 'oscuro'>` + `alternar`.
⚠️ **Trampas:** duplicar el estado del tema en cada componente.
✔ **Hecho cuando:** el botón cambia el tema de toda la app.

## T-04 · useContext en componentes lejanos
**Objetivo:** leer el tema sin props.
📝 **Nota:** `useContext(ThemeContext)` reemplaza pasar `tema` por props.
🧭 **Pistas:** componentes NO relacionados (header, footer, card) leen el contexto.
⚠️ **Trampas:** seguir pasando el tema por props (eso es el problema).
✔ **Hecho cuando:** componentes lejanos leen el tema con `useContext`.

## T-05 · Cuándo usar Context
**Objetivo:** criterio de uso.
📝 **Nota:** Context es para datos globales **estables** (tema, usuario, idioma), no para lo que cambia a cada keystroke.
🧭 **Pistas:** pensá si el valor cambia mucho (→ estado local) o poco (→ Context).
⚠️ **Trampas:** meter el estado de un formulario en Context.
✔ **Hecho cuando:** podés explicar cuándo SÍ y cuándo NO.

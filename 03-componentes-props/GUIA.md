# Guía — Módulo 03 · Componentes y props

> **Backlog en orden.** No marques hecha una tarea sin poder explicar su nota de aprendizaje.

## T-01 · Modelar los datos
**Objetivo:** definir la forma de la incidencia antes de tocar UI.
📝 **Nota:** un `interface` es el **contrato** del dato.
🧭 **Pistas:** ¿qué campos? ¿`estado` es unión de literales o string libre? Pensá en `EstadoIncidencia`.
⚠️ **Trampas:** tipar con `any`; usar `string` donde va una unión.
✔ **Hecho cuando:** tenés `Incidencia` tipada, sin `any`.

## T-02 · IncidenciaCard con props tipadas
**Objetivo:** crear el presentational que recibe `{ incidencia }`.
📝 **Nota:** las props se declaran con `interface` y son de **solo lectura**.
🧭 **Pistas:** `interface IncidenciaCardProps { incidencia: Incidencia }`.
⚠️ **Trampas:** mutar la prop dentro del componente.
✔ **Hecho cuando:** `IncidenciaCard` dibuja una incidencia pasada por props.

## T-03 · Prop opcional con valor por defecto
**Objetivo:** agregar flexibilidad sin romper usos previos.
📝 **Nota:** una prop opcional (`destacada?: boolean`) permite default.
🧭 **Pistas:** desestructurá con `destacada = false`.
⚠️ **Trampas:** hacer la prop obligatoria y romper componentes existentes.
✔ **Hecho cuando:** la card funciona con y sin la prop `destacada`.

## T-04 · Card con children (composición)
**Objetivo:** un contenedor flexible que envuelve contenido.
📝 **Nota:** **composición > herencia** — `children` hace al componente reutilizable.
🧭 **Pistas:** `interface CardProps { children: ReactNode }`.
⚠️ **Trampas:** hacer un `Card` rígido que no acepta `children`.
✔ **Hecho cuando:** `Card` envuelve contenido variado sin modificarse.

## T-05 · Componer y verificar
**Objetivo:** integrar todo en `App` y chequear criterios.
📝 **Nota:** el presentational se compone, no se hereda.
🧭 **Pistas:** `IncidenciaCard` dentro de `Card`, reutilizado 2+ veces.
⚠️ **Trampas:** copiar y pegar en vez de reutilizar.
✔ **Hecho cuando:** cumplís TODOS los criterios de `SPEC.md`.

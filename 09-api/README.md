# Módulo 09 — API e integración (tipos desde OpenAPI)

> **Concepto:** consumir tu backend real, con **tipos derivados del contrato OpenAPI**.
> **Estado:** 🔜 **spec** — lectura + videos + referencias. Vos hacés el 🎯 Proyecto solo.

---

## 📖 Lectura

| # | Tema | Tipo | Dónde |
|---|---|---|---|
| 1 | Fetch API (métodos, headers, errores, estados de carga, CORS) | **(O)** | 🌐 https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch |
| 2 | CORS (por qué "en mi máquina andaba") | **(O)** | 🌐 https://developer.mozilla.org/es/docs/Web/HTTP/CORS |
| 3 | TanStack Query contra una API real | **(O)** | 🌐 https://tanstack.com/query/latest/docs/framework/react/overview |

> 💡 **Clave de la M3:** tu **contrato OpenAPI** define la forma de los datos. Esos tipos se **materializan** en el frontend: la respuesta del mock es el tipo de tu `useState`/`useQuery`. FastAPI (que arrancás el viernes 16) **genera ese OpenAPI automáticamente** — tu backend *es* el contrato.

## 🎬 Videos (cortos y concretos)

- Fernando Herrera — *fetch / consumo de API* (lección de la playlist): https://www.youtube.com/playlist?list=PL3x8UHsMKD3k1M-jf5_esxuzmTcqSYCTx

## 🔗 Referencias

- TanStack Query — https://tanstack.com/query/latest
- MDN Fetch — https://developer.mozilla.org/es/docs/Web/API/Fetch_API

---

## 🎯 Proyecto para hacer solo

Creá `09-api-practica` — conectá el frontend al **contrato**:

1. Definí `interface` para la respuesta de tu API (tipos derivados del contrato OpenAPI).
2. Consumíla con **TanStack Query** (loading/error/success).
3. Manejo el **error** con un mensaje claro (no un `console.log`).
4. Preparalo para el backend real: cambiá la URL del mock por la de FastAPI sin tocar componentes.

**Checklist:**
- [ ] Tipé la respuesta desde el contrato (cero `any`)
- [ ] Manejo loading/error/success
- [ ] La URL es configurable (fácil de apuntar a FastAPI)
- [ ] Entendí qué es CORS y cuándo aparece

---

## 📂 Docs del módulo

- **`SPEC.md`** → la especificación del proyecto.
- **`GUIA.md`** → el backlog con notas de aprendizaje.
- **`LECCIONES_APRENDIDAS.md`** → tu registro personal (en blanco, completalo).

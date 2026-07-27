# CARDIORAN — Sitio web

Sitio web de **CARDIORAN · Salud Cardiovascular**, consultorio interdisciplinario de
cardiología del **Dr. Ramiro Nieto** en Concepción, Tucumán.

Construido con **Next.js 15 (App Router)**, **TypeScript** y **Tailwind CSS v4**.

## Requisitos

- Node.js 18.18 o superior (recomendado 20+)

## Puesta en marcha

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Scripts

| Comando         | Descripción                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desarrollo             |
| `npm run build` | Compilación de producción          |
| `npm start`     | Sirve la compilación de producción |

> Nota: no ejecutar `npm run build` mientras `npm run dev` está activo — comparten la
> carpeta `.next` y se corrompe. Detener el dev server primero.

## Estructura

```
app/
  layout.tsx              Layout global (header, footer, botón de WhatsApp)
  page.tsx                Inicio
  servicios/page.tsx      Servicios y estudios cardiológicos
  nosotros/page.tsx       El profesional
  contacto/page.tsx       Datos, mapa y botones de WhatsApp
  icon.png                Favicon (corazón del logo)
  components/             Header, Footer, Logo, WhatsAppButton
  globals.css             Tema: colores de marca y verde accesible
lib/
  data.ts                 Datos del consultorio, servicios y profesional
public/imagenes/
  cardioran-logo.png      Logo oficial (fondo transparente)
```

## Personalización

Casi todo el contenido está centralizado en **`lib/data.ts`**: nombre, teléfono,
WhatsApp, dirección, horarios, servicios y datos del profesional.

Los colores de marca están en `app/globals.css` (variables `--color-brand-*`).

### Turnos

Los turnos se gestionan **exclusivamente por WhatsApp**. Los botones usan los enlaces
`whatsappLink` (turnos) y `whatsappConsultaLink` (consultas generales) de `lib/data.ts`,
con el mensaje pre-cargado.

### Accesibilidad

El verde de los botones de WhatsApp (`--color-wa-500`) **no es** el verde oficial
`#25D366`: ese tono no alcanza el contraste mínimo (4.5:1) con texto blanco. Se usa
`#15803D`, que sí cumple WCAG AA. Auditoría Lighthouse: accesibilidad, buenas prácticas
y SEO en 100; rendimiento 97-99.

## Pendientes

- [ ] Foto real del Dr. Ramiro Nieto (hoy hay un marcador con las iniciales «RN»)
- [ ] Email de contacto del consultorio (por ahora el contacto es solo por WhatsApp)

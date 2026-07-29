import Script from "next/script";

/** Measurement ID de Google Analytics 4 del consultorio. */
export const GA_MEASUREMENT_ID = "G-K7RW16SYR4";

/**
 * Google Analytics 4.
 *
 * Se carga con `next/script` y estrategia `afterInteractive`, que es la forma
 * recomendada en Next.js: el script se inyecta apenas la página es interactiva,
 * sin bloquear el renderizado inicial. Poner el snippet crudo en el <head>
 * retrasaría la primera pintura.
 *
 * Al vivir en el layout raíz, se aplica a todas las páginas del sitio, y GA4
 * registra por sí solo la navegación entre ellas.
 *
 * Sólo se carga en producción: así las visitas de `npm run dev` no ensucian
 * las estadísticas reales.
 */
export default function Analytics() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

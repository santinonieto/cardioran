"use client";

import { useEffect } from "react";

/**
 * Registra en Google Analytics 4 los clics que terminan en un contacto:
 *  - `clic_whatsapp`: cualquier enlace a wa.me (botón flotante, turnos, etc.)
 *  - `clic_telefono`: enlaces tel:
 *
 * Un solo listener para todo el sitio: no hay que tocar cada botón. Parámetros:
 *  - `ubicacion`: el aria-label o el texto del enlace (para saber cuál botón fue)
 *  - `estudio`: el slug del estudio, si el enlace tiene `data-estudio`
 *  - `pagina`: la ruta donde se hizo el clic
 *
 * Si gtag.js todavía no terminó de cargar, el evento queda en `dataLayer` y se
 * envía cuando carga (es la misma cola que usa el snippet oficial).
 * Para verlos como conversiones: en GA4, Administrar > Eventos > marcar
 * `clic_whatsapp` como evento clave.
 */
type ConDataLayer = Window & { dataLayer?: unknown[] };

export default function SeguimientoClics() {
  useEffect(() => {
    function gtag(...args: unknown[]) {
      const w = window as ConDataLayer;
      w.dataLayer = w.dataLayer || [];
      // gtag espera el objeto `arguments`, no un array.
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments);
      void args;
    }

    function alHacerClic(e: MouseEvent) {
      const enlace = (e.target as Element | null)?.closest?.("a");
      if (!enlace) return;
      const href = enlace.getAttribute("href") || "";
      const evento = href.includes("wa.me/")
        ? "clic_whatsapp"
        : href.startsWith("tel:")
          ? "clic_telefono"
          : null;
      if (!evento) return;

      const ubicacion = (
        enlace.getAttribute("aria-label") ||
        enlace.textContent ||
        ""
      )
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 80);

      gtag("event", evento, {
        ubicacion,
        estudio: enlace.dataset.estudio || "",
        pagina: window.location.pathname,
      });
    }

    document.addEventListener("click", alHacerClic, { capture: true });
    return () => document.removeEventListener("click", alHacerClic, { capture: true });
  }, []);

  return null;
}

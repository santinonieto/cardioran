"use client";

import { useEffect, useState } from "react";
import { aviso, clinica } from "@/lib/data";

/**
 * Barra de aviso temporal arriba de todo el sitio (ver `aviso` en lib/data.ts).
 *
 * La fecha se compara en el navegador, no al compilar: el sitio es estático y,
 * si se comparara al compilar, el aviso no se ocultaría solo al pasar la fecha.
 * Hasta que el navegador la evalúa no se muestra nada, así que sin JavaScript
 * el aviso simplemente no aparece (el resto del sitio no depende de él).
 */
export default function Aviso() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!aviso.texto.trim()) return;
    const hasta = Date.parse(aviso.hasta);
    if (Number.isNaN(hasta) || Date.now() > hasta) return;
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-brand-700 px-4 py-2.5 text-center text-sm text-white">
      <span className="font-medium">{aviso.texto}</span>{" "}
      <a
        href={clinica.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline underline-offset-2 hover:text-brand-100"
      >
        Pedí tu turno por WhatsApp
      </a>
    </div>
  );
}

import type { MetadataRoute } from "next";
import { clinica } from "@/lib/data";

/**
 * Mapa del sitio para Google (se sirve en /sitemap.xml).
 * Al agregar una página nueva, sumarla acá y reenviar el sitemap en
 * Google Search Console.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paginas = [
    { ruta: "", prioridad: 1 },
    { ruta: "/servicios", prioridad: 0.9 },
    { ruta: "/nosotros", prioridad: 0.7 },
    { ruta: "/contacto", prioridad: 0.8 },
  ];
  const fecha = new Date();
  return paginas.map((p) => ({
    url: `${clinica.sitio}${p.ruta}`,
    lastModified: fecha,
    changeFrequency: "monthly",
    priority: p.prioridad,
  }));
}

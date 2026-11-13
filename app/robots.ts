import type { MetadataRoute } from "next";
import { clinica } from "@/lib/data";

/** Permite indexar todo el sitio e indica dónde está el mapa (se sirve en /robots.txt). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${clinica.sitio}/sitemap.xml`,
    host: clinica.sitio,
  };
}

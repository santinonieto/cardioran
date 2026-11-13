import Image from "next/image";
import { galeria } from "@/lib/data";
import Reveal from "./Reveal";

/**
 * Galería "El consultorio": fotos reales del lugar.
 * Todas se recortan a la misma proporción (3:4) para que la grilla quede pareja;
 * `posicion` de cada foto define qué parte se conserva al recortar.
 * Las sirve next/image (en Netlify, por su Image CDN) en el tamaño justo.
 */
export default function Galeria({
  titulo = "El consultorio",
  bajada = "Conocé el lugar antes de tu turno: estudios y consultas en un mismo espacio, en Concepción.",
}: {
  titulo?: string;
  bajada?: string;
}) {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-ink-900">{titulo}</h2>
        <p className="mt-4 text-slate-600">{bajada}</p>
      </div>
      <Reveal className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {galeria.map((f) => (
          <figure
            key={f.src}
            className="card-hover overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(min-width: 1024px) 360px, 50vw"
                className="object-cover"
                style={f.posicion ? { objectPosition: f.posicion } : undefined}
              />
            </div>
            <figcaption className="px-4 py-3 text-sm font-medium text-ink-900">
              {f.titulo}
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </div>
  );
}

import Reveal from "./Reveal";
import { clinica, testimonios } from "@/lib/data";

/**
 * Reseñas reales de pacientes publicadas en Google.
 *
 * Si no hay ninguna cargada, la sección entera no se renderiza: publicar
 * testimonios inventados en un sitio médico induciría a error a los pacientes.
 */
function Estrellas({ cantidad }: { cantidad: number }) {
  // role="img" + aria-label: sin un role válido, aria-label sobre un div está
  // prohibido por la especificación ARIA y los lectores de pantalla lo ignoran.
  return (
    <div
      role="img"
      aria-label={`${cantidad} de 5 estrellas`}
      className="text-brand-500"
    >
      <span aria-hidden="true" className="tracking-[0.15em]">
        {"★".repeat(cantidad)}
        <span className="text-slate-200">{"★".repeat(5 - cantidad)}</span>
      </span>
    </div>
  );
}

export default function Testimonios() {
  const visibles = testimonios.filter(
    (t) => !t.pendiente && t.cita.trim() && t.nombre.trim(),
  );
  if (visibles.length === 0) return null;

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink-900">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="mt-4 text-slate-600">
            Reseñas publicadas por pacientes en Google.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibles.map((t) => (
            <figure
              key={t.nombre}
              className="card-hover flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg"
            >
              {t.estrellas ? <Estrellas cantidad={t.estrellas} /> : null}
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                «{t.cita}»
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm font-semibold text-ink-900">
                {t.nombre}
              </figcaption>
            </figure>
          ))}
        </Reveal>

        <div className="mt-10 text-center">
          <a
            href={clinica.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
          >
            Ver todas las reseñas en Google
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

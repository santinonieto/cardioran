import Reveal from "./Reveal";
import { testimonios } from "@/lib/data";

/**
 * Testimonios de pacientes.
 *
 * Si no hay ninguno cargado (todos en `pendiente`), la sección entera no se
 * renderiza. Publicar testimonios inventados en un sitio médico induciría a
 * error a los pacientes, así que se muestra sólo contenido real.
 */
export default function Testimonios() {
  const visibles = testimonios.filter(
    (t) => !t.pendiente && t.cita.trim() && t.nombre.trim(),
  );
  if (visibles.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-ink-900">Lo que dicen los pacientes</h2>
        <p className="mt-4 text-slate-600">
          La confianza se construye consulta a consulta.
        </p>
      </div>

      <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((t) => (
          <figure
            key={t.nombre}
            className="card-hover flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-lg"
          >
            {t.estrellas ? (
              <div
                className="text-brand-500"
                aria-label={`${t.estrellas} de 5 estrellas`}
              >
                <span aria-hidden="true">{"★".repeat(t.estrellas)}</span>
              </div>
            ) : null}
            <blockquote className="mt-3 flex-1 text-slate-600">
              «{t.cita}»
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-ink-900">
              {t.nombre}
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </section>
  );
}

import type { Pregunta } from "@/lib/data";

/**
 * Acordeón de preguntas frecuentes.
 *
 * Usa <details>/<summary> nativos: son accesibles por teclado y por lectores
 * de pantalla sin escribir nada de JavaScript, y funcionan aunque el JS falle.
 *
 * Las preguntas marcadas como `pendiente` se descartan: el sitio está en
 * producción y no puede mostrar respuestas vacías a los pacientes.
 */
export default function Faq({ items }: { items: Pregunta[] }) {
  const visibles = items.filter((p) => !p.pendiente && p.respuesta.trim());
  if (visibles.length === 0) return null;

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      {visibles.map((p) => (
        <details key={p.pregunta} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-semibold text-ink-900 transition-colors hover:bg-brand-50/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-600">
            <span>{p.pregunta}</span>
            <span
              aria-hidden="true"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="px-5 pb-5 text-slate-600">{p.respuesta}</p>
        </details>
      ))}
    </div>
  );
}

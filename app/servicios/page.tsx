import type { Metadata } from "next";
import Link from "next/link";
import {
  antesDeLaConsulta,
  clinica,
  obrasSociales,
  obrasSocialesActualizacion,
  servicios,
  whatsappTurno,
} from "@/lib/data";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Consultas y estudios cardiológicos disponibles en el consultorio.",
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          Cardiología
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-ink-900">Servicios y estudios</h1>
        <p className="mt-4 text-lg text-slate-600">
          Consultas y estudios de diagnóstico cardiológico realizados en el consultorio,
          con equipamiento adecuado y atención personalizada.
        </p>
      </div>

      <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((s) => (
          <div
            key={s.slug}
            className="card-hover flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-lg"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">
              {s.icono}
            </div>
            <h2 className="mt-5 text-lg font-semibold text-ink-900">{s.nombre}</h2>
            <p className="mt-2 text-sm text-slate-500">{s.descripcion}</p>
            <p className="mt-3 flex-1 border-t border-slate-100 pt-3 text-sm text-slate-500">
              <span className="font-medium text-brand-700">Para qué sirve: </span>
              {s.paraQue}
            </p>
            <a
              href={whatsappTurno(s)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Solicitar turno para ${s.nombre} por WhatsApp`}
              data-estudio={s.slug}
              className="mt-5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Solicitar turno →
            </a>
          </div>
        ))}
      </Reveal>

      {/* Antes de tu consulta */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-ink-900">Antes de tu consulta</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Algunas recomendaciones para aprovechar mejor el turno.
        </p>
        <Reveal className="mt-8 grid gap-6 sm:grid-cols-2">
          {antesDeLaConsulta
            .filter((i) => !i.pendiente && i.respuesta.trim())
            .map((i) => (
              <div
                key={i.pregunta}
                className="card-hover flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700"
                >
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900">{i.pregunta}</h3>
                  <p className="mt-1 text-sm text-slate-500">{i.respuesta}</p>
                </div>
              </div>
            ))}
        </Reveal>
      </div>

      {/* Obras sociales y prepagas: solo nombres, sin valores */}
      <div id="obras-sociales" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-bold text-ink-900">Obras sociales y prepagas</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Estas son las obras sociales y prepagas que atendemos. La cobertura puede
          cambiar: antes de sacar turno, escribinos por WhatsApp para confirmar la tuya.
        </p>
        <details className="group mt-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-ink-900 transition-colors hover:bg-brand-50/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-600">
            <span>Ver el listado ({obrasSociales.length})</span>
            <span
              aria-hidden="true"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="px-5 pb-5">
            <ul className="grid gap-x-6 gap-y-2 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-3">
              {obrasSociales.map((o) => (
                <li key={o} className="flex gap-2">
                  <span aria-hidden="true" className="text-brand-500">
                    •
                  </span>
                  {o}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Listado actualizado a {obrasSocialesActualizacion}.
            </p>
            <a
              href={clinica.whatsappConsultaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Consultar por mi cobertura →
            </a>
          </div>
        </details>
      </div>

      <div className="mt-16 rounded-3xl bg-brand-50 px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-ink-900">
          ¿Tenés dudas sobre qué estudio necesitás?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Escribinos y te orientamos sobre la consulta o el estudio más adecuado para tu
          caso.
        </p>
        <Link
          href="/contacto"
          className="mt-6 inline-block rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Contactar
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { clinica, servicios } from "@/lib/data";
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
            <p className="mt-2 flex-1 text-sm text-slate-500">{s.descripcion}</p>
            <a
              href={clinica.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Solicitar turno →
            </a>
          </div>
        ))}
      </Reveal>

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

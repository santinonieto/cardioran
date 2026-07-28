import type { Metadata } from "next";
import { clinica, doctor } from "@/lib/data";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "El profesional",
  description: `Conocé al ${doctor.nombre}, médico cardiólogo en Concepción, Tucumán.`,
};

const valores = [
  { titulo: "Cercanía", texto: "Un trato profesional y respetuoso, que construye una relación de confianza con cada paciente." },
  { titulo: "Prevención", texto: "El foco puesto en cuidar el corazón antes de que aparezcan las patologías." },
  { titulo: "Claridad", texto: "Explicaciones sencillas sobre tu diagnóstico y tu tratamiento." },
];

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal variant="left" className="relative mx-auto w-full max-w-sm">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand-100 to-brand-300 p-1 shadow-xl">
            <div className="grid h-full place-items-center rounded-[22px] bg-white/40 text-8xl font-bold text-brand-700">
              {doctor.iniciales}
            </div>
          </div>
        </Reveal>
        <Reveal variant="right">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            El profesional
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-ink-900">{doctor.nombre}</h1>
          <p className="mt-1 text-lg text-brand-600">{doctor.especialidad}</p>
          <p className="mt-6 text-lg text-slate-600">{doctor.bio}</p>
          <a
            href={clinica.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Solicitar turno por WhatsApp
          </a>
        </Reveal>
      </div>

      <Reveal className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="card-hover rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-lg">
          <h2 className="text-xl font-semibold text-ink-900">La consulta</h2>
          <p className="mt-3 text-slate-600">
            Ofrecer una atención cardiológica integral, preventiva y personalizada, que
            ayude a cada paciente a cuidar la salud de su corazón.
          </p>
        </div>
        <div className="card-hover rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-lg">
          <h2 className="text-xl font-semibold text-ink-900">Dónde atiende</h2>
          <p className="mt-3 text-slate-600">{clinica.direccion}</p>
          <div className="mt-4 space-y-1 text-sm text-slate-600">
            {clinica.horarios.map((h) => (
              <p key={h.dias}>
                <span className="font-medium">{h.dias}:</span> {h.horas}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-ink-900">Cómo trabajamos</h2>
        <Reveal className="mt-8 grid gap-6 sm:grid-cols-3">
          {valores.map((v, i) => (
            <div
              key={v.titulo}
              className="card-hover rounded-2xl bg-brand-50 p-6 hover:shadow-lg"
            >
              <span className="text-3xl font-extrabold text-brand-500">0{i + 1}</span>
              <h3 className="mt-3 font-semibold text-ink-900">{v.titulo}</h3>
              <p className="mt-2 text-sm text-slate-600">{v.texto}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}

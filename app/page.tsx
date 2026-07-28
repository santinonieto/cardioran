import Link from "next/link";
import { clinica, doctor, preguntas, servicios } from "@/lib/data";
import Logo from "./components/Logo";
import Reveal from "./components/Reveal";
import Faq from "./components/Faq";
import Testimonios from "./components/Testimonios";

const ventajas = [
  { titulo: "Atención personalizada", texto: "Consultas con seguimiento cercano de cada paciente.", icono: "🤝" },
  { titulo: "Estudios en el consultorio", texto: "Electrocardiograma, ecocardiograma Doppler, Holter y más, en un solo lugar.", icono: "🔬" },
  { titulo: "Enfoque preventivo", texto: "Control de la presión arterial con MAPA (Monitoreo Ambulatorio de Presión Arterial) y de los factores de riesgo cardiovascular.", icono: "🛡️" },
  { titulo: "Turnos mañana y tarde", texto: "Atención de lunes a viernes, de 11:00 a 13:00 y de 18:00 a 21:30.", icono: "🕐" },
];

export default function Home() {
  const faqRespondidas = preguntas.filter(
    (p) => !p.pendiente && p.respuesta.trim(),
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="hero-in inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
              <span className="heartbeat" aria-hidden="true">❤</span>{" "}
              {clinica.subtitulo} · Concepción, Tucumán
            </span>
            <h1 className="hero-in hero-in-1 mt-6 text-4xl font-extrabold leading-tight text-ink-900 sm:text-5xl">
              {clinica.eslogan}
            </h1>
            <p className="hero-in hero-in-2 mt-6 max-w-md text-lg text-slate-600">
              El {doctor.nombre} te acompaña en la prevención, el diagnóstico y el
              tratamiento de las enfermedades del corazón, con una atención cercana y
              personalizada.
            </p>
            <div className="hero-in hero-in-3 mt-8 flex flex-wrap gap-4">
              <a
                href={clinica.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
              >
                Solicitar turno
              </a>
              <Link
                href="/servicios"
                className="rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
              >
                Ver servicios
              </Link>
            </div>
            <ul className="mt-10 space-y-2">
              {[
                "Consulta cardiológica integral",
                "Estudios de diagnóstico en el consultorio",
                "Seguimiento personalizado de cada paciente",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-100 text-xs text-brand-700">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-cream-100 p-1 shadow-2xl ring-1 ring-cream-200">
              <div className="flex h-full items-center justify-center rounded-[22px] p-12">
                <Logo width={384} priority className="h-auto w-full max-w-sm" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                Horarios de atención
              </p>
              {clinica.horarios.map((h) => (
                <p key={h.dias} className="mt-1 text-sm text-ink-900">
                  <span className="font-medium">{h.dias}:</span> {h.horas}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="sr-only">Por qué elegir CARDIORAN</h2>
        <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ventajas.map((v) => (
            <div
              key={v.titulo}
              className="card-hover rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg"
            >
              <div className="text-3xl">{v.icono}</div>
              <h3 className="mt-4 font-semibold text-ink-900">{v.titulo}</h3>
              <p className="mt-2 text-sm text-slate-500">{v.texto}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Servicios */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-ink-900">Servicios y estudios</h2>
            <p className="mt-4 text-slate-600">
              Todo lo que tu corazón necesita, con estudios de diagnóstico realizados en
              el consultorio.
            </p>
          </div>
          <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s) => (
              <div
                key={s.slug}
                className="card-hover rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">
                  {s.icono}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{s.nombre}</h3>
                <p className="mt-2 text-sm text-slate-500">{s.descripcion}</p>
                <p className="mt-3 border-t border-slate-100 pt-3 text-sm text-slate-500">
                  <span className="font-medium text-brand-700">Para qué sirve: </span>
                  {s.paraQue}
                </p>
              </div>
            ))}
          </Reveal>
          <div className="mt-12 text-center">
            <Link
              href="/servicios"
              className="rounded-full border border-brand-200 bg-white px-7 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        {/* Datos estructurados: Google puede mostrar estas preguntas en los
            resultados de búsqueda. Solo se incluyen las ya respondidas. */}
        {faqRespondidas.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqRespondidas.map((p) => ({
                  "@type": "Question",
                  name: p.pregunta,
                  acceptedAnswer: { "@type": "Answer", text: p.respuesta },
                })),
              }),
            }}
          />
        )}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink-900">Preguntas frecuentes</h2>
          <p className="mt-4 text-slate-600">
            Las dudas más comunes antes de la primera consulta.
          </p>
        </div>
        <div className="mt-12">
          <Faq items={preguntas} />
        </div>
      </section>

      {/* Sobre el doctor */}
      <section className="mx-auto max-w-6xl px-4 py-20">
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
            <h2 className="mt-2 text-3xl font-bold text-ink-900">{doctor.nombre}</h2>
            <p className="mt-1 text-lg text-brand-600">{doctor.especialidad}</p>
            <p className="mt-5 text-slate-600">{doctor.bio}</p>
            <Link
              href="/nosotros"
              className="mt-6 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Conocé más →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonios (no aparece hasta que haya testimonios reales cargados) */}
      <Testimonios />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="overflow-hidden rounded-3xl bg-brand-700 px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-3xl font-bold">¿Necesitás una consulta cardiológica?</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Escribinos por WhatsApp y coordinamos tu turno con el {doctor.nombre} en el
            horario que mejor te quede.
          </p>
          <a
            href={clinica.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Solicitar turno por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

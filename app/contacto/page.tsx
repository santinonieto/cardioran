import type { Metadata } from "next";
import { clinica } from "@/lib/data";
import { WhatsAppIcon } from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con CARDIORAN por WhatsApp. Shipton 1045, Concepción, Tucumán.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          Contacto
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-ink-900">Estamos para ayudarte</h1>
        <p className="mt-4 text-lg text-slate-600">
          ¿Tenés dudas o necesitás más información? Escribinos y te respondemos a la
          brevedad.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="sr-only">Datos del consultorio</h2>
          <InfoCard icono="📍" titulo="Dirección" texto={clinica.direccion} />
          <InfoCard icono="📞" titulo="Teléfono" texto={clinica.telefono} />
          <InfoCard icono="💬" titulo="WhatsApp" texto={clinica.whatsapp} />
          <div className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">
              🕐
            </div>
            <div>
              <h3 className="font-semibold text-ink-900">Horarios de atención</h3>
              <ul className="mt-1 space-y-0.5 text-sm text-slate-500">
                {clinica.horarios.map((h) => (
                  <li key={h.dias}>
                    <span className="font-medium text-slate-600">{h.dias}:</span> {h.horas}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-100">
            <iframe
              title="Ubicación de CARDIORAN en el mapa"
              src="https://www.google.com/maps?q=Shipton%201045%2C%20Concepci%C3%B3n%2C%20Tucum%C3%A1n%2C%20Argentina&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Shipton%201045%2C%20Concepci%C3%B3n%2C%20Tucum%C3%A1n%2C%20Argentina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Ver en Google Maps →
          </a>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-wa-500/10 text-wa-500">
              <WhatsAppIcon className="h-8 w-8" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-ink-900">
              Escribinos por WhatsApp
            </h2>
            <p className="mt-3 text-slate-600">
              Es la forma más rápida de comunicarte con nosotros. Solicitá tu turno o
              hacenos tu consulta y te respondemos a la brevedad.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href={clinica.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-wa-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-wa-600"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Solicitar un turno
              </a>
              <a
                href={clinica.whatsappConsultaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-full border border-wa-500 px-6 py-3.5 text-sm font-semibold text-wa-500 transition hover:bg-wa-500/5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Hacer una consulta
              </a>
              <a
                href={clinica.telefonoLink}
                className="flex w-full items-center justify-center gap-2.5 rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
              >
                📞 Llamar al {clinica.telefono}
              </a>
            </div>

            <p className="mt-6 border-t border-slate-100 pt-5 text-center text-xs text-slate-500">
              Te respondemos dentro de los horarios de atención del consultorio.
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-brand-50 p-6">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-ink-900">¿Es una urgencia?</span> Ante
              dolor en el pecho, falta de aire o un malestar súbito, no esperes respuesta
              por WhatsApp: comunicate de inmediato con el servicio de emergencias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icono, titulo, texto }: { icono: string; titulo: string; texto: string }) {
  return (
    <div className="card-hover flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 hover:shadow-lg">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">
        {icono}
      </div>
      <div>
        <h3 className="font-semibold text-ink-900">{titulo}</h3>
        <p className="text-sm text-slate-500">{texto}</p>
      </div>
    </div>
  );
}

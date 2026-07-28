import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { clinica } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo width={180} className="h-auto w-[180px]" />
          <p className="mt-4 text-sm text-slate-500">{clinica.subtitulo}.</p>
          <p className="mt-2 text-sm italic text-slate-600">«{clinica.eslogan}»</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-900">Navegación</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-500">
            <li><Link href="/servicios" className="hover:text-brand-600">Servicios</Link></li>
            <li><Link href="/nosotros" className="hover:text-brand-600">El profesional</Link></li>
            <li><Link href="/contacto" className="hover:text-brand-600">Contacto</Link></li>
            <li>
              <a
                href={clinica.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-600"
              >
                Turnos por WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-900">Contacto</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-500">
            <li>
              <a href={clinica.telefonoLink} className="hover:text-brand-600">
                {clinica.telefono}
              </a>
            </li>
            <li>
              <a
                href={clinica.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-600"
              >
                WhatsApp {clinica.whatsapp}
              </a>
            </li>
            <li>{clinica.direccion}</li>
          </ul>
          <div className="mt-5">
            <p className="text-sm font-semibold text-ink-900">Seguinos</p>
            <SocialLinks className="mt-2" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-900">Horarios de atención</h3>
          <ul className="mt-4 space-y-1 text-sm text-slate-500">
            {clinica.horarios.map((h) => (
              <li key={h.dias}>
                <span className="font-medium text-slate-600">{h.dias}:</span> {h.horas}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {clinica.nombre}. Todos los derechos reservados.
      </div>
    </footer>
  );
}

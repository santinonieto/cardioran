"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { clinica } from "@/lib/data";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "El profesional" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
          <Logo width={170} priority className="h-auto w-[150px] sm:w-[170px]" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
          {/* Se ocultan por debajo de lg: en tablet el header queda apretado. */}
          <SocialLinks
            className="hidden lg:flex"
            iconClassName="h-[18px] w-[18px]"
          />
          <a
            href={clinica.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Solicitar turno
          </a>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={clinica.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-brand-600 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Solicitar turno
            </a>
            <div className="mt-2 flex items-center gap-3 border-t border-slate-100 px-3 pt-3">
              <span className="text-sm text-slate-500">Seguinos:</span>
              <SocialLinks onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

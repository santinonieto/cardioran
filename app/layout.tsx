import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { clinica, doctor } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: `${clinica.nombre} · ${clinica.especialidad} · Concepción, Tucumán`,
    template: `%s · ${clinica.nombre}`,
  },
  description: `${clinica.subtitulo} en Concepción, Tucumán. ${doctor.nombre}. ${clinica.eslogan}.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/*
          Red de seguridad: las animaciones de aparición ocultan el contenido
          hasta que el IntersectionObserver lo detecta. Sin JavaScript ese
          observer nunca corre, así que acá se fuerza todo a visible.
          En un sitio médico el contenido nunca puede quedar oculto.
        */}
        <noscript>
          <style>{`.reveal > *, .slide-in { opacity: 1 !important; animation: none !important; }`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

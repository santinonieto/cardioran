import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { clinica } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: `${clinica.nombre} · ${clinica.especialidad} · Concepción, Tucumán`,
    template: `%s · ${clinica.nombre}`,
  },
  description: `${clinica.subtitulo} en Concepción, Tucumán. Dr. Ramiro Nieto. ${clinica.eslogan}.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

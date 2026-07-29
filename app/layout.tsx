import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Analytics from "./components/Analytics";
import { clinica, doctor, servicios, testimonios } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const titulo = `${clinica.nombre} · ${clinica.especialidad} · Concepción, Tucumán`;
const descripcion = `${clinica.subtitulo} a cargo del ${doctor.nombre}, en Concepción, Tucumán. Consultas y estudios cardiológicos: ECG, ecocardiograma Doppler, Holter, MAPA y ergometría.`;

export const metadata: Metadata = {
  // Necesario para que las URLs de Open Graph se resuelvan absolutas.
  metadataBase: new URL(clinica.sitio),
  title: {
    default: titulo,
    template: `%s · ${clinica.nombre}`,
  },
  description: descripcion,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: clinica.sitio,
    siteName: clinica.nombre,
    title: titulo,
    description: descripcion,
    images: [
      {
        url: "/imagenes/og.jpg",
        width: 1200,
        height: 630,
        alt: `${clinica.nombre} · ${clinica.subtitulo}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descripcion,
    images: ["/imagenes/og.jpg"],
  },
};

// Solo las reseñas efectivamente publicadas en el sitio.
const reseñas = testimonios.filter(
  (t) => !t.pendiente && t.cita.trim() && t.nombre.trim(),
);

/**
 * Datos estructurados para Google (schema.org).
 * Combina la ficha del consultorio con la del profesional, para que aparezcan
 * la dirección, el teléfono y los horarios en los resultados de búsqueda.
 */
const datosEstructurados = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinica.nombre,
  description: descripcion,
  url: clinica.sitio,
  telephone: clinica.whatsapp,
  image: `${clinica.sitio}/imagenes/og.jpg`,
  medicalSpecialty: "Cardiovascular",
  // Vincula el sitio con los perfiles oficiales del consultorio.
  sameAs: [clinica.instagram, clinica.facebook],
  address: {
    "@type": "PostalAddress",
    streetAddress: clinica.calle,
    addressLocality: clinica.ciudad,
    addressRegion: clinica.provincia,
    addressCountry: clinica.pais,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "18:00",
      closes: "21:30",
    },
  ],
  employee: {
    "@type": "Physician",
    name: doctor.nombre,
    medicalSpecialty: "Cardiovascular",
    jobTitle: doctor.especialidad,
  },
  availableService: servicios.map((s) => ({
    "@type": "MedicalTest",
    name: s.nombre,
    description: s.paraQue,
  })),

  // Reseñas reales publicadas por los pacientes en Google.
  //
  // OJO: desde 2019 Google NO muestra estrellas en los resultados de búsqueda
  // cuando las reseñas están en el sitio de la propia empresa ("self-serving").
  // El marcado es válido y describe reseñas genuinas, pero las estrellas de
  // Google salen de la ficha de Google Business, no de acá.
  ...(reseñas.length > 0 && {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (
        reseñas.reduce((t, r) => t + (r.estrellas ?? 5), 0) / reseñas.length
      ).toFixed(1),
      reviewCount: reseñas.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reseñas.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.nombre },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.estrellas ?? 5,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: r.cita,
    })),
  }),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}

import Image from "next/image";

/**
 * Logo oficial de CARDIORAN (imagen real del consultorio, con fondo transparente).
 * Archivo: public/imagenes/cardioran-logo.png
 */
// Dimensiones reales del archivo; si se reemplaza el PNG, actualizar acá.
const LOGO_W = 760;
const LOGO_H = 428;

export default function Logo({
  className = "",
  width = 190,
  priority = false,
}: {
  className?: string;
  width?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/imagenes/cardioran-logo.png"
      alt="CARDIORAN · Salud Cardiovascular"
      width={width}
      height={Math.round((width * LOGO_H) / LOGO_W)}
      // Se sirve el archivo tal cual, sin pasar por el optimizador de imágenes.
      // El PNG ya está comprimido a mano con paleta de 64 colores (19,7 KB);
      // al re-codificarlo, el optimizador lo agranda a 60-148 KB. Además, así
      // las tres instancias (header, portada y pie) comparten una única URL
      // y el navegador la descarga una sola vez.
      unoptimized
      priority={priority}
      className={className}
    />
  );
}

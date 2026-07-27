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
      // Indica el ancho real de render para que Next sirva la variante justa
      // en lugar de una imagen mucho mayor.
      sizes={`${width}px`}
      priority={priority}
      className={className}
    />
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Agrega la clase `is-visible` cuando el elemento entra en pantalla, para que
 * las animaciones (definidas en globals.css) se disparen recién ahí.
 *
 * Reemplaza a `whileInView` de Framer Motion: la animación la hace el
 * compositor del navegador y el único JavaScript es este observer, en vez de
 * los ~40 KB de la librería.
 *
 * - `variant="stagger"`: los hijos aparecen escalonados (tarjetas en grilla).
 * - `variant="left" | "right"`: el bloque entra desde ese lado.
 */
export default function Reveal({
  children,
  className = "",
  variant = "stagger",
}: {
  children: ReactNode;
  className?: string;
  variant?: "stagger" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si el navegador no soporta IntersectionObserver, se muestra sin animar.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // se anima una sola vez
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base =
    variant === "stagger"
      ? "reveal"
      : variant === "right"
        ? "slide-in slide-in-from-right"
        : "slide-in";

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

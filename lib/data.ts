export type Servicio = {
  slug: string;
  nombre: string;
  descripcion: string;
  icono: string;
};

export type Horario = {
  dias: string;
  horas: string;
};

export const clinica = {
  nombre: "CARDIORAN",
  especialidad: "Salud Cardiovascular",
  subtitulo: "Consultorio Interdisciplinario de Cardiología",
  eslogan: "La prevención es el latido de un corazón saludable",
  telefono: "11 5594-5109",
  whatsapp: "+54 9 11 5594-5109",
  telefonoLink: "tel:+5491155945109",
  // Enlace de WhatsApp con mensaje pre-cargado para pedir turno
  whatsappLink:
    "https://wa.me/5491155945109?text=Hola%20CARDIORAN%2C%20quisiera%20solicitar%20un%20turno%20con%20el%20Dr.%20Ramiro%20Augusto%20Nieto.",
  // Enlace de WhatsApp para consultas generales (no turnos)
  whatsappConsultaLink:
    "https://wa.me/5491155945109?text=Hola%20CARDIORAN%2C%20tengo%20una%20consulta.",
  direccion: "Shipton 1045 (entre El Ceibo y Güemes), Concepción, Tucumán",
  horarios: [
    { dias: "Lunes a viernes", horas: "18:00 – 21:30" },
  ] as Horario[],
};

export const doctor = {
  nombre: "Dr. Ramiro Augusto Nieto",
  especialidad: "Médico Cardiólogo",
  iniciales: "RAN",
  bio: "El Dr. Ramiro Augusto Nieto es médico especialista en cardiología. Se dedica a la prevención, el diagnóstico y el tratamiento de las enfermedades del corazón, con una atención cercana y personalizada para cada paciente.",
};

export const servicios: Servicio[] = [
  {
    slug: "consulta-cardiologica",
    nombre: "Consulta cardiológica",
    descripcion:
      "Evaluación clínica completa del corazón, revisión de antecedentes y plan de tratamiento personalizado.",
    icono: "🫀",
  },
  {
    slug: "electrocardiograma",
    nombre: "Electrocardiograma (ECG)",
    descripcion:
      "Registro de la actividad eléctrica del corazón para detectar arritmias y otras alteraciones.",
    icono: "📈",
  },
  {
    slug: "ecocardiograma",
    nombre: "Ecocardiograma Doppler",
    descripcion:
      "Ecografía del corazón que permite evaluar su estructura y funcionamiento en tiempo real.",
    icono: "🔊",
  },
  {
    slug: "holter",
    nombre: "Holter de 24 horas",
    descripcion:
      "Monitoreo continuo del ritmo cardíaco durante el día a día para detectar arritmias.",
    icono: "⏱️",
  },
  {
    slug: "mapa-presion",
    nombre: "Monitoreo de presión (MAPA)",
    descripcion:
      "Control ambulatorio de la presión arterial durante 24 horas para el diagnóstico de hipertensión.",
    icono: "🩺",
  },
  {
    slug: "ergometria",
    nombre: "Ergometría",
    descripcion:
      "Prueba de esfuerzo que evalúa la respuesta del corazón ante la actividad física.",
    icono: "🏃",
  },
];

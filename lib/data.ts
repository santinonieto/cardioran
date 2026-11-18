/**
 * Contenido del sitio.
 *
 * CONVENCIÓN DE PENDIENTES
 * Todo lo que necesita confirmación del Dr. Nieto está marcado con
 * `pendiente: true` y un comentario `TODO`. Esos elementos NO se muestran en
 * el sitio hasta que se completen: al ser un sitio en producción, no puede
 * aparecer texto de relleno frente a los pacientes.
 * Para publicarlos: escribir el contenido real y borrar la línea `pendiente`.
 */

export type Servicio = {
  slug: string;
  nombre: string;
  descripcion: string;
  /** Para qué sirve o cuándo se indica. Orientado al paciente y al SEO. */
  paraQue: string;
  icono: string;
  /** Cómo se nombra en el mensaje de WhatsApp: "quisiera un turno para ___". */
  turno: string;
};

export type Horario = {
  dias: string;
  horas: string;
};

export type Pregunta = {
  pregunta: string;
  respuesta: string;
  pendiente?: boolean;
};

export type Testimonio = {
  cita: string;
  nombre: string;
  /** Opcional, de 1 a 5. */
  estrellas?: number;
  pendiente?: boolean;
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
  // Base para armar mensajes propios (ver `whatsappTurno`)
  whatsappBase: "https://wa.me/5491155945109",
  // Enlace de WhatsApp para consultas generales (no turnos)
  whatsappConsultaLink:
    "https://wa.me/5491155945109?text=Hola%20CARDIORAN%2C%20tengo%20una%20consulta.",
  direccion: "Shipton 1045 (entre El Ceibo y Güemes), Concepción, Tucumán",
  instagram: "https://www.instagram.com/cardioran",
  facebook: "https://www.facebook.com/cardioransaludcardiovascular",
  tiktok: "https://www.tiktok.com/@cardioran",
  // TODO: reemplazar por el enlace directo al perfil de Google Business.
  // Se obtiene desde Google Maps -> ficha del consultorio -> Compartir.
  // Mientras tanto, esta búsqueda lleva igual a la ficha.
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=CARDIORAN%20Concepci%C3%B3n%20Tucum%C3%A1n",
  // Campos separados, para los datos estructurados de Google
  calle: "Shipton 1045",
  ciudad: "Concepción",
  provincia: "Tucumán",
  pais: "AR",
  sitio: "https://cardioran.com.ar",
  // Horario vigente (confirmado el 13/11/2026). Los sábados no se atiende de forma
  // regular: cuando el doctor atiende un sábado se avisa con `aviso` (más abajo).
  horarios: [
    { dias: "Lunes a viernes", horas: "10:00 – 13:45 y 18:00 – 21:45" },
  ] as Horario[],
};

/**
 * Aviso temporal que se muestra arriba de todo el sitio (por ejemplo, "este
 * sábado atendemos"). Se oculta solo pasada la fecha `hasta`.
 * Para quitarlo antes, borrar el texto. Para uno nuevo: cambiar texto y fecha.
 * `hasta` en formato ISO con zona horaria de Argentina (-03:00).
 */
export const aviso = {
  texto: "Este sábado 21 de noviembre atendemos de 10 a 14 hs.",
  hasta: "2026-11-21T23:59:59-03:00",
};

/**
 * Fotos reales del consultorio (public/imagenes/consultorio/).
 * Retocadas solo en luz y color, sin agregar ni quitar nada, y sin metadatos
 * (EXIF/GPS). No usar fotos donde aparezca el doctor sin su visto bueno.
 * `posicion`: qué parte de la foto se prioriza al recortarla en la grilla.
 */
export type Foto = {
  src: string;
  alt: string;
  titulo: string;
  ancho: number;
  alto: number;
  posicion?: string;
};

export const fotos = {
  fachada: { src: "/imagenes/consultorio/fachada.webp", alt: "Fachada del consultorio CARDIORAN en Shipton 1045, Concepción", titulo: "Fachada · Shipton 1045", ancho: 1195, alto: 1600 },
  entrada: { src: "/imagenes/consultorio/entrada-shipton-1045.webp", alt: "Entrada de vidrio con el número 1045 de la calle Shipton", titulo: "Entrada", ancho: 1195, alto: 1600 },
  recepcion: { src: "/imagenes/consultorio/recepcion-logo.webp", alt: "Recepción de CARDIORAN con el logo en la pared", titulo: "Recepción", ancho: 1195, alto: 1600 },
  salaDeEspera: { src: "/imagenes/consultorio/sala-de-espera.webp", alt: "Sala de espera con sillas rojas y negras", titulo: "Sala de espera", ancho: 1600, alto: 1195, posicion: "70% 60%" },
  ergometria: { src: "/imagenes/consultorio/sala-ergometria.webp", alt: "Sala de ergometría con cinta para la prueba de esfuerzo", titulo: "Sala de ergometría", ancho: 1195, alto: 1600 },
  consultorio: { src: "/imagenes/consultorio/consultorio.webp", alt: "Consultorio con escritorio, diplomas y biblioteca", titulo: "Consultorio", ancho: 1195, alto: 1600 },} satisfies Record<string, Foto>;

/** Fotos de la galería "El consultorio", en orden. */
export const galeria: Foto[] = [
  fotos.fachada,
  fotos.entrada,
  fotos.recepcion,
  fotos.salaDeEspera,
  fotos.ergometria,
  fotos.consultorio,
];

/**
 * Obras sociales y prepagas que atiende el doctor.
 * Fuente: planilla "Estado Obras Sociales" del Círculo Médico del Sur al 01/11/2026.
 * Solo nombres: NO publicar valores de consulta, coseguros ni modalidades.
 * Excluidas las suspendidas (APM). Actualizar la fecha al revisar el listado.
 */
export const obrasSocialesActualizacion = "noviembre de 2026";
export const obrasSociales: string[] = [
  "ASUNT (UNT)",
  "Asociación Mutual Protección Familiar",
  "Boreal",
  "Bramed",
  "DASUTEN (Universidad Tecnológica)",
  "Galeno",
  "Jerárquicos Salud",
  "Medifé",
  "Nobis",
  "OMINT",
  "OSDE",
  "OSFATLYF (Luz y Fuerza)",
  "OSJERA",
  "OSMATA",
  "OSMITA",
  "OSPAAT",
  "OSSEG",
  "Personal de Farmacia (AGEF)",
  "Prevención Salud",
  "Red de Seguro Médico",
  "San Pedro (Conferencia Episcopal Argentina)",
  "Sancor Salud",
  "Soremer",
  "Subsidio de Salud",
  "Swiss Medical / Docthos",
  "TV Salud",
];

/** Enlace de WhatsApp con el mensaje ya escrito para pedir turno de un estudio. */
export function whatsappTurno(servicio: Servicio) {
  const texto = `Hola CARDIORAN, quisiera solicitar un turno para ${servicio.turno}.`;
  return `${clinica.whatsappBase}?text=${encodeURIComponent(texto)}`;
}

export const doctor = {
  nombre: "Dr. Ramiro Augusto Nieto",
  especialidad: "Médico Cardiólogo",
  iniciales: "RAN",
  bio: "El Dr. Ramiro Augusto Nieto es médico especialista en cardiología. Se dedica a la prevención, el diagnóstico y el tratamiento de las enfermedades del corazón, con una atención cercana y personalizada para cada paciente.",

  // --- Datos profesionales (confirmados por Santi el 13/11/2026) ---
  matricula: "M.N. 118508 · M.P. 6829",
  // TODO: años de experiencia (ej. "Más de 20 años de trayectoria")
  experiencia: "",
  formacion: [
    "Médico – Universidad Nacional de Tucumán",
    "Médico Especialista en Cardiología – Universidad de Buenos Aires",
  ] as string[],
  // TODO: sociedades médicas a las que pertenece.
  // Ej: "Sociedad Argentina de Cardiología (SAC)"
  sociedades: [] as string[],
  // TODO: una o dos líneas sobre su enfoque de atención, en primera persona
  // o en tercera, como prefiera el doctor.
  enfoque: "",
};

export const servicios: Servicio[] = [
  {
    slug: "consulta-cardiologica",
    nombre: "Consulta cardiológica",
    turno: "una consulta cardiológica",
    descripcion:
      "Evaluación clínica completa del corazón, revisión de antecedentes y plan de tratamiento personalizado.",
    paraQue:
      "Es el punto de partida: permite evaluar síntomas, antecedentes familiares y factores de riesgo, y definir qué estudios hacen falta.",
    icono: "🫀",
  },
  {
    slug: "electrocardiograma",
    nombre: "Electrocardiograma (ECG)",
    turno: "un electrocardiograma",
    descripcion:
      "Registro de la actividad eléctrica del corazón para detectar arritmias y otras alteraciones.",
    paraQue:
      "Se indica ante palpitaciones, dolor en el pecho o como control de rutina. Es rápido, indoloro y no requiere preparación.",
    icono: "📈",
  },
  {
    slug: "ecocardiograma",
    nombre: "Ecocardiograma Doppler",
    turno: "un ecocardiograma Doppler",
    descripcion:
      "Ecografía del corazón que permite evaluar su estructura y funcionamiento en tiempo real.",
    paraQue:
      "Muestra el corazón en movimiento: sirve para evaluar las válvulas, el tamaño de las cavidades y con qué fuerza bombea la sangre.",
    icono: "🔊",
  },
  {
    slug: "holter",
    nombre: "Holter de 24 horas",
    turno: "un Holter de 24 horas",
    descripcion:
      "Monitoreo continuo del ritmo cardíaco durante el día a día para detectar arritmias.",
    paraQue:
      "Se indica cuando hay palpitaciones, mareos o desmayos que no aparecen durante la consulta: registra el ritmo mientras hacés tu vida normal.",
    icono: "⏱️",
  },
  {
    slug: "mapa-presion",
    nombre: "Monitoreo de presión (MAPA)",
    turno: "un monitoreo de presión (MAPA)",
    descripcion:
      "Control ambulatorio de la presión arterial durante 24 horas para el diagnóstico de hipertensión.",
    paraQue:
      "Sirve para confirmar o descartar hipertensión y para ajustar la medicación, midiendo la presión fuera del consultorio.",
    icono: "🩺",
  },
  {
    slug: "ergometria",
    nombre: "Ergometría",
    turno: "una ergometría",
    descripcion:
      "Prueba de esfuerzo que evalúa la respuesta del corazón ante la actividad física.",
    paraQue:
      "Evalúa cómo responde el corazón al ejercicio. Se solicita para estudiar dolores de pecho al esfuerzo y para el apto físico deportivo.",
    icono: "🏃",
  },
];

/**
 * Preguntas frecuentes.
 * Las marcadas con `pendiente` no se muestran hasta completar la respuesta.
 */
export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Necesito estudios previos para la primera consulta?",
    respuesta:
      "No es obligatorio. El Dr. Nieto evalúa cada caso en la consulta inicial y, si es necesario, indica los estudios correspondientes.",
  },
  {
    pregunta: "¿Qué debo llevar a mi turno?",
    respuesta:
      "DNI, carnet de obra social o prepaga (si corresponde), y estudios cardiológicos previos si los tenés: electrocardiogramas, análisis o informes de otros médicos.",
  },
  {
    pregunta: "¿Atienden obras sociales o prepagas?",
    respuesta:
      "Sí, atendemos distintas obras sociales y prepagas. Podés ver el listado en la sección Servicios. La cobertura puede cambiar, así que escribinos por WhatsApp para confirmar la tuya antes de sacar turno.",
  },
  {
    pregunta: "¿Cuánto dura una consulta cardiológica?",
    // TODO: completar con la duración aproximada de la consulta.
    respuesta: "",
    pendiente: true,
  },
  {
    pregunta:
      "¿Los estudios (ECG, ecocardiograma, Holter, MAPA) se realizan el mismo día?",
    respuesta:
      "Sí. Todos los estudios de diagnóstico se realizan en el propio consultorio, por lo que en muchos casos se pueden coordinar en la misma visita.",
  },
  {
    pregunta: "¿Cómo pido un turno?",
    respuesta:
      "Por WhatsApp al +54 9 11 5594-5109, o llamando al mismo número. Te respondemos con los horarios disponibles.",
  },
  {
    pregunta: "¿Cada cuánto debo hacer un control cardiológico de rutina?",
    // TODO: completar. Conviene que la redacte el Dr. Nieto: la frecuencia
    // depende de la edad y los factores de riesgo de cada paciente.
    respuesta: "",
    pendiente: true,
  },
];

/**
 * Indicaciones para antes del turno.
 * Las tres primeras salen de las preguntas frecuentes ya confirmadas.
 */
export const antesDeLaConsulta: Pregunta[] = [
  {
    pregunta: "Traé tus estudios previos",
    respuesta:
      "Electrocardiogramas, análisis de sangre o informes de otros médicos. Ayudan a comparar y evitar repetir estudios.",
  },
  {
    pregunta: "Llevá tu documentación",
    respuesta: "DNI y carnet de obra social o prepaga, si corresponde.",
  },
  {
    pregunta: "Anotá tu medicación",
    respuesta:
      "Una lista de los remedios que tomás, con su dosis, incluidos los que no son para el corazón.",
  },
  {
    pregunta: "Si te indicaron una ergometría",
    respuesta:
      "Vení con ropa y calzado cómodos para hacer actividad física.",
  },
  {
    pregunta: "Indicaciones adicionales",
    // TODO: completar si el Dr. Nieto quiere sumar indicaciones propias
    // (ayuno para ciertos estudios, suspender medicación, etc.).
    respuesta: "",
    pendiente: true,
  },
];

/**
 * Testimonios de pacientes.
 *
 * Son reseñas reales publicadas por los pacientes en Google. Se transcriben
 * textualmente. No se publican testimonios inventados: si alguno se agrega sin
 * respuesta o sin nombre, la tarjeta no se muestra.
 */
export const testimonios: Testimonio[] = [
  {
    cita: "Excelente servicio. Muy amable tanto la recepción como así también la atención del Dr. Nieto. Se destaca la limpieza del lugar y los detalles naturales dentro del establecimiento.",
    nombre: "María Belen Salas",
    estrellas: 5,
  },
  {
    cita: "Atención de excelencia, al mejor nivel de la medicina moderna. Trato amable del personal administrativo, ni que hablar de la atención médica en sí. Aparatos modernos para todos los estudios cardiológicos.",
    nombre: "Carlos Santillán",
    estrellas: 5,
  },
  {
    cita: "Muy completo y excelente atención.",
    nombre: "Mariano Delgado Velardez",
    estrellas: 5,
  },
  {
    cita: "Muy buena atención!!",
    nombre: "Rossana Fregenal",
    estrellas: 5,
  },
];

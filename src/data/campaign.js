// ============================================================
// Datos de campaña — Integración Graduados
// Consejo Superior UTN · Elecciones 2026 · 2-jun-2026
// ============================================================

export const ELECTION_DATE = "2026-06-02T08:00:00-03:00";

// ----- Propuestas (5 ejes) -----
export const propuestas = [
  {
    n: "01",
    color: "violet",
    title: "Formación continua",
    short:
      "Acompañar a graduados y graduadas durante toda su vida profesional con capacitaciones, posgrados y beneficios.",
    details: [
      "Programas en IA, Industria 4.0, transformación digital, BIM y gestión de proyectos.",
      "Capacitaciones específicas por especialidad de ingeniería y carreras tecnológicas.",
      "Convenios y beneficios en posgrados, especializaciones, certificaciones, idiomas y software técnico.",
      "Bolsa de trabajo federal UTN para fortalecer la inserción laboral.",
      "Mentorías, networking y encuentros técnico-profesionales.",
    ],
  },
  {
    n: "02",
    color: "orange",
    title: "Comunidad y red federal",
    short:
      "Construir una verdadera comunidad de graduados/as UTN con sentido de pertenencia y vínculo federal.",
    details: [
      "Vinculación entre graduados/as de todas las Facultades Regionales.",
      "Espacios de participación y escucha activa del claustro.",
      "Actividades académicas, profesionales y sociales con la Universidad.",
      "Red federal de intercambio de experiencias y oportunidades.",
      "Mentorías entre graduados/as con experiencia y jóvenes profesionales.",
    ],
  },
  {
    n: "03",
    color: "default",
    title: "Ciencia, tecnología e innovación",
    short:
      "Una UTN protagonista del desarrollo tecnológico, productivo y de la soberanía tecnológica del país.",
    details: [
      "Participación de graduados/as en proyectos de desarrollo tecnológico y social (PDTS).",
      "Vinculación Universidad — sector productivo — organismos científico-técnicos.",
      "Defensa del sistema científico-tecnológico nacional.",
      "Innovación, investigación y transferencia tecnológica con graduados/as.",
      "Difusión y debate sobre el impacto territorial de la ingeniería.",
    ],
  },
  {
    n: "04",
    color: "magenta",
    title: "Universidad pública y transparente",
    short:
      "Gobierno universitario participativo, federal, plural y con renovación democrática.",
    details: [
      "Defensa de la educación pública, gratuita y de excelencia.",
      "Gestión transparente y participativa en todos los ámbitos.",
      "Participación directa de graduados y graduadas.",
      "Modernización institucional y transparencia en el uso de recursos.",
      "Reforma integral del Estatuto Universitario.",
      "Límites a las reelecciones indefinidas.",
    ],
  },
  {
    n: "05",
    color: "default",
    title: "Inclusión y accesibilidad",
    short:
      "Una Universidad más inclusiva, accesible y comprometida con los derechos humanos.",
    details: [
      "Políticas institucionales de inclusión y accesibilidad.",
      "Igualdad de oportunidades para graduados y graduadas.",
      "Ambientes académicos y laborales libres de violencia y discriminación.",
      "Cumplimiento de normativas de accesibilidad y discapacidad.",
      "Perspectiva de género y accesibilidad en las políticas universitarias.",
    ],
  },
];

// ----- Consejo Superior — Integración Graduados (lista nacional) -----
export const consejoSuperior = [
  { n: 1,  name: "Ladino",         spec: "Ing. Naval",                                            city: "Buenos Aires",  foto: "/assets/fotos/superior-01.png" },
  { n: 2,  name: "Sartor",         spec: "Ing. en Construcciones · Magíster en Gestión Ambiental", city: "Bahía Blanca", foto: "/assets/fotos/superior-02.png" },
  { n: 3,  name: "Molina",         spec: "Ing. Eléctrica",                                        city: "Tucumán",       foto: "/assets/fotos/superior-03.png" },
  { n: 4,  name: "Zamboni",        spec: "Ing. Civil",                                            city: "Paraná",        foto: "/assets/fotos/superior-04.png" },
  { n: 5,  name: "Liberal",        spec: "Sistemas de Información",                               city: "Mendoza",       foto: "/assets/fotos/superior-05.png" },
  { n: 6,  name: "Gogniat",        spec: "Ing. Naval",                                            city: "Mar del Plata", foto: "/assets/fotos/superior-06.png" },
  { n: 7,  name: "Vallejos",       spec: "Ing. Industrial",                                       city: "Pacheco",       foto: "/assets/fotos/superior-07.png" },
  { n: 8,  name: "Patricia López", spec: "Ing. en Construcciones",                                city: "Paraná",        foto: "/assets/fotos/superior-08.png" },
  { n: 9,  name: "Iznardo",        spec: "Ing. en Sistemas",                                      city: "Resistencia",   foto: "/assets/fotos/superior-09.png" },
  { n: 10, name: "Martínez",       spec: "Ing. Industrial",                                       city: "San Rafael",    foto: "/assets/fotos/superior-10.png" },
];

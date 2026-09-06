export type InterviewTurn = {
  question: string;
  answer: string;
};

export type SurveyBar = {
  label: string;
  value: number;
};

export type SurveyQuestion = {
  id: string;
  title: string;
  context: string;
  analysis: string;
  bars: readonly SurveyBar[];
};

export const evidence = {
  label:
    "Investigación del equipo. 17 de agosto de 2026. n=20. No es resultado de un operador.",
  date: "2026-08-17",
  n: 20,
  interviewRole: "Controlador SITP",
  turns: [
    {
      question:
        "¿Cuál es la parte más difícil cuando hay un exceso de pasajeros y deben ajustar la operación rápidamente?",
      answer:
        "Lo más difícil es que la comunicación es muy manual. Dependemos totalmente del radio y de que nos reporten la TP 19 (ocupación de la estación o plataforma). Mientras el operador del bus nos avisa y nosotros tomamos decisiones, la estación ya colapsó.",
    },
    {
      question: "¿Me puede contar sobre la última vez que le pasó?",
      answer:
        "Ayer en la tarde. Tuvimos un TQ 04 (móvil bloqueado en la vía) en la troncal. Eso generó un efecto dominó: las estaciones se llenaron y los buses que venían atrás se retrasaron.",
    },
    {
      question: "¿Por qué fue tan difícil para usted?",
      answer:
        "Porque no tenemos un sistema predictivo. Nos toca enviar códigos por radio a los demás conductores, TP 69 o TP 70, casi a ciegas, para nivelar la flota.",
    },
    {
      question: "¿Qué ha hecho para resolver este problema?",
      answer:
        "Maniobras manuales según los manuales de contingencia. A veces un bus vacío hace TP 59 o TP 56 para evacuar a la gente acumulada.",
    },
    {
      question: "¿Qué no le ha gustado de las soluciones que ha probado?",
      answer:
        "Es un proceso muy reactivo. El TP 29 se hace cuando el problema ya ocurrió. Faltan herramientas que digan dónde se va a necesitar el bus antes de que la estación se llene.",
    },
    {
      question: "¿Cuánto ha gastado en resolver este problema de asignación ineficiente?",
      answer:
        "Perdemos horas hombre coordinando por radio. Si no cumplimos tiempos o despachos, el ente gestor aplica multas operativas.",
    },
    {
      question: "¿Con qué frecuencia ocurre la congestión imprevista?",
      answer:
        "Diariamente. En cada hora pico hay alguna contingencia, desde un TQ 02 hasta accidentes que obligan a improvisar.",
    },
    {
      question: "¿Dónde se vive la operación real?",
      answer:
        "En los patios operativos cerca de Salitre El Greco, más que en las oficinas administrativas.",
    },
  ] satisfies InterviewTurn[],
  questions: [
    {
      id: "q1",
      title: "Frecuencia de uso",
      context: "Caracteriza a quién respondió.",
      analysis:
        "El 50% (10 personas) usa el sistema 3 o más veces por semana y el 30% lo hace a diario.",
      bars: [
        { label: "3 o más veces por semana", value: 50 },
        { label: "A diario", value: 30 },
      ],
    },
    {
      id: "q2",
      title: "Franjas horarias",
      context: "Opción múltiple. Momento del viaje.",
      analysis:
        "El 80% viaja entre 4:00 y 7:30 p.m. y el 60% entre 6:00 y 8:30 a.m.",
      bars: [
        { label: "16:00–19:30", value: 80 },
        { label: "06:00–08:30", value: 60 },
      ],
    },
    {
      id: "q3",
      title: "Hora fija de llegada",
      context: "Qué tanto duele un retraso.",
      analysis:
        "El 80% tiene hora de llegada y en el 35% llegar tarde tiene consecuencias reales.",
      bars: [
        { label: "Tiene hora de llegada", value: 80 },
        { label: "Consecuencia real si llega tarde", value: 35 },
      ],
    },
    {
      id: "q4",
      title: "Recencia del problema",
      context: "Si el problema es actual.",
      analysis:
        "El 55% dejó pasar vehículos llenos en los últimos 7 días y el 80% dentro del último mes.",
      bars: [
        { label: "Últimos 7 días", value: 55 },
        { label: "Último mes", value: 80 },
      ],
    },
    {
      id: "q5",
      title: "Frecuencia del problema",
      context: "Cuántas veces se repite.",
      analysis: "Al 65% le pasa varias veces por semana.",
      bars: [{ label: "Varias veces por semana", value: 65 }],
    },
    {
      id: "q6",
      title: "Tiempo adicional por evento",
      context: "Magnitud de una ocurrencia.",
      analysis:
        "El 70% pierde 15 minutos o más y el 35% más de media hora por un solo evento.",
      bars: [
        { label: "15 minutos o más", value: 70 },
        { label: "Más de 30 minutos", value: 35 },
      ],
    },
    {
      id: "q7",
      title: "Tiempo estimado al mes",
      context:
        "Estimación del equipo: duración declarada × frecuencia declarada.",
      analysis:
        "El promedio da 3 horas al mes por persona. Un 25% supera las 6 horas mensuales. Esta cifra es una estimación, no una medición de operador.",
      bars: [{ label: "Más de 6 h / mes", value: 25 }],
    },
    {
      id: "q8",
      title: "Estrategias actuales",
      context: "Cómo resuelve hoy la gente.",
      analysis:
        "El 75% sale más temprano, el 30% paga taxi o app, y el 25% no hace nada y aguanta.",
      bars: [
        { label: "Sale más temprano", value: 75 },
        { label: "Paga taxi o app", value: 30 },
        { label: "Aguanta", value: 25 },
      ],
    },
    {
      id: "q9",
      title: "Gasto en alternativas",
      context: "Costo económico el mes pasado.",
      analysis:
        "El 90% gastó algo el mes pasado y el 65% gastó $50.000 o más.",
      bars: [
        { label: "Gastó algo", value: 90 },
        { label: "$50.000 o más", value: 65 },
      ],
    },
    {
      id: "q10",
      title: "Cómo nombran el problema",
      context: "Afirmación con la que se identifican, más texto libre.",
      analysis:
        "El 40% señala el desbalance oferta/demanda, el 25% el estrés y el 20% la puntualidad. En texto libre, aglomeración aparece en 5 respuestas y el trancón en 4 (14 textos, 6 en blanco).",
      bars: [
        { label: "Oferta vs demanda", value: 40 },
        { label: "Estrés", value: 25 },
        { label: "Puntualidad", value: 20 },
      ],
    },
  ] satisfies SurveyQuestion[],
  conclusions:
    "Los resultados obtenidos validan contundentemente el problema bajo las tres dimensiones fundamentales de análisis: existencia, ya que el 80% de los encuestados lo experimentó durante el último mes; recurrencia, evidenciada en un 65% de usuarios que se enfrentan a esta situación varias veces por semana; y costo de impacto, generando una pérdida cuantificable de más de 3 horas y sobrecostos superiores a los $50.000 mensuales para la mayoría de los afectados. Investigación del equipo. n=20.",
} as const;

export type PlanBeatId =
  | "firma"
  | "desajuste"
  | "producto"
  | "limite"
  | "planos"
  | "hoy"
  | "puntos"
  | "ruta"
  | "cierre";

export type PlanVisualKind = PlanBeatId;

export type PlanMargin = {
  code?: string;
  name: string;
};

export type PlanBeat = {
  id: PlanBeatId;
  title: string;
  railLabel: string;
  spoken: string;
  durationMs: number;
  codes: readonly PlanMargin[];
  kind: PlanVisualKind;
};

export const PLAN_TOTAL_MS = 314_000;

export function formatPlanMargin(item: PlanMargin): string {
  return item.code ? `${item.code} ${item.name}` : item.name;
}

export const PLAN_BEATS = [
  {
    id: "firma",
    title: "Firma",
    railLabel: "Firma",
    spoken:
      "LIRN es una firma de movilidad. Aún no está constituida: hoy la conforma una sola persona, su fundador, y ofrece un único producto, TORNS. Por eso la misión es que el transporte masivo ajuste su oferta a quien espera ahora, no solo a lo que el horario predijo. En la misma línea, la visión es que cada estación opere con la demanda que ocurre, no con la que se supuso.",
    durationMs: 28000,
    codes: [
      { code: "OE-01", name: "Producto demostrable" },
      { code: "OE-04", name: "Demanda y oferta" },
    ],
    kind: "firma",
  },
  {
    id: "desajuste",
    title: "Desajuste",
    railLabel: "Desajuste",
    spoken:
      "En un sistema masivo la oferta se fija por horario y por histórico; el andén, en cambio, cambia a cada minuto. Esa diferencia no es menor: quien espera paga el desajuste con vehículos llenos, estaciones desiguales y una espera que el horario no vio. TransMilenio y el SITP de Bogotá sirven aquí como caso de estudio, no como cliente. Por la misma razón, el desajuste aparece también en metro, BRT o tren.",
    durationMs: 32000,
    codes: [{ name: "Caso de estudio" }],
    kind: "desajuste",
  },
  {
    id: "producto",
    title: "Qué hace",
    railLabel: "Producto",
    spoken:
      "TORNS toma el video de una estación, cuenta a las personas que esperan y, con ese número, recomienda al centro de control el tipo de vehículo y cuántas unidades despachar. En concreto, cuenta personas; no calcula densidad por metro cuadrado. La decisión de despacho, además, sigue siendo humana. Así, la herramienta en el terreno se limita a medir y proponer. El edificio de la empresa, por su parte, viene después.",
    durationMs: 42000,
    codes: [
      { code: "CAP-04", name: "Detección y conteo" },
      { code: "CAP-05", name: "Recomendación de despacho" },
    ],
    kind: "producto",
  },
  {
    id: "limite",
    title: "Qué no es",
    railLabel: "Límite",
    spoken:
      "Conviene decir, entonces, lo que no es. No es un piloto firmado ni hay clientes. Tampoco optimiza todas las rutas de la ciudad ni predice la demanda histórica: cuenta personas y aplica una regla de despacho. Aun así, el prototipo existe y se puede consultar, porque el sitio, la página del producto y el código están publicados.",
    durationMs: 28000,
    codes: [{ name: "Prototipo, no piloto" }],
    kind: "limite",
  },
  {
    id: "planos",
    title: "El taller",
    railLabel: "Taller",
    spoken:
      "El taller pidió aplicar TOGAF a una organización real y diseñar una arquitectura que apoye sus objetivos. La organización es LIRN; el único producto es TORNS. El método es como los planos de una obra: primero el AS-IS, lo que existe; después el TO-BE, lo que se quiere levantar; y al final el orden de la obra. El resultado es un informe único: el Plan de Transformación Empresarial.",
    durationMs: 29000,
    codes: [
      { name: "ADM de TOGAF" },
      { name: "Puntos 1 a 5" },
    ],
    kind: "planos",
  },
  {
    id: "hoy",
    title: "Qué hay hoy",
    railLabel: "Hoy",
    spoken:
      "Hoy el terreno es estrecho. LIRN aún no está constituida y la conforma una sola persona, su fundador. TORNS es un prototipo aplicado: toma video, cuenta personas y recomienda despacho. No es un piloto firmado y no hay clientes. TransMilenio y el SITP sirven como caso de estudio. Cinco procesos cubren dirección, contacto, producto, acompañamiento y evidencia. El software, además, vive en cuatro superficies, en un solo computador. El conteo se pierde al apagar. No hay respaldo. El video puede incluir imagen de personas y todavía no hay una política de datos publicada.",
    durationMs: 40000,
    codes: [
      { name: "Observado" },
      { name: "P-01 a P-05" },
    ],
    kind: "hoy",
  },
  {
    id: "puntos",
    title: "Los cinco puntos",
    railLabel: "Puntos",
    spoken:
      "Con ese terreno se recorrieron los cinco puntos del taller. En negocio se fijaron misión, visión y cinco objetivos, un organigrama de una persona, el mapa de procesos y las capacidades que existen y las que faltan. En datos se inventarió lo que circula: leads, encuesta, video, conteos y código; y se vio el problema: memoria volátil y una hoja de cálculo suelta. En aplicaciones se describieron las cuatro superficies y se constató que no hay CRM ni ERP, y que abrir el video dispara la inferencia. En tecnología se documentó la estación de trabajo, las páginas públicas, una GPU obsoleta y un disco cerca de su capacidad; la nube quedó como alternativa, no como decisión tomada. En transformación se cruzó el AS-IS con el TO-BE, se nombraron veintiséis brechas y se armó el portafolio y la hoja de ruta a cinco años.",
    durationMs: 61000,
    codes: [
      { name: "Punto 1 Negocio" },
      { name: "Punto 2 Datos" },
      { name: "Punto 3 Aplicaciones" },
      { name: "Punto 4 Tecnología" },
      { name: "Punto 5 Roadmap" },
    ],
    kind: "puntos",
  },
  {
    id: "ruta",
    title: "Cinco años",
    railLabel: "Ruta",
    spoken:
      "El edificio que se quiere no es una empresa grande. Es una firma pequeña que ya no dependa de un solo computador ni de una sola persona. Por eso el orden es estricto. En el primer año: formalizar, abrir un canal honesto y respaldar lo crítico. Entre el primero y el tercero: video real de estación y un primer piloto pagado. Entre el tercero y el quinto: llevar la recomendación al operador, con decisión humana.",
    durationMs: 32000,
    codes: [
      { code: "PY-01", name: "Formalización legal" },
      { code: "PY-03", name: "Canal comercial" },
      { code: "PY-07", name: "Seguridad y respaldo" },
      { code: "PY-05", name: "Video de estación" },
      { code: "PY-08", name: "Primer piloto pagado" },
      { code: "PY-06", name: "Integración con el centro de control" },
    ],
    kind: "ruta",
  },
  {
    id: "cierre",
    title: "Cierre",
    railLabel: "Cierre",
    spoken:
      "Así, la arquitectura ayuda porque cada objetivo tiene un proyecto y un horizonte. No hay un impacto comercial que afirmar. Hay un camino: mostrar, cobrar y, solo al final, conectar. LIRN seguirá siendo una empresa pequeña; no debería, sin embargo, depender de un solo computador ni de una sola persona.",
    durationMs: 22000,
    codes: [
      { name: "Pregunta del taller" },
      { code: "OE-01 a OE-05", name: "Objetivos estratégicos" },
    ],
    kind: "cierre",
  },
] as const satisfies readonly PlanBeat[];

export function beatIdFromHash(hash: string): PlanBeatId | undefined {
  const id = hash.replace(/^#/, "");
  return PLAN_BEATS.some((beat) => beat.id === id)
    ? (id as PlanBeatId)
    : undefined;
}

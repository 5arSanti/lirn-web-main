export type PlanBeatId =
  | "firma"
  | "desajuste"
  | "producto"
  | "limite"
  | "planos"
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

export const PLAN_TOTAL_MS = 240_000;

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
    title: "Planos",
    railLabel: "Planos",
    spoken:
      "Para pasar de prototipo a empresa se usó arquitectura empresarial. El método, en ese sentido, es como los planos de una obra: primero se dibuja lo que existe; después, lo que se quiere levantar; y, al final, el orden en que conviene construirlo. Hoy LIRN cabe en un computador y en una persona. Eso, por ahora, es el terreno, no el edificio.",
    durationMs: 38000,
    codes: [{ name: "ADM de TOGAF" }],
    kind: "planos",
  },
  {
    id: "ruta",
    title: "Cinco años",
    railLabel: "Ruta",
    spoken:
      "El cambio, por tanto, va en un orden. Primero la empresa tiene que existir y tratar bien los datos de las personas. Solo entonces puede medir con rigor y no perder el conteo al apagar. Después puede cobrar por lo que mide. Únicamente al final tiene sentido conectarse con el control de un tercero. Así, en el primer año corresponde formalizar, abrir un canal honesto y respaldar lo crítico. Entre el primero y el tercero entra el video real de estación y un primer piloto pagado. Entre el tercero y el quinto, por último, llevar la recomendación al operador.",
    durationMs: 52000,
    codes: [
      { code: "PY-01", name: "Formalización legal" },
      { code: "PY-03", name: "Canal comercial" },
      { code: "PY-07", name: "Seguridad y respaldo" },
      { code: "PY-04", name: "Historial de conteos" },
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
      "Al final, LIRN seguirá siendo una empresa pequeña; no debería, sin embargo, depender de un solo computador ni de una sola persona. Cada paso, además, se puede seguir desde el objetivo que lo motiva hasta el proyecto que lo cumple.",
    durationMs: 20000,
    codes: [{ code: "OE-01 a OE-05", name: "Objetivos estratégicos" }],
    kind: "cierre",
  },
] as const satisfies readonly PlanBeat[];

export function beatIdFromHash(hash: string): PlanBeatId | undefined {
  const id = hash.replace(/^#/, "");
  return PLAN_BEATS.some((beat) => beat.id === id)
    ? (id as PlanBeatId)
    : undefined;
}

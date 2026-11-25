import { describe, expect, it } from "vitest";
import {
  PLAN_BEATS,
  PLAN_TOTAL_MS,
  beatIdFromHash,
  formatPlanMargin,
} from "./plan";

const SPOKEN = {
  firma:
    "LIRN es una firma de movilidad. Aún no está constituida: hoy la conforma una sola persona, su fundador, y ofrece un único producto, TORNS. Por eso la misión es que el transporte masivo ajuste su oferta a quien espera ahora, no solo a lo que el horario predijo. En la misma línea, la visión es que cada estación opere con la demanda que ocurre, no con la que se supuso.",
  desajuste:
    "En un sistema masivo la oferta se fija por horario y por histórico; el andén, en cambio, cambia a cada minuto. Esa diferencia no es menor: quien espera paga el desajuste con vehículos llenos, estaciones desiguales y una espera que el horario no vio. TransMilenio y el SITP de Bogotá sirven aquí como caso de estudio, no como cliente. Por la misma razón, el desajuste aparece también en metro, BRT o tren.",
  producto:
    "TORNS toma el video de una estación, cuenta a las personas que esperan y, con ese número, recomienda al centro de control el tipo de vehículo y cuántas unidades despachar. En concreto, cuenta personas; no calcula densidad por metro cuadrado. La decisión de despacho, además, sigue siendo humana. Así, la herramienta en el terreno se limita a medir y proponer. El edificio de la empresa, por su parte, viene después.",
  limite:
    "Conviene decir, entonces, lo que no es. No es un piloto firmado ni hay clientes. Tampoco optimiza todas las rutas de la ciudad ni predice la demanda histórica: cuenta personas y aplica una regla de despacho. Aun así, el prototipo existe y se puede consultar, porque el sitio, la página del producto y el código están publicados.",
  planos:
    "El taller pidió aplicar TOGAF a una organización real y diseñar una arquitectura que apoye sus objetivos. La organización es LIRN; el único producto es TORNS. El método es como los planos de una obra: primero el AS-IS, lo que existe; después el TO-BE, lo que se quiere levantar; y al final el orden de la obra. El resultado es un informe único: el Plan de Transformación Empresarial.",
  hoy: "Hoy el terreno es estrecho. LIRN aún no está constituida y la conforma una sola persona, su fundador. TORNS es un prototipo aplicado: toma video, cuenta personas y recomienda despacho. No es un piloto firmado y no hay clientes. TransMilenio y el SITP sirven como caso de estudio. Cinco procesos cubren dirección, contacto, producto, acompañamiento y evidencia. El software, además, vive en cuatro superficies, en un solo computador. El conteo se pierde al apagar. No hay respaldo. El video puede incluir imagen de personas y todavía no hay una política de datos publicada.",
  puntos:
    "Con ese terreno se recorrieron los cinco puntos del taller. En negocio se fijaron misión, visión y cinco objetivos, un organigrama de una persona, el mapa de procesos y las capacidades que existen y las que faltan. En datos se inventarió lo que circula: leads, encuesta, video, conteos y código; y se vio el problema: memoria volátil y una hoja de cálculo suelta. En aplicaciones se describieron las cuatro superficies y se constató que no hay CRM ni ERP, y que abrir el video dispara la inferencia. En tecnología se documentó la estación de trabajo, las páginas públicas, una GPU obsoleta y un disco cerca de su capacidad; la nube quedó como alternativa, no como decisión tomada. En transformación se cruzó el AS-IS con el TO-BE, se nombraron veintiséis brechas y se armó el portafolio y la hoja de ruta a cinco años.",
  ruta: "El edificio que se quiere no es una empresa grande. Es una firma pequeña que ya no dependa de un solo computador ni de una sola persona. Por eso el orden es estricto. En el primer año: formalizar, abrir un canal honesto y respaldar lo crítico. Entre el primero y el tercero: video real de estación y un primer piloto pagado. Entre el tercero y el quinto: llevar la recomendación al operador, con decisión humana.",
  cierre:
    "Así, la arquitectura ayuda porque cada objetivo tiene un proyecto y un horizonte. No hay un impacto comercial que afirmar. Hay un camino: mostrar, cobrar y, solo al final, conectar. LIRN seguirá siendo una empresa pequeña; no debería, sin embargo, depender de un solo computador ni de una sola persona.",
} as const;

describe("PLAN_BEATS", () => {
  it("keeps nine timed scenes and the canonical spoken text", () => {
    expect(PLAN_BEATS.map((beat) => beat.id)).toEqual([
      "firma",
      "desajuste",
      "producto",
      "limite",
      "planos",
      "hoy",
      "puntos",
      "ruta",
      "cierre",
    ]);
    expect(PLAN_BEATS.map((beat) => beat.durationMs)).toEqual([
      28000, 32000, 42000, 28000, 29000, 40000, 61000, 32000, 22000,
    ]);
    expect(PLAN_BEATS.reduce((sum, beat) => sum + beat.durationMs, 0)).toBe(
      PLAN_TOTAL_MS,
    );
    expect(PLAN_TOTAL_MS).toBe(314000);
    for (const beat of PLAN_BEATS) {
      expect(beat.spoken).toBe(SPOKEN[beat.id]);
      expect(beat.kind).toBe(beat.id);
      expect(beat.codes.length).toBeGreaterThan(0);
      for (const item of beat.codes) {
        const label = formatPlanMargin(item);
        expect(label.length).toBeGreaterThan(3);
        if ("code" in item && item.code) {
          expect(label.startsWith(item.code)).toBe(true);
          expect(label).toContain(item.name);
        }
      }
    }
  });

  it("rejects forbidden commercial and identity claims", () => {
    const blob = PLAN_BEATS.map((beat) => beat.spoken).join(" ");
    const stripped = blob.replace(/No es un piloto firmado/g, "");
    expect(stripped).not.toMatch(/piloto firmado/);
    expect(blob).not.toMatch(
      /TRO\b|Sistema de Vigilancia|Transport Route Optimization/,
    );
    expect(blob).not.toMatch(/alianza|testimonio|\bAzure\b|\bGCP\b/);
    expect(blob).not.toMatch(/Rebeca|Hanna Cerinza/);
    expect(blob).toMatch(/caso de estudio/);
    expect(blob).toMatch(/Por eso|En la misma línea|además|entonces|por tanto|Por la misma razón/);
  });

  it("reads beat ids from hashes", () => {
    expect(beatIdFromHash("#ruta")).toBe("ruta");
    expect(beatIdFromHash("#hoy")).toBe("hoy");
    expect(beatIdFromHash("#puntos")).toBe("puntos");
    expect(beatIdFromHash("firma")).toBe("firma");
    expect(beatIdFromHash("#nope")).toBeUndefined();
  });
});

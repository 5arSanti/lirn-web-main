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
    "Para pasar de prototipo a empresa se usó arquitectura empresarial. El método, en ese sentido, es como los planos de una obra: primero se dibuja lo que existe; después, lo que se quiere levantar; y, al final, el orden en que conviene construirlo. Hoy LIRN cabe en un computador y en una persona. Eso, por ahora, es el terreno, no el edificio.",
  ruta: "El cambio, por tanto, va en un orden. Primero la empresa tiene que existir y tratar bien los datos de las personas. Solo entonces puede medir con rigor y no perder el conteo al apagar. Después puede cobrar por lo que mide. Únicamente al final tiene sentido conectarse con el control de un tercero. Así, en el primer año corresponde formalizar, abrir un canal honesto y respaldar lo crítico. Entre el primero y el tercero entra el video real de estación y un primer piloto pagado. Entre el tercero y el quinto, por último, llevar la recomendación al operador.",
  cierre:
    "Al final, LIRN seguirá siendo una empresa pequeña; no debería, sin embargo, depender de un solo computador ni de una sola persona. Cada paso, además, se puede seguir desde el objetivo que lo motiva hasta el proyecto que lo cumple.",
} as const;

describe("PLAN_BEATS", () => {
  it("keeps seven timed scenes and the canonical spoken text", () => {
    expect(PLAN_BEATS.map((beat) => beat.id)).toEqual([
      "firma",
      "desajuste",
      "producto",
      "limite",
      "planos",
      "ruta",
      "cierre",
    ]);
    expect(PLAN_BEATS.map((beat) => beat.durationMs)).toEqual([
      28000, 32000, 42000, 28000, 38000, 52000, 20000,
    ]);
    expect(PLAN_BEATS.reduce((sum, beat) => sum + beat.durationMs, 0)).toBe(
      PLAN_TOTAL_MS,
    );
    expect(PLAN_TOTAL_MS).toBe(240000);
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
    expect(beatIdFromHash("firma")).toBe("firma");
    expect(beatIdFromHash("#nope")).toBeUndefined();
  });
});

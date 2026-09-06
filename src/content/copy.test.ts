import { describe, expect, it } from "vitest";
import { copy } from "./copy";

describe("copy", () => {
  it("publishes the approved mission and vision", () => {
    expect(copy.mission).toBe(
      "Hacer que el transporte masivo ajuste su oferta a la demanda real de cada estación, midiendo quién espera ahora y no solo lo que el horario predijo.",
    );
    expect(copy.vision).toBe(
      "Que cada estación de un sistema masivo opere con la demanda que ocurre, no con la que se supuso.",
    );
  });

  it("positions LIRN with the locked hero and contact rules", () => {
    expect(copy.heroHeadline).toBe("La demanda no espera.");
    expect(copy.byLirn).toBe("by LIRN");
    expect(copy.ctaTalk).toBe("Hablemos");
    const blob = Object.values(copy).join(" ").toLowerCase();
    expect(blob).not.toMatch(/comprar|newsletter/);
    expect(blob).not.toMatch(/\bdemo\b/);
  });

  it("frames Transmilenio as an applied prototype, not a signed pilot", () => {
    expect(copy.caseFrame).toMatch(/caso de estudio/i);
    expect(copy.caseFrame).toMatch(/prototipo aplicado/i);
    expect(copy.caseNotPilot.toLowerCase()).toMatch(/no es un piloto firmado/);
    expect(copy.problemBody).toMatch(/Transmilenio/);
  });

  it("keeps home capability free of YOLO and of the Transmilenio paragraph", () => {
    const homeCaps = [
      copy.capMeasure,
      copy.capMeasureBody,
      copy.capSee,
      copy.capSeeBody,
      copy.capRecommend,
      copy.capRecommendBody,
    ].join(" ");
    expect(homeCaps).not.toMatch(/YOLO|Transmilenio/i);
  });
});

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
    expect(copy.missionLabel).toBe("Misión");
    expect(copy.visionLabel).toBe("Visión");
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

  it("names the TORNS chapter film chrome", () => {
    expect(copy.chapterProduct).toBe("Producto");
    expect(copy.chapterSystem).toBe("Sistema");
    expect(copy.chapterCase).toBe("Caso");
    expect(copy.chapterClose).toBe("Cierre");
    expect(copy.questionProgress).toBe("Pregunta {n} de 10");
    expect(copy.controlPrev).toBe("Anterior");
    expect(copy.controlNext).toBe("Siguiente");
    expect(copy.detectHint).toBe("Detección, no un conteo de operador.");
    expect(copy.actEspera).toBe("Espera");
    expect(copy.actVe).toBe("Ve");
    expect(copy.actMide).toBe("Mide");
    expect(copy.actActua).toBe("Actúa");
  });

  it("names TORNS team, empresa chapter, and live contact form chrome", () => {
    expect(copy.chapterEmpresa).toBe("Empresa");
    expect(copy.chapterContact).toBe("Contacto");
    expect(copy.teamMembers).toEqual([
      "Rebeca Pedrozo Cueto",
      "Johel Santiago Arias Becerra",
      "Hanna Cerinza Contreras",
    ]);
    expect(copy.contactFormTitle).toBe("Contacto");
    expect(copy.contactFormBody).toMatch(/sistema masivo/i);
    expect(copy.contactNameLabel).toBe("Nombre");
    expect(copy.contactEmailLabel).toBe("Email");
    expect(copy.contactOrgLabel).toBe("Organización");
    expect(copy.contactMessageLabel).toBe("Mensaje");
    expect(copy.contactSubmit).toBe("Enviar");
    expect(copy.contactSending).toBe("Enviando…");
    expect(copy.contactSuccess).toMatch(/recibimos/i);
    expect(copy.contactError).toMatch(/intente de nuevo/i);
    expect(copy.contactMissingEndpoint).toMatch(/no configurado/i);
    expect(copy.contactRequired).toMatch(/obligatorio/i);
    expect(copy.contactInvalidEmail).toMatch(/email/i);
  });
});

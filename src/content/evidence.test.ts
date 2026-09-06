import { describe, expect, it } from "vitest";
import { evidence } from "./evidence";

describe("evidence", () => {
  it("labels the instrument as team research with n=20", () => {
    expect(evidence.n).toBe(20);
    expect(evidence.date).toBe("2026-08-17");
    expect(evidence.label.toLowerCase()).toMatch(/investigación del equipo/);
    expect(evidence.label).toMatch(/n=20/);
    expect(evidence.label.toLowerCase()).toMatch(/no es resultado de un operador/);
  });

  it("keeps the SITP interview without naming a person", () => {
    expect(evidence.interviewRole).toBe("Controlador SITP");
    expect(evidence.turns.length).toBe(8);
    const blob = JSON.stringify(evidence).toLowerCase();
    expect(blob).not.toMatch(/universidad libre|estudiantes/);
    expect(blob).toMatch(/tp 19/);
  });

  it("publishes ten survey questions and the written conclusions", () => {
    expect(evidence.questions).toHaveLength(10);
    expect(evidence.questions[3]?.id).toBe("q4");
    expect(evidence.conclusions).toMatch(/80%/);
    expect(evidence.questions[6]?.analysis.toLowerCase()).toMatch(/estimaci/);
  });

  it("keeps the q7 estimate in prose and only charts the measured percentage", () => {
    const q7 = evidence.questions.find((question) => question.id === "q7");

    expect(q7?.analysis).toMatch(/3 horas al mes/);
    expect(q7?.bars).toEqual([{ label: "Más de 6 h / mes", value: 25 }]);
  });
});

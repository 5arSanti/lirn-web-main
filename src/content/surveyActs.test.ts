import { describe, expect, it } from "vitest";
import { evidence } from "./evidence";
import { SURVEY_ACT_TAGS, chartFormFor } from "./surveyActs";

describe("surveyActs", () => {
  it("tags every survey question with a System act", () => {
    expect(SURVEY_ACT_TAGS).toEqual({
      q1: "Espera",
      q2: "Espera",
      q3: "Espera",
      q4: "Ve",
      q5: "Ve",
      q6: "Mide",
      q7: "Mide",
      q8: "Actúa",
      q9: "Mide",
      q10: "Actúa",
    });
    for (const question of evidence.questions) {
      expect(SURVEY_ACT_TAGS[question.id]).toBeDefined();
    }
  });

  it("picks the locked chart form per question", () => {
    expect(chartFormFor("q5")).toBe("hero");
    expect(chartFormFor("q7")).toBe("hero");
    expect(chartFormFor("q2")).toBe("peaks");
    expect(chartFormFor("q8")).toBe("ranking");
    expect(chartFormFor("q10")).toBe("ranking");
    expect(chartFormFor("q1")).toBe("dual");
    expect(chartFormFor("q3")).toBe("dual");
    expect(chartFormFor("q4")).toBe("dual");
    expect(chartFormFor("q6")).toBe("dual");
    expect(chartFormFor("q9")).toBe("dual");
  });
});

export type ActTag = "Espera" | "Ve" | "Mide" | "Actúa";
export type ChartForm = "hero" | "dual" | "peaks" | "ranking";

export const SURVEY_ACT_TAGS: Record<string, ActTag> = {
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
};

export function chartFormFor(id: string): ChartForm {
  if (id === "q5" || id === "q7") {
    return "hero";
  }
  if (id === "q2") {
    return "peaks";
  }
  if (id === "q8" || id === "q10") {
    return "ranking";
  }
  return "dual";
}

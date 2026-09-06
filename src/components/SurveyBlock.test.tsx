import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { evidence } from "../content/evidence";
import { SurveyBlock } from "./SurveyBlock";

it("renders ten questions, charts, conclusions, and the n=20 label", () => {
  render(<SurveyBlock />);
  expect(screen.getAllByText(evidence.label).length).toBeGreaterThan(0);
  for (const question of evidence.questions) {
    expect(screen.getByText(question.title)).toBeInTheDocument();
  }
  expect(screen.getByText(evidence.conclusions)).toBeInTheDocument();
  expect(document.querySelectorAll(".survey-bar-fill").length).toBeGreaterThan(9);
});

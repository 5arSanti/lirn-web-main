import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { SurveyBlock } from "./SurveyBlock";

it("renders the n=20 label, staged questions, charts, and conclusions", async () => {
  const user = userEvent.setup();
  render(<SurveyBlock />);
  expect(screen.getAllByText(evidence.label).length).toBeGreaterThan(0);
  expect(screen.getByText(evidence.questions[0].title)).toBeInTheDocument();
  expect(screen.getByText(evidence.conclusions)).toBeInTheDocument();
  expect(document.querySelectorAll(".torns-chart-fill").length).toBeGreaterThan(0);

  for (let i = 0; i < 6; i += 1) {
    await user.click(screen.getByRole("button", { name: copy.controlNext }));
  }
  expect(screen.getByText(evidence.questions[6].title)).toBeInTheDocument();
  expect(document.querySelector('[data-hero="25"]')).not.toBeNull();
  expect(document.querySelector('[data-value="100"]')).toBeNull();
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { EvidenceStage } from "./EvidenceStage";

it("stages one question, tags the act, and reaches all ten", async () => {
  const user = userEvent.setup();
  render(<EvidenceStage />);

  expect(screen.getByText("Pregunta 1 de 10")).toBeInTheDocument();
  expect(screen.getByText(copy.actEspera)).toBeInTheDocument();
  expect(screen.getByText(evidence.questions[0].title)).toBeInTheDocument();
  expect(screen.getByText(evidence.questions[0].analysis)).toBeInTheDocument();
  expect(screen.getByText(`n=${evidence.n}`)).toBeInTheDocument();
  expect(screen.queryByText(evidence.questions[9].title)).not.toBeInTheDocument();

  for (let i = 0; i < 9; i += 1) {
    await user.click(screen.getByRole("button", { name: copy.controlNext }));
  }
  expect(screen.getByText("Pregunta 10 de 10")).toBeInTheDocument();
  expect(screen.getByText(evidence.questions[9].title)).toBeInTheDocument();
  expect(screen.getByText(copy.actActua)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: copy.controlNext })).toBeDisabled();
});

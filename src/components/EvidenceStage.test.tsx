import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { EvidenceStage } from "./EvidenceStage";

it("stages one question, tags the act, and reaches all ten", async () => {
  const user = userEvent.setup();
  const { container } = render(<EvidenceStage />);

  expect(screen.getByText("Pregunta 1 de 10")).toBeInTheDocument();
  expect(screen.getByText(copy.actEspera)).toBeInTheDocument();
  expect(screen.getByText(evidence.questions[0].analysis)).toBeInTheDocument();
  expect(screen.getByText(`n=${evidence.n}`)).toBeInTheDocument();
  expect(screen.queryByText(evidence.questions[9].title)).not.toBeInTheDocument();

  for (const [index, question] of evidence.questions.entries()) {
    expect(screen.getByText(question.title)).toBeInTheDocument();
    if (question.id === "q7") {
      expect(container.querySelector('[data-hero="25"]')).not.toBeNull();
    }
    if (index < evidence.questions.length - 1) {
      await user.click(screen.getByRole("button", { name: copy.controlNext }));
    }
  }

  expect(screen.getByText("Pregunta 10 de 10")).toBeInTheDocument();
  expect(screen.getByText(copy.actActua)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: copy.controlNext })).toHaveAttribute(
    "aria-disabled",
    "true",
  );
});

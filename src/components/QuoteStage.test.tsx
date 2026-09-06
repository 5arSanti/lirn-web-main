import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { QuoteStage } from "./QuoteStage";

it("shows one controller turn and reaches all eight", async () => {
  const user = userEvent.setup();
  render(<QuoteStage />);

  expect(screen.getByText(evidence.turns[0].question)).toBeInTheDocument();
  expect(screen.getByText(evidence.turns[0].answer)).toBeInTheDocument();
  expect(screen.queryByText(evidence.turns[7].question)).not.toBeInTheDocument();

  for (let i = 0; i < 7; i += 1) {
    await user.click(screen.getByRole("button", { name: copy.controlNext }));
  }
  expect(screen.getByText(evidence.turns[7].question)).toBeInTheDocument();
  expect(screen.getByText(evidence.turns[7].answer)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: copy.controlNext })).toBeDisabled();
});

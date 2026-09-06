import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { PipelineTrack } from "./PipelineTrack";

it("ignites the first step and moves without wrapping", async () => {
  const user = userEvent.setup();
  render(<PipelineTrack />);

  expect(screen.getByText(copy.systemSteps[0])).toBeInTheDocument();
  expect(screen.getByText(copy.systemStepBodies[0])).toBeInTheDocument();
  expect(screen.getByRole("listitem", { current: "step" })).toHaveTextContent(
    copy.systemSteps[0],
  );

  await user.click(screen.getByRole("button", { name: copy.controlNext }));
  expect(screen.getByText(copy.systemStepBodies[1])).toBeInTheDocument();

  for (let i = 0; i < 5; i += 1) {
    await user.click(screen.getByRole("button", { name: copy.controlNext }));
  }
  expect(screen.getByText(copy.systemStepBodies[5])).toBeInTheDocument();
  expect(screen.getByRole("button", { name: copy.controlNext })).toHaveAttribute(
    "aria-disabled",
    "true",
  );
});

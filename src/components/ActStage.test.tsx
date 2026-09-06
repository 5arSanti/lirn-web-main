import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { ActStage } from "./ActStage";

it("starts on act 1 and advances without wrapping", async () => {
  const user = userEvent.setup();
  render(<ActStage />);

  expect(screen.getByText(copy.storyWaitTitle)).toBeInTheDocument();
  expect(screen.queryByText(copy.storyActTitle)).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: copy.controlPrev })).toHaveAttribute(
    "aria-disabled",
    "true",
  );

  await user.click(screen.getByRole("button", { name: copy.controlNext }));
  expect(screen.getByText(copy.storySeeTitle)).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: copy.controlNext }));
  expect(screen.getByText(copy.storyMeasureTitle)).toBeInTheDocument();
  expect(screen.getByText(copy.detectHint)).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: copy.controlNext }));
  expect(screen.getByText(copy.storyActTitle)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: copy.controlNext })).toHaveAttribute(
    "aria-disabled",
    "true",
  );

  await user.click(screen.getByRole("button", { name: copy.controlNext }));
  expect(screen.getByText(copy.storyActTitle)).toBeInTheDocument();
});

it("keeps the expected/real schematic qualitative", () => {
  const { container } = render(<ActStage />);
  const scheme = container.querySelector("[data-act='espera']");
  expect(scheme).not.toBeNull();
  expect(scheme?.textContent).toContain(copy.problemExpected);
  expect(scheme?.textContent).toContain(copy.problemReal);
  expect(scheme?.textContent).not.toMatch(/%/);
});

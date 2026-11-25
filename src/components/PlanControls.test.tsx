import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import { PLAN_TOTAL_MS } from "../content/plan";
import { copy } from "../content/copy";
import { PlanControls } from "./PlanControls";

it("exposes play, pause, skip, and a progress bar for the full plan", async () => {
  const user = userEvent.setup();
  const onPrev = vi.fn();
  const onNext = vi.fn();
  const onToggle = vi.fn();
  const { rerender } = render(
    <PlanControls
      playing={false}
      atStart
      atEnd={false}
      totalElapsedMs={0}
      totalMs={PLAN_TOTAL_MS}
      onPrev={onPrev}
      onNext={onNext}
      onToggle={onToggle}
    />,
  );
  expect(
    screen.getByRole("progressbar", { name: copy.planTimeLabel }),
  ).toHaveAttribute("max", String(Math.round(PLAN_TOTAL_MS / 1000)));
  await user.click(screen.getByRole("button", { name: copy.controlPlay }));
  expect(onToggle).toHaveBeenCalledOnce();
  rerender(
    <PlanControls
      playing
      atStart={false}
      atEnd={false}
      totalElapsedMs={157000}
      totalMs={PLAN_TOTAL_MS}
      onPrev={onPrev}
      onNext={onNext}
      onToggle={onToggle}
    />,
  );
  expect(
    screen.getByRole("button", { name: copy.controlPause }),
  ).toBeInTheDocument();
  expect(screen.getByRole("progressbar")).toHaveAttribute("value", "157");
});

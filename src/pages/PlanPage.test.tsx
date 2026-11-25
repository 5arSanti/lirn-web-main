import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, it } from "vitest";
import { PLAN_BEATS } from "../content/plan";
import { copy } from "../content/copy";
import { PlanPage } from "./PlanPage";

afterEach(() => {
  cleanup();
});

it("plays the nine scenes by hand and keeps closing CTAs", async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={["/plan"]}>
      <PlanPage />
    </MemoryRouter>,
  );
  expect(screen.getByRole("main")).toHaveAccessibleName(copy.planAria);
  expect(screen.getByText(PLAN_BEATS[0].spoken)).toBeInTheDocument();
  expect(screen.getByText(PLAN_BEATS[0].spoken)).toHaveAttribute(
    "aria-live",
    "polite",
  );
  for (let i = 0; i < 8; i += 1) {
    await user.click(screen.getByRole("button", { name: copy.controlNext }));
  }
  expect(screen.getByText(PLAN_BEATS[8].spoken)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: copy.verTorns })).toHaveAttribute(
    "href",
    "/torns",
  );
  expect(screen.getByRole("link", { name: copy.ctaTalk })).toHaveAttribute(
    "href",
    "/torns#contacto",
  );
});

it("lands on a hashed scene paused", () => {
  render(
    <MemoryRouter initialEntries={["/plan#ruta"]}>
      <PlanPage />
    </MemoryRouter>,
  );
  const ruta = PLAN_BEATS.find((beat) => beat.id === "ruta");
  expect(ruta).toBeDefined();
  expect(screen.getByText(ruta!.spoken)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: copy.controlPlay }),
  ).toBeInTheDocument();
});

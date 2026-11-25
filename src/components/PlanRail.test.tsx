import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import { PLAN_BEATS } from "../content/plan";
import { PlanRail } from "./PlanRail";

it("lists seven chapters and reports the current beat", async () => {
  const onSelect = vi.fn();
  const user = userEvent.setup();
  render(
    <PlanRail
      beats={PLAN_BEATS}
      currentId="producto"
      onSelect={onSelect}
    />,
  );
  const nav = screen.getByRole("navigation", { name: "Plan de LIRN" });
  expect(nav.querySelectorAll("a")).toHaveLength(7);
  expect(screen.getByRole("link", { name: "Ruta" })).toHaveAttribute(
    "href",
    "#ruta",
  );
  await user.click(screen.getByRole("link", { name: "Límite" }));
  expect(onSelect).toHaveBeenCalledWith("limite");
});

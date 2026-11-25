import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { PLAN_BEATS } from "../content/plan";
import { copy } from "../content/copy";
import { PlanStage } from "./PlanStage";

function beat(id: (typeof PLAN_BEATS)[number]["id"]) {
  return PLAN_BEATS.find((item) => item.id === id)!;
}

function renderStage(id: (typeof PLAN_BEATS)[number]["id"]) {
  return render(
    <MemoryRouter>
      <PlanStage beat={beat(id)} />
    </MemoryRouter>,
  );
}

it("renders the firma wordmark line and the seven visual kinds", () => {
  const { rerender } = renderStage("firma");
  expect(screen.getByText(copy.planOnePerson)).toBeInTheDocument();
  expect(screen.getByText(beat("firma").spoken)).toBeInTheDocument();
  expect(screen.getByText("OE-01 Producto demostrable")).toBeInTheDocument();

  rerender(
    <MemoryRouter>
      <PlanStage beat={beat("desajuste")} />
    </MemoryRouter>,
  );
  expect(screen.getByText(copy.planHorario)).toBeInTheDocument();
  expect(screen.getByText(copy.planWaiting)).toBeInTheDocument();

  rerender(
    <MemoryRouter>
      <PlanStage beat={beat("producto")} />
    </MemoryRouter>,
  );
  expect(screen.getByText(copy.planNodeCamera)).toBeInTheDocument();
  expect(screen.getByText(copy.byLirn)).toBeInTheDocument();

  rerender(
    <MemoryRouter>
      <PlanStage beat={beat("limite")} />
    </MemoryRouter>,
  );
  expect(screen.getByText(copy.planLimitNetwork)).toBeInTheDocument();

  rerender(
    <MemoryRouter>
      <PlanStage beat={beat("planos")} />
    </MemoryRouter>,
  );
  expect(screen.getByText(copy.planGround)).toBeInTheDocument();
  expect(screen.getByText(copy.planBuilding)).toBeInTheDocument();

  rerender(
    <MemoryRouter>
      <PlanStage beat={beat("ruta")} />
    </MemoryRouter>,
  );
  expect(screen.getByText(copy.planHorizonShort)).toBeInTheDocument();
  expect(screen.getByText("PY-08 Primer piloto pagado")).toBeInTheDocument();

  rerender(
    <MemoryRouter>
      <PlanStage beat={beat("cierre")} />
    </MemoryRouter>,
  );
  expect(screen.getByRole("link", { name: copy.verTorns })).toHaveAttribute(
    "href",
    "/torns",
  );
  expect(screen.getByRole("link", { name: copy.ctaTalk })).toHaveAttribute(
    "href",
    "/torns#contacto",
  );
});

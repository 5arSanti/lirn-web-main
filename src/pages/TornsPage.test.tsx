import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { TornsPage } from "./TornsPage";

it("speaks as TORNS by LIRN with the approved problem and limit", () => {
  render(
    <MemoryRouter>
      <TornsPage />
    </MemoryRouter>,
  );

  expect(screen.getByText(copy.tornsOficio)).toBeInTheDocument();
  expect(screen.getByText(copy.byLirn)).toBeInTheDocument();
  expect(screen.getByText(copy.whyTitle)).toBeInTheDocument();
  expect(screen.getByText(copy.solutionTitle)).toBeInTheDocument();
  expect(screen.getByText(copy.factOccupation)).toBeInTheDocument();
  expect(screen.getByText(copy.limit)).toBeInTheDocument();
  expect(screen.getByText(copy.storyTitle)).toBeInTheDocument();
  expect(screen.getByText(copy.syntheticNote)).toBeInTheDocument();
  expect(
    screen.getByRole("tab", { name: /01|ocupación/i }),
  ).toBeInTheDocument();
  expect(screen.queryByText(copy.mission)).not.toBeInTheDocument();
  expect(screen.queryByAltText(copy.qrLegend)).not.toBeInTheDocument();
});

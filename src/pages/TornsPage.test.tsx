import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { TornsPage } from "./TornsPage";

it("explains the product, the Transmilenio case, and the team evidence", () => {
  render(
    <MemoryRouter>
      <TornsPage />
    </MemoryRouter>,
  );

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    copy.tornsHeadline,
  );
  expect(screen.getByText(copy.byLirn)).toBeInTheDocument();
  expect(screen.getByText(copy.problemBody)).toBeInTheDocument();
  expect(screen.getByText(copy.problemExpected)).toBeInTheDocument();
  expect(screen.getByText(copy.problemReal)).toBeInTheDocument();
  expect(screen.getByText(copy.caseFrame)).toBeInTheDocument();
  expect(screen.getByText(copy.caseNotPilot)).toBeInTheDocument();
  expect(screen.getByText(copy.caseScope)).toBeInTheDocument();
  for (const step of copy.systemSteps) {
    expect(screen.getByText(step)).toBeInTheDocument();
  }
  expect(screen.getByText(copy.cap2)).toBeInTheDocument();
  expect(screen.getAllByText(evidence.label).length).toBeGreaterThan(0);
  expect(screen.getByText(evidence.interviewRole)).toBeInTheDocument();
  expect(screen.getByText(evidence.conclusions)).toBeInTheDocument();
  expect(screen.getByText(copy.close)).toBeInTheDocument();
  expect(screen.queryByText(copy.mission)).not.toBeInTheDocument();
});

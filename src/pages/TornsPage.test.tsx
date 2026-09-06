import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { TornsPage } from "./TornsPage";

it("explains the product first, then the Transmilenio case and evidence", async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <TornsPage />
    </MemoryRouter>,
  );

  const root = document.querySelector(".page-torns");
  expect(root).not.toBeNull();
  const html = root?.innerHTML ?? "";
  expect(html.indexOf('id="producto"')).toBeLessThan(html.indexOf('id="sistema"'));
  expect(html.indexOf('id="sistema"')).toBeLessThan(html.indexOf('id="caso"'));
  expect(html.indexOf(copy.storyWaitTitle)).toBeLessThan(html.indexOf(copy.problemBody));
  expect(html.indexOf(copy.problemBody)).toBeLessThan(html.indexOf(evidence.interviewRole));

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    copy.tornsHeadline,
  );
  expect(screen.getByText(copy.byLirn)).toBeInTheDocument();
  expect(screen.getByText(copy.storyWaitTitle)).toBeInTheDocument();
  expect(screen.queryByText(copy.storyActTitle)).not.toBeInTheDocument();
  expect(screen.getByText(copy.problemBody)).toBeInTheDocument();
  expect(screen.getByText(copy.caseFrame)).toBeInTheDocument();
  expect(screen.getByText(copy.caseNotPilot)).toBeInTheDocument();
  expect(screen.getByText(copy.caseScope)).toBeInTheDocument();
  for (const step of copy.systemSteps) {
    expect(screen.getByText(step)).toBeInTheDocument();
  }
  expect(screen.getByText(copy.cap2)).toBeInTheDocument();
  expect(screen.getAllByText(evidence.label).length).toBeGreaterThan(0);
  expect(screen.getByText(evidence.interviewRole)).toBeInTheDocument();
  expect(screen.getByText(evidence.turns[0].question)).toBeInTheDocument();
  expect(screen.getByText(evidence.questions[0].title)).toBeInTheDocument();
  expect(screen.getByText(evidence.conclusions)).toBeInTheDocument();
  expect(screen.getByText(copy.close)).toBeInTheDocument();
  expect(screen.queryByText(copy.mission)).not.toBeInTheDocument();

  const systemNext = screen.getAllByRole("button", { name: copy.controlNext })[0];
  await user.click(systemNext);
  expect(screen.getByText(copy.storySeeTitle)).toBeInTheDocument();
});

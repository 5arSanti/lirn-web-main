import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { HomePage } from "./HomePage";

it("speaks as the firm and teasers TORNS without the case file", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    copy.heroHeadline,
  );
  expect(screen.getByText(copy.mission)).toBeInTheDocument();
  expect(screen.getByText(copy.vision)).toBeInTheDocument();
  expect(screen.getByText(copy.companyBody)).toBeInTheDocument();
  expect(screen.getByText(copy.capMeasure)).toBeInTheDocument();
  expect(screen.getByText(copy.teaserBody)).toBeInTheDocument();
  expect(screen.getByText(copy.contactNote)).toBeInTheDocument();
  expect(screen.queryByText(copy.problemBody)).not.toBeInTheDocument();
  expect(screen.queryByText(copy.caseFrame)).not.toBeInTheDocument();
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: copy.verTorns })[0],
  ).toHaveAttribute("href", "/torns");
});

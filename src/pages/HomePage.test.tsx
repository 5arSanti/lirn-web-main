import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { HomePage } from "./HomePage";

it("states mission, vision, and TORNS as the product", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(screen.getByText(copy.mission)).toBeInTheDocument();
  expect(screen.getByText(copy.vision)).toBeInTheDocument();
  expect(screen.getByText(copy.byLirn)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: copy.navTorns })).toHaveAttribute(
    "href",
    "/torns",
  );
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
});

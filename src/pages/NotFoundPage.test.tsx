import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { NotFoundPage } from "./NotFoundPage";

it("names the miss and points home and product", () => {
  render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>,
  );

  expect(screen.getByText(copy.notFound)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: copy.navLirn })).toHaveAttribute(
    "href",
    "/",
  );
  expect(screen.getByRole("link", { name: copy.navTorns })).toHaveAttribute(
    "href",
    "/torns",
  );
});

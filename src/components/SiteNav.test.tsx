import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { SiteNav } from "./SiteNav";

it("links firm, product, and reserved contact", () => {
  render(
    <MemoryRouter>
      <SiteNav />
    </MemoryRouter>,
  );
  expect(screen.getByRole("link", { name: "LIRN" })).toHaveAttribute("href", "/");
  expect(screen.getByRole("link", { name: copy.navTorns })).toHaveAttribute(
    "href",
    "/torns",
  );
  expect(screen.getByRole("link", { name: copy.ctaTalk })).toHaveAttribute(
    "href",
    "/#contacto",
  );
});

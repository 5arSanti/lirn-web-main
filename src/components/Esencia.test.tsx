import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { Esencia } from "./Esencia";
import { copy } from "../content/copy";

it("shows essence title, slogan, mission, and vision", () => {
  render(
    <MemoryRouter>
      <Esencia href="/torns" />
    </MemoryRouter>,
  );
  expect(screen.getByText(copy.esenciaTitle)).toBeInTheDocument();
  expect(screen.getByText(copy.slogan)).toBeInTheDocument();
  expect(screen.getByText(copy.mission)).toBeInTheDocument();
  expect(screen.getByText(copy.vision)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /conoce más/i })).toHaveAttribute(
    "href",
    "/torns",
  );
});

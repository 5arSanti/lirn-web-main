import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { TeamSection } from "./TeamSection";

it("presents LIRN briefly and lists the three teammates by name only", () => {
  render(<TeamSection />);
  expect(screen.getByRole("heading", { level: 2, name: copy.companyTitle })).toBeInTheDocument();
  expect(screen.getByText(copy.companyBody)).toBeInTheDocument();
  for (const name of copy.teamMembers) {
    expect(screen.getByText(name)).toBeInTheDocument();
  }
  expect(screen.queryByText(copy.mission)).not.toBeInTheDocument();
  expect(screen.queryByText(copy.vision)).not.toBeInTheDocument();
  expect(document.getElementById("empresa")).not.toBeNull();
});

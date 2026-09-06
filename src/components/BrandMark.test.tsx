import { act, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { BrandMark } from "./BrandMark";

it("falls back to LIRN when the official mark errors", () => {
  render(<BrandMark variant="wordmark" on="dark" />);
  const img = screen.getByRole("img", { name: "LIRN" });
  act(() => {
    img.dispatchEvent(new Event("error"));
  });
  expect(screen.getByText("LIRN")).toBeInTheDocument();
});

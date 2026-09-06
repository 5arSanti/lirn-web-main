import { act, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Wordmark } from "./Wordmark";

it("falls back to the letter name when the image errors", () => {
  render(<Wordmark name="LIRN" />);
  const img = screen.getByRole("img", { name: "LIRN" });
  act(() => {
    img.dispatchEvent(new Event("error"));
  });
  expect(screen.getByText("LIRN")).toBeInTheDocument();
});

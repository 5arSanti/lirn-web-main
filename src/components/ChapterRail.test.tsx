import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { ChapterRail } from "./ChapterRail";

it("links the four TORNS chapters", () => {
  render(<ChapterRail />);
  expect(screen.getByRole("link", { name: copy.chapterProduct })).toHaveAttribute(
    "href",
    "#producto",
  );
  expect(screen.getByRole("link", { name: copy.chapterSystem })).toHaveAttribute(
    "href",
    "#sistema",
  );
  expect(screen.getByRole("link", { name: copy.chapterCase })).toHaveAttribute(
    "href",
    "#caso",
  );
  expect(screen.getByRole("link", { name: copy.chapterClose })).toHaveAttribute(
    "href",
    "#cierre",
  );
});

import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { ChapterRail } from "./ChapterRail";

it("links TORNS chapters including empresa and contact", () => {
  render(<ChapterRail />);
  const links = screen.getAllByRole("link");
  expect(links.map((l) => l.getAttribute("href"))).toEqual([
    "#producto",
    "#empresa",
    "#sistema",
    "#problema",
    "#caso",
    "#cierre",
    "#contacto",
  ]);
  expect(screen.getByRole("link", { name: copy.chapterEmpresa })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: copy.chapterContact })).toBeInTheDocument();
});

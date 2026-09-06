import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { InfographicSlot } from "./InfographicSlot";

it("renders nothing while the landing URL is null", () => {
  const { container } = render(<InfographicSlot />);

  expect(container).toBeEmptyDOMElement();
  expect(screen.queryByRole("img")).not.toBeInTheDocument();
});

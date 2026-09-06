import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { copy } from "../content/copy";
import { ProductStory } from "./ProductStory";

it("walks three synthetic acts", async () => {
  const user = userEvent.setup();
  render(<ProductStory />);

  expect(screen.getByText(copy.storyTitle)).toBeInTheDocument();
  expect(screen.getByText(copy.syntheticNote)).toBeInTheDocument();
  expect(screen.getByText(copy.storyOccupation)).toBeInTheDocument();

  const occupation = screen.getByRole("tab", { name: /ocupación|01/i });
  const camera = screen.getByRole("tab", { name: /cámara|02/i });
  const recommend = screen.getByRole("tab", { name: /recomend|03/i });

  expect(occupation).toHaveAttribute("aria-current", "step");
  await user.click(camera);
  expect(camera).toHaveAttribute("aria-current", "step");
  expect(screen.getByText(copy.storyCamera)).toBeInTheDocument();

  await user.click(recommend);
  expect(recommend).toHaveAttribute("aria-current", "step");
  expect(screen.getByText(copy.storyRecommend)).toBeInTheDocument();
});

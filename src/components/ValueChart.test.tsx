import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, expect, it, vi } from "vitest";
import { evidence } from "../content/evidence";
import { ValueChart } from "./ValueChart";

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
});

const q1 = evidence.questions[0];
const q5 = evidence.questions[4];
const q7 = evidence.questions[6];

it("sets dual-bar data-value to the evidence percentages", () => {
  const { container } = render(
    <ValueChart form="dual" bars={q1.bars} reduceMotion />,
  );
  const fills = container.querySelectorAll(".torns-chart-fill");
  expect(fills).toHaveLength(2);
  expect(fills[0]?.getAttribute("data-value")).toBe("50");
  expect(fills[1]?.getAttribute("data-value")).toBe("30");
  expect(screen.getByText("3 o más veces por semana")).toBeInTheDocument();
});

it("renders q5 as a 65 hero and q7 as a 25 hero, never 100", () => {
  const five = render(
    <ValueChart form="hero" bars={q5.bars} reduceMotion />,
  );
  expect(five.container.querySelector("[data-hero]")?.getAttribute("data-hero")).toBe(
    "65",
  );
  five.unmount();

  const seven = render(
    <ValueChart form="hero" bars={q7.bars} reduceMotion />,
  );
  expect(seven.container.querySelector("[data-hero]")?.getAttribute("data-hero")).toBe(
    "25",
  );
  expect(seven.container.querySelector('[data-value="100"]')).toBeNull();
  expect(seven.container.querySelector(".torns-chart-fill")?.getAttribute("data-value")).toBe(
    "25",
  );
});

it("uses previousBars only as the start, then lands on the new value", () => {
  const { container } = render(
    <ValueChart
      form="dual"
      bars={[{ label: "A", value: 80 }]}
      previousBars={[{ label: "A", value: 20 }]}
      reduceMotion
    />,
  );
  expect(container.querySelector(".torns-chart-fill")?.getAttribute("data-value")).toBe(
    "80",
  );
});

it("lands on new bars when reduceMotion rerenders with updated bars", () => {
  const { container, rerender } = render(
    <ValueChart form="dual" bars={[{ label: "A", value: 20 }]} reduceMotion />,
  );
  rerender(
    <ValueChart form="dual" bars={[{ label: "A", value: 80 }]} reduceMotion />,
  );
  expect(container.querySelector(".torns-chart-fill")?.getAttribute("data-value")).toBe(
    "80",
  );
});

it("lands on new bars after rerender when motion is enabled", async () => {
  const { container, rerender } = render(
    <ValueChart
      form="dual"
      bars={[{ label: "A", value: 20 }]}
      previousBars={[{ label: "A", value: 10 }]}
      reduceMotion={false}
    />,
  );
  rerender(
    <ValueChart
      form="dual"
      bars={[{ label: "A", value: 80 }]}
      previousBars={[{ label: "A", value: 20 }]}
      reduceMotion={false}
    />,
  );
  await waitFor(() => {
    expect(container.querySelector(".torns-chart-fill")?.getAttribute("data-value")).toBe(
      "80",
    );
  });
});

import { renderHook } from "@testing-library/react";
import { beforeEach, expect, it, vi } from "vitest";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
}

beforeEach(() => {
  mockMatchMedia(false);
});

it("reads matchMedia synchronously on first render", () => {
  mockMatchMedia(true);
  const { result } = renderHook(() => usePrefersReducedMotion());
  expect(result.current).toBe(true);
});

it("returns false when matchMedia does not prefer reduced motion", () => {
  mockMatchMedia(false);
  const { result } = renderHook(() => usePrefersReducedMotion());
  expect(result.current).toBe(false);
});

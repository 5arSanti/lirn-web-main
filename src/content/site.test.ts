import { describe, expect, it } from "vitest";
import { tornsLandingUrl } from "./site";

describe("site", () => {
  it("does not invent a landing URL", () => {
    expect(tornsLandingUrl).toBeNull();
  });
});

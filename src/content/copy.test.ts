import { describe, expect, it } from "vitest";
import { copy } from "./copy";

describe("copy", () => {
  it("publishes the approved mission and vision", () => {
    expect(copy.mission).toContain("demanda real de cada estación");
    expect(copy.vision).toContain("la demanda que ocurre");
  });

  it("endorses TORNS without a conversion CTA", () => {
    expect(copy.byLirn).toBe("by LIRN");
    const blob = Object.values(copy).join(" ");
    expect(blob.toLowerCase()).not.toMatch(/comprar|demo|contáct|newsletter/);
  });
});

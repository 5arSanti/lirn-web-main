import { describe, expect, it } from "vitest";
import { copy } from "./copy";

describe("copy", () => {
  it("publishes the approved mission and vision", () => {
    expect(copy.mission).toContain("demanda real de cada estación");
    expect(copy.vision).toContain("la demanda que ocurre");
  });

  it("endorses TORNS and allows contact without buy or demo", () => {
    expect(copy.byLirn).toBe("by LIRN");
    expect(copy.ctaTalk).toBe("Hablemos");
    const blob = Object.values(copy).join(" ");
    expect(blob.toLowerCase()).not.toMatch(/comprar|demo|newsletter/);
  });
});

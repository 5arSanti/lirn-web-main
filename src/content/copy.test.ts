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
    const blob = Object.values(copy).join(" ").toLowerCase();
    expect(blob).not.toMatch(/comprar|newsletter/);
    expect(blob).not.toMatch(/\bdemo\b/);
  });

  it("publishes slogan and forbids buy/demo newsletter", () => {
    expect(copy.slogan).toContain("estación");
    expect(copy.ctaTalk).toBe("Hablemos");
    const blob = Object.values(copy).join(" ").toLowerCase();
    expect(blob).not.toMatch(/comprar|newsletter/);
    expect(blob).not.toMatch(/\bdemo\b/);
  });

  it("labels product story as synthetic", () => {
    expect(copy.syntheticNote.toLowerCase()).toMatch(/sintét|demostraci/);
  });
});

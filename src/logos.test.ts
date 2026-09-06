/// <reference types="node" />

import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const officialLogos = [
  "LIRN-v1 - white.jfif",
  "LIRN-v1 - black.jfif",
  "LIRN-v2 - white.jfif",
  "LIRN-v2 - black.jfif",
] as const;

describe("official logo assets", () => {
  for (const filename of officialLogos) {
    it(`includes ${filename}`, () => {
      expect(existsSync(resolve("public/logos", filename))).toBe(true);
    });
  }
});

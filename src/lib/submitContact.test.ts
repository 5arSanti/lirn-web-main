import { afterEach, describe, expect, it, vi } from "vitest";
import { submitContact } from "./submitContact";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("submitContact", () => {
  it("fails closed when the endpoint env is missing", async () => {
    vi.stubEnv("VITE_CONTACT_ENDPOINT", "");

    const result = await submitContact({
      nombre: "Ana",
      email: "ana@example.com",
      organizacion: "",
      mensaje: "Hola",
      origen: "torns",
    });

    expect(result).toEqual({ ok: false, error: "missing_endpoint" });
  });

  it("posts text/plain JSON to the endpoint", async () => {
    vi.stubEnv("VITE_CONTACT_ENDPOINT", "https://example.test/exec");
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    const payload = {
      nombre: "Ana",
      email: "ana@example.com",
      organizacion: "LIRN",
      mensaje: "Hola",
      origen: "torns" as const,
    };

    const result = await submitContact(payload);

    expect(result).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.test/exec",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        redirect: "follow",
      }),
    );
  });
});

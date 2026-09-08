import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, it, vi } from "vitest";
import { copy } from "../content/copy";
import { ContactForm } from "./ContactForm";

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

it("blocks submit when required fields are empty", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);
  await user.click(screen.getByRole("button", { name: copy.contactSubmit }));
  expect(screen.getAllByText(copy.contactRequired).length).toBeGreaterThan(0);
});

it("shows missing-endpoint error when env is empty", async () => {
  vi.stubEnv("VITE_CONTACT_ENDPOINT", "");
  const user = userEvent.setup();
  render(<ContactForm />);
  await user.type(screen.getByLabelText(copy.contactNameLabel), "Ana");
  await user.type(screen.getByLabelText(copy.contactEmailLabel), "ana@example.com");
  await user.type(screen.getByLabelText(copy.contactMessageLabel), "Hola");
  await user.click(screen.getByRole("button", { name: copy.contactSubmit }));
  expect(await screen.findByText(copy.contactMissingEndpoint)).toBeInTheDocument();
});

it("shows success when submitContact resolves ok", async () => {
  vi.stubEnv("VITE_CONTACT_ENDPOINT", "https://example.test/exec");
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({ ok: true }),
  );
  const user = userEvent.setup();
  render(<ContactForm />);
  await user.type(screen.getByLabelText(copy.contactNameLabel), "Ana");
  await user.type(screen.getByLabelText(copy.contactEmailLabel), "ana@example.com");
  await user.type(screen.getByLabelText(copy.contactMessageLabel), "Hola");
  await user.click(screen.getByRole("button", { name: copy.contactSubmit }));
  expect(await screen.findByText(copy.contactSuccess)).toBeInTheDocument();
});

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";
import { copy } from "./content/copy";

describe("App hash scrolling", () => {
  const scrollIntoView = vi.fn();

  beforeEach(() => {
    scrollIntoView.mockClear();
    HTMLElement.prototype.scrollIntoView = scrollIntoView;
  });

  afterEach(() => {
    cleanup();
    window.history.replaceState(null, "", "/lirn-web-main/");
  });

  it("scrolls the contact section into view when loaded with its hash", async () => {
    window.history.replaceState(null, "", "/lirn-web-main/#contacto");

    render(<App />);

    await waitFor(() => expect(scrollIntoView).toHaveBeenCalledOnce());
  });

  it("scrolls after navigating to contact from TORNS", async () => {
    window.history.replaceState(null, "", "/lirn-web-main/torns");
    const user = userEvent.setup();

    render(<App />);
    await user.click(screen.getAllByRole("link", { name: copy.ctaTalk })[0]);

    await waitFor(() => expect(scrollIntoView).toHaveBeenCalledOnce());
  });

  it("scrolls the TORNS contact form when loaded with its hash", async () => {
    window.history.replaceState(null, "", "/lirn-web-main/torns#contacto");

    render(<App />);

    await waitFor(() => expect(scrollIntoView).toHaveBeenCalledOnce());
  });
});

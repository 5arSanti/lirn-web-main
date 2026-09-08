export type ContactPayload = {
  nombre: string;
  email: string;
  organizacion: string;
  mensaje: string;
  origen: "torns";
};

export type SubmitContactResult =
  | { ok: true }
  | { ok: false; error: "missing_endpoint" | "network" | "server" };

export async function submitContact(
  payload: ContactPayload,
): Promise<SubmitContactResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
  if (!endpoint) {
    return { ok: false, error: "missing_endpoint" };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    // Apps Script often returns HTML after redirect:follow; treat HTTP 200 as success.
    if (!response.ok) {
      return { ok: false, error: "server" };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "network" };
  }
}

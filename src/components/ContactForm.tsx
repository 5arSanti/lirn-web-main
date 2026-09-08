import { useState, type FormEvent } from "react";
import { copy } from "../content/copy";
import { submitContact } from "../lib/submitContact";
import { Reveal } from "./Reveal";

type FieldErrors = Partial<Record<"nombre" | "email" | "mensaje", string>>;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [organizacion, setOrganizacion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: FieldErrors = {};
    if (!nombre.trim()) next.nombre = copy.contactRequired;
    if (!email.trim()) next.email = copy.contactRequired;
    else if (!isEmail(email.trim())) next.email = copy.contactInvalidEmail;
    if (!mensaje.trim()) next.mensaje = copy.contactRequired;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    setStatusMessage("");
    const result = await submitContact({
      nombre: nombre.trim(),
      email: email.trim(),
      organizacion: organizacion.trim(),
      mensaje: mensaje.trim(),
      origen: "torns",
    });
    if (result.ok) {
      setStatus("success");
      setStatusMessage(copy.contactSuccess);
      setNombre("");
      setEmail("");
      setOrganizacion("");
      setMensaje("");
      return;
    }
    setStatus("error");
    setStatusMessage(
      result.error === "missing_endpoint"
        ? copy.contactMissingEndpoint
        : copy.contactError,
    );
  }

  return (
    <section
      id="contacto"
      className="band torns-contact torns-band-blue"
      aria-labelledby="contact-form-title"
    >
      <Reveal className="torns-section-head">
        <div>
          <h2 id="contact-form-title" className="display">
            {copy.contactFormTitle}
          </h2>
          <p className="lede">{copy.contactFormBody}</p>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <form className="torns-contact-form" onSubmit={onSubmit} noValidate>
          <label>
            <span>{copy.contactNameLabel}</span>
            <input
              name="nombre"
              autoComplete="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errors.nombre ? <em>{errors.nombre}</em> : null}
          </label>
          <label>
            <span>{copy.contactEmailLabel}</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email ? <em>{errors.email}</em> : null}
          </label>
          <label>
            <span>{copy.contactOrgLabel}</span>
            <input
              name="organizacion"
              autoComplete="organization"
              value={organizacion}
              onChange={(e) => setOrganizacion(e.target.value)}
            />
          </label>
          <label className="torns-contact-message">
            <span>{copy.contactMessageLabel}</span>
            <textarea
              name="mensaje"
              rows={5}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
            {errors.mensaje ? <em>{errors.mensaje}</em> : null}
          </label>
          <button
            type="submit"
            className="btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? copy.contactSending : copy.contactSubmit}
          </button>
          {statusMessage ? (
            <p
              className={
                status === "success" ? "torns-contact-ok" : "torns-contact-fail"
              }
              role="status"
            >
              {statusMessage}
            </p>
          ) : null}
        </form>
      </Reveal>
    </section>
  );
}

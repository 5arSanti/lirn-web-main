import { Link } from "react-router-dom";
import { copy } from "../content/copy";

export function Esencia({ href }: { href?: string }) {
  return (
    <section className="esencia" aria-labelledby="esencia-title">
      <h2 id="esencia-title">{copy.esenciaTitle}</h2>
      <p className="esencia-slogan">{copy.slogan}</p>
      <div className="esencia-grid">
        <div>
          <h3>Misión</h3>
          <p>{copy.mission}</p>
        </div>
        <div>
          <h3>Visión</h3>
          <p>{copy.vision}</p>
        </div>
      </div>
      {href ? (
        <Link className="btn-primary" to={href}>
          Conoce más →
        </Link>
      ) : null}
    </section>
  );
}

import { Link } from "react-router-dom";
import { ByLirn } from "../components/ByLirn";
import { NetworkDiagram } from "../components/NetworkDiagram";
import { copy } from "../content/copy";

export function HomePage() {
  return (
    <main className="stage stage-lirn" data-theme="lirn">
      <div className="stage-field" aria-hidden="true">
        <NetworkDiagram activeNode="c" />
      </div>

      <div className="stage-viewport">
        <header className="stage-hero">
          <p className="brand-display" aria-label={copy.lirnName}>
            {copy.lirnName}
          </p>
          <p className="stage-oficio">{copy.oficio}</p>
        </header>

        <div className="stage-rail">
          <section className="module module-mv">
            <h1>{copy.mission}</h1>
            <p>{copy.vision}</p>
          </section>

          <section className="module module-product">
            <div className="product-name">
              <span className="product-mark">{copy.tornsName}</span>
              <ByLirn />
            </div>
            <p>{copy.productWhat}</p>
            <Link className="module-action" to="/torns">
              {copy.navTorns}
            </Link>
          </section>
        </div>
      </div>

      <section className="stage-why">
        <h2>{copy.whyTitle}</h2>
        <p>{copy.whyBody}</p>
        <p className="module-foot">{copy.whyFoot}</p>
      </section>
    </main>
  );
}

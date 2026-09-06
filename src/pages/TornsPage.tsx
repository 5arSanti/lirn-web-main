import { Link } from "react-router-dom";
import { ByLirn } from "../components/ByLirn";
import { InfographicSlot } from "../components/InfographicSlot";
import { copy } from "../content/copy";

export function TornsPage() {
  return (
    <main className="page">
      <section className="hero" aria-label="TORNS">
        <div className="hero-media" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}images/torns-hero.jpg`}
            alt=""
            width={1920}
            height={1080}
          />
        </div>
        <div className="hero-copy">
          <p className="hero-brand">
            {copy.tornsName}
            <ByLirn />
          </p>
          <h1 className="hero-headline">{copy.tornsOficio}</h1>
          <p className="hero-support">{copy.solutionBody}</p>
          <div className="hero-actions">
            <Link
              className="btn-primary"
              to={{ pathname: "/", hash: "contacto" }}
            >
              {copy.ctaTalk}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-grid">
          <p className="section-label">{copy.problemLabel}</p>
          <div>
            <h2 className="display">{copy.whyTitle}</h2>
            <p className="prose">{copy.whyBody}</p>
            <p className="prose">{copy.whyFoot}</p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-grid">
          <p className="section-label">{copy.solutionLabel}</p>
          <div>
            <h2 className="display">{copy.solutionTitle}</h2>
            <p className="prose">{copy.solutionBody}</p>
            <div className="instrument-row" aria-label="Prueba del producto">
              <div className="instrument">
                <strong>01</strong>
                <p>{copy.factOccupation}</p>
              </div>
              <div className="instrument">
                <strong>02</strong>
                <p>{copy.factCamera}</p>
              </div>
              <div className="instrument">
                <strong>03</strong>
                <p>{copy.factRecommend}</p>
              </div>
            </div>
            <p className="limit">{copy.limit}</p>
          </div>
        </div>
      </section>

      <InfographicSlot />

      <section className="section section-paper">
        <div className="section-grid">
          <p className="section-label">Cierre</p>
          <div>
            <h2 className="display">{copy.close}</h2>
            <p className="lede">{copy.productWhat}</p>
            <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
              <Link
                className="btn-primary"
                to={{ pathname: "/", hash: "contacto" }}
              >
                {copy.ctaTalk}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <strong>{copy.tornsByLirn}</strong>
        <p>{copy.footerBlurb}</p>
      </footer>
    </main>
  );
}

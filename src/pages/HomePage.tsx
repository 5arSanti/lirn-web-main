import { Link } from "react-router-dom";
import { ByLirn } from "../components/ByLirn";
import { Esencia } from "../components/Esencia";
import { copy } from "../content/copy";

export function HomePage() {
  return (
    <main className="page lirn-home" data-theme="lirn">
      <section className="hero lirn-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="hero-brand">{copy.lirnName}</p>
          <h1 id="home-title" className="hero-headline">
            <span>Oferta que responde </span>
            <span>a la estación.</span>
          </h1>
          <p className="hero-support">{copy.heroSupport}</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contacto">
              {copy.ctaTalk}
            </a>
            <Link className="btn-secondary" to="/torns">
              {copy.verTorns}
            </Link>
          </div>
        </div>
        <div className="hero-route" aria-hidden="true">
          <span>Demanda real</span>
          <i />
          <span>Oferta ajustada</span>
        </div>
      </section>

      <section className="signal" aria-label="Alcance">
        <p>{copy.signalLine}</p>
      </section>

      <div className="esencia-shell">
        <Esencia href="/torns" />
      </div>

      <section id="empresa" className="section section-paper">
        <div className="section-grid">
          <h2 className="display">{copy.whoTitle}</h2>
          <p className="lede">{copy.whoBody}</p>
        </div>
      </section>

      <section className="section product-section">
        <div className="product-band">
          <div>
            <p className="product-mark">
              {copy.tornsName}
              <ByLirn />
            </p>
            <h2 className="display">{copy.productWhat}</h2>
          </div>
          <Link className="btn-primary" to="/torns">
            {copy.navTorns}
          </Link>
        </div>
      </section>

      <section className="section problem-section">
        <div className="section-grid">
          <h2 className="display">{copy.whyTitle}</h2>
          <div>
            <p className="prose">{copy.whyBody}</p>
            <p className="context-note">{copy.whyFoot}</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div className="contact">
          <h2 className="display">{copy.contactTitle}</h2>
          <p className="prose">{copy.contactBody}</p>
          <p className="contact-note">{copy.contactNote}</p>
          <span className="contact-pending" aria-disabled="true">
            {copy.ctaTalk} · pendiente
          </span>
        </div>
      </section>

      <footer className="site-footer">
        <strong>{copy.lirnName}</strong>
        <p>{copy.footerBlurb}</p>
        <Link to="/torns">{copy.verTorns}</Link>
      </footer>
    </main>
  );
}

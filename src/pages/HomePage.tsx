import { Link } from "react-router-dom";
import { ByLirn } from "../components/ByLirn";
import { copy } from "../content/copy";

export function HomePage() {
  return (
    <main className="page">
      <section className="hero" aria-label="Inicio">
        <div className="hero-media" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}images/lirn-hero.jpg`}
            alt=""
            width={1920}
            height={1080}
          />
        </div>
        <div className="hero-copy">
          <p className="hero-brand">{copy.lirnName}</p>
          <h1 className="hero-headline">{copy.heroHeadline}</h1>
          <p className="hero-support">{copy.heroSupport}</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contacto">
              {copy.ctaTalk}
            </a>
            <Link className="link-quiet" to="/torns">
              {copy.navTorns}
            </Link>
          </div>
          <div className="hero-board" aria-hidden="true">
            <span>Demanda</span>
            <span>Estación</span>
            <span>Oferta</span>
          </div>
        </div>
      </section>

      <section id="empresa" className="section section-paper">
        <div className="section-grid">
          <p className="section-label">Empresa</p>
          <div>
            <h2 className="display">{copy.aboutTitle}</h2>
            <p className="lede">{copy.aboutBody}</p>
            <div className="mv-pair">
              <div>
                <h3>Misión</h3>
                <p>{copy.mission}</p>
              </div>
              <div>
                <h3>Visión</h3>
                <p>{copy.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-grid">
          <p className="section-label">Problema</p>
          <div>
            <h2 className="display">{copy.whyTitle}</h2>
            <p className="prose">{copy.whyBody}</p>
            <p className="prose">{copy.whyFoot}</p>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-grid">
          <p className="section-label">Producto</p>
          <div>
            <div className="product-band">
              <div>
                <p className="product-mark">
                  {copy.tornsName}
                  <ByLirn />
                </p>
                <p className="lede">{copy.productWhat}</p>
              </div>
              <div>
                <Link className="btn-primary" to="/torns">
                  {copy.navTorns}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-grid">
          <p className="section-label">Enfoque</p>
          <div>
            <h2 className="display">{copy.approachTitle}</h2>
            <ul className="editorial-list">
              <li>
                <span className="num">01</span>
                <div>
                  <h3>{copy.approach1}</h3>
                  <p>{copy.approach1Body}</p>
                </div>
              </li>
              <li>
                <span className="num">02</span>
                <div>
                  <h3>{copy.approach2}</h3>
                  <p>{copy.approach2Body}</p>
                </div>
              </li>
              <li>
                <span className="num">03</span>
                <div>
                  <h3>{copy.approach3}</h3>
                  <p>{copy.approach3Body}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-grid">
          <p className="section-label">Capacidades</p>
          <div>
            <h2 className="display">{copy.capabilitiesTitle}</h2>
            <ul className="editorial-list">
              <li>
                <span className="num">01</span>
                <div>
                  <h3>{copy.cap1}</h3>
                </div>
              </li>
              <li>
                <span className="num">02</span>
                <div>
                  <h3>{copy.cap2}</h3>
                </div>
              </li>
              <li>
                <span className="num">03</span>
                <div>
                  <h3>{copy.cap3}</h3>
                </div>
              </li>
              <li>
                <span className="num">04</span>
                <div>
                  <h3>{copy.cap4}</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-grid">
          <p className="section-label">Ámbito</p>
          <div>
            <h2 className="display">{copy.industriesTitle}</h2>
            <p className="industries">{copy.industries}</p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-grid">
          <p className="section-label">Diferencia</p>
          <div className="diff-block">
            <h2 className="display">{copy.diffTitle}</h2>
            <ul>
              <li>{copy.diff1}</li>
              <li>{copy.diff2}</li>
              <li>{copy.diff3}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contacto" className="section section-dark">
        <div className="contact">
          <p className="section-label">{copy.navContacto}</p>
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
      </footer>
    </main>
  );
}

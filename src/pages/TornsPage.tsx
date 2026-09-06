import { Link } from "react-router-dom";
import { ByLirn } from "../components/ByLirn";
import { InfographicSlot } from "../components/InfographicSlot";
import { ProductStory } from "../components/ProductStory";
import { copy } from "../content/copy";

const CAPABILITIES = [copy.cap1, copy.cap2, copy.cap3, copy.cap4];

export function TornsPage() {
  return (
    <main className="page torns-page" data-theme="torns">
      <section className="hero torns-hero" aria-labelledby="torns-title">
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
          <h1 id="torns-title" className="hero-headline">
            {copy.tornsOficio}
          </h1>
          <p className="hero-support">{copy.solutionTitle}</p>
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

      <section className="section torns-problem">
        <div className="section-grid">
          <h2 className="display">{copy.whyTitle}</h2>
          <div className="torns-problem-copy">
            <p className="prose">{copy.whyBody}</p>
            <p className="context-note">{copy.whyFoot}</p>
          </div>
        </div>
      </section>

      <ProductStory />

      <section className="section torns-capabilities">
        <div className="section-grid">
          <div>
            <h2 className="display">{copy.capabilitiesTitle}</h2>
            <p className="prose">{copy.solutionBody}</p>
          </div>
          <ul className="torns-capability-list">
            {CAPABILITIES.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section torns-limit" aria-label="Estado del producto">
        <p>{copy.limit}</p>
      </section>

      <section className="section torns-close">
        <div className="section-grid">
          <div>
            <h2 className="display">{copy.close}</h2>
            <p className="lede">{copy.productWhat}</p>
          </div>
          <Link
            className="btn-primary"
            to={{ pathname: "/", hash: "contacto" }}
          >
            {copy.ctaTalk}
          </Link>
        </div>
      </section>

      <InfographicSlot />
    </main>
  );
}

import { Link } from "react-router-dom";
import { BrandMark } from "../components/BrandMark";
import { ByLirn } from "../components/ByLirn";
import { StationPhoto } from "../components/StationPhoto";
import { copy } from "../content/copy";

export function HomePage() {
  return (
    <main className="page page-lirn">
      <section className="hero-lirn" aria-labelledby="home-title">
        <StationPhoto file="lirn-hero.jpg" className="hero-lirn-photo" />
        <div className="signal-field" aria-hidden="true" />
        <BrandMark
          variant="icon"
          on="dark"
          className="mark-watermark"
          decorative
        />
        <div className="hero-lirn-copy">
          <BrandMark variant="wordmark" on="dark" className="mark-display" />
          <h1 id="home-title" className="hero-headline">
            {copy.heroHeadline}
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
      </section>

      <section id="empresa" className="split band-white">
        <div className="split-copy">
          <h2 className="display">{copy.companyTitle}</h2>
          <p className="lede">{copy.companyBody}</p>
        </div>
        <StationPhoto file="image-1.jfif" className="split-photo" />
      </section>

      <section className="purpose-lirn" aria-labelledby="purpose-title">
        <h2 id="purpose-title" className="display">
          {copy.purposeTitle}
        </h2>
        <div className="purpose-pair">
          <article className="purpose-card purpose-mission">
            <h3>{copy.missionLabel}</h3>
            <p>{copy.mission}</p>
          </article>
          <article className="purpose-card purpose-vision">
            <h3>{copy.visionLabel}</h3>
            <p>{copy.vision}</p>
          </article>
        </div>
      </section>

      <section className="cap-lirn band-white" aria-labelledby="cap-title">
        <h2 id="cap-title" className="display">
          {copy.capabilityTitle}
        </h2>
        <ol className="cap-list">
          <li>
            <StationPhoto file="image-5.jfif" className="cap-photo" />
            <strong>{copy.capMeasure}</strong>
            <p>{copy.capMeasureBody}</p>
          </li>
          <li>
            <StationPhoto file="image-6.jfif" className="cap-photo" />
            <strong>{copy.capSee}</strong>
            <p>{copy.capSeeBody}</p>
          </li>
          <li>
            <StationPhoto file="image-7.jfif" className="cap-photo" />
            <strong>{copy.capRecommend}</strong>
            <p>{copy.capRecommendBody}</p>
          </li>
        </ol>
      </section>

      <section className="teaser-lirn">
        <div className="teaser-copy">
          <p className="endorsement">
            <BrandMark variant="icon" on="dark" className="mark-teaser" />
            <span className="hero-brand">
              {copy.teaserTitle}
              <ByLirn />
            </span>
          </p>
          <p className="lede">{copy.teaserLead}</p>
          <p className="prose">{copy.teaserBody}</p>
          <Link className="btn-primary" to="/torns">
            {copy.verTorns}
          </Link>
        </div>
        <StationPhoto file="image-3.jfif" className="teaser-photo" />
      </section>

      <section id="contacto" className="band-white contact-lirn">
        <h2 className="display">{copy.contactTitle}</h2>
        <p className="prose">{copy.contactBody}</p>
        <p className="contact-note">{copy.contactNote}</p>
        <span className="contact-pending" aria-disabled="true">
          {copy.ctaTalk}
        </span>
      </section>
    </main>
  );
}

import { Link } from "react-router-dom";
import { BrandMark } from "../components/BrandMark";
import { GeometryFrame } from "../components/GeometryFrame";
import { copy } from "../content/copy";

export function HomePage() {
  return (
    <main className="page page-lirn">
      <section className="band band-black hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <BrandMark variant="wordmark" on="dark" />
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
        <GeometryFrame className="hero-photo">
          <img
            src={`${import.meta.env.BASE_URL}images/lirn-hero.jpg`}
            alt=""
            width={1920}
            height={1080}
          />
        </GeometryFrame>
      </section>

      <section id="empresa" className="band band-white">
        <p className="meta">01</p>
        <h2 className="display">{copy.companyTitle}</h2>
        <p className="lede">{copy.companyBody}</p>
      </section>

      <section className="band band-black" aria-labelledby="purpose-title">
        <p className="meta">02</p>
        <h2 id="purpose-title" className="display">
          {copy.purposeTitle}
        </h2>
        <blockquote>
          <p>{copy.mission}</p>
        </blockquote>
        <blockquote>
          <p>{copy.vision}</p>
        </blockquote>
      </section>

      <section className="band band-white" aria-labelledby="cap-title">
        <p className="meta">03</p>
        <h2 id="cap-title" className="display">
          {copy.capabilityTitle}
        </h2>
        <ol className="cap-list">
          <li>
            <strong>{copy.capMeasure}</strong>
            <p>{copy.capMeasureBody}</p>
          </li>
          <li>
            <strong>{copy.capSee}</strong>
            <p>{copy.capSeeBody}</p>
          </li>
          <li>
            <strong>{copy.capRecommend}</strong>
            <p>{copy.capRecommendBody}</p>
          </li>
        </ol>
      </section>

      <section className="band band-black teaser">
        <p className="meta">04</p>
        <h2 className="display">{copy.teaserTitle}</h2>
        <p className="lede">{copy.teaserBody}</p>
        <Link className="btn-primary" to="/torns">
          {copy.verTorns}
        </Link>
      </section>

      <section id="contacto" className="band band-white">
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

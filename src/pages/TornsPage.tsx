import { Link } from "react-router-dom";
import { ByLirn } from "../components/ByLirn";
import { GeometryFrame } from "../components/GeometryFrame";
import { InterviewBlock } from "../components/InterviewBlock";
import { SurveyBlock } from "../components/SurveyBlock";
import { copy } from "../content/copy";

const CAPABILITIES = [copy.cap1, copy.cap2, copy.cap3, copy.cap4];

export function TornsPage() {
  return (
    <main className="page page-torns">
      <section className="band band-black hero" aria-labelledby="torns-title">
        <GeometryFrame className="hero-photo">
          <img
            src={`${import.meta.env.BASE_URL}images/torns-hero.jpg`}
            alt=""
            width={1920}
            height={1080}
          />
        </GeometryFrame>
        <div className="hero-copy">
          <p className="hero-brand">
            {copy.tornsName}
            <ByLirn />
          </p>
          <h1 id="torns-title" className="hero-headline">
            {copy.tornsHeadline}
          </h1>
          <p className="hero-support">{copy.tornsSupport}</p>
          <Link
            className="btn-primary"
            to={{ pathname: "/", hash: "contacto" }}
          >
            {copy.ctaTalk}
          </Link>
        </div>
      </section>

      <section className="band band-white">
        <p className="meta">01</p>
        <h2 className="display">{copy.problemTitle}</h2>
        <p className="prose">{copy.problemBody}</p>
        <div className="contrast">
          <p>{copy.problemExpected}</p>
          <p className="contrast-real">{copy.problemReal}</p>
        </div>
      </section>

      <section className="band band-black">
        <p className="meta">02</p>
        <h2 className="display">{copy.caseFrame}</h2>
        <p className="lede">{copy.caseNotPilot}</p>
        <p className="prose">{copy.caseScope}</p>
      </section>

      <section className="band band-white">
        <p className="meta">03</p>
        <h2 className="display">{copy.systemTitle}</h2>
        <ol className="pipeline">
          {copy.systemSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <h3>{copy.capabilitiesTitle}</h3>
        <ul>
          {CAPABILITIES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <InterviewBlock />
      <SurveyBlock />

      <section className="band band-white">
        <h2 className="display">{copy.close}</h2>
        <Link
          className="btn-primary"
          to={{ pathname: "/", hash: "contacto" }}
        >
          {copy.ctaTalk}
        </Link>
      </section>
    </main>
  );
}

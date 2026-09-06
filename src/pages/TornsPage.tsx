import { Link } from "react-router-dom";
import { ActStage } from "../components/ActStage";
import { BrandMark } from "../components/BrandMark";
import { ByLirn } from "../components/ByLirn";
import { ChapterRail } from "../components/ChapterRail";
import { InterviewBlock } from "../components/InterviewBlock";
import { PipelineTrack } from "../components/PipelineTrack";
import { StationPhoto } from "../components/StationPhoto";
import { SurveyBlock } from "../components/SurveyBlock";
import { copy } from "../content/copy";

const CAPABILITIES = [copy.cap1, copy.cap2, copy.cap3, copy.cap4];

export function TornsPage() {
  return (
    <main className="page page-torns">
      <ChapterRail />
      <section id="producto" className="hero-torns" aria-labelledby="torns-title">
        <div className="hero-torns-copy">
          <p className="endorsement">
            <BrandMark variant="icon" on="dark" className="mark-endorsement" />
            <span className="hero-brand">
              {copy.tornsName}
              <ByLirn />
            </span>
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
        <StationPhoto file="torns-hero.jpg" className="hero-torns-photo" />
      </section>

      <section id="sistema" className="torns-system torns-on-air" aria-labelledby="story-title">
        <h2 id="story-title" className="display">
          {copy.storyTitle}
        </h2>
        <ActStage />
        <h2 className="display">{copy.systemTitle}</h2>
        <PipelineTrack />
        <div className="system-grid">
          <div>
            <h3>{copy.capabilitiesTitle}</h3>
            <ul className="proto-list">
              {CAPABILITIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <StationPhoto file="image-3.jfif" className="system-photo" />
        </div>
        <div className="torns-bridge contrast">
          <p>{copy.problemExpected}</p>
          <p className="contrast-real">{copy.problemReal}</p>
        </div>
      </section>

      <section id="caso" className="torns-case" aria-labelledby="problem-title">
        <div className="torns-case-story">
          <StationPhoto file="image-4.jfif" className="problem-photo" />
          <div className="problem-copy">
            <h2 id="problem-title" className="display">
              {copy.problemTitle}
            </h2>
            <p className="prose">{copy.problemBody}</p>
            <div className="contrast">
              <p>{copy.problemExpected}</p>
              <p className="contrast-real">{copy.problemReal}</p>
            </div>
          </div>
          <div className="case-copy">
            <h3 className="display">{copy.caseFrame}</h3>
            <p className="lede">{copy.caseNotPilot}</p>
            <p className="prose">{copy.caseScope}</p>
          </div>
          <StationPhoto file="image-1.jfif" className="case-photo" />
        </div>
        <InterviewBlock />
        <SurveyBlock />
      </section>

      <section id="cierre" className="torns-close torns-on-white">
        <BrandMark variant="wordmark" on="light" className="mark-close" />
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

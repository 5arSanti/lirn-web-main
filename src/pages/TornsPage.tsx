import { Link } from "react-router-dom";
import { BrandMark } from "../components/BrandMark";
import { ByLirn } from "../components/ByLirn";
import { InterviewBlock } from "../components/InterviewBlock";
import { StationPhoto } from "../components/StationPhoto";
import { SurveyBlock } from "../components/SurveyBlock";
import { copy } from "../content/copy";

const CAPABILITIES = [copy.cap1, copy.cap2, copy.cap3, copy.cap4];
const STORY = [
  {
    title: copy.storyWaitTitle,
    body: copy.storyWaitBody,
    file: "image-2.jfif",
  },
  {
    title: copy.storySeeTitle,
    body: copy.storySeeBody,
    file: "image-5.jfif",
  },
  {
    title: copy.storyMeasureTitle,
    body: copy.storyMeasureBody,
    file: "image-6.jfif",
  },
  {
    title: copy.storyActTitle,
    body: copy.storyActBody,
    file: "image-7.jfif",
  },
] as const;

export function TornsPage() {
  return (
    <main className="page page-torns">
      <section className="hero-torns" aria-labelledby="torns-title">
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

      <section className="torns-problem torns-on-white">
        <StationPhoto file="image-4.jfif" className="problem-photo" />
        <div className="problem-copy">
          <h2 className="display">{copy.problemTitle}</h2>
          <p className="prose">{copy.problemBody}</p>
          <div className="contrast">
            <p>{copy.problemExpected}</p>
            <p className="contrast-real">{copy.problemReal}</p>
          </div>
        </div>
      </section>

      <section className="torns-case">
        <div className="case-copy">
          <h2 className="display">{copy.caseFrame}</h2>
          <p className="lede">{copy.caseNotPilot}</p>
          <p className="prose">{copy.caseScope}</p>
        </div>
        <StationPhoto file="image-1.jfif" className="case-photo" />
      </section>

      <section className="torns-story torns-on-white" aria-labelledby="story-title">
        <h2 id="story-title" className="display">
          {copy.storyTitle}
        </h2>
        <ol className="story-list">
          {STORY.map((act, index) => (
            <li key={act.title} className="story-act">
              <StationPhoto file={act.file} className="story-photo" />
              <p className="story-index">0{index + 1}</p>
              <h3>{act.title}</h3>
              <p>{act.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="torns-system">
        <h2 className="display">{copy.systemTitle}</h2>
        <ol className="pipeline">
          {copy.systemSteps.map((step, index) => (
            <li key={step}>
              <span className="signal-node" aria-hidden="true" />
              <strong>{step}</strong>
              <p>{copy.systemStepBodies[index]}</p>
            </li>
          ))}
        </ol>
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
      </section>

      <InterviewBlock />
      <SurveyBlock />

      <section className="torns-close torns-on-white">
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

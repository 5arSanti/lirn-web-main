import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ActStage } from "../components/ActStage";
import { BrandMark } from "../components/BrandMark";
import { ByLirn } from "../components/ByLirn";
import { ChapterRail } from "../components/ChapterRail";
import { ContactForm } from "../components/ContactForm";
import { TeamSection } from "../components/TeamSection";
import { InterviewBlock } from "../components/InterviewBlock";
import { PipelineTrack } from "../components/PipelineTrack";
import { Reveal } from "../components/Reveal";
import { StationPhoto } from "../components/StationPhoto";
import { SurveyBlock } from "../components/SurveyBlock";
import { copy } from "../content/copy";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const CAPABILITIES = [copy.cap1, copy.cap2, copy.cap3, copy.cap4];

export function TornsPage() {
  const reduce = usePrefersReducedMotion();

  return (
    <main className="page page-torns">
      <ChapterRail />
      <section id="producto" className="hero-torns" aria-labelledby="torns-title">
        <StationPhoto file="torns-hero.jpg" className="hero-torns-photo" />
        <div className="signal-field signal-field-torns" aria-hidden="true" />
        <BrandMark
          variant="icon"
          on="dark"
          className="mark-watermark"
          decorative
        />
        <div className="hero-torns-copy">
          <motion.p
            className="endorsement"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrandMark variant="icon" on="dark" className="mark-endorsement" />
            <span className="hero-brand">
              {copy.tornsName}
              <ByLirn />
            </span>
          </motion.p>
          <motion.h1
            id="torns-title"
            className="hero-headline"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {copy.tornsHeadline}
          </motion.h1>
          <motion.p
            className="hero-support"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {copy.tornsSupport}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            <a className="btn-secondary" href="#sistema">
              {copy.chapterSystem}
            </a>
          </motion.div>
        </div>
      </section>

      <TeamSection />

      <Reveal>
        <section
          id="sistema"
          className="torns-system torns-on-white"
          aria-labelledby="story-title"
        >
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
      </Reveal>

      <Reveal delay={0.04}>
        <section
          id="problema"
          className="torns-problem torns-on-white"
          aria-labelledby="problem-title"
        >
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
        </section>
      </Reveal>

      <Reveal delay={0.06}>
        <section
          id="caso"
          className="torns-case torns-band-blue"
          aria-labelledby="case-title"
        >
          <div className="torns-case-story">
            <div className="case-copy">
              <h2 id="case-title" className="display">
                {copy.caseFrame}
              </h2>
              <p className="lede">{copy.caseNotPilot}</p>
              <p className="prose">{copy.caseScope}</p>
            </div>
            <StationPhoto file="image-1.jfif" className="case-photo" />
          </div>
        </section>
      </Reveal>

      <InterviewBlock />
      <SurveyBlock />

      <Reveal delay={0.08}>
        <section id="cierre" className="torns-close torns-on-white">
          <BrandMark variant="wordmark" on="light" className="mark-close" />
          <h2 className="display">{copy.close}</h2>
          <Link className="btn-primary" to="/">
            {copy.navLirn}
          </Link>
        </section>
      </Reveal>

      <ContactForm />
    </main>
  );
}

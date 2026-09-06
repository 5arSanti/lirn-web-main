import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { Reveal } from "./Reveal";
import { QuoteStage } from "./QuoteStage";

export function InterviewBlock() {
  return (
    <section
      className="band torns-discovery torns-band-blue"
      aria-labelledby="discovery-title"
    >
      <Reveal className="torns-section-head">
        <div>
          <h2 id="discovery-title" className="display">
            {copy.discoveryTitle}
          </h2>
          <p className="evidence-label">{evidence.label}</p>
        </div>
        <p className="lede torns-discovery-role">{evidence.interviewRole}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <QuoteStage />
      </Reveal>
    </section>
  );
}

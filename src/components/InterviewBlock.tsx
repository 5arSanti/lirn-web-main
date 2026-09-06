import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { QuoteStage } from "./QuoteStage";

export function InterviewBlock() {
  return (
    <section
      className="band torns-discovery torns-on-white"
      aria-labelledby="discovery-title"
    >
      <h2 id="discovery-title" className="display">
        {copy.discoveryTitle}
      </h2>
      <p className="evidence-label">{evidence.label}</p>
      <p className="lede">{evidence.interviewRole}</p>
      <QuoteStage />
    </section>
  );
}

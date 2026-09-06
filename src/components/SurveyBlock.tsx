import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { EvidenceStage } from "./EvidenceStage";
import { Reveal } from "./Reveal";

export function SurveyBlock() {
  return (
    <section
      className="band torns-validation torns-on-white"
      aria-labelledby="validation-title"
    >
      <Reveal className="torns-section-head">
        <div>
          <h2 id="validation-title" className="display">
            {copy.validationTitle}
          </h2>
          <p className="evidence-label">{evidence.label}</p>
        </div>
        <p className="lede torns-discovery-role">{copy.validationLead}</p>
      </Reveal>
      <Reveal delay={0.06}>
        <EvidenceStage />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="prose torns-conclusions">{evidence.conclusions}</p>
      </Reveal>
    </section>
  );
}

import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { EvidenceStage } from "./EvidenceStage";

export function SurveyBlock() {
  return (
    <section
      className="band torns-validation torns-on-white"
      aria-labelledby="validation-title"
    >
      <h2 id="validation-title" className="display">
        {copy.validationTitle}
      </h2>
      <p className="evidence-label">{evidence.label}</p>
      <EvidenceStage />
      <p className="prose torns-conclusions">{evidence.conclusions}</p>
    </section>
  );
}

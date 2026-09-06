import { useState } from "react";
import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { SURVEY_ACT_TAGS, chartFormFor } from "../content/surveyActs";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { StageControls } from "./StageControls";
import { ValueChart } from "./ValueChart";

export function EvidenceStage() {
  const [index, setIndex] = useState(0);
  const reduceMotion = usePrefersReducedMotion();
  const last = evidence.questions.length - 1;
  const question = evidence.questions[index] ?? evidence.questions[0];
  const previous = index > 0 ? evidence.questions[index - 1] : undefined;
  const progress = copy.questionProgress.replace("{n}", String(index + 1));

  return (
    <div className="torns-evidence-stage">
      <p className="meta">{progress}</p>
      <p className="torns-act-tag">{SURVEY_ACT_TAGS[question.id]}</p>
      <h3>{question.title}</h3>
      <p className="meta">{question.context}</p>
      <p className="prose">{question.analysis}</p>
      <p className="evidence-label">n={evidence.n}</p>
      <ValueChart
        form={chartFormFor(question.id)}
        bars={question.bars}
        previousBars={previous?.bars}
        reduceMotion={reduceMotion}
      />
      <StageControls
        atStart={index === 0}
        atEnd={index === last}
        onPrev={() => setIndex((current) => Math.max(0, current - 1))}
        onNext={() => setIndex((current) => Math.min(last, current + 1))}
      />
    </div>
  );
}

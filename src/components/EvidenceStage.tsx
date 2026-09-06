import { copy } from "../content/copy";
import { evidence } from "../content/evidence";
import { SURVEY_ACT_TAGS, chartFormFor } from "../content/surveyActs";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useStageIndex } from "../hooks/useStageIndex";
import { StageControls } from "./StageControls";
import { StageSlide } from "./StageSlide";
import { ValueChart } from "./ValueChart";

export function EvidenceStage() {
  const stage = useStageIndex(evidence.questions.length);
  const reduceMotion = usePrefersReducedMotion();
  const question = evidence.questions[stage.index] ?? evidence.questions[0];
  const previous =
    stage.index > 0 ? evidence.questions[stage.index - 1] : undefined;
  const progress = copy.questionProgress.replace("{n}", String(stage.index + 1));

  return (
    <div className="torns-evidence-stage">
      <div className="torns-evidence-chrome">
        <p className="meta">{progress}</p>
        <p className="torns-act-tag">{SURVEY_ACT_TAGS[question.id]}</p>
      </div>
      <StageSlide id={question.id} direction={stage.direction}>
        <div className="torns-evidence-panel">
          <div className="torns-evidence-copy">
            <h3>{question.title}</h3>
            <p className="meta">{question.context}</p>
            <p className="prose">{question.analysis}</p>
            <p className="evidence-label">n={evidence.n}</p>
          </div>
          <div className="torns-evidence-chart">
            <ValueChart
              form={chartFormFor(question.id)}
              bars={question.bars}
              previousBars={previous?.bars}
              reduceMotion={reduceMotion}
            />
          </div>
        </div>
      </StageSlide>
      <StageControls
        atStart={stage.atStart}
        atEnd={stage.atEnd}
        onPrev={stage.goPrev}
        onNext={stage.goNext}
      />
    </div>
  );
}

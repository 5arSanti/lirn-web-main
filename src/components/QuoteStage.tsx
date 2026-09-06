import { evidence } from "../content/evidence";
import { useStageIndex } from "../hooks/useStageIndex";
import { StageControls } from "./StageControls";
import { StageSlide } from "./StageSlide";

export function QuoteStage() {
  const stage = useStageIndex(evidence.turns.length);
  const turn = evidence.turns[stage.index] ?? evidence.turns[0];

  return (
    <div className="torns-quote-stage">
      <p className="torns-act-index">
        0{stage.index + 1} / 0{evidence.turns.length}
      </p>
      <StageSlide id={`quote-${stage.index}`} direction={stage.direction}>
        <p className="interview-q">{turn.question}</p>
        <p className="interview-a">{turn.answer}</p>
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

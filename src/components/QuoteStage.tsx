import { evidence } from "../content/evidence";
import { useStageIndex } from "../hooks/useStageIndex";
import { StageControls } from "./StageControls";
import { StageSlide } from "./StageSlide";
import { StationPhoto } from "./StationPhoto";

export function QuoteStage() {
  const stage = useStageIndex(evidence.turns.length);
  const turn = evidence.turns[stage.index] ?? evidence.turns[0];

  return (
    <div className="torns-quote-stage">
      <div className="torns-quote-rail" aria-hidden="true">
        <p className="torns-act-index">
          {String(stage.index + 1).padStart(2, "0")}
          <span> / {String(evidence.turns.length).padStart(2, "0")}</span>
        </p>
        <ol className="torns-quote-dots">
          {evidence.turns.map((item, dotIndex) => (
            <li
              key={item.question}
              className={dotIndex === stage.index ? "is-active" : undefined}
            />
          ))}
        </ol>
      </div>
      <div className="torns-quote-main">
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
      <StationPhoto file="image-2.jfif" className="torns-quote-visual" />
    </div>
  );
}

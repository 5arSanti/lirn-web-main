import { useState } from "react";
import { evidence } from "../content/evidence";
import { StageControls } from "./StageControls";

export function QuoteStage() {
  const [index, setIndex] = useState(0);
  const last = evidence.turns.length - 1;
  const turn = evidence.turns[index] ?? evidence.turns[0];

  return (
    <div className="torns-quote-stage">
      <p className="interview-q">{turn.question}</p>
      <p className="interview-a">{turn.answer}</p>
      <StageControls
        atStart={index === 0}
        atEnd={index === last}
        onPrev={() => setIndex((current) => Math.max(0, current - 1))}
        onNext={() => setIndex((current) => Math.min(last, current + 1))}
      />
    </div>
  );
}

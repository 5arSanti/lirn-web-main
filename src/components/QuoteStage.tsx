import { useState } from "react";
import { copy } from "../content/copy";
import { evidence } from "../content/evidence";

export function QuoteStage() {
  const [index, setIndex] = useState(0);
  const last = evidence.turns.length - 1;
  const turn = evidence.turns[index] ?? evidence.turns[0];

  return (
    <div className="torns-quote-stage">
      <p className="interview-q">{turn.question}</p>
      <p className="interview-a">{turn.answer}</p>
      <div className="torns-stage-controls">
        <button
          type="button"
          className="btn-secondary"
          disabled={index === 0}
          onClick={() => setIndex((current) => Math.max(0, current - 1))}
        >
          {copy.controlPrev}
        </button>
        <button
          type="button"
          className="btn-secondary"
          disabled={index === last}
          onClick={() => setIndex((current) => Math.min(last, current + 1))}
        >
          {copy.controlNext}
        </button>
      </div>
    </div>
  );
}

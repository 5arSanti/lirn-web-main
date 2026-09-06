import { useState } from "react";
import { copy } from "../content/copy";

export function PipelineTrack() {
  const [index, setIndex] = useState(0);
  const last = copy.systemSteps.length - 1;

  return (
    <div className="torns-pipeline">
      <ol className="pipeline">
        {copy.systemSteps.map((step, stepIndex) => (
          <li
            key={step}
            aria-current={stepIndex === index ? "step" : undefined}
          >
            <span className="signal-node" aria-hidden="true" />
            <strong>{step}</strong>
            {stepIndex === index ? <p>{copy.systemStepBodies[stepIndex]}</p> : null}
          </li>
        ))}
      </ol>
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

import { useState } from "react";
import { copy } from "../content/copy";
import { StageControls } from "./StageControls";

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
      <StageControls
        atStart={index === 0}
        atEnd={index === last}
        onPrev={() => setIndex((current) => Math.max(0, current - 1))}
        onNext={() => setIndex((current) => Math.min(last, current + 1))}
      />
    </div>
  );
}

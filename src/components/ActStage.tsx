import { useState } from "react";
import { copy } from "../content/copy";
import { StageControls } from "./StageControls";
import { StationPhoto } from "./StationPhoto";

const ACTS = [
  {
    id: "espera",
    title: copy.storyWaitTitle,
    body: copy.storyWaitBody,
    file: "image-2.jfif",
  },
  {
    id: "ve",
    title: copy.storySeeTitle,
    body: copy.storySeeBody,
    file: "image-5.jfif",
  },
  {
    id: "mide",
    title: copy.storyMeasureTitle,
    body: copy.storyMeasureBody,
    file: "image-6.jfif",
  },
  {
    id: "actua",
    title: copy.storyActTitle,
    body: copy.storyActBody,
    file: "image-7.jfif",
  },
] as const;

export function ActStage() {
  const [index, setIndex] = useState(0);
  const act = ACTS[index] ?? ACTS[0];

  return (
    <div className="torns-act-stage">
      <StationPhoto file={act.file} className="torns-act-photo" />
      <div className="torns-act-copy">
        <p className="torns-act-index">0{index + 1}</p>
        <h3>{act.title}</h3>
        <p>{act.body}</p>
        <div className="torns-act-scheme" data-act={act.id}>
          {act.id === "espera" ? (
            <>
              <p>{copy.problemExpected}</p>
              <span className="torns-qual-bar" data-qual="expected" />
              <p className="contrast-real">{copy.problemReal}</p>
              <span className="torns-qual-bar" data-qual="real" />
            </>
          ) : null}
          {act.id === "ve" ? <span className="signal-node" aria-hidden="true" /> : null}
          {act.id === "mide" ? <p>{copy.detectHint}</p> : null}
          {act.id === "actua" ? (
            <p>
              {copy.capRecommend}: {copy.capRecommendBody}
            </p>
          ) : null}
        </div>
        <StageControls
          atStart={index === 0}
          atEnd={index === ACTS.length - 1}
          onPrev={() => setIndex((current) => Math.max(0, current - 1))}
          onNext={() => setIndex((current) => Math.min(ACTS.length - 1, current + 1))}
        />
      </div>
    </div>
  );
}

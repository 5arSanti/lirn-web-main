import { copy } from "../content/copy";
import { useStageIndex } from "../hooks/useStageIndex";
import { StageControls } from "./StageControls";
import { StageSlide } from "./StageSlide";
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
  const stage = useStageIndex(ACTS.length);
  const act = ACTS[stage.index] ?? ACTS[0];

  return (
    <div className="torns-act-stage">
      <StageSlide id={act.id} direction={stage.direction} className="torns-act-media">
        <StationPhoto file={act.file} className="torns-act-photo" />
      </StageSlide>
      <div className="torns-act-copy">
        <StageSlide id={`${act.id}-copy`} direction={stage.direction}>
          <p className="torns-act-index">
            0{stage.index + 1} / 0{ACTS.length}
          </p>
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
        </StageSlide>
        <StageControls
          atStart={stage.atStart}
          atEnd={stage.atEnd}
          onPrev={stage.goPrev}
          onNext={stage.goNext}
        />
      </div>
    </div>
  );
}

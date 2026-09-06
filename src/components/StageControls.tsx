import { copy } from "../content/copy";

function noop() {}

export function StageControls({
  onPrev,
  onNext,
  atStart,
  atEnd,
}: {
  onPrev: () => void;
  onNext: () => void;
  atStart: boolean;
  atEnd: boolean;
}) {
  return (
    <div className="torns-stage-controls">
      <button
        type="button"
        className="btn-secondary"
        aria-disabled={atStart ? "true" : undefined}
        onClick={atStart ? noop : onPrev}
      >
        {copy.controlPrev}
      </button>
      <button
        type="button"
        className="btn-secondary"
        aria-disabled={atEnd ? "true" : undefined}
        onClick={atEnd ? noop : onNext}
      >
        {copy.controlNext}
      </button>
    </div>
  );
}

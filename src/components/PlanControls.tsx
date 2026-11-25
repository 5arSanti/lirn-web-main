import { copy } from "../content/copy";

function noop() {}

export function PlanControls({
  playing,
  atStart,
  atEnd,
  totalElapsedMs,
  totalMs,
  onPrev,
  onNext,
  onToggle,
}: {
  playing: boolean;
  atStart: boolean;
  atEnd: boolean;
  totalElapsedMs: number;
  totalMs: number;
  onPrev: () => void;
  onNext: () => void;
  onToggle: () => void;
}) {
  const max = Math.round(totalMs / 1000);
  const now = Math.round(totalElapsedMs / 1000);

  return (
    <div className="plan-controls">
      <button
        type="button"
        className="btn-secondary"
        aria-disabled={atStart ? "true" : undefined}
        onClick={atStart ? noop : onPrev}
      >
        {copy.controlPrev}
      </button>
      <button type="button" className="btn-secondary" onClick={onToggle}>
        {playing ? copy.controlPause : copy.controlPlay}
      </button>
      <button
        type="button"
        className="btn-secondary"
        aria-disabled={atEnd ? "true" : undefined}
        onClick={atEnd ? noop : onNext}
      >
        {copy.controlNext}
      </button>
      <progress
        className="plan-progress"
        max={max}
        value={now}
        aria-label={copy.planTimeLabel}
      />
    </div>
  );
}

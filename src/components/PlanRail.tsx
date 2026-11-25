import type { MouseEvent } from "react";
import type { PlanBeat, PlanBeatId } from "../content/plan";
import { copy } from "../content/copy";

export function PlanRail({
  beats,
  currentId,
  onSelect,
}: {
  beats: readonly PlanBeat[];
  currentId: PlanBeatId;
  onSelect: (id: PlanBeatId) => void;
}) {
  const select = (id: PlanBeatId) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onSelect(id);
  };

  return (
    <nav className="plan-rail" aria-label={copy.planAria}>
      {beats.map((beat) => {
        const current = beat.id === currentId;
        return (
          <a
            key={beat.id}
            href={`#${beat.id}`}
            className={current ? "is-current" : undefined}
            aria-current={current ? "true" : undefined}
            onClick={select(beat.id)}
          >
            {beat.railLabel}
          </a>
        );
      })}
    </nav>
  );
}

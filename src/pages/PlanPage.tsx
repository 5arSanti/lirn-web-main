import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PLAN_BEATS, PLAN_TOTAL_MS, beatIdFromHash } from "../content/plan";
import { copy } from "../content/copy";
import { usePlanPlayback } from "../hooks/usePlanPlayback";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { PlanControls } from "../components/PlanControls";
import { PlanRail } from "../components/PlanRail";
import { PlanStage } from "../components/PlanStage";

export function PlanPage() {
  const reduce = usePrefersReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();
  const initialId = beatIdFromHash(location.hash);
  const playback = usePlanPlayback(PLAN_BEATS, {
    reducedMotion: reduce,
    initialId,
  });
  const { beat, goTo, goNext, goPrev, toggle } = playback;
  const beatIdRef = useRef(beat.id);
  beatIdRef.current = beat.id;

  useEffect(() => {
    if (location.hash === `#${beat.id}`) {
      return;
    }
    navigate(`#${beat.id}`, { replace: true });
  }, [beat.id, navigate]);

  useEffect(() => {
    const fromHash = beatIdFromHash(location.hash);
    if (!fromHash || fromHash === beatIdRef.current) {
      return;
    }
    goTo(fromHash);
  }, [goTo, location.hash]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
        return;
      }
      if (event.key === " ") {
        if (tag === "A" || tag === "BUTTON") {
          return;
        }
        event.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, toggle]);

  return (
    <main className="page page-plan" aria-label={copy.planAria}>
      <PlanRail
        beats={PLAN_BEATS}
        currentId={beat.id}
        onSelect={goTo}
      />
      <div className="plan-frame">
        <div className="plan-stage">
          <PlanStage key={beat.id} beat={beat} />
        </div>
        <PlanControls
          playing={playback.playing}
          atStart={playback.atStart}
          atEnd={playback.atEnd}
          totalElapsedMs={playback.totalElapsedMs}
          totalMs={PLAN_TOTAL_MS}
          onPrev={goPrev}
          onNext={goNext}
          onToggle={toggle}
        />
      </div>
    </main>
  );
}

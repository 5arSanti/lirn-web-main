import { motion } from "motion/react";
import { copy } from "../content/copy";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useStageIndex } from "../hooks/useStageIndex";
import { StageControls } from "./StageControls";

export function PipelineTrack() {
  const stage = useStageIndex(copy.systemSteps.length);
  const reduce = usePrefersReducedMotion();

  return (
    <div className="torns-pipeline">
      <ol className="pipeline">
        {copy.systemSteps.map((step, stepIndex) => {
          const active = stepIndex === stage.index;
          return (
            <li
              key={step}
              aria-current={active ? "step" : undefined}
              className={active ? "is-active" : undefined}
            >
              <motion.span
                className="signal-node"
                aria-hidden="true"
                animate={
                  reduce
                    ? undefined
                    : {
                        scale: active ? 1.35 : 1,
                        opacity: active ? 1 : 0.4,
                      }
                }
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
              <strong>{step}</strong>
              {active ? (
                <motion.p
                  key={`body-${stepIndex}`}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {copy.systemStepBodies[stepIndex]}
                </motion.p>
              ) : null}
            </li>
          );
        })}
      </ol>
      <StageControls
        atStart={stage.atStart}
        atEnd={stage.atEnd}
        onPrev={stage.goPrev}
        onNext={stage.goNext}
      />
    </div>
  );
}

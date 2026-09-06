import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function StageSlide({
  id,
  direction,
  children,
  className,
}: {
  id: string;
  direction: number;
  children: ReactNode;
  className?: string;
}) {
  const reduce = usePrefersReducedMotion();

  if (reduce) {
    return (
      <div className={`torns-stage-slide ${className ?? ""}`.trim()}>{children}</div>
    );
  }

  return (
    <div className="torns-stage-viewport">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={id}
          className={`torns-stage-slide ${className ?? ""}`.trim()}
          initial={{ opacity: 0, x: direction > 0 ? 56 : -56, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: direction > 0 ? -56 : 56, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

import { AnimatePresence, motion } from "motion/react";
import {
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * Cross-fades stage content without stacking in document flow.
 * Absolute exit/enter layers + measured viewport height prevent the
 * "text drops then snaps back" jump when Anterior/Siguiente fire.
 */
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
  const measureRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const node = measureRef.current;
    if (!node) {
      return;
    }
    const update = () => {
      const next = Math.ceil(node.getBoundingClientRect().height);
      setHeight((prev) => (prev === next ? prev : next));
    };
    update();
    if (typeof ResizeObserver === "undefined") {
      return;
    }
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [id, children]);

  if (reduce) {
    return (
      <div className={`torns-stage-slide ${className ?? ""}`.trim()}>{children}</div>
    );
  }

  return (
    <motion.div
      className="torns-stage-viewport"
      initial={false}
      animate={height == null ? undefined : { height }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      style={height == null ? undefined : { height }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={id}
          ref={measureRef}
          className={`torns-stage-slide is-layered ${className ?? ""}`.trim()}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 36 : -36 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -36 : 36 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

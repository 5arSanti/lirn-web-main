import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import type { ChartForm } from "../content/surveyActs";

export type ChartBar = { label: string; value: number };

function AnimatedPercent({
  value,
  reduceMotion,
}: {
  value: number;
  reduceMotion: boolean;
}) {
  const motionValue = useMotionValue(reduceMotion ? value : 0);
  const rounded = useTransform(motionValue, (latest) => `${Math.round(latest)}%`);

  useEffect(() => {
    if (reduceMotion) {
      motionValue.set(value);
      return;
    }
    const controls = animate(motionValue, value, {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [motionValue, reduceMotion, value]);

  return (
    <motion.span className="torns-chart-hero-number" data-hero={value}>
      {rounded}
    </motion.span>
  );
}

function BarFill({
  value,
  previous,
  reduceMotion,
  axis,
}: {
  value: number;
  previous?: number;
  reduceMotion: boolean;
  axis: "width" | "height";
}) {
  const from = reduceMotion ? value : (previous ?? 0);
  return (
    <motion.div
      className="torns-chart-fill"
      data-value={value}
      initial={reduceMotion ? false : { [axis]: `${from}%` }}
      animate={{ [axis]: `${value}%` }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

export function ValueChart({
  form,
  bars,
  previousBars,
  reduceMotion = false,
}: {
  form: ChartForm;
  bars: readonly ChartBar[];
  previousBars?: readonly ChartBar[];
  reduceMotion?: boolean;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldReduceMotion = reduceMotion ? true : prefersReducedMotion;

  if (form === "hero") {
    const bar = bars[0];
    if (!bar) {
      return <p className="torns-chart-fallback">{bars.length}</p>;
    }
    return (
      <div className="torns-chart torns-chart-hero">
        <AnimatedPercent value={bar.value} reduceMotion={shouldReduceMotion} />
        <p>{bar.label}</p>
        <BarFill
          value={bar.value}
          previous={previousBars?.[0]?.value}
          reduceMotion={shouldReduceMotion}
          axis="width"
        />
      </div>
    );
  }

  if (form === "peaks") {
    return (
      <ul className="torns-chart torns-chart-peaks">
        {bars.map((bar, index) => (
          <li key={bar.label}>
            <span className="torns-chart-value">{bar.value}%</span>
            <div className="torns-chart-column">
              <BarFill
                value={bar.value}
                previous={previousBars?.[index]?.value}
                reduceMotion={shouldReduceMotion}
                axis="height"
              />
            </div>
            <span className="torns-chart-label">{bar.label}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (form === "ranking") {
    return (
      <ol className="torns-chart torns-chart-ranking">
        {bars.map((bar, index) => (
          <li key={bar.label}>
            <span className="torns-chart-rank" aria-hidden="true">
              {index + 1}
            </span>
            <span>{bar.label}</span>
            <span>{bar.value}%</span>
            <BarFill
              value={bar.value}
              previous={previousBars?.[index]?.value}
              reduceMotion={shouldReduceMotion}
              axis="width"
            />
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul className={`torns-chart torns-chart-${form}`}>
      {bars.map((bar, index) => (
        <li key={bar.label}>
          <span>{bar.label}</span>
          <span>{bar.value}%</span>
          <BarFill
            value={bar.value}
            previous={previousBars?.[index]?.value}
            reduceMotion={shouldReduceMotion}
            axis="width"
          />
        </li>
      ))}
    </ul>
  );
}

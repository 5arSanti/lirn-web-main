import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import type { ChartForm } from "../content/surveyActs";

export type ChartBar = { label: string; value: number };

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
  const initial = shouldReduceMotion
    ? bars.map((bar) => bar.value)
    : (previousBars?.map((bar) => bar.value) ?? bars.map(() => 0));
  const [shown, setShown] = useState<number[]>(initial);

  useEffect(() => {
    let cancelled = false;
    if (shouldReduceMotion) {
      setShown(bars.map((bar) => bar.value));
      return;
    }
    setShown(previousBars?.map((bar) => bar.value) ?? bars.map(() => 0));
    const frame = window.requestAnimationFrame(() => {
      if (!cancelled) {
        setShown(bars.map((bar) => bar.value));
      }
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [bars, previousBars, shouldReduceMotion]);

  if (form === "hero") {
    const bar = bars[0];
    if (!bar) {
      return <p className="torns-chart-fallback">{bars.length}</p>;
    }
    return (
      <div className="torns-chart torns-chart-hero">
        <p className="torns-chart-hero-number" data-hero={bar.value}>
          {bar.value}%
        </p>
        <p>{bar.label}</p>
        <div
          className="torns-chart-fill"
          data-value={bar.value}
          style={{ width: `${shown[0] ?? bar.value}%` }}
        />
      </div>
    );
  }

  return (
    <ul className={`torns-chart torns-chart-${form}`}>
      {bars.map((bar, index) => (
        <li key={bar.label}>
          <span>{bar.label}</span>
          <span>{bar.value}%</span>
          <div
            className="torns-chart-fill"
            data-value={bar.value}
            style={{ width: `${shown[index] ?? bar.value}%` }}
          />
        </li>
      ))}
    </ul>
  );
}

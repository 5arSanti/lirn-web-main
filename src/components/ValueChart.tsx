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
    let frame = 0;
    if (shouldReduceMotion) {
      setShown(bars.map((bar) => bar.value));
      return;
    }
    setShown(previousBars?.map((bar) => bar.value) ?? bars.map(() => 0));
    if (typeof window === "undefined" || typeof window.requestAnimationFrame !== "function") {
      setShown(bars.map((bar) => bar.value));
      return;
    }
    frame = window.requestAnimationFrame(() => {
      if (!cancelled) {
        setShown(bars.map((bar) => bar.value));
      }
    });
    return () => {
      cancelled = true;
      try {
        if (typeof window !== "undefined") {
          window.cancelAnimationFrame(frame);
        }
      } catch {
        // jsdom may already be gone when the suite tears down
      }
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

  if (form === "peaks") {
    return (
      <ul className="torns-chart torns-chart-peaks">
        {bars.map((bar, index) => (
          <li key={bar.label}>
            <span className="torns-chart-value">{bar.value}%</span>
            <div className="torns-chart-column">
              <div
                className="torns-chart-fill"
                data-value={bar.value}
                style={{ height: `${shown[index] ?? bar.value}%` }}
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
            <div
              className="torns-chart-fill"
              data-value={bar.value}
              style={{ width: `${shown[index] ?? bar.value}%` }}
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

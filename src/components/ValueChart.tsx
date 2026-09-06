import { useEffect, useState } from "react";
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
  const initial = reduceMotion
    ? bars.map((bar) => bar.value)
    : (previousBars?.map((bar) => bar.value) ?? bars.map(() => 0));
  const [shown, setShown] = useState<number[]>(initial);

  useEffect(() => {
    if (reduceMotion) {
      setShown(bars.map((bar) => bar.value));
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      setShown(bars.map((bar) => bar.value));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [bars, reduceMotion]);

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

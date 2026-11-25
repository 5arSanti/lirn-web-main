import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PlanBeat, PlanBeatId } from "../content/plan";

function indexOfId(beats: readonly PlanBeat[], id?: PlanBeatId): number {
  const found = beats.findIndex((beat) => beat.id === id);
  return found >= 0 ? found : 0;
}

export function usePlanPlayback(
  beats: readonly PlanBeat[],
  options: { reducedMotion: boolean; initialId?: PlanBeatId },
) {
  const last = Math.max(0, beats.length - 1);
  const [index, setIndex] = useState(() => indexOfId(beats, options.initialId));
  const [direction, setDirection] = useState(1);
  const [playing, setPlaying] = useState(() => {
    const start = indexOfId(beats, options.initialId);
    return !options.reducedMotion && beats[start]?.id === "firma";
  });
  const [sceneElapsedMs, setSceneElapsedMs] = useState(0);
  const elapsedRef = useRef(0);
  elapsedRef.current = sceneElapsedMs;

  const beat = beats[index] ?? beats[0];

  useEffect(() => {
    if (!playing || !beat) {
      return;
    }
    const remaining = Math.max(0, beat.durationMs - elapsedRef.current);
    const timeoutId = window.setTimeout(() => {
      if (index >= last) {
        setPlaying(false);
        setSceneElapsedMs(beat.durationMs);
        return;
      }
      setIndex(index + 1);
      setDirection(1);
      setSceneElapsedMs(0);
    }, remaining);
    const intervalId = window.setInterval(() => {
      setSceneElapsedMs((current) =>
        Math.min(current + 100, beat.durationMs),
      );
    }, 100);
    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [beat, index, last, playing]);

  const pause = useCallback(() => {
    setPlaying(false);
  }, []);

  const play = useCallback(() => {
    setPlaying(true);
  }, []);

  const toggle = useCallback(() => {
    setPlaying((current) => !current);
  }, []);

  const goTo = useCallback(
    (id: PlanBeatId) => {
      const next = indexOfId(beats, id);
      setIndex((current) => {
        setDirection(next >= current ? 1 : -1);
        return next;
      });
      setPlaying(false);
      setSceneElapsedMs(0);
    },
    [beats],
  );

  const goPrev = useCallback(() => {
    setIndex((current) => {
      if (current <= 0) {
        return current;
      }
      setDirection(-1);
      return current - 1;
    });
    setPlaying(false);
    setSceneElapsedMs(0);
  }, []);

  const goNext = useCallback(() => {
    setIndex((current) => {
      if (current >= last) {
        return current;
      }
      setDirection(1);
      return current + 1;
    });
    setPlaying(false);
    setSceneElapsedMs(0);
  }, [last]);

  const totalElapsedMs = useMemo(() => {
    const prior = beats
      .slice(0, index)
      .reduce((sum, item) => sum + item.durationMs, 0);
    return prior + sceneElapsedMs;
  }, [beats, index, sceneElapsedMs]);

  return {
    index,
    beat,
    direction,
    playing,
    sceneElapsedMs,
    totalElapsedMs,
    atStart: index === 0,
    atEnd: index === last,
    play,
    pause,
    toggle,
    goPrev,
    goNext,
    goTo,
  };
}

import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { PLAN_BEATS } from "../content/plan";
import { usePlanPlayback } from "./usePlanPlayback";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("usePlanPlayback", () => {
  it("autoplays from firma and advances after durationMs", () => {
    const { result } = renderHook(() =>
      usePlanPlayback(PLAN_BEATS, { reducedMotion: false }),
    );
    expect(result.current.beat.id).toBe("firma");
    expect(result.current.playing).toBe(true);
    act(() => {
      vi.advanceTimersByTime(27999);
    });
    expect(result.current.beat.id).toBe("firma");
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(result.current.beat.id).toBe("desajuste");
    expect(result.current.playing).toBe(true);
    expect(result.current.direction).toBe(1);
  });

  it("pauses on goTo and does not loop after the last beat", () => {
    const { result } = renderHook(() =>
      usePlanPlayback(PLAN_BEATS, { reducedMotion: false }),
    );
    act(() => {
      result.current.goTo("cierre");
    });
    expect(result.current.playing).toBe(false);
    expect(result.current.beat.id).toBe("cierre");
    act(() => {
      result.current.play();
    });
    act(() => {
      vi.advanceTimersByTime(20000);
    });
    expect(result.current.beat.id).toBe("cierre");
    expect(result.current.playing).toBe(false);
    expect(result.current.sceneElapsedMs).toBe(20000);
  });

  it("starts paused on a non-firma hash and when motion is reduced", () => {
    const hashed = renderHook(() =>
      usePlanPlayback(PLAN_BEATS, {
        reducedMotion: false,
        initialId: "ruta",
      }),
    );
    expect(hashed.result.current.beat.id).toBe("ruta");
    expect(hashed.result.current.playing).toBe(false);

    const reduced = renderHook(() =>
      usePlanPlayback(PLAN_BEATS, { reducedMotion: true }),
    );
    expect(reduced.result.current.playing).toBe(false);
    expect(reduced.result.current.beat.id).toBe("firma");
  });

  it("goNext and goPrev pause and keep bounds", () => {
    const { result } = renderHook(() =>
      usePlanPlayback(PLAN_BEATS, { reducedMotion: true }),
    );
    act(() => {
      result.current.goPrev();
    });
    expect(result.current.index).toBe(0);
    act(() => {
      result.current.goNext();
    });
    expect(result.current.beat.id).toBe("desajuste");
    expect(result.current.playing).toBe(false);
  });
});

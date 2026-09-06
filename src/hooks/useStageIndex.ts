import { useCallback, useState } from "react";

export function useStageIndex(length: number) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const last = Math.max(0, length - 1);

  const goPrev = useCallback(() => {
    setIndex((current) => {
      if (current <= 0) {
        return current;
      }
      return current - 1;
    });
    setDirection(-1);
  }, []);

  const goNext = useCallback(() => {
    setIndex((current) => {
      if (current >= last) {
        return current;
      }
      return current + 1;
    });
    setDirection(1);
  }, [last]);

  return {
    index,
    direction,
    last,
    atStart: index === 0,
    atEnd: index === last,
    goPrev,
    goNext,
  };
}

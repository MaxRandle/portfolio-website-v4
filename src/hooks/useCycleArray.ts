import { useEffect, useState } from "react";

/**
 *
 * @summary hook that cycles through an array of values at fixed intervals
 * @example const currentValue = useCycleArray<string>(["a", "b", "c"], 1000);
 *
 * @param values array of values to cycle through
 * @param interval time in milliseconds between cycles
 * @returns the current item and current index in the array
 *
 */
export const useCycleArray = <T>(
  values: readonly T[],
  interval: number
): { currentItem: T; currentIndex: number } => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % values.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [index, interval, values.length]);

  return { currentItem: values[index], currentIndex: index };
};

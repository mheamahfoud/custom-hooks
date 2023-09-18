import React, { useCallback, useRef, useState } from 'react';

const useStateWithHistory = (defaultValue: any, {
  capacity = 10
} = {}): [value: number, set: (v: any) => void, { back: () => void, forward: () => void, go: (index: number) => void, history: any, pointer: any }] => {
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef<number[]>([value]);
  const pointerRef = useRef(0)


  const set = useCallback(
    (v: any) => {
      const resolvedValue = typeof v === "function" ? v(value) : v
      if (historyRef.current[pointerRef.current] != resolvedValue) {
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1)
        }
        historyRef.current.push(resolvedValue)

        while (historyRef.current.length > capacity) {
          historyRef.current.shift()
        }
        pointerRef.current = historyRef.current.length - 1
      }
      setValue(resolvedValue)

    },
    [value, capacity],
  );

  const back = useCallback(() => {
    if (pointerRef.current <= 0) return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current])
  }, [])

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current])
  }, [])

  const go = useCallback((index: number) => {
    if (index < 0 || index > historyRef.current.length - 1) return;
    pointerRef.current = index
    setValue(historyRef.current[pointerRef.current])
  }, [])

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go
    }
  ]
}

export default useStateWithHistory;

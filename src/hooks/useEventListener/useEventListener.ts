import { useEffect, useRef } from 'react';

const useEventListener = (
  eventType: string,
  callback: (event: Event) => void,
  element: EventTarget = window
) => {
  const callbackRef = useRef<(event: Event) => void>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: Event) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => {
      element.removeEventListener(eventType, handler);
    };
  }, [eventType, element]);
};

export default useEventListener;

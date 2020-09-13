import { useEffect, useRef } from "react";

const MOUSEDOWN = "mousedown";
const KEYDOWN = "keydown";
const isEscaped = (event) => event.key === "Escape";
const containsRef = (ref, event) => ref.current.contains(event.target);

export const useClickAway = (callback) => {
  const ref = useRef(null);
  useEffect(() => {
    const listener = (event) => {
      if (!ref || !ref.current || containsRef(ref, event)) {
        return;
      }
      callback(event);
    };
    document.addEventListener(MOUSEDOWN, listener);
    return () => {
      document.removeEventListener(MOUSEDOWN, listener);
    };
  }, [callback]);

  return ref;
};

export const useEscape = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (!ref || !ref.current || !isEscaped(event)) {
        return;
      }
      callback(event);
    };
    document.addEventListener(KEYDOWN, listener);
    return () => {
      document.removeEventListener(KEYDOWN, listener);
    };
  }, [callback]);

  return ref;
};

const useDismiss = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const mousedownListener = (event) => {
      if (!ref || !ref.current || containsRef(ref, event)) {
        return;
      }
      callback(event);
    };

    const keydownListener = (event) => {
      if (!ref || !ref.current || !isEscaped(event)) {
        return;
      }
      callback(event);
    };
    document.addEventListener(KEYDOWN, keydownListener);
    document.addEventListener(MOUSEDOWN, mousedownListener);
    return () => {
      document.removeEventListener(MOUSEDOWN, mousedownListener);
      document.removeEventListener(KEYDOWN, keydownListener);
    };
  }, [callback]);

  return ref;
};

export default useDismiss;

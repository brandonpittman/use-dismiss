import { useEffect } from "react";

const MOUSEDOWN = "mousedown";
const KEYDOWN = "keydown";
const isEscaped = (event) => event.key === "Escape";
const containsRef = (ref, event) => ref.current.contains(event.target);

export const useClickAway = (ref, callback) => {
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
  }, [ref, callback]);
};

export const useEscape = (ref, callback) => {
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
  }, [ref, callback]);
};

const useDismiss = (ref, callback) => {
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
  }, [ref, callback]);
};

export default useDismiss;

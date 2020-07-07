import { useRef, useEffect } from 'react';

function usePolling(callback, delay = 1000 * 60, deps) {
  const savedCallback = useRef();

  useEffect(() => {
    callback(...deps);
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current(...deps);
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay, deps]);
}

export default usePolling;

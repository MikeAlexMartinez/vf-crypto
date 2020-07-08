import { useRef, useEffect } from 'react';

function usePolling(callback, delay = 1000 * 60, deps) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    // Call immediately then return tick function
    // to run on subsequent requests
    let id = setInterval(function tick() {
      savedCallback.current(...deps);
      return tick;
    }(), delay);

    return () => clearInterval(id);
  }, [delay, deps]);
}

export default usePolling;

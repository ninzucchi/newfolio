import { useCallback, useState } from 'react';

export function useImageLoaded(src?: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [prevSrc, setPrevSrc] = useState(src);

  if (src !== prevSrc) {
    setPrevSrc(src);
    setIsLoaded(false);
  }

  const onLoad = useCallback(() => setIsLoaded(true), []);
  return { isLoaded, onLoad };
}

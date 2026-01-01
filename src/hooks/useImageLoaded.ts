import { useCallback, useState } from 'react';

export function useImageLoaded() {
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoad = useCallback(() => setIsLoaded(true), []);
  return { isLoaded, onLoad };
}

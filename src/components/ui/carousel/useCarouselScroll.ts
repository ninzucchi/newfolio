import { useRef, useState, useEffect, useCallback } from 'react';

export function useCarouselScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);

    // Use ResizeObserver to detect when content size changes (e.g., images load)
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  const scrollToDirection = useCallback((direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    const containerRect = container.getBoundingClientRect();
    const scrollLeft = container.scrollLeft;

    if (direction === 'right') {
      // Find the first item that's not fully visible on the right
      for (const child of children) {
        const childRight = child.offsetLeft + child.offsetWidth - scrollLeft;
        if (childRight > containerRect.width + 1) {
          container.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
          break;
        }
      }
    } else {
      // Find the last item that's not fully visible on the left
      for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i];
        const childLeft = child.offsetLeft - scrollLeft;
        if (childLeft < -1) {
          // Scroll so this item's right edge aligns with container's right edge
          const targetScroll = child.offsetLeft + child.offsetWidth - containerRect.width;
          container.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
          break;
        }
      }
    }
  }, []);

  return {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    scrollToDirection,
  };
}


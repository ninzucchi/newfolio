import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { ContributionCell } from './ContributionCell';
import type { Contribution } from './useContributions';
import { CELL_SIZE, DAYS_IN_WEEK, groupByWeeks, MAX_WEEKS } from './util';

export function ContributionGrid({
  contributions,
  className,
}: {
  contributions: Contribution[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleWeeks, setVisibleWeeks] = useState(MAX_WEEKS);

  const weeks = groupByWeeks(contributions);

  // Calculate how many weeks can fit based on container width
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const calculateVisibleWeeks = () => {
      const containerWidth = container.offsetWidth;
      const weekWidth = CELL_SIZE;
      const maxVisible = Math.floor(containerWidth / weekWidth);
      setVisibleWeeks(Math.min(maxVisible, MAX_WEEKS, weeks.length));
    };

    calculateVisibleWeeks();

    const resizeObserver = new ResizeObserver(calculateVisibleWeeks);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [weeks.length]);

  const displayWeeks = weeks.slice(-visibleWeeks);

  return (
    <div ref={containerRef} className={cn('auto-cols-4 flex flex-col overflow-hidden', className)}>
      <div
        className={`grid grid-flow-col auto-cols-[${CELL_SIZE}px]`}
        style={{
          gridTemplateRows: `repeat(${DAYS_IN_WEEK}, ${CELL_SIZE}px)`,
        }}
      >
        {displayWeeks.flatMap((week, weekIndex) =>
          week.map((contribution, dayIndex) => (
            <ContributionCell
              key={`${weekIndex}-${dayIndex}`}
              level={contribution?.level ?? 0}
              date={contribution?.date}
              count={contribution?.count}
            />
          ))
        )}
      </div>
    </div>
  );
}

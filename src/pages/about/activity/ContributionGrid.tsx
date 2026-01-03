import { Text } from '@/components/ui/text/Text';
import { cn } from '@/lib/utils';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ContributionCell } from './ContributionCell';
import type { Contribution } from './useContributions';
import { CELL_SIZE, DAYS_IN_WEEK, formatDate, groupByWeeks, MAX_WEEKS } from './util';

export function ContributionGrid({
  contributions,
  className,
}: {
  contributions: Contribution[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleWeeks, setVisibleWeeks] = useState(MAX_WEEKS);
  const [hoveredCell, setHoveredCell] = useState<{ date: string; count: number } | null>(null);

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
    <div ref={containerRef} className={cn('flex flex-col gap-2', className)}>
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
              onHover={setHoveredCell}
            />
          ))
        )}
      </div>
      <ContributionsLabel hoveredCell={hoveredCell} contributions={contributions} />
    </div>
  );
}

function ContributionsLabel({
  hoveredCell,
  contributions,
}: {
  hoveredCell?: { date: string; count: number } | null;
  contributions: Contribution[];
}) {
  const totalContributions = useMemo(
    () => contributions.reduce((sum, c) => sum + c.count, 0),
    [contributions]
  );

  return (
    <Text.B4 className="text-fg-tertiary">
      {hoveredCell
        ? `${hoveredCell.count} ${hoveredCell.count === 1 ? 'contribution' : 'contributions'} on ${formatDate(hoveredCell.date)}`
        : `${totalContributions} contributions this year`}
    </Text.B4>
  );
}

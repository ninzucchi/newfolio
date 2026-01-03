import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface ContributionCellProps {
  level: 0 | 1 | 2 | 3 | 4;
  date?: string;
  count?: number;
  className?: string;
}

const LEVEL_CLASSES = {
  0: 'bg-github-0',
  1: 'bg-github-1',
  2: 'bg-github-2',
  3: 'bg-github-3',
  4: 'bg-github-4',
} as const;

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function ContributionCell({ level, date, count, className }: ContributionCellProps) {
  const cell = (
    <div className="flex size-4 flex-auto cursor-pointer items-center justify-center">
      <div className={cn('size-2.5 rounded-full', LEVEL_CLASSES[level], className)} />
    </div>
  );

  if (!date || count === 0) return cell;

  const contributionText = count === 1 ? '1 contribution' : `${count ?? 0} contributions`;

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>{cell}</TooltipTrigger>
        <TooltipContent>
          {contributionText} on {formatDate(date)}
        </TooltipContent>
      </Tooltip>
    </>
  );
}

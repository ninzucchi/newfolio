import { cn } from '@/lib/utils';

interface ContributionCellProps {
  level: 0 | 1 | 2 | 3 | 4;
  className?: string;
}

const LEVEL_CLASSES = {
  0: 'bg-github-0',
  1: 'bg-github-1',
  2: 'bg-github-2',
  3: 'bg-github-3',
  4: 'bg-github-4',
} as const;

const GITHUB_URL = 'https://github.com/ninzucchi';

export function ContributionCell({ level, className }: ContributionCellProps) {
  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-4 flex-auto items-center justify-center"
    >
      <div className={cn('size-2.5 rounded-full', LEVEL_CLASSES[level], className)} />
    </a>
  );
}

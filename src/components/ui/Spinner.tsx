import { cn } from '@/lib/utils';

export function Spinner({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      vectorEffect="non-scaling-stroke"
      className={cn('spinner', className)}
      aria-label="Loading"
    >
      <circle cx={12} cy={12} r={11} strokeWidth={2} fill="none" className="stroke-secondary" />
      <circle
        cx={12}
        cy={12}
        r={11}
        strokeWidth={2}
        fill="none"
        className="spinner-fg stroke-fg-secondary"
      />
    </svg>
  );
}

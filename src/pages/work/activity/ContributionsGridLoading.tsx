import { ContributionGrid } from './ContributionGrid';
import type { Contribution } from './useContributions';

const EMPTY_CONTRIBUTIONS: Contribution[] = Array.from({ length: 356 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - i);
  return {
    date: date.toISOString().split('T')[0],
    count: 0,
    level: 0,
  };
});

export function ContributionGridLoading() {
  return <ContributionGrid contributions={EMPTY_CONTRIBUTIONS} className="animate-pulse" />;
}

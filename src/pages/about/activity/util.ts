import type { Contribution } from './useContributions';

export const DAYS_IN_WEEK = 7;
export const CELL_SIZE = 16;
export const MAX_WEEKS = 52;

export function groupByWeeks(contributions: Contribution[]): (Contribution | undefined)[][] {
  if (contributions.length === 0) return [];

  const firstDate = new Date(contributions[0].date);
  const firstDayOfWeek = firstDate.getDay();

  // Pad the beginning to align with week start (Sunday)
  const paddedContributions: (Contribution | undefined)[] = [
    ...Array(firstDayOfWeek).fill(undefined),
    ...contributions,
  ];

  // Group into weeks of 7 days
  const weeks: (Contribution | undefined)[][] = [];
  for (let i = 0; i < paddedContributions.length; i += DAYS_IN_WEEK) {
    weeks.push(paddedContributions.slice(i, i + DAYS_IN_WEEK));
  }

  return weeks;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

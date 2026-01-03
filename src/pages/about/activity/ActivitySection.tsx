import { SectionCollapsible } from '@/components/ui/section/Section';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ContributionGrid } from './ContributionGrid';
import { ContributionGridLoading } from './ContributionsGridLoading';
import { useContributions } from './useContributions';

export function ActivitySection() {
  const { data, isLoading } = useContributions('ninzucchi');

  return (
    <SectionCollapsible title="Activity">
      <TooltipProvider delayDuration={0}>
        {isLoading ? (
          <ContributionGridLoading />
        ) : data ? (
          <ContributionGrid contributions={data.contributions} />
        ) : null}
      </TooltipProvider>
    </SectionCollapsible>
  );
}

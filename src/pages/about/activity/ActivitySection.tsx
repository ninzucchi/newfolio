import { SectionCollapsible } from '@/components/ui/section/SectionCollapsible';
import { ContributionGrid } from './ContributionGrid';
import { ContributionGridLoading } from './ContributionsGridLoading';
import { useContributions } from './useContributions';

export function ActivitySection({ defaultOpen }: { defaultOpen?: boolean }) {
  const { data, isLoading } = useContributions('ninzucchi');

  return (
    <SectionCollapsible title="Activity" defaultOpen={defaultOpen}>
      {isLoading ? (
        <ContributionGridLoading />
      ) : data ? (
        <ContributionGrid contributions={data.contributions} />
      ) : null}
    </SectionCollapsible>
  );
}

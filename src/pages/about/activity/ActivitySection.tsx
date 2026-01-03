import { SectionCollapsible } from '@/components/ui/section/Section';
import { ContributionGrid } from './ContributionGrid';
import { ContributionGridLoading } from './ContributionsGridLoading';
import { useContributions } from './useContributions';

export function ActivitySection() {
  const { data, isLoading } = useContributions('ninzucchi');

  return (
    <SectionCollapsible title="Activity">
      {isLoading ? (
        <ContributionGridLoading />
      ) : data ? (
        <ContributionGrid contributions={data.contributions} />
      ) : null}
    </SectionCollapsible>
  );
}

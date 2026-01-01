import { Divider } from '@/components/ui/Divider';
import { Text } from '@/components/ui/text/Text';
import { cn } from '@/lib/utils';

export function SectionHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <Text.H2 className="text-fg-secondary text-sm font-normal whitespace-nowrap">
        {children}
      </Text.H2>
      <Divider />
    </div>
  );
}

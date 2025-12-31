import { Text } from './Text';
import { Divider } from './Divider';
import { cn } from '../../lib/utils';

export function SectionHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex gap-4 items-center', className)}>
      <Text.H2 className="text-sm font-normal whitespace-nowrap text-fg-secondary">
        {children}
      </Text.H2>
      <Divider />
    </div>
  );
}

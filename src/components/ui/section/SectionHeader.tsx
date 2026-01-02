import { CollapsibleTrigger } from '@/components/ui/Collapsible';
import { Divider } from '@/components/ui/Divider';
import { IconButton } from '@/components/ui/IconButton';
import { Text } from '@/components/ui/text/Text';
import { cn } from '@/lib/utils';
import { ChevronsDownUpIcon, ChevronsUpDownIcon } from 'lucide-react';

export function SectionHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <HeaderContainer className={className}>
      <HeaderTitle>{children}</HeaderTitle>
      <Divider />
    </HeaderContainer>
  );
}

export function SectionHeaderCollapsible({
  children,
  className,
  isOpen,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}) {
  return (
    <HeaderContainer className={className}>
      <HeaderTitle>{children}</HeaderTitle>
      <Divider />
      <CollapsibleTrigger asChild>
        <IconButton aria-label={isOpen ? 'Collapse section' : 'Expand section'} size="sm">
          {isOpen ? <ChevronsDownUpIcon size={14} /> : <ChevronsUpDownIcon size={14} />}
        </IconButton>
      </CollapsibleTrigger>
    </HeaderContainer>
  );
}

function HeaderContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('flex items-center gap-4', className)}>{children}</div>;
}

function HeaderTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text.H2 className="text-fg-secondary text-sm font-normal whitespace-nowrap">
      {children}
    </Text.H2>
  );
}

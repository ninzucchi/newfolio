import { CollapsibleTrigger } from '@/components/ui/Collapsible';
import { Divider } from '@/components/ui/Divider';
import { Text } from '@/components/ui/text/Text';
import { cn } from '@/lib/utils';
import { ChevronsDownUpIcon, ChevronsUpDownIcon } from 'lucide-react';
import { forwardRef } from 'react';

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
        <HeaderCollapseTrigger isOpen={isOpen} />
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

const HeaderCollapseTrigger = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isOpen: boolean }
>(({ isOpen, className, ...props }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      className={cn(
        'text-fg-secondary hover:text-fg-primary flex shrink-0 cursor-pointer items-center transition-colors',
        className
      )}
      {...props}
    >
      {isOpen ? <ChevronsDownUpIcon size={14} /> : <ChevronsUpDownIcon size={14} />}
    </button>
  );
});

HeaderCollapseTrigger.displayName = 'HeaderCollapseTrigger';

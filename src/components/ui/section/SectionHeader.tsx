import { CollapsibleTrigger } from '@/components/ui/Collapsible';
import { Divider } from '@/components/ui/Divider';
import { ToggleIconButton } from '@/components/ui/ToggleIconButton';
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
    <CollapsibleTrigger asChild>
      <HeaderContainer className={cn('cursor-pointer', className)}>
        <HeaderTitle>{children}</HeaderTitle>
        <Divider className="group-hover:bg-tertiary" />
        <ToggleIconButton
          isActive={isOpen}
          icon={<ChevronsUpDownIcon size={14} />}
          activeIcon={<ChevronsDownUpIcon size={14} />}
          aria-label={isOpen ? 'Collapse section' : 'Expand section'}
        />
      </HeaderContainer>
    </CollapsibleTrigger>
  );
}

const HeaderContainer = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'hover:text-fg-primary group text-fg-secondary flex items-center gap-4 transition-colors duration-200',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
HeaderContainer.displayName = 'HeaderContainer';

function HeaderTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text.H2 className="text-sm font-normal whitespace-nowrap select-none">{children}</Text.H2>
  );
}

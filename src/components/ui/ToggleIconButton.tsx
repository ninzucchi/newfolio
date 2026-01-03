import { cn } from '@/lib/utils';
import { CrossfadeIcon } from './CrossfadeIcon';
import { IconButton } from './IconButton';

export function ToggleIconButton({
  isActive,
  icon,
  activeIcon,
  activeClassName,
  onClick,
  'aria-label': ariaLabel,
  className,
}: {
  isActive: boolean;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  activeClassName?: string;
  onClick?: () => void;
  'aria-label': string;
  className?: string;
}) {
  return (
    <IconButton
      onClick={onClick}
      aria-label={ariaLabel}
      size="sm"
      className={cn(className, isActive && activeClassName)}
    >
      <div className="relative h-4 w-4">
        <CrossfadeIcon visible={!isActive}>{icon}</CrossfadeIcon>
        <CrossfadeIcon visible={isActive}>{activeIcon}</CrossfadeIcon>
      </div>
    </IconButton>
  );
}

import { Grid } from '@/components/ui/grid/Grid';
import { cn } from '@/lib/utils';

export function ExperienceGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <Grid className={cn('grid-cols-[auto_1fr_auto]', className)} {...props} />;
}

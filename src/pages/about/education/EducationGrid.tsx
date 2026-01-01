import { Grid } from '@/components/ui/grid/Grid';
import { cn } from '@/lib/utils';

export function EducationGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <Grid className={cn('grid-cols-[1fr_auto]', className)} {...props} />;
}

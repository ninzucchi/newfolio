import { Text } from '@/components/ui/Text';

export function ProjectImagePlaceholder() {
  return (
    <div className="flex justify-center items-center w-full rounded-lg bg-secondary outline-border aspect-video outline-1 -outline-offset-1">
      <Text.B4 className="text-fg-secondary">Coming soon</Text.B4>
    </div>
  );
}

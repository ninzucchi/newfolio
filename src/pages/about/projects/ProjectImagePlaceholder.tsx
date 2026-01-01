import { Text } from '@/components/ui/text/Text';

export function ProjectImagePlaceholder() {
  return (
    <div className="bg-secondary outline-border flex aspect-video w-full items-center justify-center rounded-lg outline-1 -outline-offset-1">
      <Text.B4 className="text-fg-secondary">Coming soon</Text.B4>
    </div>
  );
}

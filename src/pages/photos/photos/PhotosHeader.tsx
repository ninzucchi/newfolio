import { GridCell } from '@/components/ui/grid/GridCell';
import { Text } from '@/components/ui/text/Text';

export function PhotosHeader({
  images,
}: {
  images: { thumbnail: string; full: string; alt: string }[];
}) {
  return (
    <GridCell className="items-center">
      <Text.B1>Photos</Text.B1>
      <Text.B4 className="text-fg-secondary">
        {`${images.length - 1} shots captured on my Fuji XT-5`}
      </Text.B4>
    </GridCell>
  );
}

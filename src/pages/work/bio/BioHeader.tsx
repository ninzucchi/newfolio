import { BaseImage } from '@/components/ui/BaseImage';
import { GridCell } from '@/components/ui/grid/GridCell';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Text } from '@/components/ui/text/Text';
import { useImageLoaded } from '@/hooks/useImageLoaded';

export function BioHeader() {
  const { isLoaded, onLoad } = useImageLoaded();

  return (
    <div className="flex items-center gap-4">
      <div
        className={`bg-secondary outline-border-default h-11 w-11 shrink-0 overflow-hidden rounded-full ${!isLoaded ? 'animate-pulse' : ''}`}
      >
        <BaseImage
          src="/avatar.jpg"
          alt="Nick Inzucchi"
          className="h-full w-full rounded-full object-cover"
          isLoaded={isLoaded}
          onLoad={onLoad}
        />
      </div>
      <GridCell className="flex-1">
        <Text.B1>Nick Inzucchi</Text.B1>
        <Text.B4 className="text-fg-secondary">Designer, engineer, product generalist</Text.B4>
      </GridCell>
      <SocialLinks />
    </div>
  );
}

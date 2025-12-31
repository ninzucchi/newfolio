import { Text } from '../../components/ui/Text';
import { GridColumnMain, GridColumnDate } from '../../components/ui/Grid';
import { ProjectImage } from '../../components/ui/ProjectImage';
import { ImageCarousel } from '../../components/ui/carousel/ImageCarousel';

export function ProjectItem({
  title,
  description,
  year,
  images,
}: {
  title: string;
  description: string;
  year: string;
  images: string[];
}) {
  const hasImages = images.length > 0;
  const isSingleImage = images.length === 1;

  return (
    <>
      <GridColumnMain>
        <Text.B3>{title}</Text.B3>
        <Text.B4 className="text-fg-secondary">{description}</Text.B4>
      </GridColumnMain>
      <GridColumnDate>
        <Text.B4 className="text-fg-secondary">{year}</Text.B4>
      </GridColumnDate>
      <div className="col-span-2 -mt-1 mb-6">
        {!hasImages ? (
          <ProjectImagePlaceholder />
        ) : isSingleImage ? (
          <ProjectImage src={images[0]} alt={`${title} - Image 1`} />
        ) : (
          <ImageCarousel images={images} alt={title} />
        )}
      </div>
    </>
  );
}

function ProjectImagePlaceholder() {
  return (
    <div className="flex justify-center items-center w-full rounded-lg bg-secondary outline-border aspect-video outline outline-offset-0">
      <Text.B4 className="text-fg-secondary">Coming soon</Text.B4>
    </div>
  );
}

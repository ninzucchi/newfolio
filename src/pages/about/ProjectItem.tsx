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
        {isSingleImage ? (
          <ProjectImage src={images[0]} alt={`${title} - Image 1`} />
        ) : (
          <ImageCarousel images={images} alt={title} />
        )}
      </div>
    </>
  );
}

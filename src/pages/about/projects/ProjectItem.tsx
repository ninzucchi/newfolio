import { ImageCarousel } from '@/components/ui/carousel/ImageCarousel';
import { GridCell, GridCellRight } from '@/components/ui/grid/GridCell';
import { Text } from '@/components/ui/text/Text';
import { ProjectImage } from '@/pages/about/projects/ProjectImage';

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
      <GridCell>
        <Text.B3>{title}</Text.B3>
        <Text.B4 className="text-fg-secondary">{description}</Text.B4>
      </GridCell>
      <GridCellRight>
        <Text.B4 className="text-fg-secondary">{year}</Text.B4>
      </GridCellRight>
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

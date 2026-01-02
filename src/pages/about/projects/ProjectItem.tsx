import { ImageCarousel } from '@/components/ui/carousel/ImageCarousel';
import { GridCell, GridCellRight } from '@/components/ui/grid/GridCell';
import { Text } from '@/components/ui/text/Text';
import { CopyLinkButton } from '@/pages/about/projects/CopyLinkButton';
import { ProjectImage } from '@/pages/about/projects/ProjectImage';

export function ProjectItem({
  projectIndex,
  slug,
  title,
  description,
  year,
  images,
}: {
  projectIndex: number;
  slug: string;
  title: string;
  description: string;
  year: string;
  images: string[];
}) {
  const isSingleImage = images.length === 1;
  const url = `${window.location.origin}/#${slug}`;

  return (
    <div id={slug} className="group col-span-2 grid grid-cols-subgrid gap-y-6">
      <GridCell>
        <div className="flex items-center gap-2">
          <Text.B3>{title}</Text.B3>
          <CopyLinkButton
            url={url}
            className="transition-all group-hover:opacity-100 sm:opacity-0"
          />
        </div>
        <Text.B4 className="text-fg-secondary">{description}</Text.B4>
      </GridCell>
      <GridCellRight>
        <Text.B4 className="text-fg-secondary">{year}</Text.B4>
      </GridCellRight>
      <div className="col-span-2 -mt-1">
        {isSingleImage ? (
          <ProjectImage
            projectIndex={projectIndex}
            imageIndex={0}
            src={images[0]}
            alt={`${title} - Image 1`}
          />
        ) : (
          <ImageCarousel projectIndex={projectIndex} images={images} alt={title} />
        )}
      </div>
    </div>
  );
}

import { ImageCarousel } from '@/components/ui/carousel/ImageCarousel';
import { GridCell, GridCellRight } from '@/components/ui/grid/GridCell';
import { Text } from '@/components/ui/text/Text';
import { TextLink } from '@/components/ui/text/TextLink';
import { CopyLinkButton } from '@/pages/work/projects/CopyLinkButton';
import { ProjectImage } from '@/pages/work/projects/ProjectImage';

export function ProjectItem({
  projectIndex,
  slug,
  title,
  description,
  year,
  images,
  url: projectUrl,
}: {
  projectIndex: number;
  slug: string;
  title: string;
  description: string;
  year: string;
  images: string[];
  url?: string;
}) {
  const isSingleImage = images.length === 1;
  const copyUrl = `${window.location.origin}/#${slug}`;

  return (
    <div id={slug} className="group col-span-2 grid scroll-mt-20 grid-cols-subgrid gap-y-6">
      <GridCell>
        <div className="flex items-center gap-2">
          {projectUrl ? (
            <Text.B3>
              <TextLink href={projectUrl} newTab>
                {title}
              </TextLink>
            </Text.B3>
          ) : (
            <Text.B3>{title}</Text.B3>
          )}
          <CopyLinkButton
            url={copyUrl}
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

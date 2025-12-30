import { Text } from '../../components/ui/Text';
import { GridColumnMain, GridColumnDate } from '../../components/ui/Grid';
import { ProjectImage } from '../../components/ui/ProjectImage';

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
  return (
    <>
      <GridColumnMain>
        <Text.B3>{title}</Text.B3>
        <Text.B4 className="text-fg-secondary">{description}</Text.B4>
      </GridColumnMain>
      <GridColumnDate>
        <Text.B4 className="text-fg-secondary">{year}</Text.B4>
      </GridColumnDate>
      <div className="col-span-2 -mt-1 mb-6 flex flex-col gap-4">
        {images.map((src, index) => (
          <ProjectImage key={index} src={src} alt={`${title} - Image ${index + 1}`} />
        ))}
      </div>
    </>
  );
}

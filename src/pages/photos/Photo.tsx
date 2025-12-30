import { PhotoThumbnail } from '../../components/ui/PhotoThumbnail';

function PhotoContainer({ children }: { children: React.ReactNode }) {
  return <div className="aspect-[4/3] w-full overflow-hidden">{children}</div>;
}

export function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <PhotoContainer>
      <PhotoThumbnail src={src} alt={alt} className="h-full w-full" />
    </PhotoContainer>
  );
}

import { Lightbox } from '@/components/ui/lightbox/Lightbox';
import { LightboxImage } from '@/components/ui/lightbox/LightboxImage';
import { Page } from '@/components/ui/Page';
import { GearSection } from '@/pages/photos/gear/GearSection';
import { PhotosHeader } from '@/pages/photos/photos/PhotosHeader';
import { usePhotos } from '@/pages/photos/usePhotos';
import { PhotosSection } from './PhotosSection';

export function PhotosPage() {
  const {
    images,
    openIndex,
    setOpenIndex,
    currentImage,
    currentFullSrc,
    hasPrev,
    hasNext,
    handlePrev,
    handleNext,
  } = usePhotos();

  return (
    <Page>
      <TopContainer>
        <PhotosHeader images={images} />
        <GearSection />
      </TopContainer>
      <PhotosSection images={images} setOpenIndex={setOpenIndex} />

      <Lightbox
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        onPrev={hasPrev ? handlePrev : undefined}
        onNext={hasNext ? handleNext : undefined}
      >
        {currentImage && currentFullSrc && (
          <LightboxImage src={currentFullSrc} alt={currentImage.alt} />
        )}
      </Lightbox>
    </Page>
  );
}

function TopContainer({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto flex w-full max-w-[600px] flex-col gap-16">{children}</div>;
}

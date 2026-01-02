import { IconButton } from '@/components/ui/IconButton';
import { defaultEasing, longDuration } from '@/lib/animation';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import { useEffect } from 'react';

function LightboxLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="fixed inset-0 z-2 flex cursor-zoom-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: longDuration, ease: defaultEasing }}
    >
      {children}
    </motion.div>
  );
}

export function Lightbox({
  isOpen,
  onClose,
  onNext,
  onPrev,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && onPrev) {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        e.preventDefault();
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrev]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal forceMount>
        <AnimatePresence>
          {isOpen && (
            <LightboxLayout>
              <Dialog.Overlay
                forceMount
                className="absolute inset-0 bg-black/95"
                onClick={onClose}
              />
              <Dialog.Content
                forceMount
                onOpenAutoFocus={(e) => e.preventDefault()}
                onCloseAutoFocus={(e) => e.preventDefault()}
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                style={{ pointerEvents: 'none' }}
              >
                <VisuallyHidden.Root>
                  <Dialog.Title>Photo</Dialog.Title>
                </VisuallyHidden.Root>
                <Dialog.Close className="pointer-events-auto absolute top-4 right-4">
                  <IconButton aria-label="Close lightbox">
                    <XIcon size={20} />
                  </IconButton>
                </Dialog.Close>
                {onPrev && <LightboxNavButton direction="prev" onClick={onPrev} />}
                {onNext && <LightboxNavButton direction="next" onClick={onNext} />}
                <LightboxImageContainer onClose={onClose}>{children}</LightboxImageContainer>
              </Dialog.Content>
            </LightboxLayout>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function LightboxNavButton({
  direction,
  onClick,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
}) {
  const isPrev = direction === 'prev';
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`pointer-events-auto absolute top-1/2 z-1 -translate-y-1/2 ${isPrev ? 'left-4' : 'right-4'}`}
    >
      <IconButton aria-label={isPrev ? 'Previous image' : 'Next image'}>
        {isPrev ? <ChevronLeftIcon size={20} /> : <ChevronRightIcon size={20} />}
      </IconButton>
    </button>
  );
}

function LightboxImageContainer({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="pointer-events-auto max-h-[90dvh] max-w-[90dvw] select-none" onClick={onClose}>
      {children}
    </div>
  );
}

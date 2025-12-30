import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { MediaIconButton } from '../MediaIconButton';

function LightboxLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="fixed inset-0 z-2 flex cursor-zoom-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export function Lightbox({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
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
                  <MediaIconButton icon={X} aria-label="Close lightbox" />
                </Dialog.Close>
                <LightboxImageContainer onClose={onClose}>{children}</LightboxImageContainer>
              </Dialog.Content>
            </LightboxLayout>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
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

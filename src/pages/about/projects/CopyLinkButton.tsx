import { IconButton } from '@/components/ui/IconButton';
import { useCopyText } from '@/hooks/useCopyText';
import { defaultDuration, defaultEasing } from '@/lib/animation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check, Link2 } from 'lucide-react';

const iconAnimation = {
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: 'blur(4px)',
  },
  transition: {
    duration: defaultDuration,
    ease: defaultEasing,
  },
};

function CopyLinkIcon({
  visible,
  className,
  children,
}: {
  visible: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={visible ? iconAnimation.visible : iconAnimation.hidden}
      transition={iconAnimation.transition}
      className={cn('absolute inset-0', className)}
    >
      {children}
    </motion.div>
  );
}

export function CopyLinkButton({ url, className }: { url: string; className?: string }) {
  const { copyText, justCopied } = useCopyText();

  const handleCopyLink = () => {
    copyText(url, 'Copied link to project');
  };

  return (
    <IconButton
      onClick={handleCopyLink}
      aria-label="Copy link"
      size="sm"
      className={cn(className, justCopied && 'opacity-100!')}
    >
      <div className="relative h-4 w-4">
        <CopyLinkIcon visible={!justCopied}>
          <Link2 size={14} />
        </CopyLinkIcon>
        <CopyLinkIcon visible={justCopied} className="text-fg-primary">
          <Check size={14} />
        </CopyLinkIcon>
      </div>
    </IconButton>
  );
}

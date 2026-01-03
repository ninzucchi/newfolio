import { ToggleIconButton } from '@/components/ui/ToggleIconButton';
import { useCopyText } from '@/hooks/useCopyText';
import { Check, Link2 } from 'lucide-react';

export function CopyLinkButton({ url, className }: { url: string; className?: string }) {
  const { copyText, justCopied } = useCopyText();

  const handleCopyLink = () => {
    copyText(url, 'Copied link to project');
  };

  return (
    <ToggleIconButton
      isActive={justCopied}
      icon={<Link2 size={14} />}
      activeIcon={<Check size={14} />}
      onClick={handleCopyLink}
      aria-label="Copy link"
      className={className}
      activeClassName="opacity-100!"
    />
  );
}

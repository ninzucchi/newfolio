import { IconButton } from '@/components/ui/IconButton';
import { useCopyText } from '@/hooks/useCopyText';
import { Link2Icon } from 'lucide-react';

export function CopyLinkButton({ url, className }: { url: string; className?: string }) {
  const { copyText } = useCopyText();

  const handleCopyLink = () => {
    copyText(url, 'Copied link to project');
  };

  return (
    <IconButton onClick={handleCopyLink} aria-label="Copy link" size="sm" className={className}>
      <Link2Icon size={14} />
    </IconButton>
  );
}

import { useCallback, useState } from 'react';
import { toast } from 'sonner';

export function useCopyText() {
  const [justCopied, setJustCopied] = useState(false);

  const copyText = useCallback((text: string, successMessage = 'Copied to clipboard') => {
    navigator.clipboard.writeText(text);
    toast.success(successMessage);
    setJustCopied(true);
    setTimeout(() => setJustCopied(false), 4000);
  }, []);

  return { copyText, justCopied };
}

import { useCallback } from 'react';
import { toast } from 'sonner';

export function useCopyText() {
  const copyText = useCallback((text: string, successMessage = 'Copied to clipboard') => {
    navigator.clipboard.writeText(text);
    toast.success(successMessage);
  }, []);

  return { copyText };
}

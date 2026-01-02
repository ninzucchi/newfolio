import { useNavigate, useSearch } from '@tanstack/react-router';
import { useCallback } from 'react';

export function useProjectImageState(projectIndex: number, imageCount: number) {
  const { p, i } = useSearch({ from: '/' });
  const navigate = useNavigate({ from: '/' });

  // Convert 1-based URL params to 0-based indices
  // Only use i if p param matches this project's index (1-based)
  const openIndex =
    p === projectIndex + 1 && i !== undefined && i >= 1 && i <= imageCount ? i - 1 : null;

  const setOpenIndex = useCallback(
    (index: number | null) => {
      if (index === null) {
        // Close - remove both params
        navigate({ search: {}, replace: true });
      } else {
        // Open - set both p and i (1-based)
        navigate({ search: { p: projectIndex + 1, i: index + 1 }, replace: true });
      }
    },
    [navigate, projectIndex]
  );

  return [openIndex, setOpenIndex] as const;
}

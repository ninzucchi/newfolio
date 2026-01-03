import { useQuery } from '@tanstack/react-query';

export interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionsResponse {
  total: Record<string, number>;
  contributions: Contribution[];
}

const API_URL = 'https://github-contributions-api.jogruber.de/v4';

async function fetchContributions(username: string): Promise<ContributionsResponse> {
  const response = await fetch(`${API_URL}/${username}?y=last`);
  if (!response.ok) {
    throw new Error(`Failed to fetch contributions for ${username}`);
  }
  return response.json();
}

export function useContributions(username: string) {
  return useQuery({
    queryKey: ['contributions', username],
    queryFn: () => fetchContributions(username),
    staleTime: 1000 * 60 * 60, // 1 hour (matches API cache)
  });
}

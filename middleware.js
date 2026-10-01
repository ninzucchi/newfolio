import { next } from '@vercel/functions';
import { handleArchiveRequest, isFamilyPath, privateHeaders } from './server/family-gate.mjs';

export const config = { runtime: 'nodejs' };

export default async function middleware(request) {
  const response = await handleArchiveRequest(request, {
    password: process.env.FAMILY_ARCHIVE_PASSWORD,
    key: process.env.FAMILY_ARCHIVE_CONTENT_KEY,
  });
  if (response) return response;
  return next(isFamilyPath(new URL(request.url).pathname) ? { headers: privateHeaders } : undefined);
}

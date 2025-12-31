/**
 * Script to fetch all image public IDs from Cloudinary
 * Run with: npx tsx scripts/fetch-cloudinary-images.ts
 *
 * Requires CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET
 * in a .env file at the project root.
 */

import { writeFileSync } from 'fs';
import { config } from 'dotenv';

config();

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error('Missing Cloudinary credentials in .env file');
  console.error('Required: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET');
  process.exit(1);
}

async function fetchAllImages() {
  const images: string[] = [];
  let nextCursor: string | undefined;

  do {
    const url = new URL(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`);
    url.searchParams.set('max_results', '500');
    if (nextCursor) {
      url.searchParams.set('next_cursor', nextCursor);
    }

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Basic ${Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64')}`,
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Cloudinary API error:', error);
      process.exit(1);
    }

    const data = await response.json();

    for (const resource of data.resources) {
      // Filter to only include photo-* images
      if (resource.public_id.startsWith('photo-')) {
        images.push(resource.public_id);
      }
    }

    nextCursor = data.next_cursor;
    console.log(`Fetched ${images.length} images so far...`);
  } while (nextCursor);

  // Sort by the photo number (photo-01, photo-02, etc.)
  images.sort((a, b) => {
    const numA = parseInt(a.match(/photo-(\d+)/)?.[1] || '0');
    const numB = parseInt(b.match(/photo-(\d+)/)?.[1] || '0');
    return numA - numB;
  });

  return images;
}

async function main() {
  console.log('Fetching images from Cloudinary...');
  const images = await fetchAllImages();

  const outputPath = 'src/lib/photo-ids.ts';
  const fileContent = `/**
 * Auto-generated list of Cloudinary photo public IDs.
 * 
 * To regenerate this file after uploading new photos:
 *   npx tsx scripts/fetch-cloudinary-images.ts
 * 
 * Generated: ${new Date().toISOString()}
 */

export const photoIds: string[] = ${JSON.stringify(images, null, 2)};
`;

  writeFileSync(outputPath, fileContent);

  console.log(`\nDone! Found ${images.length} images.`);
  console.log(`Saved to ${outputPath}`);
}

main().catch(console.error);

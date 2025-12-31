const CLOUD_NAME = 'durmmclz8';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export function getCloudinaryUrl(
  publicId: string,
  options?: { width?: number; quality?: number | 'auto' }
) {
  const transforms = [
    options?.width && `w_${options.width}`,
    'f_auto', // auto format (webp/avif where supported)
    `q_${options?.quality ?? 'auto'}`,
  ]
    .filter(Boolean)
    .join(',');

  return `${BASE_URL}/${transforms}/${publicId}`;
}


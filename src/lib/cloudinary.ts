const CLOUD_NAME = 'durmmclz8';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export function getCloudinaryUrl(
  publicId: string,
  options?: { width?: number; quality?: number | 'auto'; aspectRatio?: string }
) {
  const transforms = [
    options?.width && `w_${options.width}`,
    options?.aspectRatio && `ar_${options.aspectRatio}`,
    'c_fill', // fill crop mode - fills the area, cropping if necessary
    'g_auto', // automatic gravity - smart cropping to focus on interesting parts
    'f_auto', // auto format (webp/avif where supported)
    `q_${options?.quality ?? 'auto'}`,
  ]
    .filter(Boolean)
    .join(',');

  return `${BASE_URL}/${transforms}/${publicId}`;
}

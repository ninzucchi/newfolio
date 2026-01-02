const CLOUD_NAME = 'durmmclz8';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export function getCloudinaryUrl(
  publicId: string,
  options?: { width?: number; quality?: number | 'auto'; aspectRatio?: string; crop?: string }
) {
  const transforms = [
    options?.width && `w_${options.width}`,
    options?.aspectRatio && `ar_${options.aspectRatio}`,
    options?.crop && `c_${options.crop}`,
    'f_auto',
    `q_${options?.quality ?? 'auto'}`,
  ]
    .filter(Boolean)
    .join(',');

  return `${BASE_URL}/${transforms}/${publicId}`;
}

// Utility functions for image optimization

export const getOptimizedImageUrl = (url: string, width?: number, height?: number, quality = 80) => {
  // For Pexels images, we can add query parameters for optimization
  if (url.includes('pexels.com')) {
    const urlObj = new URL(url);
    if (width) urlObj.searchParams.set('w', width.toString());
    if (height) urlObj.searchParams.set('h', height.toString());
    urlObj.searchParams.set('auto', 'compress');
    urlObj.searchParams.set('cs', 'tinysrgb');
    urlObj.searchParams.set('dpr', '1');
    return urlObj.toString();
  }
  return url;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const generatePlaceholder = (width: number, height: number, color = '#f3f4f6') => {
  return `data:image/svg+xml;base64,${btoa(
    `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${color}"/>
    </svg>`
  )}`;
};
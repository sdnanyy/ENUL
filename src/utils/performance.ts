// Performance utilities for mobile optimization

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Lazy load components
export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) => {
  return React.lazy(importFunc);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical images
  const criticalImages = [
    '/uni-languages-logo.png',
    'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?w=400&h=300&auto=compress&cs=tinysrgb&dpr=1&fit=crop&q=85',
    'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?w=400&h=300&auto=compress&cs=tinysrgb&dpr=1&fit=crop&q=85',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=600&h=400&auto=compress&cs=tinysrgb&dpr=1&fit=crop&q=90'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Optimize scroll performance
export const optimizeScrollPerformance = () => {
  let ticking = false;

  const updateScrollPosition = () => {
    // Update scroll-dependent elements here
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Memory management
export const cleanupUnusedResources = () => {
  // Remove unused event listeners
  // Clear unused caches
  // Cleanup observers
};

// Check if device is mobile
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768;
};

// Reduce motion for users who prefer it
export const respectsReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Network-aware loading
export const getConnectionSpeed = () => {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (!connection) return 'unknown';
  
  if (connection.effectiveType) {
    return connection.effectiveType; // '4g', '3g', '2g', 'slow-2g'
  }
  
  return 'unknown';
};

// Adaptive loading based on connection
export const shouldLoadHighQuality = () => {
  const speed = getConnectionSpeed();
  return speed === '4g' || speed === 'unknown';
};
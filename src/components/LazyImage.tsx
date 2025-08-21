import React, { useState, useRef, useEffect } from 'react';
import { getOptimizedImageUrl, generatePlaceholder, preloadCriticalImages } from '../utils/imageOptimization';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  sizes?: string;
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder,
  width,
  height,
  quality = 80,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Gerar múltiplos tamanhos para responsividade
  const generateSrcSet = () => {
    if (!width || !height) return '';
    
    const sizes = [
      { w: Math.round(width * 0.5), q: 60 },
      { w: Math.round(width * 0.75), q: 70 },
      { w: width, q: quality },
      { w: Math.round(width * 1.5), q: quality }
    ];
    
    return sizes
      .map(size => `${getOptimizedImageUrl(src, size.w, Math.round(height * (size.w / width)), size.q)} ${size.w}w`)
      .join(', ');
  };

  const optimizedSrc = getOptimizedImageUrl(src, width, height, quality);
  const srcSet = generateSrcSet();
  const defaultPlaceholder = width && height 
    ? generatePlaceholder(width, height)
    : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=';

  useEffect(() => {
    if (priority) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <div 
        className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Actual image */}
      <img
        ref={imgRef}
        src={isInView ? optimizedSrc : placeholder || defaultPlaceholder}
        srcSet={isInView && srcSet ? srcSet : undefined}
        sizes={isInView ? sizes : undefined}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        width={width}
        height={height}
        fetchPriority={priority ? 'high' : 'low'}
      />
    </div>
  );
}
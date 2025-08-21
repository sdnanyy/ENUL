import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Cache para observers reutilizáveis
const observerCache = new Map<string, IntersectionObserver>();

const getOrCreateObserver = (options: IntersectionObserverOptions, callback: IntersectionObserverCallback) => {
  const key = `${options.threshold}-${options.rootMargin}`;
  
  if (!observerCache.has(key)) {
    observerCache.set(key, new IntersectionObserver(callback, options));
  }
  
  return observerCache.get(key)!;
};

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '50px', triggerOnce = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const callback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && triggerOnce) {
        observer.unobserve(target);
      }
    };

    const observer = getOrCreateObserver(
      { threshold, rootMargin },
      callback
    );

    /* const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(target);
        }
      },
      { threshold, rootMargin }
    ); */

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { targetRef, isIntersecting };
}
import { useEffect, useRef } from 'react';

export function useInfiniteScroll({ callback, triggerRef }) {
  const observer = useRef(null);

  useEffect(() => {
    const triggerElement = triggerRef.current;

    if (callback) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.current.observe(triggerElement);
    }

    return () => {
      if (observer.current && triggerElement) {
        observer.current.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef]);
}

import { useEffect, useState, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = <T extends Element>({
  threshold = 0,
  rootMargin = '0px',
}: UseIntersectionObserverProps = {}): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // isIntersecting이 한 번 true가 되면 계속 true 상태를 유지합니다.
        if (entry.isIntersecting && !isIntersecting) {
          setIsIntersecting(true);
          // 요소가 한 번 보이면 더 이상 관찰할 필요가 없으므로 observer를 해제합니다.
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, isIntersecting]);

  return [ref, isIntersecting];
}; 
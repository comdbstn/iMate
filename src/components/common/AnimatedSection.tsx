import React, { ReactNode, forwardRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

type AnimationType = 'fade-in' | 'from-bottom' | 'from-left' | 'from-right' | 'scale-in' | 'reveal-children' | 'reveal-grid';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  animation?: AnimationType;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
  animation = 'fade-in',
  threshold = 0.2,
  rootMargin = '0px 0px -100px 0px',
  delay = 0,
}) => {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold,
    rootMargin,
  });

  const style = delay ? { transitionDelay: `${delay}s` } : {};

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section-animate ${animation} ${isVisible ? 'appear' : ''} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main' | 'aside' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = '',
  animation = 'fade-in',
  threshold = 0.2,
  rootMargin = '0px 0px -100px 0px',
  delay = 0,
  as = 'div',
}) => {
  const [elementRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
  });

  const style = delay ? { transitionDelay: `${delay}s` } : {};
  
  const Component = as;
  
  return (
    <Component
      ref={elementRef}
      className={`section-animate ${animation} ${isVisible ? 'appear' : ''} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}; 
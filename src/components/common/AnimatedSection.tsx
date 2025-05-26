import React, { ReactNode, forwardRef } from 'react';
// import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'; // 제거

type AnimationType = 'fade-in' | 'from-bottom' | 'from-left' | 'from-right' | 'scale-in' | 'reveal-children' | 'reveal-grid';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  animation?: AnimationType; // 애니메이션 관련 props는 유지하되, 실제 적용은 제거
  threshold?: number; // 애니메이션 관련 props는 유지하되, 실제 적용은 제거
  rootMargin?: string; // 애니메이션 관련 props는 유지하되, 실제 적용은 제거
  delay?: number; // 애니메이션 관련 props는 유지하되, 실제 적용은 제거
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
  // animation = 'fade-in', // 기본값은 유지
  // threshold = 0.2, // 기본값은 유지
  // rootMargin = '0px 0px -100px 0px', // 기본값은 유지
  // delay = 0, // 기본값은 유지
}) => {
  // const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({ // 제거
  //   threshold, // 제거
  //   rootMargin, // 제거
  // }); // 제거
  const sectionRef = React.useRef<HTMLElement>(null); // ref는 유지
  const isVisible = true; // 항상 true로 설정

  // const style = delay ? { transitionDelay: `${delay}s` } : {}; // 애니메이션 delay 스타일 제거

  return (
    <section
      ref={sectionRef}
      id={id}
      // className={`section-animate ${animation} ${isVisible ? 'appear' : ''} ${className}`} // 애니메이션 클래스 제거
      className={`${className}`} // 기존 className만 유지
      // style={style} // 애니메이션 delay 스타일 제거
    >
      {children}
    </section>
  );
};

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType; // 애니메이션 관련 props는 유지하되, 실제 적용은 제거
  threshold?: number; // 애니메이션 관련 props는 유지하되, 실제 적용은 제거
  rootMargin?: string; // 애니메이션 관련 props는 유지하되, 실제 적용은 제거
  delay?: number; // 애니메이션 관련 props는 유지하되, 실제 적용은 제거
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main' | 'aside' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = '',
  // animation = 'fade-in', // 기본값은 유지
  // threshold = 0.2, // 기본값은 유지
  // rootMargin = '0px 0px -100px 0px', // 기본값은 유지
  // delay = 0, // 기본값은 유지
  as = 'div',
}) => {
  // const [elementRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ // 제거
  //   threshold, // 제거
  //   rootMargin, // 제거
  // }); // 제거
  const elementRef = React.useRef<HTMLDivElement>(null); // ref는 유지
  const isVisible = true; // 항상 true로 설정

  // const style = delay ? { transitionDelay: `${delay}s` } : {}; // 애니메이션 delay 스타일 제거
  
  const Component = as;
  
  return (
    <Component
      ref={elementRef}
      // className={`section-animate ${animation} ${isVisible ? 'appear' : ''} ${className}`} // 애니메이션 클래스 제거
      className={`${className}`} // 기존 className만 유지
      // style={style} // 애니메이션 delay 스타일 제거
    >
      {children}
    </Component>
  );
}; 
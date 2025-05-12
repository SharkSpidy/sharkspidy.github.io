import React, { useEffect, useRef } from 'react';

export const useElementOnScreen = (
  options: IntersectionObserverInit = { threshold: 0.5 }
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible] as const;
};

export const FadeIn: React.FC<{
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}> = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [ref, isVisible] = useElementOnScreen();

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 2rem, 0)';
      case 'down':
        return 'translate3d(0, -2rem, 0)';
      case 'left':
        return 'translate3d(2rem, 0, 0)';
      case 'right':
        return 'translate3d(-2rem, 0, 0)';
      default:
        return 'translate3d(0, 2rem, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
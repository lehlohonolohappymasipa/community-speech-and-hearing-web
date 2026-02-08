'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number; // duration in ms
  threshold?: number; // 0-1, how much of the element should be visible
}

export default function FadeInOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 600,
  threshold = 0.1,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          if (node) observer.unobserve(node);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is in view
      }
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    
    switch (direction) {
      case 'up':
        return 'translateY(30px)';
      case 'down':
        return 'translateY(-30px)';
      case 'left':
        return 'translateX(30px)';
      case 'right':
        return 'translateX(-30px)';
      case 'none':
        return 'translate(0, 0)';
      default:
        return 'translateY(30px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Stagger container for multiple items
interface StaggerContainerProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number; // delay between each child in ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 100,
  direction = 'up',
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <FadeInOnScroll key={index} delay={index * staggerDelay} direction={direction}>
          {child}
        </FadeInOnScroll>
      ))}
    </div>
  );
}

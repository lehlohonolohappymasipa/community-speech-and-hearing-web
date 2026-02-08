import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'elevated' | 'outlined' | 'filled';
}

// 8-point grid padding
const paddingStyles = {
  sm: 'p-4',      // 16px
  md: 'p-6',      // 24px
  lg: 'p-8',      // 32px
};

// 30% secondary color system for cards
const variantStyles = {
  elevated: 'bg-white shadow-sm hover:shadow-md border border-[--color-neutral-100]',
  outlined: 'bg-white border border-[--color-neutral-200]',
  filled: 'bg-[--color-neutral-50] border border-transparent',
};

export default function Card({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md',
  variant = 'elevated'
}: CardProps) {
  return (
    <div 
      className={`
        rounded-2xl
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${hover ? 'transition-all duration-300 ease-out hover:shadow-lg hover:border-[--color-primary-200] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h2' | 'h3' | 'h4';
}

export function CardTitle({ children, className = '', as: Component = 'h3' }: CardTitleProps) {
  return (
    <Component 
      className={`
        font-[family-name:var(--font-heading)]
        text-[length:var(--text-xl)]
        leading-[--leading-snug]
        tracking-[--tracking-normal]
        font-semibold 
        text-[--color-neutral-900] 
        ${className}
      `}
    >
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p 
      className={`
        text-[length:var(--text-base)]
        leading-[--leading-normal]
        text-[--color-neutral-600] 
        mt-2 
        ${className}
      `}
    >
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`mt-6 pt-4 border-t border-[--color-neutral-100] ${className}`}>
      {children}
    </div>
  );
}

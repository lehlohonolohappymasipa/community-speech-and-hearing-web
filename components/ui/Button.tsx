import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  fullWidth?: boolean;
}

type AnchorLikeProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href' | 'children'>;

// 60/30/10 Color System:
// - Primary (30%): Main brand actions
// - Accent (10%): High-emphasis CTAs that need to stand out
// - Secondary/Ghost (60%): Low-emphasis actions
const variantStyles: Record<ButtonVariant, string> = {
  // 30% - Primary brand color for important actions
  primary: 'bg-[--color-primary-600] text-white hover:bg-[--color-primary-700] focus-visible:outline-[--color-primary-600] shadow-sm',
  // 60% - Neutral, secondary importance
  secondary: 'bg-white text-[--color-primary-700] hover:bg-[--color-neutral-50] ring-1 ring-inset ring-[--color-neutral-300] hover:ring-[--color-primary-200]',
  // 10% - Accent for CTAs that must stand out
  accent: 'bg-[--color-accent-500] text-white hover:bg-[--color-accent-600] focus-visible:outline-[--color-accent-500] shadow-md hover:shadow-lg',
  // Outline - transparent with brand border
  outline: 'bg-transparent text-[--color-primary-600] ring-1 ring-inset ring-[--color-primary-300] hover:bg-[--color-primary-50] hover:ring-[--color-primary-400]',
  // Ghost - minimal, for tertiary actions
  ghost: 'bg-transparent text-[--color-neutral-600] hover:bg-[--color-neutral-100] hover:text-[--color-neutral-900]',
};

// 8-point grid spacing system
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[length:var(--text-sm)] tracking-[--tracking-wide]',       // 16px / 8px
  md: 'px-5 py-2.5 text-[length:var(--text-sm)] tracking-[--tracking-wide]',     // 20px / 10px  
  lg: 'px-6 py-3 text-[length:var(--text-base)] tracking-[--tracking-normal]',   // 24px / 12px
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  fullWidth = false,
  target,
  rel,
  title,
  onClick,
  'aria-label': ariaLabel,
  ...props
}: ButtonProps & AnchorLikeProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 
    rounded-full 
    font-semibold 
    transition-all duration-200 ease-out
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed
    font-[family-name:var(--font-body)]
  `;
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    const isInternal = href.startsWith('/');

    const linkProps = {
      target,
      rel,
      title,
      onClick,
      'aria-label': ariaLabel,
    };

    if (isInternal) {
      return (
        <Link href={href} className={combinedStyles} {...linkProps}>
          {children}
        </Link>
      );
    }

    const computedRel = target === '_blank' ? (rel ?? 'noreferrer') : rel;
    return (
      <a
        href={href}
        className={combinedStyles}
        target={target}
        rel={computedRel}
        title={title}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} onClick={onClick} title={title} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
}

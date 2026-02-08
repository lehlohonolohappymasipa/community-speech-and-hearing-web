import { ReactNode } from 'react';

type BadgeVariant = 'neutral' | 'primary' | 'accent' | 'success';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  neutral: 'bg-[--color-neutral-100] text-[--color-neutral-700]',
  primary: 'bg-[--color-primary-100] text-[--color-primary-700]',
  accent: 'bg-[--color-accent-100] text-[--color-accent-700]',
  success: 'bg-emerald-100 text-emerald-700',
};

export default function Badge({ children, className = '', variant = 'neutral' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[length:var(--text-xs)] tracking-[--tracking-wider] font-semibold ${variantStyles[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}

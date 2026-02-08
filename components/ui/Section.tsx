import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'primary' | 'ink' | 'primary-subtle' | 'accent-subtle';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

// 60/30/10 color system backgrounds
const backgroundStyles = {
  white: 'bg-white',                                               // 60% - Neutral
  light: 'bg-[--color-neutral-50]',                               // 60% - Neutral variant
  primary: 'bg-[--color-primary-600] text-white',                 // 30% - Secondary
  ink: 'bg-[--color-neutral-900] text-white',                     // High-contrast section
  'primary-subtle': 'bg-[--color-primary-50]',                    // 30% - Secondary subtle
  'accent-subtle': 'bg-[--color-accent-50]',                      // 10% hint - Accent subtle
};

// 8-point grid spacing system
const paddingStyles = {
  sm: 'py-12 md:py-16',        // 48px / 64px
  md: 'py-16 md:py-20',        // 64px / 80px
  lg: 'py-20 md:py-24',        // 80px / 96px
  xl: 'py-24 md:py-32',        // 96px / 128px
};

export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'lg',
  id
}: SectionProps) {
  return (
    <section 
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
    >
      {/* Container with 12/8/4 column grid margins */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  overline?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  overline,
  centered = true,
  className = '',
  titleClassName = ''
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} stack-sm ${className}`}>
      {/* Overline - Small, uppercase label above title */}
      {overline && (
        <p className="text-overline text-[--color-primary-600] mb-2">
          {overline}
        </p>
      )}
      {/* Title - Major Third scale heading */}
      <h2 
        className={`
          font-[family-name:var(--font-heading)]
          text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)]
          leading-[--leading-tight]
          tracking-[--tracking-tight]
          font-bold
          text-[--color-neutral-900]
          ${titleClassName}
        `}
      >
        {title}
      </h2>
      {/* Subtitle - Body large, secondary color */}
      {subtitle && (
        <p 
          className={`
            mt-4 md:mt-6
            text-[length:var(--text-lg)]
            leading-[--leading-relaxed]
            text-[--color-neutral-600]
            ${centered ? 'mx-auto max-w-2xl' : ''}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

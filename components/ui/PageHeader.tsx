import Image from 'next/image';
import { ReactNode } from 'react';
import Container from './Container';

type PageHeaderTone = 'primary' | 'accent' | 'neutral';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  tone?: PageHeaderTone;
  imageSrc?: string;
  imageAlt?: string;
  actions?: ReactNode;
}

const toneStyles: Record<PageHeaderTone, { bg: string; kicker: string; subtitle: string }> = {
  primary: {
    bg: 'bg-[--color-primary-800]',
    kicker: 'text-[--color-primary-200]',
    subtitle: 'text-[--color-primary-100]',
  },
  accent: {
    bg: 'bg-[--color-accent-700]',
    kicker: 'text-[--color-accent-200]',
    subtitle: 'text-[--color-accent-100]',
  },
  neutral: {
    bg: 'bg-[--color-neutral-900]',
    kicker: 'text-[--color-neutral-300]',
    subtitle: 'text-[--color-neutral-200]',
  },
};

export default function PageHeader({
  title,
  subtitle,
  kicker,
  tone = 'primary',
  imageSrc,
  imageAlt = '',
  actions,
}: PageHeaderProps) {
  const styles = toneStyles[tone];

  return (
    <section className={`relative overflow-hidden ${styles.bg}`}>
      {imageSrc && (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      )}

      {/* subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <pattern id="ph-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#ph-grid)" />
        </svg>
      </div>

      <Container>
        <div className="relative z-10 py-20 md:py-28">
          <div className="max-w-2xl stack-md">
            {kicker && <p className={`text-overline ${styles.kicker}`}>{kicker}</p>}
            <h1
              className="font-[family-name:var(--font-heading)] text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)] leading-[--leading-tight] tracking-[--tracking-tighter] font-bold text-white"
            >
              {title}
            </h1>
            {subtitle && (
              <p className={`text-[length:var(--text-xl)] leading-[--leading-relaxed] ${styles.subtitle}`}>
                {subtitle}
              </p>
            )}
            {actions && <div className="pt-2 flex flex-col sm:flex-row gap-4">{actions}</div>}
          </div>
        </div>
      </Container>
    </section>
  );
}

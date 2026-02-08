'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Book', href: '/book' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 
        h-[var(--header-height)]
        transition-all duration-300 ease-out
        print:hidden
        ${scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04),0_10px_30px_rgba(2,6,23,0.08)] border-b border-[--color-neutral-200]/50' 
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-[var(--header-height)] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center hover:opacity-90 transition-opacity text-[--color-primary-700]"
              aria-label="Community Speech and Hearing Health Care Specialist - Home"
            >
              <span className="block overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 220"
                  role="img"
                  aria-label="Community Speech and Hearing Health Care Specialist"
                  preserveAspectRatio="xMinYMid meet"
                  className="block w-auto h-12 sm:h-14 lg:h-16"
                >
                  <title>Community Speech and Hearing Health Care Specialist</title>
                  <g fill="currentColor">
                    <text
                      x="0"
                      y="92"
                      fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
                      fontSize="64"
                      fontWeight="700"
                      letterSpacing="-0.5"
                    >
                      Community Speech and Hearing
                    </text>
                    <text
                      x="0"
                      y="168"
                      fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
                      fontSize="50"
                      fontWeight="500"
                      letterSpacing="0.2"
                      opacity="0.92"
                    >
                      Health Care Specialist
                    </text>
                  </g>
                </svg>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  rounded-lg
                  px-2 py-1.5
                  text-[length:var(--text-sm)]
                  tracking-[--tracking-wide]
                  font-semibold
                  transition-colors
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary-500]
                  ${pathname === item.href
                    ? 'bg-[--color-primary-50] text-[--color-primary-800]'
                    : 'text-[--color-neutral-800] hover:bg-[--color-neutral-50] hover:text-[--color-primary-800]'
                  }
                `}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            {/* CTA Button - Accent (10%) for high visibility */}
            <Link
              href="/contact"
              className="
                rounded-full 
                bg-[--color-accent-500] 
                px-5 py-2.5 
                text-[length:var(--text-sm)]
                tracking-[--tracking-wide]
                font-semibold 
                text-white 
                shadow-sm 
                hover:bg-[--color-accent-600] 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-accent-500] 
                transition-colors
              "
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-[--color-neutral-800] hover:bg-[--color-neutral-100] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary-500]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="mt-3 mb-4 space-y-1 rounded-2xl border border-[--color-neutral-200] bg-white/95 p-2 shadow-[0_12px_30px_rgba(2,6,23,0.10)] backdrop-blur">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  block rounded-lg px-4 py-3 
                  text-[length:var(--text-base)]
                  font-semibold 
                  transition-colors
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary-500]
                  ${pathname === item.href
                    ? 'bg-[--color-primary-50] text-[--color-primary-800]'
                    : 'text-[--color-neutral-800] hover:bg-[--color-neutral-50] hover:text-[--color-primary-800]'
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile CTA - Accent (10%) */}
            <Link
              href="/contact"
              className="
                mt-2 block 
                rounded-full 
                bg-[--color-accent-500] 
                px-5 py-3 
                text-center 
                text-[length:var(--text-base)]
                font-semibold 
                text-white 
                shadow-sm 
                hover:bg-[--color-accent-600] 
                transition-colors
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-accent-500]
              "
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

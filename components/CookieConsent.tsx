'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] transform bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-500 print:hidden sm:p-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <h3
              id="cookie-consent-title"
              className="font-[family-name:var(--font-heading)] text-[length:var(--text-lg)] leading-[--leading-tight] font-semibold text-[--color-neutral-900]"
            >
              🍪 Cookie Notice
            </h3>
            <p
              id="cookie-consent-description"
              className="mt-1 text-[length:var(--text-sm)] leading-[--leading-relaxed] text-[--color-neutral-600]"
            >
              We use cookies to enhance your browsing experience and analyze site traffic. 
              In accordance with POPIA (Protection of Personal Information Act), we respect 
              your privacy and give you control over your data.{' '}
              <a
                href="/privacy"
                className="text-[--color-primary-700] underline decoration-[--color-primary-300] underline-offset-4 hover:text-[--color-primary-800]"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <button
              onClick={handleDecline}
              className="rounded-lg border border-[--color-neutral-300] bg-white px-4 py-2 text-[length:var(--text-sm)] font-semibold text-[--color-neutral-700] transition-colors hover:bg-[--color-neutral-50] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:ring-offset-2"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-[--color-primary-700] px-4 py-2 text-[length:var(--text-sm)] font-semibold text-white transition-colors hover:bg-[--color-primary-800] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:ring-offset-2"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

const navigation = {
  services: [
    { name: 'Hearing Assessments', href: '/services#hearing-assessments' },
    { name: 'Hearing Aids', href: '/services#hearing-aids' },
    { name: 'Speech Therapy', href: '/services#speech-language-therapy' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'The Book', href: '/book' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] print:hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 md:px-6 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity text-white">
              <span className="block overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 220"
                  role="img"
                  aria-label="Community Speech and Hearing Health Care Specialist"
                  preserveAspectRatio="xMinYMid meet"
                  className="block w-auto h-14 sm:h-16"
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
            <p 
              className="
                text-[length:var(--text-sm)]
                leading-[--leading-relaxed]
                tracking-[--tracking-wide]
                text-[--color-neutral-300]
                max-w-xs
              "
            >
              Expert speech and hearing care for Limpopo Province since 1992. 
              Over 30 years of dedicated service to our community.
            </p>
            <div className="flex space-x-4">
              {/* Phone */}
              <a 
                href="tel:+27713811976" 
                className="text-[--color-neutral-300] hover:text-[--color-primary-400] transition-colors p-2 -ml-2 rounded-lg hover:bg-white/10"
                aria-label="Call us at +27 71 381 1976"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 
                  className="
                    text-[length:var(--text-sm)]
                    tracking-[--tracking-wider]
                    font-semibold 
                    text-white
                    uppercase
                  "
                >
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="
                          text-[length:var(--text-sm)]
                          leading-[--leading-relaxed]
                          tracking-[--tracking-wide]
                          text-[--color-neutral-300] 
                          hover:text-white 
                          transition-colors
                        "
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 
                  className="
                    text-[length:var(--text-sm)]
                    tracking-[--tracking-wider]
                    font-semibold 
                    text-white
                    uppercase
                  "
                >
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="
                          text-[length:var(--text-sm)]
                          leading-[--leading-relaxed]
                          tracking-[--tracking-wide]
                          text-[--color-neutral-300] 
                          hover:text-white 
                          transition-colors
                        "
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact info */}
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 
                  className="
                    text-[length:var(--text-sm)]
                    tracking-[--tracking-wider]
                    font-semibold 
                    text-white
                    uppercase
                  "
                >
                  Contact
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a 
                      href="tel:+27713811976" 
                      className="
                        text-[length:var(--text-sm)]
                        leading-[--leading-relaxed]
                        tracking-[--tracking-wide]
                        text-[--color-neutral-300] 
                        hover:text-white 
                        transition-colors 
                        flex items-center gap-2
                      "
                    >
                      <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      +27 71 381 1976
                    </a>
                  </li>
                  <li 
                    className="
                      text-[length:var(--text-sm)]
                      leading-[--leading-relaxed]
                      tracking-[--tracking-wide]
                      text-[--color-neutral-300] 
                      flex items-start gap-2
                    "
                  >
                    <svg className="h-4 w-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>
                      Ngovhela Phindula,<br />
                      Near Pfanani Clinic,<br />
                      Limpopo, South Africa
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-white/15 pt-8 md:mt-20 lg:mt-24">
          <p 
            className="
              text-[length:var(--text-xs)]
              leading-[--leading-relaxed]
              tracking-[--tracking-wider]
              text-[--color-neutral-400]
            "
          >
            &copy; {currentYear} Community Speech and Hearing Health Care Specialist. All rights reserved. Serving Limpopo Province since 1992.
          </p>
        </div>
      </div>
    </footer>
  );
}

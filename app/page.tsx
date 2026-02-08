import Image from 'next/image';
import Link from 'next/link';
import type { ReactElement } from 'react';
import Button from '@/components/ui/Button';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import FAQAccordion from '@/components/FAQAccordion';

// Service icons
const serviceIcons: Record<string, ReactElement> = {
  ear: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
  ),
  headphones: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  ),
  speech: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  ),
};

const services = [
  {
    id: 'hearing-assessments',
    title: 'Hearing Assessments & Diagnostics',
    description: 'Comprehensive hearing evaluations and diagnostics for all ages, using advanced technology and decades of clinical experience.',
    icon: 'ear',
  },
  {
    id: 'hearing-aids',
    title: 'Hearing Aid Services',
    description: 'Personalized hearing aid selection, fitting, and ongoing support to help you hear your best every day.',
    icon: 'headphones',
  },
  {
    id: 'speech-language-therapy',
    title: 'Speech & Language Therapy',
    description: 'Professional assessment and therapy for speech and language challenges, tailored to each individual\'s needs.',
    icon: 'speech',
  },
];

const faqs = [
  {
    question: 'What should I expect during my first visit?',
    answer: 'During your first visit, we\'ll conduct a thorough case history review and comprehensive hearing evaluation. This typically takes about 60-90 minutes. We\'ll discuss your hearing concerns, perform diagnostic tests, and review the results with you.',
  },
  {
    question: 'Do I need a referral to book an appointment?',
    answer: 'No referral is necessary. You can contact us directly to schedule an appointment. However, if you have been referred by a physician, please bring any relevant documentation.',
  },
  {
    question: 'How can I purchase the book?',
    answer: 'The book "A Guidebook of Community Approach to Audiology" is available as a physical copy only. Contact us via phone, email, or LinkedIn to place your order.',
  },
  {
    question: 'What ages do you serve?',
    answer: 'We provide services for patients of all ages, from newborns requiring hearing screenings to seniors seeking hearing assistance.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative -mt-[var(--header-height)] min-h-[90vh] flex items-center overflow-hidden bg-[--color-primary-700]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.webp"
            alt="Mr. Mafhungo conducting a hearing assessment with a patient in his clinic"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pt-[calc(var(--header-height)+6rem)] pb-24 md:pt-[calc(var(--header-height)+8rem)] md:pb-32">
          <div className="max-w-2xl stack-md">
            {/* Overline - 10% accent hint */}
            <p className="text-overline text-[--color-primary-200] animate-fade-in">
              Serving Limpopo Province Since 1992
            </p>
            {/* Display headline - Major Third scale */}
            <h1 
              className="
                font-[family-name:var(--font-heading)]
                text-[length:var(--text-3xl)] md:text-[length:var(--text-4xl)] lg:text-[length:var(--text-5xl)]
                leading-[--leading-tight]
                tracking-[--tracking-tighter]
                font-bold
                text-white
                animate-fade-in
              "
            >
              Expert Speech & Hearing Care for Your Community
            </h1>
            {/* Body large - supporting text */}
            <p 
              className="
                mt-6
                text-[length:var(--text-lg)]
                leading-[--leading-relaxed]
                text-[--color-primary-100]
                animate-fade-in
              "
            >
              With over 30 years of experience, Thavhanyedza Alex Mafhungo provides 
              comprehensive audiology services and personalized care. Now also author of 
              &quot;A Guidebook of Community Approach to Audiology.&quot;
            </p>
            {/* CTA cluster - 8-point spacing */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
              {/* Accent button (10%) for primary CTA */}
              <Button href="/contact" size="lg" variant="accent">
                Book an Appointment
              </Button>
              {/* Secondary button for secondary action */}
              <Button href="/book" size="lg" variant="secondary">
                Explore the Book
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Credibility/Stats Section - Visual hierarchy through size */}
      <Section background="white" padding="md">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: '30+', label: 'Years of Experience' },
            { value: '1992', label: 'Established' },
            { value: 'All Ages', label: 'Patients Served' },
            { value: 'Limpopo', label: 'Province Coverage' },
          ].map((stat, index) => (
            <div key={index} className="text-center stack-xs">
              {/* Large size = more important */}
              <p 
                className="
                  font-[family-name:var(--font-heading)]
                  text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)]
                  leading-[--leading-tight]
                  tracking-[--tracking-tight]
                  font-bold 
                  text-[--color-primary-600]
                "
              >
                {stat.value}
              </p>
              {/* Smaller size = supporting info */}
              <p 
                className="
                  text-[length:var(--text-sm)]
                  leading-[--leading-normal]
                  tracking-[--tracking-wide]
                  text-[--color-neutral-600]
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Preview Section - 12/8/4 Grid */}
      <Section background="light" id="services-preview">
        <SectionHeader
          overline="What We Offer"
          title="Our Services"
          subtitle="Comprehensive speech and hearing care tailored to your needs"
        />
        {/* 12-col grid: 3 cards on desktop, 2 on tablet, 1 on mobile */}
        <div className="mt-12 md:mt-16 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} hover className="group">
              <CardHeader>
                {/* Icon with 30% secondary color, accent on hover */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[--color-primary-100] text-[--color-primary-600] group-hover:bg-[--color-accent-500] group-hover:text-white transition-colors duration-300">
                  {serviceIcons[service.icon]}
                </div>
              </CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <CardContent className="mt-6">
                <Link 
                  href={`/services#${service.id}`}
                  className="
                    text-[length:var(--text-sm)]
                    tracking-[--tracking-wide]
                    font-semibold 
                    text-[--color-primary-600] 
                    hover:text-[--color-accent-500] 
                    inline-flex items-center gap-2
                    transition-colors duration-200
                  "
                >
                  Learn more
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Book Feature Section - Visual hierarchy with alignment */}
      <Section background="white" id="book-feature">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/book-cover.webp"
                alt="A Guidebook of Community Approach to Audiology book cover"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements - 10% accent for visual interest */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[--color-accent-100] rounded-full -z-10 opacity-80" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[--color-primary-100] rounded-full -z-10 opacity-80" />
          </div>
          <div className="order-1 lg:order-2 stack-md">
            {/* Overline - Accent (10%) for emphasis */}
            <p className="text-overline text-[--color-accent-600]">
              NEW RELEASE
            </p>
            {/* Headline - Major Third scale */}
            <h2 
              className="
                font-[family-name:var(--font-heading)]
                text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)]
                leading-[--leading-tight]
                tracking-[--tracking-tight]
                font-bold
                text-[--color-neutral-900]
              "
            >
              A Guidebook of Community Approach to Audiology
            </h2>
            {/* Body - supporting text */}
            <p 
              className="
                mt-4
                text-[length:var(--text-lg)]
                leading-[--leading-relaxed]
                text-[--color-neutral-600]
              "
            >
              Drawing on over three decades of clinical experience, this comprehensive 
              guidebook explores the key concepts, challenges, and future directions for 
              community development in audiology.
            </p>
            {/* Feature list - Proximity groups related items */}
            <ul className="mt-8 space-y-4">
              {[
                'Key concepts in community-based audiology',
                'Strategies for improving healthcare accessibility',
                'Personalized care approaches for diverse populations',
                'Practical implementation frameworks',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* Primary (30%) color for check icons */}
                  <svg className="h-6 w-6 flex-shrink-0 text-[--color-primary-600]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[length:var(--text-base)] leading-[--leading-normal] text-[--color-neutral-700]">{item}</span>
                </li>
              ))}
            </ul>
            {/* CTA cluster - Accent (10%) for primary action */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="accent" size="lg">
                Place Order
              </Button>
              <Button href="/book" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <p className="mt-4 text-[length:var(--text-sm)] tracking-[--tracking-wide] text-[--color-neutral-500]">
              Physical copies only. Contact us to place your order.
            </p>
          </div>
        </div>
      </Section>

      {/* About Preview - Primary (30%) background */}
      <Section background="primary" id="about-preview">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="stack-md">
            {/* Headline - Major Third scale */}
            <h2 
              className="
                font-[family-name:var(--font-heading)]
                text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)]
                leading-[--leading-tight]
                tracking-[--tracking-tight]
                font-bold
                text-white
              "
            >
              Meet Your Specialist
            </h2>
            <p 
              className="
                text-[length:var(--text-lg)]
                leading-[--leading-relaxed]
                text-[--color-primary-100]
              "
            >
              Thavhanyedza Alex Mafhungo has been a dedicated Speech and Hearing Therapy 
              Consultant serving Limpopo Province since 1992. With over three decades of 
              clinical experience, he has pioneered occupational hearing conservation 
              programs in the Levubu area.
            </p>
            <p 
              className="
                text-[length:var(--text-lg)]
                leading-[--leading-relaxed]
                text-[--color-primary-100]
              "
            >
              His commitment to excellence and community care has made him a trusted 
              partner for hospitals, organizations, and families throughout the region.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/audiologist-headshot.webp"
                alt="Thavhanyedza Alex Mafhungo - Speech and Hearing Therapy Consultant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section - Light (60%) neutral background */}
      <Section background="light" id="faq">
        <SectionHeader
          overline="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services and book"
        />
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* Contact CTA Strip - Dark (60%) with Accent (10%) CTA */}
      <Section background="ink" padding="lg">
        <div className="text-center stack-md max-w-3xl mx-auto">
          <h2 
            className="
              font-[family-name:var(--font-heading)]
              text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)]
              leading-[--leading-tight]
              tracking-[--tracking-tight]
              font-bold
              text-white
            "
          >
            Ready to Start Your Journey to Better Hearing?
          </h2>
          <p 
            className="
              text-[length:var(--text-lg)]
              leading-[--leading-relaxed]
              text-[--color-neutral-300]
            "
          >
            Whether you need a hearing assessment, are interested in our services, or want 
            to order the book, we&apos;re here to help.
          </p>
          {/* CTA cluster - Accent (10%) for primary action */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="accent" size="lg">
              Contact Us Today
            </Button>
            <Button href="tel:+27713811976" variant="outline" size="lg" className="!ring-white/40 !text-white hover:!bg-white/10 hover:!ring-white/60">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +27 71 381 1976
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

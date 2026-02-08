import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Section, { SectionHeader } from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'The Book - A Guidebook of Community Approach to Audiology',
  description: 'Discover "A Guidebook of Community Approach to Audiology" by Thavhanyedza Alex Mafhungo. A comprehensive guide for health practitioners on community-based audiology.',
};

const whatYoullLearn = [
  {
    title: 'Community-Based Audiology Concepts',
    description: 'Understand the foundational principles of providing audiology services within community settings.',
  },
  {
    title: 'Improving Healthcare Accessibility',
    description: 'Learn strategies to make hearing healthcare more accessible to underserved populations.',
  },
  {
    title: 'Personalized Care Approaches',
    description: 'Discover methods for tailoring care to meet the diverse needs of individuals in your community.',
  },
  {
    title: 'Overcoming Field Challenges',
    description: 'Navigate the common challenges facing community audiology today with practical solutions.',
  },
  {
    title: 'Future Directions',
    description: 'Explore emerging trends and the future of community-based hearing healthcare.',
  },
  {
    title: 'Implementation Frameworks',
    description: 'Apply practical frameworks for implementing community audiology programs.',
  },
];

const targetAudience = [
  { title: 'Health Practitioners', icon: '🏥' },
  { title: 'Audiologists', icon: '👂' },
  { title: 'Community Health Workers', icon: '🤝' },
  { title: 'Healthcare Administrators', icon: '📋' },
  { title: 'Public Health Professionals', icon: '🌍' },
  { title: 'Students in Audiology', icon: '🎓' },
];

const bookFaqs = [
  {
    question: 'How can I purchase the book?',
    answer: 'The book "A Guidebook of Community Approach to Audiology" is available as a physical copy only. To place an order, please contact us via phone, email, or LinkedIn. We\'ll provide you with ordering details and delivery information.',
  },
  {
    question: 'Is the book available in digital format?',
    answer: 'Currently, the book is only available as a physical copy. This ensures the best reading experience for the detailed content and diagrams included in the guidebook.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Delivery times vary depending on your location. Please contact us for specific delivery information and timelines.',
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[--color-accent-600] to-[--color-accent-700] py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent" className="bg-white/15 text-white ring-1 ring-inset ring-white/20">
                New release
              </Badge>
              <h1 className="mt-5 font-[family-name:var(--font-heading)] text-[length:var(--text-3xl)] sm:text-[length:var(--text-4xl)] lg:text-[length:var(--text-5xl)] leading-[--leading-tight] tracking-[--tracking-tighter] font-bold text-white">
                A Guidebook of Community Approach to Audiology
              </h1>
              <p className="mt-6 text-[length:var(--text-xl)] leading-[--leading-relaxed] text-white/90">
                A comprehensive guide exploring the key concepts, challenges, and future 
                directions for community development in audiology.
              </p>
              <p className="mt-4 text-[length:var(--text-lg)] text-white/75">
                By Thavhanyedza Alex Mafhungo
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Place Order
                </Button>
              </div>
              <p className="mt-4 text-[length:var(--text-sm)] text-white/70">
                Physical copies only • Contact us to order
              </p>
            </div>
            <div className="relative lg:pl-12">
              <div className="ui-panel overflow-hidden aspect-[3/4] relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/book-cover.webp"
                  alt="A Guidebook of Community Approach to Audiology book cover"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-full -z-10" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <Section background="white" padding="md">
        <SectionHeader
          title="About the Book"
          subtitle="Drawing from over 30 years of clinical experience in community audiology"
        />
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="stack-md">
            <p className="text-[length:var(--text-lg)] leading-[--leading-relaxed] text-[--color-neutral-600]">
              This comprehensive guidebook explores the key concepts, challenges, and future
              directions for community development in audiology. Written by Thavhanyedza Alex
              Mafhungo, a Speech and Hearing Therapy Consultant with over three decades of
              experience serving Limpopo Province, this book provides invaluable insights for
              health practitioners seeking to improve accessibility, provide personalized care,
              and meet the diverse needs of individuals in their communities.
            </p>
            <p className="text-[length:var(--text-lg)] leading-[--leading-relaxed] text-[--color-neutral-600]">
              The book draws on practical experience from pioneering occupational hearing
              conservation programs in the Levubu area and years of collaboration with leading
              consultants and organizations. It offers a unique perspective on community-based
              audiology that combines theoretical foundations with real-world applications.
            </p>
          </div>
        </div>
      </Section>

      {/* Who It's For */}
  <Section background="light" padding="md">
        <SectionHeader
          title="Who This Book Is For"
          subtitle="Written for professionals dedicated to improving community hearing health"
        />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {targetAudience.map((audience, index) => (
            <div 
              key={index}
              className="ui-panel p-6 text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl mb-4 block">{audience.icon}</span>
              <p className="font-[family-name:var(--font-heading)] text-[length:var(--text-sm)] tracking-[--tracking-wide] font-semibold text-[--color-neutral-900]">{audience.title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What You'll Learn */}
  <Section background="white" padding="md">
        <SectionHeader
          title="What You'll Learn"
          subtitle="Practical insights and frameworks for community-based audiology"
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatYoullLearn.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4"
            >
              <div className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[--color-primary-100] text-[--color-primary-600] font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-lg)] leading-[--leading-snug] tracking-[--tracking-tight] font-semibold text-[--color-neutral-900]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[length:var(--text-base)] leading-[--leading-relaxed] text-[--color-neutral-600]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Author Bio */}
  <Section background="primary" padding="md">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
              <Image
                src="/images/audiologist-headshot.webp"
                alt="Thavhanyedza Alex Mafhungo - Author"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <p className="text-[--color-primary-200] font-semibold mb-3">ABOUT THE AUTHOR</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Thavhanyedza Alex Mafhungo
            </h2>
            <p className="mt-2 text-xl text-[--color-primary-200]">
              Speech and Hearing Therapy Consultant
            </p>
            <p className="mt-6 text-lg text-[--color-primary-100] leading-8">
              Thavhanyedza Alex Mafhungo has been a dedicated Speech and Hearing Therapy 
              Consultant serving Limpopo Province since 1992. With over three decades of 
              clinical experience, he has pioneered occupational hearing conservation 
              programs in the Levubu area and collaborates annually with leading consultants 
              and organizations.
            </p>
            <p className="mt-4 text-lg text-[--color-primary-100] leading-8">
              His commitment to excellence and community care has made him a trusted partner 
              for hospitals, organizations, and families throughout the region. This book 
              represents the culmination of his life&apos;s work in community audiology.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Learn More About the Author
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
  <Section background="light" padding="md">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about purchasing the book"
        />
        <div className="mt-16 max-w-3xl mx-auto">
          <FAQAccordion faqs={bookFaqs} />
        </div>
      </Section>

      {/* Order CTA */}
      <Section background="ink" padding="lg">
        <div className="text-center stack-md">
          <div className="stack-xs">
          <p className="text-overline text-white/70">Order now</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-bold text-white">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-[length:var(--text-lg)] leading-[--leading-relaxed] text-white/70 max-w-2xl mx-auto">
            Order your copy of &quot;A Guidebook of Community Approach to Audiology&quot; today 
            and discover practical strategies for community-based hearing healthcare.
          </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="accent" size="lg">
              Place Your Order
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

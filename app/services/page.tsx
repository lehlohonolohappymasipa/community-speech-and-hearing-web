import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import PageHeader from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive hearing assessments, hearing aids, speech therapy, and pediatric audiology services in Limpopo, South Africa.',
};

const services = [
  {
    id: 'hearing-assessments',
    title: 'Hearing Assessments & Diagnostics',
    description: 'Comprehensive hearing evaluations and diagnostics for all ages, using advanced technology and decades of clinical experience.',
    fullDescription: 'Our comprehensive hearing assessments utilize state-of-the-art diagnostic equipment combined with over 30 years of clinical expertise. We provide thorough evaluations for patients of all ages, from newborns to seniors, ensuring accurate diagnosis and personalized treatment recommendations.',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    features: [
      'Pure tone audiometry',
      'Speech audiometry',
      'Tympanometry',
      'Otoacoustic emissions (OAE) testing',
      'Pediatric hearing assessments',
      'Occupational hearing screenings',
    ],
    imageSrc: '/images/hearing-assessment.webp',
  },
  {
    id: 'hearing-aids',
    title: 'Hearing Aid Services',
    description: 'Personalized hearing aid selection, fitting, and ongoing support to help you hear your best every day.',
    fullDescription: 'We offer comprehensive hearing aid services including professional consultation, device selection, custom fitting, and ongoing maintenance. Our personalized approach ensures you receive the perfect solution for your lifestyle and hearing needs.',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    features: [
      'Hearing aid consultation and selection',
      'Custom fitting and programming',
      'Follow-up adjustments',
      'Maintenance and repairs',
      'Battery and accessory supplies',
      'Hearing aid orientation and training',
    ],
    imageSrc: '/images/hearing-aid.webp',
  },
  {
    id: 'speech-language-therapy',
    title: 'Speech & Language Therapy',
    description: 'Professional assessment and therapy for speech and language challenges, tailored to each individual\'s needs.',
    fullDescription: 'Our speech and language therapy services address a wide range of communication disorders. We provide individualized assessment and treatment plans designed to help patients of all ages achieve their communication goals.',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    features: [
      'Speech sound disorders',
      'Language delays and disorders',
      'Fluency disorders (stuttering)',
      'Voice disorders',
      'Cognitive-communication disorders',
      'Swallowing difficulties',
    ],
    imageSrc: '/images/speech-therapy.webp',
  },
  {
    id: 'pediatric-audiology',
    title: 'Pediatric Audiology',
    description: 'Specialized hearing care for children, from newborn screening to ongoing management and support.',
    fullDescription: 'Our pediatric audiology services are designed specifically for children\'s unique needs. We use child-friendly techniques and equipment to ensure accurate assessments and effective treatment for young patients.',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    features: [
      'Newborn hearing screening',
      'Pediatric hearing assessments',
      'Early intervention programs',
      'School hearing screenings',
      'Pediatric hearing aid fitting',
      'Parent education and support',
    ],
    imageSrc: '/images/pediatric-audiology.webp',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        kicker="What we do"
        subtitle="Comprehensive speech and hearing care tailored to your needs — with over 30 years of experience serving the Limpopo community."
        tone="primary"
        imageSrc="/images/hearing-assessment.webp"
        imageAlt="Audiology services"
        actions={
          <>
            <Button href="/contact" variant="accent" size="lg">
              Book a Consultation
            </Button>
            <Button href="tel:+27713811976" variant="secondary" size="lg">
              Call +27 71 381 1976
            </Button>
          </>
        }
      />

      {/* Services List */}
      <Section background="white">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className="scroll-mt-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[--color-primary-100] text-[--color-primary-700] mb-6 ring-1 ring-inset ring-[--color-primary-200]">
                  {service.icon}
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-bold text-[--color-neutral-900]">
                  {service.title}
                </h2>
                <p className="mt-4 text-[length:var(--text-lg)] leading-[--leading-relaxed] text-[--color-neutral-600]">
                  {service.fullDescription}
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 text-[--color-primary-600]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-[length:var(--text-sm)] leading-[--leading-snug] text-[--color-neutral-700]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact" variant="primary">
                    Book a Consultation
                  </Button>
                </div>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="ui-panel overflow-hidden aspect-[4/3] relative">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <div className="text-center stack-md">
          <div className="stack-xs">
          <p className="text-overline text-white/70">Next step</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="text-[length:var(--text-lg)] leading-[--leading-relaxed] text-white/85 max-w-2xl mx-auto">
            Contact us today to schedule your appointment or learn more about our services.
          </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="accent" size="lg">
              Book an Appointment
            </Button>
            <Button href="tel:+27713811976" variant="secondary" size="lg">
              Call +27 71 381 1976
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

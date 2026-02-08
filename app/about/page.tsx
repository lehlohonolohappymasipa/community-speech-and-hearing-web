import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Section, { SectionHeader } from '@/components/ui/Section';
import PageHeader from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Thavhanyedza Alex Mafhungo and Community Speech and Hearing Health Care Specialist. Over 30 years of dedicated speech and hearing care in Limpopo Province, South Africa.',
};

const milestones = [
  {
    year: '1992',
    title: 'Practice Established',
    description: 'Thavhanyedza Alex Mafhungo begins serving Limpopo Province as a Speech and Hearing Therapy Consultant.',
  },
  {
    year: 'Early 2000s',
    title: 'Pioneering Conservation Programs',
    description: 'Pioneered occupational hearing conservation programs in the Levubu area.',
  },
  {
    year: 'Ongoing',
    title: 'Community Partnerships',
    description: 'Annual collaboration with leading consultants and organizations to improve community hearing health.',
  },
  {
    year: 'Present',
    title: 'Published Author',
    description: 'Released "A Guidebook of Community Approach to Audiology" to share decades of expertise.',
  },
];

const values = [
  {
    title: 'Excellence',
    description: 'We are committed to providing the highest quality speech and hearing care through continuous learning and evidence-based practices.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Compassion',
    description: 'We treat every patient with empathy and understanding, recognizing that hearing and speech challenges affect all aspects of life.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Community',
    description: 'We believe in making hearing healthcare accessible to all, regardless of location or circumstances.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Personalized Care',
    description: 'Every patient is unique, and we tailor our approach to meet individual needs and goals.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        kicker="Our story"
        subtitle="With over three decades of experience, we’re dedicated to excellent, accessible speech and hearing care for the Limpopo community."
        tone="primary"
        imageSrc="/images/hero-bg.webp"
        imageAlt="Our practice"
        actions={
          <>
            <Button href="/contact" variant="accent" size="lg">
              Book an Appointment
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View Services
            </Button>
          </>
        }
      />

      {/* Specialist Bio Section */}
      <Section background="white" padding="md">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="ui-panel overflow-hidden aspect-[4/5] relative">
              <Image
                src="/images/audiologist-headshot.webp"
                alt="Thavhanyedza Alex Mafhungo - Speech and Hearing Therapy Consultant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements - using opacity for subtle effect */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[--color-primary-100] rounded-full -z-10 opacity-80" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[--color-accent-100] rounded-full -z-10 opacity-80" />
          </div>
          <div className="stack-md">
            <p className="text-overline text-[--color-primary-600]">YOUR SPECIALIST</p>
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
              Thavhanyedza Alex Mafhungo
            </h2>
            <p 
              className="
                text-[length:var(--text-xl)]
                leading-[--leading-snug]
                text-[--color-neutral-600]
              "
            >
              Speech and Hearing Therapy Consultant
            </p>
            <div className="mt-4 space-y-4">
              <p 
                className="
                  text-[length:var(--text-lg)]
                  leading-[--leading-relaxed]
                  text-[--color-neutral-600]
                "
              >
                Thavhanyedza Alex Mafhungo has been a dedicated Speech and Hearing Therapy 
                Consultant serving Limpopo Province since 1992. With over three decades of 
                clinical experience, he has established himself as a trusted expert in the field.
              </p>
              <p 
                className="
                  text-[length:var(--text-lg)]
                  leading-[--leading-relaxed]
                  text-[--color-neutral-600]
                "
              >
                He pioneered occupational hearing conservation programs in the Levubu area, 
                demonstrating his commitment to proactive hearing health. He collaborates 
                annually with leading consultants and organizations to stay at the forefront 
                of audiology practices.
              </p>
              <p 
                className="
                  text-[length:var(--text-lg)]
                  leading-[--leading-relaxed]
                  text-[--color-neutral-600]
                "
              >
                His commitment to excellence and community care has made him a trusted partner 
                for hospitals, organizations, and families throughout the region. His mission 
                is to provide accessible, high-quality speech and hearing health care to all.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-[--color-primary-50] rounded-xl px-6 py-4 ring-1 ring-inset ring-[--color-primary-100]">
                <p 
                  className="
                    font-[family-name:var(--font-heading)]
                    text-[length:var(--text-2xl)]
                    leading-[--leading-tight]
                    font-bold 
                    text-[--color-primary-600]
                  "
                >
                  30+
                </p>
                <p className="text-[length:var(--text-sm)] tracking-[--tracking-wide] text-[--color-neutral-600]">Years Experience</p>
              </div>
              <div className="bg-[--color-primary-50] rounded-xl px-6 py-4 ring-1 ring-inset ring-[--color-primary-100]">
                <p 
                  className="
                    font-[family-name:var(--font-heading)]
                    text-[length:var(--text-2xl)]
                    leading-[--leading-tight]
                    font-bold 
                    text-[--color-primary-600]
                  "
                >
                  1992
                </p>
                <p className="text-sm text-[--color-neutral-600]">Since</p>
              </div>
              <div className="bg-[--color-primary-50] rounded-xl px-6 py-4 ring-1 ring-inset ring-[--color-primary-100]">
                <p className="font-[family-name:var(--font-heading)] text-[length:var(--text-2xl)] leading-[--leading-tight] font-bold text-[--color-primary-600]">Limpopo</p>
                <p className="text-[length:var(--text-sm)] tracking-[--tracking-wide] text-[--color-neutral-600]">Province</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
  <Section background="light" padding="md">
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide our practice and patient care"
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="ui-panel p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[--color-primary-100] text-[--color-primary-600] mb-4">
                {value.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-lg)] leading-[--leading-snug] tracking-[--tracking-tight] font-semibold text-[--color-neutral-900]">
                {value.title}
              </h3>
              <p className="mt-2 text-[length:var(--text-sm)] leading-[--leading-relaxed] text-[--color-neutral-600]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline / Milestones */}
  <Section background="white" padding="md">
        <SectionHeader
          title="Our Journey"
          subtitle="Key milestones in our commitment to community hearing health"
        />
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[--color-primary-200]" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-[--color-primary-600] border-4 border-white shadow" />
                  
                  <div className="ui-panel p-6">
                    <p className="text-overline text-[--color-primary-600]">{milestone.year}</p>
                    <h3 className="mt-2 font-[family-name:var(--font-heading)] text-[length:var(--text-lg)] leading-[--leading-snug] tracking-[--tracking-tight] font-semibold text-[--color-neutral-900]">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-[length:var(--text-base)] leading-[--leading-relaxed] text-[--color-neutral-600]">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <div className="text-center stack-md">
          <div className="stack-xs">
          <p className="text-overline text-white/70">Book a visit</p>
          <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-bold text-white">
            Ready to Experience Our Care?
          </h2>
          <p className="text-[length:var(--text-lg)] leading-[--leading-relaxed] text-white/85 max-w-2xl mx-auto">
            Schedule an appointment today and experience our commitment to excellent 
            speech and hearing care.
          </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="accent" size="lg">
              Book an Appointment
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

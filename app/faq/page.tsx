import type { Metadata } from 'next';
import Section, { SectionHeader } from '@/components/ui/Section';
import FAQAccordion from '@/components/FAQAccordion';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about our speech and hearing services, appointments, and the book.',
};

const serviceFAQs = [
  {
    question: "What should I expect during my first hearing assessment?",
    answer: "Your first visit typically lasts about 60-90 minutes. We'll discuss your hearing history, examine your ears, and conduct a series of painless tests to assess your hearing ability. You'll leave with a clear understanding of your hearing health and recommended next steps."
  },
  {
    question: "How do I know if I need a hearing test?",
    answer: "Signs that you may need a hearing test include: difficulty understanding conversations (especially in noisy environments), frequently asking people to repeat themselves, turning up the TV or radio volume higher than others prefer, or feeling like others are mumbling. If you experience any of these, we recommend scheduling an assessment."
  },
  {
    question: "Do you provide services for children?",
    answer: "Yes! We offer comprehensive pediatric hearing and speech services. Early detection and intervention are crucial for a child's development. We have child-friendly assessment methods and work closely with parents to develop appropriate treatment plans."
  },
  {
    question: "What types of hearing aids do you offer?",
    answer: "We offer a wide range of hearing aids from leading manufacturers, including behind-the-ear (BTE), in-the-ear (ITE), and completely-in-canal (CIC) styles. We'll help you choose the best option based on your hearing needs, lifestyle, and budget."
  },
  {
    question: "How long does it take to adjust to hearing aids?",
    answer: "Adjustment periods vary, but most people take 2-4 weeks to fully adapt to their hearing aids. We provide comprehensive follow-up support to ensure your hearing aids are optimized for your needs and you're comfortable using them."
  },
  {
    question: "Do you offer speech therapy for adults?",
    answer: "Yes, we provide speech therapy for all ages. Adult speech therapy can help with various conditions including stuttering, voice disorders, accent modification, and speech difficulties following stroke or other medical conditions."
  },
];

const appointmentFAQs = [
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by calling us at +27 71 381 1976, sending us a WhatsApp message, or filling out the contact form on our website. We'll respond within 24 hours to confirm your appointment."
  },
  {
    question: "What are your operating hours?",
    answer: "We're available Monday to Friday from 8:00 AM to 5:00 PM, and Saturday by appointment. We're closed on Sundays and public holidays."
  },
  {
    question: "Do I need a referral to see you?",
    answer: "No referral is necessary for most of our services. You can book directly with us. However, some medical aid plans may require a referral for reimbursement, so we recommend checking with your provider."
  },
  {
    question: "What should I bring to my appointment?",
    answer: "Please bring your ID document, medical aid card (if applicable), any previous hearing test results, a list of current medications, and any relevant medical records. If possible, bring a family member or friend who can provide additional observations about your hearing."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand that schedules change. Please give us at least 24 hours notice if you need to cancel or reschedule your appointment so we can offer the time slot to another patient."
  },
];

const bookFAQs = [
  {
    question: "What is 'A Guidebook of Community Approach to Audiology' about?",
    answer: "This comprehensive guidebook shares over 30 years of experience in community-based hearing healthcare. It covers practical strategies for delivering audiological services in underserved communities, including mobile clinics, community education, and culturally sensitive care approaches."
  },
  {
    question: "Who is the book intended for?",
    answer: "The book is designed for audiologists, speech therapists, healthcare workers, community health workers, students in healthcare fields, and anyone interested in improving access to hearing healthcare in their communities."
  },
  {
    question: "How can I order a copy of the book?",
    answer: "Physical copies can be ordered through our Contact page. Simply fill out the form, select 'Book Order' as your inquiry type, and we'll get back to you with ordering details and payment information."
  },
  {
    question: "Is shipping available nationwide?",
    answer: "Yes, we ship throughout South Africa. Shipping costs vary based on location. For international orders, please contact us directly to discuss shipping options and costs."
  },
  {
    question: "Can I get a sample chapter before purchasing?",
    answer: "Yes! We offer a free sample chapter download on our Book page so you can preview the content before making a purchase decision."
  },
];

// Category card component
function CategoryCard({ 
  icon, 
  title, 
  description, 
  count 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  count: number;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[--color-neutral-100] hover:border-[--color-primary-200] hover:shadow-lg hover:shadow-[--color-primary-500]/5 transition-all duration-300 group">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[--color-primary-500] to-[--color-primary-600] flex items-center justify-center text-white shadow-lg shadow-[--color-primary-500]/20 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-lg)] font-semibold text-[--color-neutral-900]">
          {title}
        </h3>
        <p className="text-[length:var(--text-sm)] text-[--color-neutral-500] mt-0.5">
          {description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[--color-primary-50] text-[--color-primary-700] text-[length:var(--text-sm)] font-semibold">
          {count}
        </span>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        kicker="Quick answers"
        subtitle="Common questions about our services, appointments, and the book."
        tone="primary"
      />

      {/* Category Overview */}
      <Section padding="sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <CategoryCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            }
            title="Our Services"
            description="Hearing & speech therapy"
            count={serviceFAQs.length}
          />
          <CategoryCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            title="Appointments"
            description="Booking & preparation"
            count={appointmentFAQs.length}
          />
          <CategoryCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            title="The Book"
            description="Ordering & details"
            count={bookFAQs.length}
          />
        </div>
      </Section>

      {/* Services FAQ */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[--color-primary-500] to-[--color-primary-600] flex items-center justify-center text-white shadow-xl shadow-[--color-primary-500]/20">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-bold text-[--color-neutral-900]">
                About Our Services
              </h2>
              <p className="text-[length:var(--text-base)] text-[--color-neutral-500] mt-1">
                Learn more about what we offer
              </p>
            </div>
          </div>
          <FAQAccordion faqs={serviceFAQs} />
        </div>
      </Section>

      {/* Appointments FAQ */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[--color-accent-500] to-[--color-accent-600] flex items-center justify-center text-white shadow-xl shadow-[--color-accent-500]/20">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-bold text-[--color-neutral-900]">
                Appointments & Visits
              </h2>
              <p className="text-[length:var(--text-base)] text-[--color-neutral-500] mt-1">
                Information about booking and preparing for your visit
              </p>
            </div>
          </div>
          <FAQAccordion faqs={appointmentFAQs} />
        </div>
      </Section>

      {/* Book FAQ */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[--color-primary-700] to-[--color-primary-800] flex items-center justify-center text-white shadow-xl shadow-[--color-primary-700]/20">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-bold text-[--color-neutral-900]">
                About the Book
              </h2>
              <p className="text-[length:var(--text-base)] text-[--color-neutral-500] mt-1">
                Questions about &apos;A Guidebook of Community Approach to Audiology&apos;
              </p>
            </div>
          </div>
          <FAQAccordion faqs={bookFAQs} />
        </div>
      </Section>

      <Section background="primary" padding="md">
        <div className="text-center stack-md">
          <div className="stack-xs">
            <p className="text-overline text-white/70">Still have questions?</p>
            <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-bold">
              We&apos;re here to help
            </h2>
            <p className="text-[length:var(--text-lg)] leading-[--leading-relaxed] text-white/85 max-w-2xl mx-auto">
              Reach out and we&apos;ll respond within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
            <Button href="tel:+27713811976" variant="outline" size="lg" className="!ring-white !text-white hover:!bg-white/10">
              Call +27 71 381 1976
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

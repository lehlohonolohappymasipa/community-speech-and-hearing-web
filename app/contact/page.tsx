import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Community Speech and Hearing Health Care Specialist to book an appointment, order the book, or inquire about our services. Located in Limpopo, South Africa.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        kicker="We’re here to help"
        subtitle="Book an appointment, order the book, or ask a question — we’ll respond as soon as possible."
        tone="primary"
        imageSrc="/images/hero-bg.webp"
        imageAlt="Contact Community Speech and Hearing Health Care Specialist"
        actions={
          <>
            <Button href="tel:+27713811976" variant="accent" size="lg">
              Call +27 71 381 1976
            </Button>
            <Button href="/book" variant="secondary" size="lg">
              Book Appointment
            </Button>
          </>
        }
      />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}
      <Section background="light" padding="md">
        <div className="stack-md">
          <div className="stack-xs">
            <p className="text-overline text-[--color-primary-600]">Location</p>
            <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-semibold text-[--color-neutral-900]">
              Find us in Limpopo
            </h2>
            <p className="text-[length:var(--text-lg)] leading-[--leading-relaxed] text-[--color-neutral-600]">
              Ngovhela Phindula, near Pfanani Clinic.
            </p>
          </div>

          <div className="ui-panel p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="stack-2xs">
                <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-lg)] leading-[--leading-tight] tracking-[--tracking-tight] font-semibold text-[--color-neutral-900]">
                  Ngovhela Phindula, Near Pfanani Clinic
                </h3>
                <p className="text-[--color-neutral-600]">Limpopo, South Africa</p>
              </div>
              <Button
                href="https://www.google.com/maps/search/?api=1&query=Ngovhela%20Phindula%20Near%20Pfanani%20Clinic%20Limpopo%20South%20Africa"
                variant="primary"
              >
                Open in Google Maps
              </Button>
            </div>
          </div>
          </div>
      </Section>

      {/* Quick Contact Strip */}
      <Section background="ink" padding="md">
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="tel:+27713811976"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="stack-2xs">
                <p className="text-overline text-white/70">Phone</p>
                <p className="text-[length:var(--text-xl)] leading-[--leading-tight] font-semibold text-white">
                  +27 71 381 1976
                </p>
                <p className="text-[length:var(--text-sm)] text-white/60">Mon–Fri 8am–5pm (SAST)</p>
              </div>
            </div>
          </a>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="stack-2xs">
                <p className="text-overline text-white/70">Location</p>
                <p className="text-[length:var(--text-lg)] leading-[--leading-tight] font-semibold text-white">
                  Ngovhela Phindula
                </p>
                <p className="text-[length:var(--text-sm)] text-white/60">Near Pfanani Clinic, Limpopo</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Field, Input, Textarea } from '@/components/ui/Field';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: 'appointment' | 'book-order' | 'general';
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const inquiryLabels: Record<FormData['inquiryType'], string> = {
  appointment: 'Appointment',
  'book-order': 'Book order',
  general: 'General',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'appointment',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission delay
    // TODO: Replace with actual form submission logic (e.g., API call, email service)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const setInquiryType = (inquiryType: FormData['inquiryType']) => {
    setFormData((prev) => ({ ...prev, inquiryType }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <Section background="white">
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-2xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-bold text-[--color-neutral-900]">
            Thank You for Your Message!
          </h2>
          <p className="mt-4 text-[length:var(--text-lg)] leading-[--leading-relaxed] text-[--color-neutral-600]">
            We have received your inquiry and will get back to you as soon as possible. 
            For urgent matters, please call us directly at{' '}
            <a href="tel:+27713811976" className="text-[--color-primary-600] font-medium">
              +27 71 381 1976
            </a>
            .
          </p>
          <div className="mt-8">
            <Button onClick={() => setIsSubmitted(false)} variant="primary">
              Send Another Message
            </Button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Information */}
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-2xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-bold text-[--color-neutral-900]">
            Get in Touch
          </h2>
          <p className="mt-4 text-[length:var(--text-lg)] leading-[--leading-relaxed] text-[--color-neutral-600]">
            Whether you want to book an appointment, order the book, or have a general 
            inquiry, we&apos;re here to help.
          </p>

          <div className="mt-10 space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[--color-primary-100] flex items-center justify-center">
                <svg className="h-6 w-6 text-[--color-primary-600]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[--color-neutral-900]">Phone</h3>
                <a 
                  href="tel:+27713811976" 
                  className="mt-1 text-lg text-[--color-primary-600] hover:text-[--color-primary-700]"
                >
                  +27 71 381 1976
                </a>
                <p className="mt-1 text-sm text-[--color-neutral-500]">
                  Mon-Fri 8am-5pm SAST
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[--color-primary-100] flex items-center justify-center">
                <svg className="h-6 w-6 text-[--color-primary-600]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[--color-neutral-900]">Location</h3>
                <p className="mt-1 text-lg text-[--color-neutral-600]">
                  Ngovhela Phindula,<br />
                  Near Pfanani Clinic,<br />
                  Limpopo, South Africa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="ui-panel p-6 sm:p-8">
            <div className="stack-sm">
              <p className="text-overline text-[--color-primary-600]">Send a message</p>
              <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-xl)] leading-[--leading-tight] tracking-[--tracking-tight] font-semibold text-[--color-neutral-900]">
                How can we help?
              </h3>
              <p className="text-[length:var(--text-sm)] leading-[--leading-relaxed] text-[--color-neutral-600]">
                Choose a topic, then leave your details and we&apos;ll get back to you.
              </p>
            </div>

            {/* Inquiry Type */}
            <div className="mt-6">
              <div className="ui-segment" role="group" aria-label="Inquiry type">
                {(Object.keys(inquiryLabels) as Array<FormData['inquiryType']>).map((type) => (
                  <button
                    key={type}
                    type="button"
                    aria-pressed={formData.inquiryType === type}
                    onClick={() => setInquiryType(type)}
                  >
                    {inquiryLabels[type]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6">
              <Field id="name" label="Full Name" required error={errors.name}>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  hasError={Boolean(errors.name)}
                />
              </Field>

              <div className="grid md:grid-cols-2 gap-6">
                <Field id="email" label="Email Address" required error={errors.email}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    hasError={Boolean(errors.email)}
                  />
                </Field>

                <Field id="phone" label="Phone Number" required error={errors.phone}>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 XX XXX XXXX"
                    hasError={Boolean(errors.phone)}
                  />
                </Field>
              </div>

              <Field
                id="subject"
                label="Subject"
                hint={`Selected: ${inquiryLabels[formData.inquiryType]}`}
              >
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Brief subject of your message"
                />
              </Field>

              <Field id="message" label="Message" required error={errors.message}>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you need and the best time to reach you…"
                  hasError={Boolean(errors.message)}
                />
              </Field>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>

            <p className="mt-4 text-[length:var(--text-sm)] text-[--color-neutral-500] text-center">
              We&apos;ll respond as soon as possible. For urgent matters, call{' '}
              <a className="font-semibold text-[--color-primary-600]" href="tel:+27713811976">
                +27 71 381 1976
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}

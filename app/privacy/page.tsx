import type { Metadata } from 'next';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Community Speech and Hearing Health Care Specialist services.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[--color-primary-700] to-[--color-primary-800] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-primary-100">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <Section>
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>1. Introduction</h2>
          <p>
            Community Speech and Hearing Health Care Specialist (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting 
            your personal information in accordance with the Protection of Personal Information 
            Act (POPIA) of South Africa.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you visit our website or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name and surname</li>
            <li>Contact information (phone number, email address)</li>
            <li>Health-related information relevant to our services</li>
            <li>Communication preferences</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>IP address</li>
            <li>Pages visited and time spent</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our speech and hearing services</li>
            <li>Communicate with you about appointments and services</li>
            <li>Process book orders and inquiries</li>
            <li>Respond to your questions and requests</li>
            <li>Improve our website and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. 
            We may share your information only in the following circumstances:
          </p>
          <ul>
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
            <li>With service providers who assist our operations (under strict confidentiality agreements)</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>6. Your Rights Under POPIA</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to the processing of your information</li>
            <li>Lodge a complaint with the Information Regulator</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. Cookies are small 
            text files stored on your device that help us analyze web traffic and improve our services.
          </p>
          <p>
            You can choose to accept or decline cookies. Most web browsers automatically 
            accept cookies, but you can modify your browser settings to decline cookies if you prefer.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            While we provide services to children, we collect personal information about 
            minors only with parental or guardian consent. Parents or guardians may review, 
            modify, or request deletion of their child&apos;s information.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the 
            &quot;Last updated&quot; date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, 
            please contact us:
          </p>
          <ul>
            <li><strong>Phone:</strong> +27 71 381 1976</li>
            <li><strong>Address:</strong> Ngovhela Phindula, Near Pfanani Clinic, Limpopo Province, South Africa</li>
          </ul>
        </div>
      </Section>
    </>
  );
}

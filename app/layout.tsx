import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";

// Heading font - Modern, geometric, excellent for headlines
const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Body font - Highly readable, professional
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://communityspeechandhearing.netlify.app"),
  title: {
    default: "Community Speech and Hearing Health Care Specialist | Expert Audiology Care in Limpopo",
    template: "%s | Community Speech and Hearing Health Care Specialist",
  },
  description: "Expert speech and hearing care for Limpopo Province since 1992. Comprehensive hearing assessments, hearing aids, speech therapy, and author of 'A Guidebook of Community Approach to Audiology'.",
  keywords: [
    "audiologist",
    "speech therapy",
    "hearing aids",
    "Limpopo",
    "South Africa",
    "hearing assessment",
    "Thavhanyedza Alex Mafhungo",
    "community audiology",
    "speech and hearing",
  ],
  authors: [{ name: "Thavhanyedza Alex Mafhungo" }],
  creator: "Community Speech and Hearing Health Care Specialist",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://communityspeechandhearing.netlify.app",
    siteName: "Community Speech and Hearing Health Care Specialist",
    title: "Community Speech and Hearing Health Care Specialist | Expert Audiology Care in Limpopo",
    description: "Expert speech and hearing care for Limpopo Province since 1992. Over 30 years of dedicated service to our community.",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Community Speech and Hearing Health Care Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Speech and Hearing Health Care Specialist | Expert Audiology Care in Limpopo",
    description: "Expert speech and hearing care for Limpopo Province since 1992.",
    images: ["/images/hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        <ScrollProgress />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import BackToTop from "@/components/BackToTop";
import GDPRConsent from "@/components/GDPRConsent";
import OrganizationStructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Dolebs Media Ltd | Professional Photography, Videography & Creative Services in Nairobi, Kenya",
    template: "%s | Dolebs Media Ltd"
  },
  description: "Dolebs Media Ltd offers exceptional photography, videography, graphic design, web development, and marketing services in Nairobi, Kenya. Transform your brand with our creative digital solutions.",
  keywords: ["photography services Kenya", "videography Nairobi", "graphic design Kenya", "web development Nairobi", "marketing agency Kenya", "commercial photography", "corporate video production", "creative agency Nairobi"],
  authors: [{ name: "Dolebs Media Ltd" }],
  creator: "Dolebs Media Ltd",
  publisher: "Dolebs Media Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Dolebs Media Ltd | Professional Photography, Videography & Creative Services in Nairobi, Kenya",
    description: "Dolebs Media Ltd offers exceptional photography, videography, graphic design, web development, and marketing services in Nairobi, Kenya. Transform your brand with our creative digital solutions.",
    url: 'https://www.dolebsmedia.co.ke',
    siteName: 'Dolebs Media Ltd',
    images: [
      {
        url: "/images/who-we-are.avif",
        width: 1200,
        height: 630,
        alt: "Dolebs Media Ltd - Professional Creative Services in Nairobi, Kenya",
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dolebs Media Ltd | Professional Photography, Videography & Creative Services in Nairobi, Kenya",
    description: "Dolebs Media Ltd offers exceptional photography, videography, graphic design, web development, and marketing services in Nairobi, Kenya. Transform your brand with our creative digital solutions.",
    images: ["/images/who-we-are.avif"],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationStructuredData />
      </head>
      <body suppressHydrationWarning>
        <ErrorBoundary>
          {children}
          <BackToTop />
          <GDPRConsent />
        </ErrorBoundary>
      </body>
    </html>
  );
}

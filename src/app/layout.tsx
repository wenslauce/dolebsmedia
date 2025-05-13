import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import BackToTop from "@/components/BackToTop";
import GDPRConsent from "@/components/GDPRConsent";

export const metadata: Metadata = {
  title: "Giertsen Energy Solutions | Solar powered systems and solutions for a sustainable world",
  description: "Leading supplier of innovative solar power solutions with advanced supercapacitor technology, delivering sustainable energy across Kenya.",
  icons: {
    icon: '/images/fav.ico',
  },
  openGraph: {
    title: "Giertsen Energy Solutions | Solar powered systems and solutions for a sustainable world",
    description: "Leading supplier of innovative solar power solutions with advanced supercapacitor technology, delivering sustainable energy across Kenya.",
    url: 'https://giertsenenergy.com',
    siteName: 'Giertsen Energy Solutions',
    images: [
      {
        url: "/images/supercapacitor-og.jpg",
        width: 1200,
        height: 630,
        alt: "Giertsen Energy Solutions - Sustainable Energy Solutions",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Giertsen Energy Solutions | Solar powered systems and solutions for a sustainable world",
    description: "Leading supplier of innovative solar power solutions with advanced supercapacitor technology, delivering sustainable energy across Kenya.",
    images: ["/images/supercapacitor-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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

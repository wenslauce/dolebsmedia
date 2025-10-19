import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import BackToTop from "@/components/BackToTop";
import GDPRConsent from "@/components/GDPRConsent";

export const metadata: Metadata = {
  title: "Dolebs Studio | No cookie-cutter websites. No fluff.",
  description: "Just real tools and smart strategies to grow your business and elevate your brand.",
  icons: {
    icon: '/images/fav.ico',
  },
  openGraph: {
    title: "Dolebs Studio | No cookie-cutter websites. No fluff.",
    description: "Just real tools and smart strategies to grow your business and elevate your brand.",
    url: 'https://dolebsstudio.com',
    siteName: 'Dolebs Studio',
    images: [
      {
        url: "/images/supercapacitor-og.jpg",
        width: 1200,
        height: 630,
        alt: "Dolebs Studio - Creative Digital Solutions",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dolebs Studio | No cookie-cutter websites. No fluff.",
    description: "Just real tools and smart strategies to grow your business and elevate your brand.",
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

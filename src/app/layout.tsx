import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import BackToTop from "@/components/BackToTop";
import GDPRConsent from "@/components/GDPRConsent";

export const metadata: Metadata = {
  title: "Giertsen Energy Solutions",
  description: "Energy thought through to the end: We develop tailored energy solutions that reduce CO₂ emissions, lower costs, and increase self-sufficiency. Learn how we sustainably strengthen businesses.",
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

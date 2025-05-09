"use client";

import { useEffect } from "react";
import GDPRConsent from "@/components/GDPRConsent";
import BackToTop from "@/components/BackToTop";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    
    // Remove any browser translation extension classes from html tag
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('translated-ltr') || 
        htmlElement.classList.contains('translated-rtl')) {
      htmlElement.className = '';
      htmlElement.lang = 'en'; // Ensure language is set to English
    }
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      {children}
      <BackToTop />
      <GDPRConsent />
    </body>
  );
}

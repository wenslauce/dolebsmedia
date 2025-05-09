import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SolutionsOverview from "@/components/SolutionsOverview";
import Footer from "@/components/Footer";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhyWorkWithUsSection from "@/components/WhyWorkWithUsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsLogosSection from "@/components/ClientsLogosSection";
import AwardsSection from "@/components/AwardsSection";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <div> {/* Removed pt-16 padding */}
        <section className="section-wrapper">
          <HeroSection />
        </section>

        {/* Quick Links */}
        <section className="section-wrapper bg-gray-50 py-4 border-b border-gray-200">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm">
              <span className="text-secondary font-medium">Discover More:</span>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/about-us"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/solutions/commercial-solutions"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Commercial Solutions
                </Link>
                <Link
                  href="/consultation"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrapper">
          <StatsSection />
        </section>
        
        <section className="section-wrapper">
          <WhoWeAreSection />
        </section>

        <section className="section-wrapper">
          <SolutionsOverview />
        </section>
        
        <section className="section-wrapper">
          <WhyWorkWithUsSection />
        </section>

        <section className="section-wrapper bg-gray-50">
          <HowWeWorkSection />
        </section>
        
        <section className="section-wrapper">
          <TestimonialsSection />
        </section>
        
        <section className="section-wrapper">
          <ClientsLogosSection />
        </section>
        
        <section className="section-wrapper">
          <AwardsSection />
        </section>
        
        <div className="pb-16"> {/* Added padding-bottom for space between CTA and footer */}
          <section className="section-wrapper">
            <CTASection />
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

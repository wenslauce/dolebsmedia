import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsOverview from "@/components/SolutionsOverview";
import Footer from "@/components/Footer";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhyWorkWithUsSection from "@/components/WhyWorkWithUsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ClientsLogosSection from "@/components/ClientsLogosSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <div> {/* Removed pt-16 padding */}
        <section className="section-wrapper">
          <HeroSection />
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
          <ClientsLogosSection />
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

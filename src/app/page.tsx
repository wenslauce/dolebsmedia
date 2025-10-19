import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsOverview from "@/components/SolutionsOverview";
import Footer from "@/components/Footer";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhyWorkWithUsSection from "@/components/WhyWorkWithUsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ClientsLogosSection from "@/components/ClientsLogosSection";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dolebs Media Ltd | Professional Photography, Videography & Creative Services in Nairobi, Kenya",
  description: "Dolebs Media Ltd has been delivering exceptional photography, videography, graphic design, web development, and marketing services in Nairobi, Kenya since 2017. Transform your brand with our creative digital solutions.",
  keywords: [
    "photography services Kenya",
    "videography Nairobi", 
    "graphic design Kenya",
    "web development Nairobi",
    "marketing agency Kenya",
    "creative services Nairobi",
    "commercial photography Kenya",
    "corporate video production Nairobi",
    "brand design Kenya",
    "digital marketing Nairobi",
    "professional photography Kenya",
    "video production Nairobi",
    "creative agency Kenya",
    "branding services Nairobi",
    "web design Kenya"
  ],
  openGraph: {
    title: "Dolebs Media Ltd | Professional Photography, Videography & Creative Services in Nairobi, Kenya",
    description: "Dolebs Media Ltd has been delivering exceptional photography, videography, graphic design, web development, and marketing services in Nairobi, Kenya since 2017. Transform your brand with our creative digital solutions.",
    url: "https://www.dolebsmedia.co.ke",
    images: [
      {
        url: "/images/who-we-are.avif",
        width: 1200,
        height: 630,
        alt: "Dolebs Media Ltd - Professional Creative Services in Nairobi, Kenya"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolebs Media Ltd | Professional Photography, Videography & Creative Services in Nairobi, Kenya",
    description: "Dolebs Media Ltd has been delivering exceptional photography, videography, graphic design, web development, and marketing services in Nairobi, Kenya since 2017.",
    images: ["/images/who-we-are.avif"]
  },
  alternates: {
    canonical: "https://www.dolebsmedia.co.ke"
  }
};

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

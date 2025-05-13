import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Energy Solutions | W. Giertsen Energy Solutions",
  description: "From solar installations to smart energy management and operations, find tailored solutions with W. Giertsen Energy Solutions.",
};

interface SolutionCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
}

const SolutionCard = ({ title, description, href, imageSrc }: SolutionCardProps) => {
  return (
    <Link
      href={href}
      className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-[220px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center text-primary font-medium">
          <span>Learn more</span>
          <svg
            className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Supercapacitor Energy Storage",
      description: "Advanced energy storage solutions for maximizing your renewable energy efficiency. Our supercapacitors offer longer lifespans, faster charging, and greater durability than traditional batteries.",
      href: "/solutions/supercapacitor-energy-storage",
      imageSrc: "/images/supercapacitor.avif"
    },
    {
      title: "Residential Solutions",
      description: "Solar power systems designed specifically for homes and residential applications. Enjoy energy independence and reduced electricity bills with our custom residential installations.",
      href: "/solutions/residential-solutions",
      imageSrc: "/images/stima-kit.avif"
    },
    {
      title: "Commercial Solutions",
      description: "Customized energy solutions to reduce costs and improve sustainability for businesses. Our commercial systems are scalable, reliable, and engineered for maximum ROI.",
      href: "/solutions/commercial-solutions",
      imageSrc: "/images/solar-panels.avif"
    },
    {
      title: "Humanitarian Solutions",
      description: "Reliable solar solutions for humanitarian operations worldwide. Supporting refugee camps, health clinics, and emergency coordination hubs with sustainable energy solutions.",
      href: "/solutions/humanitarian-solutions",
      imageSrc: "/images/humanitarian-hero.avif"
    },
    {
      title: "Operations & Maintenance",
      description: "Expert solar maintenance services provided by our team of licensed solar technicians. Maximize your investment with our comprehensive monitoring, maintenance, and optimization services.",
      href: "/solutions/solar-operations-maintenance",
      imageSrc: "/images/operations.avif"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/solar-panels.avif"
            alt="Energy Solutions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                  Energy Solutions for a Sustainable Future
                </h1>
                <p className="text-white/80 text-lg">
                  Innovative and integrated energy systems designed for maximum efficiency and sustainability
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-gray-700">
              At W. Giertsen Energy Solutions, we offer a complete range of energy solutions designed to meet the diverse
              needs of businesses and homeowners. From cutting-edge storage technologies to comprehensive
              maintenance services, our solutions are tailored to maximize efficiency, reduce costs,
              and promote sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.href}
                title={solution.title}
                description={solution.description}
                href={solution.href}
                imageSrc={solution.imageSrc}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl opacity-30" />
          
          <div className="container-custom relative z-10">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90" />
              
              {/* Decorative patterns */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-green/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-transparent to-accent-gold/5 rounded-full blur-3xl opacity-30" />
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  {/* Label */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                    <span className="text-sm font-medium text-white">Get Started Today</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
                    Ready to Transform Your Energy Infrastructure?
                  </h2>
                  <p className="text-white/90 mb-8 text-lg">
                    Our expert team is ready to help you design and implement the perfect energy solution
                    for your specific needs. Whether you're a business looking to optimize operations or
                    a homeowner seeking energy independence, we have the expertise to deliver results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/consultation"
                      className="bg-accent-gold hover:bg-accent-gold/90 text-secondary px-8 py-4 rounded-lg inline-flex items-center font-medium transition-all duration-300 group shadow-lg hover:shadow-xl"
                    >
                      Get Quote
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>

                    <Link
                      href="/about-us"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg inline-flex items-center font-medium transition-all duration-300 backdrop-blur-sm"
                    >
                      Learn More
                      <svg 
                        className="w-5 h-5 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom curved shape */}
              <div className="absolute -bottom-1 left-0 right-0 h-16 w-full overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path 
                    d="M0 0L48 5.47826C96 10.9565 192 21.913 288 28.5217C384 35.1304 480 37.3913 576 35.1304C672 32.8696 768 26.2609 864 21.913C960 17.5652 1056 15.3043 1152 17.5652C1248 19.8261 1344 26.2609 1392 28.5217L1440 30.7826V70H1392C1344 70 1248 70 1152 70C1056 70 960 70 864 70C768 70 672 70 576 70C480 70 384 70 288 70C192 70 96 70 48 70H0V0Z" 
                    fill="white"
                    className="opacity-5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 
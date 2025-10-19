import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Creative Services | Dolebs Media",
  description: "Professional photography, videography, communication, marketing, graphic design, and web development services to elevate your brand.",
};

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
}

const ServiceCard = ({ title, description, href, imageSrc }: ServiceCardProps) => {
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

export default function ServicesPage() {
  const services = [
    {
      title: "Photography",
      description: "Professional photography that captures your brand's essence and tells your story. From dynamic portrait sessions to detailed product showcases, we create stunning visual content.",
      href: "/services/photography",
      imageSrc: "/images/team-foto.avif"
    },
    {
      title: "Videography",
      description: "Compelling video content that engages audiences and drives results. Our videography services bring your brand to life through dynamic storytelling and professional production.",
      href: "/services/videography",
      imageSrc: "/images/team-engineers.avif"
    },
    {
      title: "Communications",
      description: "Strategic communication solutions that amplify your message effectively. We help you connect with your audience through clear, compelling, and impactful communication strategies.",
      href: "/services/communications",
      imageSrc: "/images/team-image.avif"
    },
    {
      title: "Marketing & PR",
      description: "Comprehensive marketing and public relations to boost your visibility. Our integrated approach helps you reach the right audience and build lasting brand recognition.",
      href: "/services/marketing-pr",
      imageSrc: "/images/who-we-are.avif"
    },
    {
      title: "Graphic Designing",
      description: "Creative visual designs that make your brand stand out from the crowd. From logos to marketing materials, we create designs that capture attention and communicate your message effectively.",
      href: "/services/graphic-designing",
      imageSrc: "/images/about-hero.avif"
    },
    {
      title: "Web Development & Hosting",
      description: "Modern websites and reliable hosting solutions for your digital presence. We build responsive, fast, and SEO-optimized websites that drive engagement and conversions.",
      href: "/services/web-development-hosting",
      imageSrc: "/images/careers-hero.avif"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/team-foto.avif"
            alt="Creative Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                  Creative Services for Your Brand
                </h1>
                <p className="text-white/80 text-lg">
                  Professional photography, videography, and digital solutions designed to elevate your brand and engage your audience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
              Comprehensive Creative Services
            </h2>
            <p className="text-gray-700">
              At Dolebs Media, we offer a complete range of creative services designed to meet the diverse
              needs of businesses and individuals. From professional photography and videography to strategic
              communication and web development, our services are tailored to elevate your brand, engage your
              audience, and drive meaningful results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                href={service.href}
                imageSrc={service.imageSrc}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30" />
          
          <div className="container-custom relative z-10">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
              
              {/* Decorative patterns */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-full blur-3xl opacity-30" />
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  {/* Label */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                    <span className="text-sm font-medium text-white">Get Started Today</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
                    Ready to Bring Your Vision to Life?
                  </h2>
                  <p className="text-white/90 mb-8 text-lg">
                    Our creative team is ready to help you design and implement the perfect visual solution
                    for your specific needs. Whether you're a business looking to enhance your brand presence or
                    an individual seeking professional creative services, we have the expertise to deliver exceptional results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/contact"
                      className="bg-accent hover:bg-accent/90 text-secondary px-8 py-4 rounded-lg inline-flex items-center font-medium transition-all duration-300 group shadow-lg hover:shadow-xl"
                    >
                      Start Your Project
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Zap, 
  Sun, 
  Globe, 
  Clock,
  Shield,
  Truck,
  Building2,
  Droplet,
  Stethoscope,
  GraduationCap,
  Users
} from "lucide-react";

export const metadata = {
  title: "Humanitarian Energy Solutions | W. Giertsen Energy Solutions",
  description: "Reliable solar solutions for humanitarian operations worldwide. Powering refugee camps, health clinics, and emergency coordination hubs with sustainable energy.",
};

export default function HumanitarianSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[600px]">
          <Image
            src="/images/humanitarian-hero.avif"
            alt="Humanitarian Solar Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-white">Humanitarian Energy Solutions</span>
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                  Trusted Solar Solutions for Humanitarian Operations
                </h1>
                <p className="text-white/90 text-lg mb-8">
                  Empowering humanitarian missions with reliable, sustainable energy solutions for critical operations worldwide.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/consultation"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md inline-flex items-center font-medium transition-all"
                  >
                    Get Started
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="#solutions"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-md inline-flex items-center font-medium transition-all"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container-custom -mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">Global</h3>
                  <p className="text-gray-600">Coverage</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">24/7</h3>
                  <p className="text-gray-600">Support</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">Reliable</h3>
                  <p className="text-gray-600">Field-tested Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container-custom py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
                Supporting Critical Humanitarian Operations
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                W. Giertsen Energy Solutions delivers reliable, field-tested solar systems and solar products that support humanitarian operations across the globe. From refugee camps and displacement sites to remote health clinics and emergency coordination hubs, we work closely with UN agencies, NGOs, and humanitarian partners to meet the energy demands of critical services in off-grid and crisis-affected areas.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">Rapid Deployment</h3>
                    <p className="text-gray-600">Quick installation and setup in emergency situations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">Global Coverage</h3>
                    <p className="text-gray-600">Three country offices working together to serve worldwide operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">End-to-End Support</h3>
                    <p className="text-gray-600">Complete solutions from procurement to ongoing technical support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/humanitarian-main.avif"
                alt="Humanitarian Solar Solutions in Action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-gray-50 py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-semibold text-secondary mb-6">
                Powering Essential Services
              </h2>
              <p className="text-gray-700 text-lg">
                Our solar solutions support critical infrastructure and services in humanitarian operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Droplet,
                  title: "Water Systems",
                  description: "Powering water pumping and purification systems"
                },
                {
                  icon: Stethoscope,
                  title: "Health Facilities",
                  description: "Ensuring reliable power for medical equipment"
                },
                {
                  icon: GraduationCap,
                  title: "Learning Centers",
                  description: "Supporting educational facilities and programs"
                },
                {
                  icon: Users,
                  title: "Community Centers",
                  description: "Powering shared spaces and coordination hubs"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-green/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-transparent to-accent-gold/5 rounded-full blur-3xl opacity-30"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Heart className="h-4 w-4 text-accent-gold" />
                <span className="text-sm font-medium text-white">Partner With Us</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Ready to Power Your Humanitarian Operations?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Let's work together to ensure reliable energy for your critical missions
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/consultation"
                  className="bg-accent-gold hover:bg-accent-gold/90 text-secondary px-8 py-4 rounded-lg inline-flex items-center font-medium transition-all duration-300 group"
                >
                  Get Started
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/about-us"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg inline-flex items-center font-medium transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 
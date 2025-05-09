import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle, 
  Zap, 
  Sun, 
  Battery, 
  Wifi, 
  Home,
  LineChart,
  Shield,
  Lightbulb,
  Wrench,
  Scale,
  RefreshCcw,
  BarChart,
  Clock,
  Settings,
  Leaf
} from "lucide-react";

export const metadata = {
  title: "Residential Energy Solutions | WGES",
  description: "Power your home with StimaKit - The complete residential energy solution from WGES. Reliable, clean energy with uninterrupted power supply and smart monitoring.",
};

export default function ResidentialSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[600px]">
          <Image
            src="/images/stima-kithero.avif"
            alt="Power Your Home with Clean Energy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-white">Residential Energy Solutions</span>
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                  Power Your Home with Reliable, Clean Energy
                </h1>
                <p className="text-white/90 text-lg mb-8">
                  Transform your home into an energy-independent powerhouse with our innovative StimaKit solution.
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
                    href="#stimakit"
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
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">75%</h3>
                  <p className="text-gray-600">Energy Bill Savings</p>
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
                  <p className="text-gray-600">Power Availability</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">5 Years</h3>
                  <p className="text-gray-600">Warranty Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* StimaKit Introduction */}
        <div className="container-custom py-24" id="stimakit">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
                Introducing StimaKit
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Designed with cutting-edge technology, StimaKit provides uninterrupted power supply, ensuring your home remains powered at all times. Whether on-grid or off-grid, our solar and energy storage solutions guarantee maximum efficiency, reliability, and affordability.
              </p>
              <p className="text-gray-700 text-lg mb-8">
                With StimaKit, we are redefining home energy solutions by providing a reliable, efficient, and sustainable way for homeowners to achieve energy independence. No more blackouts, no more skyrocketing electricity bills—just clean, uninterrupted power when you need it.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <Sun className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">Tailored Solutions</h3>
                    <p className="text-gray-600">Customized StimaKit configurations based on your home's unique energy consumption patterns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <Battery className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">Uninterrupted Power</h3>
                    <p className="text-gray-600">Keep essential appliances running even during grid failures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <Wifi className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">Smart Monitoring</h3>
                    <p className="text-gray-600">Track and optimize your energy usage in real-time through our online portal.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/stimakit-system.avif"
                alt="StimaKit Home Energy System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gray-50 py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-semibold text-secondary mb-6">
                Why Choose StimaKit?
              </h2>
              <p className="text-gray-700 text-lg">
                Experience the future of home energy with our comprehensive solution
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Battery className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Energy Security</h3>
                <p className="text-gray-700">
                  Your home stays powered even during grid failures, ensuring essential appliances like lighting, refrigeration, and internet remain operational.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Cost Savings</h3>
                <p className="text-gray-700">
                  Reduce your electricity bills by up to 75% by utilizing solar energy and smart power management, protecting you from rising electricity prices.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Scalable Solution</h3>
                <p className="text-gray-700">
                  Start with what you need and easily expand your system as your energy requirements grow over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* System Components */}
        <div className="bg-gray-50 py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-semibold text-secondary mb-6">
                What's Included in the StimaKit System?
              </h2>
              <p className="text-gray-700 text-lg">
                A complete, integrated solution for your home's energy needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Solar Panels",
                  description: "High-performance photovoltaic panels for maximum energy generation"
                },
                {
                  title: "Hybrid Inverter",
                  description: "Smart power conversion and management system"
                },
                {
                  title: "Supercapacitor Storage",
                  description: "Advanced, maintenance-free energy storage with ultra-long lifespan"
                },
                {
                  title: "Battery Rack & Cables",
                  description: "Professional-grade installation components"
                },
                {
                  title: "Online Monitoring System",
                  description: "Real-time performance tracking and analytics platform"
                },
                {
                  title: "Mounting Structures",
                  description: "Versatile mounting solutions for any location"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
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
              {/* Label */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Sun className="h-4 w-4 text-accent-gold" />
                <span className="text-sm font-medium text-white">Get Started Today</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Ready to Power Your Home with StimaKit?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join the energy revolution and take control of your home's power supply
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/consultation"
                  className="bg-accent-gold hover:bg-accent-gold/90 text-secondary px-8 py-4 rounded-lg inline-flex items-center font-medium transition-all duration-300 group"
                >
                  Get Quote
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
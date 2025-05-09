'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle, 
  Zap, 
  Sun, 
  Battery, 
  Building,
  LineChart,
  Shield,
  BarChart,
  RefreshCcw,
  Wrench,
  Search,
  Activity,
  PieChart
} from "lucide-react";

export default function CommercialSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[600px]">
          <Image
            src="/images/solar-panels.avif"
            alt="Commercial Energy Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
                  <Building className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-white">Commercial Solutions</span>
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                  Powering Businesses with Smart, Sustainable Energy
                </h1>
                <p className="text-white/90 text-lg mb-8">
                  Our solutions are tailored, scalable, and built for high-performance, ensuring that businesses, industries, and institutions benefit from uninterrupted power and long-term savings.
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
                    href="#process"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-md inline-flex items-center font-medium transition-all"
                  >
                    Our Process
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">12+</h3>
                  <p className="text-gray-600">MWp Installed</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">300+</h3>
                  <p className="text-gray-600">Business Clients</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <PieChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">75%</h3>
                  <p className="text-gray-600">Cost Reduction</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">99.9%</h3>
                  <p className="text-gray-600">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="container-custom py-24" id="process">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-semibold text-secondary mb-6">
              Our End-to-End Process
            </h2>
            <p className="text-gray-700 text-lg">
              From initial assessment to ongoing support, we ensure a seamless transition to sustainable energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Energy Audit</h3>
              <p className="text-gray-700 mb-4">
                For businesses looking to reduce electricity bills while staying connected to the grid.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Comprehensive energy assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Consumption pattern analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Cost-saving opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">System Design</h3>
              <p className="text-gray-700 mb-4">
                For businesses that need backup power alongside solar energy generation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Custom solution design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Supercapacitor integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Backup power planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Sun className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Installation</h3>
              <p className="text-gray-700 mb-4">
                For businesses operating in remote areas with no grid access.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Professional deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Minimal disruption</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Quality assurance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Operations & Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Ensure your business never experiences downtime due to power outages.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">24/7 monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Preventive maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Emergency support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="bg-gray-50 py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-semibold text-secondary mb-6">
                Comprehensive Energy Solutions
              </h2>
              <p className="text-gray-700 text-lg">
                Tailored solutions for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Solar Integration</h3>
                <p className="text-gray-700">
                  High-performance solar installations for significant energy cost reduction and sustainability.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Battery className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Energy Storage</h3>
                <p className="text-gray-700">
                  Advanced supercapacitor storage solutions for uninterrupted power supply and peak load management.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Smart Management</h3>
                <p className="text-gray-700">
                  Intelligent monitoring and control systems for optimal energy utilization and cost savings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green/10 via-transparent to-accent-gold/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" />

          <div className="container-custom py-24">
            <div className="relative">
              {/* Content Card */}
              <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-primary-green/20">
                {/* Top gradient bar */}
                <div className="h-2 bg-gradient-to-r from-primary-green via-primary to-accent-gold" />
                
                <div className="p-8 md:p-12">
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-green/10 border border-primary-green/20 mb-6">
                      <Building className="h-4 w-4 text-primary-green" />
                      <span className="text-sm font-medium text-primary-green">Business Energy Solutions</span>
                    </span>

                    <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
                      Ready to Transform Your Business Energy?
                    </h2>
                    
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                      Join leading businesses in the transition to sustainable, reliable energy. Our solutions are tailored to your specific needs.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                      <Link
                        href="/consultation"
                        className="bg-gradient-to-r from-primary-green to-primary hover:from-primary-green/90 hover:to-primary/90 text-white px-8 py-4 rounded-xl inline-flex items-center font-medium transition-all hover:shadow-lg hover:shadow-primary-green/20 group"
                      >
                        Schedule a Consultation
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
                        href="/about-us/customer-references"
                        className="bg-gradient-to-r from-accent-gold/20 to-primary-green/20 hover:from-accent-gold/30 hover:to-primary-green/30 border border-accent-gold/20 text-secondary px-8 py-4 rounded-xl inline-flex items-center font-medium transition-all backdrop-blur-sm"
                      >
                        View Success Stories
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom decorative wave */}
                <div className="relative h-16 bg-gradient-to-b from-transparent to-primary-green/5">
                  <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 54" preserveAspectRatio="none">
                    <path 
                      fill="currentColor" 
                      className="text-primary-green/10"
                      d="M0 0L60 5C120 10 240 20 360 25C480 30 600 30 720 27C840 24 960 18 1080 15C1200 12 1320 12 1380 12L1440 12V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V0Z"
                    />
                  </svg>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-green/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 
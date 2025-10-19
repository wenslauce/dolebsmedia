"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { Globe, Users, Award, CheckCircle, Building, Server, Star, ArrowRight, Code } from "lucide-react";

// Dynamically import Header and Footer to avoid SSR issues
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

// Define static animation variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const slideInFromRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInFromLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function WebDevelopmentHostingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[650px]">
          <Image
            src="/images/web-development.avif"
            alt="Web Development & Hosting Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div 
                className="max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <motion.span 
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-white">Web Development & Hosting</span>
                </motion.span>

                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Modern Websites and Reliable Hosting Solutions
                </motion.h1>
                
                <motion.p 
                  className="text-white/90 text-lg mb-8 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  We build responsive, fast, and SEO-optimized websites that drive engagement and conversions. Our comprehensive web development and hosting services ensure your digital presence is powerful, secure, and always available.
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <Link
                    href="/contact"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md inline-flex items-center font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <span>Get Quote</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                  <Link
                    href="#services"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-md inline-flex items-center font-medium transition-all"
                  >
                    <span>View Services</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Floating stats cards */}
          <motion.div 
            className="absolute -bottom-20 left-0 right-0 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary">100+</h3>
                      <p className="text-gray-600">Websites Built</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center">
                      <Server className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary">99.9%</h3>
                      <p className="text-gray-600">Uptime Guarantee</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary">24/7</h3>
                      <p className="text-gray-600">Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement Section */}
        <div className="container mx-auto px-4 py-32 mt-20" id="about">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeftVariant}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
                Powerful Digital Solutions for Your Business
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Our web development and hosting services combine cutting-edge technology with user-centered design to create websites that not only look great but also perform exceptionally. We ensure your digital presence is fast, secure, and optimized for success.
              </p>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">Modern Technology</h3>
                    <p className="text-gray-600">We use the latest web technologies and frameworks to build fast, responsive, and scalable websites.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">SEO Optimization</h3>
                    <p className="text-gray-600">We build websites with SEO best practices to ensure your site ranks well in search engines.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary">Reliable Hosting</h3>
                    <p className="text-gray-600">We provide secure, fast, and reliable hosting solutions with 24/7 support and monitoring.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="#services" 
                className="text-primary font-medium inline-flex items-center group"
              >
                <span>Explore our services</span>
                <svg 
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRightVariant}
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-image.avif"
                  alt="Web Development & Hosting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-medium text-secondary mb-2">Technical Excellence</h3>
                    <p className="text-gray-700">Our web development and hosting services combine modern technology with reliable infrastructure to deliver websites that perform exceptionally and drive business results.</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl z-[-1]" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-red-600/5 rounded-full blur-3xl z-[-1]" />
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-50 py-20" id="services">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
                <span className="text-sm font-medium text-primary">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">
                Web Development & Hosting Services
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                We offer comprehensive web development and hosting services designed to establish and maintain your digital presence
              </p>
            </motion.div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Web Development */}
              <motion.div 
                className="group relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/images/who-we-are.avif"
                    alt="Web Development"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold">Web Development</h3>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <span>Custom website development</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <span>E-commerce solutions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <span>Web application development</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Hosting & Maintenance */}
              <motion.div 
                className="group relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/images/about-hero.avif"
                    alt="Hosting & Maintenance"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Server className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-semibold">Hosting & Maintenance</h3>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-red-600/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-red-600"></div>
                          </div>
                          <span>Reliable web hosting</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-red-600/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-red-600"></div>
                          </div>
                          <span>Website maintenance and updates</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-red-600/20 flex-shrink-0 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-red-600"></div>
                          </div>
                          <span>Security monitoring and backups</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30" />
          
          <div className="container mx-auto px-4">
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
                    Ready to Build Your Digital Presence?
                  </h2>
                  <p className="text-white/90 mb-8 text-lg">
                    Let's discuss your web development and hosting needs and create a powerful digital solution that drives engagement and conversions.
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
                      href="/services"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg inline-flex items-center font-medium transition-all duration-300 backdrop-blur-sm"
                    >
                      View All Services
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
'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, DollarSign, Leaf, ZapIcon, Clock, Quote, ArrowRight } from "lucide-react";
import ClientsLogosSection from "@/components/ClientsLogosSection";

interface Testimonial {
  content: string;
  author: string;
  company?: string;
  date?: string;
  rating: number;
  image?: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface TestimonialsPageClientProps {
  additionalTestimonials: Testimonial[];
  benefits: Benefit[];
}

export default function TestimonialsPageClient({ 
  additionalTestimonials, 
  benefits 
}: TestimonialsPageClientProps) {
  
  // Get icon based on type
  const getIcon = (iconType: string) => {
    switch(iconType) {
      case 'saving':
        return <DollarSign className="h-6 w-6 text-primary" />;
      case 'eco':
        return <Leaf className="h-6 w-6 text-primary-green" />;
      case 'reliable':
        return <ZapIcon className="h-6 w-6 text-accent-gold" />;
      case 'setup':
        return <Clock className="h-6 w-6 text-secondary" />;
      default:
        return <Star className="h-6 w-6 text-primary" />;
    }
  };

  const allTestimonials = [
    {
      content: "Very professional from initial discussions through to commissioning of the system. The system has performed admirably and more than meets my requirements - even on cloudy days!",
      author: "Philip Waterer",
      rating: 5
    },
    {
      content: "We had our W. Giertsen solar installation for almost two years now and have nothing but praise for the system; indeed we have recommended it to many friends. Paul and his team did a brilliant job, we never notice power cuts and have never had any issues.",
      author: "Madeleine Wackernagel",
      rating: 5
    },
    {
      content: "We have invested in your solar power generation on all our farms; 40 percent of our energy is from these solar panels and we're saving huge amounts on our energy bill every month.",
      author: "Chris Kulei",
      company: "Sian Farms",
      rating: 5
    },
    {
      content: "The supercapacitor technology combined with solar panels has completely changed how we operate. Zero downtime, faster charging, and exceptional reliability.",
      author: "Robert Njeri",
      company: "Green Solutions Kenya",
      rating: 5
    },
    {
      content: "After comparing multiple options, this solar solution was by far the best investment. ROI has been outstanding, and the maintenance team has been excellent.",
      author: "Sarah Odhiambo",
      company: "Nairobi Restaurant Group",
      rating: 5
    },
    {
      content: "The installation process was quick and professional. The system has been working flawlessly for over a year now, even during the rainy season.",
      author: "Daniel Kimani",
      rating: 5
    },
    ...additionalTestimonials
  ];

  return (
    <div className="pt-0 pb-16">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/images/testimonials-hero.avif"
          alt="Customer Testimonials"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
          <div className="container-custom">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                Why Our Customers Trust Giertsen Energy
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Our mission is clear: to deliver clean, reliable, and affordable energy solutions that create real impact. But our true success is reflected in the lives we transform.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container-custom py-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            From energy-independent homes to innovative businesses embracing sustainability, our customers' journeys with W. Giertsen Energy Solutions highlight the power of renewable energy. Explore how we are driving a greener, more resilient future—one project at a time.
          </p>
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={benefit.title}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {getIcon(benefit.icon)}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Success Stories */}
      <div className="container-custom py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
            Customer Success Stories
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Discover how our solutions have transformed energy consumption for businesses and homeowners across the region
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 9) * 0.1 }}
            >
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent-gold fill-accent-gold" />
                ))}
              </div>
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10 rotate-180" />
                <p className="text-gray-700 relative z-10">
                  {testimonial.content}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="font-semibold text-secondary">
                  {testimonial.author}
                </p>
                {testimonial.company && (
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                )}
                {testimonial.date && (
                  <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Client Logos Section */}
      <ClientsLogosSection />

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-green/10 via-transparent to-accent-gold/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" />

        <div className="container-custom py-24">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Content Card */}
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-primary-green/20">
              {/* Top gradient bar */}
              <div className="h-2 bg-gradient-to-r from-primary-green via-primary to-accent-gold" />
              
              <div className="p-8 md:p-12">
                <div className="text-center">
                  <motion.span 
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-green/10 border border-primary-green/20 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Star className="h-4 w-4 text-primary-green" />
                    <span className="text-sm font-medium text-primary-green">Join Our Satisfied Customers</span>
                  </motion.span>

                  <motion.h2 
                    className="text-3xl md:text-4xl font-semibold text-secondary mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Ready to Experience the Difference?
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Join hundreds of satisfied customers who have transformed their energy consumption with our solar solutions. Start your journey to energy independence today.
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      href="/consultation"
                      className="bg-gradient-to-r from-primary-green to-primary hover:from-primary-green/90 hover:to-primary/90 text-white px-8 py-4 rounded-xl inline-flex items-center font-medium transition-all hover:shadow-lg hover:shadow-primary-green/20 group"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link
                      href="/solutions"
                      className="bg-gradient-to-r from-accent-gold/20 to-primary-green/20 hover:from-accent-gold/30 hover:to-primary-green/30 border border-accent-gold/20 text-secondary px-8 py-4 rounded-xl inline-flex items-center font-medium transition-all backdrop-blur-sm"
                    >
                      Explore Solutions
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
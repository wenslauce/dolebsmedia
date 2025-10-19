'use client';

import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialsSection";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProjectCard {
  title: string;
  specs: string;
  type: string;
  gridType: string;
  previous: string;
  image: string;
  location: string;
}

interface CustomerReferencesClientProps {
  projects: ProjectCard[];
  keyFeatures: string[];
}

export default function CustomerReferencesClient({ projects, keyFeatures }: CustomerReferencesClientProps) {
  return (
    <div className="pt-0 pb-16">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/images/references-hero.avif"
          alt="Customer References & Success Stories"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
          <div className="container-custom">
            <div className="max-w-xl">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Customer References
              </motion.h1>
              <motion.p 
                className="text-white/80 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Success stories that demonstrate our expertise in sustainable energy solutions
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container-custom py-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
            Explore Some of Our Projects
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Our team has successfully commissioned over 300 solar projects in Africa since 2015. 
            These projects range from residential systems to commercial and industrial systems for 
            clientele in the UN, the private and public sectors among others.
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {keyFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary/20 transition-all duration-300"
            >
              <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {project.location}
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Capacity:</span> {project.specs}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Type:</span> {project.type}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Grid:</span> {project.gridType}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Previous:</span> {project.previous}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-secondary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Impact in Numbers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "300+", label: "Projects Completed" },
              { value: "75%", label: "Average Energy Savings" },
              { value: "100K+", label: "Tons CO₂ Saved" },
              { value: "5+", label: "Years of Excellence" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:border-primary/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <div className="container-custom py-16">
        <motion.div 
          className="relative p-10 md:p-16 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-green/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-transparent to-accent-gold/5 rounded-full blur-3xl opacity-30" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to Start Your Energy Project?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join our growing list of satisfied customers and start your journey towards sustainable energy today.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/90 text-secondary px-8 py-4 rounded-lg font-medium transition-all group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
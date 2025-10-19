"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ArrowUpRight } from "lucide-react";

export function WhoWeAreSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative w-full py-16 md:py-28 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 -right-20 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-primary/5 to-accent-gold/5 blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-accent-gold/5 to-primary/5 blur-3xl opacity-30" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[30rem]">
              <Image 
                src="/images/who-we-are.avif" 
                alt="Dolebs Media team" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex flex-col">
            <motion.div 
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 w-fit"
              style={{ backgroundColor: '#E31E2405', borderColor: '#E31E2410' }}
            >
              <Zap className="h-4 w-4" style={{ color: '#E31E24' }} />
              <span className="text-sm font-medium text-secondary">Who We Are</span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6"
            >
              Bringing your vision to life through <span style={{ color: '#E31E24' }}>exceptional imagery</span>
            </motion.h2>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 text-gray-600 mb-8"
            >
              <p>
                At Dolebs Media Ltd, we are passionate about bringing your vision to life through exceptional imagery and videography. Specializing in high-quality commercial photography and videography, we cater to a wide range of needs, from dynamic portrait sessions and detailed product showcases to comprehensive event coverage.
              </p>
              <p>
                Our mission is to capture the essence of your brand with unparalleled creativity and professionalism. Whether you need stunning product photography, compelling corporate videos, or memorable event documentation, we deliver results that exceed expectations and help your business stand out in today's competitive market.
              </p>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 group"
                style={{ backgroundColor: '#E31E24' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C41E3A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E31E24'}
              >
                Start Your Project
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a 
                href="/services" 
                className="inline-flex items-center gap-2 font-medium group"
                style={{ color: '#E31E24' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C41E3A'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#E31E24'}
              >
                View Our Services
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection; 
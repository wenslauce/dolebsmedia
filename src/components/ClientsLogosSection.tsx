"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building, CheckCircle } from "lucide-react";

interface ClientLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function ClientsLogosSection() {
  const clientLogos: ClientLogo[] = [
    {
      src: "/images/clients/soroi-popup-logo.avif",
      alt: "Soroi",
      width: 180,
      height: 60
    },
    {
      src: "/images/clients/nis-logo-1024x153.avif",
      alt: "NIS",
      width: 180,
      height: 60
    },
    {
      src: "/images/clients/Youth-as-agents-of-Community-Development-United-Nations-Development-Programme.avif",
      alt: "United Nations Development Programme",
      width: 180,
      height: 60
    },
    
    {
      src: "/images/clients/wildergroup.avif",
      alt: "Wilder Group",
      width: 180,
      height: 60
    },
    {
      src: "/images/clients/open.graph_.logo_.avif",
      alt: "Open Graph",
      width: 180,
      height: 60
    },
    {
      src: "/images/clients/images.avif",
      alt: "Client",
      width: 180,
      height: 60
    },
    {
      src: "/images/clients/870fc1ad-10a0-4f64-9773-940b5a0f5139.avif",
      alt: "Client",
      width: 180,
      height: 60
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl opacity-50" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Building className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary">Trusted By Our Customers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6">Partners Who Trust Us</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            We're proud to work with some of the most respected organizations across Kenya and beyond.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            <span className="text-lg md:text-xl font-semibold">
              <span className="text-primary">300+</span> Projects Completed
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            <span className="text-lg md:text-xl font-semibold">
              <span className="text-primary">300+</span> Happy Clients
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            <span className="text-lg md:text-xl font-semibold">
              <span className="text-primary">50+</span> Years of Excellence
            </span>
          </div>
        </motion.div>

        {/* Marquee container */}
        <div className="relative w-full overflow-hidden py-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-white after:to-transparent">
          {/* Single marquee (left to right) */}
          <div className="flex animate-marquee space-x-12 py-8">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={`logo-${index}`} 
                className="relative flex-shrink-0 rounded-xl bg-white p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 h-28 w-52 flex items-center justify-center group"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsLogosSection; 
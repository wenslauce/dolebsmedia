"use client";

import { motion } from "framer-motion";
import { Users, Heart } from "lucide-react";

export default function HowWeWorkSection() {
  return (
    <div className="container-custom py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/5 border border-red-600/10 mb-6"
        >
          <Users className="h-4 w-4 text-red-600" />
          <span className="text-sm font-medium text-secondary">Our Approach</span>
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Approach
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600"></div>
        </motion.h2>

        <motion.p 
          className="text-gray-600 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          We foster a collaborative environment where every team member contributes their unique skills and insights. By working closely together, we create cohesive and impactful visual content that captures your brand's essence and engages your audience effectively.
        </motion.p>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-red-600/10 flex items-center justify-center">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
        </div>
        
        <p className="text-gray-700 text-lg text-center leading-relaxed">
          Our team's commitment to creativity, professionalism, and client satisfaction drives everything we do. We believe in building lasting partnerships through transparent communication, innovative solutions, and exceptional results that exceed your expectations.
        </p>
      </motion.div>
    </div>
  );
} 
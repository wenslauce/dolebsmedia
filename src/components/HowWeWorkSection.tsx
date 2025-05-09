"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, FileSearch, Handshake, Truck, Wrench, BookOpen, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Initial Consultation",
    description: "We begin by understanding your energy needs, operational context, and site conditions.",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />
  },
  {
    title: "Site Assessment & Technical Design",
    description: "Our team conducts a site visit (where possible) or reviews site-specific data to create a custom solar solution tailored to your environment and usage requirements.",
    icon: <FileSearch className="h-6 w-6 text-primary" />
  },
  {
    title: "Proposal & Agreement",
    description: "We present a detailed technical and financial proposal, along with system specifications and delivery timelines.",
    icon: <Handshake className="h-6 w-6 text-primary" />
  },
  {
    title: "Procurement & Logistics",
    description: "With operations based in Nairobi and international supply networks, we handle equipment sourcing and transport — whether local delivery or regional deployment to hard-to-reach areas.",
    icon: <Truck className="h-6 w-6 text-primary" />
  },
  {
    title: "Installation & Commissioning",
    description: "Our trained technicians and trusted partners install and commission the system, ensuring full functionality and safety.",
    icon: <Wrench className="h-6 w-6 text-primary" />
  },
  {
    title: "Training & Support",
    description: "We provide basic user training and ongoing technical support to ensure proper system usage, maintenance, and sustainability.",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  }
];

export default function HowWeWorkSection() {
  return (
    <div className="container-custom py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6"
        >
          <ArrowRight className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-secondary">Our Process</span>
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How We Work
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-accent-gold"></div>
        </motion.h2>

        <motion.p 
          className="text-gray-600 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          At W. Giertsen Energy Solutions, we follow a practical, step-by-step approach to ensure that every solar project — whether humanitarian, commercial, or institutional — is delivered efficiently, safely, and with long-term performance in mind.
        </motion.p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transform -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="group bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>

              <motion.div 
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {step.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <ArrowRight className="h-6 w-6 text-primary/40" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="mt-20 text-center max-w-3xl mx-auto bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-gray-600 text-lg">
          This workflow allows us to deliver high-quality energy solutions — on time, on budget, and built for long-term performance in even the most demanding conditions.
        </p>
      </motion.div>
    </div>
  );
} 
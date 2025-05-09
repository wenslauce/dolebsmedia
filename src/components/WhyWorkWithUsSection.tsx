"use client";

import React from "react";
import { motion } from "framer-motion";
import { BatteryCharging, Zap, Award, Clock, ShieldCheck, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  accentColor: string;
}

const FeatureCard = ({ title, description, icon, index, accentColor }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex flex-col h-full"
    >
      <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 h-full">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-transparent via-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-700" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-transparent via-transparent to-accent-gold/5 group-hover:to-accent-gold/10 transition-all duration-700" />
        </div>

        <div className="relative flex flex-col z-10 h-full">
          <div className={cn(
            "mb-4 p-3 rounded-xl w-fit",
            `bg-${accentColor}/10 text-${accentColor}`
          )}>
            {icon}
          </div>
          
          <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          
          <div className={cn(
            "mt-4 w-12 h-1 rounded-full bg-gradient-to-r",
            `from-${accentColor} to-${accentColor}/60`
          )} />
        </div>
      </div>
    </motion.div>
  );
};

export function WhyWorkWithUsSection() {
  const features = [
    {
      title: "Rapid Deployment Advantage",
      description: "With full stock maintained in Nairobi, we deploy complete systems within days, not months - no waiting for overseas shipments.",
      icon: <Zap size={24} />,
      accentColor: "primary"
    },
    {
      title: "Expert Local Support",
      description: "24-hour response time with Kenya's most experienced solar team, providing peace of mind and minimizing costly downtime.",
      icon: <ShieldCheck size={24} />,
      accentColor: "accent-gold"
    },
    {
      title: "Proven Across Sectors",
      description: "Transforming energy reliability for Kenya's hospitality industry, religious facilities, and residential communities with specialized solutions.",
      icon: <Award size={24} />,
      accentColor: "primary-green"
    },
    {
      title: "Tested in Extreme Conditions",
      description: "Successfully deployed high-voltage systems in challenging environments like South Sudan for ICRC, demonstrating our technology's exceptional durability.",
      icon: <Settings size={24} />,
      accentColor: "primary"
    },
    {
      title: "Real Performance Data",
      description: "Our supercapacitor systems reduce generator runtime by up to 85% - Mara Bush Camp went from 7 hours daily generator use to just 1 hour or none at all.",
      icon: <BatteryCharging size={24} />,
      accentColor: "accent-gold"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-gold/5 to-transparent rounded-full blur-3xl opacity-60" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary">Why Work With Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6">Powering Kenya's Future, Together</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Choose W. Giertsen for solar solutions with proven results and exceptional reliability across Kenya.
          </p>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithUsSection; 
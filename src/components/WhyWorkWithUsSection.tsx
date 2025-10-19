"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Award, Star, Users, Camera, Heart } from "lucide-react";
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
      <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-600/5 hover:border-red-600/30 h-full">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-transparent via-transparent to-red-600/5 group-hover:to-red-600/10 transition-all duration-700" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-transparent via-transparent to-red-600/5 group-hover:to-red-600/10 transition-all duration-700" />
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
      title: "Creativity",
      description: "We approach every project with a fresh perspective, ensuring unique and visually striking results that stand out. Our creative team brings innovative ideas and artistic vision to every assignment.",
      icon: <Palette size={24} />,
      accentColor: "red-600"
    },
    {
      title: "Professionalism",
      description: "Our team is dedicated to providing a seamless experience, from initial consultation to final delivery, with attention to detail and respect for deadlines. We maintain the highest standards of professional conduct.",
      icon: <Award size={24} />,
      accentColor: "red-600"
    },
    {
      title: "Quality",
      description: "Utilizing state-of-the-art equipment and techniques, we produce high-resolution images and videos that meet the highest standards of quality. Every project receives meticulous attention to detail.",
      icon: <Star size={24} />,
      accentColor: "red-600"
    },
    {
      title: "Customer-Centric Approach",
      description: "We work closely with our clients to understand their needs and deliver tailored solutions that exceed expectations. Your vision becomes our mission, and your success is our priority.",
      icon: <Users size={24} />,
      accentColor: "red-600"
    },
    {
      title: "Cutting-Edge Technology",
      description: "We utilize the latest equipment and technology to capture and produce high-resolution images and videos. This commitment to staying at the forefront of industry advancements allows us to deliver visually stunning and technically superior content.",
      icon: <Camera size={24} />,
      accentColor: "red-600"
    },
    {
      title: "Passion for Excellence",
      description: "Our passion for visual storytelling drives us to continually push the boundaries of creativity and innovation. We are dedicated to delivering work that not only meets but exceeds your expectations, leaving a lasting impression on your audience.",
      icon: <Heart size={24} />,
      accentColor: "red-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-600/5 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-600/5 to-transparent rounded-full blur-3xl opacity-60" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/5 border border-red-600/10 mb-6">
            <Award className="h-4 w-4 text-red-600" />
            <span className="text-sm font-medium text-secondary">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6">Excellence in Every Frame</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Choose Dolebs Media for creative solutions that transform your brand and captivate your audience with exceptional quality and innovative approach.
          </p>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-600 rounded-full mx-auto" />
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
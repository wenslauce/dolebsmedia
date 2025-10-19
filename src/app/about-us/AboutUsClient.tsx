'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Building, Award, History, Palette, Lightbulb, Briefcase, Star, Users } from "lucide-react";

interface ValueProps {
  title: string;
  description: string;
  icon: string;
}

interface AboutUsClientProps {
  coreValues: ValueProps[];
}

export default function AboutUsClient({
  coreValues
}: AboutUsClientProps) {
  return (
    <div className="pt-0 pb-16">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/images/about-hero.avif"
          alt="About Dolebs Media"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
          <div className="container-custom">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
                <Building className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">Creative Excellence</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                Bringing Your Vision to Life
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Exceptional imagery and videography that elevates your brand
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Philosophy Section */}
      <div className="bg-gradient-to-b from-white to-primary/5 py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <History className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-secondary">Our Mission</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
                Passionate about Creative Excellence
              </h2>
              <p className="text-gray-700 mb-6">
                At Dolebs Media Ltd, we are passionate about bringing your vision to life through exceptional imagery and videography. Specializing in high-quality commercial photography and videography, we cater to a wide range of needs, from dynamic portrait sessions and detailed product showcases to comprehensive event coverage.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to capture the essence of your brand with unparalleled creativity and professionalism.
              </p>
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-secondary mb-3">Our Philosophy</h3>
                <p className="text-gray-700">
                  At Dolebs Media Ltd, we believe that great visuals have the power to elevate brands and tell compelling stories. Our approach combines technical expertise with artistic vision, ensuring that every project is executed with excellence and creativity.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/legacy-1.avif"
                  alt="Historical W. Giertsen Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/legacy-2.avif"
                  alt="Modern Solar Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/legacy-3.avif"
                  alt="W. Giertsen Through the Years"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gradient-to-br from-accent-gold/5 via-white to-primary/5 py-24">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-700 text-lg">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div 
                key={value.title}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {value.icon === "Palette" && <Palette className="w-7 h-7 text-primary" />}
                  {value.icon === "Award" && <Award className="w-7 h-7 text-primary" />}
                  {value.icon === "Lightbulb" && <Lightbulb className="w-7 h-7 text-primary" />}
                  {value.icon === "Users" && <Users className="w-7 h-7 text-primary" />}
                  {value.icon === "Briefcase" && <Briefcase className="w-7 h-7 text-primary" />}
                  {value.icon === "Star" && <Star className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
} 
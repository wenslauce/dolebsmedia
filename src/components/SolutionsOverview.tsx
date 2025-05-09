"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Building, Home, CheckSquare, WrenchIcon, ArrowUpRight, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SolutionCardProps {
  imageSrc: string;
  title: string;
  href: string;
  description?: string;
  index: number;
  icon: React.ReactNode;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}

const SolutionCard = ({
  imageSrc,
  title,
  href,
  description,
  index,
  icon,
  isHovered,
  onHover,
}: SolutionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative h-full"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <Link
        href={href}
        className={cn(
          "group relative block h-full overflow-hidden rounded-2xl border transition-all duration-300",
          isHovered 
            ? "border-primary/30 shadow-lg shadow-primary/10 z-20" 
            : "border-gray-200 shadow-sm bg-white z-10"
        )}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-white/95 dark:bg-white/10 block"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>

        {/* Background Image - Only visible when not hovered */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-500",
          isHovered ? "opacity-0" : "opacity-100"
        )}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col h-full p-6 z-10">
          <div className={cn(
            "flex items-center gap-3 mb-4",
            isHovered ? "text-primary" : "text-white"
          )}>
            <div className={cn(
              "p-2 rounded-xl transition-colors",
              isHovered ? "bg-primary/10" : "bg-white/10"
            )}>
              {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          
          <div className="min-h-[100px] flex items-start">
            <AnimatePresence>
              {isHovered && description && (
                <motion.p 
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-auto pt-6 flex items-center gap-2">
            <span className={cn(
              "text-sm font-medium transition-all duration-300",
              isHovered ? "text-primary" : "text-white"
            )}>
              Explore Solution
            </span>
            <motion.div
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isHovered ? (
                <ArrowUpRight size={18} className="text-primary" />
              ) : (
                <ArrowRight size={18} className="text-white" />
              )}
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const SolutionsOverview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const solutions = [
    {
      imageSrc: "/images/supercapacitor.avif",
      title: "Supercapacitor Energy Storage",
      href: "/solutions/supercapacitor-energy-storage",
      description: "Advanced energy storage solutions for maximizing your renewable energy efficiency. Our supercapacitors offer longer lifespans, faster charging, and greater durability than traditional batteries.",
      icon: <Zap size={20} />
    },
    {
      imageSrc: "/images/stima-kit.avif",
      title: "Residential Solutions",
      href: "/solutions/residential-solutions",
      description: "Solar power systems designed specifically for homes and residential applications. Enjoy energy independence and reduced electricity bills with our custom residential installations.",
      icon: <Home size={20} />
    },
    {
      imageSrc: "/images/solar-panels.avif",
      title: "Commercial Solutions",
      href: "/solutions/commercial-solutions",
      description: "Customized energy solutions to reduce costs and improve sustainability for businesses. Our commercial systems are scalable, reliable, and engineered for maximum ROI.",
      icon: <Building size={20} />
    },
    {
      imageSrc: "/images/humanitarian-hero.avif",
      title: "Humanitarian Solutions",
      href: "/solutions/humanitarian-solutions",
      description: "Reliable solar solutions for humanitarian operations worldwide. Supporting refugee camps, health clinics, and emergency coordination hubs with sustainable energy solutions.",
      icon: <Heart size={20} />
    },
    {
      imageSrc: "/images/operations.avif",
      title: "Operations & Maintenance",
      href: "/solutions/solar-operations-maintenance",
      description: "Expert solar maintenance services provided by our team of certified engineers and energy auditors. Maximize your investment with our comprehensive monitoring, maintenance, and optimization services.",
      icon: <WrenchIcon size={20} />
    }
  ];

  return (
    <section className="py-16 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl opacity-50" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary">Our Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6">Clean Energy Solutions for Growth</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Cut your energy costs with solar power that pays for itself.
          Generate your electricity, reduce monthly bills, and protect your business from rising energy costs.
           Our simple process gets you powered by sunshine with no hassle.
          </p>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.href}
              imageSrc={solution.imageSrc}
              title={solution.title}
              href={solution.href}
              description={solution.description}
              icon={solution.icon}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={setHoveredIndex}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link 
            href="/consultation" 
            className="inline-flex items-center gap-2 text-white bg-primary hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-all duration-300 group"
          >
            Request Energy Consultation
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsOverview;

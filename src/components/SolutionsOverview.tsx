"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Camera, Video, MessageSquare, Megaphone, Palette, Globe, ArrowUpRight } from "lucide-react";
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
            ? "border-red-600/30 shadow-lg shadow-red-600/10 z-20" 
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
            isHovered ? "text-red-600" : "text-white"
          )}>
            <div className={cn(
              "p-2 rounded-xl transition-colors",
              isHovered ? "bg-red-600/10" : "bg-white/10"
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
              isHovered ? "text-red-600" : "text-white"
            )}>
              Explore Solution
            </span>
            <motion.div
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isHovered ? (
                <ArrowUpRight size={18} className="text-red-600" />
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
      imageSrc: "/images/photography.avif",
      title: "Photography",
      href: "/services/photography",
      description: "Professional photography that captures your brand's essence and tells your story. From product shots to corporate portraits, we create stunning visuals that resonate with your audience and elevate your brand presence.",
      icon: <Camera size={20} />
    },
    {
      imageSrc: "/images/videography.avif",
      title: "Videography",
      href: "/services/videography",
      description: "Compelling video content that engages audiences and drives results. Our cinematic approach brings your brand to life through storytelling, promotional videos, and dynamic content that converts viewers into customers.",
      icon: <Video size={20} />
    },
    {
      imageSrc: "/images/communication.avif",
      title: "Communication",
      href: "/services/communications",
      description: "Strategic communication solutions that amplify your message effectively. We craft compelling narratives, manage your brand voice, and ensure your message reaches the right audience at the right time.",
      icon: <MessageSquare size={20} />
    },
    {
      imageSrc: "/images/marketing-pr.avif",
      title: "Marketing & PR",
      href: "/services/marketing-pr",
      description: "Comprehensive marketing and public relations to boost your visibility. From campaign strategy to media relations, we help you build brand awareness and establish thought leadership in your industry.",
      icon: <Megaphone size={20} />
    },
    {
      imageSrc: "/images/graphic-design.avif",
      title: "Graphic Designing",
      href: "/services/graphic-designing",
      description: "Creative visual designs that make your brand stand out from the crowd. Our innovative designs capture attention, communicate your values, and create memorable brand experiences across all touchpoints.",
      icon: <Palette size={20} />
    },
    {
      imageSrc: "/images/web-development.avif",
      title: "Web Development & Hosting",
      href: "/services/web-development-hosting",
      description: "Modern websites and reliable hosting solutions for your digital presence. We build responsive, fast-loading websites that convert visitors into customers, backed by secure and scalable hosting infrastructure.",
      icon: <Globe size={20} />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: '#E31E2405', borderColor: '#E31E2410' }}>
            <Camera className="h-4 w-4" style={{ color: '#E31E24' }} />
            <span className="text-sm font-medium text-secondary">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6">Creative Solutions for Your Brand</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Transform your brand with our comprehensive creative services. From stunning photography and compelling videos to strategic communication and modern web development, we deliver results that elevate your business and engage your audience.
          </p>
          <div className="mt-6 h-1 w-20 rounded-full mx-auto" style={{ background: 'linear-gradient(to right, #E31E24, #E31E24)' }} />
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
            href="/contact" 
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 group"
            style={{ backgroundColor: '#E31E24' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C41E3A'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E31E24'}
          >
            Start Your Creative Project
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsOverview;

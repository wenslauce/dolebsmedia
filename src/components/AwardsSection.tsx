"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Star, Trophy, User, X } from "lucide-react";
import { useState } from "react";

interface AwardLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
  year?: string;
  badgeText?: string;
  isPersonal?: boolean;
  recipient?: string;
}

export function AwardsSection() {
  const [selectedAward, setSelectedAward] = useState<AwardLogo | null>(null);
  
  const openModal = (award: AwardLogo) => {
    setSelectedAward(award);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setSelectedAward(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  const awards: AwardLogo[] = [
    {
      src: "/images/awards/Solar Quater-Best off Grid Project.png",
      alt: "Best Off-Grid Solar Project",
      width: 414,
      height: 585,
      description: "Innovation & Reliability in Off-Grid Solar Solutions",
      year: "2025",
      badgeText: "Solar Quarter Business Excellence Award"
    },
    {
      src: "/images/awards/Solar Company of the Year Energy Storage.png",
      alt: "Solar Company of the Year",
      width: 414,
      height: 585,
      description: "Excellence in Energy Storage Solutions",
      year: "2025",
      badgeText: "Solar Quarter Business Excellence Award"
    },
    {
      src: "/images/awards/Paul Njoroge Ngugi-Excellence in Solar Project Execution..png",
      alt: "Excellence in Solar Project Execution",
      width: 414,
      height: 585,
      description: "Outstanding Achievement in Project Implementation",
      year: "2025",
      badgeText: "Individual Excellence Award",
      isPersonal: true,
      recipient: "Paul Njoroge Ngugi"
    },
    {
      src: "/images/awards/AFSIA_solar_awards.png",
      alt: "AFSIA Solar Award",
      width: 280,
      height: 120,
      description: "Commercial & Industrial (C&I) Solar Project of the Year",
      year: "2023",
      badgeText: "1.7MWp grid-tied system for Tea & Flower industry in Kenya"
    },
    {
      src: "/images/awards/un_images_MasterbrandLogotype_solid_blue_RGB-1024x302.png",
      alt: "Member since 2017",
      width: 280,
      height: 120,
      description: "Annual re-certification process",
      year: "2024",
      badgeText: "Certificate"
    },
    {
      src: "/images/awards/solarquater.avif",
      alt: "Technology and Innovation Excellence Award",
      width: 280,
      height: 120,
      description: "Best Innovation in Sustainable Energy Storage Solutions",
      year: "2024",
      badgeText: "Award of Excellence"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl opacity-70" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary">Excellence Recognized</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6">Awards & Recognition</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Our commitment to innovation and excellence in renewable energy has earned us recognition from leading industry organizations.
          </p>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent-gold rounded-full mx-auto" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative flex flex-col items-center bg-white rounded-2xl p-8 shadow-md border border-gray-100 group hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-accent-gold fill-accent-gold" />
                ))}
              </div>
              
              <div 
                className="w-full h-48 relative flex items-center justify-center mb-6 p-4 cursor-pointer"
                onClick={() => openModal(award)}
              >
                <Image
                  src={award.src}
                  alt={award.alt}
                  width={award.width}
                  height={award.height}
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                  <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium">View Full Size</span>
                </div>
              </div>
              
              {award.year && (
                <div className="absolute -top-4 -left-4 bg-accent-gold/90 text-secondary font-bold rounded-full h-14 w-14 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {award.year}
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-secondary mb-2">{award.alt}</h3>
              <p className="text-gray-600 text-center">{award.description}</p>
              
              {award.isPersonal && award.recipient && (
                <div className="mt-4 flex items-center gap-2 text-primary-green">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{award.recipient}</span>
                </div>
              )}
              
              <div className="mt-6 flex gap-2">
                <Award className="text-primary/80 h-5 w-5" />
                <span className="text-sm text-primary/80 font-medium">{award.badgeText}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated band with scrolling award recognition text */}
        <div className="relative py-6 bg-primary/5 rounded-xl overflow-hidden my-10">
          <div className="animate-marquee flex gap-8 items-center whitespace-nowrap">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-primary/80" />
                <span className="text-secondary font-medium">Award-Winning Solar Solutions</span>
                <Star className="h-4 w-4 text-accent-gold fill-accent-gold" />
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-gray-700 max-w-2xl mx-auto">
            These accolades reflect our dedication to providing innovative, reliable, and sustainable energy solutions that transform lives and businesses across Kenya.
          </p>
        </motion.div>
      </div>
      
      {/* Full view modal */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="relative bg-white rounded-2xl p-4 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button 
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-md hover:bg-primary/10 transition-colors z-10"
                onClick={closeModal}
              >
                <X className="h-6 w-6 text-secondary" />
              </button>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-xl p-4 relative">
                  <Image
                    src={selectedAward.src}
                    alt={selectedAward.alt}
                    width={selectedAward.width * 2}
                    height={selectedAward.height * 2}
                    className="object-contain max-h-[60vh]"
                    priority
                  />
                  {selectedAward.year && (
                    <div className="absolute top-4 left-4 bg-accent-gold/90 text-secondary font-bold rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                      {selectedAward.year}
                    </div>
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">{selectedAward.alt}</h2>
                  <p className="text-gray-700 mb-6">{selectedAward.description}</p>
                  
                  {selectedAward.isPersonal && selectedAward.recipient && (
                    <div className="mb-4 flex items-center gap-2 text-primary-green">
                      <User className="h-5 w-5" />
                      <span className="font-medium">{selectedAward.recipient}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 bg-primary/5 p-4 rounded-lg">
                    <Award className="text-primary h-6 w-6" />
                    <div>
                      <p className="font-medium text-secondary">{selectedAward.badgeText}</p>
                      <p className="text-sm text-gray-600 mt-1">Recognized for excellence in solar energy solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AwardsSection; 
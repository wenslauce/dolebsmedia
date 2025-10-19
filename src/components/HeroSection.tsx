"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [videoBrightness, setVideoBrightness] = useState(1.0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isHoveredCta, setIsHoveredCta] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  // Enhanced parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  
  // Handle video initialization and playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleCanPlay = () => {
      setVideoLoaded(true);
      // Attempt to play the video
      video.play().catch(error => {
        console.error("Video play failed:", error);
      });
    };
    
    video.addEventListener('canplay', handleCanPlay);
    
    // Try to play video immediately in case it's already loaded
    if (video.readyState >= 3) {
      handleCanPlay();
    }
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);
  
  // Video brightness is now fixed at full brightness (1.0)
  // No need to adjust based on scroll
  
  // Handle scroll position for other effects
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ 
          y: backgroundY,
          scale: backgroundScale,
        }}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Improved fallback image shown until video loads */}
          {!videoLoaded && (
            <div className="absolute inset-0 bg-secondary/90 animate-pulse flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="object-cover object-center w-full h-full"
            style={{
              filter: `brightness(1)`,
              opacity: videoLoaded ? 1 : 0,
              transition: "opacity 0.8s ease-in-out"
            }}
          >
            <source src="/video/dolebsloop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      {/* Enhanced Gradient Overlays with animated behavior */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-secondary/70 z-10"
        animate={{
          opacity: [0.6, 0.65, 0.6],
          background: [
            "linear-gradient(to bottom, rgba(23, 37, 84, 0.3), rgba(23, 37, 84, 0.7))",
            "linear-gradient(to bottom, rgba(23, 37, 84, 0.35), rgba(23, 37, 84, 0.7))",
            "linear-gradient(to bottom, rgba(23, 37, 84, 0.3), rgba(23, 37, 84, 0.7))"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Enhanced decorative glow effects */}
      <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-green/20 rounded-full blur-3xl opacity-20"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl opacity-20"
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1.05, 1, 1.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        />
      </div>

      {/* Enhanced Glassmorphism decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <motion.div 
          className="absolute top-1/4 -left-20 w-40 h-40 border border-white/10 rounded-full bg-white/5 backdrop-blur-md"
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            x: [-20, -15, -20],
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-60 h-60 border border-white/10 rounded-full bg-white/5 backdrop-blur-md"
          initial={{ opacity: 0, x: 100 }}
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            x: [-10, -20, -10],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0
          }}
        />
      </div>

      {/* New Content Layout - Dolebs Studio Style */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <div className="w-full h-full relative">
          {/* Brand Name - Bottom Left */}
          <motion.div 
            className="absolute bottom-20 left-8 md:left-16 z-40"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-white">
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Dolebs
              </motion.h1>
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-light opacity-80 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Studio
              </motion.h2>
            </div>
          </motion.div>

          {/* Contact Card - Mid Right */}
          <motion.div 
            className="absolute top-1/2 right-8 md:right-16 transform -translate-y-1/2 z-40"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/30 max-w-sm relative overflow-hidden">
              {/* Liquid glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-white/10 rounded-2xl"></div>
              {/* Glass reflection effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              {/* Content container */}
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  {/* Profile Picture - Man with reddish hair holding plant */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/40">
                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center relative">
                      {/* Simplified representation of man with plant */}
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-amber-600/20 mb-1"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/60 absolute -bottom-1 -right-1"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-xs font-medium text-white/80 uppercase tracking-wide">Creative Director</p>
                    <h3 className="text-lg font-bold text-white">Director Mark</h3>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">LET'S TALK</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Marketing Tagline - Bottom Right */}
          <motion.div 
            className="absolute bottom-20 right-8 md:right-16 z-40 max-w-md text-right"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="text-white space-y-1">
              <p className="text-lg font-semibold">No cookie-cutter websites. No fluff.</p>
              <p className="text-lg font-medium">Just real tools and smart strategies to grow your</p>
              <p className="text-lg font-medium">business and elevate your brand.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

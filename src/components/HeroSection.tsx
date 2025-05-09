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
            <source src="/video/giertsenloop.mp4" type="video/mp4" />
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

      {/* Enhanced Content with improved animations */}
      <motion.div 
        className="container-custom relative z-30 mt-16 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Harnessing the Sun,<br />
          Energizing Kenya. 
          <motion.span 
            className="inline-block ml-2"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            ☀️
          </motion.span><br />
          <span className="text-white/90 bg-gradient-to-r from-white to-accent-gold bg-clip-text text-transparent">Revolutionizing Green Energy Solutions.</span>
        </motion.h1>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHoveredCta(true)}
            onHoverEnd={() => setIsHoveredCta(false)}
            className="relative overflow-hidden rounded-md"
          >
            <Link
              href="/contact"
              className="group relative flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-4 rounded-md font-medium transition-all duration-300 overflow-hidden z-10"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-accent-gold to-accent-gold/90 z-0"
                initial={{ x: '-100%' }}
                animate={{ x: isHoveredCta ? 0 : '-100%' }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="relative z-10"
                initial={{ x: 0 }}
                whileHover={{ x: -4 }}
                transition={{ duration: 0.3 }}
              >
                Get Quote
              </motion.span>
              <motion.div
                className="relative z-10"
                initial={{ x: 0, opacity: 1 }}
                whileHover={{ x: 4, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/images/arrow-icon.svg" alt="Arrow" width={20} height={20} />
              </motion.div>
            </Link>
            <motion.div 
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-green to-accent-gold opacity-30 blur-lg"
              animate={{ opacity: isHoveredCta ? [0.3, 0.6, 0.3] : 0 }}
              transition={{ duration: 1.5, repeat: isHoveredCta ? Infinity : 0 }}
            />
          </motion.div>

          <motion.div 
            className="hidden md:block text-white text-lg backdrop-blur-sm bg-white/5 px-5 py-3 rounded-lg border border-white/10 relative overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0"
              initial={{ x: '-100%' }}
              animate={{ 
                x: ['100%', '-100%']
              }}
              transition={{ 
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            Scalable, smart solar for residential and commercial success.
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-20 md:mt-28"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Solar Power With <span className="text-accent-gold relative">
              Advanced Supercapacitor Storage
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent-gold/50"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
              />
            </span>
          </h2>

          <div className="flex justify-center mt-8">
            <motion.button
              onClick={() => {
                const statsSection = document.querySelector(".section-wrapper:nth-child(3)");
                if (statsSection) {
                  statsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-white flex flex-col items-center gap-1 hover:text-accent-gold transition-colors"
              whileHover={{ y: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span>Scroll</span>
              <motion.div
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-0 right-0 text-center text-white/70 text-sm">
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

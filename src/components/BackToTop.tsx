"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial check on component mount
    if (window.scrollY > 300) {
      setIsVisible(true);
    }

    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", toggleVisibility);

    // Force a check after a short delay to ensure proper initialization
    const timer = setTimeout(() => {
      toggleVisibility();
    }, 500);

    // Clean up the event listener and timer on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] p-4 rounded-full bg-primary shadow-xl hover:bg-primary/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border-2 border-white"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;

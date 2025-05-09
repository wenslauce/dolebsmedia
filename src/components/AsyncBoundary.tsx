"use client";

import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import ErrorBoundary from "./ErrorBoundary";

interface AsyncBoundaryProps {
  children: ReactNode;
  errorFallback?: ReactNode;
  loadingFallback?: ReactNode;
}

/**
 * AsyncBoundary combines ErrorBoundary and Suspense to handle both error and loading states.
 * Provides a clean way to handle async operations with proper error handling.
 */
const AsyncBoundary: React.FC<AsyncBoundaryProps> = ({
  children,
  errorFallback,
  loadingFallback
}) => {
  // Default loading fallback with glassmorphism styling
  const defaultLoadingFallback = (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[300px] w-full flex items-center justify-center"
    >
      <div className="relative p-6 rounded-xl overflow-hidden">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-secondary/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg" />
        
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-gold/5 opacity-30" />
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Loading spinner */}
          <div className="relative w-16 h-16 mb-4">
            {/* Outer spinner */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-t-white/10 border-r-white/10 border-b-white/10 border-l-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner spinner */}
            <motion.div
              className="absolute inset-3 rounded-full border-2 border-t-white/10 border-r-accent-gold border-b-white/10 border-l-white/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Center dot */}
            <motion.div
              className="absolute inset-[30%] rounded-full bg-white/30 backdrop-blur-md"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <motion.p 
            className="text-white/80 font-medium"
            animate={{ 
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading...
          </motion.p>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-30"
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={loadingFallback || defaultLoadingFallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary; 
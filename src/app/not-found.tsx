'use client';

import { motion } from 'framer-motion';
import { Search, Home, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="relative p-8 rounded-xl overflow-hidden">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-secondary/70 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg" />
          
          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-gold/10 opacity-30" />
          
          {/* Top light reflection */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <Image 
              src="/images/logo.png" 
              alt="WGES" 
              width={180} 
              height={60} 
              className="mb-8" 
              priority 
            />
            
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="mb-6 p-4 rounded-full bg-accent-gold/20 text-accent-gold"
            >
              <Search size={40} />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              404
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-white mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Page Not Found
            </motion.h2>
            
            <motion.p 
              className="text-white/80 max-w-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
              >
                <Link href="/">
                  <Home size={16} />
                  Go Home
                </Link>
              </Button>
              
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Go Back
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <motion.div 
          className="fixed -bottom-20 -left-20 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl opacity-30 z-0"
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="fixed -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30 z-0"
          animate={{ 
            opacity: [0.15, 0.25, 0.15],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </main>
  );
} 
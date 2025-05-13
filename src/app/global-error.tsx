'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-secondary min-h-screen flex items-center justify-center p-4">
        <main className="w-full max-w-2xl">
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
                alt="W. Giertsen Energy Solutions" 
                width={180} 
                height={60} 
                className="mb-8" 
                priority 
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="mb-6 p-4 rounded-full bg-red-500/20 text-red-500"
              >
                <AlertTriangle size={40} />
              </motion.div>
              
              <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Application Error
              </h1>
              
              <p className="text-white/80 max-w-lg mb-6">
                We apologize, but something went wrong with the application. Our team has been notified of this issue.
              </p>
              
              {process.env.NODE_ENV === 'development' && (
                <div className="w-full mb-8 mt-2">
                  <div className="bg-black/20 rounded-lg p-4 text-left overflow-hidden text-sm">
                    <h3 className="text-white/90 font-medium mb-2">
                      Error Details (Development Only)
                    </h3>
                    <p className="font-mono text-xs text-red-400">
                      {error.message || 'Unknown error'}
                    </p>
                    {error.stack && (
                      <details className="mt-2">
                        <summary className="cursor-pointer text-white/70 select-none">
                          Stack Trace
                        </summary>
                        <pre className="text-xs text-white/60 mt-2 whitespace-pre-wrap overflow-x-auto max-h-[200px]">
                          {error.stack}
                        </pre>
                      </details>
                    )}
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={reset}
                  className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
                >
                  <RefreshCw size={16} />
                  Try Again
                </Button>
                
                <Button
                  onClick={() => window.location.href = '/'}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2"
                >
                  <Home size={16} />
                  Go Home
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <motion.div 
            className="fixed -bottom-20 -left-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl opacity-30 z-0"
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
        </main>
      </body>
    </html>
  );
} 
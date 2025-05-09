"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): { hasError: boolean; error: Error } {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo
    });
    
    // Log error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // If a custom fallback is provided, use it
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI with glassmorphism styling
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-[300px] flex items-center justify-center p-6"
        >
          <div className="relative max-w-md w-full p-8 rounded-xl overflow-hidden">
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-secondary/70 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg" />
            
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-gold/10 opacity-30" />
            
            {/* Top light reflection */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Content container */}
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center">
                {/* Icon with pulsing animation */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "easeInOut"
                  }}
                  className="mb-4 p-3 rounded-full bg-red-500/20 text-red-500"
                >
                  <AlertTriangle size={32} />
                </motion.div>
                
                <h2 className="text-xl md:text-2xl font-medium text-white mb-3">
                  Something went wrong
                </h2>
                
                <p className="text-white/80 mb-4">
                  We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
                </p>
                
                {/* Error details in expandable section */}
                {process.env.NODE_ENV === "development" && this.state.error && (
                  <div className="w-full mt-4 mb-6">
                    <details className="bg-black/20 rounded-lg p-3 text-left overflow-auto max-h-[200px] text-sm">
                      <summary className="text-white/90 font-medium cursor-pointer select-none">
                        Error Details (Development Only)
                      </summary>
                      <div className="mt-2 text-white/70 font-mono text-xs overflow-x-auto">
                        <p className="font-semibold text-red-400">{this.state.error?.toString()}</p>
                        <pre className="mt-2 whitespace-pre-wrap">
                          {this.state.errorInfo?.componentStack}
                        </pre>
                      </div>
                    </details>
                  </div>
                )}
                
                <div className="flex gap-3 mt-2">
                  <Button 
                    onClick={this.handleReset} 
                    className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
                  >
                    <RefreshCw size={16} />
                    Try Again
                  </Button>
                  
                  <Button 
                    onClick={() => window.location.href = '/'}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Go Home
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl opacity-40"
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Loader2, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }
    
    setStatus("loading");
    setMessage("");
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      setMessage("Thank you for subscribing! We'll be in touch soon.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 transform -translate-y-1/2" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl opacity-50 transform translate-y-1/3" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative elements inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl opacity-50 transform -translate-x-1/2 translate-y-1/2" />
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <Bell className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-secondary">Stay Updated</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Get the latest updates, news, and special offers sent directly to your inbox.
              </p>
            </div>
            
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        disabled={status === "loading" || status === "success"}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={status === "loading" || status === "success"}
                      className={cn(
                        "px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all",
                        "hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20",
                        "flex items-center justify-center gap-2",
                        "disabled:opacity-70 disabled:cursor-not-allowed"
                      )}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                  
                  {/* Status message */}
                  <AnimatedMessage status={status} message={message} />
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By subscribing, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
              </form>
            </div>
            
            {/* Feature blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <FeatureBlock 
                title="Exclusive Content" 
                description="Get access to exclusive content and updates."
                icon={<DocumentIcon />}
              />
              <FeatureBlock 
                title="No Spam" 
                description="We only send emails that matter. Unsubscribe at any time."
                icon={<ShieldIcon />}
              />
              <FeatureBlock 
                title="Early Access" 
                description="Be the first to know about new products and special offers."
                icon={<ClockIcon />}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedMessage({ status, message }: { status: string; message: string }) {
  if (!message) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "mt-2 text-sm",
        status === "error" ? "text-red-500" : "text-green-600"
      )}
    >
      {message}
    </motion.div>
  );
}

function FeatureBlock({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="bg-primary/5 rounded-full p-3 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function DocumentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="M9 12l2 2 4-4"></path>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

export default NewsletterSection; 
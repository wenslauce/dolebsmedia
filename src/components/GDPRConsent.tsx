"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Shield, Cookie, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

type ConsentStatus = "pending" | "accepted" | "rejected" | "customized";
type CookieType = "necessary" | "functional" | "analytics" | "marketing";

interface CookieOption {
  id: CookieType;
  name: string;
  description: string;
  required: boolean;
  default: boolean;
}

export default function GDPRConsent() {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending");
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [cookieSettings, setCookieSettings] = useState<Record<CookieType, boolean>>({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false,
  });
  
  // Cookie options with descriptions
  const cookieOptions: CookieOption[] = [
    {
      id: "necessary",
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      required: true,
      default: true,
    },
    {
      id: "functional",
      name: "Functional Cookies",
      description: "These cookies enable personalized features and functionality.",
      required: false,
      default: true,
    },
    {
      id: "analytics",
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website.",
      required: false,
      default: false,
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites for marketing purposes.",
      required: false,
      default: false,
    },
  ];

  useEffect(() => {
    // Check if consent has been given before
    const savedConsent = localStorage.getItem("gdprConsent");
    
    if (savedConsent) {
      const { status, settings } = JSON.parse(savedConsent);
      setConsentStatus(status);
      if (settings) {
        setCookieSettings(settings);
      }
    } else {
      // Show the banner after a short delay if no consent has been given
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (status: ConsentStatus, settings = cookieSettings) => {
    localStorage.setItem(
      "gdprConsent",
      JSON.stringify({
        status,
        settings,
        timestamp: new Date().toISOString(),
      })
    );
    setConsentStatus(status);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setCookieSettings(allAccepted);
    saveConsent("accepted", allAccepted);
  };

  const handleRejectAll = () => {
    const minimal = {
      necessary: true, // Necessary cookies can't be rejected
      functional: false,
      analytics: false,
      marketing: false,
    };
    setCookieSettings(minimal);
    saveConsent("rejected", minimal);
  };

  const handleCustomize = () => {
    saveConsent("customized");
  };

  const toggleCookieSetting = (type: CookieType) => {
    if (type === "necessary") return; // Cannot toggle necessary cookies
    
    setCookieSettings((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const resetConsent = () => {
    localStorage.removeItem("gdprConsent");
    setConsentStatus("pending");
    setIsVisible(true);
  };

  if (consentStatus !== "pending" && !isVisible) {
    return (
      <button
        onClick={resetConsent}
        className="fixed bottom-4 left-4 z-50 bg-secondary text-white p-2 rounded-full shadow-lg hover:bg-primary transition-colors duration-300"
        aria-label="Cookie Settings"
      >
        <Cookie size={20} />
      </button>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 500 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white dark:bg-secondary-foreground rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Decorative top bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent-gold to-primary" />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-primary mr-2" />
                    <h2 className="text-xl font-semibold text-secondary dark:text-white">Privacy Preferences</h2>
                  </div>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="prose prose-sm dark:prose-invert max-w-none mb-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our Cookie Policy.
                  </p>
                </div>
                
                {/* Expandable settings */}
                <div className="mb-6">
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center justify-between w-full px-4 py-2.5 text-left bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-medium text-secondary dark:text-white">Cookie Settings</span>
                    {expanded ? (
                      <ChevronUp size={18} className="text-gray-500" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-500" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-4 px-1">
                          {cookieOptions.map((option) => (
                            <div key={option.id} className="flex items-start">
                              <div className="flex items-center h-5 mt-1">
                                <input
                                  id={`cookie-${option.id}`}
                                  name={`cookie-${option.id}`}
                                  type="checkbox"
                                  checked={cookieSettings[option.id]}
                                  onChange={() => toggleCookieSetting(option.id)}
                                  disabled={option.required}
                                  className={cn(
                                    "h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary focus:ring-offset-gray-100",
                                    option.required && "opacity-60 cursor-not-allowed"
                                  )}
                                />
                              </div>
                              <div className="ml-3">
                                <label
                                  htmlFor={`cookie-${option.id}`}
                                  className={cn(
                                    "font-medium text-gray-700 dark:text-gray-200",
                                    option.required && "cursor-not-allowed"
                                  )}
                                >
                                  {option.name}
                                  {option.required && (
                                    <span className="ml-2 text-xs text-primary">(Required)</span>
                                  )}
                                </label>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {option.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-end items-center mt-6">
                  <div className="flex-1 text-xs text-gray-500 dark:text-gray-400">
                    <Link href="/privacy-policy" className="underline hover:text-primary">
                      Privacy Policy
                    </Link>
                    {" • "}
                    <Link href="/cookie-policy" className="underline hover:text-primary">
                      Cookie Policy
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleRejectAll}
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Reject All
                    </button>
                    
                    <button
                      onClick={handleCustomize}
                      className="px-4 py-2 bg-white dark:bg-secondary text-secondary dark:text-white border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Save Preferences
                    </button>
                    
                    <button
                      onClick={handleAcceptAll}
                      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
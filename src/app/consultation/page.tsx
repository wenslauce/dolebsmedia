"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DateTimePicker from "@/components/DateTimePicker";
import { format } from "date-fns";
import { 
  MessageSquare, 
  Calendar, 
  CheckCircle, 
  Building, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Clock,
  Zap,
  Sun,
  Battery,
  Settings,
  Lightbulb,
  LineChart,
  Home,
  Factory,
  Tractor,
  Warehouse,
  Power,
  HelpCircle,
  Ban,
  Leaf,
  MapPin,
  Calendar as CalendarIcon,
  Send,
  ArrowRight
} from "lucide-react";
import ThankYouScreen from "@/components/ThankYouScreen";

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Type definitions
interface SolarSolutionType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface MotivationType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TimelineOption {
  id: string;
  title: string;
  description: string;
}

interface FormData {
  solutionType: string;
  monthlyCost: string;
  customAmount: string;
  motivations: string[];
  location: string;
  timeline: string;
  companyName: string;
  name: string;
  email: string;
  phone: string;
  scheduleConsultation: boolean;
  meetingType: string;
  meetingDate: string;
  meetingTime: string;
  selectedDateTime?: Date | null;
}

export default function ConsultationPage() {
  // Form state
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [testModeActive, setTestModeActive] = useState(false);
  const [testModeEmail, setTestModeEmail] = useState("");
  const [showThankYouScreen, setShowThankYouScreen] = useState(false);
  const [submittedFormData, setSubmittedFormData] = useState<any>(null);
  
  // Add useEffect to verify component mounting
  useEffect(() => {
    console.log('Consultation form component mounted');
  }, []);
  
  const [formData, setFormData] = useState<FormData>({
    solutionType: "",
    monthlyCost: "",
    customAmount: "",
    motivations: [],
    location: "",
    timeline: "",
    companyName: "",
    name: "",
    email: "",
    phone: "",
    scheduleConsultation: false,
    meetingType: "phone",
    meetingDate: "",
    meetingTime: ""
  });

  // Solar solution options
  const solarSolutionTypes: SolarSolutionType[] = [
    {
      id: "residential",
      title: "Residential Home Solar",
      description: "Power your home efficiently and reduce electricity bills.",
      icon: <Home className="h-6 w-6 text-primary" />
    },
    {
      id: "commercial",
      title: "Commercial Business Solar",
      description: "Keep your business running smoothly with clean energy.",
      icon: <Building className="h-6 w-6 text-primary-green" />
    },
    {
      id: "agricultural",
      title: "Agricultural Solar",
      description: "Power irrigation, storage, and farm operations sustainably.",
      icon: <Tractor className="h-6 w-6 text-accent-gold" />
    },
    {
      id: "industrial",
      title: "Industrial Solar Installation",
      description: "Maximize efficiency for large-scale operations.",
      icon: <Factory className="h-6 w-6 text-secondary" />
    },
    {
      id: "backup",
      title: "Solar Backup Power",
      description: "Stay prepared with uninterrupted energy storage.",
      icon: <Battery className="h-6 w-6 text-primary" />
    },
    {
      id: "unsure",
      title: "Not sure? I need guidance.",
      description: "Our experts will assist you in finding the right solution.",
      icon: <HelpCircle className="h-6 w-6 text-primary-green" />
    }
  ];

  // Monthly cost options
  const costOptions = [
    { id: "less-20k", label: "Less than 20,000 KES" },
    { id: "20k-50k", label: "20,000 - 50,000 KES" },
    { id: "50k-100k", label: "50,000 - 100,000 KES" },
    { id: "100k-500k", label: "100,000 - 500,000 KES" },
    { id: "over-500k", label: "Over 500,000 KES" },
    { id: "custom", label: "Specify amount" }
  ];

  // Motivations
  const motivationOptions: MotivationType[] = [
    {
      id: "bills",
      title: "Reducing electricity bills",
      description: "Save money with clean, renewable power.",
      icon: <div className="flex items-center justify-center w-6 h-6 text-primary font-semibold text-sm">KES</div>
    },
    {
      id: "independence",
      title: "Becoming energy independent",
      description: "Reduce reliance on the unstable grid.",
      icon: <Ban className="h-6 w-6 text-primary-green" />
    },
    {
      id: "backup",
      title: "Reliable power backup",
      description: "Ensure uninterrupted power, even during outages.",
      icon: <Power className="h-6 w-6 text-accent-gold" />
    },
    {
      id: "environment",
      title: "Environmental sustainability",
      description: "Contribute to a cleaner, greener future.",
      icon: <Leaf className="h-6 w-6 text-secondary" />
    },
    {
      id: "other",
      title: "Other reasons",
      description: "Tell us your specific motivation.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />
    }
  ];

  // Counties in Kenya
  const counties = [
    "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Uasin Gishu", 
    "Kiambu", "Machakos", "Kisii", "Nyeri", "Kakamega", 
    "Meru", "Kilifi", "Bungoma", "Kajiado", "Muranga", 
    "Trans Nzoia", "Laikipia", "Kericho", "Bomet", "Nyamira",
    "Siaya", "Nandi", "Turkana", "Busia", "Narok",
    "Makueni", "Kitui", "Embu", "Tharaka-Nithi", "Garissa",
    "Homabay", "Migori", "Kirinyaga", "Samburu", "West Pokot",
    "Taita Taveta", "Kwale", "Vihiga", "Baringo", "Elgeyo-Marakwet",
    "Nyandarua", "Tana River", "Marsabit", "Isiolo", "Mandera",
    "Wajir", "Lamu"
  ].sort();

  // Timeline options
  const timelineOptions: TimelineOption[] = [
    {
      id: "immediate",
      title: "Immediate (0-3 months)",
      description: "I'm ready to start now!"
    },
    {
      id: "soon",
      title: "Soon (3-6 months)",
      description: "Planning and budgeting for solar."
    },
    {
      id: "exploring",
      title: "Exploring options (6-12 months)",
      description: "Gathering information before deciding."
    },
    {
      id: "just-info",
      title: "Just gathering information",
      description: "Learning about solar for future consideration."
    }
  ];

  // Handle form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle checkbox changes for motivations
  const handleMotivationChange = (motivationId: string) => {
    setFormData(prev => {
      const motivations = [...prev.motivations];
      if (motivations.includes(motivationId)) {
        return { ...prev, motivations: motivations.filter(id => id !== motivationId) };
      } else {
        return { ...prev, motivations: [...motivations, motivationId] };
      }
    });
  };

  // Handle consultation scheduling toggle
  const handleConsultationToggle = (value: boolean) => {
    setFormData(prev => ({ ...prev, scheduleConsultation: value }));
  };

  // Handle solution type selection
  const handleSolutionTypeSelect = (solutionId: string) => {
    setFormData(prev => ({ ...prev, solutionType: solutionId }));
    setCurrentStep(2);
  };

  // Handle monthly cost selection
  const handleCostSelect = (costId: string) => {
    setFormData(prev => ({ ...prev, monthlyCost: costId }));
    setCurrentStep(3);
  };

  // Handle next step
  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 6));
  };

  // Handle previous step
  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Handle date/time changes
  const handleDateTimeChange = (date: Date | null) => {
    if (date) {
      setFormData(prev => ({
        ...prev,
        selectedDateTime: date,
        meetingDate: format(date, 'yyyy-MM-dd'),
        meetingTime: format(date, 'HH:mm')
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        selectedDateTime: null,
        meetingDate: '',
        meetingTime: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error and success states
    setSubmitError(false);
    setSubmitSuccess(false);
    
    // Validate form
    const errors = [];
    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.phone.trim()) errors.push("Phone number is required");
    if (!formData.solutionType) errors.push("Please select a solution type");
    if (!formData.location) errors.push("Please select your location");
    if (!formData.timeline) errors.push("Please select your timeline");
    if (formData.motivations.length === 0) errors.push("Please select at least one motivation");
    
    // Check date/time if consultation is scheduled
    if (formData.scheduleConsultation) {
      if (!formData.meetingDate) errors.push("Please select a consultation date");
      if (!formData.meetingTime) errors.push("Please select a consultation time");
    }
    
    if (errors.length > 0) {
      alert(`Please fix the following issues:\n${errors.join("\n")}`);
      return;
    }

    // Show loading state
    setSubmitting(true);

    try {
      console.log("Submitting form data:", formData);
      
      // Send form data to API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response from API:", data);

      if (!response.ok) {
        // Extract the specific error message if available
        const errorMessage = data.error || 'Failed to submit form';
        
        // Check for specific error types to provide better user feedback
        if (errorMessage.includes('API key is invalid')) {
          throw new Error('The email service is currently unavailable. Our team has been notified of this issue.');
        } else if (errorMessage.includes('not configured')) {
          throw new Error('The email service is not properly configured. Our team has been notified of this issue.');
        } else {
          throw new Error(errorMessage);
        }
      }

      // Check if we're in testing mode
      if (data.testMode) {
        setTestModeActive(true);
        setTestModeEmail(data.recipientEmail || "");
      }

      // Show success message
      setSubmitSuccess(true);
      
      // Save form data and show thank you screen
      setSubmittedFormData({...formData});
      setShowThankYouScreen(true);
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reset form and go back to first step
      setCurrentStep(1);
      setFormData({
        solutionType: "",
        monthlyCost: "",
        customAmount: "",
        motivations: [],
        location: "",
        timeline: "",
        companyName: "",
        name: "",
        email: "",
        phone: "",
        scheduleConsultation: false,
        meetingType: "phone",
        meetingDate: "",
        meetingTime: "",
        selectedDateTime: null
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
      
      // Display more detailed error if available
      if (error instanceof Error) {
        // Store the error message for display in the UI instead of using alert
        setErrorMessage(error.message || 'An unexpected error occurred. Please try again later.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/consultation-hero.avif"
            alt="Request a Solar Consultation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div 
                className="max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <motion.span 
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Sun className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-white">Solar Energy Consultation</span>
                </motion.span>

                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Power Your Future with Solar Energy
                </motion.h1>
                
                <motion.p 
                  className="text-white/90 text-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  Get a personalized solar solution tailored to your specific needs. Fill out our simple form below to get started.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="container mx-auto px-4 -mt-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">100%</h3>
                  <p className="text-gray-600">Clean Energy</p>
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center">
                  <div className="text-primary-green font-semibold">KES</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">75%</h3>
                  <p className="text-gray-600">Energy Bill Savings</p>
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center">
                  <Battery className="h-6 w-6 text-accent-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">24/7</h3>
                  <p className="text-gray-600">Energy Availability</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <div className="container mx-auto px-4 py-16 mt-10">
          {showThankYouScreen && submittedFormData && (
            <div className="container mx-auto px-4 py-8">
              <ThankYouScreen formData={submittedFormData} />
            </div>
          )}
          {!showThankYouScreen && (
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariant}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 overflow-hidden relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl z-0"></div>
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary-green/5 rounded-full blur-3xl z-0"></div>
                
                {/* Progress Steps */}
                <div className="relative z-10 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    {[1, 2, 3, 4, 5, 6].map((step) => (
                      <div key={step} className="flex flex-col items-center">
                        <div 
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mb-2 
                            ${currentStep >= step 
                              ? 'bg-primary text-white' 
                              : 'bg-gray-100 text-gray-400 border border-gray-300'}`}
                        >
                          {step}
                        </div>
                        <div className={`text-xs ${currentStep >= step ? 'text-primary font-medium' : 'text-gray-400'}`}>
                          Step {step}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative h-2 bg-gray-200 rounded-full mb-8">
                    <div 
                      className="absolute top-0 left-0 h-2 bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 6) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10">
                  {/* Step 1: Solar Solution Type */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-2">
                          What Type of Solar Solution Are You Interested In?
                        </h2>
                        <p className="text-gray-600">
                          Let's start with your energy goals! What type of solar system do you need?
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {solarSolutionTypes.map((solution) => (
                          <div
                            key={solution.id}
                            className={`p-6 rounded-xl border-2 transition-all cursor-pointer
                              ${formData.solutionType === solution.id
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                              }`}
                            onClick={() => handleSolutionTypeSelect(solution.id)}
                          >
                            <div className="flex gap-4 items-start">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                                ${formData.solutionType === solution.id
                                  ? 'bg-primary/20'
                                  : 'bg-gray-100'
                                }`}
                              >
                                {solution.icon}
                              </div>
                              <div>
                                <h3 className="text-lg font-medium text-secondary mb-1">{solution.title}</h3>
                                <p className="text-gray-600">{solution.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Monthly Electricity Cost */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-2">
                          What's Your Monthly Electricity Cost?
                        </h2>
                        <p className="text-gray-600">
                          Understanding your energy consumption helps us recommend the perfect solar system!
                        </p>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Building className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-medium text-secondary">Monthly Cost</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-3 mb-6">
                          {costOptions.map((option) => (
                            <div
                              key={option.id}
                              className={`p-4 rounded-lg border transition-all cursor-pointer
                                ${formData.monthlyCost === option.id
                                  ? 'border-primary bg-primary/5'
                                  : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                                }`}
                              onClick={() => handleCostSelect(option.id)}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                                  ${formData.monthlyCost === option.id
                                    ? 'border-primary'
                                    : 'border-gray-300'
                                  }`}
                                >
                                  {formData.monthlyCost === option.id && (
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                  )}
                                </div>
                                <span className="text-gray-800">{option.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {formData.monthlyCost === 'custom' && (
                          <div className="mb-6">
                            <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                              Specify your monthly cost (KES)
                            </label>
                            <input
                              type="number"
                              id="customAmount"
                              name="customAmount"
                              value={formData.customAmount}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 transition-all"
                              placeholder="Enter amount in KES"
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium flex items-center gap-2 hover:bg-gray-50 transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
                        >
                          Next
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Motivations */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-2">
                          What Motivates You to Explore Solar Solutions?
                        </h2>
                        <p className="text-gray-600">
                          What's your main reason for considering solar energy? (Select all that apply)
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {motivationOptions.map((motivation) => (
                          <div
                            key={motivation.id}
                            className={`p-5 rounded-xl border-2 transition-all cursor-pointer
                              ${formData.motivations.includes(motivation.id)
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                              }`}
                            onClick={() => handleMotivationChange(motivation.id)}
                          >
                            <div className="flex gap-4 items-start">
                              <div className={`w-6 h-6 rounded flex items-center justify-center border-2 mt-1
                                ${formData.motivations.includes(motivation.id)
                                  ? 'border-primary bg-primary'
                                  : 'border-gray-300'
                                }`}
                              >
                                {formData.motivations.includes(motivation.id) && (
                                  <CheckCircle className="h-4 w-4 text-white" />
                                )}
                              </div>
                              <div>
                                <h3 className="text-lg font-medium text-secondary mb-1">{motivation.title}</h3>
                                <p className="text-gray-600">{motivation.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium flex items-center gap-2 hover:bg-gray-50 transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
                        >
                          Next
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Location */}
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-2">
                          Where Is Your Property Located?
                        </h2>
                        <p className="text-gray-600">
                          We customize solar solutions based on your location. Where are you based?
                        </p>
                      </div>

                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-medium text-secondary">Select Your County</h3>
                        </div>

                        <div className="relative">
                          <select
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 transition-all appearance-none"
                            required
                          >
                            <option value="" disabled>Select your county</option>
                            {counties.map((county) => (
                              <option key={county} value={county}>{county}</option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium flex items-center gap-2 hover:bg-gray-50 transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={handleNextStep}
                          disabled={!formData.location}
                          className={`text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all
                            ${!formData.location 
                              ? 'bg-gray-300 cursor-not-allowed' 
                              : 'bg-primary hover:bg-primary/90'
                            }`}
                        >
                          Next
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Timeline */}
                  {currentStep === 5 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-2">
                          When Are You Looking to Implement Solar?
                        </h2>
                        <p className="text-gray-600">
                          Let's talk timelines! When do you plan to go solar?
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-8">
                        {timelineOptions.map((option) => (
                          <div
                            key={option.id}
                            className={`p-5 rounded-xl border-2 transition-all cursor-pointer
                              ${formData.timeline === option.id
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                              }`}
                            onClick={() => setFormData(prev => ({ ...prev, timeline: option.id }))}
                          >
                            <div className="flex gap-4 items-start">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1
                                ${formData.timeline === option.id
                                  ? 'border-primary'
                                  : 'border-gray-300'
                                }`}
                              >
                                {formData.timeline === option.id && (
                                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                                )}
                              </div>
                              <div>
                                <h3 className="text-lg font-medium text-secondary mb-1">{option.title}</h3>
                                <p className="text-gray-600">{option.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium flex items-center gap-2 hover:bg-gray-50 transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={handleNextStep}
                          disabled={!formData.timeline}
                          className={`text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all
                            ${!formData.timeline 
                              ? 'bg-gray-300 cursor-not-allowed' 
                              : 'bg-primary hover:bg-primary/90'
                            }`}
                        >
                          Next
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 6: Contact Information */}
                  {currentStep === 6 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {submitSuccess && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <p className="font-medium">Your consultation request has been submitted successfully!</p>
                          </div>
                          <p className="mt-2 text-sm">
                            {testModeActive ? (
                              <>
                                <strong>Testing Mode:</strong> Your email was sent to {testModeEmail} instead of your actual email address.
                                This is because we're currently in testing mode with Resend.
                              </>
                            ) : (
                              <>
                                Check your email for confirmation details. We're excited to help you with your solar journey!
                              </>
                            )}
                          </p>
                        </motion.div>
                      )}

                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                        >
                          <div className="flex items-center gap-3">
                            <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="font-medium">Something went wrong!</p>
                          </div>
                          <p className="mt-2 text-sm">
                            {errorMessage || "Please try again or contact us directly at info@dolebsmedia.co.ke"}
                          </p>
                        </motion.div>
                      )}

                      <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-2">
                          Contact Information
                        </h2>
                        <p className="text-gray-600">
                          Please share your details so we can provide a customized solar recommendation.
                        </p>
                      </div>

                      <div className="space-y-6 mb-8">
                        <div>
                          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                            Company/Organization Name (Optional)
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 transition-all"
                            placeholder="Your company or organization"
                          />
                        </div>

                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 transition-all"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 transition-all"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="flex">
                            <div className="bg-gray-100 px-4 py-3 rounded-l-lg border border-r-0 border-gray-300 text-gray-700 flex items-center">
                              🇰🇪 +254
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 transition-all"
                              placeholder="Phone number (digits only)"
                              required
                            />
                          </div>
                        </div>

                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                          <label className="flex items-start gap-3 cursor-pointer">
                            <div 
                              className={`w-6 h-6 rounded flex items-center justify-center border-2 flex-shrink-0 mt-0.5
                                ${formData.scheduleConsultation 
                                  ? 'border-primary bg-primary' 
                                  : 'border-gray-300'
                                }`}
                              onClick={() => handleConsultationToggle(!formData.scheduleConsultation)}
                            >
                              {formData.scheduleConsultation && (
                                <CheckCircle className="h-4 w-4 text-white" />
                              )}
                            </div>
                            <div>
                              <span className="font-medium text-gray-800">I'd like to schedule a consultation</span>
                              <p className="text-sm text-gray-600">Schedule a call or in-person meeting with our solar experts</p>
                            </div>
                          </label>
                        </div>

                        {/* Consultation scheduling options */}
                        {formData.scheduleConsultation && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-primary/5 p-6 rounded-xl border border-primary/20"
                          >
                            <h3 className="text-lg font-medium text-secondary mb-4 flex items-center gap-2">
                              <CalendarIcon className="h-5 w-5 text-primary" />
                              Schedule Your Consultation
                            </h3>
                            <p className="text-sm text-gray-600 mb-6">
                              Choose a date and time for your consultation with our solar experts.
                            </p>

                            <div className="space-y-6">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                  Meeting Type
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <label 
                                    className={`p-4 rounded-lg border transition-all cursor-pointer flex items-center gap-3
                                      ${formData.meetingType === 'phone'
                                        ? 'border-primary bg-white shadow-sm'
                                        : 'border-gray-200 bg-gray-50'
                                      }`}
                                  >
                                    <input
                                      type="radio"
                                      name="meetingType"
                                      value="phone"
                                      checked={formData.meetingType === 'phone'}
                                      onChange={handleInputChange}
                                      className="sr-only"
                                    />
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center
                                      ${formData.meetingType === 'phone'
                                        ? 'border-primary'
                                        : 'border-gray-300'
                                      }`}
                                    >
                                      {formData.meetingType === 'phone' && (
                                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                                      )}
                                    </div>
                                    <span className="text-gray-800">Phone Call</span>
                                  </label>

                                  <label 
                                    className={`p-4 rounded-lg border transition-all cursor-pointer flex items-center gap-3
                                      ${formData.meetingType === 'in-person'
                                        ? 'border-primary bg-white shadow-sm'
                                        : 'border-gray-200 bg-gray-50'
                                      }`}
                                  >
                                    <input
                                      type="radio"
                                      name="meetingType"
                                      value="in-person"
                                      checked={formData.meetingType === 'in-person'}
                                      onChange={handleInputChange}
                                      className="sr-only"
                                    />
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center
                                      ${formData.meetingType === 'in-person'
                                        ? 'border-primary'
                                        : 'border-gray-300'
                                      }`}
                                    >
                                      {formData.meetingType === 'in-person' && (
                                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                                      )}
                                    </div>
                                    <span className="text-gray-800">In-person at our office</span>
                                  </label>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label htmlFor="meetingDate" className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Date <span className="text-red-500">*</span>
                                  </label>
                                  <div>
                                    <DateTimePicker
                                      selectedDate={formData.selectedDateTime}
                                      onChange={handleDateTimeChange}
                                      minDate={new Date()}
                                      startTime="09:00"
                                      endTime="16:00"
                                      timeInterval={30}
                                    />
                                  </div>
                                </div>
                              </div>

                              <p className="text-xs text-gray-500 italic">
                                Note: Consultations are available Monday to Friday, 9:00 AM - 4:00 PM East African Time.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium flex items-center gap-2 hover:bg-gray-50 transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                          Previous
                        </button>
                        <button
                          type="submit"
                          disabled={submitting}
                          className={`relative bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 transition-all ${
                            submitting ? 'opacity-80' : ''
                          }`}
                        >
                          {submitting ? (
                            <>
                              <span className="flex items-center gap-2">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                              </span>
                            </>
                          ) : (
                            <>
                              <span>Submit Request</span>
                              <Send className="h-5 w-5" />
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-center text-sm text-gray-500 mt-6">
                        A calendar invitation will be sent to your email after submission.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          )}
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto px-4 py-20">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
              <span className="text-sm font-medium text-primary">Why Go Solar</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">
              The Benefits of Solar Energy
            </h2>
            <p className="text-gray-700">
              Discover how solar power can transform your energy consumption and save you money
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <div className="text-primary font-semibold text-lg">KES</div>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Financial Savings</h3>
              <p className="text-gray-700">
                Reduce your electricity bills by up to 75% with clean solar energy. Protect yourself from rising electricity costs and achieve a return on investment within 3-5 years.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center mb-6">
                <Power className="h-6 w-6 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Energy Independence</h3>
              <p className="text-gray-700">
                Never worry about power outages again. Our solar systems with battery backup provide reliable power 24/7, giving you complete energy independence.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center mb-6">
                <Leaf className="h-6 w-6 text-accent-gold" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Environmental Impact</h3>
              <p className="text-gray-700">
                Reduce your carbon footprint and contribute to a cleaner planet. Solar energy is clean, renewable, and helps combat climate change and local air pollution.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green/10 via-transparent to-accent-gold/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 py-24">
            <motion.div 
              className="max-w-4xl mx-auto relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Content Card */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-primary-green/20">
                {/* Top gradient bar */}
                <div className="h-2 bg-gradient-to-r from-primary-green via-primary to-accent-gold" />
                
                <div className="p-8 md:p-12">
                  <div className="text-center">
                    <motion.span 
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-green/10 border border-primary-green/20 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <Leaf className="h-4 w-4 text-primary-green" />
                      <span className="text-sm font-medium text-primary-green">Sustainable Energy Solutions</span>
                    </motion.span>

                    <motion.h2 
                      className="text-3xl md:text-4xl font-semibold text-secondary mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      Ready to Embrace Clean Energy?
                    </motion.h2>
                    
                    <motion.p 
                      className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      Fill out our consultation form and start your journey to energy independence today!
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap justify-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <a
                        href="#top"
                        className="bg-gradient-to-r from-primary-green to-primary hover:from-primary-green/90 hover:to-primary/90 text-white px-8 py-4 rounded-xl inline-flex items-center font-medium transition-all hover:shadow-lg hover:shadow-primary-green/20 group"
                      >
                        Get Your Solar Quote
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                      
                      <a
                        href="/about-us"
                        className="bg-gradient-to-r from-accent-gold/20 to-primary-green/20 hover:from-accent-gold/30 hover:to-primary-green/30 border border-accent-gold/20 text-secondary px-8 py-4 rounded-xl inline-flex items-center font-medium transition-all backdrop-blur-sm"
                      >
                        Learn More About Us
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom decorative wave */}
                <div className="relative h-16 bg-gradient-to-b from-transparent to-primary-green/5">
                  <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 54" preserveAspectRatio="none">
                    <path 
                      fill="currentColor" 
                      className="text-primary-green/10"
                      d="M0 0L60 5C120 10 240 20 360 25C480 30 600 30 720 27C840 24 960 18 1080 15C1200 12 1320 12 1380 12L1440 12V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V0Z"
                    />
                  </svg>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-green/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 
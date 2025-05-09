'use client';

import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertCircle, CheckCircle, ChevronLeft, Upload, Loader2 } from "lucide-react";

// Country codes for phone selection
const countryCodes = [
  { code: "+254", country: "KE" },
  { code: "+1", country: "US" },
  { code: "+44", country: "GB" },
  { code: "+49", country: "DE" },
  { code: "+255", country: "TZ" },
  { code: "+256", country: "UG" },
  { code: "+250", country: "RW" },
  { code: "+251", country: "ET" },
  { code: "+27", country: "ZA" },
];

// List of countries for dropdown
const countries = [
  "Kenya", 
  "Uganda", 
  "Tanzania", 
  "Ethiopia", 
  "Rwanda", 
  "South Africa", 
  "United States", 
  "United Kingdom", 
  "Germany", 
  "Other"
];

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  resumeFile: File | null;
  resumeFilename: string;
  resumeBase64: string;
}

export default function TalentPoolFormModal() {
  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [testModeActive, setTestModeActive] = useState(false);
  const [testModeEmail, setTestModeEmail] = useState("");
  
  // Form state
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+254",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "Kenya",
    resumeFile: null,
    resumeFilename: "",
    resumeBase64: ""
  });

  // Form validation
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle modal open/close
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
    
    // Reset form state after closing
    setTimeout(() => {
      setCurrentStep(1);
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phone: "",
        countryCode: "+254",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "Kenya",
        resumeFile: null,
        resumeFilename: "",
        resumeBase64: ""
      });
      setErrors({});
      setSubmitSuccess(false);
      setSubmitError("");
      setTestModeActive(false);
      setTestModeEmail("");
    }, 300);
  };
  
  // Close modal when clicking outside
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle file upload
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Validate file type
    const acceptedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!acceptedTypes.includes(file.type)) {
      setErrors(prev => ({ 
        ...prev, 
        resumeFile: "Please upload a PDF or Word document" 
      }));
      return;
    }
    
    // Validate file size (max 20MB)
    if (file.size > 20 * 1024 * 1024) {
      setErrors(prev => ({ 
        ...prev, 
        resumeFile: "File size must be less than 20MB" 
      }));
      return;
    }
    
    // Clear error
    if (errors.resumeFile) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.resumeFile;
        return newErrors;
      });
    }
    
    // Convert to base64 for API submission
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setFormData(prev => ({ 
          ...prev, 
          resumeFile: file,
          resumeFilename: file.name,
          resumeBase64: event.target?.result as string
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  // Trigger file input click
  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Form navigation
  const handleNext = () => {
    // Validate current step
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    }
    
    else if (currentStep === 2) {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{9,15}$/.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }
    
    else if (currentStep === 3) {
      if (!formData.address.trim()) newErrors.address = "Street address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.state.trim()) newErrors.state = "State/Province is required";
      if (!formData.zip.trim()) newErrors.zip = "Zip/Postal code is required";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // If validation passes, go to next step
    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate final step
    if (!formData.resumeFile) {
      setErrors({ resumeFile: "Please upload your CV/Resume" });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      const response = await fetch('/api/talent-pool', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }
      
      // Check if we're in testing mode
      if (data.testMode) {
        setTestModeActive(true);
        setTestModeEmail(data.recipientEmail || "");
      }
      
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };
  
  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.2 } }
  };

  // Step indicator component
  const StepIndicator = ({ currentStep, totalSteps }: { currentStep: number, totalSteps: number }) => (
    <div className="flex items-center justify-center space-x-2 mb-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div 
          key={index} 
          className={`h-2 rounded-full ${index < currentStep ? 'bg-primary w-8' : 'bg-gray-300 w-4'} transition-all duration-300`}
        />
      ))}
    </div>
  );

  // Error message component
  const ErrorMessage = ({ message }: { message: string }) => (
    <p className="text-red-500 text-sm mt-1 flex items-center">
      <AlertCircle className="w-3.5 h-3.5 mr-1.5" /> {message}
    </p>
  );

  return (
    <>
      {/* Modal trigger button */}
      <button
        onClick={openModal}
        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-all"
      >
        Join Our Talent Pool
      </button>
      
      {/* Modal backdrop */}
      <AnimatePresence>
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleOutsideClick}
          >
            {/* Modal content */}
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-secondary">Join Our Talent Pool</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Modal body */}
              <div className="px-6 py-6">
                {!submitSuccess ? (
                  <form onSubmit={handleSubmit}>
                    <StepIndicator currentStep={currentStep} totalSteps={4} />
                    
                    <AnimatePresence mode="wait">
                      {/* Step 1: Name */}
                      {currentStep === 1 && (
                        <motion.div
                          key="step1"
                          variants={stepVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <h4 className="text-lg font-medium text-secondary mb-6">What's your name?</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                First Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                                placeholder="Your first name"
                              />
                              {errors.firstName && <ErrorMessage message={errors.firstName} />}
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Middle Name (optional)
                              </label>
                              <input
                                type="text"
                                name="middleName"
                                value={formData.middleName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="Your middle name"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                                placeholder="Your last name"
                              />
                              {errors.lastName && <ErrorMessage message={errors.lastName} />}
                            </div>
                          </div>
                            
                          <div className="mt-8 flex justify-end">
                            <button
                              type="button"
                              onClick={handleNext}
                              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md font-medium transition-all"
                            >
                              Continue
                            </button>
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Step 2: Contact Information */}
                      {currentStep === 2 && (
                        <motion.div
                          key="step2"
                          variants={stepVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <h4 className="text-lg font-medium text-secondary mb-6">How can we contact you?</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                                placeholder="your.email@example.com"
                              />
                              {errors.email && <ErrorMessage message={errors.email} />}
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number <span className="text-red-500">*</span>
                              </label>
                              <div className="flex">
                                <div className="w-24 mr-2">
                                  <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                                  >
                                    {countryCodes.map((country) => (
                                      <option key={country.code} value={country.code}>
                                        {country.code} ({country.country})
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div className="flex-1">
                                  <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                                    placeholder="Phone number"
                                  />
                                </div>
                              </div>
                              {errors.phone && <ErrorMessage message={errors.phone} />}
                            </div>
                          </div>
                          
                          <div className="mt-8 flex justify-between">
                            <button
                              type="button"
                              onClick={handlePrev}
                              className="text-gray-600 hover:text-gray-800 flex items-center font-medium"
                            >
                              <ChevronLeft className="w-4 h-4 mr-1" /> Back
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md font-medium transition-all"
                            >
                              Continue
                            </button>
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Step 3: Location */}
                      {currentStep === 3 && (
                        <motion.div
                          key="step3"
                          variants={stepVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <h4 className="text-lg font-medium text-secondary mb-6">Where are you located?</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Address <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                                placeholder="Street address"
                              />
                              {errors.address && <ErrorMessage message={errors.address} />}
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                City <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                                placeholder="City"
                              />
                              {errors.city && <ErrorMessage message={errors.city} />}
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                State/Province <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                                placeholder="State/Province"
                              />
                              {errors.state && <ErrorMessage message={errors.state} />}
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Zip/Postal Code <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border ${errors.zip ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
                                placeholder="Zip/Postal code"
                              />
                              {errors.zip && <ErrorMessage message={errors.zip} />}
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Country
                              </label>
                              <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                              >
                                {countries.map((country) => (
                                  <option key={country} value={country}>
                                    {country}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          
                          <div className="mt-8 flex justify-between">
                            <button
                              type="button"
                              onClick={handlePrev}
                              className="text-gray-600 hover:text-gray-800 flex items-center font-medium"
                            >
                              <ChevronLeft className="w-4 h-4 mr-1" /> Back
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md font-medium transition-all"
                            >
                              Continue
                            </button>
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Step 4: Resume Upload */}
                      {currentStep === 4 && (
                        <motion.div
                          key="step4"
                          variants={stepVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <h4 className="text-lg font-medium text-secondary mb-6">Please share your CV with us</h4>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Upload your CV/Resume <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                              <input
                                ref={fileInputRef}
                                type="file"
                                name="resumeFile"
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                onChange={handleFileChange}
                              />
                              
                              <div 
                                onClick={handleFileButtonClick}
                                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                                  ${errors.resumeFile ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-primary/50 hover:bg-primary/5'}`}
                              >
                                {formData.resumeFile ? (
                                  <div className="flex flex-col items-center">
                                    <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
                                    <p className="text-sm font-medium text-gray-900">{formData.resumeFilename}</p>
                                    <p className="text-xs text-gray-500 mt-1">Click to change file</p>
                                  </div>
                                ) : (
                                  <div className="flex flex-col items-center">
                                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                                    <p className="text-sm font-medium text-gray-900">Click to upload your CV</p>
                                    <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (max 20 MB)</p>
                                  </div>
                                )}
                              </div>
                              
                              {errors.resumeFile && <ErrorMessage message={errors.resumeFile} />}
                            </div>
                          </div>
                          
                          {submitError && (
                            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                              <p className="text-red-600 text-sm flex items-center">
                                <AlertCircle className="w-4 h-4 mr-2" />
                                {submitError}
                              </p>
                            </div>
                          )}
                          
                          {testModeActive && (
                            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                              <p className="text-yellow-800 text-sm">
                                Test mode active: Emails will be sent to {testModeEmail} instead of actual recipients.
                              </p>
                            </div>
                          )}
                          
                          <div className="mt-8 flex justify-between">
                            <button
                              type="button"
                              onClick={handlePrev}
                              className="text-gray-600 hover:text-gray-800 flex items-center font-medium"
                            >
                              <ChevronLeft className="w-4 h-4 mr-1" /> Back
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-md font-medium transition-all disabled:opacity-70 flex items-center"
                            >
                              {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                              Submit Application
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-secondary mb-3">Application Submitted!</h4>
                    <p className="text-gray-600 mb-6">
                      Thank you for your interest in joining our team. We've received your application and will keep your information in our talent pool.
                    </p>
                    <button
                      onClick={closeModal}
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md font-medium transition-all"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
} 
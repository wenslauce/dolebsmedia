"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { submitServiceQuote, type ServiceQuoteData } from "@/app/actions/service-quote";

const serviceQuoteSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  serviceType: z.enum([
    "photography",
    "videography",
    "communications",
    "marketing-pr",
    "graphic-designing",
    "web-development-hosting"
  ]),
  projectDescription: z.string().min(10, "Please provide more details about your project"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

interface ServiceQuoteFormProps {
  serviceType: ServiceQuoteData["serviceType"];
  serviceName: string;
}

export function ServiceQuoteForm({ serviceType, serviceName }: ServiceQuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ServiceQuoteData>({
    resolver: zodResolver(serviceQuoteSchema),
    defaultValues: {
      serviceType: serviceType,
    },
  });

  const onSubmit = async (data: ServiceQuoteData) => {
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const result = await submitServiceQuote(data);
      setSubmitStatus({
        success: result.success,
        message: result.message,
      });

      if (result.success) {
        setIsSubmitted(true);
        reset({ serviceType });
        // Scroll to success message
        setTimeout(() => {
          document.getElementById('quote-form-status')?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }, 100);
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewQuote = () => {
    setIsSubmitted(false);
    setSubmitStatus({});
  };

  // Show success state
  if (isSubmitted && submitStatus.success) {
    return (
      <div className="text-center py-8" id="quote-form-status">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-secondary mb-4">
          Quote Request Sent Successfully!
        </h3>
        <p className="text-gray-700 mb-6 max-w-md mx-auto">
          Thank you for your interest in our {serviceName} services. We've received your quote request and will get back to you within 24 hours with a detailed proposal.
        </p>
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 mb-6 max-w-md mx-auto">
          <p className="text-sm text-gray-600">
            <strong className="text-secondary">What's Next?</strong><br />
            Our team is reviewing your requirements and preparing a customized quote. You'll receive an email confirmation shortly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={handleNewQuote}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Submit Another Quote
          </Button>
          <Link href="/services" className="inline-block">
            <Button variant="outline">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-secondary mb-2">
          Get a Quote for {serviceName}
        </h3>
        <p className="text-gray-600">
          Tell us about your project and we'll get back to you within 24 hours
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            {...register("firstName")}
            className={errors.firstName ? "border-red-500" : ""}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            {...register("lastName")}
            className={errors.lastName ? "border-red-500" : ""}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            className={errors.phone ? "border-red-500" : ""}
            placeholder="+254 700 000 000"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company (Optional)</Label>
        <Input
          id="company"
          {...register("company")}
          placeholder="Your company name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectDescription">Project Description *</Label>
        <Textarea
          id="projectDescription"
          rows={5}
          {...register("projectDescription")}
          className={errors.projectDescription ? "border-red-500" : ""}
          placeholder={`Tell us about your ${serviceName.toLowerCase()} project...`}
        />
        {errors.projectDescription && (
          <p className="text-sm text-red-500">{errors.projectDescription.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget (Optional)</Label>
          <Select onValueChange={(value) => setValue("budget", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-50k">Under KES 50,000</SelectItem>
              <SelectItem value="50k-100k">KES 50,000 - 100,000</SelectItem>
              <SelectItem value="100k-200k">KES 100,000 - 200,000</SelectItem>
              <SelectItem value="200k-500k">KES 200,000 - 500,000</SelectItem>
              <SelectItem value="500k-plus">KES 500,000+</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline (Optional)</Label>
          <Select onValueChange={(value) => setValue("timeline", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
              <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
              <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
              <SelectItem value="1-2-months">1-2 months</SelectItem>
              <SelectItem value="2-plus-months">2+ months</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {submitStatus.message && !submitStatus.success && (
        <Alert variant="destructive" id="quote-form-status" className="border-red-200 bg-red-50">
          <div className="flex items-start gap-3">
            <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
            <div>
              <AlertTitle className="text-red-900 font-semibold mb-1">
                Error Submitting Quote Request
              </AlertTitle>
              <AlertDescription className="text-red-800">
                {submitStatus.message}
              </AlertDescription>
            </div>
          </div>
        </Alert>
      )}

      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full bg-primary hover:bg-primary/90 text-white"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting Your Request...
          </>
        ) : (
          "Get Your Free Quote"
        )}
      </Button>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <p>We'll respond within 24 hours</p>
      </div>
    </form>
  );
}


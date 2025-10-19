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
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { submitContactForm, type ContactFormData } from "@/app/actions/contact";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
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
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const result = await submitContactForm(data);
      setSubmitStatus({
        success: result.success,
        message: result.message,
      });

      if (result.success) {
        setIsSubmitted(true);
        reset();
        // Scroll to success message
        setTimeout(() => {
          document.getElementById('contact-form-status')?.scrollIntoView({ 
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

  const handleNewMessage = () => {
    setIsSubmitted(false);
    setSubmitStatus({});
  };

  // Show success state
  if (isSubmitted && submitStatus.success) {
    return (
      <div className="text-center py-8" id="contact-form-status">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-secondary mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-700 mb-6 max-w-md mx-auto">
          Thank you for contacting Dolebs Media. We've received your message and will get back to you as soon as possible.
        </p>
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 mb-6 max-w-md mx-auto">
          <p className="text-sm text-gray-600">
            <strong className="text-secondary">What's Next?</strong><br />
            Our team will review your message and respond within 24 hours. You'll receive a confirmation email shortly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={handleNewMessage}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Send Another Message
          </Button>
          <Link href="/services" className="inline-block">
            <Button variant="outline">
              View Our Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            {...register("firstName")}
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            {...register("lastName")}
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone (Optional)</Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          {...register("subject")}
          className={errors.subject ? "border-red-500" : ""}
        />
        {errors.subject && (
          <p className="text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          {...register("message")}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {submitStatus.message && !submitStatus.success && (
        <Alert variant="destructive" id="contact-form-status" className="border-red-200 bg-red-50">
          <div className="flex items-start gap-3">
            <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
            <div>
              <AlertTitle className="text-red-900 font-semibold mb-1">
                Error Sending Message
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
            Sending Your Message...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <p>We'll respond within 24 hours</p>
      </div>
    </form>
  );
} 
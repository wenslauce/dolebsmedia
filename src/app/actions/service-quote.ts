"use server";

import { Resend } from "resend";
import { ServiceQuoteEmailTemplate } from "@/components/service-quote-email-template";
import { z } from "zod";

// Define the service quote form schema
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

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export type ServiceQuoteData = z.infer<typeof serviceQuoteSchema>;

const serviceNames: Record<string, string> = {
  "photography": "Photography",
  "videography": "Videography",
  "communications": "Communications",
  "marketing-pr": "Marketing & PR",
  "graphic-designing": "Graphic Designing",
  "web-development-hosting": "Web Development & Hosting"
};

export async function submitServiceQuote(formData: ServiceQuoteData) {
  try {
    // Validate form data
    const validatedData = serviceQuoteSchema.parse(formData);
    const serviceName = serviceNames[validatedData.serviceType];

    // Send email to company
    await resend.emails.send({
      from: "Dolebs Media Services <onboarding@resend.dev>",
      to: "info@dolebsmedia.co.ke",
      replyTo: validatedData.email,
      subject: `New ${serviceName} Quote Request from ${validatedData.firstName} ${validatedData.lastName}`,
      react: ServiceQuoteEmailTemplate({ formData: validatedData, isCompanyEmail: true, serviceName }),
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: "Dolebs Media <info@dolebsmedia.co.ke>",
      to: validatedData.email,
      subject: `Your ${serviceName} Quote Request - Dolebs Media`,
      react: ServiceQuoteEmailTemplate({ formData: validatedData, serviceName }),
    });

    return { success: true, message: "Your quote request has been submitted successfully! We'll get back to you within 24 hours." };
  } catch (error) {
    console.error("Error submitting service quote:", error);
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: "Please check your form inputs and try again.",
        errors: error.errors 
      };
    }
    
    return { 
      success: false, 
      message: "There was an error submitting your request. Please try again later." 
    };
  }
}


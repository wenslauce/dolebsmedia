"use server";

import { Resend } from "resend";
import { ContactEmailTemplate } from "@/components/contact-email-template";
import { z } from "zod";

// Define the contact form schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData);

    // Send email to company
    await resend.emails.send({
      from: "W. Giertsen Energy Solutions <energy@giertsen.no>",
      to: "energy@giertsen.no",
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      react: ContactEmailTemplate({ formData: validatedData, isCompanyEmail: true }),
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "W. Giertsen Energy Solutions <energy@giertsen.no>",
      to: validatedData.email,
      subject: "Thank you for contacting W. Giertsen Energy Solutions",
      react: ContactEmailTemplate({ formData: validatedData }),
    });

    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: "Please check your form inputs and try again.",
        errors: error.errors 
      };
    }
    
    return { 
      success: false, 
      message: "There was an error sending your message. Please try again later." 
    };
  }
} 
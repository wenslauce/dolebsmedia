import { type NextRequest, NextResponse } from "next/server";
import { TalentPoolEmailTemplate } from "@/components/talent-pool-email-template";
import { checkEnvironmentVariables } from "@/lib/env-check";
import { 
  getResendInstance, 
  getValidRecipientEmail, 
  logTestingModeInfo,
  VERIFIED_EMAIL
} from "@/lib/email-utils";

// Run environment check
checkEnvironmentVariables();

export async function POST(request: NextRequest) {
  try {
    console.log("Received talent pool application request");

    // Get Resend instance
    const resend = getResendInstance();
    if (!resend) {
      return NextResponse.json({ 
        error: "Email service is not configured. Please set a valid RESEND_API_KEY in your .env file."
      }, { status: 500 });
    }

    // Parse the request body
    let formData;
    try {
      formData = await request.json();
    } catch (error) {
      console.error("Error parsing request body:", error);
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    console.log("Sending application email to company");
    
    // Get company email recipients (taking into account testing limitations)
    const companyIntendedEmail = "energy_careers@giertsen.no";
    const companyEmail = getValidRecipientEmail(companyIntendedEmail);
    
    // Log info about testing mode if applicable
    logTestingModeInfo(companyIntendedEmail, "Talent pool application email");

    // Prepare the resume file if uploaded
    let attachments = [];
    if (formData.resumeBase64 && formData.resumeFilename) {
      try {
        // Remove the base64 prefix
        const base64Data = formData.resumeBase64.split(';base64,').pop();
        
        attachments.push({
          filename: formData.resumeFilename,
          content: base64Data,
        });
      } catch (error) {
        console.error("Error preparing resume attachment:", error);
      }
    }

    // Send email to company
    try {
      const { data, error } = await resend.emails.send({
        from: "Dolebs Media Talent Pool <onboarding@resend.dev>",
        to: [companyEmail],
        replyTo: formData.email,
        subject: "New Talent Pool Application",
        react: TalentPoolEmailTemplate({
          formData,
          isCompanyEmail: true
        }),
        text: `New talent pool application from ${formData.firstName} ${formData.lastName}. Contact: ${formData.email}, ${formData.phone}`,
        attachments: attachments.length > 0 ? attachments : undefined,
      });

      if (error) {
        console.error("Error sending company email:", error);
        return NextResponse.json({ error: `Failed to send company email: ${error.message}` }, { status: 500 });
      }

      console.log("Company email sent successfully");
    } catch (error) {
      console.error("Exception sending company email:", error);
      return NextResponse.json({ error: `Failed to send email: ${error instanceof Error ? error.message : String(error)}` }, { status: 500 });
    }

    console.log("Sending confirmation email to applicant");
    
    // Get customer email recipient (taking into account testing limitations)
    const applicantIntendedEmail = formData.email;
    const applicantEmail = getValidRecipientEmail(applicantIntendedEmail);
    
    // Log info about testing mode if applicable
    logTestingModeInfo(applicantIntendedEmail, "Applicant confirmation email");

    // Send confirmation email to applicant
    try {
      await resend.emails.send({
        from: "Dolebs Media <onboarding@resend.dev>",
        to: [applicantEmail],
        subject: "Your Talent Pool Application Confirmation",
        react: TalentPoolEmailTemplate({
          formData,
          isCompanyEmail: false
        }),
        text: `Thank you for your application to our talent pool! We've received your submission and will keep your information on file for future opportunities.`,
      });

      console.log("Applicant confirmation email sent successfully");
    } catch (error) {
      console.error("Error sending applicant email:", error);
      // Continue even if applicant email fails
    }

    // Add note about testing mode in the response
    const isTestMode = applicantEmail !== applicantIntendedEmail;
    
    return NextResponse.json({ 
      success: true,
      testMode: isTestMode,
      recipientEmail: isTestMode ? VERIFIED_EMAIL : undefined
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 },
    );
  }
} 
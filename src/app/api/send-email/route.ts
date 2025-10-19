import { type NextRequest, NextResponse } from "next/server"
import { SurveyEmailTemplate } from "@/components/email-template"
import { generateGoogleCalendarLink } from "@/lib/calendar-utils"
import { checkEnvironmentVariables } from "@/lib/env-check"
import { 
  getResendInstance, 
  getValidRecipientEmail, 
  logTestingModeInfo,
  VERIFIED_EMAIL
} from "@/lib/email-utils"

// Run environment check
checkEnvironmentVariables()

export async function POST(request: NextRequest) {
  try {
    console.log("Received email request")

    // Get Resend instance
    const resend = getResendInstance();
    if (!resend) {
      return NextResponse.json({ 
        error: "Email service is not configured. Please set a valid RESEND_API_KEY in your .env file."
      }, { status: 500 })
    }

    // Parse the request body
    let formData
    try {
      formData = await request.json()
    } catch (error) {
      console.error("Error parsing request body:", error)
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    // Format the selected solutions for display
    const solutionLabels: Record<string, string> = {
      residential: "Residential Home Solar",
      commercial: "Commercial Business Solar",
      agricultural: "Agricultural Solar",
      industrial: "Industrial Solar Installation",
      backup: "Solar Backup Power",
      unsure: "Expert Guidance",
      guidance: "Expert Guidance",
    }

    const selectedSolutions = formData.solutionType 
      ? (Array.isArray(formData.solutionType) 
          ? formData.solutionType.map((type: string) => solutionLabels[type] || type).join(", ")
          : solutionLabels[formData.solutionType] || formData.solutionType)
      : "";

    // Format meeting date if exists and create calendar link
    let meetingDetails = null
    let calendarEventLink: string | undefined = undefined

    if (formData.scheduleConsultation && formData.meetingDate && formData.meetingTime) {
      // Parse meeting date and time
      const meetingDate = new Date(formData.meetingDate)
      
      // Extract time parts
      let hours = 0;
      let minutes = 0;
      
      // Try different time formats
      const timeMatch = formData.meetingTime.match(/(\d+):(\d+)(?:\s*(AM|PM))?/)
      
      if (timeMatch) {
        hours = parseInt(timeMatch[1], 10)
        minutes = parseInt(timeMatch[2], 10)
        const period = timeMatch[3]
        
        // Handle 12-hour format if period is provided
        if (period === "PM" && hours !== 12) {
          hours += 12
        } else if (period === "AM" && hours === 12) {
          hours = 0
        }
      }

      // Set hours and minutes
      meetingDate.setHours(hours, minutes, 0, 0)

      // Create end time (1 hour after start)
      const endTime = new Date(meetingDate)
      endTime.setHours(endTime.getHours() + 1)

      // Format date for display
      const formattedDate = meetingDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      
      const formattedTime = meetingDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      })

      meetingDetails = {
        date: formattedDate,
        time: formattedTime,
        type: formData.meetingType === "phone" ? "Phone Call" : "In-person Meeting",
      }

      // Generate Google Calendar link
      const meetingType = formData.meetingType === "phone" ? "Phone Call" : "In-person Meeting"
      const title = `Solar Consultation - ${meetingType} with Dolebs Media`
      const description = `
        Solar Consultation regarding: ${selectedSolutions}
        
        Contact: ${formData.name}
        Phone: ${formData.phone}
        Email: ${formData.email}
        
        This meeting was scheduled through the Solar Solution Finder survey.
      `.trim()

      const location =
        formData.meetingType === "phone"
          ? `Phone: ${formData.phone}`
          : "90 Church Rd, Nairobi, Kenya"

      calendarEventLink = generateGoogleCalendarLink(title, description, location, meetingDate, endTime)
    }

    console.log("Sending email to company")
    
    // Get company email recipients (taking into account testing limitations)
    const companyIntendedEmail = "info@dolebsmedia.co.ke";
    const companyEmail = getValidRecipientEmail(companyIntendedEmail);
    
    // Log info about testing mode if applicable
    logTestingModeInfo(companyIntendedEmail, "Company notification email");

    // Send email to company
    try {
      const { data, error } = await resend.emails.send({
        from: "Dolebs Media Solar Survey <onboarding@resend.dev>",
        to: [companyEmail],
        subject: "New Solar Solution Survey Submission",
        react: SurveyEmailTemplate({
          formData,
          selectedSolutions,
          meetingDetails,
          calendarEventLink,
        }),
        text: `New survey submission from ${formData.name}. Solutions: ${selectedSolutions}. Contact: ${formData.email}, ${formData.phone}`,
      })

      if (error) {
        console.error("Error sending company email:", error)
        return NextResponse.json({ error: `Failed to send company email: ${error.message}` }, { status: 500 })
      }

      console.log("Company email sent successfully")
    } catch (error) {
      console.error("Exception sending company email:", error)
      // Continue to customer email even if company email fails
    }

    console.log("Sending email to customer")
    
    // Get customer email recipient (taking into account testing limitations)
    const customerIntendedEmail = formData.email;
    const customerEmail = getValidRecipientEmail(customerIntendedEmail);
    
    // Log info about testing mode if applicable
    logTestingModeInfo(customerIntendedEmail, "Customer confirmation email");

    // Send confirmation email to customer
    try {
      await resend.emails.send({
        from: "Dolebs Media <onboarding@resend.dev>",
        to: [customerEmail],
        subject: "Your Solar Solution Survey Confirmation",
        react: SurveyEmailTemplate({
          formData,
          selectedSolutions,
          meetingDetails,
          isCustomerEmail: true,
          calendarEventLink,
        }),
        text: `Thank you for completing our solar survey! We've received your submission and will be in touch soon.`,
      })

      console.log("Customer email sent successfully")
    } catch (error) {
      console.error("Error sending customer email:", error)
      // Continue even if customer email fails
    }

    // Add note about testing mode in the response
    const isTestMode = customerEmail !== customerIntendedEmail;
    
    return NextResponse.json({ 
      success: true,
      testMode: isTestMode,
      recipientEmail: isTestMode ? VERIFIED_EMAIL : undefined
    })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json(
      { error: `Failed to send email: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 },
    )
  }
} 
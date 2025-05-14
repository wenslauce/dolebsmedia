import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text, Hr } from "@react-email/components"

interface SurveyEmailTemplateProps {
  formData: any
  selectedSolutions: string
  meetingDetails: {
    date: string
    time: string
    type: string
  } | null
  isCustomerEmail?: boolean
  calendarEventLink?: string
}

export const SurveyEmailTemplate = ({
  formData,
  selectedSolutions,
  meetingDetails,
  isCustomerEmail = false,
  calendarEventLink,
}: SurveyEmailTemplateProps) => {
  const previewText = isCustomerEmail
    ? "Thank you for completing our solar solution survey!"
    : `New solar survey submission from ${formData.name}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src="/images/logo.png"
              width="400"
              height="120"
              alt="W. Giertsen Energy Solutions Logo"
              style={logo}
            />
          </Section>

          <Section style={content}>
            <Heading style={heading}>
              {isCustomerEmail ? "Thank You for Your Submission!" : "New Solar Survey Submission"}
            </Heading>

            {isCustomerEmail ? (
              <Text style={paragraph}>
                Dear {formData.name},<br />
                <br />
                Thank you for completing our Solar Solution Finder survey. We've received your submission and our team
                will review your information to prepare a personalized solar solution recommendation for you.
              </Text>
            ) : (
              <Text style={paragraph}>A new solar survey has been submitted by {formData.name}.</Text>
            )}

            <Section style={detailsContainer}>
              <Heading as="h3" style={subheading}>
                Survey Details
              </Heading>

              <Section style={detailSection}>
                <Text style={detailLabel}>Selected Solutions:</Text>
                <Text style={detailValue}>{selectedSolutions}</Text>
              </Section>

              {formData.solutionType && formData.solutionType.includes && formData.solutionType.includes("guidance") ? (
                <Section style={noteSection}>
                  <Text style={noteText}>
                    Note: The customer has selected "I need guidance" and would like expert assistance in choosing the
                    right solar solution.
                  </Text>
                </Section>
              ) : null}

              <Section style={detailSection}>
                <Text style={detailLabel}>Monthly Electricity Cost:</Text>
                <Text style={detailValue}>
                  {formData.monthlyCost && typeof formData.monthlyCost === 'object' 
                    ? Object.entries(formData.monthlyCost)
                        .map(([type, cost]) => {
                          const typeLabels: Record<string, string> = {
                            residential: "Residential",
                            commercial: "Commercial",
                            industrial: "Industrial",
                            agricultural: "Agricultural",
                            backup: "Backup Power",
                            guidance: "Needs Guidance",
                          }
                          return `${typeLabels[type] || type}: ${cost}`
                        })
                        .join(", ")
                    : formData.monthlyCost === 'custom'
                        ? `${formData.customAmount} KES`
                        : formData.monthlyCost
                  }
                </Text>
              </Section>

              <Section style={detailSection}>
                <Text style={detailLabel}>Motivation:</Text>
                <Text style={detailValue}>
                  {formData.motivation
                    ? formData.motivation.join(", ")
                    : formData.motivations && Array.isArray(formData.motivations)
                        ? formData.motivations.join(", ")
                        : "N/A"
                  }
                </Text>
              </Section>

              <Section style={detailSection}>
                <Text style={detailLabel}>Location:</Text>
                <Text style={detailValue}>
                  {formData.location === "international" ? "International" : formData.location || "N/A"}
                </Text>
              </Section>

              <Section style={detailSection}>
                <Text style={detailLabel}>Timeline:</Text>
                <Text style={detailValue}>
                  {formData.timeline === "immediate"
                    ? "Immediate (0-3 months)"
                    : formData.timeline === "soon"
                      ? "Soon (3-6 months)"
                      : formData.timeline === "exploring"
                        ? "Exploring options (6-12 months)"
                        : formData.timeline === "just-info"
                          ? "Just gathering information"
                          : formData.timeline || "N/A"}
                </Text>
              </Section>
            </Section>

            <Hr style={divider} />

            <Section style={detailsContainer}>
              <Heading as="h3" style={subheading}>
                Contact Information
              </Heading>

              {formData.companyName && (
                <Section style={detailSection}>
                  <Text style={detailLabel}>Company/Organization:</Text>
                  <Text style={detailValue}>{formData.companyName}</Text>
                </Section>
              )}

              <Section style={detailSection}>
                <Text style={detailLabel}>Name:</Text>
                <Text style={detailValue}>{formData.name}</Text>
              </Section>

              <Section style={detailSection}>
                <Text style={detailLabel}>Email:</Text>
                <Text style={detailValue}>{formData.email}</Text>
              </Section>

              <Section style={detailSection}>
                <Text style={detailLabel}>Phone:</Text>
                <Text style={detailValue}>
                  {formData.countryCode || "+254"} {formData.phone}
                </Text>
              </Section>
            </Section>

            {meetingDetails && (
              <>
                <Hr style={divider} />

                <Section style={detailsContainer}>
                  <Heading as="h3" style={subheading}>
                    Scheduled Consultation
                  </Heading>

                  <Section style={detailSection}>
                    <Text style={detailLabel}>Date:</Text>
                    <Text style={detailValue}>{meetingDetails.date}</Text>
                  </Section>

                  <Section style={detailSection}>
                    <Text style={detailLabel}>Time:</Text>
                    <Text style={detailValue}>{meetingDetails.time} (EAT)</Text>
                  </Section>

                  <Section style={detailSection}>
                    <Text style={detailLabel}>Type:</Text>
                    <Text style={detailValue}>{meetingDetails.type}</Text>
                  </Section>

                  {calendarEventLink && isCustomerEmail && (
                    <Section style={calendarButtonContainer}>
                      <Link href={calendarEventLink} style={calendarButton}>
                        Add to Google Calendar
                      </Link>
                    </Section>
                  )}
                </Section>
              </>
            )}

            {isCustomerEmail && (
              <>
                <Hr style={divider} />

                <Section style={nextStepsContainer}>
                  <Heading as="h3" style={subheading}>
                    What Happens Next?
                  </Heading>

                  <Text style={paragraph}>
                    Our team will analyze your survey responses and prepare a customized solar solution proposal. A
                    solar consultant will contact you within 24-48 hours to discuss your options.
                  </Text>

                  {meetingDetails && (
                    <Text style={paragraph}>
                      We've scheduled your consultation for <strong>{meetingDetails.date}</strong> at{" "}
                      <strong>{meetingDetails.time} (EAT)</strong>. Our team will {meetingDetails.type.toLowerCase()} at
                      the scheduled time.
                    </Text>
                  )}

                  <Text style={paragraph}>
                    If you have any questions in the meantime, please don't hesitate to contact us.
                  </Text>
                </Section>
              </>
            )}
          </Section>

          <Hr style={divider} />

          <Section style={footer}>
            <Text style={footerText}>© 2025 W. Giertsen Energy Solutions. All rights reserved.</Text>
            <Text style={footerText}>90 Church Rd, Nairobi, Kenya</Text>
            <Text style={footerText}>
              <Link href="mailto:energy@giertsen.no" style={link}>
                energy@giertsen.no
              </Link>{" "}
              |{" "}
              <Link href="tel:+254796214350" style={link}>
                +254 742 487 867
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: "#f5f7fa",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0",
  maxWidth: "600px",
}

const logoContainer = {
  padding: "20px",
  textAlign: "center" as const,
}

const logo = {
  margin: "0 auto",
}

const content = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "40px 30px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
}

const heading = {
  color: "#04743C",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const paragraph = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 20px",
}

const detailsContainer = {
  backgroundColor: "#f9f9f9",
  borderRadius: "6px",
  padding: "20px",
  margin: "20px 0",
}

const subheading = {
  color: "#04743C",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 15px",
}

const detailSection = {
  margin: "0 0 12px",
}

const detailLabel = {
  color: "#666",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0 0 4px",
}

const detailValue = {
  color: "#333",
  fontSize: "16px",
  margin: "0",
}

const noteSection = {
  backgroundColor: "#e6f7ef",
  borderRadius: "4px",
  padding: "10px 15px",
  margin: "10px 0 15px",
  borderLeft: "4px solid #04743C",
}

const noteText = {
  color: "#04743C",
  fontSize: "14px",
  margin: "0",
}

const divider = {
  borderColor: "#e6e6e6",
  margin: "30px 0",
}

const nextStepsContainer = {
  margin: "20px 0",
}

const footer = {
  textAlign: "center" as const,
  padding: "20px 0",
}

const footerText = {
  color: "#666",
  fontSize: "12px",
  margin: "5px 0",
}

const link = {
  color: "#04743C",
  textDecoration: "none",
}

const calendarButtonContainer = {
  marginTop: "15px",
  textAlign: "center" as const,
}

const calendarButton = {
  backgroundColor: "#04743C",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "4px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "bold",
} 
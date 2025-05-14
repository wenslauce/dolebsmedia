import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text, Hr } from "@react-email/components"

interface TalentPoolEmailTemplateProps {
  formData: {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    phone: string;
    countryCode?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    resumeFilename?: string;
  };
  isCompanyEmail?: boolean;
}

export const TalentPoolEmailTemplate = ({
  formData,
  isCompanyEmail = false,
}: TalentPoolEmailTemplateProps) => {
  const fullName = `${formData.firstName} ${formData.middleName ? formData.middleName + ' ' : ''}${formData.lastName}`;
  const previewText = isCompanyEmail
    ? `New talent pool application from ${fullName}`
    : "Thank you for your application to our talent pool!";

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
              {isCompanyEmail ? "New Talent Pool Application" : "Thank You for Your Application!"}
            </Heading>

            {isCompanyEmail ? (
              <Text style={paragraph}>
                A new talent pool application has been submitted by {fullName}.
              </Text>
            ) : (
              <Text style={paragraph}>
                Dear {formData.firstName},<br />
                <br />
                Thank you for your interest in joining W. Giertsen Energy Solutions' talent pool. We've received your application
                and will keep your information on file for future opportunities that match your profile.
              </Text>
            )}

            <Hr style={divider} />

            <Section style={detailsContainer}>
              <Heading as="h3" style={subheading}>
                Applicant Information
              </Heading>

              <Section style={detailSection}>
                <Text style={detailLabel}>Name:</Text>
                <Text style={detailValue}>{fullName}</Text>
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

              {formData.address && (
                <>
                  <Section style={detailSection}>
                    <Text style={detailLabel}>Address:</Text>
                    <Text style={detailValue}>{formData.address}</Text>
                  </Section>
                  
                  <Section style={detailSection}>
                    <Text style={detailLabel}>City:</Text>
                    <Text style={detailValue}>{formData.city}</Text>
                  </Section>
                  
                  <Section style={detailSection}>
                    <Text style={detailLabel}>State/Province:</Text>
                    <Text style={detailValue}>{formData.state}</Text>
                  </Section>
                  
                  <Section style={detailSection}>
                    <Text style={detailLabel}>Zip/Postal Code:</Text>
                    <Text style={detailValue}>{formData.zip}</Text>
                  </Section>
                  
                  <Section style={detailSection}>
                    <Text style={detailLabel}>Country:</Text>
                    <Text style={detailValue}>{formData.country}</Text>
                  </Section>
                </>
              )}

              {formData.resumeFilename && isCompanyEmail && (
                <Section style={detailSection}>
                  <Text style={detailLabel}>Resume/CV:</Text>
                  <Text style={detailValue}>{formData.resumeFilename} (attached)</Text>
                </Section>
              )}
            </Section>

            {!isCompanyEmail && (
              <>
                <Hr style={divider} />

                <Section style={nextStepsContainer}>
                  <Heading as="h3" style={subheading}>
                    What Happens Next?
                  </Heading>

                  <Text style={paragraph}>
                    Your information will be kept in our talent pool database. While we don't have any open positions that
                    match your profile at the moment, we'll reach out to you if a suitable opportunity becomes available
                    in the future.
                  </Text>

                  <Text style={paragraph}>
                    We appreciate your interest in W. Giertsen Energy Solutions and your passion for sustainable energy.
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
  );
};

// Styles
const main = {
  backgroundColor: "#f9fafb",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0",
  maxWidth: "600px",
};

const logoContainer = {
  padding: "20px",
  textAlign: "center" as const,
};

const logo = {
  maxWidth: "100%",
  height: "auto",
};

const content = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "40px 30px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
};

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#00324B", // secondary color
  textAlign: "center" as const,
  margin: "0 0 30px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#4b5563",
  margin: "0 0 20px",
};

const detailsContainer = {
  margin: "0 0 30px",
};

const subheading = {
  fontSize: "18px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#00324B", // secondary color
  margin: "0 0 20px",
};

const detailSection = {
  margin: "0 0 12px",
};

const detailLabel = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#6b7280",
  margin: "0 0 5px",
};

const detailValue = {
  fontSize: "16px",
  color: "#374151",
  margin: "0",
};

const noteSection = {
  backgroundColor: "#f3f4f6",
  borderRadius: "6px",
  padding: "15px",
  margin: "15px 0",
};

const noteText = {
  fontSize: "14px",
  color: "#4b5563",
  margin: "0",
  fontStyle: "italic",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "30px 0",
};

const calendarButtonContainer = {
  margin: "20px 0 0",
  textAlign: "center" as const,
};

const calendarButton = {
  backgroundColor: "#F7A133", // primary color
  color: "#ffffff",
  padding: "12px 20px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "600",
  display: "inline-block",
  textAlign: "center" as const,
};

const nextStepsContainer = {
  margin: "0",
};

const footer = {
  textAlign: "center" as const,
  color: "#6b7280",
  fontSize: "14px",
  margin: "20px 0",
};

const footerText = {
  margin: "5px 0",
  fontSize: "14px",
  color: "#6b7280",
};

const link = {
  color: "#F7A133", // primary color
  textDecoration: "none",
}; 
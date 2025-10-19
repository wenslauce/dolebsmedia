import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text, Hr } from "@react-email/components"

interface ContactEmailTemplateProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  };
  isCompanyEmail?: boolean;
}

export const ContactEmailTemplate = ({
  formData,
  isCompanyEmail = false,
}: ContactEmailTemplateProps) => {
  const fullName = `${formData.firstName} ${formData.lastName}`;
  const previewText = isCompanyEmail
    ? `New contact form submission from ${fullName}`
    : "Thank you for contacting Dolebs Media!";

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
              alt="Dolebs Media Logo"
              style={logo}
            />
          </Section>

          <Section style={content}>
            <Heading style={heading}>
              {isCompanyEmail ? "New Contact Form Submission" : "Thank You for Contacting Us!"}
            </Heading>

            {isCompanyEmail ? (
              <Text style={paragraph}>
                A new contact form submission has been received from {fullName}.
              </Text>
            ) : (
              <Text style={paragraph}>
                Dear {formData.firstName},<br />
                <br />
                Thank you for reaching out to Dolebs Media. We've received your message
                and will get back to you as soon as possible.
              </Text>
            )}

            <Hr style={divider} />

            <Section style={detailsContainer}>
              <Heading as="h3" style={subheading}>
                Contact Information
              </Heading>

              <Section style={detailSection}>
                <Text style={detailLabel}>Name:</Text>
                <Text style={detailValue}>{fullName}</Text>
              </Section>

              <Section style={detailSection}>
                <Text style={detailLabel}>Email:</Text>
                <Text style={detailValue}>{formData.email}</Text>
              </Section>

              {formData.phone && (
                <Section style={detailSection}>
                  <Text style={detailLabel}>Phone:</Text>
                  <Text style={detailValue}>{formData.phone}</Text>
                </Section>
              )}

              <Section style={detailSection}>
                <Text style={detailLabel}>Subject:</Text>
                <Text style={detailValue}>{formData.subject}</Text>
              </Section>

              <Section style={detailSection}>
                <Text style={detailLabel}>Message:</Text>
                <Text style={detailValue}>{formData.message}</Text>
              </Section>
            </Section>

            {!isCompanyEmail && (
              <>
                <Hr style={divider} />

                <Section style={nextStepsContainer}>
                  <Heading as="h3" style={subheading}>
                    What Happens Next?
                  </Heading>

                  <Text style={paragraph}>
                    Our team will review your message and respond within 1-2 business days. If your inquiry
                    requires immediate attention, please call us directly at one of our office locations.
                  </Text>

                  <Text style={paragraph}>
                    We appreciate your interest in Dolebs Media and look forward to assisting you.
                  </Text>
                </Section>
              </>
            )}
          </Section>

          <Hr style={divider} />

          <Section style={footer}>
            <Text style={footerText}>© 2025 Dolebs Media. All rights reserved.</Text>
            <Text style={footerText}>90 Church Rd, Nairobi, Kenya</Text>
            <Text style={footerText}>
              <Link href="mailto:info@dolebsmedia.co.ke" style={link}>
                info@dolebsmedia.co.ke
              </Link>{" "}
              |{" "}
              <Link href="tel:+254796214350" style={link}>
                +254 798 740 674
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

const divider = {
  borderColor: "#e5e7eb",
  margin: "30px 0",
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
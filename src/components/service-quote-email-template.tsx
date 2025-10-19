import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';

interface ServiceQuoteEmailTemplateProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    serviceType: string;
    projectDescription: string;
    budget?: string;
    timeline?: string;
  };
  serviceName: string;
  isCompanyEmail?: boolean;
}

export const ServiceQuoteEmailTemplate = ({
  formData,
  serviceName,
  isCompanyEmail = false,
}: ServiceQuoteEmailTemplateProps) => {
  const previewText = isCompanyEmail
    ? `New ${serviceName} quote request from ${formData.firstName} ${formData.lastName}`
    : `Your ${serviceName} quote request has been received`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>
            {isCompanyEmail
              ? `New ${serviceName} Quote Request`
              : `Your ${serviceName} Quote Request`}
          </Heading>

          {isCompanyEmail ? (
            <>
              <Text style={text}>
                You've received a new quote request for {serviceName} services.
              </Text>

              <Section style={section}>
                <Heading as="h2" style={h2}>
                  Client Information
                </Heading>
                <Text style={detailText}>
                  <strong>Name:</strong> {formData.firstName} {formData.lastName}
                </Text>
                <Text style={detailText}>
                  <strong>Email:</strong> {formData.email}
                </Text>
                <Text style={detailText}>
                  <strong>Phone:</strong> {formData.phone}
                </Text>
                {formData.company && (
                  <Text style={detailText}>
                    <strong>Company:</strong> {formData.company}
                  </Text>
                )}
              </Section>

              <Hr style={hr} />

              <Section style={section}>
                <Heading as="h2" style={h2}>
                  Project Details
                </Heading>
                <Text style={detailText}>
                  <strong>Service:</strong> {serviceName}
                </Text>
                <Text style={detailText}>
                  <strong>Description:</strong>
                </Text>
                <Text style={descriptionText}>{formData.projectDescription}</Text>
                
                {formData.budget && (
                  <Text style={detailText}>
                    <strong>Budget:</strong> {formData.budget}
                  </Text>
                )}
                
                {formData.timeline && (
                  <Text style={detailText}>
                    <strong>Timeline:</strong> {formData.timeline}
                  </Text>
                )}
              </Section>

              <Hr style={hr} />

              <Text style={footerText}>
                Please respond to this client within 24 hours.
              </Text>
            </>
          ) : (
            <>
              <Text style={text}>
                Thank you for your interest in our {serviceName} services! We've received your quote request and our team will review it shortly.
              </Text>

              <Section style={section}>
                <Heading as="h2" style={h2}>
                  What Happens Next?
                </Heading>
                <Text style={detailText}>
                  1. Our team will review your project requirements
                </Text>
                <Text style={detailText}>
                  2. We'll prepare a customized quote for your project
                </Text>
                <Text style={detailText}>
                  3. You'll receive a detailed proposal within 24 hours
                </Text>
              </Section>

              <Hr style={hr} />

              <Section style={section}>
                <Heading as="h2" style={h2}>
                  Your Request Summary
                </Heading>
                <Text style={detailText}>
                  <strong>Service:</strong> {serviceName}
                </Text>
                <Text style={detailText}>
                  <strong>Project Description:</strong>
                </Text>
                <Text style={descriptionText}>{formData.projectDescription}</Text>
                
                {formData.budget && (
                  <Text style={detailText}>
                    <strong>Budget:</strong> {formData.budget}
                  </Text>
                )}
                
                {formData.timeline && (
                  <Text style={detailText}>
                    <strong>Timeline:</strong> {formData.timeline}
                  </Text>
                )}
              </Section>

              <Hr style={hr} />

              <Text style={footerText}>
                If you have any questions in the meantime, feel free to reply to this email or call us at +2547 98 740 674.
              </Text>

              <Text style={footerText}>
                Best regards,<br />
                The Dolebs Media Team
              </Text>
            </>
          )}
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const h1 = {
  color: '#1e293b',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 40px',
};

const h2 = {
  color: '#E31E24',
  fontSize: '24px',
  fontWeight: '600',
  margin: '24px 0 16px',
};

const text = {
  color: '#64748b',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '0 40px',
  margin: '16px 0',
};

const section = {
  padding: '0 40px',
  margin: '24px 0',
};

const detailText = {
  color: '#475569',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '8px 0',
};

const descriptionText = {
  color: '#475569',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '8px 0 16px 0',
  padding: '16px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
};

const hr = {
  borderColor: '#e2e8f0',
  margin: '32px 40px',
};

const footerText = {
  color: '#64748b',
  fontSize: '14px',
  lineHeight: '20px',
  padding: '0 40px',
  margin: '16px 0',
};

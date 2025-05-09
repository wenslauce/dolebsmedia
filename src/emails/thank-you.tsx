import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
} from '@react-email/components';
import React from 'react';

interface ThankYouEmailProps {
  name: string;
  solutionType: string;
  hasScheduledConsultation: boolean;
  scheduledDate?: string;
  scheduledTime?: string;
  meetingType?: string;
}

export const ThankYouEmail = ({
  name,
  solutionType,
  hasScheduledConsultation,
  scheduledDate,
  scheduledTime,
  meetingType,
}: ThankYouEmailProps) => {
  // Safe formatting functions
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (e) {
      return dateString;
    }
  };
  
  const formatTime = (timeString?: string) => {
    if (!timeString) return '';
    
    try {
      const [hours, minutes] = timeString.split(':').map(Number);
      const period = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    } catch (e) {
      return timeString;
    }
  };
  
  return (
    <Html>
      <Head />
      <Preview>Thank you for your {solutionType} consultation request</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Thank You for Your Interest</Heading>
          
          <Section style={section}>
            <Text style={greeting}>Hello {name},</Text>
            
            <Text style={text}>
              Thank you for your interest in {solutionType} solutions from Giertsen Energy Solutions. 
              We've received your consultation request and are excited to help you start your journey 
              towards a more sustainable energy future.
            </Text>

            {hasScheduledConsultation && scheduledDate && scheduledTime ? (
              <Section style={confirmationBox}>
                <Text style={confirmationTitle}>Your Consultation is Confirmed</Text>
                <Text style={confirmationText}>
                  We've scheduled your {meetingType === 'phone' ? 'phone consultation' : 'in-person meeting'} for:
                </Text>
                <Text style={confirmationDate}>
                  {formatDate(scheduledDate)} at {formatTime(scheduledTime)}
                </Text>
                {meetingType === 'phone' ? (
                  <Text style={confirmationText}>
                    One of our consultants will call you at your registered phone number.
                  </Text>
                ) : (
                  <Text style={confirmationText}>
                    At Giertsen Office - 123 Solar Street, Green City
                  </Text>
                )}
                <Text style={confirmationText}>
                  You'll receive a reminder email the day before your consultation.
                </Text>
              </Section>
            ) : (
              <Section style={nextStepsBox}>
                <Text style={nextStepsTitle}>What Happens Next?</Text>
                <Text style={nextStepsText}>
                  One of our consultants will be in touch with you within 24 hours to:
                </Text>
                <ul style={nextStepsList}>
                  <li style={nextStepsItem}>Discuss your energy needs in more detail</li>
                  <li style={nextStepsItem}>Answer any immediate questions you may have</li>
                  <li style={nextStepsItem}>Schedule a consultation at a time that works for you</li>
                </ul>
              </Section>
            )}
            
            <Text style={text}>
              In the meantime, you might find these resources helpful:
            </Text>
            
            <Section style={resourcesSection}>
              <Button style={resourceButton} href="https://www.Giertsen.com/solar-guide">
                Solar Energy Guide
              </Button>
              <Button style={resourceButton} href="https://www.Giertsen.com/incentives">
                Solar Incentives & Rebates
              </Button>
              <Button style={resourceButton} href="https://www.Giertsen.com/faq">
                Frequently Asked Questions
              </Button>
            </Section>
            
            <Text style={text}>
              If you have any questions before we contact you, feel free to reply to this email
              or call us at (555) 123-4567.
            </Text>
            
            <Text style={closing}>
              We're looking forward to helping you harness the power of solar energy!
            </Text>
            
            <Text style={signature}>
              The Giertsen Team
            </Text>
          </Section>
          
          <Hr style={hr} />
          
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Giertsen Energy Solutions. All rights reserved.
            </Text>
            <Text style={footerText}>
              <Link style={footerLink} href="https://www.Giertsen.com/privacy">Privacy Policy</Link> • 
              <Link style={footerLink} href="https://www.Giertsen.com/terms">Terms of Service</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

interface StyleProps {
  [key: string]: string | number | StyleProps;
}

const main: StyleProps = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container: StyleProps = {
  margin: '0 auto',
  padding: '20px 0',
  maxWidth: '600px',
};

const heading: StyleProps = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#1f2937',
  marginBottom: '24px',
  textAlign: 'center',
};

const section: StyleProps = {
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  marginBottom: '24px',
};

const greeting: StyleProps = {
  fontSize: '18px',
  color: '#1f2937',
  marginBottom: '24px',
};

const text: StyleProps = {
  fontSize: '16px',
  color: '#4b5563',
  margin: '16px 0',
  lineHeight: '24px',
};

const confirmationBox: StyleProps = {
  backgroundColor: '#ecfdf5',
  padding: '20px',
  borderRadius: '6px',
  borderLeft: '4px solid #059669',
  margin: '24px 0',
};

const confirmationTitle: StyleProps = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#065f46',
  marginBottom: '12px',
};

const confirmationText: StyleProps = {
  fontSize: '16px',
  color: '#065f46',
  margin: '8px 0',
  lineHeight: '22px',
};

const confirmationDate: StyleProps = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#065f46',
  margin: '12px 0',
};

const nextStepsBox: StyleProps = {
  backgroundColor: '#f0f9ff',
  padding: '20px',
  borderRadius: '6px',
  borderLeft: '4px solid #0284c7',
  margin: '24px 0',
};

const nextStepsTitle: StyleProps = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#0c4a6e',
  marginBottom: '12px',
};

const nextStepsText: StyleProps = {
  fontSize: '16px',
  color: '#0c4a6e',
  margin: '8px 0',
  lineHeight: '22px',
};

const nextStepsList: StyleProps = {
  paddingLeft: '20px',
  margin: '12px 0',
};

const nextStepsItem: StyleProps = {
  fontSize: '16px',
  color: '#0c4a6e',
  margin: '8px 0',
  lineHeight: '22px',
};

const resourcesSection: StyleProps = {
  margin: '24px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const resourceButton: StyleProps = {
  backgroundColor: '#0284c7',
  color: '#ffffff',
  padding: '10px 16px',
  borderRadius: '4px',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: '500',
  textAlign: 'center',
};

const closing: StyleProps = {
  fontSize: '16px',
  color: '#4b5563',
  marginTop: '24px',
  marginBottom: '12px',
};

const signature: StyleProps = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#1f2937',
};

const hr: StyleProps = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
};

const footer: StyleProps = {
  textAlign: 'center',
};

const footerText: StyleProps = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '8px 0',
};

const footerLink: StyleProps = {
  color: '#6b7280',
  textDecoration: 'underline',
  margin: '0 4px',
};

export default ThankYouEmail; 
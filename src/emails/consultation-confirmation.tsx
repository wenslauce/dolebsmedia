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
  Img,
  Row,
  Column,
} from '@react-email/components';
import React from 'react';

interface ConsultationConfirmationEmailProps {
  name: string;
  solutionType: string;
  scheduledDate: string;
  scheduledTime: string;
  meetingType: string;
  location: string;
  companyName?: string;
}

export const ConsultationConfirmationEmail = ({
  name,
  solutionType,
  scheduledDate,
  scheduledTime,
  meetingType,
  location,
  companyName,
}: ConsultationConfirmationEmailProps) => {
  
  // Format the date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Helper to format the time (e.g., "14:30" to "2:30 PM")
  const formatTime = (timeString: string) => {
    if (!timeString) return '';
    
    const [hours, minutes] = timeString.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };
  
  // Calculate end time (30 minutes after start)
  const calculateEndTime = (timeString: string) => {
    if (!timeString) return '';
    
    const [hours, minutes] = timeString.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes + 30);
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };
  
  return (
    <Html>
      <Head />
      <Preview>Your Solar Consultation is Confirmed | {formatDate(scheduledDate)} at {formatTime(scheduledTime)}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={logoContainer}>
            <Img 
              src="https://Giertsen.com/images/logo.png" 
              alt="Giertsen Logo" 
              width="180" 
              height="45" 
              style={logo}
            />
          </Section>
          
          <Section style={heroSection}>
            <Heading style={heroHeading}>Your Consultation is Confirmed!</Heading>
          </Section>
          
          <Section style={contentSection}>
            <Text style={greeting}>Hello {name},</Text>
            
            <Text style={paragraph}>
              Your consultation for {solutionType} has been scheduled and confirmed. We're looking forward to discussing your energy needs and helping you find the perfect solar solution.
            </Text>
            
            {/* Consultation Details Card */}
            <Section style={consultationCard}>
              <Heading style={cardHeading}>Consultation Details</Heading>
              
              <Row style={detailRow}>
                <Column style={detailIconColumn}>
                  <Img
                    src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/calendar.png"
                    width="24"
                    height="24"
                    alt="Calendar"
                  />
                </Column>
                <Column style={detailContentColumn}>
                  <Text style={detailLabel}>Date</Text>
                  <Text style={detailValue}>{formatDate(scheduledDate)}</Text>
                </Column>
              </Row>
              
              <Row style={detailRow}>
                <Column style={detailIconColumn}>
                  <Img
                    src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/clock.png"
                    width="24"
                    height="24"
                    alt="Clock"
                  />
                </Column>
                <Column style={detailContentColumn}>
                  <Text style={detailLabel}>Time</Text>
                  <Text style={detailValue}>{formatTime(scheduledTime)} - {formatTime(calculateEndTime(scheduledTime))} EAT</Text>
                </Column>
              </Row>
              
              <Row style={detailRow}>
                <Column style={detailIconColumn}>
                  <Img
                    src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/building.png"
                    width="24"
                    height="24"
                    alt="Location"
                  />
                </Column>
                <Column style={detailContentColumn}>
                  <Text style={detailLabel}>Consultation Type</Text>
                  <Text style={detailValue}>
                    {meetingType === 'phone' ? 'Phone Consultation' : 'In-person Meeting'}
                  </Text>
                </Column>
              </Row>
              
              {meetingType === 'phone' ? (
                <Row style={detailRow}>
                  <Column style={detailIconColumn}>
                    <Img
                      src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/phone.png"
                      width="24"
                      height="24"
                      alt="Phone"
                    />
                  </Column>
                  <Column style={detailContentColumn}>
                    <Text style={detailLabel}>How We'll Contact You</Text>
                    <Text style={detailValue}>We'll call you at your registered phone number</Text>
                  </Column>
                </Row>
              ) : (
                <Row style={detailRow}>
                  <Column style={detailIconColumn}>
                    <Img
                      src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/map-pin.png"
                      width="24"
                      height="24"
                      alt="Office Location"
                    />
                  </Column>
                  <Column style={detailContentColumn}>
                    <Text style={detailLabel}>Location</Text>
                    <Text style={detailValue}>Giertsen Office - 123 Solar Street, {location}</Text>
                  </Column>
                </Row>
              )}
            </Section>
            
            <Section style={ctaSection}>
              <Button style={calendarButton} href="https://calendar.google.com/calendar/render?action=TEMPLATE">
                Add to Calendar
              </Button>
              
              <Button style={rescheduleButton} href="https://Giertsen.com/reschedule-consultation">
                Reschedule
              </Button>
            </Section>
            
            <Text style={paragraph}>
              To help us prepare for your consultation, please gather any information about your current energy consumption, such as recent electricity bills, and think about your energy goals.
            </Text>
            
            <Text style={paragraph}>
              If you need to reschedule or have any questions before our meeting, please reply to this email or call us at (555) 123-4567.
            </Text>
            
            <Text style={paragraph}>
              We're excited to help you start your solar journey!
            </Text>
            
            <Text style={signature}>
              Best regards,<br />
              The Giertsen Consultation Team
            </Text>
          </Section>
          
          <Hr style={divider} />
          
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Giertsen Energy Solutions. All rights reserved.
            </Text>
            <Text style={footerText}>
              <Link style={footerLink} href="https://Giertsen.com/privacy">Privacy Policy</Link> • 
              <Link style={footerLink} href="https://Giertsen.com/terms">Terms of Service</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0',
  maxWidth: '600px',
};

const logoContainer = {
  padding: '20px 0',
  textAlign: 'center' as const,
};

const logo = {
  margin: '0 auto',
};

const heroSection = {
  backgroundColor: '#0284c7', // primary color
  color: '#ffffff',
  padding: '32px 20px',
  borderRadius: '8px 8px 0 0',
  textAlign: 'center' as const,
};

const heroHeading = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#ffffff',
  margin: '0',
};

const contentSection = {
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '0 0 8px 8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const greeting = {
  fontSize: '18px',
  color: '#1f2937',
  marginBottom: '24px',
};

const paragraph = {
  fontSize: '16px',
  color: '#4b5563',
  margin: '16px 0',
  lineHeight: '24px',
};

const consultationCard = {
  backgroundColor: '#f0f9ff', // light blue background
  padding: '24px',
  borderRadius: '8px',
  borderLeft: '4px solid #0284c7',
  margin: '24px 0',
};

const cardHeading = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#0c4a6e',
  marginTop: '0',
  marginBottom: '16px',
};

const detailRow = {
  marginBottom: '16px',
};

const detailIconColumn = {
  width: '40px',
  verticalAlign: 'middle',
};

const detailContentColumn = {
  verticalAlign: 'middle',
};

const detailLabel = {
  fontSize: '12px',
  color: '#64748b',
  margin: '0 0 4px 0',
};

const detailValue = {
  fontSize: '16px',
  color: '#0c4a6e',
  fontWeight: '500',
  margin: '0',
};

const ctaSection = {
  margin: '24px 0',
  textAlign: 'center' as const,
};

const calendarButton = {
  backgroundColor: '#0284c7',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '4px',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: '500',
  marginRight: '12px',
};

const rescheduleButton = {
  backgroundColor: '#ffffff',
  color: '#0284c7',
  padding: '12px 24px',
  borderRadius: '4px',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: '500',
  border: '1px solid #0284c7',
};

const signature = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#1f2937',
  margin: '32px 0 0 0',
};

const divider = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
};

const footer = {
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '8px 0',
};

const footerLink = {
  color: '#6b7280',
  textDecoration: 'underline',
  margin: '0 4px',
};

export default ConsultationConfirmationEmail; 
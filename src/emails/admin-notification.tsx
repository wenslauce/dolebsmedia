import {
  Body,
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

interface AdminNotificationEmailProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    solutionType: string;
    location: string;
    timeline: string;
    motivations: string[];
    monthlyCost: string;
    customAmount?: string;
    companyName?: string;
    scheduleConsultation: boolean;
    meetingDate?: string;
    meetingTime?: string;
    meetingType?: string;
  };
}

export const AdminNotificationEmail = ({
  formData,
}: AdminNotificationEmailProps) => {
  const {
    name,
    email,
    phone,
    solutionType,
    location,
    timeline,
    motivations,
    monthlyCost,
    customAmount,
    companyName,
    scheduleConsultation,
    meetingDate,
    meetingTime,
    meetingType,
  } = formData;
  
  // Helper to format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Not scheduled';
    
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Helper to format the time
  const formatTime = (timeString?: string) => {
    if (!timeString) return 'Not specified';
    
    const [hours, minutes] = timeString.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };
  
  // Format monthly cost
  const formatMonthlyCost = () => {
    if (monthlyCost === 'custom' && customAmount) {
      return `${customAmount} KES (Custom amount)`;
    }
    
    const costMap: Record<string, string> = {
      'less-20k': 'Less than 20,000 KES',
      '20k-50k': '20,000 - 50,000 KES',
      '50k-100k': '50,000 - 100,000 KES',
      '100k-500k': '100,000 - 500,000 KES',
      'over-500k': 'Over 500,000 KES'
    };
    
    return costMap[monthlyCost] || 'Not specified';
  };
  
  // Format timeline
  const formatTimeline = () => {
    const timelineMap: Record<string, string> = {
      'immediate': 'Immediate (0-3 months)',
      'soon': 'Soon (3-6 months)',
      'exploring': 'Exploring options (6-12 months)',
      'just-info': 'Just gathering information'
    };
    
    return timelineMap[timeline] || 'Not specified';
  };
  
  // Format motivations
  const formatMotivations = () => {
    const motivationMap: Record<string, string> = {
      'bills': 'Reducing electricity bills',
      'independence': 'Becoming energy independent',
      'backup': 'Reliable power backup',
      'environment': 'Environmental sustainability',
      'other': 'Other reasons'
    };
    
    return motivations.map(m => motivationMap[m] || m).join(', ');
  };
  
  return (
    <Html>
      <Head />
      <Preview>New Solar Consultation Request from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
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
            <Heading style={heroHeading}>New Consultation Request</Heading>
            <Text style={heroSubheading}>A customer has requested a solar consultation</Text>
          </Section>
          
          <Section style={contentSection}>
            <Text style={paragraph}>
              A new solar consultation request has been submitted through the website. Here are the details:
            </Text>
            
            {/* Customer Information */}
            <Section style={infoCard}>
              <Heading style={cardHeading}>Customer Information</Heading>
              
              <Row style={detailRow}>
                <Column style={detailLabelColumn}>
                  <Text style={detailLabel}>Name:</Text>
                </Column>
                <Column style={detailValueColumn}>
                  <Text style={detailValue}>{name}</Text>
                </Column>
              </Row>
              
              {companyName && (
                <Row style={detailRow}>
                  <Column style={detailLabelColumn}>
                    <Text style={detailLabel}>Company/Organization:</Text>
                  </Column>
                  <Column style={detailValueColumn}>
                    <Text style={detailValue}>{companyName}</Text>
                  </Column>
                </Row>
              )}
              
              <Row style={detailRow}>
                <Column style={detailLabelColumn}>
                  <Text style={detailLabel}>Email:</Text>
                </Column>
                <Column style={detailValueColumn}>
                  <Text style={detailValue}>
                    <Link href={`mailto:${email}`} style={link}>{email}</Link>
                  </Text>
                </Column>
              </Row>
              
              <Row style={detailRow}>
                <Column style={detailLabelColumn}>
                  <Text style={detailLabel}>Phone:</Text>
                </Column>
                <Column style={detailValueColumn}>
                  <Text style={detailValue}>{phone}</Text>
                </Column>
              </Row>
              
              <Row style={detailRow}>
                <Column style={detailLabelColumn}>
                  <Text style={detailLabel}>Location:</Text>
                </Column>
                <Column style={detailValueColumn}>
                  <Text style={detailValue}>{location}</Text>
                </Column>
              </Row>
            </Section>
            
            {/* Request Details */}
            <Section style={infoCard}>
              <Heading style={cardHeading}>Request Details</Heading>
              
              <Row style={detailRow}>
                <Column style={detailLabelColumn}>
                  <Text style={detailLabel}>Solution Type:</Text>
                </Column>
                <Column style={detailValueColumn}>
                  <Text style={detailValue}>{solutionType}</Text>
                </Column>
              </Row>
              
              <Row style={detailRow}>
                <Column style={detailLabelColumn}>
                  <Text style={detailLabel}>Monthly Electricity Cost:</Text>
                </Column>
                <Column style={detailValueColumn}>
                  <Text style={detailValue}>{formatMonthlyCost()}</Text>
                </Column>
              </Row>
              
              <Row style={detailRow}>
                <Column style={detailLabelColumn}>
                  <Text style={detailLabel}>Timeline:</Text>
                </Column>
                <Column style={detailValueColumn}>
                  <Text style={detailValue}>{formatTimeline()}</Text>
                </Column>
              </Row>
              
              <Row style={detailRow}>
                <Column style={detailLabelColumn}>
                  <Text style={detailLabel}>Motivations:</Text>
                </Column>
                <Column style={detailValueColumn}>
                  <Text style={detailValue}>{formatMotivations()}</Text>
                </Column>
              </Row>
            </Section>
            
            {/* Consultation Schedule */}
            {scheduleConsultation && (
              <Section style={scheduleCard}>
                <Heading style={scheduleHeading}>Scheduled Consultation</Heading>
                
                <Row style={detailRow}>
                  <Column style={detailLabelColumn}>
                    <Text style={detailLabel}>Date:</Text>
                  </Column>
                  <Column style={detailValueColumn}>
                    <Text style={detailValue}>{formatDate(meetingDate)}</Text>
                  </Column>
                </Row>
                
                <Row style={detailRow}>
                  <Column style={detailLabelColumn}>
                    <Text style={detailLabel}>Time:</Text>
                  </Column>
                  <Column style={detailValueColumn}>
                    <Text style={detailValue}>{formatTime(meetingTime)} EAT</Text>
                  </Column>
                </Row>
                
                <Row style={detailRow}>
                  <Column style={detailLabelColumn}>
                    <Text style={detailLabel}>Meeting Type:</Text>
                  </Column>
                  <Column style={detailValueColumn}>
                    <Text style={detailValue}>
                      {meetingType === 'phone' ? 'Phone Consultation' : 'In-person Meeting'}
                    </Text>
                  </Column>
                </Row>
              </Section>
            )}
            
            <Text style={actionParagraph}>
              Please take appropriate action as soon as possible. You can contact the customer directly using the email or phone number provided above.
            </Text>
          </Section>
          
          <Hr style={divider} />
          
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Giertsen Energy Solutions. All rights reserved.
            </Text>
            <Text style={footerText}>
              This is an automated notification. Please do not reply to this email.
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
  backgroundColor: '#1f2937', // Dark gray
  color: '#ffffff',
  padding: '32px 20px',
  borderRadius: '8px 8px 0 0',
  textAlign: 'center' as const,
};

const heroHeading = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#ffffff',
  margin: '0 0 8px 0',
};

const heroSubheading = {
  fontSize: '16px',
  color: '#e5e7eb',
  margin: '0',
};

const contentSection = {
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '0 0 8px 8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const paragraph = {
  fontSize: '16px',
  color: '#4b5563',
  margin: '0 0 24px 0',
  lineHeight: '24px',
};

const actionParagraph = {
  fontSize: '16px',
  color: '#4b5563',
  margin: '24px 0 0 0',
  lineHeight: '24px',
  fontWeight: '500' as const,
};

const infoCard = {
  backgroundColor: '#f9fafb',
  padding: '24px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  margin: '0 0 24px 0',
};

const scheduleCard = {
  backgroundColor: '#f0f9ff',
  padding: '24px',
  borderRadius: '8px',
  borderLeft: '4px solid #0284c7',
  margin: '0 0 24px 0',
};

const cardHeading = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#1f2937',
  marginTop: '0',
  marginBottom: '16px',
};

const scheduleHeading = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#0c4a6e',
  marginTop: '0',
  marginBottom: '16px',
};

const detailRow = {
  margin: '8px 0',
};

const detailLabelColumn = {
  width: '40%',
  verticalAlign: 'top',
};

const detailValueColumn = {
  width: '60%',
  verticalAlign: 'top',
};

const detailLabel = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '0',
  fontWeight: '500' as const,
};

const detailValue = {
  fontSize: '14px',
  color: '#1f2937',
  margin: '0',
  lineHeight: '20px',
};

const link = {
  color: '#0284c7',
  textDecoration: 'none',
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

export default AdminNotificationEmail; 
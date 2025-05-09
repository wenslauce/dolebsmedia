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
import { format } from 'date-fns';

interface MeetingReminderEmailProps {
  name: string;
  meetingDate: string;
  meetingTime: string;
  meetingType: string;
  location?: string;
  contactName?: string;
  contactPhone?: string;
  solutionType: string;
  googleCalendarLink?: string;
  outlookCalendarLink?: string;
}

export const MeetingReminderEmail = ({
  name,
  meetingDate,
  meetingTime,
  meetingType,
  location,
  contactName,
  contactPhone,
  solutionType,
  googleCalendarLink,
  outlookCalendarLink,
}: MeetingReminderEmailProps) => {
  const formattedDate = format(new Date(meetingDate), 'MMMM dd, yyyy');
  const isPhoneMeeting = meetingType === 'phone';

  return (
    <Html>
      <Head />
      <Preview>Your Giertsen consultation is tomorrow at {meetingTime}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Your Solar Consultation Reminder</Heading>
          
          <Section style={section}>
            <Text style={greeting}>Hello {name},</Text>
            
            <Text style={text}>
              This is a friendly reminder that your {solutionType} consultation with Giertsen Energy Solutions 
              is scheduled for tomorrow, <strong>{formattedDate}</strong> at <strong>{meetingTime}</strong>.
            </Text>
            
            <Section style={reminderBox}>
              <Text style={reminderTitle}>Consultation Details:</Text>
              <Text style={reminderText}>Date: {formattedDate}</Text>
              <Text style={reminderText}>Time: {meetingTime}</Text>
              <Text style={reminderText}>
                Format: {isPhoneMeeting ? 'Phone Call' : 'In-person Meeting'}
              </Text>
              
              {isPhoneMeeting ? (
                <Text style={reminderText}>
                  One of our consultants will call you at your registered phone number.
                </Text>
              ) : (
                <>
                  <Text style={reminderText}>
                    Location: {location || 'Giertsen Office - 123 Solar Street, Green City'}
                  </Text>
                  <Text style={reminderText}>
                    Please arrive 5 minutes before your scheduled time.
                  </Text>
                </>
              )}

              {(contactName && contactPhone) && (
                <Text style={reminderText}>
                  Your consultant: {contactName} ({contactPhone})
                </Text>
              )}
            </Section>
            
            <Text style={text}>
              Please be prepared to discuss your energy needs, current electricity usage, and any questions 
              you may have about solar solutions. We recommend having a recent electricity bill on hand 
              if possible.
            </Text>
            
            {(googleCalendarLink || outlookCalendarLink) && (
              <Section style={calendarSection}>
                <Text style={calendarText}>Add to your calendar:</Text>
                <Section style={buttonContainer}>
                  {googleCalendarLink && (
                    <Button style={calendarButton} href={googleCalendarLink}>
                      Google Calendar
                    </Button>
                  )}
                  {outlookCalendarLink && (
                    <Button style={calendarButton} href={outlookCalendarLink}>
                      Outlook Calendar
                    </Button>
                  )}
                </Section>
              </Section>
            )}
            
            <Text style={text}>
              If you need to reschedule or have any questions, please reply to this email or
              call us at (555) 123-4567.
            </Text>
            
            <Text style={closing}>
              We look forward to helping you on your solar journey!
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

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0',
  maxWidth: '600px',
};

const heading = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#1f2937',
  marginBottom: '24px',
  textAlign: 'center' as const,
};

const section = {
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  marginBottom: '24px',
};

const greeting = {
  fontSize: '18px',
  color: '#1f2937',
  marginBottom: '24px',
};

const text = {
  fontSize: '16px',
  color: '#4b5563',
  margin: '16px 0',
  lineHeight: '24px',
};

const reminderBox = {
  backgroundColor: '#f0f9ff',
  padding: '20px',
  borderRadius: '6px',
  borderLeft: '4px solid #0284c7',
  margin: '24px 0',
};

const reminderTitle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#0c4a6e',
  marginBottom: '12px',
};

const reminderText = {
  fontSize: '16px',
  color: '#0c4a6e',
  margin: '8px 0',
  lineHeight: '22px',
};

const calendarSection = {
  margin: '24px 0',
};

const calendarText = {
  fontSize: '16px',
  color: '#4b5563',
  marginBottom: '12px',
};

const buttonContainer = {
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '16px',
};

const calendarButton = {
  backgroundColor: '#0284c7',
  color: '#ffffff',
  padding: '10px 16px',
  borderRadius: '4px',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: '500',
};

const closing = {
  fontSize: '16px',
  color: '#4b5563',
  marginTop: '24px',
  marginBottom: '12px',
};

const signature = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#1f2937',
};

const hr = {
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

export default MeetingReminderEmail; 
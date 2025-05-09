import { google } from 'googleapis';

interface CalendarEventProps {
  summary: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  attendees?: { email: string }[];
  location?: string;
}

/**
 * Creates a calendar event in Google Calendar using OAuth2
 */
export async function createCalendarEvent({
  summary,
  description,
  startDateTime,
  endDateTime,
  attendees = [],
  location,
}: CalendarEventProps) {
  try {
    // Load the credentials from environment variables
    const auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    // Set credentials using the refresh token
    auth.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    // Create Calendar client
    const calendar = google.calendar({ version: 'v3', auth });

    // Create the event
    const event = {
      summary,
      description,
      start: {
        dateTime: startDateTime,
        timeZone: 'Africa/Nairobi', // Use East African Time
      },
      end: {
        dateTime: endDateTime,
        timeZone: 'Africa/Nairobi',
      },
      attendees,
      ...(location && { location }),
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 day before
          { method: 'popup', minutes: 60 }, // 1 hour before
        ],
      },
    };

    // Insert the event
    const { data } = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      sendUpdates: 'all', // Send updates to all attendees
    });

    return data;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
} 
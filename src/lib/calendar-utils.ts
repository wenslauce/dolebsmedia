/**
 * Generates a Google Calendar event URL based on provided parameters
 */
export function generateGoogleCalendarLink(
  title: string,
  description: string,
  location: string,
  startDate: Date,
  endDate: Date
): string {
  // Format dates for Google Calendar URL
  const formatDate = (date: Date): string => {
    return date
      .toISOString()
      .replace(/-|:|\.\d+/g, "");
  };

  const formattedStart = formatDate(startDate);
  const formattedEnd = formatDate(endDate);

  // Encode parameters for URL
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    details: description,
    location: location,
    dates: `${formattedStart}/${formattedEnd}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
} 
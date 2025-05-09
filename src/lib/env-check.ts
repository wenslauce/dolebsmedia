/**
 * Utility to validate environment variables during app initialization
 * This helps detect configuration issues early
 */

export function checkEnvironmentVariables() {
  if (typeof window !== 'undefined') {
    // Only run on the server side
    return;
  }

  // Check Resend API key
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey || resendApiKey === 're_123456789_abcdefghijklmnopqrstuvwxyz') {
    console.warn('\x1b[33m%s\x1b[0m', '⚠️ WARNING: RESEND_API_KEY is not configured properly.');
    console.warn('\x1b[33m%s\x1b[0m', 'Email functionality will not work.');
    console.warn('\x1b[33m%s\x1b[0m', 'Please update your .env file with a valid Resend API key from https://resend.com');
  }

  // Check other critical environment variables
  if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) {
    console.warn('\x1b[33m%s\x1b[0m', '⚠️ WARNING: NEXT_PUBLIC_GOOGLE_API_KEY is not set.');
    console.warn('\x1b[33m%s\x1b[0m', 'Google Maps and other Google services may not work correctly.');
  }
} 
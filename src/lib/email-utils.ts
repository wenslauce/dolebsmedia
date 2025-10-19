/**
 * Email utilities for handling Resend-specific logic
 */

import { Resend } from "resend";

// Verified email for testing (should match your Resend account email)
export const VERIFIED_EMAIL = "info@dolebsmedia.co.ke";

// Initialize Resend with API key
let resendInstance: Resend | null = null;

/**
 * Get the Resend instance, initializing it if needed
 */
export function getResendInstance(): Resend | null {
  if (resendInstance) return resendInstance;
  
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "re_123456789_abcdefghijklmnopqrstuvwxyz") {
    console.error("Invalid Resend API key");
    return null;
  }
  
  try {
    resendInstance = new Resend(apiKey);
    return resendInstance;
  } catch (error) {
    console.error("Failed to initialize Resend:", error);
    return null;
  }
}

/**
 * Checks if we're in testing mode
 * In testing mode, we can only send emails to the verified email address
 */
export function isTestingMode(): boolean {
  // In production with a verified domain, you would return false here
  // For now, we're always in testing mode
  return true;
}

/**
 * Get the appropriate recipient email based on limitations
 * During testing, we can only send to our verified email
 */
export function getValidRecipientEmail(intendedEmail: string): string {
  if (!isTestingMode()) {
    return intendedEmail; // In production mode, use the actual email
  }
  
  // In testing mode, we can only send to our verified email
  return VERIFIED_EMAIL;
}

/**
 * Log appropriate messages for emails in testing mode
 */
export function logTestingModeInfo(intendedEmail: string, emailType: string): void {
  if (intendedEmail !== VERIFIED_EMAIL && isTestingMode()) {
    console.log(`⚠️ TESTING MODE: ${emailType} intended for ${intendedEmail} was sent to ${VERIFIED_EMAIL} instead`);
    console.log(`To send emails to any address, verify your domain with Resend.`);
  }
} 
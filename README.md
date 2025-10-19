# Dolebs Media Website

This is the website for Dolebs Media, a company providing solar energy solutions in Kenya.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` (if it doesn't exist already)
4. Configure environment variables (see below)
5. Run the development server: `npm run dev`

## Technologies & Stack

### Core Technologies
- **TypeScript**: Strongly typed programming language that builds on JavaScript
- **Next.js 14**: React framework with App Router for server-side rendering, routing, and optimizations
- **React 18**: JavaScript library for building user interfaces
- **Node.js**: JavaScript runtime environment

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Shadcn UI**: Accessible and customizable component system built on Radix UI
- **Radix UI**: Unstyled, accessible components for building high-quality design systems
- **Framer Motion**: Animation library for React
- **Lucide Icons**: Icon library with clean, consistent design

### State Management & Data Fetching
- **React Context API**: For global state management
- **React Query**: Data fetching and caching library
- **nuqs**: URL search parameter state management

### Performance Optimization
- **React Server Components (RSC)**: For optimized server-side rendering
- **Next.js Image Optimization**: For optimized image loading and display
- **Dynamic Imports**: For code splitting and lazy loading components

### Integrations & APIs
- **Resend**: Email delivery API for contact form submissions
- **Google Maps API**: For location and mapping features
- **Google Calendar API**: For event scheduling and management
- **Vercel Analytics**: For website usage tracking and performance monitoring

### Development Tools
- **ESLint**: JavaScript linting tool for identifying problematic patterns
- **Prettier**: Code formatter for consistent code style
- **PostCSS**: Tool for transforming CSS with JavaScript plugins
- **Autoprefixer**: Plugin to parse CSS and add vendor prefixes

### Deployment & Hosting
- **Vercel**: Platform for frontend frameworks and static sites, optimized for Next.js

## Environment Variables

The application uses several environment variables for various features. Make sure to set these up before running the application.

### Email Sending with Resend

The application uses [Resend](https://resend.com) to send emails. To configure email sending:

1. Create an account on [Resend](https://resend.com)
2. Go to the API Keys section in your dashboard and create a new API key
3. Add your API key to the `.env` file:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

**Important**: The default API key in the `.env` file is a placeholder and will not work. You must replace it with your own API key.

### Domain Setup for Production

For production use, you must:

1. Register your domain with Resend
2. Follow their verification process
3. Update the `from` email addresses in `src/app/api/send-email/route.ts`
4. Remove the recipient email restriction in the same file (allowing emails to be sent to any address)

### Other Environment Variables

- `NEXT_PUBLIC_GOOGLE_API_KEY`: Required for Google Maps and other Google services
- `ADMIN_EMAIL`: Email address for admin notifications
- `GOOGLE_CALENDAR_ENABLED`: Set to 'true' to enable Google Calendar integration
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REDIRECT_URI`, `GOOGLE_REFRESH_TOKEN`: Required for Google Calendar integration

## Troubleshooting

### "API key is invalid" Error

If you see this error when submitting the contact form, it means the Resend API key is not configured correctly. Make sure to:

1. Check that you've added a valid API key to the `.env` file
2. Restart the development server after updating the `.env` file
3. Check that the API key is in the correct format (should start with `re_`)

### "You can only send testing emails to your own email address" Error

This error occurs when using Resend's free tier without a verified domain. To fix:

1. Make sure the email set in the API route matches your Resend account email
2. Or verify a domain with Resend for unlimited sending

### Other Email Issues

- Check that you're using a valid "from" email address
- For production, make sure your domain is verified with Resend
- For testing, use `onboarding@resend.dev` as the "from" address

## License

All rights reserved, Dolebs Media. 
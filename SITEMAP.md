# Website Sitemap

This document provides a comprehensive overview of all pages and routes in the W. Giertsen Energy Solutions website (https://www.giertsenenergy.com/).

## Main Pages

- **Home Page**: `/` - Main landing page
- **404 Page**: Custom not-found page
- **Global Error Page**: Error handling page

## About Us Section

- **About Us**: `/about-us` - Company information and overview
- **Customer References**: `/about-us/customer-references` - Client testimonials and case studies

## Solutions Section

- **Solutions Overview**: `/solutions` - Main solutions page
- **Humanitarian Solutions**: `/solutions/humanitarian-solutions` - Solutions for humanitarian projects
- **Energy Management**: `/solutions/energy-management` - Energy management systems
- **Solar Operations & Maintenance**: `/solutions/solar-operations-maintenance` - Solar O&M services
- **Residential Solutions**: `/solutions/residential-solutions` - Home energy solutions
- **Supercapacitor Energy Storage**: `/solutions/supercapacitor-energy-storage` - Advanced energy storage
- **Commercial Solutions**: `/solutions/commercial-solutions` - Business energy solutions

## Career Section

- **Career**: `/career` - Job opportunities and company culture
- **Job Details**: `/career/jobs/[id]` - Dynamic pages for individual job postings

## Content Pages

- **News**: `/news` - Company news and updates
- **Testimonials**: `/testimonials` - Customer testimonials
- **Contact**: `/contact` - Contact information and form
- **Consultation**: `/consultation` - Consultation request form

## Legal & Policy Pages

- **Privacy Policy**: `/privacy-policy` - Privacy policy and data handling
- **Terms of Service**: `/terms-of-service` - Terms and conditions
- **Sustainability Policy**: `/sustainability-policy` - Environmental commitments
- **Cookie Policy**: `/cookie-policy` - Cookie usage policy

## Development/Example Pages

- **Async Boundary Example**: `/examples/async-boundary` - Development example page

## API Routes

- **Send Email**: `/api/send-email` - Email sending endpoint
- **Talent Pool**: `/api/talent-pool` - Talent pool management endpoint

## Server Actions

- **Contact Actions**: Server actions for contact form handling

## Page Structure Summary

```
/
├── about-us/
│   └── customer-references/
├── solutions/
│   ├── humanitarian-solutions/
│   ├── energy-management/
│   ├── solar-operations-maintenance/
│   ├── residential-solutions/
│   ├── supercapacitor-energy-storage/
│   └── commercial-solutions/
├── career/
│   └── jobs/
│       └── [id]/
├── news/
├── testimonials/
├── contact/
├── consultation/
├── privacy-policy/
├── terms-of-service/
├── sustainability-policy/
├── cookie-policy/
├── examples/
│   └── async-boundary/
├── api/
│   ├── send-email/
│   └── talent-pool/
└── actions/
```

## Notes

- Dynamic routes are indicated with `[id]` for job detail pages
- All pages have proper metadata and SEO optimization
- API routes are for backend functionality and not user-facing pages
- The sitemap includes both public-facing pages and development examples
- Priority levels in XML sitemap range from 0.3 (legal pages) to 1.0 (homepage)
- Change frequencies vary based on content type (weekly for news/careers, yearly for legal pages)

## Total Page Count

**Public Pages**: 18 main pages + dynamic job pages
**API Endpoints**: 2
**Development Examples**: 1


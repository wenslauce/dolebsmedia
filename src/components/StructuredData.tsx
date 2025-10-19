import React from 'react';

const OrganizationStructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dolebs Media Ltd",
    "url": "https://www.dolebsmedia.co.ke",
    "logo": "https://www.dolebsmedia.co.ke/images/logo.png",
    "description": "Dolebs Media Ltd offers exceptional photography, videography, graphic design, web development, and marketing services in Nairobi, Kenya. Transform your brand with our creative digital solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2547 98 740 674",
      "contactType": "customer service",
      "email": "info@dolebsmedia.co.ke",
      "areaServed": "KE",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "sameAs": [
      "https://www.facebook.com/dolebsmedia",
      "https://www.instagram.com/dolebsmedia",
      "https://www.linkedin.com/company/dolebsmedia",
      "https://twitter.com/dolebsmedia"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.dolebsmedia.co.ke/#organization",
    "name": "Dolebs Media Ltd",
    "image": "https://www.dolebsmedia.co.ke/images/logo.png",
    "description": "Professional photography, videography, graphic design, web development, and marketing services in Nairobi, Kenya.",
    "url": "https://www.dolebsmedia.co.ke",
    "telephone": "+2547 98 740 674",
    "email": "info@dolebsmedia.co.ke",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nairobi",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.2921,
      "longitude": 36.8219
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creative Digital Services",
    "description": "Professional photography, videography, graphic design, web development, and marketing services",
    "provider": {
      "@type": "Organization",
      "name": "Dolebs Media Ltd",
      "url": "https://www.dolebsmedia.co.ke"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Creative Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photography Services",
            "description": "Professional photography services including commercial, corporate, and event photography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Videography Services",
            "description": "Professional video production including corporate videos, promotional content, and event coverage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Graphic Design Services",
            "description": "Creative graphic design including logo design, branding, and marketing materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development Services",
            "description": "Custom web development and hosting services for businesses and organizations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing & PR Services",
            "description": "Strategic marketing and public relations services to grow your brand"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Communication Services",
            "description": "Strategic communication services to enhance your brand messaging"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
    </>
  );
};

export default OrganizationStructuredData;

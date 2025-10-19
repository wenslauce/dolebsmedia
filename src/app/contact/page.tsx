import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import MapEmbed from "./MapEmbed";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact Dolebs Media | Get in Touch",
  description: "Contact Dolebs Media for creative digital solutions. Reach out to our team of experts for photography, videography, and media services.",
};

interface OfficeLocation {
  city: string;
  address: string[];
  phone: string;
  email: string;
  isHQ?: boolean;
}

const officeLocations: OfficeLocation[] = [
  {
    city: "Nairobi",
    address: ["Nairobi, Kenya"],
    phone: "+2547 98 740 674",
    email: "info@dolebsmedia.co.ke"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/contact-hero.avif"
            alt="Contact Dolebs Media"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
            <div className="container-custom">
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                  Contact Us
                </h1>
                <p className="text-white/80 text-lg">
                  Get in touch with our team of creative experts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-700 mb-8">
                Whether you have a question about our services, want to partner with us,
                or are interested in a career at Dolebs Media, we're here to help.
              </p>

              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
                Our Office
              </h2>
              <div className="space-y-8">
                {officeLocations.map((office) => (
                  <div key={office.city} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-secondary mb-4">
                      {office.city} Office
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          {office.address.map((line, index) => (
                            <p key={index} className="text-gray-700">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p className="text-gray-700">{office.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${office.email}`} className="text-primary hover:text-primary/90">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-12 text-center">
              Find Us
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md">
              <MapEmbed />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 
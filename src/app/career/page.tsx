import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import TalentPoolFormModal from "@/components/TalentPoolFormModal";

export const metadata = {
  title: "Career at WGES | Join Our Team",
  description: "Join W. Giertsen Energy Solutions and help shape the future of sustainable energy. Explore our career opportunities and job openings.",
};

interface JobPosting {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
}

const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: "Solar Project Engineer",
    location: "Berlin, Germany",
    type: "Full-time",
    department: "Engineering",
    description: "Design and implement commercial-scale solar installations, working with cutting-edge photovoltaic technology."
  },
  {
    id: 2,
    title: "Energy Systems Analyst",
    location: "Hamburg, Germany",
    type: "Full-time",
    department: "Analytics",
    description: "Analyze energy consumption patterns and develop optimization strategies for our clients."
  },
  {
    id: 3,
    title: "Project Manager",
    location: "Munich, Germany",
    type: "Full-time",
    department: "Operations",
    description: "Lead and coordinate sustainable energy projects from conception to completion."
  }
];

export default function CareerPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/careers-hero.avif"
            alt="Careers at WGES"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
            <div className="container-custom">
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                  Career Opportunities
                </h1>
                <p className="text-white/80 text-lg">
                  Help shape the future of sustainable energy with W. Giertsen Energy Solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
              Why Join WGES?
            </h2>
            <p className="text-gray-700">
              Be part of a team that's driving the transition to sustainable energy.
              We offer competitive benefits, professional development opportunities,
              and the chance to make a real impact on climate protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Innovation</h3>
              <p className="text-gray-700">
                Work with cutting-edge technology and contribute to innovative energy solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Growth</h3>
              <p className="text-gray-700">
                Continuous learning opportunities and clear career development paths.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Impact</h3>
              <p className="text-gray-700">
                Make a real difference in the fight against climate change.
              </p>
            </div>
          </div>
        </div>

        {/* Talent Pool Section */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
                Join Our Talent Pool
              </h2>
              <p className="text-gray-700 mb-8">
                We're not hiring at the moment, but we'd love to keep your information for future opportunities.
                When a suitable position opens up, we'll reach out to qualified candidates from our talent pool.
              </p>
              
              <TalentPoolFormModal />
              
              <div className="mt-10 text-sm text-gray-500 max-w-2xl mx-auto">
                <p>
                  Disclaimer: Submitting your CV does not guarantee a response or future employment. 
                  While we may not have open positions at the moment, we will keep your application on file for future opportunities. 
                  If a suitable role becomes available, we will reach out to qualified candidates. 
                  Thank you for your interest in joining W. Giertsen Energy Solutions!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container-custom py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-12 text-center">
            Benefits & Perks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
              <h3 className="text-xl font-semibold text-secondary mb-3">Health & Wellness</h3>
              <p className="text-gray-700">
                Comprehensive health insurance and wellness programs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
              <h3 className="text-xl font-semibold text-secondary mb-3">Work-Life Balance</h3>
              <p className="text-gray-700">
                Flexible working hours and remote work options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
              <h3 className="text-xl font-semibold text-secondary mb-3">Professional Development</h3>
              <p className="text-gray-700">
                Training programs and conference attendance support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
              <h3 className="text-xl font-semibold text-secondary mb-3">Team Events</h3>
              <p className="text-gray-700">
                Regular team building activities and social events.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 
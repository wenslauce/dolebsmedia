import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

interface JobPosting {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities?: string[];
  qualifications?: string[];
}

// This would typically come from a database or API
const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: "Solar Project Engineer",
    location: "Berlin, Germany",
    type: "Full-time",
    department: "Engineering",
    description: "Design and implement commercial-scale solar installations, working with cutting-edge photovoltaic technology.",
    responsibilities: [
      "Design solar PV systems according to client requirements and site conditions",
      "Conduct technical feasibility studies and energy yield assessments",
      "Create detailed technical documentation and project plans",
      "Collaborate with installation teams to ensure proper implementation",
      "Monitor system performance and suggest optimizations"
    ],
    qualifications: [
      "Bachelor's or Master's degree in Electrical/Mechanical Engineering or related field",
      "3+ years of experience in solar PV system design",
      "Proficiency with solar design software (PVsyst, AutoCAD, etc.)",
      "Knowledge of relevant industry codes and standards",
      "Strong analytical and problem-solving skills"
    ]
  },
  {
    id: 2,
    title: "Energy Systems Analyst",
    location: "Hamburg, Germany",
    type: "Full-time",
    department: "Analytics",
    description: "Analyze energy consumption patterns and develop optimization strategies for our clients.",
    responsibilities: [
      "Collect and analyze energy consumption data from various sources",
      "Develop models to forecast energy usage and identify optimization opportunities",
      "Create detailed reports with actionable recommendations",
      "Work with clients to implement energy-saving strategies",
      "Monitor and evaluate the effectiveness of implemented solutions"
    ],
    qualifications: [
      "Bachelor's or Master's degree in Data Science, Engineering, or related field",
      "Experience with data analysis and visualization tools",
      "Knowledge of energy systems and sustainability principles",
      "Strong analytical and statistical skills",
      "Excellent communication abilities to explain complex concepts"
    ]
  },
  {
    id: 3,
    title: "Project Manager",
    location: "Munich, Germany",
    type: "Full-time",
    department: "Operations",
    description: "Lead and coordinate sustainable energy projects from conception to completion.",
    responsibilities: [
      "Manage project scope, schedule, budget, and quality",
      "Coordinate with internal teams, clients, and contractors",
      "Identify and mitigate project risks",
      "Ensure compliance with relevant regulations and standards",
      "Report project status to stakeholders and leadership"
    ],
    qualifications: [
      "Bachelor's degree in Business, Engineering, or related field",
      "PMP certification or equivalent project management experience",
      "3+ years of experience managing renewable energy projects",
      "Strong leadership and communication skills",
      "Experience with project management tools and methodologies"
    ]
  }
];

export async function generateStaticParams() {
  return jobPostings.map((job) => ({
    id: job.id.toString(),
  }));
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const jobId = parseInt(params.id);
  const job = jobPostings.find((job) => job.id === jobId);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/career" className="hover:text-primary">Career</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{job.title}</span>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Job Header */}
              <div className="relative bg-gradient-to-r from-secondary to-secondary/80 p-8 text-white">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">{job.title}</h1>
                <div className="flex flex-wrap gap-6 text-white/90">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {job.department}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.type}
                  </div>
                </div>
              </div>

              {/* Job Content */}
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-secondary mb-4">Overview</h2>
                  <p className="text-gray-700">{job.description}</p>
                </div>

                {job.responsibilities && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-secondary mb-4">Key Responsibilities</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {job.qualifications && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-secondary mb-4">Qualifications</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {job.qualifications.map((qualification, index) => (
                        <li key={index}>{qualification}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Apply Button */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold text-secondary">Interested in this position?</h3>
                      <p className="text-gray-600">We'd love to hear from you!</p>
                    </div>
                    <Link
                      href={`/contact?job=${job.id}`}
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-all inline-block text-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to all jobs */}
            <div className="mt-8 text-center">
              <Link
                href="/career"
                className="text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all openings
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 
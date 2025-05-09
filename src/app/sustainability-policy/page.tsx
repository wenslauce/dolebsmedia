import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FileText, Leaf, Globe, Lightbulb, Recycle, Clock, Building, Users, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Sustainability Policy | WGES",
  description: "W. Giertsen Energy Solutions commitment to environmental sustainability and responsible business practices.",
};

export default function SustainabilityPolicyPage() {
  const lastUpdated = "May 09, 2025";

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/sustainability-hero.avif"
            alt="Sustainability Policy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/90 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
                  <Leaf className="h-4 w-4 text-accent-gold" />
                  <span className="text-sm font-medium text-white">Environmental Commitment</span>
                </span>
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                  Sustainability Policy
                </h1>
                <p className="text-white/90 text-lg max-w-3xl">
                  Our commitment to creating a more sustainable future through responsible business practices and renewable energy solutions.
                </p>
                <div className="flex items-center gap-2 mt-6 text-white/60">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Policy Content */}
        <div className="container-custom py-16">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-100">
              <div className="space-y-12">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Our Commitment to Sustainability
                  </h2>
                  <p className="text-gray-700 mb-6">
                    At W. Giertsen Energy Solutions, sustainability is at the core of how we design, deliver, and support our solar systems. We focus on providing long-lasting, efficient, and low-maintenance energy solutions that reduce dependency on diesel generators and other environmentally harmful sources — particularly in remote and off-grid locations.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                    <h3 className="text-lg font-medium text-secondary mb-4">Our approach emphasises practical impact:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <p className="text-gray-700">We source durable components to extend system life and reduce waste.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <p className="text-gray-700">Our solar solutions are engineered for minimal environmental disruption during transport, installation, and maintenance.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <p className="text-gray-700">By replacing fossil fuel dependency with clean solar power, we help our clients and partners reduce carbon emissions across humanitarian, institutional, and commercial operations.</p>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700">
                    We are continuously learning and adapting to improve the environmental responsibility of our work — from supply chain to system performance. Sustainability for us means doing what is locally appropriate, technically sound, and environmentally responsible — with long-term value in mind.
                  </p>
                </section>

                {/* Renewable Energy Focus */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Renewable Energy Focus
                  </h2>
                  <p className="text-gray-700 mb-6">
                    As a renewable energy solutions provider, we are at the forefront of the transition to a cleaner energy future. Our business model is centered around accelerating the adoption of renewable energy technologies.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Lightbulb className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium text-secondary">Solar Energy Solutions</h3>
                      </div>
                      <p className="text-gray-700">
                        We design, install, and maintain high-quality solar energy systems that provide clean, renewable electricity to businesses and communities.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium text-secondary">Energy Storage</h3>
                      </div>
                      <p className="text-gray-700">
                        We offer energy storage solutions that enable greater integration of renewable energy and enhance energy security and resilience.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium text-secondary">Energy Efficiency</h3>
                      </div>
                      <p className="text-gray-700">
                        We help our clients optimize their energy use through energy-efficient systems and smart energy management solutions.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium text-secondary">Training & Education</h3>
                      </div>
                      <p className="text-gray-700">
                        We provide training and educational resources to build capacity for renewable energy adoption and maintenance.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Sustainable Business Practices */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Recycle className="h-5 w-5 text-primary" />
                    Sustainable Business Practices
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We integrate sustainability considerations into all aspects of our business operations and decision-making processes.
                  </p>
                  <div className="space-y-4">
                    <div className="p-5 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Sustainable Supply Chain</h3>
                      <p className="text-gray-700">
                        We work with suppliers who share our commitment to sustainability and implement a responsible procurement policy that considers environmental and social factors in addition to economic ones.
                      </p>
                    </div>
                    <div className="p-5 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Sustainable Product Lifecycle</h3>
                      <p className="text-gray-700">
                        We design our products and services with consideration for their entire lifecycle, from sourcing of materials to end-of-life management. We are committed to extending product lifespans, facilitating repairs, and ensuring proper recycling of components.
                      </p>
                    </div>
                    <div className="p-5 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Green Facilities</h3>
                      <p className="text-gray-700">
                        We design and operate our facilities to minimize environmental impact, incorporating energy efficiency, water conservation, and waste reduction measures. We aim to achieve recognized green building certifications for our major facilities.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Social Responsibility */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Social Responsibility</h2>
                  <p className="text-gray-700 mb-4">
                    We recognize our responsibility to contribute positively to the communities where we operate and to society at large.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
                    <h3 className="font-medium text-blue-800 mb-3">Our Community Commitments:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Creating quality jobs and investing in employee development</li>
                      <li>Respecting human rights throughout our operations and supply chain</li>
                      <li>Engaging with local communities and addressing their concerns</li>
                      <li>Supporting local economic development through our business activities</li>
                      <li>Contributing to community development initiatives and philanthropy</li>
                    </ul>
                  </div>
                  <p className="text-gray-700">
                    We believe that access to clean, reliable energy is a foundation for economic development and improved quality of life. Our renewable energy solutions aim to expand energy access while reducing environmental impacts.
                  </p>
                </section>

                {/* Governance and Reporting */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Governance and Reporting</h2>
                  <p className="text-gray-700 mb-4">
                    We have established governance structures and processes to ensure effective implementation of our sustainability policy.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Sustainability Governance</h3>
                      <p className="text-gray-700 text-sm">
                        Our sustainability efforts are overseen by senior management, with regular reporting to the Board of Directors. We have a dedicated sustainability team responsible for coordinating sustainability initiatives across the company.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Performance Monitoring</h3>
                      <p className="text-gray-700 text-sm">
                        We set specific, measurable sustainability targets and regularly monitor our performance against these targets. We use key performance indicators (KPIs) to track progress and identify areas for improvement.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Transparency and Reporting</h3>
                      <p className="text-gray-700 text-sm">
                        We are committed to transparency in our sustainability performance. We publish an annual sustainability report that discloses our environmental and social impacts, achievements, and challenges.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Stakeholder Engagement</h3>
                      <p className="text-gray-700 text-sm">
                        We actively engage with our stakeholders—including customers, employees, suppliers, local communities, and investors—to understand their expectations and concerns regarding our sustainability performance.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Continuous Improvement */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Continuous Improvement</h2>
                  <p className="text-gray-700 mb-4">
                    We recognize that sustainability is a journey of continuous improvement. We regularly review and update our sustainability policy, strategies, and targets to reflect evolving scientific understanding, stakeholder expectations, and best practices.
                  </p>
                  <p className="text-gray-700">
                    We encourage innovation and creative thinking to advance sustainability within our company and across our industry. We participate in industry initiatives and partnerships to share knowledge and collaborate on sustainability challenges.
                  </p>
                </section>

                {/* CTAs */}
                <section className="bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-xl p-8">
                  <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold text-secondary mb-6">Ready to Make a Sustainable Impact?</h2>
                    <p className="text-gray-600 mb-8">
                      Join us in creating a more sustainable future through innovative solar energy solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link
                        href="/consultation"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg inline-flex items-center font-medium transition-all duration-300 group"
                      >
                        Get Quote
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/contact"
                        className="bg-white hover:bg-gray-50 text-secondary border border-gray-200 px-8 py-4 rounded-lg inline-flex items-center font-medium transition-all duration-300"
                      >
                        Contact Us
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Links */}
        <div className="bg-gray-50 py-12">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold text-secondary mb-8 text-center">Related Policies</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/privacy-policy" 
                className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3"
              >
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-medium text-secondary">Privacy Policy</span>
              </Link>
              <Link 
                href="/terms-of-service" 
                className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3"
              >
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-medium text-secondary">Terms of Service</span>
              </Link>
              <Link 
                href="/cookie-policy" 
                className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3"
              >
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-medium text-secondary">Cookie Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 
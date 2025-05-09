import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Smart Energy Management | WGES",
  description: "Optimize your energy consumption with intelligent management solutions. Reduce costs and increase efficiency with WGES's smart energy management systems.",
};

export default function EnergyManagementPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[500px]">
          <Image
            src="/images/energy-management.avif"
            alt="Smart Energy Management"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
            <div className="container-custom">
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                  Smart Energy Management
                </h1>
                <p className="text-white/80 text-lg mb-8">
                  Optimize your energy consumption with intelligent control systems
                </p>
                <Link
                  href="/consultation"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md inline-block font-medium transition-all"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
                Intelligent Energy Management for Your Business
              </h2>
              <p className="text-gray-700 mb-4">
                Our smart energy management solutions help you optimize energy consumption,
                reduce costs, and increase efficiency. With real-time monitoring and intelligent
                control systems, you can make informed decisions about your energy usage.
              </p>
              <p className="text-gray-700 mb-4">
                We integrate all your energy systems into a single, intelligent platform
                that provides complete visibility and control over your energy infrastructure.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Real-time monitoring and control</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Automated optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Detailed analytics and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Smart load management</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/energy-dashboard.avif"
                  alt="Energy Management Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/control-center.avif"
                  alt="Energy Control Center"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/smart-monitoring.avif"
                  alt="Smart Energy Monitoring"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-12 text-center">
              Key Features of Our Energy Management System
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-secondary mb-3">Real-time Monitoring</h3>
                <p className="text-gray-700">
                  Monitor energy consumption, production, and system performance in real-time
                  through our intuitive dashboard.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-secondary mb-3">Smart Control</h3>
                <p className="text-gray-700">
                  Automated control systems optimize energy flow and usage based on
                  real-time data and predefined parameters.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-secondary mb-3">Analytics</h3>
                <p className="text-gray-700">
                  Advanced analytics provide insights into consumption patterns and
                  identify optimization opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container-custom py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-12 text-center">
            Benefits of Smart Energy Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
              <h3 className="text-xl font-semibold text-secondary mb-3">Cost Reduction</h3>
              <p className="text-gray-700">
                Reduce energy costs through optimized consumption and smart load management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
              <h3 className="text-xl font-semibold text-secondary mb-3">Efficiency</h3>
              <p className="text-gray-700">
                Improve overall system efficiency with intelligent control and automation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
              <h3 className="text-xl font-semibold text-secondary mb-3">Transparency</h3>
              <p className="text-gray-700">
                Gain complete visibility into your energy consumption and production.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
              <h3 className="text-xl font-semibold text-secondary mb-3">Sustainability</h3>
              <p className="text-gray-700">
                Reduce your carbon footprint through optimized energy usage and management.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 
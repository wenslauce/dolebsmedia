import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FileText, Scale, Globe, AlertTriangle, Award, Clock } from "lucide-react";

export const metadata = {
  title: "Terms of Service | W. Giertsen Energy Solutions",
  description: "Terms and conditions for using W. Giertsen Energy Solutions services and website.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "May 09, 2025";

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/terms-hero.avif"
            alt="Terms of Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/90 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
                  <Scale className="h-4 w-4 text-accent-gold" />
                  <span className="text-sm font-medium text-white">Terms & Conditions</span>
                </span>
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                  Terms of Service
                </h1>
                <p className="text-white/90 text-lg max-w-3xl">
                  These terms and conditions outline the rules and regulations for the use of W. Giertsen Energy Solutions' website and services.
                </p>
                <div className="flex items-center gap-2 mt-6 text-white/60">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="container-custom py-16">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-100">
              <div className="space-y-12">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Introduction
                  </h2>
                  <p className="text-gray-700 mb-4">
                    By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use W. Giertsen Energy Solutions' website if you do not accept all of the terms and conditions stated on this page.
                  </p>
                  <p className="text-gray-700">
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to W. Giertsen Energy Solutions. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.
                  </p>
                </section>

                {/* Website Usage */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Website Usage
                  </h2>
                  <p className="text-gray-700 mb-4">
                    The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>This website uses cookies to monitor browsing preferences. If you allow cookies to be used, personal information may be stored by us for use by third parties as outlined in our privacy policy.</li>
                    <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
                    <li>You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                    <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
                  </ul>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Intellectual Property
                  </h2>
                  <p className="text-gray-700 mb-4">
                    This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                  </p>
                  <p className="text-gray-700 mb-4">
                    All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
                  </p>
                  <p className="text-gray-700">
                    Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                  </p>
                </section>

                {/* Services and Products */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Services and Products</h2>
                  <p className="text-gray-700 mb-4">
                    All services and products displayed on this website are subject to availability. We reserve the right to discontinue any service or product at any time.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Prices for our products and services are subject to change without notice. We reserve the right at any time to modify or discontinue any service or product without notice.
                  </p>
                  <p className="text-gray-700">
                    We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of any service or product.
                  </p>
                </section>

                {/* Accuracy of Information */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Accuracy of Information</h2>
                  <p className="text-gray-700 mb-4">
                    We are not responsible if information made available on this site is not accurate, complete, or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete, or more timely sources of information.
                  </p>
                  <p className="text-gray-700">
                    Any reliance on the material on this site is at your own risk. This site may contain certain historical information which is not necessarily current and is provided for reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    Limitations of Liability
                  </h2>
                  <p className="text-gray-700 mb-4">
                    In no event shall W. Giertsen Energy Solutions, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort, or otherwise, and W. Giertsen Energy Solutions, including its officers, directors, and employees shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
                  </p>
                  <p className="text-gray-700">
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
                  </p>
                </section>

                {/* Governing Law */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Governing Law</h2>
                  <p className="text-gray-700 mb-4">
                    These terms and conditions are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </section>

                {/* Indemnification */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Indemnification</h2>
                  <p className="text-gray-700 mb-4">
                    You agree to indemnify, defend and hold harmless W. Giertsen Energy Solutions, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations.
                  </p>
                  <p className="text-gray-700">
                    W. Giertsen Energy Solutions reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with W. Giertsen Energy Solutions in asserting any available defenses.
                  </p>
                </section>

                {/* Changes to Terms */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Changes to Terms</h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.
                  </p>
                  <p className="text-gray-700">
                    Your continued use of or access to our website or the services following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    Questions about the Terms of Service should be sent to us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-medium text-secondary mb-2">W. Giertsen Energy Solutions</p>
                    <p className="text-gray-700">Email: energy@giertsen.no</p>
                    <p className="text-gray-700">Phone: +254 742 487 867</p>
                    <p className="text-gray-700">Address: Church Road No 90, Westlands, Nairobi, Kenya</p>
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
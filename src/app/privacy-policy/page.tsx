import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Shield, Lock, Eye, FileText, Users, Clock } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | WGES",
  description: "Learn how W. Giertsen Energy Solutions collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 09, 2025";

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/privacy-hero.avif"
            alt="Privacy Policy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/90 flex items-center">
          <div className="container-custom">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
                  <Shield className="h-4 w-4 text-accent-gold" />
                  <span className="text-sm font-medium text-white">Data Protection</span>
                </span>
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                  Privacy Policy
                </h1>
                <p className="text-white/90 text-lg max-w-3xl">
              At W. Giertsen Energy Solutions, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data and tell you about your privacy rights.
            </p>
                <div className="flex items-center gap-2 mt-6 text-white/60">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Content */}
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
                    This privacy policy applies to all personal data collected through our website, mobile applications, and during the course of our business activities when you interact with us as a customer, supplier, or business partner.
                  </p>
                  <p className="text-gray-700">
                    W. Giertsen Energy Solutions ("we", "us", "our") is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy policy.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Information We Collect
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We may collect the following personal data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>Name and contact information including email address, phone number, and mailing address</li>
                    <li>Demographic information such as postcode, preferences, and interests</li>
                    <li>Information relevant to customer surveys and/or offers</li>
                    <li>Information about your property for solar installation assessment</li>
                    <li>Details of your interactions with our website, including browsing patterns and technical information such as IP address, browser type, and operating system</li>
                  </ul>
                  <p className="text-gray-700">
                    We collect this information through direct interactions, automated technologies or interactions, and third parties.
                  </p>
                </section>

                {/* How We Use Your Information */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We use your personal data for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>To provide and improve our products and services</li>
                    <li>To personalize your experience and deliver content and product offerings relevant to your interests</li>
                    <li>To process and deliver your order including managing payments, fees, and charges</li>
                    <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy</li>
                    <li>To administer and protect our business and website</li>
                    <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you</li>
                    <li>To make suggestions and recommendations to you about goods or services that may be of interest to you</li>
                  </ul>
                  <p className="text-gray-700">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data where we need to perform the contract we are about to enter into or have entered into with you, where it is necessary for our legitimate interests, or where we need to comply with a legal obligation.
                  </p>
                </section>

                {/* Data Protection */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Data Protection
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
                  </p>
                  <p className="text-gray-700">
                    We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                  </p>
                </section>

                {/* Cookies */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                  </p>
                  <p className="text-gray-700 mb-4">
                    For detailed information on the cookies we use and the purposes for which we use them, please see our <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
                  </p>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Your Rights</h2>
                  <p className="text-gray-700 mb-4">
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>Request access to your personal data</li>
                    <li>Request correction of your personal data</li>
                    <li>Request erasure of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing your personal data</li>
                    <li>Request transfer of your personal data</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                  <p className="text-gray-700">
                    If you wish to exercise any of these rights, please contact us using the details provided below.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-medium text-secondary mb-2">W. Giertsen Energy Solutions</p>
                    <p className="text-gray-700">Email: energy@giertsen.no</p>
                    <p className="text-gray-700">Phone: +254 742 487 867</p>
                    <p className="text-gray-700">Address: Church Road No 90, Westlands, Nairobi, Kenya</p>
                  </div>
                </section>

                {/* Changes to Policy */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 mb-4">
                    We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "last updated" date.
                  </p>
                  <p className="text-gray-700">
                    You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
                  </p>
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
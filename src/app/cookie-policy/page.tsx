import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FileText, Cookie, Bell, Settings, Info, Clock } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | WGES",
  description: "Information about how W. Giertsen Energy Solutions uses cookies on our website.",
};

export default function CookiePolicyPage() {
  const lastUpdated = "May 09, 2025";

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/cookie-hero.avif"
            alt="Cookie Policy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/90 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
                  <Cookie className="h-4 w-4 text-accent-gold" />
                  <span className="text-sm font-medium text-white">Website Cookies</span>
                </span>
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                  Cookie Policy
                </h1>
                <p className="text-white/90 text-lg max-w-3xl">
                  This Cookie Policy explains how W. Giertsen Energy Solutions uses cookies and similar technologies to recognize you when you visit our website.
                </p>
                <div className="flex items-center gap-2 mt-6 text-white/60">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Policy Content */}
        <div className="container-custom py-16">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-100">
              <div className="space-y-12">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    Introduction
                  </h2>
                  <p className="text-gray-700 mb-4">
                    This Cookie Policy explains how W. Giertsen Energy Solutions ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at <Link href="/" className="text-primary hover:underline">giertsenenergy.com</Link> ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                  </p>
                  <p className="text-gray-700 mb-4">
                    In some cases, we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
                  </p>
                </section>

                {/* What are Cookies */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Cookie className="h-5 w-5 text-primary" />
                    What are Cookies?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Cookies set by the website owner (in this case, W. Giertsen Energy Solutions) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
                  </p>
                </section>

                {/* Why We Use Cookies */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Why We Use Cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics and other purposes.
                  </p>
                  <p className="text-gray-700">
                    The specific types of first and third party cookies served through our Website and the purposes they perform are described below.
                  </p>
                </section>

                {/* Types of Cookies */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Types of Cookies We Use</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-medium text-secondary mb-3">Essential Cookies</h3>
                      <p className="text-gray-700 mb-2">
                        These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">Purpose:</span> To enable basic functionality such as security, network management, and accessibility.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-medium text-secondary mb-3">Functional Cookies</h3>
                      <p className="text-gray-700 mb-2">
                        These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">Purpose:</span> To remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-medium text-secondary mb-3">Analytics Cookies</h3>
                      <p className="text-gray-700 mb-2">
                        These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">Purpose:</span> To recognize and count the number of visitors and to see how visitors move around our website when they are using it.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-medium text-secondary mb-3">Marketing Cookies</h3>
                      <p className="text-gray-700 mb-2">
                        These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">Purpose:</span> To deliver advertisements that are relevant to you and your interests.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Third-Party Cookies */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Third-Party Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
                  </p>
                  <div className="space-y-4 mt-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Google Analytics</h3>
                      <p className="text-gray-700 text-sm">Used for website analytics and to understand how visitors interact with our website.</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">Facebook Pixel</h3>
                      <p className="text-gray-700 text-sm">Used to deliver relevant advertisements to you on Facebook and to track conversions.</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-secondary mb-2">LinkedIn Insight Tag</h3>
                      <p className="text-gray-700 text-sm">Used to enable in-depth campaign reporting and to help us unlock insights about visitors that may come to our website via LinkedIn campaigns.</p>
                    </div>
                  </div>
                </section>

                {/* Cookie Management */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    How to Manage Cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Most web browsers allow some control of most cookies through browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
                  </p>
                  <p className="text-gray-700 mb-6">
                    When you first visit our website, we present you with a cookie consent banner that allows you to choose which types of cookies you accept. You can change your cookie preferences at any time by clicking on the "Cookie Settings" button in the footer of our website.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="font-medium text-blue-800 mb-3">Browser-specific instructions to disable cookies:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        <span className="font-medium">Chrome:</span> Settings → Privacy and Security → Cookies and other site data
                      </li>
                      <li>
                        <span className="font-medium">Firefox:</span> Options → Privacy & Security → Enhanced Tracking Protection
                      </li>
                      <li>
                        <span className="font-medium">Safari:</span> Preferences → Privacy → Cookies and website data
                      </li>
                      <li>
                        <span className="font-medium">Edge:</span> Settings → Site permissions → Cookies and site data
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Do Not Track */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Do Not Track</h2>
                  <p className="text-gray-700 mb-4">
                    Some Internet browsers - like Internet Explorer, Firefox, and Safari - include the ability to transmit "Do Not Track" or "DNT" signals. Since uniform standards for "DNT" signals have not been adopted, our website does not currently process or respond to "DNT" signals.
                  </p>
                  <p className="text-gray-700">
                    W. Giertsen Energy Solutions takes privacy and meaningful choice seriously and will make efforts to continue to monitor developments around DNT browser technology and the implementation of a standard.
                  </p>
                </section>

                {/* Changes to Cookie Policy */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Changes to This Cookie Policy</h2>
                  <p className="text-gray-700 mb-4">
                    We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>
                  <p className="text-gray-700">
                    The date at the top of this Cookie Policy indicates when it was last updated.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-semibold text-secondary mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our use of cookies or other technologies, please contact us at:
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
                href="/terms-of-service" 
                className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3"
              >
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-medium text-secondary">Terms of Service</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 
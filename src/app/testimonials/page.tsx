import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsPageClient from "./TestimonialsPageClient";

export const metadata = {
  title: "Customer Testimonials | W. Giertsen Energy Solutions",
  description: "Discover what our customers say about their experience with W. Giertsen Energy Solutions. Read about real-world impact and success stories from homes and businesses across the country.",
};

export default function TestimonialsPage() {
  // Additional testimonials to supplement those in TestimonialsSection
  const additionalTestimonials = [
    {
      content: "I would like to say, unequivocally, that Paul Garrod who installed my W. Giertsen Solar System a few months ago, was and remains probably the most professional person I have had the experience of working with since starting my project here in Burguret, in Laikipia. His paperwork, i.e. quotations etc. were excellent. Clear and simple. His men were very professional. They worked quickly, efficiently, quietly and were impeccable in clearing up at the end of the day. His timeline was kept. The entire experience was a 100% satisfaction and a pleasure.",
      author: "Janine Milne",
      date: "March 2024",
      rating: 5,
      image: "/images/testimonials/customer-1.jpg"
    },
    {
      content: "Our solar PV system was fitted in August 2024. From the time of ordering to the time of installation, the process was carried out efficiently, within the timelines given. The system has worked well. Even over the Christmas period with a full house and very high use of power, the system did not falter. I have had to contact the installer, Paul, on two occasions, and my concerns have been dealt with promptly, even out of 'office' hours. We are very happy with the final result and would recommend the system to others.",
      author: "J.P Brooks",
      date: "January 2025",
      rating: 5,
      image: "/images/testimonials/customer-2.jpg"
    },
    {
      content: "The maintenance team responds quickly and the system monitoring allowed them to detect an issue before it affected our operations. Five years in and our system is performing above expectations. Excellent investment!",
      author: "Thomas Mbeki",
      company: "Nairobi Medical Center",
      date: "December 2024",
      rating: 5,
      image: "/images/testimonials/customer-3.jpg"
    },
    {
      content: "As a school administrator, I was skeptical about the upfront investment, but W. Giertsen made the financial case clear and the implementation smooth. Our campus now runs primarily on solar, and we use it as a teaching tool for our students.",
      author: "Dr. Elizabeth Wangari",
      company: "Green Valley Academy",
      date: "October 2024",
      rating: 5,
      image: "/images/testimonials/customer-4.jpg"
    },
    {
      content: "Our manufacturing facility needed reliable power without interruptions. The hybrid solar system installed by W. Giertsen team has eliminated our downtime issues and reduced operating costs by nearly 40%. The ROI has been better than projected.",
      author: "Klaus Mueller",
      company: "Precision Parts Kenya Ltd",
      date: "November 2024",
      rating: 5,
      image: "/images/testimonials/customer-5.jpg"
    },
    {
      content: "The integration of the energy storage solution with our existing solar panels was seamless. Now we have true energy independence and haven't experienced a single outage in 14 months.",
      author: "Maria Solberg",
      date: "February 2025",
      rating: 5,
      image: "/images/testimonials/customer-6.jpg"
    }
  ];

  const benefits = [
    {
      title: "Cost Savings",
      description: "Lower your electricity bills with renewable energy.",
      icon: "saving"
    },
    {
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint for a greener planet.",
      icon: "eco"
    },
    {
      title: "Reliable Power",
      description: "Enjoy consistent energy with advanced solar technology.",
      icon: "reliable"
    },
    {
      title: "Easy Setup",
      description: "Seamless installation tailored to your energy needs.",
      icon: "setup"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-0">
        <TestimonialsPageClient 
          additionalTestimonials={additionalTestimonials}
          benefits={benefits}
        />
      </div>
      <Footer />
    </main>
  );
} 
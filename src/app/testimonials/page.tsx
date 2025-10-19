import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsPageClient from "./TestimonialsPageClient";

export const metadata = {
  title: "Client Testimonials | Dolebs Media Ltd",
  description: "Discover what our clients say about their experience with Dolebs Media Ltd. Read about real-world success stories from our photography, videography, and creative services.",
};

export default function TestimonialsPage() {
  // Additional testimonials to supplement those in TestimonialsSection
  const additionalTestimonials = [
    {
      content: "Dolebs Media Ltd exceeded our expectations with their professional photography services. Timothy and his team captured our product launch event with such creativity and attention to detail. The final images perfectly represented our brand and helped us achieve record engagement on social media. Highly recommended!",
      author: "Sarah Kimani",
      company: "TechStart Kenya",
      date: "March 2024",
      rating: 5,
      image: "/images/testimonials/customer-1.jpg"
    },
    {
      content: "Working with Dolebs Media Ltd for our corporate video was an absolute pleasure. Mark's creative direction and Eddie's production management made the entire process seamless. The final video perfectly captured our company culture and has become a cornerstone of our marketing efforts.",
      author: "James Mwangi",
      company: "East Africa Logistics",
      date: "January 2025",
      rating: 5,
      image: "/images/testimonials/customer-2.jpg"
    },
    {
      content: "The post-production work by Gaudencia was exceptional. She transformed our raw footage into a cinematic masterpiece that exceeded all our expectations. The color grading and editing quality was professional-grade, and the turnaround time was impressive.",
      author: "Dr. Amina Hassan",
      company: "Nairobi Medical Center",
      date: "December 2024",
      rating: 5,
      image: "/images/testimonials/customer-3.jpg"
    },
    {
      content: "Kennedy's graphic design work for our school's marketing materials was outstanding. He understood our vision perfectly and created designs that resonated with both students and parents. The creative concepts were fresh, modern, and perfectly aligned with our brand identity.",
      author: "Dr. Elizabeth Wangari",
      company: "Green Valley Academy",
      date: "October 2024",
      rating: 5,
      image: "/images/testimonials/customer-4.jpg"
    },
    {
      content: "Dolebs Media Ltd's comprehensive approach to our brand photography was impressive. From initial concept to final delivery, every step was handled professionally. The team's creativity and technical expertise resulted in images that have significantly enhanced our brand presence.",
      author: "Klaus Mueller",
      company: "Precision Parts Kenya Ltd",
      date: "November 2024",
      rating: 5,
      image: "/images/testimonials/customer-5.jpg"
    },
    {
      content: "The event coverage by Dolebs Media Ltd was flawless. They captured every important moment of our wedding with such artistry and professionalism. The photos and video tell our story beautifully and we'll treasure them forever. Thank you for making our special day even more memorable.",
      author: "Maria & David Solberg",
      date: "February 2025",
      rating: 5,
      image: "/images/testimonials/customer-6.jpg"
    }
  ];

  const benefits = [
    {
      title: "Professional Quality",
      description: "High-quality creative content that elevates your brand presence.",
      icon: "quality"
    },
    {
      title: "Creative Excellence",
      description: "Innovative and artistic vision that brings your story to life.",
      icon: "creativity"
    },
    {
      title: "Reliable Service",
      description: "Consistent delivery and professional project management.",
      icon: "reliable"
    },
    {
      title: "Custom Solutions",
      description: "Tailored creative services designed for your specific needs.",
      icon: "custom"
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
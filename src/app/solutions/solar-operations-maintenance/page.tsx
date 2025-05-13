import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import SolarOMClient from "./SolarOMClient";

export const metadata = {
  title: "Expert Solar Operations & Maintenance | W. Giertsen Energy Solutions",
  description: "Maximize your solar investment with our team of licensed solar technicians. Professional monitoring, maintenance, and optimization services for your solar systems.",
};

export default function SolarOperationsMaintenancePage() {
  const keyFeatures = [
    "Made from advanced monocrystalline technology.",
    "Designed to blend aesthetically with modern rooftops.",
    "Low maintenance with a lifespan of 25+ years."
  ];

  const services = [
    {
      title: "Regular Performance Monitoring",
      index: "01",
      description: "We track your system's performance in real-time to ensure optimal energy production.",
      features: [
        "Real-time system performance tracking",
        "Production analysis and reporting",
        "Early detection of inefficiencies and system failures"
      ],
      icon: "/images/icons/monitoring.svg"
    },
    {
      title: "Technical Support & System Optimization",
      index: "02",
      description: "Our expert team provides comprehensive technical support and optimization solutions.",
      features: [
        "Expert troubleshooting for performance issues",
        "System optimization, upgrades & expansion",
        "Performance improvement solutions"
      ],
      icon: "/images/icons/support.svg"
    },
    {
      title: "Preventive Maintenance & Inspections",
      index: "03",
      description: "Ensure peak performance and system longevity with our expert solar maintenance services.",
      features: [
        "Regular inspections to identify and address issues before they impact performance",
        "Professional panel cleaning to maintain maximum efficiency",
        "Routine health checks to extend system life and reduce downtime",
        "Preventive care to minimize the risk of unexpected failures",
        "Visual Inspection of panels, mounts, wiring, inverters, junction boxes, and grounding",
        "Electrical Testing including voltage checks, insulation testing, string performance, and thermal imaging",
        "Comprehensive Reporting with detailed findings and maintenance recommendations"
      ],
      icon: "/images/icons/maintenance.svg"
    },
    {
      title: "Client Training & Knowledge Sharing",
      index: "04",
      description: "We empower you with knowledge to get the most from your system.",
      features: [
        "Basic Maintenance Training – Learn simple, effective ways to maintain your system",
        "Understanding System Performance – Gain insights into how your solar system works and how to optimize energy usage"
      ],
      icon: "/images/icons/training.svg"
    }
  ];

  const expertiseHighlights = [
    {
      title: "Expert Team of Licensed Solar Technicians",
      description: "Our in-house specialists bring years of experience in solar system troubleshooting, maintenance, and performance optimization, ensuring your system consistently delivers the best results.",
      image: "/images/team-engineers.avif"
    },
    {
      title: "Comprehensive System Monitoring & Performance Analysis",
      description: "We provide real-time tracking and daily performance checks, allowing us to detect issues early and prevent potential failures before they affect your energy output.",
      image: "/images/system-monitoring.avif"
    },
    {
      title: "Professional Preventive Maintenance & Cleaning",
      description: "Regular solar panel cleaning, system inspections, and preventive maintenance help maintain peak efficiency and extend the life of your system.",
      image: "/images/panel-cleaning.avif"
    },
    {
      title: "Personalized Client Training & Support",
      description: "We empower our clients with basic system maintenance knowledge, ensuring they get the most out of their investment while maintaining long-term reliability.",
      image: "/images/client-training.avif"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <SolarOMClient 
        keyFeatures={keyFeatures}
        services={services}
        expertiseHighlights={expertiseHighlights}
      />
      <Footer />
    </main>
  );
} 
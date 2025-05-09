import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import AboutUsClient from "./AboutUsClient";

export const metadata = {
  title: "About WGES | Your Energy Solutions Partner Since 1875",
  description: "Learn about W. Giertsen Energy Solutions' history, mission, values, and expertise as your reliable lifecycle partner for solar-based applications in demanding environments for over 150 years.",
};

export default function AboutUsPage() {
  const coreValues = [
    {
      title: "Partnerships",
      description: "We build and maintain long-term business relationships with clients and partners",
      icon: "/images/icons/partnerships.svg"
    },
    {
      title: "Reliability",
      description: "Reliability is a focus in every aspect: reliable quality, safety, security of investment, peace of mind",
      icon: "/images/icons/reliability.svg"
    },
    {
      title: "Sustainability",
      description: "Heritage and continuous adaptation is the basis of the future. A sustainable company, financially independent",
      icon: "/images/icons/sustainability.svg"
    },
    {
      title: "People",
      description: "Our team, our customers and the people in the communities we work with. We practice good citizenship",
      icon: "/images/icons/people.svg"
    },
    {
      title: "Responsibility",
      description: "We feel a strong sense of responsibility towards customers, and the societies in our target markets",
      icon: "/images/icons/responsibility.svg"
    },
    {
      title: "Flexibility",
      description: "Proven flexibility to adopt change and create new opportunities. We find individual solutions for customers",
      icon: "/images/icons/flexibility.svg"
    }
  ];
  
  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management",
      logo: "/images/certificates/iso-9001.png"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management",
      logo: "/images/certificates/iso-14001.png"
    },
    {
      name: "ISO 45001:2018",
      description: "Operational Health and Safety",
      logo: "/images/certificates/iso-45001.png"
    }
  ];
  
  const qualityCommitments = [
    "Conducting responsible and sustainable business",
    "Having risk management as an integrated part of our business activities",
    "Providing products and services with minimal impact on the environment",
    "Encouraging our customers to conserve the environment",
    "Continually reviewing and improving our products, services, and the management system"
  ];
  
  // Keep team members data but it won't be displayed in the UI
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      bio: "20+ years of experience in renewable energy and sustainability",
      image: "/images/team-member1.avif"
    },
    {
      name: "Sarah Johnson",
      position: "Technical Director",
      bio: "Expert in photovoltaic systems and energy storage solutions",
      image: "/images/team-member2.avif"
    },
    {
      name: "Michael Brown",
      position: "Project Manager",
      bio: "Specialized in large-scale energy infrastructure projects",
      image: "/images/team-member3.avif"
    },
    {
      name: "Emma Wilson",
      position: "Head of Innovation",
      bio: "Leading our R&D efforts in next-generation solar technology",
      image: "/images/team-member4.avif"
    },
    {
      name: "David Chen",
      position: "Operations Director",
      bio: "Overseeing global operations across our international offices",
      image: "/images/team-member5.avif"
    },
    {
      name: "Lisa Müller",
      position: "Sustainability Officer",
      bio: "Ensuring our operations align with the highest environmental standards",
      image: "/images/team-member6.avif"
    }
  ];
  
  const locations = [
    {
      city: "Nairobi",
      country: "Kenya",
      address: "Church Road No 90, Westlands",
      phone: "+254 742 487 867",
      email: "energy@giertsen.no",
      isHeadquarters: false,
      image: "/images/locations/nairobi.avif"
    },
    {
      city: "Bergen",
      country: "Norway",
      address: "Nygårdsviken 1, 5165 Laksevåg, Bergen",
      phone: "+47 55 94 30 00",
      email: "energy@giertsen.no",
      isHeadquarters: true,
      image: "/images/locations/bergen.avif"
    },
    {
      city: "Frankfurt",
      country: "Germany",
      address: "Robert-Bosch Straße 3, 64569 Nauheim",
      phone: "+49 6152 9619 200",
      email: "energy@giertsen.no",
      isHeadquarters: false,
      image: "/images/locations/frankfurt.avif"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-0">
        <AboutUsClient 
          coreValues={coreValues}
          certificates={certificates}
          qualityCommitments={qualityCommitments}
          teamMembers={teamMembers}
          locations={locations}
        />
      </div>
      <Footer />
    </main>
  );
} 
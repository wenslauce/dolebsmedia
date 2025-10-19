import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUsClient from "./AboutUsClient";

export const metadata = {
  title: "About Dolebs Media Ltd | Creative Digital Solutions",
  description: "Learn about Dolebs Media Ltd's mission, values, and expertise in photography, videography, communications, marketing & PR, graphic design, and web development services.",
};

export default function AboutUsPage() {
  const coreValues = [
    {
      title: "Creativity",
      description: "We bring innovative and artistic vision to every project, ensuring unique and compelling visual content",
      icon: "Palette"
    },
    {
      title: "Quality",
      description: "Excellence in every aspect: professional equipment, skilled execution, and meticulous attention to detail",
      icon: "Award"
    },
    {
      title: "Innovation",
      description: "Staying ahead with cutting-edge technology and creative techniques to deliver exceptional results",
      icon: "Lightbulb"
    },
    {
      title: "Collaboration",
      description: "Working closely with clients to understand their vision and bring their creative goals to life",
      icon: "Users"
    },
    {
      title: "Professionalism",
      description: "Reliable service delivery, clear communication, and commitment to meeting project deadlines",
      icon: "Briefcase"
    },
    {
      title: "Excellence",
      description: "Continuous improvement and dedication to delivering outstanding creative solutions that exceed expectations",
      icon: "Star"
    }
  ];
  

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-0">
        <AboutUsClient 
          coreValues={coreValues}
        />
      </div>
      <Footer />
    </main>
  );
} 
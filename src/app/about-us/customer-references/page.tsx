import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerReferencesClient from "./CustomerReferencesClient";

export const metadata: Metadata = {
  title: "Customer References | WGES",
  description: "Explore real-world examples and success stories of our energy solutions in action across Africa.",
};

interface ProjectCard {
  title: string;
  specs: string;
  type: string;
  gridType: string;
  previous: string;
  image: string;
  location: string;
}

const projects: ProjectCard[] = [
  // Commercial Projects
  {
    title: "Equator Farm",
    specs: "240kWp",
    type: "Flower Farm",
    gridType: "On grid",
    previous: "KPLC",
    image: "/images/projects/equator-farm.avif",
    location: "Nanyuki, Kenya"
  },
  {
    title: "Maasai Flowers",
    specs: "500kWp",
    type: "Flower Farm",
    gridType: "On grid",
    previous: "KPLC",
    image: "/images/projects/maasai-flowers.avif",
    location: "Naivasha, Kenya"
  },
  {
    title: "RIMI Flowers",
    specs: "50kWp",
    type: "Flower Farm",
    gridType: "On grid",
    previous: "KPLC",
    image: "/images/projects/rimi-flowers.avif",
    location: "Naivasha, Kenya"
  },
  {
    title: "Synresins",
    specs: "125kWp",
    type: "Manufacturer",
    gridType: "On grid",
    previous: "KPLC",
    image: "/images/projects/synresins.avif",
    location: "Thika, Kenya"
  },
  {
    title: "AMECO",
    specs: "150kWp",
    type: "Local Utility Company",
    gridType: "Fuel Save",
    previous: "Generator",
    image: "/images/projects/ameco.avif",
    location: "Nairobi, Kenya"
  },
  {
    title: "Samburu Soroi Lodge",
    specs: "275kWp, 334kWh",
    type: "Safari Lodge",
    gridType: "Off grid",
    previous: "off grid",
    image: "/images/projects/samburu-soroi.avif",
    location: "Samburu, Kenya"
  },
  {
    title: "Botswana Institute of Technology (BITRI)",
    specs: "500kWp",
    type: "University",
    gridType: "On grid",
    previous: "Utility",
    image: "/images/projects/bitri.avif",
    location: "Gaborone, Botswana"
  },

  // Residential Projects
  {
    title: "Residential Installation - Karen",
    specs: "8.1kWp, 10.8kWh",
    type: "Residential",
    gridType: "Hybrid",
    previous: "Generator",
    image: "/images/solar-panels.avif",
    location: "Karen, Nairobi"
  },
  {
    title: "Residential Installation - Runda",
    specs: "13kWp, 16.5kWh",
    type: "Residential",
    gridType: "Hybrid",
    previous: "KPLC",
    image: "/images/stima-kit.avif",
    location: "Runda, Nairobi"
  },
  {
    title: "Residential Installation - Kitisuru",
    specs: "9.9kWp, 22.3kWh",
    type: "Residential",
    gridType: "Hybrid",
    previous: "KPLC",
    image: "/images/residential-solutions.avif",
    location: "Kitisuru, Nairobi"
  },
  {
    title: "Residential Installation - Muthaiga",
    specs: "9.9kWp, 22.8kWh",
    type: "Residential",
    gridType: "Hybrid",
    previous: "KPLC",
    image: "/images/solar-panels.avif",
    location: "Muthaiga, Nairobi"
  },
  {
    title: "School Installation - Lavington",
    specs: "9.9kWp, 16.5kWh",
    type: "Residential (School)",
    gridType: "Hybrid",
    previous: "KPLC",
    image: "/images/stima-kit.avif",
    location: "Lavington, Nairobi"
  }
];

const keyFeatures = [
  "Solar panels customized to your home's unique energy needs",
  "Save up to 75% or more on electricity bills",
  "Panels built to last, ensuring reliability for decades",
  "Reduce your carbon footprint with sustainable energy"
];

export default function CustomerReferencesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CustomerReferencesClient 
        projects={projects} 
        keyFeatures={keyFeatures} 
      />
      <Footer />
    </main>
  );
} 
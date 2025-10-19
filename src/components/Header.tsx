"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator
} from "@/components/ui/navigation-menu";
import { Menu, ChevronDown, X, Camera, Video, MessageSquare, Megaphone, Palette, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { 
    title: "All Services",
    href: "/services",
    icon: <Camera className="w-4 h-4 text-primary-green" />
  },
  { 
    title: "Photography",
    href: "/services/photography",
    icon: <Camera className="w-4 h-4 text-primary-green" />
  },
  { 
    title: "Videography",
    href: "/services/videography",
    icon: <Video className="w-4 h-4 text-primary-green" />
  },
  { 
    title: "Communications",
    href: "/services/communications",
    icon: <MessageSquare className="w-4 h-4 text-primary-green" />
  },
  { 
    title: "Marketing & PR",
    href: "/services/marketing-pr",
    icon: <Megaphone className="w-4 h-4 text-primary-green" />
  },
  { 
    title: "Graphic Designing",
    href: "/services/graphic-designing",
    icon: <Palette className="w-4 h-4 text-primary-green" />
  },
  { 
    title: "Web Development & Hosting",
    href: "/services/web-development-hosting",
    icon: <Globe className="w-4 h-4 text-primary-green" />
  }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Mobile menu state
  const [openSolutionsMenu, setOpenSolutionsMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={cn(
        "w-full fixed top-2 left-0 z-50 transition-all duration-500 px-4",
        isScrolled 
          ? "py-1" 
          : "py-2"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.1
      }}
    >
      <div className="container mx-auto max-w-7xl relative">
        {/* LaunchUI-style navbar with curved edges */}
        <motion.div 
          className={cn(
            "absolute inset-0 rounded-xl backdrop-blur-xl transition-all duration-500 overflow-hidden",
            isScrolled 
              ? "bg-white/40 shadow-lg shadow-white/20" 
              : "bg-white/25"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Frozen white glass overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/40 rounded-xl"></div>
          
          {/* Enhanced glass reflection effect */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
          
          {/* Additional frozen glass layer */}
          <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
          
          {/* Enhanced curved shape at the bottom */}
          <div className="absolute -bottom-1 left-0 right-0 h-12 w-full">
            <svg width="100%" height="100%" viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path 
                d="M0 0L48 5.47826C96 10.9565 192 21.913 288 28.5217C384 35.1304 480 37.3913 576 35.1304C672 32.8696 768 26.2609 864 21.913C960 17.5652 1056 15.3043 1152 17.5652C1248 19.8261 1344 26.2609 1392 28.5217L1440 30.7826V50H1392C1344 50 1248 50 1152 50C1056 50 960 50 864 50C768 50 672 50 576 50C480 50 384 50 288 50C192 50 96 50 48 50H0V0Z" 
                fill="currentColor" 
                className="text-white opacity-10"
              />
            </svg>
          </div>
          
          {/* Enhanced side highlights */}
          <div className="absolute top-6 bottom-6 left-0 w-[2px] bg-gradient-to-b from-transparent via-white/60 to-transparent" />
          <div className="absolute top-6 bottom-6 right-0 w-[2px] bg-gradient-to-b from-transparent via-white/60 to-transparent" />

          {/* Frozen white glass glow spots */}
          <motion.div
            className="absolute top-1/2 left-1/4 -translate-y-1/2 w-40 h-16 bg-white/40 rounded-full blur-3xl opacity-50"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-40 h-16 bg-white/35 rounded-full blur-3xl opacity-50"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1.05, 1, 1.05]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </motion.div>

        <div className="relative flex items-center justify-between py-2 px-6">
          {/* Logo with enhanced animation */}
          <motion.div 
            className="flex items-center z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="transition-opacity hover:opacity-90">
              <Image 
                src="/images/logo.png" 
                alt="Dolebs Media" 
                width={100} 
                height={40} 
                priority 
                className="h-[24px] w-auto object-contain" 
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 z-10">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home link */}
                <NavigationMenuItem>
                  <Link href="/" 
                    className="text-gray-800 hover:text-accent-gold px-5 py-2 rounded-lg transition-all duration-200 hover:bg-white/30 border border-transparent hover:border-white/50 flex items-center"
                    onMouseEnter={() => setHoveredTab("Home")}
                    onMouseLeave={() => setHoveredTab(null)}
                  >
                    <span className="relative">
                      Home
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-[1px] bg-accent-gold/50" 
                        initial={{ width: 0 }}
                        animate={{ width: hoveredTab === "Home" ? "100%" : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                  </Link>
                </NavigationMenuItem>

                {/* Solutions dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-gray-800 hover:text-accent-gold data-[state=open]:text-accent-gold hover:bg-white/30 focus:bg-white/30 px-5 data-[state=open]:bg-white/35 rounded-lg border border-transparent hover:border-white/50 data-[state=open]:border-white/60 backdrop-filter transition-all duration-200"
                    onMouseEnter={() => setHoveredTab("Services")}
                    onMouseLeave={() => setHoveredTab(null)}
                  >
                    <span className="flex items-center gap-1 relative">
                      Services
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-[1px] bg-accent-gold/50" 
                        initial={{ width: 0 }}
                        animate={{ width: hoveredTab === "Services" ? "100%" : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 rounded-xl overflow-hidden">
                      {services.map((service, index) => (
                        <motion.li 
                          key={service.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className={cn(
                                "group relative block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                "hover:bg-accent-gold/10 hover:text-primary-green focus:bg-accent-gold/10 focus:text-primary-green",
                                hoveredIndex === index ? "bg-accent-gold/5" : ""
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-1 rounded-md bg-white/10 group-hover:bg-white/20 transition-colors">
                                  {service.icon}
                                </div>
                                <div className="text-sm font-medium leading-none text-secondary group-hover:text-primary-green transition-colors duration-150">
                                  {service.title}
                                </div>
                              </div>
                              
                              {/* Animated highlight border */}
                              <AnimatePresence>
                                {hoveredIndex === index && (
                                  <motion.span 
                                    className="absolute inset-0 rounded-md border border-primary-green/20"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                  />
                                )}
                              </AnimatePresence>
                            </Link>
                          </NavigationMenuLink>
                        </motion.li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Us link */}
                <NavigationMenuItem>
                  <Link href="/about-us" 
                    className="text-gray-800 hover:text-accent-gold px-5 py-2 rounded-lg transition-all duration-200 hover:bg-white/30 border border-transparent hover:border-white/50 flex items-center"
                    onMouseEnter={() => setHoveredTab("About Us")}
                    onMouseLeave={() => setHoveredTab(null)}
                  >
                    <span className="relative">
                      About Us
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-[1px] bg-accent-gold/50" 
                        initial={{ width: 0 }}
                        animate={{ width: hoveredTab === "About Us" ? "100%" : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Contact Us button */}
            <div className="ml-4">
              <Link href="/contact" className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    variant="accent" 
                    className="bg-gradient-to-r from-accent-gold/90 to-accent-gold"
                    type="button"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu - Enhanced with Custom Animation */}
          <div className="lg:hidden z-10">
            <Sheet>
              <SheetTrigger className="lg:hidden focus:outline-none focus:ring-0">
                <Menu className="w-6 h-6 text-gray-800" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-secondary/95 backdrop-blur-xl border-gray-800 p-0">
                <SheetTitle className="text-white font-medium text-xl">Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="border-b border-gray-800 p-5 flex items-center justify-between">
                    <X className="h-5 w-5 text-gray-400" />
                  </div>
                  
                  <div className="p-6 flex-1 overflow-auto">
                    <div className="space-y-4">
                      <Link href="/" className="block text-white hover:text-accent-gold font-medium text-xl hover:translate-x-1 transition-transform">
                        Home
                      </Link>
                      
                      <div className="py-3">
                        <button 
                          onClick={() => setOpenSolutionsMenu(!openSolutionsMenu)}
                          className="flex items-center justify-between w-full text-white hover:text-accent-gold font-medium text-xl group"
                        >
                          <span>Services</span>
                          <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${openSolutionsMenu ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <div className={`mt-2 pl-4 space-y-2 overflow-hidden transition-all duration-300 ${openSolutionsMenu ? 'max-h-96' : 'max-h-0'}`}>
                          <Link 
                            href="/services"
                            className="flex items-center gap-2 py-2 text-gray-300 hover:text-accent-gold transition-colors hover:translate-x-1 transition-transform font-medium"
                          >
                            <Camera className="w-4 h-4 text-primary-green" />
                            <span>All Services</span>
                          </Link>
                          {services.slice(1).map((service) => (
                            <Link 
                              key={service.href}
                              href={service.href}
                              className="flex items-center gap-2 py-2 text-gray-300 hover:text-accent-gold transition-colors hover:translate-x-1 transition-transform"
                            >
                              {service.icon}
                              <span>{service.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <Link href="/about-us" className="block text-white hover:text-accent-gold font-medium text-xl hover:translate-x-1 transition-transform">
                        About Us
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-gray-800 p-5">
                    <Link href="/contact" className="block w-full">
                      <Button className="w-full" size="lg">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

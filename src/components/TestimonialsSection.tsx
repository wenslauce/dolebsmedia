"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  content: string;
  author: string;
  company?: string;
}

function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials: Testimonial[] = [
    {
      content: "Dolebs Media captured our brand story perfectly. The photography was exceptional and the team was incredibly professional from start to finish. Highly recommended!",
      author: "Philip Waterer",
      company: "Tech Innovators Kenya"
    },
    {
      content: "We've worked with Dolebs Media for almost two years now and have nothing but praise for their creative work. The videos they produced have significantly boosted our social media engagement.",
      author: "Madeleine Wackernagel",
      company: "Multichoice Kenya"
    },
    {
      content: "Their graphic design work has completely transformed our brand identity. We've received countless compliments on our new marketing materials and website.",
      author: "Chris Kulei",
      company: "Azuri Technologies"
    },
    {
      content: "The video production quality is outstanding. They understood our vision perfectly and delivered content that exceeded our expectations. True professionals!",
      author: "Robert Njeri",
      company: "Ministry of Education"
    },
    {
      content: "After comparing multiple agencies, Dolebs Media was by far the best choice. Their photography and marketing expertise has been instrumental in growing our brand presence.",
      author: "Sarah Odhiambo",
      company: "ICDL Africa"
    },
    {
      content: "The team's creativity and attention to detail is impressive. From photography to web development, they delivered everything on time and beyond our expectations.",
      author: "Daniel Kimani",
      company: "Riara University"
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Width of one card
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl opacity-30" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary">Hear from Our Customers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6">Customer Success Stories</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with our creative services.
          </p>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent-gold rounded-full mx-auto" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative w-full my-8">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                "p-2 rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-all duration-200",
                !canScrollLeft && "opacity-50 cursor-not-allowed"
              )}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                "p-2 rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-all duration-200",
                !canScrollRight && "opacity-50 cursor-not-allowed"
              )}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonials Container */}
          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full overflow-x-auto hide-scrollbar"
          >
            <div className={cn(
              "flex gap-4 transition-transform duration-500",
              !isPaused && "animate-marquee hover:animation-play-state-paused"
            )}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="flex items-center justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 group shadow-md hover:shadow-lg"
          >
            Get Started Today
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      className="flex-none w-[320px] md:w-[400px] px-3 py-2"
    >
      <div className="h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-accent-gold fill-accent-gold" />
          ))}
        </div>
        
        <div className="relative">
          <Quote className="absolute -top-3 -left-2 h-8 w-8 text-primary/10 rotate-180" />
          <p className="text-gray-700 mb-6 text-sm md:text-base relative z-10">
            "{testimonial.content}"
          </p>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <p className="font-semibold text-secondary">
            {testimonial.author}
          </p>
          {testimonial.company && (
            <p className="text-sm text-gray-500">{testimonial.company}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection; 
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Sun, Building2, Calendar, Zap } from "lucide-react";

interface CountAnimationProps {
  number: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}

const CountAnimation = ({
  number,
  suffix = "",
  decimals = 0,
  className = "",
  duration = 2
}: CountAnimationProps) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    let startValue = 0;
    const startTime = performance.now();
    
    const updateValue = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const currentValue = startValue + (number - startValue) * progress;
      
      if (decimals === 0) {
        setDisplayValue(Math.round(currentValue).toString());
      } else {
        setDisplayValue(currentValue.toFixed(decimals));
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };
    
    requestAnimationFrame(updateValue);
  }, [number, duration, decimals]);

  return (
    <span className={className}>
      {displayValue}
      {suffix}
    </span>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  statNumber: number;
  statSuffix?: string;
  decimals?: number;
  label: string;
  delay?: number;
}

const StatCard = ({
  icon,
  statNumber,
  statSuffix = "",
  decimals = 0,
  label,
  delay = 0
}: StatCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-white rounded-xl border border-gray-100 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-primary/5 pointer-events-none" />
      
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative">
        <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl p-3 w-fit mb-4 text-primary group-hover:from-primary/20 group-hover:to-primary/30 transition-colors duration-300">
        {icon}
      </div>
      
      <div className="mt-2">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent flex items-end">
          {isInView && (
            <CountAnimation 
              number={statNumber} 
              suffix={statSuffix} 
              decimals={decimals}
              duration={2.5}
            />
          )}
        </h3>
          <div className="text-sm md:text-base text-gray-600 mt-2 font-medium">{label}</div>
        </div>
      </div>
      
      {/* Bottom decorative accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-accent-gold/40 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-accent-gold/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-transparent to-accent-gold/5 rounded-full blur-3xl opacity-30" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Impact</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming Kenya's energy landscape with reliable and sustainable solar solutions.
          </p>
          
          {/* Decorative line */}
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent-gold to-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <StatCard
            icon={<Building2 size={24} />}
            statNumber={300}
            statSuffix="+"
            label="Projects Completed"
            delay={0.1}
          />
          
          <StatCard
            icon={<Zap size={24} />}
            statNumber={12}
            statSuffix="+"
            decimals={1}
            label="MWp Installed"
            delay={0.2}
          />
          
          <StatCard
            icon={<Calendar size={24} />}
            statNumber={50}
            statSuffix="+"
            label="Collective Experience In The Solar PV Space"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

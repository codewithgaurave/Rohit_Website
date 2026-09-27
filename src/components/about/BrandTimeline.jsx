import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { cn } from '../../utils/cn';

const timelineData = [
  {
    year: "1998",
    title: "The Beginning",
    desc: "Our first boutique opened with a vision to make fine jewellery personal and meaningful.",
    image: "/rohit_rings.jpg"
  },
  {
    year: "2006",
    title: "Growing Trust",
    desc: "Our growing family of customers became the foundation of the Aurelia name.",
    image: "/rohit_gold_bangles.jpg"
  },
  {
    year: "2013",
    title: "New Collections",
    desc: "We expanded into contemporary diamond, bridal and occasion jewellery.",
    image: "/rohit_gold_bangles.jpg"
  },
  {
    year: "2019",
    title: "A New Generation",
    desc: "Traditional craftsmanship met a fresh design perspective.",
    image: "/rohit_everyday.jpg"
  },
  {
    year: "2026",
    title: "Looking Forward",
    desc: "Continuing our story with timeless pieces for a new generation.",
    image: "/rohit_gold_bangles.jpg"
  }
];

export default function BrandTimeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  
  // We don't need scroll tracking for the sticky layout anymore.
  // We'll use simple scroll reveal for the new vertical layout.

  return (
    <section className="w-full text-primaryDark py-24 md:py-32 relative" ref={containerRef}>
      
      {/* Solid Light Background */}
      <div className="absolute inset-0 bg-background -z-10" />
      
      {/* Fixed Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0 bg-[url('/rohit_storefront.jpg')] bg-cover bg-center bg-no-repeat opacity-10 md:opacity-15 grayscale contrast-125"
        style={{ backgroundAttachment: 'fixed' }}
      />
      
      {/* Content Wrapper to sit above the background */}
      <div className="relative z-10">
      
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-4"
        >
          Our Journey
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl text-primaryDark"
        >
          A story shaped one milestone at a time.
        </motion.h2>
      </div>

      {/* Unified Vertical Timeline */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col relative">
        
        {/* Global Center Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-primaryDark/15 -translate-x-1/2 z-0"></div>

        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              key={item.year} 
              className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 mb-24 md:mb-32 last:mb-0 group z-10"
            >
              
              {/* Center Dot for Desktop */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gold bg-background items-center justify-center z-20 transition-transform duration-700 ease-out group-hover:scale-150">
                <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(184,138,68,0.4)]" />
              </div>

              {/* Image Side */}
              <div className={cn("w-full md:w-1/2", isEven ? "md:pr-16 lg:pr-24" : "md:pl-16 lg:pl-24 md:order-last")}>
                <div className="w-full aspect-[4/3] overflow-hidden relative border border-white/5 shadow-2xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-primaryDark/10 group-hover:bg-primaryDark/0 transition-colors duration-700" />
                </div>
              </div>

              {/* Content Side */}
              <div className={cn("w-full md:w-1/2 flex flex-col gap-4", isEven ? "md:pl-16 lg:pl-24" : "md:pr-16 lg:pr-24 md:text-right md:items-end")}>
                <div className="flex items-center gap-4 md:hidden mb-2">
                  <div className="w-6 h-6 rounded-full border border-gold bg-background flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <span className="font-mono text-xl text-gold tracking-widest">{item.year}</span>
                </div>
                
                <span className="hidden md:block font-mono text-4xl lg:text-6xl text-gold/80 tracking-widest font-light">{item.year}</span>
                
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primaryDark mt-2 mb-2 group-hover:text-gold transition-colors duration-500">{item.title}</h3>
                
                <p className="font-sans text-primaryDark/80 text-base md:text-lg font-light leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          );
        })}
      </div>

      </div>
    </section>
  );
}

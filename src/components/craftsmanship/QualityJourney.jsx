import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const qualitySteps = [
  { num: "01", label: "Material Selection" },
  { num: "02", label: "Craft Inspection" },
  { num: "03", label: "Stone Inspection" },
  { num: "04", label: "Finish Review" },
  { num: "05", label: "Final Quality Check" }
];

export default function QualityJourney() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-[#1A1613] text-white py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-16 md:mb-24"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white">Before it reaches you.</h2>
        </motion.div>

        {/* Unified Vertical Layout */}
        <div className="flex flex-col gap-12 md:gap-16 relative px-4 md:px-12 max-w-2xl mx-auto md:mx-0">
          {/* Vertical Line Background */}
          <div className="absolute left-[27px] md:left-[59px] top-4 bottom-4 w-[1px] bg-white/10" />
          
          {/* Vertical Line Animated Fill */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute left-[27px] md:left-[59px] top-4 w-[1px] bg-gold origin-top"
          />

          {qualitySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
              className="flex items-center gap-6 md:gap-10 relative z-10 group"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-gold bg-[#1A1613] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-125 shadow-lg">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(184,138,68,0.8)]" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-gold text-xs md:text-sm tracking-widest mb-1 transition-colors duration-500">{step.num}</span>
                <span className="font-serif text-base md:text-2xl lg:text-3xl tracking-wider text-white/90 group-hover:text-gold transition-colors duration-500">{step.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

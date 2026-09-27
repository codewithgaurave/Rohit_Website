import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FounderVision() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background py-24 md:py-40" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left: Image */}
        <div className="w-full lg:w-5/12 overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img 
              src="/rohit_everyday.jpg" 
              alt="Rohit Verma - Co-Founder"
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
          >
            Our Vision
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark leading-[1.1] mb-12 max-w-2xl"
          >
            Create jewellery people feel connected to.
          </motion.h2>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-l-2 border-gold/30 pl-8 mb-12"
          >
            <p className="font-serif italic text-2xl md:text-3xl text-primaryDark/80 leading-relaxed max-w-xl">
              "True luxury is not only in what you see. It is in the detail, the care and the emotion a piece carries."
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-2"
          >
            {/* Signature style element using a specific font or just styled serif */}
            <span className="font-serif italic text-4xl text-primaryDark mb-2" style={{ fontFamily: '"Great Vibes", cursive', letterSpacing: '0' }}>
              Rohit Verma
            </span>
            <span className="text-primaryDark/60 uppercase tracking-widest text-xs font-medium">
              Co-Founder, Rohit Jewellers
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

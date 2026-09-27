import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CraftCTA() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-[#0F0C09] relative overflow-hidden py-32 md:py-48" ref={containerRef}>
      
      {/* Background Subtle Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isInView ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <img 
          src="/rohit_storefront.jpg" 
          alt="Discover The Result" 
          className="w-full h-full object-cover object-left-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C09] via-transparent to-[#0F0C09]" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0F0C09]/50 to-[#0F0C09]" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
        >
          Discover The Result
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-2xl leading-[1.1]"
        >
          Explore jewellery shaped by this process.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-lg text-white/70 font-light mb-12 max-w-xl leading-relaxed"
        >
          Discover collections where craftsmanship, material and design come together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <Link 
            to="/collections"
            className="bg-gold text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-primaryDark transition-colors duration-300"
          >
            Explore Collections
          </Link>
          <Link 
            to="/visit"
            className="border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-primaryDark transition-colors duration-300"
          >
            Visit Our Boutique
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

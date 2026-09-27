import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BoutiqueCTA() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background py-16 md:py-20 flex items-center justify-center px-6" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-4xl w-full p-10 md:p-20 text-center border border-gold/30"
      >
        {/* Decorative corner lines can be added here if needed, keeping it simple with border for now */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
        >
          Visit Us
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark mb-6"
        >
          Jewellery deserves to be experienced.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-lg text-primaryDark/70 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Visit our boutique and discover pieces selected around your style, occasion and story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <Link 
            to="/visit"
            className="bg-primaryDark text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gold transition-colors duration-300"
          >
            Visit Our Boutique
          </Link>
          <Link 
            to="/book"
            className="border border-primaryDark text-primaryDark px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primaryDark hover:text-white transition-colors duration-300"
          >
            Book an Appointment
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}

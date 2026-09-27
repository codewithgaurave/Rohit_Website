import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full relative overflow-hidden py-32 md:py-48" ref={containerRef}>
      
      {/* Background Cinematic Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <img 
          src="/rohit_bridal.jpg" 
          alt="Close up jewellery background" 
          className="w-full h-full object-cover object-center grayscale-[20%]"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primaryDark/60" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6 drop-shadow-md"
        >
          Your Next Piece
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-12 max-w-3xl leading-[1.1] drop-shadow-lg"
        >
          Let's find something worth remembering.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <Link 
            to="/book"
            className="bg-gold text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-primaryDark transition-colors duration-300"
          >
            Book an Appointment
          </Link>
          <Link 
            to="/collections"
            className="border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-primaryDark transition-colors duration-300"
          >
            Explore Collections
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

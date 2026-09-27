import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CollectionCTA() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
          >
            Personal Selection
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark mb-8 leading-[1.1]"
          >
            Looking for something that feels like you?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-lg text-primaryDark/70 mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            Visit our boutique and let our team help you discover jewellery suited to your style, occasion and story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6"
          >
            <Link 
              to="/book"
              className="bg-primaryDark text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gold transition-colors duration-300 text-center"
            >
              Book an Appointment
            </Link>
            <Link 
              to="/contact"
              className="border border-primaryDark text-primaryDark px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primaryDark hover:text-white transition-colors duration-300 text-center"
            >
              Contact Our Boutique
            </Link>
          </motion.div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 overflow-hidden h-[60vh] md:h-[70vh] lg:h-[85vh]">
          <motion.img 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/rohit_karigar.jpg" 
            alt="Personal Selection Jewellery"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}

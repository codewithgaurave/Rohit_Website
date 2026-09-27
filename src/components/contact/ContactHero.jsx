import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactHero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden bg-primaryDark z-0">
      
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full origin-center"
        style={{ y: yBg }}
      >
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/rohit_everyday.jpg" 
          alt="Premium luxury jewellery boutique interior" 
          className="w-full h-full object-cover object-[50%_60%] grayscale-[10%] sepia-[5%]"
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-primaryDark/50 md:bg-primaryDark/40" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="absolute inset-0 w-full h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24"
        style={{ y: yContent, opacity: opacityContent }}
      >
        <div className="max-w-3xl">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex items-center gap-2 mb-8 md:mb-10 text-white/60 text-[0.65rem] tracking-[0.2em] font-medium uppercase"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 md:mb-8 text-gold text-[0.65rem] md:text-xs tracking-[0.3em] font-medium uppercase"
          >
            Visit Aurelia
          </motion.div>

          <h1 className="text-white font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-[1.05] tracking-tight mb-8">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="pb-2"
              >
                Some pieces
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
                className="pb-2"
              >
                deserve to be
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                className="pb-2"
              >
                seen in person.
              </motion.div>
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
            className="text-white/80 font-sans text-base md:text-lg lg:text-xl font-light max-w-lg mb-12 leading-relaxed"
          >
            Visit our boutique, speak with our jewellery specialists or book a private appointment.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-hidden">
            <motion.a
              href="#appointment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="inline-block bg-white text-primaryDark px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300 text-center"
            >
              Book an Appointment
            </motion.a>
            <motion.a
              href="#location"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="inline-block border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-primaryDark transition-all duration-300 text-center"
            >
              Get Directions
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>

    </section>
  );
}

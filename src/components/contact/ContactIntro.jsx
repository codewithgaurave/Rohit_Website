import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactIntro() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background py-24 md:py-32 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
        >
          Let's Talk
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark mb-8 leading-[1.1]"
        >
          How can we help?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-lg md:text-xl font-light text-primaryDark/70 max-w-2xl leading-relaxed"
        >
          Whether you are looking for a bridal piece, selecting a meaningful gift or simply exploring our collections, our team would be happy to assist.
        </motion.p>
        
      </div>
    </section>
  );
}

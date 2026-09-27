import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function FinalPiece() {
  const containerRef = useRef(null);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-primaryDark" ref={containerRef}>
      
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full origin-center"
      >
        <img 
          src="/rohit_gold_bangles.jpg" 
          alt="The Final Piece - Finished Jewellery" 
          className="w-full h-full object-cover grayscale-[10%]"
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-primaryDark/30" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8 }}
          className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6 drop-shadow-md"
        >
          The Final Piece
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] max-w-4xl drop-shadow-lg"
        >
          When every detail<br />comes together.
        </motion.h2>
      </div>
    </section>
  );
}

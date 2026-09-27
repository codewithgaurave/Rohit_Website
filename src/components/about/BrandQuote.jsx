import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaDiamond } from 'react-icons/fa6';

export default function BrandQuote() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.4], [50, 0]);
  
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.7], [50, 0]);
  
  const opacityIcon = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  const scaleIcon = useTransform(scrollYProgress, [0.6, 1], [0.5, 1]);

  return (
    <section ref={containerRef} className="w-full bg-background py-24 md:py-32 flex flex-col items-center justify-center relative">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primaryDark leading-[1.2] mb-16 flex flex-col gap-2 md:gap-4">
          <motion.span 
            style={{ opacity: opacity1, y: y1 }}
            className="block"
          >
            “We don't simply make jewellery.
          </motion.span>
          <motion.span 
            style={{ opacity: opacity2, y: y2 }}
            className="block"
          >
            We create pieces that become part of people's lives.”
          </motion.span>
        </h2>

        <motion.div 
          style={{ opacity: opacityIcon, scale: scaleIcon }}
          className="text-gold flex justify-center mt-12"
        >
          <FaDiamond className="w-3 h-3 md:w-4 md:h-4" />
        </motion.div>

      </div>
    </section>
  );
}

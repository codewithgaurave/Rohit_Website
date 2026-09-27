import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FaDiamond } from 'react-icons/fa6';

export default function BrandStatement() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20% 0px" });

  const statementLines = [
    "Not simply jewellery.",
    "A story shaped in gold."
  ];

  return (
    <section className="w-full bg-background py-24 md:py-32 relative z-10 overflow-hidden">
      <div 
        ref={containerRef}
        className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm"
        >
          <img 
            src="/rohit_philosophy.jpg" 
            alt="Our Philosophy - Rohit Jwellers" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
          >
            Our Philosophy
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark leading-[1.2] mb-8">
            {statementLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial={{ y: "120%" }}
                  animate={isInView ? { y: 0 } : { y: "120%" }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.2
                  }}
                  className="pb-2"
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 text-gold"
          >
            <FaDiamond className="w-2.5 h-2.5" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-lg md:text-xl font-light text-primaryDark/80 max-w-lg leading-relaxed"
          >
            For generations, our pieces have celebrated the moments, traditions and people worth remembering.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaDiamond } from 'react-icons/fa6';

export default function CraftIntro() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20% 0px" });

  const headlineLines = [
    "A beautiful piece begins",
    "long before gold meets stone."
  ];

  return (
    <section className="w-full bg-background py-20 md:py-32 flex items-center justify-center relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark leading-[1.2] mb-12 max-w-4xl">
          {headlineLines.map((line, i) => (
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
          className="mb-12 text-gold"
        >
          <FaDiamond className="w-3 h-3 md:w-4 md:h-4" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-sans text-lg md:text-xl lg:text-2xl font-light text-primaryDark/70 max-w-2xl leading-relaxed"
        >
          From the first sketch to the final inspection, our process brings together artistry, experience and precision.
        </motion.p>
      </div>
    </section>
  );
}

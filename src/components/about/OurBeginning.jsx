import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function OurBeginning() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const yImage = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section className="w-full bg-background py-24 md:py-32 overflow-hidden relative" ref={containerRef}>
      
      {/* Background oversized faint year */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <span className="font-serif text-[25vw] md:text-[30vw] text-primaryDark/[0.03] select-none whitespace-nowrap">
          EST. 1998
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Image */}
          <div className="w-full md:w-1/2 overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
            <motion.div 
              style={{ scale: imageScale, y: yImage }}
              className="w-full h-full"
            >
              <img 
                src="/rohit_hero.jpg" 
                alt="Heritage Jewellery Craftsmanship"
                className="w-full h-full object-cover grayscale-[30%] brightness-90 contrast-125 sepia-[20%]"
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center" ref={textRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
            >
              Where It Began
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark mb-8 leading-[1.1]"
            >
              Built on craftsmanship and trust.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-lg text-primaryDark/70 mb-8 max-w-md leading-relaxed flex flex-col gap-6"
            >
              <p>
                What began as a passion for fine jewellery grew into a commitment to create pieces defined by detail, authenticity and lasting value.
              </p>
              <p>
                Our relationship with every customer is built with the same care we bring to every piece we create.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

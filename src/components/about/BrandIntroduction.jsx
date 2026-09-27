import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BrandIntroduction() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15% 0px" });

  return (
    <section className="w-full bg-background py-24 md:py-40 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-8"
            >
              Aurelia Fine Jewellery
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark leading-[1.15]"
            >
              Beauty becomes timeless when it carries meaning.
            </motion.h2>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-end pt-4 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-6 font-sans text-lg lg:text-xl text-primaryDark/70 font-light leading-relaxed max-w-xl"
            >
              <p>
                Our journey began with a simple belief — jewellery should be more than something beautiful to wear. It should hold memories, celebrate relationships and become part of the stories families carry forward.
              </p>
              <p>
                Every Aurelia piece brings together traditional craftsmanship and a refined contemporary sensibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-12 lg:mt-16 border-l pl-8 border-gold/30"
            >
              <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-gold leading-snug">
                "Designed for today.<br />
                Remembered for generations."
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

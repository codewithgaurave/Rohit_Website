import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CraftsmanshipFeature() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const width = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0.5, 1], [50, 0]);

  return (
    <section ref={containerRef} className="w-full h-[150vh] bg-background flex flex-col justify-center items-center py-10 md:py-12">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <motion.div 
          className="relative h-[80vh] md:h-[90vh] overflow-hidden"
          style={{ width, borderRadius }}
        >
          <img 
            src="/rohit_everyday.jpg" 
            alt="Jewellery Craftsmanship" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primaryDark/40" />

          {/* Content Overlay */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            style={{ opacity, y }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-6 max-w-3xl">
              Crafted by Hand.<br/>
              Designed for Generations.
            </h2>
            <p className="font-sans text-white/90 text-lg md:text-xl font-light max-w-xl mb-10">
              From the first sketch to the final polish, every detail is shaped with patience and precision.
            </p>
            <Link 
              to="/craftsmanship"
              className="border border-white/50 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-primaryDark transition-all duration-300"
            >
              Explore Our Craft
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

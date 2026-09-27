import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CollectionsHero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headlineLines = [
    "Pieces for",
    "Every Story."
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-primaryDark">
      
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full origin-top"
        style={{ scale: bgScale }}
      >
        <img 
          src="/rohit_karigar.jpg" 
          alt="Luxury model wearing diamond jewellery" 
          className="w-full h-full object-cover object-[70%_30%] md:object-[60%_30%]"
        />
      </motion.div>

      {/* Dark Overlay (Left aligned gradient) */}
      <div className="absolute inset-0 bg-gradient-to-r from-primaryDark/80 via-primaryDark/40 to-transparent" />

      {/* Content */}
      <motion.div 
        className="absolute inset-0 w-full h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20"
        style={{ y: yText, opacity: opacityContent }}
      >
        <div className="max-w-3xl">
          


          <h1 className="text-white font-serif text-[clamp(3.5rem,8vw,6.5rem)] leading-[1.1] tracking-tight mb-8">
            {headlineLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + (i * 0.15) 
                  }}
                  className="pb-2"
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="text-white/80 font-sans text-base md:text-lg lg:text-xl font-light max-w-xl leading-relaxed"
          >
            Discover jewellery shaped around celebration, tradition, individuality and timeless design.
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-white/70 text-[0.6rem] tracking-[0.3em] font-medium uppercase">
          Explore Collections
        </span>
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

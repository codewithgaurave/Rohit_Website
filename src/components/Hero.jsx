import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/rohit_hero.jpg';

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headlineLines = [
    "Jewellery",
    "Made to",
    "Be Remembered."
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] overflow-hidden bg-primaryDark">
      
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale: bgScale }}
      >
        <img 
          src={heroImage} 
          alt="Luxury diamond necklace" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-primaryDark pointer-events-none"
        style={{ opacity: opacityOverlay }}
      />

      {/* Content */}
      <motion.div 
        className="absolute inset-0 w-full h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20"
        style={{ y: yText, opacity: opacityContent }}
      >
        <div className="max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 md:mb-8 text-white/80 text-[0.65rem] md:text-xs tracking-[0.3em] font-medium uppercase"
          >
            Timeless Jewellery • Since 1998
          </motion.div>

          <h1 className="text-white font-serif text-[clamp(3rem,9vw,7rem)] leading-[1.05] tracking-tight mb-8 md:w-[60%]">
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
            className="text-white/90 font-sans text-base md:text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Discover pieces created with precision, heritage and a quiet sense of luxury.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link 
              to="/collections"
              className="bg-gold text-white px-8 py-4 text-sm font-medium tracking-widest uppercase text-center hover:bg-gold/90 transition-colors"
            >
              Explore Collections
            </Link>
            <Link 
              to="/about"
              className="border border-white/40 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase text-center hover:bg-white hover:text-primaryDark transition-colors"
            >
              Discover Our Story
            </Link>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-6 md:right-12 lg:right-24 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="text-white/70 text-[0.6rem] tracking-[0.3em] font-medium" style={{ writingMode: 'vertical-rl' }}>
          SCROLL TO DISCOVER
        </span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
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

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CraftDetail() {
  const containerRef = useRef(null);
  
  // We make the section tall (e.g. 200vh) to allow scrolling while sticky
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Opacities for different labels appearing at different scroll phases
  const opacities = [
    useTransform(scrollYProgress, [0.1, 0.2, 0.4], [0, 1, 0.3]),
    useTransform(scrollYProgress, [0.3, 0.4, 0.6], [0, 1, 0.3]),
    useTransform(scrollYProgress, [0.5, 0.6, 0.8], [0, 1, 0.3]),
    useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1])
  ];

  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const labels = [
    { text: "Hand Set Stones", position: "top-[15%] left-[5%] md:left-[20%]", img: "/rohit_rings.jpg" },
    { text: "Precision Polishing", position: "top-[25%] right-[5%] md:right-[15%]", img: "/rohit_everyday.jpg" },
    { text: "Fine Metalwork", position: "top-[50%] left-[5%] md:left-[15%]", img: "/rohit_necklace.jpg" },
    { text: "Artisan Finish", position: "bottom-[10%] right-[10%] md:right-[20%]", img: "/rohit_karigar.jpg" }
  ];

  return (
    <section ref={containerRef} className="w-full h-[200vh] bg-primaryDark relative">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Large Macro Image */}
        <motion.div 
          className="absolute inset-0 w-full h-full origin-center"
          style={{ scale }}
        >
          <img 
            src="/rohit_hero.jpg" 
            alt="Jewellery Craft Details" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>

        {/* Heading overlay */}
        <motion.h2 
          className="absolute top-16 md:top-24 left-1/2 -translate-x-1/2 font-serif text-5xl md:text-7xl text-white tracking-wide"
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]),
            y: useTransform(scrollYProgress, [0, 0.1], [0, -50])
          }}
        >
          Look Closer.
        </motion.h2>

        {/* Floating Detail Labels with Images */}
        {labels.map((label, index) => (
          <motion.div
            key={index}
            className={`absolute ${label.position} flex flex-col items-center gap-4 group cursor-default z-10`}
            style={{ 
              opacity: opacities[index],
              y: yParallax 
            }}
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/20 p-1.5 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-110">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={label.img} 
                  alt={label.text} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" 
                />
              </div>
              <div className="absolute inset-0 bg-primaryDark/30 rounded-full group-hover:bg-primaryDark/10 transition-colors duration-500" />
            </div>
            <div className="flex flex-col items-center gap-2 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(184,138,68,0.8)]" />
              <span className="text-white text-[0.65rem] md:text-sm uppercase tracking-widest font-semibold drop-shadow-md whitespace-nowrap bg-primaryDark/40 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                {label.text}
              </span>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

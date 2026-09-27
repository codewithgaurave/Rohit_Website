import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PiPackageThin, PiDropThin, PiSparkleThin, PiMagnifyingGlassThin } from 'react-icons/pi';

const carePoints = [
  {
    icon: <PiPackageThin className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Store Carefully",
    desc: "Keep jewellery in a clean, dry and separate space."
  },
  {
    icon: <PiDropThin className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Avoid Harsh Chemicals",
    desc: "Remove jewellery before exposure to strong cleaning products or chemicals."
  },
  {
    icon: <PiSparkleThin className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Clean Gently",
    desc: "Use appropriate jewellery care methods based on the material."
  },
  {
    icon: <PiMagnifyingGlassThin className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Professional Care",
    desc: "Periodic inspection and professional cleaning can help preserve the piece."
  }
];

export default function JewelleryCare() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
        >
          Jewellery Care
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark leading-[1.1] mb-8"
        >
          Made to last.<br />
          Designed to be cared for.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-lg text-primaryDark/70 max-w-2xl leading-relaxed mb-16 md:mb-24"
        >
          Fine jewellery can remain beautiful for generations when handled and maintained with care.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mb-16 md:mb-24 w-full max-w-6xl">
          {carePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              className="flex flex-col items-center text-center gap-4 group"
            >
              <div className="text-primaryDark/60 mb-2 group-hover:text-gold transition-colors duration-300">
                {point.icon}
              </div>
              <h4 className="font-serif text-xl text-primaryDark">
                {point.title}
              </h4>
              <p className="font-sans text-sm text-primaryDark/60 font-light leading-relaxed max-w-[250px]">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link 
            to="/contact"
            className="border border-primaryDark text-primaryDark px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primaryDark hover:text-white transition-colors duration-300"
          >
            Contact Us for Jewellery Care
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

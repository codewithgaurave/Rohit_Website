import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../utils/cn';

const values = [
  {
    num: "01",
    title: "Craftsmanship",
    desc: "Every detail matters, from the first sketch to the final polish."
  },
  {
    num: "02",
    title: "Authenticity",
    desc: "Materials, quality and relationships built around transparency and trust."
  },
  {
    num: "03",
    title: "Timeless Design",
    desc: "Pieces created beyond seasons and short-lived trends."
  },
  {
    num: "04",
    title: "Personal Connection",
    desc: "Jewellery should feel personal, meaningful and distinctly yours."
  }
];

export default function BrandValues() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full bg-[#F0E7DA] py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark">
            What Guides Us
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-primaryDark/10">
          {values.map((val, index) => (
            <motion.div
              key={val.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col md:flex-row md:items-center py-10 md:py-16 border-b border-primaryDark/10 hover:border-gold transition-colors duration-500 cursor-default"
            >
              {/* Number */}
              <div className="w-full md:w-2/12 mb-4 md:mb-0">
                <span className={cn(
                  "font-mono text-sm tracking-widest transition-colors duration-500",
                  hoveredIndex === index ? "text-gold" : "text-primaryDark/40"
                )}>
                  {val.num}
                </span>
              </div>
              
              {/* Title */}
              <div className="w-full md:w-4/12 mb-4 md:mb-0">
                <h3 className="font-serif text-3xl md:text-4xl text-primaryDark transform transition-transform duration-500 group-hover:translate-x-2">
                  {val.title}
                </h3>
              </div>
              
              {/* Description */}
              <div className="w-full md:w-6/12">
                <p className="font-sans text-primaryDark/70 text-lg font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

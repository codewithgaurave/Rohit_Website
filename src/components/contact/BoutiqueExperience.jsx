import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    title: "Private Consultation",
    desc: "Dedicated jewellery guidance."
  },
  {
    title: "Curated Viewing",
    desc: "Explore pieces selected around your preferences."
  },
  {
    title: "Personal Attention",
    desc: "Take your time without feeling rushed."
  }
];

export default function BoutiqueExperience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background py-24 md:py-40 border-b border-primaryDark/10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header & Features */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 md:mb-32">
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark mb-8"
            >
              Inside Aurelia
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-lg lg:text-xl text-primaryDark/70 max-w-md leading-relaxed"
            >
              Our boutique is designed to make discovering jewellery calm, personal and memorable.
            </motion.p>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.15) }}
                className="flex flex-col gap-2 border-l border-gold/30 pl-6"
              >
                <h4 className="font-serif text-2xl text-primaryDark">{feature.title}</h4>
                <p className="font-sans text-primaryDark/70 font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
          
          {/* Main Large Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-7 aspect-[4/3] md:aspect-auto md:h-[60vh] overflow-hidden group"
          >
            <img 
              src="/rohit_everyday.jpg" 
              alt="Aurelia Boutique Interior"
              className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8 lg:gap-12">
            {/* Small Top Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="aspect-square md:aspect-[4/3] overflow-hidden group"
            >
              <img 
                src="/rohit_bridal.jpg" 
                alt="Jewellery Consultation"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 grayscale-[10%]"
              />
            </motion.div>
            
            {/* Small Bottom Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="aspect-[16/9] md:aspect-[4/3] overflow-hidden group"
            >
              <img 
                src="/rohit_rings.jpg" 
                alt="Close-up Display Counter"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 sepia-[5%]"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

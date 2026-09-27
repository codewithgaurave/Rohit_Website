import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PiInstagramLogoThin } from 'react-icons/pi';

const instaImages = [
  "/rohit_karigar.jpg",
  "/rohit_rings.jpg",
  "/rohit_storefront.jpg",
  "/rohit_everyday.jpg",
  "/rohit_gold_bangles.jpg",
  "/rohit_storefront.jpg"
];

export default function InstagramStrip() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background pt-24 md:pt-32 pb-16 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-4"
        >
          Follow The Story
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl text-primaryDark"
        >
          @_its_rohit._.22
        </motion.h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full overflow-x-auto hide-scrollbar pl-6 md:pl-0"
      >
        <div className="flex w-max md:w-full md:grid md:grid-cols-6 pr-6 md:pr-0">
          {instaImages.map((src, index) => (
            <a 
              key={index} 
              href="https://www.instagram.com/_its_rohit._.22?stkn=MW52bGl0cTRiMmlrYQ==" 
              target="_blank" 
              rel="noreferrer"
              className="relative w-64 md:w-full aspect-square overflow-hidden group block shrink-0"
            >
              <img 
                src={src} 
                alt="Instagram feed"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primaryDark/0 group-hover:bg-primaryDark/40 transition-colors duration-500 flex items-center justify-center">
                <PiInstagramLogoThin className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 transform" />
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-6 mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://www.instagram.com/_its_rohit._.22?stkn=MW52bGl0cTRiMmlrYQ=="
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-primaryDark/20 text-primaryDark px-8 py-4 text-sm font-medium tracking-widest uppercase hover:border-primaryDark transition-colors duration-300"
          >
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}

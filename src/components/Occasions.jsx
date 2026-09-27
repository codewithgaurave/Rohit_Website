import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const occasions = [
  {
    id: 1,
    title: "Wedding",
    image: "/rohit_karigar.jpg",
    link: "/collections/wedding"
  },
  {
    id: 2,
    title: "Engagement",
    image: "/rohit_karigar.jpg",
    link: "/collections/engagement"
  },
  {
    id: 3,
    title: "Celebration",
    image: "/rohit_rings.jpg",
    link: "/collections/celebration"
  },
  {
    id: 4,
    title: "Everyday",
    image: "/rohit_gold_bangles.jpg",
    link: "/collections/everyday"
  }
];

export default function Occasions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const handleWhatsAppClick = (e, occ) => {
    e.preventDefault();
    const baseUrl = 'https://rohitjewellers.shop';
    const imageUrl = `${baseUrl}${occ.image}`;

    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am interested in jewellery for this occasion:\n\n*${occ.title}*\n\nImage Reference: ${imageUrl}\n\nCould you please share more details?`;
    
    const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full bg-primaryDark text-white py-16 md:py-20 relative overflow-hidden" ref={containerRef}>
      
      {/* Desktop Background Images (Crossfade) */}
      <div className="hidden lg:block absolute inset-0 w-full h-full opacity-40 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={occasions[activeIndex].image}
            alt={occasions[activeIndex].title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-primaryDark/60" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16 lg:mb-24"
        >
          For every moment worth keeping.
        </motion.h2>

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between items-center px-12">
          {occasions.map((occ, index) => (
            <a
              key={occ.id}
              href="#"
              onClick={(e) => handleWhatsAppClick(e, occ)}
              className="group relative cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <h3 className={`font-serif text-3xl xl:text-5xl transition-all duration-500 ${activeIndex === index ? 'text-white scale-110' : 'text-white/40 hover:text-white/80'}`}>
                {occ.title}
              </h3>
              {activeIndex === index && (
                <motion.div 
                  layoutId="underline"
                  className="absolute -bottom-4 left-0 w-full h-[1px] bg-gold"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="flex lg:hidden flex-col gap-6">
          {occasions.map((occ, index) => (
            <motion.div
              key={occ.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a href="#" onClick={(e) => handleWhatsAppClick(e, occ)} className="block relative w-full aspect-[2/1] sm:aspect-[2.5/1] overflow-hidden rounded-sm group cursor-pointer">
                <img 
                  src={occ.image} 
                  alt={occ.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primaryDark/40 group-hover:bg-primaryDark/60 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl sm:text-4xl text-white tracking-wide">
                    {occ.title}
                  </h3>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

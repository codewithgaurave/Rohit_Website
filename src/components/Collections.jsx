import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { collectionsData } from '../data/collections';
import { cn } from '../utils/cn';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Collections() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  const handleWhatsAppClick = (e, item) => {
    e.preventDefault();
    const baseUrl = 'https://rohitjewellers.shop';
    const imageUrl = `${baseUrl}${item.image}`;

    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am interested in this collection:\n\n*${item.title}*\n\nImage Reference: ${imageUrl}\n\nCould you please share more details?`;
    
    const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full bg-background pt-20 pb-10 md:pt-32 md:pb-12" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark mb-4"
            >
              Explore Our Collections
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-sans text-lg text-primaryDark/70 max-w-md"
            >
              Distinct pieces for every celebration and every chapter.
            </motion.p>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 auto-rows-auto">
          {collectionsData.map((collection, index) => (
            <a
              href="#"
              onClick={(e) => handleWhatsAppClick(e, collection)}
              key={collection.id}
              className={cn(
                "group relative overflow-hidden block border border-transparent hover:border-gold/30 transition-colors duration-700 cursor-pointer",
                collection.gridArea,
                collection.aspectRatio
              )}
            >
              <motion.div
                initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.2 }}
                className="w-full h-full relative"
              >
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primaryDark/0 group-hover:bg-primaryDark/20 transition-colors duration-700" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h3 className="font-serif text-3xl md:text-4xl text-white transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                    {collection.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/90 overflow-hidden mt-2">
                    <span className="text-sm uppercase tracking-widest font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      Inquire via WhatsApp
                    </span>
                    <FaArrowRightLong className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200" />
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

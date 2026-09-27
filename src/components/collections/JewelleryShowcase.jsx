import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { showcaseItems } from '../../data/showcaseItems';
import { cn } from '../../utils/cn';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function JewelleryShowcase() {
  const [searchParams] = useSearchParams();
  const activeFilter = searchParams.get('category') || 'All';
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const filteredItems = showcaseItems.filter(item => 
    activeFilter === "All" ? true : item.category === activeFilter
  );
  const handleWhatsAppClick = (e, item) => {
    e.preventDefault();
    
    // Get the current website URL to create an absolute path for the image
    const baseUrl = 'https://rohitjewellers.shop';
    const imageUrl = `${baseUrl}${item.image}`;

    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am interested in this beautiful piece from your collection:\n\n*${item.name}*\nCollection: ${item.collection}\nMaterial: ${item.material}\n\nImage Reference: ${imageUrl}\n\nCould you please share more details about pricing and availability?`;
    
    const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="showcase" className="w-full bg-background py-16 md:py-20" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-4"
            >
              Curated Selection
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-primaryDark"
            >
              Explore Signature Designs
            </motion.h2>
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                key={item.id}
                className="group relative"
              >
                <a href="#" onClick={(e) => handleWhatsAppClick(e, item)} className="block">
                  <div className="w-full aspect-[4/5] overflow-hidden mb-6 relative border border-primaryDark/5">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primaryDark/0 group-hover:bg-primaryDark/5 transition-colors duration-500" />
                  </div>
                  
                  <div className="flex flex-col items-start relative">
                    <div className="flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-widest text-primaryDark/50 font-medium mb-3">
                      <span>{item.collection}</span>
                      <span>•</span>
                      <span>{item.material}</span>
                    </div>
                    
                    <h3 className="font-serif text-2xl text-primaryDark mb-4">
                      {item.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-primaryDark/60 group-hover:text-gold transition-colors overflow-hidden">
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">Inquire via WhatsApp</span>
                      <FaArrowRightLong className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-500 delay-100 -mb-2" />
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

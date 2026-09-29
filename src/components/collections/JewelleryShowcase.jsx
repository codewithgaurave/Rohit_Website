import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { FaArrowRightLong, FaWhatsapp } from 'react-icons/fa6';

// Dynamically import all images from gold and silver folders
const silverModules = import.meta.glob('../../assets/silver/*.{jpeg,jpg,png,webp}', { eager: true });
const goldModules = import.meta.glob('../../assets/gold/*.{jpeg,jpg,png,webp}', { eager: true });

const formatItems = (modules, category) => {
  return Object.values(modules).map((module, index) => ({
    id: `${category.toLowerCase()}-${index}`,
    name: `${category} Masterpiece ${index + 1}`,
    category: category,
    collection: `${category} Collection`,
    material: category === 'Gold' ? '22K Gold' : 'Premium Silver',
    image: module.default,
  }));
};

const allItems = [
  ...formatItems(goldModules, 'Gold'),
  ...formatItems(silverModules, 'Silver')
];

export default function JewelleryShowcase() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get('category') || 'All';
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const filteredItems = useMemo(() => {
    return allItems.filter(item => 
      activeFilter === "All" ? true : item.category === activeFilter
    );
  }, [activeFilter]);

  const handleWhatsAppClick = (e, item) => {
    e.preventDefault();
    
    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am interested in this beautiful piece from your collection:\n\n*${item.name}*\nCollection: ${item.collection}\nMaterial: ${item.material}\n\nCould you please share more details about pricing and availability?`;
    
    const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const categories = ['All', 'Gold', 'Silver'];

  return (
    <section id="showcase" className="w-full bg-background py-16 md:py-24" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
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
              className="font-serif text-4xl md:text-5xl text-primaryDark mb-4"
            >
              Explore Our Signature Gold & Silver
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-primaryDark/70"
            >
              Discover meticulously crafted jewelry pieces that blend heritage aesthetics with timeless elegance.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchParams({ category: cat })}
                className={cn(
                  "px-8 py-3 rounded-full text-xs font-sans uppercase tracking-widest transition-all duration-300",
                  activeFilter === cat 
                    ? "bg-primaryDark text-white shadow-md" 
                    : "bg-transparent text-primaryDark/70 hover:text-primaryDark border border-primaryDark/20 hover:border-primaryDark/50"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12"
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
                <a href="#" onClick={(e) => handleWhatsAppClick(e, item)} className="block h-full">
                  <div className="w-full aspect-[4/5] overflow-hidden mb-5 relative rounded-lg shadow-sm group-hover:shadow-xl transition-all duration-500 bg-white">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Elegant overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primaryDark/60 via-primaryDark/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover text over image */}
                    <div className="absolute bottom-4 left-0 w-full flex justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                       <span className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primaryDark px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                         <FaWhatsapp className="text-gold text-lg" />
                         Inquire Now
                       </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center relative px-2">
                    <div className="flex flex-wrap justify-center gap-2 text-[0.65rem] uppercase tracking-widest text-primaryDark/50 font-bold mb-2">
                      <span className="text-gold">{item.material}</span>
                    </div>
                    
                    <h3 className="font-serif text-xl text-primaryDark group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
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

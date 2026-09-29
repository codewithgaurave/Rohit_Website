import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowLeftLong, FaArrowRightLong, FaWhatsapp } from 'react-icons/fa6';

// Dynamically import images from gold and silver folders
const silverModules = import.meta.glob('../assets/silver/*.{jpeg,jpg,png,webp}', { eager: true });
const goldModules = import.meta.glob('../assets/gold/*.{jpeg,jpg,png,webp}', { eager: true });

const formatItems = (modules, category) => {
  return Object.values(modules).map((module, index) => ({
    id: `signature-${category.toLowerCase()}-${index}`,
    name: `${category} Signature Piece ${index + 1}`,
    collection: `${category} Masterpieces`,
    image: module.default,
  }));
};

const goldItems = formatItems(goldModules, 'Gold');
const silverItems = formatItems(silverModules, 'Silver');

// Interleave the first 8 gold and 8 silver items for the signature carousel
const signatureItems = [];
for (let i = 0; i < 8; i++) {
  if (goldItems[i]) signatureItems.push(goldItems[i]);
  if (silverItems[i]) signatureItems.push(silverItems[i]);
}

export default function SignaturePieces() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleWhatsAppClick = (e, item) => {
    e.preventDefault();
    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am interested in this beautiful piece from your signature collection:\n\n*${item.name}*\nCollection: ${item.collection}\n\nCould you please share more details?`;
    
    const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-background py-16 md:py-24 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto">
        <div className="px-6 md:px-12 mb-12 flex items-end justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-gold text-[0.65rem] tracking-[0.3em] font-bold uppercase mb-4"
            >
              Curated Selection
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark"
            >
              Signature Pieces
            </motion.h2>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')} 
              disabled={!canScrollLeft}
              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${!canScrollLeft ? 'border-primaryDark/10 text-primaryDark/30 cursor-not-allowed' : 'border-primaryDark/30 text-primaryDark hover:bg-primaryDark hover:text-white hover:border-primaryDark shadow-sm hover:shadow-md'}`}
            >
              <FaArrowLeftLong />
            </button>
            <button 
              onClick={() => scroll('right')} 
              disabled={!canScrollRight}
              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${!canScrollRight ? 'border-primaryDark/10 text-primaryDark/30 cursor-not-allowed' : 'border-primaryDark/30 text-primaryDark hover:bg-primaryDark hover:text-white hover:border-primaryDark shadow-sm hover:shadow-md'}`}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          className="w-full px-6 md:px-12 overflow-x-auto flex gap-6 md:gap-8 hide-scrollbar pb-16 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          ref={scrollRef}
          onScroll={checkScroll}
        >
          {signatureItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="min-w-[75vw] sm:min-w-[45vw] md:min-w-[30vw] lg:min-w-[22vw] snap-center group"
            >
              <a href="#" onClick={(e) => handleWhatsAppClick(e, item)} className="block w-full h-full cursor-pointer">
                <div className="w-full aspect-[4/5] overflow-hidden mb-6 relative rounded-lg shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 ease-out bg-white border border-primaryDark/5">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primaryDark/70 via-primaryDark/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* WhatsApp Floating Button on hover */}
                  <div className="absolute bottom-6 left-0 w-full flex justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <span className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primaryDark px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      <FaWhatsapp className="text-gold text-lg" />
                      Inquire
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col items-start px-2">
                  <span className="text-gold text-[0.65rem] uppercase tracking-widest mb-2 font-bold">
                    {item.collection}
                  </span>
                  <h3 className="font-serif text-2xl text-primaryDark mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-primaryDark/60 uppercase tracking-widest text-[0.65rem] font-bold group-hover:text-primaryDark transition-colors flex items-center gap-2">
                    Message Us
                    <FaArrowRightLong className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gold" />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
          {/* Empty padding block for the right edge */}
          <div className="min-w-[6vw] md:min-w-[12vw] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}

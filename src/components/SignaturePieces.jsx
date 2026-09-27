import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { jewelleryData } from '../data/jewellery';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

export default function SignaturePieces() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleWhatsAppClick = (e, item) => {
    e.preventDefault();
    const baseUrl = 'https://rohitjewellers.shop';
    const imageUrl = `${baseUrl}${item.image}`;

    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am interested in this beautiful piece from your signature collection:\n\n*${item.name}*\nCollection: ${item.collection}\n\nImage Reference: ${imageUrl}\n\nCould you please share more details?`;
    
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
    <section className="w-full bg-background py-10 md:py-12 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto">
        <div className="px-6 md:px-12 mb-12 flex items-end justify-between">
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-primaryDark"
          >
            Signature Pieces
          </motion.h2>
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll('left')} 
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full border border-primaryDark/30 flex items-center justify-center transition-all ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primaryDark hover:text-white'}`}
          >
            <FaArrowLeftLong />
          </button>
          <button 
            onClick={() => scroll('right')} 
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full border border-primaryDark/30 flex items-center justify-center transition-all ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primaryDark hover:text-white'}`}
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

        {/* Carousel */}
        <div 
          className="w-full px-6 md:px-12 overflow-x-auto flex gap-6 md:gap-10 hide-scrollbar pb-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          ref={scrollRef}
          onScroll={checkScroll}
        >
        {jewelleryData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="min-w-[75vw] sm:min-w-[45vw] md:min-w-[30vw] lg:min-w-[22vw] snap-center group"
          >
            <a href="#" onClick={(e) => handleWhatsAppClick(e, item)} className="block w-full h-full cursor-pointer">
              <div className="w-full aspect-[4/5] overflow-hidden mb-6 relative shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 ease-out">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primaryDark/0 group-hover:bg-primaryDark/5 transition-colors duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-gold text-xs uppercase tracking-widest mb-2 font-medium">
                  {item.collection}
                </span>
                <h3 className="font-serif text-2xl text-primaryDark mb-3 group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <span className="text-primaryDark/60 uppercase tracking-widest text-xs font-medium group-hover:text-primaryDark transition-colors flex items-center gap-2">
                  Inquire via WhatsApp
                  <FaArrowRightLong className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
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

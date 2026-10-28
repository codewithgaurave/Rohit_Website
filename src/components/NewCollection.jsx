import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong, FaArrowRightLong, FaWhatsapp, FaEye, FaXmark } from 'react-icons/fa6';
import { newCollectionItems } from '../data/newCollection';

export default function NewCollection() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
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
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = (e, item) => {
    e.stopPropagation();
    e.preventDefault();
    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am interested in this new collection piece:\n\n*${item.name}*\nMaterial: ${item.material}\nCode: ${item.id}\n\nCould you please share the price and availability?`;
    const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full bg-[#0F0E0D] text-white py-20 md:py-32 relative overflow-hidden" ref={containerRef}>
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-[0.65rem] tracking-[0.25em] font-semibold uppercase mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Latest Arrivals • 2026 Edition
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wide"
            >
              The New Collection
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-white/70 text-base md:text-lg font-light mt-4 max-w-xl leading-relaxed"
            >
              Explore all 26 newly handcrafted pieces blending royal heritage aesthetics with contemporary perfection. Each ornament is meticulously hallmarked.
            </motion.p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <Link
              to="/collections?category=New+Collection"
              className="text-xs uppercase tracking-widest text-gold hover:text-white border-b border-gold/40 hover:border-white pb-1 transition-all"
            >
              View All 26 Pieces →
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous piece"
                className={`p-3 rounded-full border border-white/20 transition-all duration-300 ${
                  canScrollLeft
                    ? 'text-white hover:border-gold hover:text-gold hover:bg-gold/10 cursor-pointer'
                    : 'text-white/20 border-white/5 cursor-not-allowed'
                }`}
              >
                <FaArrowLeftLong className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Next piece"
                className={`p-3 rounded-full border border-white/20 transition-all duration-300 ${
                  canScrollRight
                    ? 'text-white hover:border-gold hover:text-gold hover:bg-gold/10 cursor-pointer'
                    : 'text-white/20 border-white/5 cursor-not-allowed'
                }`}
              >
                <FaArrowRightLong className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newCollectionItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.6) }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-start group relative flex flex-col bg-white/[0.02] border border-white/10 hover:border-gold/40 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/10"
            >
              {/* Image Frame */}
              <div 
                className="w-full aspect-[4/5] overflow-hidden relative bg-[#181614] cursor-pointer"
                onClick={() => setSelectedPiece(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Tag Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[0.6rem] font-mono tracking-widest text-gold uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Item Number */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-0.5 bg-black/50 backdrop-blur-sm rounded text-[0.65rem] font-mono text-white/70">
                    #{item.num < 10 ? `0${item.num}` : item.num}
                  </span>
                </div>

                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Quick action buttons on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPiece(item);
                    }}
                    className="p-3 bg-white/90 text-primaryDark rounded-full hover:bg-gold hover:text-white transition-all transform hover:scale-110 shadow-lg"
                    title="Quick View"
                  >
                    <FaEye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => handleWhatsAppClick(e, item)}
                    className="p-3 bg-[#25D366] text-white rounded-full hover:bg-[#1ebe5b] transition-all transform hover:scale-110 shadow-lg"
                    title="Inquire on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Item Info */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-3 bg-[#131211]">
                <div>
                  <span className="text-[0.65rem] uppercase tracking-widest text-gold font-medium block mb-1">
                    {item.material}
                  </span>
                  <h3 className="font-serif text-lg text-white group-hover:text-gold transition-colors duration-300 line-clamp-1">
                    {item.name}
                  </h3>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/50 font-light">
                    Rohit Jwellers Mastercraft
                  </span>
                  <button
                    onClick={(e) => handleWhatsAppClick(e, item)}
                    className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-white font-medium transition-colors"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-gold/10 via-white/[0.03] to-gold/10 border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="font-serif text-xl md:text-2xl text-white mb-1">
              Interested in custom bridal jewelry or looking for personalized hallmarks?
            </h4>
            <p className="text-white/60 text-sm font-light">
              Visit our boutique in Babhnauli Hansrajpur Ghazipur or schedule a personal consultation today.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/collections?category=New+Collection"
              className="px-6 py-3 bg-gold hover:bg-gold/90 text-primaryDark text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md"
            >
              Browse All 26 Designs
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white/20 hover:border-gold text-white hover:text-gold text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Book Boutique Visit
            </Link>
          </div>
        </div>

      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedPiece && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-3xl bg-[#141312] border border-gold/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPiece(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/60 rounded-full text-white/70 hover:text-white hover:bg-black transition-all"
              >
                <FaXmark className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPiece.image}
                  alt={selectedPiece.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-[0.65rem] tracking-widest font-mono uppercase mb-3">
                    {selectedPiece.tag} • #{selectedPiece.num < 10 ? `0${selectedPiece.num}` : selectedPiece.num}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                    {selectedPiece.name}
                  </h3>
                  <p className="text-gold text-sm tracking-wide mb-4">
                    {selectedPiece.material}
                  </p>
                  <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                    Each design from Rohit Jwellers' New Collection is hand-inspected for precision, certified purity, and royal craftsmanship. Available for customized weights and bespoke sizing.
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                  <button
                    onClick={(e) => handleWhatsAppClick(e, selectedPiece)}
                    className="w-full py-3.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-lg flex items-center justify-center gap-2 font-medium text-sm transition-all shadow-md"
                  >
                    <FaWhatsapp className="text-lg" />
                    Inquire on WhatsApp
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedPiece(null)}
                    className="w-full py-3 border border-white/20 hover:border-gold text-white/80 hover:text-white rounded-lg text-center text-xs uppercase tracking-widest transition-all"
                  >
                    Book In-Store Viewing
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

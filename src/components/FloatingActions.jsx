import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa6';
import { useLenis } from 'lenis/react';
import { siteConfig } from '../config/siteConfig';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  // Show scroll-to-top button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const whatsappMessage = "Hello Rohit Jewellers! I am visiting your website and would like to know more.";
  const whatsappUrl = `https://wa.me/${siteConfig.phone.replace(/[\s+-]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneUrl = `tel:${siteConfig.phone.replace(/[\s-]/g, '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-4">
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-background border border-primaryDark/20 flex items-center justify-center text-primaryDark shadow-lg hover:border-gold hover:text-gold transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={phoneUrl}
        className="w-12 h-12 rounded-full bg-background border border-primaryDark/20 flex items-center justify-center text-primaryDark shadow-lg hover:border-gold hover:text-gold transition-colors duration-300"
        aria-label="Call Us"
      >
        <FaPhone className="w-4 h-4" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </motion.a>

    </div>
  );
}

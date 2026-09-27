import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo.png';

export default function PageLoader() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Route change load
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Decreased to 1 second as requested
    
    // Ensure scroll is at top immediately when loader appears
    window.scrollTo(0, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <img 
              src={logoImage} 
              alt="Rohit Jwellers" 
              className="h-16 md:h-20 object-contain mb-8"
            />
            
            {/* Loading Indicator (Golden line expanding) */}
            <div className="w-32 h-[1px] bg-primaryDark/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gold"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

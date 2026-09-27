import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { cn } from '../../utils/cn';

const categories = [
  "All",
  "Bridal",
  "Diamond",
  "Gold",
  "Necklaces",
  "Earrings",
  "Rings",
  "Bangles"
];

export default function CollectionTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('category') || 'All';
  const lenis = useLenis();
  
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef(null);

  const handleTabClick = (category) => {
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
    
    // Scroll to the showcase section if it's below the viewport
    const showcaseSection = document.getElementById('showcase');
    if (showcaseSection && lenis) {
      // Offset by the height of the sticky nav
      lenis.scrollTo(showcaseSection, { offset: -100, duration: 1.2 });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        // approx navbar height + some buffer
        setIsSticky(window.scrollY > window.innerHeight * 0.85);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-16 md:h-20" // Placeholder height to prevent layout shift
    >
      <div 
        className={cn(
          "w-full bg-background border-b border-primaryDark/5 transition-all duration-300 z-40",
          isSticky ? "fixed top-[72px] md:top-[88px] left-0 shadow-sm" : "relative"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 h-full">
          <div className="flex items-center md:justify-center overflow-x-auto hide-scrollbar h-16 md:h-20 gap-8 md:gap-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleTabClick(category)}
                className={cn(
                  "relative text-sm tracking-widest uppercase whitespace-nowrap transition-colors duration-300 py-4",
                  activeTab === category ? "text-primaryDark font-medium" : "text-primaryDark/40 hover:text-primaryDark/70 font-light"
                )}
              >
                {category}
                {activeTab === category && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

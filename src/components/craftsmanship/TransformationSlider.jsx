import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TransformationSlider() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  
  const [position, setPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);

  // Mouse / Touch handlers for the slider
  const handleMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    
    // clamp between 0 and width
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = (x / rect.width) * 100;
    setPosition(percentage);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const onMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onMouseUp);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging]);

  const beforeImg = "/rohit_karigar.jpg"; // Jeweller / Workshop
  const afterImg = "/rohit_diamond_necklace.jpg"; // The Finished Piece

  return (
    <section className="w-full bg-primaryDark py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2]"
        >
          From raw material<br />
          to lasting form.
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden select-none"
          ref={sliderRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* AFTER Image (Background) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={afterImg}
              alt="The Finished Piece"
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* After Caption */}
            <div className="absolute bottom-8 right-8 text-right hidden sm:block">
              <span className="block text-white text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-1">After</span>
              <span className="block text-white/80 font-serif text-2xl">The Finished Piece</span>
            </div>
          </div>

          {/* BEFORE Image (Foreground / Clipped) */}
          <div 
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img 
              src={beforeImg}
              alt="The Materials"
              className="w-full h-full object-cover pointer-events-none"
              style={{ width: '100vw', maxWidth: 'none' }} // Prevents image from shrinking, keeping it aligned
            />
            {/* Before Caption */}
            <div className="absolute bottom-8 left-8 text-left hidden sm:block">
              <span className="block text-primaryDark text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-1 drop-shadow-md">Before</span>
              <span className="block text-primaryDark font-serif text-2xl drop-shadow-md">The Materials</span>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-[1px] bg-white/50 cursor-col-resize z-10 flex flex-col items-center justify-center"
            style={{ left: `${position}%` }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold bg-primaryDark flex items-center justify-center shadow-lg -ml-4 md:-ml-5">
              {/* Optional tiny inner dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            </div>
          </div>

          {/* Mobile Captions */}
          <div className="absolute bottom-6 left-6 sm:hidden pointer-events-none text-white mix-blend-difference">
            <span className="block text-[0.6rem] tracking-[0.2em] font-medium uppercase mb-1">
              {position > 50 ? 'Before: The Materials' : 'After: The Finished Piece'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

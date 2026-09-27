import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function MacroDetail() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const details = [
    { label: "Stone Setting", top: "30%", left: "30%" },
    { label: "Symmetry", top: "25%", left: "65%" },
    { label: "Metal Finish", top: "60%", left: "25%" },
    { label: "Final Polish", top: "70%", left: "70%" }
  ];

  return (
    <section className="w-full bg-primaryDark py-32 md:py-48 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white"
        >
          Precision lives in the details.
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Desktop Interactive Layout */}
        <div 
          className="hidden md:block relative w-full h-[70vh] lg:h-[85vh] overflow-hidden group cursor-crosshair"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Subtle image movement based on mouse */}
          <motion.img 
            animate={{ 
              x: isHovering ? (mousePos.x - 50) * -0.5 : 0,
              y: isHovering ? (mousePos.y - 50) * -0.5 : 0,
              scale: isHovering ? 1.05 : 1
            }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
            src="/rohit_hero.jpg" 
            alt="Macro Jewellery Details"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-primaryDark/20 group-hover:bg-primaryDark/40 transition-colors duration-700" />

          {/* Detail Labels */}
          {details.map((detail, index) => {
            // Calculate distance from mouse to label for proximity effect
            const xDist = Math.abs(mousePos.x - parseFloat(detail.left));
            const yDist = Math.abs(mousePos.y - parseFloat(detail.top));
            const distance = Math.sqrt(xDist * xDist + yDist * yDist);
            
            // Fades in when mouse is within 25% distance radius
            const opacity = isHovering ? Math.max(0, 1 - distance / 25) : 0;

            return (
              <motion.div
                key={index}
                className="absolute flex items-center gap-3 pointer-events-none"
                style={{ top: detail.top, left: detail.left, opacity }}
                animate={{ opacity }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(184,138,68,0.8)]" />
                <span className="text-white text-xs tracking-widest uppercase font-medium drop-shadow-md">
                  {detail.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-8">
          <div className="w-full aspect-[4/5] overflow-hidden">
            <img 
              src="/rohit_karigar.jpg" 
              alt="Macro Jewellery Details"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/10 pt-8">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-gold" />
                <span className="text-white/80 text-xs tracking-widest uppercase font-medium">
                  {detail.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

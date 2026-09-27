import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../../utils/cn';

const switcherData = [
  {
    id: 1,
    num: "01",
    title: "Bridal",
    desc: "Ornate pieces created for ceremonies, traditions and unforgettable celebrations.",
    image: "/rohit_storefront.jpg"
  },
  {
    id: 2,
    num: "02",
    title: "Silver",
    desc: "Exquisitely crafted sterling silver pieces reflecting modern elegance and tradition.",
    image: "/rohit_earrings.jpg"
  },
  {
    id: 3,
    num: "03",
    title: "Gold",
    desc: "Warm, enduring and deeply connected to tradition.",
    image: "/rohit_storefront.jpg"
  },
  {
    id: 4,
    num: "04",
    title: "Necklaces",
    desc: "Statement centerpieces designed to frame the collarbone beautifully.",
    image: "/rohit_storefront.jpg"
  },
  {
    id: 5,
    num: "05",
    title: "Earrings",
    desc: "From delicate studs to cascading drops, crafted to capture light.",
    image: "/rohit_everyday.jpg"
  },
  {
    id: 6,
    num: "06",
    title: "Rings",
    desc: "Symbols of commitment, milestones and individual style.",
    image: "/rohit_bridal.jpg"
  }
];

export default function CollectionSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(-1);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Only apply scroll logic on desktop (viewport > 1024px)
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      let index = Math.floor(latest * switcherData.length);
      if (index >= switcherData.length) index = switcherData.length - 1;
      if (index < 0) index = 0;
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  });

  return (
    <section ref={containerRef} className="w-full bg-primaryDark text-white relative lg:h-[350vh]">
      
      {/* Desktop Layout (Sticky) */}
      <div className="hidden lg:flex sticky top-0 h-screen w-full items-center justify-center">
        <div className="container mx-auto px-12 grid grid-cols-12 gap-16 items-center">
          {/* Left: List */}
          <div className="col-span-5 flex flex-col gap-6">
            {switcherData.map((item, index) => (
              <div 
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="cursor-pointer group flex flex-col"
              >
                <div className="flex items-baseline gap-6">
                  <span className={cn(
                    "font-mono text-sm tracking-widest transition-colors duration-500",
                    activeIndex === index ? "text-gold" : "text-white/30"
                  )}>
                    {item.num}
                  </span>
                  <h3 className={cn(
                    "font-serif text-5xl xl:text-6xl uppercase tracking-wider transition-all duration-500",
                    activeIndex === index ? "text-background translate-x-2" : "text-white/30 group-hover:text-white/60"
                  )}>
                    {item.title}
                  </h3>
                </div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="ml-12 mt-4 overflow-hidden"
                    >
                      <p className="font-sans text-white/70 text-lg font-light max-w-sm">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="col-span-7 h-[80vh] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={switcherData[activeIndex].image}
                alt={switcherData[activeIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Layout (Accordion) */}
      <div className="flex lg:hidden flex-col gap-4 py-16 px-6 md:px-12 h-auto relative z-10 bg-primaryDark">
        <div className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-8">
            Explore Collections
          </div>
          {switcherData.map((item, index) => (
            <div 
              key={item.id} 
              className="border-b border-white/10 pb-4"
              onClick={() => setMobileActiveIndex(mobileActiveIndex === index ? -1 : index)}
            >
              <div className="flex items-center gap-4 py-4 cursor-pointer">
                <span className={cn(
                  "font-mono text-xs tracking-widest transition-colors duration-300",
                  mobileActiveIndex === index ? "text-gold" : "text-white/40"
                )}>
                  {item.num}
                </span>
                <h3 className={cn(
                  "font-serif text-3xl transition-colors duration-300",
                  mobileActiveIndex === index ? "text-white" : "text-white/60"
                )}>
                  {item.title}
                </h3>
              </div>
              <AnimatePresence>
                {mobileActiveIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      <p className="font-sans text-white/70 text-sm font-light mb-6">
                        {item.desc}
                      </p>
                      <div className="w-full aspect-[4/5] overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { cn } from '../../utils/cn';

const materials = [
  {
    id: 1,
    title: "Gold",
    desc: "Selected for its warmth, longevity and ability to carry intricate craftsmanship.",
    image: "/rohit_rings.jpg",
    align: "left"
  },
  {
    id: 2,
    title: "Diamonds",
    desc: "Chosen with careful attention to brilliance, proportion and character.",
    image: "/rohit_everyday.jpg",
    align: "right"
  },
  {
    id: 3,
    title: "Gemstones",
    desc: "Colour, individuality and natural variation give each gemstone its own presence.",
    image: "/rohit_rings.jpg",
    align: "left"
  }
];

const MaterialBlock = ({ data }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-15% 0px" });
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div 
      ref={itemRef}
      className={cn(
        "flex flex-col gap-12 md:gap-24 items-center",
        data.align === 'left' ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 overflow-hidden aspect-[4/5] md:aspect-[3/4]">
        <motion.div
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative"
        >
          <motion.img 
            style={{ y: yImage, scale: 1.15 }}
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover grayscale-[10%]"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className={cn(
        "w-full md:w-1/2 flex flex-col justify-center",
        data.align === 'left' ? "md:pl-12 lg:pl-24 text-left" : "md:pr-12 lg:pr-24 text-left"
      )}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <h3 className="font-serif text-3xl md:text-4xl text-primaryDark uppercase tracking-widest">
              {data.title}
            </h3>
          </div>
          <p className="font-sans text-primaryDark/70 text-lg lg:text-xl font-light leading-relaxed max-w-md">
            {data.desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default function MaterialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-24 md:mb-40 text-center" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
          >
            Materials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark leading-[1.15]"
          >
            Chosen for beauty.<br />
            Selected for quality.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {materials.map((item) => (
            <MaterialBlock key={item.id} data={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

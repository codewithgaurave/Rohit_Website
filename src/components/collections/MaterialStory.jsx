import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { cn } from '../../utils/cn';

const materials = [
  {
    id: 1,
    title: "Gold",
    desc: "Warm, enduring and deeply connected to tradition.",
    image: "/rohit_gold_bangles.jpg",
    align: "left"
  },
  {
    id: 2,
    title: "Diamonds",
    desc: "Selected for brilliance, clarity and timeless presence.",
    image: "/rohit_gold_bangles.jpg",
    align: "right"
  },
  {
    id: 3,
    title: "Gemstones",
    desc: "Distinct colour and character chosen to make every piece unique.",
    image: "/rohit_everyday.jpg",
    align: "left"
  }
];

const MaterialItem = ({ data, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-15% 0px" });
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const baseUrl = 'https://rohitjewellers.shop';
    const imageUrl = `${baseUrl}${data.image}`;

    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am interested in this material from your collections:\n\n*${data.title}*\n${data.desc}\n\nImage Reference: ${imageUrl}\n\nCould you please share more details?`;
    
    const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      ref={itemRef}
      className={cn(
        "flex flex-col gap-8 md:gap-16 items-center w-full relative",
        data.align === 'left' ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Image */}
      <a href="#" onClick={handleWhatsAppClick} className="w-full md:w-3/5 relative z-10 overflow-hidden block group cursor-pointer">
        <motion.div
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[4/5] md:aspect-square lg:aspect-[4/3] w-full relative"
        >
          <motion.img 
            style={{ y: yImage, scale: 1.1 }}
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.15]"
          />
          {/* Overlay for hover effect */}
          <div className="absolute inset-0 bg-primaryDark/0 group-hover:bg-primaryDark/20 transition-colors duration-500 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-medium tracking-widest uppercase text-sm border border-white px-6 py-2">
              Inquire via WhatsApp
            </span>
          </div>
        </motion.div>
      </a>

      {/* Content */}
      <div className={cn(
        "w-full md:w-2/5 flex flex-col justify-center relative z-20",
        data.align === 'left' ? "md:-ml-24 lg:-ml-32 md:items-start" : "md:-mr-24 lg:-mr-32 md:items-end text-left md:text-right"
      )}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background/90 md:bg-background/80 backdrop-blur-sm p-8 md:p-12 border border-primaryDark/5 max-w-sm w-full shadow-xl"
        >
          <div className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-4">
            0{index + 1}
          </div>
          <h3 className="font-serif text-4xl text-primaryDark mb-4">
            {data.title}
          </h3>
          <p className="font-sans text-primaryDark/70 font-light leading-relaxed">
            {data.desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default function MaterialStory() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-24 md:mb-40" ref={headerRef}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark"
          >
            Materials chosen with purpose.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {materials.map((item, index) => (
            <MaterialItem key={item.id} data={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

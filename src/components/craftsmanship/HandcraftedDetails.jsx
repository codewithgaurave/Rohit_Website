import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const details = [
  {
    title: "Hand Finishing",
    image: "/rohit_hero.jpg"
  },
  {
    title: "Precision Setting",
    image: "/rohit_rings.jpg"
  },
  {
    title: "Balanced Proportions",
    image: "/rohit_bridal.jpg"
  },
  {
    title: "Careful Inspection",
    image: "/rohit_rings.jpg"
  }
];

export default function HandcraftedDetails() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const handleWhatsAppClick = (e, item) => {
    e.preventDefault();
    const baseUrl = 'https://rohitjewellers.shop';
    const imageUrl = `${baseUrl}${item.image}`;

    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am reading about your Handcrafted Details:\n\n*${item.title}*\n\nImage Reference: ${imageUrl}\n\nCould you share more information?`;
    
    const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full bg-background py-24 md:py-32 border-t border-primaryDark/10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl text-primaryDark leading-[1.2]"
          >
            Details you may never notice.<br className="hidden md:block" />
            Craftsmanship you will always feel.
          </motion.h2>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.15) }}
              className="group cursor-default flex flex-col"
            >
              {/* Top line */}
              <div className="w-full h-[1px] bg-primaryDark/20 mb-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-0 bg-gold group-hover:w-full transition-all duration-700 ease-out" />
              </div>
              
              <h3 className="font-serif text-2xl text-primaryDark mb-6 transform transition-transform duration-500 group-hover:translate-x-2">
                {item.title}
              </h3>

              <a href="#" onClick={(e) => handleWhatsAppClick(e, item)} className="block w-full aspect-[4/5] md:aspect-square overflow-hidden relative cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[20%]"
                />
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-primaryDark/0 group-hover:bg-primaryDark/10 transition-colors duration-500" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

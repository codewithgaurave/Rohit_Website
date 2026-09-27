import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ArtisanStory() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const baseUrl = 'https://rohitjewellers.shop';
    const imageUrl = `${baseUrl}/rohit_bridal.jpg`;

    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am reading about your Master Karigars and Craftsmanship.\n\nImage Reference: ${imageUrl}\n\nCould you share more information about your making process?`;
    
    const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full bg-background py-24 md:py-32 lg:py-48" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <a href="#" onClick={handleWhatsAppClick} className="block w-full h-full cursor-pointer">
              <img 
                src="/rohit_bridal.jpg" 
                alt="Hands behind the pieces"
                className="w-full h-full object-cover grayscale-[30%] brightness-90 sepia-[10%] transition-transform duration-700 hover:scale-105"
              />
            </a>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
          >
            The Hands Behind the Pieces
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark leading-[1.1] mb-8 max-w-2xl"
          >
            Skill built over years.<br />
            Applied one piece at a time.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg text-primaryDark/70 mb-12 max-w-xl leading-relaxed"
          >
            Fine jewellery depends on experience that cannot be rushed. Our artisans bring patience, instinct and precision to every stage of the process.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-l border-gold/30 pl-8 mb-8"
          >
            <p className="font-serif italic text-2xl md:text-3xl text-primaryDark/80 leading-relaxed max-w-lg mb-6">
              "Craftsmanship is often invisible in the finished piece — but it is what gives the piece its character."
            </p>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-xl text-primaryDark">Master Karigar</span>
              <span className="text-primaryDark/60 uppercase tracking-widest text-[0.65rem] font-medium">Rohit Jewellers Workshop</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

const processSteps = [
  {
    id: "01",
    title: "Inspiration",
    desc: "Every piece starts with an idea — a form, emotion, motif or memory worth translating into jewellery.",
    image: "/rohit_rings.jpg"
  },
  {
    id: "02",
    title: "Sketch",
    desc: "The first lines are drawn by hand, exploring proportion, balance and the relationship between metal and stone.",
    image: "/rohit_hero.jpg"
  },
  {
    id: "03",
    title: "Form",
    desc: "Metal is shaped carefully into the structure that will define the finished piece.",
    image: "/rohit_gold_bangles.jpg"
  },
  {
    id: "04",
    title: "Stone Setting",
    desc: "Each stone is positioned and secured individually, requiring patience, control and precision.",
    image: "/rohit_bridal.jpg"
  },
  {
    id: "05",
    title: "Polishing",
    desc: "Surfaces and edges are refined until the metal achieves its final character and lustre.",
    image: "/rohit_gold_bangles.jpg"
  },
  {
    id: "06",
    title: "Final Inspection",
    desc: "Every piece is examined carefully before it leaves the workshop.",
    image: "/rohit_hero.jpg"
  }
];

export default function MakingProcess() {
  const containerRef = useRef(null);
  
  const handleWhatsAppClick = (e, step) => {
    e.preventDefault();
    const baseUrl = 'https://rohitjewellers.shop';
    const imageUrl = `${baseUrl}${step.image}`;

    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am reading about your Craftsmanship process:\n\n*Step ${step.id}: ${step.title}*\n\nImage Reference: ${imageUrl}\n\nCould you share more details?`;
    
    const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="process" className="w-full bg-background relative">
      
      {/* Unified Vertical Layout */}
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col gap-24 md:gap-40 relative">
        
        {/* Background Center Line */}
        <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-[1px] bg-primaryDark/10 -translate-x-1/2 z-0" />

        {processSteps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              key={step.id} 
              className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0 group z-10"
            >
              
              {/* Center Dot for Desktop */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gold bg-background items-center justify-center z-20 transition-transform duration-700 ease-out group-hover:scale-125">
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>

              {/* Image Side */}
              <div className={cn("w-full md:w-1/2", isEven ? "md:pr-16 lg:pr-24" : "md:pl-16 lg:pl-24 md:order-last")}>
                <a 
                  href="#" 
                  onClick={(e) => handleWhatsAppClick(e, step)}
                  className="block w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden relative shadow-xl cursor-pointer"
                >
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-primaryDark/5 group-hover:bg-primaryDark/0 transition-colors duration-700" />
                </a>
              </div>

              {/* Content Side */}
              <div className={cn("w-full md:w-1/2 flex flex-col gap-4", isEven ? "md:pl-16 lg:pl-24" : "md:pr-16 lg:pr-24 md:text-right md:items-end")}>
                
                {/* Mobile Dot */}
                <div className="flex items-center gap-4 md:hidden mb-2">
                  <div className="w-6 h-6 rounded-full border border-gold bg-background flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </div>
                  <span className="font-mono text-xl text-gold tracking-widest">{step.id}</span>
                </div>

                <span className="hidden md:block font-mono text-5xl lg:text-7xl text-gold/20 tracking-widest font-light mb-2 transition-colors duration-500 group-hover:text-gold/40">{step.id}</span>
                
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primaryDark mt-2 mb-4 group-hover:text-gold transition-colors duration-500">{step.title}</h3>
                
                <p className="font-sans text-primaryDark/70 text-base md:text-lg font-light leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}

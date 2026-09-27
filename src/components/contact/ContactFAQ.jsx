import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { cn } from '../../utils/cn';

const faqs = [
  {
    q: "Do I need an appointment to visit?",
    a: "Walk-ins are welcome, though appointments are recommended for bridal consultations and private viewings."
  },
  {
    q: "Can I book a bridal jewellery consultation?",
    a: "Yes. Our team can help you explore bridal jewellery based on your style, occasion and preferences."
  },
  {
    q: "Can I enquire about a specific piece before visiting?",
    a: "Yes. Contact us through WhatsApp, phone or email and our team can assist with availability."
  },
  {
    q: "Do you provide jewellery customisation?",
    a: "Selected designs may allow customisation depending on the piece and requirements."
  },
  {
    q: "Can I bring my existing jewellery for consultation?",
    a: "Yes. Speak with our team in advance and we can guide you based on your requirement."
  },
  {
    q: "Do you provide jewellery care assistance?",
    a: "Yes. Our team can advise on appropriate care and professional inspection options."
  }
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-primaryDark/10">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group"
      >
        <span className={cn(
          "font-serif text-xl md:text-2xl transition-colors duration-300 pr-8",
          isOpen ? "text-gold" : "text-primaryDark group-hover:text-gold"
        )}>
          {faq.q}
        </span>
        <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full h-[1px] bg-primaryDark"
          />
          <motion.div 
            animate={{ rotate: isOpen ? 180 : 90 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full h-[1px] bg-primaryDark"
          />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="font-sans text-lg text-primaryDark/70 font-light pb-8 max-w-3xl leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ContactFAQ() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-background py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primaryDark">
            Before You Visit
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col"
        >
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

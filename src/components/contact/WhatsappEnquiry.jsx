import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PiWhatsappLogoThin } from 'react-icons/pi';
import { siteConfig } from '../../config/siteConfig';

export default function WhatsappEnquiry() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const message = encodeURIComponent("Hello Aurelia, I would like to enquire about your jewellery collections.");
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <section className="w-full bg-[#1A1613] py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
        >
          Quick Enquiry
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl text-white mb-8"
        >
          Prefer WhatsApp?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-lg text-white/70 max-w-lg leading-relaxed mb-12"
        >
          Speak directly with our team for collection enquiries, boutique visits and appointment assistance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:border-gold hover:text-gold transition-colors duration-300 group"
          >
            <PiWhatsappLogoThin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}

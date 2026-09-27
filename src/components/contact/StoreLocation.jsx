import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';

export default function StoreLocation() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="location" className="w-full bg-background py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left: Content */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
          >
            Find Us
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-primaryDark leading-[1.1] mb-12"
          >
            Visit our boutique.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg text-primaryDark/70 mb-12 flex flex-col gap-6 font-light leading-relaxed"
          >
            <div>
              <span className="font-medium text-primaryDark block mb-1">{siteConfig.brandName}</span>
              <span className="whitespace-pre-line">{siteConfig.address}</span>
            </div>
            
            <div>
              <a href={`tel:${siteConfig.phone.replace(/[\s-]/g, '')}`} className="block hover:text-gold transition-colors">
                Phone: {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-gold transition-colors">
                Email: {siteConfig.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href={siteConfig.googleMapsUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-primaryDark text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gold transition-colors duration-300 text-center w-full sm:w-auto"
            >
              View on Google Maps
            </a>
          </motion.div>
        </div>

        {/* Right: Map Placeholder */}
        <div className="w-full lg:w-7/12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-[#EBE5DE] relative overflow-hidden flex items-center justify-center border border-primaryDark/5"
          >
            {/* Real Google Map Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1115.2859301158076!2d83.46192334823338!3d25.676136922198747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991fb0078bafc53%3A0x6590cc31ad9e30ac!2sBabhnauli%20hansrajpur!5e1!3m2!1sen!2sin!4v1790513392624!5m2!1sen!2sin" 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

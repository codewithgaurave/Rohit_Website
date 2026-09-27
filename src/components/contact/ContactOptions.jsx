import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PiPhoneThin, PiEnvelopeThin, PiWhatsappLogoThin, PiMapPinThin } from 'react-icons/pi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { siteConfig } from '../../config/siteConfig';

const contactMethods = [
  {
    icon: <PiPhoneThin className="w-8 h-8" />,
    label: "Contact",
    info: siteConfig.phone,
    cta: "Call Now",
    link: `tel:${siteConfig.phone.replace(/[\s-]/g, '')}`
  },
  {
    icon: <PiEnvelopeThin className="w-8 h-8" />,
    label: "Email",
    info: siteConfig.email,
    cta: "Send Email",
    link: `mailto:${siteConfig.email}`
  },
  {
    icon: <PiWhatsappLogoThin className="w-8 h-8" />,
    label: "WhatsApp",
    info: "Chat with our jewellery team",
    cta: "Chat on WhatsApp",
    link: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Aurelia, I would like to enquire about your jewellery collections.")}`
  },
  {
    icon: <PiMapPinThin className="w-8 h-8" />,
    label: "Boutique",
    info: `${siteConfig.brandName}\n${siteConfig.address}`,
    cta: "Get Directions",
    link: siteConfig.googleMapsUrl
  }
];

export default function ContactOptions() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background pb-24 md:pb-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group flex flex-col items-start cursor-pointer border-t border-primaryDark/10 pt-8"
            >
              {/* Icon */}
              <div className="text-primaryDark mb-6 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-gold">
                {method.icon}
              </div>

              {/* Label */}
              <h4 className="font-serif text-xl text-primaryDark mb-4 transition-colors duration-300 group-hover:text-gold">
                {method.label}
              </h4>

              {/* Info */}
              <div className="font-sans text-sm text-primaryDark/70 font-light mb-8 whitespace-pre-line leading-relaxed min-h-[3rem]">
                {method.info}
              </div>

              {/* CTA */}
              <div className="mt-auto flex items-center gap-3 text-xs uppercase tracking-widest font-medium text-primaryDark group-hover:text-gold transition-colors duration-300">
                <span>{method.cta}</span>
                <FaArrowRightLong className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              
              {/* Animated Line */}
              <div className="w-0 h-[1px] bg-gold mt-3 group-hover:w-full transition-all duration-700 ease-out" />
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}

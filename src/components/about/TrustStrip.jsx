import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PiCertificateThin, PiDiamondThin, PiHandCoinsThin, PiUserFocusThin } from 'react-icons/pi';

const trustPoints = [
  {
    icon: <PiCertificateThin className="w-10 h-10 md:w-12 md:h-12" />,
    label: "Certified Quality"
  },
  {
    icon: <PiDiamondThin className="w-10 h-10 md:w-12 md:h-12" />,
    label: "Ethically Selected Materials"
  },
  {
    icon: <PiHandCoinsThin className="w-10 h-10 md:w-12 md:h-12" />,
    label: "Expert Craftsmanship"
  },
  {
    icon: <PiUserFocusThin className="w-10 h-10 md:w-12 md:h-12" />,
    label: "Personalised Service"
  }
];

export default function TrustStrip() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background border-y border-primaryDark/10 py-16 md:py-20" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center gap-4 group"
            >
              <div className="text-primaryDark/60 group-hover:text-gold transition-colors duration-300">
                {point.icon}
              </div>
              <span className="font-serif text-lg md:text-xl text-primaryDark max-w-[150px]">
                {point.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

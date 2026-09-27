import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const experiences = [
  {
    title: "Personal Consultation",
    desc: "Explore designs with dedicated guidance."
  },
  {
    title: "Private Appointments",
    desc: "Take your time discovering pieces in a more personal setting."
  },
  {
    title: "Occasion Styling",
    desc: "Find jewellery suited to your celebration, outfit and individual style."
  }
];

export default function BoutiqueExperience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
          >
            The Aurelia Experience
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark mb-8 leading-[1.1]"
          >
            Jewellery is best discovered in person.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg text-primaryDark/70 mb-12 max-w-lg leading-relaxed"
          >
            Our boutique is designed to make choosing jewellery relaxed, personal and memorable.
          </motion.p>

          <div className="flex flex-col gap-8 mb-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className="flex flex-col gap-2"
              >
                <h4 className="font-serif text-2xl text-primaryDark">{exp.title}</h4>
                <p className="font-sans text-primaryDark/70 font-light">{exp.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link 
              to="/book"
              className="bg-primaryDark text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gold transition-colors duration-300 text-center"
            >
              Book an Appointment
            </Link>
            <Link 
              to="/visit"
              className="border border-primaryDark text-primaryDark px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primaryDark hover:text-white transition-colors duration-300 text-center"
            >
              Visit Our Boutique
            </Link>
          </motion.div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
          <motion.div
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img 
              src="/rohit_gold_bangles.jpg" 
              alt="Elegant Boutique Experience"
              className="w-full h-full object-cover origin-center hover:scale-105 transition-transform duration-[2s] ease-out"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

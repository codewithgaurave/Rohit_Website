import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FeaturedCollection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="w-full bg-background py-20 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-24 items-center">
          
          {/* Left: Image (55%) */}
          <div className="w-full md:w-[55%] overflow-hidden h-[70vh] md:h-[85vh]">
            <motion.img 
              style={{ scale: imageScale }}
              src="/rohit_everyday.jpg" 
              alt="Bridal Jewellery Collection"
              className="w-full h-full object-cover object-center origin-bottom"
            />
          </div>

          {/* Right: Content (45%) */}
          <div className="w-full md:w-[45%] flex flex-col justify-center" ref={textRef}>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
            >
              Featured Collection
            </motion.div>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primaryDark leading-[1.1] mb-8">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "100%" }}
                  animate={isTextInView ? { y: 0 } : { y: "100%" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  The
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  className="block text-gold"
                  initial={{ y: "100%" }}
                  animate={isTextInView ? { y: 0 } : { y: "100%" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  Bridal Edit
                </motion.span>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-lg text-primaryDark/70 mb-10 max-w-md leading-relaxed"
            >
              An expression of heritage, detail and celebration. Discover statement pieces designed for the most memorable chapter of your story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <Link 
                to="/collections/bridal"
                className="inline-flex items-center gap-2 text-primaryDark text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors group"
              >
                Explore Bridal Jewellery 
                <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
              </Link>
            </motion.div>

            {/* Descriptors */}
            <div className="flex gap-8 border-t border-primaryDark/10 pt-8">
              {['Heritage', 'Handcrafted', 'Celebration'].map((desc, i) => (
                <motion.span
                  key={desc}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.6, delay: 0.8 + (i * 0.15) }}
                  className="text-xs tracking-widest uppercase text-primaryDark/50 font-medium"
                >
                  {desc}
                </motion.span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

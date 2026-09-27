import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import karigarImage from '../assets/rohit_karigar.jpg';

const Counter = ({ from = 0, to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

export default function Legacy() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-background py-12 md:py-16" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] overflow-hidden"
        >
          <img 
            src={karigarImage} 
            alt="Jewellery Artisan Workshop" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
          >
            Our Legacy
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark mb-8 leading-[1.1]"
          >
            A tradition refined through generations.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-lg text-primaryDark/70 mb-12 max-w-lg leading-relaxed"
          >
            Our story is built upon craftsmanship, trust and an enduring appreciation for jewellery that carries meaning beyond its beauty.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 border-y border-primaryDark/10 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="font-serif text-3xl lg:text-4xl text-primaryDark mb-2">
                <Counter to={25} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-widest text-primaryDark/60 font-medium">Years of Craftsmanship</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="font-serif text-3xl lg:text-4xl text-primaryDark mb-2">
                <Counter to={10} suffix="K+" />
              </div>
              <div className="text-xs uppercase tracking-widest text-primaryDark/60 font-medium">Happy Families</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="col-span-2 md:col-span-1"
            >
              <div className="font-serif text-3xl lg:text-4xl text-primaryDark mb-2">
                <Counter to={100} suffix="%" />
              </div>
              <div className="text-xs uppercase tracking-widest text-primaryDark/60 font-medium">Quality Assured</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link 
              to="/about"
              className="inline-block border border-primaryDark text-primaryDark px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primaryDark hover:text-white transition-all duration-300"
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

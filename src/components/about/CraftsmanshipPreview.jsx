import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const craftSteps = [
  {
    id: 1,
    label: "01 — Design",
    desc: "Every piece starts as an idea shaped carefully on paper.",
    image: "/rohit_gold_bangles.jpg",
    speed: [0, -50],
    mt: "mt-0"
  },
  {
    id: 2,
    label: "02 — Setting",
    desc: "Stones are positioned and secured with extraordinary attention.",
    image: "/rohit_rings.jpg",
    speed: [0, -100],
    mt: "mt-0"
  },
  {
    id: 3,
    label: "03 — Finish",
    desc: "Each surface is refined until every detail feels complete.",
    image: "/rohit_hero.jpg",
    speed: [0, -150],
    mt: "mt-0"
  }
];

const CraftCard = ({ data }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: data.id * 0.1 }}
      className={`flex flex-col gap-6 ${data.mt} w-full`}
    >
      <div className="w-full aspect-[3/4] overflow-hidden bg-white/5">
        <img 
          src={data.image} 
          alt={data.label}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 px-2">
        <span className="font-mono text-xs tracking-widest text-gold">
          {data.label}
        </span>
        <p className="font-sans text-white/70 text-sm font-light leading-relaxed">
          {data.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function CraftsmanshipPreview() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="w-full bg-primaryDark text-white py-32 md:py-48" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
            >
              Behind Every Piece
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]"
            >
              Made slowly.<br/>
              Finished precisely.
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/craftsmanship"
              className="inline-block border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-primaryDark transition-all duration-300"
            >
              Discover Our Craftsmanship
            </Link>
          </motion.div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 pb-16 md:pb-32">
          {craftSteps.map((step) => (
            <CraftCard key={step.id} data={step} />
          ))}
        </div>

      </div>
    </section>
  );
}

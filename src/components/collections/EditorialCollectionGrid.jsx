import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { editorialCollectionsData } from '../../data/editorialCollections';
import { FaArrowRightLong } from 'react-icons/fa6';
import { cn } from '../../utils/cn';

const CollectionCard = ({ data, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10% 0px" });

  const handleWhatsAppClick = (e, data) => {
    e.preventDefault();
    const baseUrl = 'https://rohitjewellers.shop';
    const imageUrl = `${baseUrl}${data.image}`;

    const whatsappText = `Hello Rohit Jewellers! 💎\n\nI am interested in the following collection:\n\n*${data.title}*\n\nImage Reference: ${imageUrl}\n\nCould you please share more details?`;
    
    const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <a
      href="#"
      onClick={(e) => handleWhatsAppClick(e, data)}
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden block w-full bg-primaryDark/5 cursor-pointer",
        data.gridClass
      )}
    >
      <motion.div
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
        animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.15 }}
        className="w-full h-full relative"
      >
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-primaryDark/10 group-hover:bg-primaryDark/30 transition-colors duration-700" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end overflow-hidden">
          <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-4">
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 drop-shadow-sm">
              {data.title}
            </h3>
            <p className="font-sans text-white/90 text-sm md:text-base font-light max-w-sm drop-shadow-sm">
              {data.description}
            </p>
          </div>
          
          <div className="absolute bottom-6 left-8 flex flex-col opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <div className="flex items-center gap-4 text-white">
              <span className="text-xs uppercase tracking-widest font-medium">Inquire via WhatsApp</span>
              <FaArrowRightLong className="-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
            </div>
            {/* Animated Gold Line */}
            <div className="w-0 h-[1px] bg-gold mt-2 group-hover:w-full transition-all duration-700 delay-300" />
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default function EditorialCollectionGrid() {
  return (
    <section className="w-full bg-background py-10 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 lg:grid-rows-[auto_auto_auto]">
          {editorialCollectionsData.map((item, index) => (
            <CollectionCard key={item.id} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

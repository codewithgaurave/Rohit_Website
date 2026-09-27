import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function OpeningHours() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setCurrentDay(days[new Date().getDay()]);
  }, []);

  const isWeekday = currentDay !== 'Sunday';
  const isSunday = currentDay === 'Sunday';

  return (
    <section className="w-full bg-[#F0E7DA] py-24 border-y border-primaryDark/10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 lg:gap-40 items-center justify-center">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-primaryDark mb-4">Boutique Hours</h2>
          <p className="font-sans text-sm text-primaryDark/60 font-light italic">
            Hours may vary on public holidays and special occasions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 md:border-l md:border-primaryDark/20 md:pl-16 lg:pl-24"
        >
          {/* Weekdays */}
          <div className="flex flex-col">
            <span className="text-[0.65rem] tracking-[0.2em] font-medium uppercase text-primaryDark/50 mb-1">
              Monday – Saturday
            </span>
            <span className={cn(
              "font-serif text-2xl transition-colors duration-300",
              isWeekday ? "text-gold" : "text-primaryDark"
            )}>
              10:30 AM – 8:00 PM
            </span>
          </div>

          {/* Sunday */}
          <div className="flex flex-col">
            <span className="text-[0.65rem] tracking-[0.2em] font-medium uppercase text-primaryDark/50 mb-1">
              Sunday
            </span>
            <span className={cn(
              "font-serif text-2xl transition-colors duration-300",
              isSunday ? "text-gold" : "text-primaryDark"
            )}>
              11:00 AM – 6:00 PM
            </span>
          </div>

          {/* Private */}
          <div className="flex flex-col mt-4 pt-4 border-t border-primaryDark/10">
            <span className="text-[0.65rem] tracking-[0.2em] font-medium uppercase text-primaryDark/50 mb-1">
              Private Appointments
            </span>
            <span className="font-serif text-xl text-primaryDark/80">
              Available on request
            </span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

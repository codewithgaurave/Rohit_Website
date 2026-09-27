import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AppointmentForm() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    purpose: 'General Consultation',
    message: '',
    agree: false
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!formData.phone.trim()) newErrors.phone = "Please enter a phone number.";
    else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) newErrors.phone = "Enter a valid phone number.";
    
    if (!formData.email.trim()) newErrors.email = "Please enter an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email address.";

    if (!formData.date) newErrors.date = "Please choose a date.";
    else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) newErrors.date = "Please choose a future date.";
    }

    if (!formData.time) newErrors.time = "Please choose a preferred time.";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Create a formatted WhatsApp message
      const whatsappText = `*New Appointment Request* 💎\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Purpose:* ${formData.purpose}\n*Message:* ${formData.message || 'N/A'}`;
      
      // WhatsApp API URL (Using the owner's provided number)
      const whatsappUrl = `https://wa.me/919336070620?text=${encodeURIComponent(whatsappText)}`;
      
      // Open in new tab
      window.open(whatsappUrl, '_blank');
      
      setIsSuccess(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  return (
    <section id="appointment" className="w-full bg-[#F0E7DA] py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Content & Image */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6"
          >
            Private Appointment
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-primaryDark leading-[1.1] mb-8"
          >
            Take your time.<br />
            Discover jewellery personally.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg text-primaryDark/70 mb-12 max-w-sm leading-relaxed"
          >
            Book a private consultation and explore pieces with personalised guidance from our jewellery specialists.
          </motion.p>

          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden"
          >
            <img 
              src="/rohit_earrings.jpg" 
              alt="Private jewellery consultation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-7/12 bg-background p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden shadow-sm">
          
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center h-full min-h-[500px]"
            >
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mb-6">
                <div className="w-3 h-3 bg-gold rounded-full" />
              </div>
              <h3 className="font-serif text-3xl text-primaryDark mb-4">Request Received</h3>
              <p className="font-sans text-primaryDark/70 max-w-sm">
                Thank you. Your appointment request has been received. Our team will contact you shortly to confirm the details.
              </p>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-10"
              noValidate
            >
              {/* Name & Phone */}
              <div className="flex flex-col md:flex-row gap-10 md:gap-8">
                <div className="flex-1 relative">
                  <label className="block text-[0.65rem] tracking-[0.2em] font-medium uppercase text-primaryDark/50 mb-2">Full Name *</label>
                  <input 
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    className="w-full bg-transparent border-b border-primaryDark/20 focus:border-gold py-2 text-primaryDark font-sans outline-none transition-colors"
                  />
                  {errors.name && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.name}</span>}
                </div>
                <div className="flex-1 relative">
                  <label className="block text-[0.65rem] tracking-[0.2em] font-medium uppercase text-primaryDark/50 mb-2">Phone Number *</label>
                  <input 
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-transparent border-b border-primaryDark/20 focus:border-gold py-2 text-primaryDark font-sans outline-none transition-colors"
                  />
                  {errors.phone && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.phone}</span>}
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-[0.65rem] tracking-[0.2em] font-medium uppercase text-primaryDark/50 mb-2">Email Address *</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full bg-transparent border-b border-primaryDark/20 focus:border-gold py-2 text-primaryDark font-sans outline-none transition-colors"
                />
                {errors.email && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.email}</span>}
              </div>

              {/* Date & Time */}
              <div className="flex flex-col md:flex-row gap-10 md:gap-8">
                <div className="flex-1 relative">
                  <label className="block text-[0.65rem] tracking-[0.2em] font-medium uppercase text-primaryDark/50 mb-2">Preferred Date *</label>
                  <input 
                    type="date" name="date" value={formData.date} onChange={handleChange}
                    className="w-full bg-transparent border-b border-primaryDark/20 focus:border-gold py-2 text-primaryDark font-sans outline-none transition-colors"
                  />
                  {errors.date && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.date}</span>}
                </div>
                <div className="flex-1 relative">
                  <label className="block text-[0.65rem] tracking-[0.2em] font-medium uppercase text-primaryDark/50 mb-2">Preferred Time *</label>
                  <select 
                    name="time" value={formData.time} onChange={handleChange}
                    className="w-full bg-transparent border-b border-primaryDark/20 focus:border-gold py-2 text-primaryDark font-sans outline-none transition-colors"
                  >
                    <option value="" disabled>Select Time</option>
                    <option value="Morning (10:30 AM - 1:00 PM)">Morning (10:30 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
                  </select>
                  {errors.time && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">{errors.time}</span>}
                </div>
              </div>

              {/* Purpose */}
              <div className="relative">
                <label className="block text-[0.65rem] tracking-[0.2em] font-medium uppercase text-primaryDark/50 mb-2">Purpose of Visit</label>
                <select 
                  name="purpose" value={formData.purpose} onChange={handleChange}
                  className="w-full bg-transparent border-b border-primaryDark/20 focus:border-gold py-2 text-primaryDark font-sans outline-none transition-colors"
                >
                  <option value="Bridal Jewellery">Bridal Jewellery</option>
                  <option value="Engagement Jewellery">Engagement Jewellery</option>
                  <option value="Gift Selection">Gift Selection</option>
                  <option value="Diamond Jewellery">Diamond Jewellery</option>
                  <option value="Gold Jewellery">Gold Jewellery</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="Jewellery Care">Jewellery Care</option>
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-[0.65rem] tracking-[0.2em] font-medium uppercase text-primaryDark/50 mb-2">Message / Notes</label>
                <textarea 
                  name="message" value={formData.message} onChange={handleChange} rows="3"
                  className="w-full bg-transparent border-b border-primaryDark/20 focus:border-gold py-2 text-primaryDark font-sans outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Checkbox */}
              <div className="relative flex items-start gap-3 mt-2">
                <div className="pt-1">
                  <input 
                    type="checkbox" name="agree" checked={formData.agree} onChange={handleChange}
                    className="w-4 h-4 accent-gold cursor-pointer"
                  />
                </div>
                <label className="text-sm font-light text-primaryDark/70 cursor-pointer" onClick={() => handleChange({ target: { name: 'agree', type: 'checkbox', checked: !formData.agree } })}>
                  I agree to be contacted regarding this appointment.
                </label>
                {errors.agree && <span className="absolute -bottom-5 left-7 text-[10px] text-red-500">{errors.agree}</span>}
              </div>

              {/* Submit */}
              <div className="mt-4">
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-primaryDark text-white px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gold transition-colors duration-300"
                >
                  Request Appointment
                </button>
              </div>
              
            </motion.form>
          )}

        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { siteConfig } from '../config/siteConfig';
import logoImage from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-primaryDark text-white pt-16 md:pt-20 pb-8 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col items-center text-center mb-20 border-b border-white/10 pb-16">
          <Link to="/" className="inline-block mb-6">
            <img 
              src={logoImage} 
              alt="Rohit Jwellers Logo" 
              className="h-20 md:h-28 object-contain transition-transform duration-700 hover:scale-105"
            />
          </Link>
          <span className="text-white/60 tracking-[0.2em] text-xs font-medium uppercase">
            Fine Jewellery • Crafted with Meaning
          </span>
        </div>

        {/* Columns & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-gold text-xs uppercase tracking-widest font-medium mb-6">Explore</h4>
            <div className="flex flex-col gap-4 text-white/70 text-sm font-light">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/collections" className="hover:text-white transition-colors">Collections</Link>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/craftsmanship" className="hover:text-white transition-colors">Craftsmanship</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-gold text-xs uppercase tracking-widest font-medium mb-6">Collections</h4>
            <div className="flex flex-col gap-4 text-white/70 text-sm font-light">
              <Link to="/collections?category=bridal" className="hover:text-white transition-colors">Bridal</Link>
              <Link to="/collections?category=silver" className="hover:text-white transition-colors">Silver</Link>
              <Link to="/collections?category=gold" className="hover:text-white transition-colors">Gold</Link>
              <Link to="/collections?category=everyday" className="hover:text-white transition-colors">Everyday Jewellery</Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-gold text-xs uppercase tracking-widest font-medium mb-6">Contact</h4>
            <div className="flex flex-col gap-4 text-white/70 text-sm font-light">
              <span>{siteConfig.phone}</span>
              <span>{siteConfig.email}</span>
              <span className="leading-relaxed whitespace-pre-line">{siteConfig.address}</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-gold text-xs uppercase tracking-widest font-medium mb-6">Follow</h4>
            <div className="flex flex-col gap-4 text-white/70 text-sm font-light">
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <a href={siteConfig.social.pinterest} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Pinterest</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start lg:col-span-1">
            <h4 className="text-gold text-xs uppercase tracking-widest font-medium mb-6">Newsletter</h4>
            <p className="text-white/70 text-sm font-light mb-6">
              Receive stories, collections and new arrivals.
            </p>
            <form className="flex relative border-b border-white/30 pb-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent w-full outline-none text-sm text-white placeholder:text-white/40 pr-8"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors">
                <FaArrowRightLong />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/50 text-xs font-light border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
            <p>© 2026 {siteConfig.brandName}. All Rights Reserved.</p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/20"></span>
            <p className="tracking-wide">
              Crafted by <span className="text-gold font-medium">Sachin Chaurasiya</span>
            </p>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* Subtle Oversized Faded Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 select-none pointer-events-none w-full overflow-hidden flex justify-center z-0">
        <span className="font-serif text-[15vw] leading-none text-white/[0.02] whitespace-nowrap uppercase tracking-widest">
          Rohit
        </span>
      </div>

    </footer>
  );
}

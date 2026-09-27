import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';
import logoImage from '../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Collections', path: '/collections' },
  { name: 'About', path: '/about' },
];

const rightNavLinks = [
  { name: 'Craftsmanship', path: '/craftsmanship' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Add Google Translate script
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
      };
      
      if (!document.querySelector('script[src*="translate.google.com"]')) {
        const addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
      }
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    
    // Set Google Translate cookie
    document.cookie = `googtrans=/en/${language}; path=/;`;
    document.cookie = `googtrans=/en/${language}; path=/; domain=${window.location.hostname};`;
    
    // Reload to apply translation instantly
    window.location.reload();
  };

  // Get current language to set the dropdown default
  const currentLangCookie = getCookie('googtrans');
  const currentLang = currentLangCookie ? currentLangCookie.split('/')[2] : 'en';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          "bg-background text-primaryDark border-b border-gold/20 py-4 shadow-sm"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Desktop Left Nav */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={cn(
                    "text-base font-semibold tracking-wide uppercase hover:text-gold transition-colors relative group",
                    isActive ? "text-gold" : ""
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </Link>
              );
            })}
          </div>

          {/* Logo Center */}
          <div className="flex-1 flex flex-col items-center justify-center text-center z-50">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center group">
              <img 
                src={logoImage} 
                alt="Rohit Jwellers Logo" 
                className="h-12 md:h-16 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Right Nav & CTA */}
          <div className="hidden md:flex items-center justify-end gap-8 flex-1">
            {rightNavLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={cn(
                    "text-base font-semibold tracking-wide uppercase hover:text-gold transition-colors relative group",
                    isActive ? "text-gold" : ""
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </Link>
              );
            })}

            
            {/* Hidden Google Translate Widget */}
            <div id="google_translate_element" className="absolute opacity-0 pointer-events-none -z-50 w-0 h-0 overflow-hidden"></div>
            
            {/* Custom Styled Language Selector */}
            <div className="relative ml-4">
              <select 
                onChange={handleLanguageChange}
                className={cn(
                  "text-sm font-medium tracking-wider uppercase border px-6 py-2.5 rounded-sm transition-all duration-300",
                  "border-primaryDark hover:bg-primaryDark hover:text-white bg-transparent text-primaryDark cursor-pointer outline-none appearance-none pr-8"
                )}
                defaultValue={currentLang}
              >
                <option value="en" className="bg-background text-primaryDark">English</option>
                <option value="hi" className="bg-background text-primaryDark">Hindi</option>
              </select>
              {/* Custom Arrow */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[8px]">
                ▼
              </div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex-1 flex justify-end z-50">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-4 relative flex flex-col justify-between">
                <span className={cn("w-full h-[1px] transition-all duration-300 bg-primaryDark", mobileMenuOpen && "rotate-45 translate-y-[7px]")}></span>
                <span className={cn("w-full h-[1px] transition-all duration-300 bg-primaryDark", mobileMenuOpen && "opacity-0")}></span>
                <span className={cn("w-full h-[1px] transition-all duration-300 bg-primaryDark", mobileMenuOpen && "-rotate-45 -translate-y-[7px]")}></span>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center gap-8 pt-32 pb-20 min-h-screen w-full">
              {[...navLinks, ...rightNavLinks].map((link, i) => {
                const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  >
                    <Link 
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "font-serif text-4xl hover:text-gold transition-colors",
                        isActive ? "text-gold" : "text-primaryDark"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Language Selector */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-4 relative"
              >
                <select 
                  onChange={handleLanguageChange}
                  className={cn(
                    "text-base font-medium tracking-wider uppercase border px-8 py-3 rounded-sm transition-all duration-300",
                    "border-primaryDark hover:bg-primaryDark hover:text-white bg-transparent text-primaryDark cursor-pointer outline-none appearance-none pr-10"
                  )}
                  defaultValue={currentLang}
                >
                  <option value="en" className="bg-background text-primaryDark">English</option>
                  <option value="hi" className="bg-background text-primaryDark">Hindi</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[10px]">
                  ▼
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

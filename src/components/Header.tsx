
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-1' 
          : 'bg-black/50 backdrop-blur-sm py-2'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/0b280022-7e96-408e-888b-fbfb3234cdce.png" 
            alt="WealthWise Solutions Logo - Financial Advisory Services" 
            className="h-16 md:h-18" 
            width="64"
            height="64"
          />
          <h1 className={`ml-0 font-bold text-xl md:text-2xl ${!scrolled ? 'text-white' : 'text-wealthwise-primary'}`}>
            WealthWise Solutions
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main Navigation">
          <a onClick={() => scrollToSection('home')} className={`nav-link cursor-pointer ${!scrolled ? 'text-white hover:text-wealthwise-secondary' : ''}`} role="menuitem">Home</a>
          <a onClick={() => scrollToSection('about')} className={`nav-link cursor-pointer ${!scrolled ? 'text-white hover:text-wealthwise-secondary' : ''}`} role="menuitem">About Us</a>
          <a onClick={() => scrollToSection('services')} className={`nav-link cursor-pointer ${!scrolled ? 'text-white hover:text-wealthwise-secondary' : ''}`} role="menuitem">Services</a>
          <a onClick={() => scrollToSection('contact')} className={`nav-link cursor-pointer ${!scrolled ? 'text-white hover:text-wealthwise-secondary' : ''}`} role="menuitem">Contact</a>
        </nav>
        
        <div className="md:hidden">
          <button 
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X 
                className={`h-6 w-6 cursor-pointer ${!scrolled ? 'text-white' : 'text-wealthwise-primary'}`} 
                onClick={() => setMobileMenuOpen(false)}
              />
            ) : (
              <Menu 
                className={`h-6 w-6 cursor-pointer ${!scrolled ? 'text-white' : 'text-wealthwise-primary'}`} 
                onClick={() => setMobileMenuOpen(true)}
              />
            )}
          </button>
        </div>
      </div>
      
      <div 
        id="mobile-menu"
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}
        role="menu"
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a onClick={() => scrollToSection('home')} className="nav-link cursor-pointer" role="menuitem">Home</a>
          <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer" role="menuitem">About Us</a>
          <a onClick={() => scrollToSection('services')} className="nav-link cursor-pointer" role="menuitem">Services</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer" role="menuitem">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;


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
          ? 'bg-white shadow-md py-2' 
          : 'bg-black/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/d189fb1f-84da-4d1d-a27e-ffdbfaf60435.png" 
            alt="WealthWise Solutions Logo" 
            className="h-12 md:h-14"
          />
          <h1 className={`ml-3 font-bold text-xl md:text-2xl ${!scrolled ? 'text-white' : 'text-wealthwise-primary'}`}>
            WealthWise Solutions
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a onClick={() => scrollToSection('home')} className={`nav-link cursor-pointer ${!scrolled ? 'text-white hover:text-wealthwise-secondary' : ''}`}>Home</a>
          <a onClick={() => scrollToSection('about')} className={`nav-link cursor-pointer ${!scrolled ? 'text-white hover:text-wealthwise-secondary' : ''}`}>About Us</a>
          <a onClick={() => scrollToSection('services')} className={`nav-link cursor-pointer ${!scrolled ? 'text-white hover:text-wealthwise-secondary' : ''}`}>Services</a>
          <a onClick={() => scrollToSection('contact')} className={`nav-link cursor-pointer ${!scrolled ? 'text-white hover:text-wealthwise-secondary' : ''}`}>Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a onClick={() => scrollToSection('home')} className="nav-link cursor-pointer">Home</a>
          <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About Us</a>
          <a onClick={() => scrollToSection('services')} className="nav-link cursor-pointer">Services</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

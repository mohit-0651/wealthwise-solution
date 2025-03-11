
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced animated background with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-wealthwise-dark via-wealthwise-primary to-wealthwise-dark bg-size-200 animate-gradient-slow">
        {/* 3D-like geometric shapes */}
        <div className="absolute w-64 h-64 rounded-full bg-wealthwise-secondary/10 blur-3xl top-1/4 -left-32 animate-float"></div>
        <div className="absolute w-96 h-96 rounded-full bg-wealthwise-secondary/10 blur-3xl bottom-1/4 -right-48 animate-float-reverse"></div>
      </div>
      
      {/* Enhanced particles overlay with depth effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMzRjMC0yIDEtMyAyLTNzMi45IDEgMyAzdjNjMCAyIDEgMyAzIDNzMy0xIDMtM3YtMWMwLTIgMS00IDMtNHM0IDIgNCA0djEwYzAgMi0xIDMtMyAzcy0zLTEtMy0zVjM2YzAtMS0uNC0yLTEtMnMtMiAuNC0yIDF2MTBjMCAyLTEgMy0zIDNzLTMtMS0zLTN2LTZ2LTRjMC0xLS40LTItMS0ycy0yIC40LTIgMXYxNmMwIDItMSAzLTMgM3MtMy0xLTMtM1YzNHoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl ml-0 md:ml-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Your path to financial</span> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-wealthwise-secondary to-amber-300"> freedom</span> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">starts with</span> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-wealthwise-secondary to-amber-300"> WealthWise</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-delay-1">
            <button 
              onClick={() => scrollToSection('services')} 
              className="rounded-full px-8 py-4 bg-gradient-to-r from-wealthwise-secondary to-amber-400 text-wealthwise-dark font-semibold text-lg hover:shadow-lg hover:shadow-wealthwise-secondary/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Discover Our Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="rounded-full px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold text-lg border border-white/30 hover:bg-white/30 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors border border-white/30"
        >
          <ChevronDown className="text-white h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

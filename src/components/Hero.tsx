
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
    <section id="home" className="relative h-screen flex items-center justify-center bg-wealthwise-primary overflow-hidden pt-20">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzJCNTU0MCIgZmlsbC1vcGFjaXR5PSIwLjQiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMzRjMC0yIDEtMyAyLTNzMi45IDEgMyAzdjNjMCAyIDEgMyAzIDNzMy0xIDMtM3YtMWMwLTIgMS00IDMtNHM0IDIgNCA0djEwYzAgMi0xIDMtMyAzcy0zLTEtMy0zVjM2YzAtMS0uNC0yLTEtMnMtMiAuNC0yIDF2MTBjMCAyLTEgMy0zIDNzLTMtMS0zLTN2LTZ2LTRjMC0xLS40LTItMS0ycy0yIC40LTIgMXYxNmMwIDItMSAzLTMgM3MtMy0xLTMtM1YzNHoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 z-10">
        {/* Logo and content container with animation */}
        <div className={`w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 transition-all duration-1000 ${isScrolled ? 'flex-row-reverse' : ''}`}>
          {/* Logo section */}
          <div className={`w-full lg:w-2/5 flex justify-center lg:justify-start transition-all duration-1000 ${isScrolled ? 'animate-fade-in-right' : 'animate-fade-in-left'}`}>
            <img 
              src="/lovable-uploads/b0967d24-1c6b-4416-b146-f622ce4a18bd.png" 
              alt="WealthWise Solutions" 
              className="w-64 md:w-80 lg:w-[28rem] animate-pulse-once"
            />
          </div>
          
          {/* Content section */}
          <div className={`w-full lg:w-3/5 text-center lg:text-left text-white transition-all duration-1000 ${isScrolled ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your path to financial freedom starts with <span className="text-wealthwise-secondary">WealthWise</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-wealthwise-light">
              Expert financial guidance to help you build and protect your wealth for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button 
                onClick={() => scrollToSection('services')} 
                className="button-secondary"
              >
                Discover Our Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="button-primary bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          <ChevronDown className="text-white h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

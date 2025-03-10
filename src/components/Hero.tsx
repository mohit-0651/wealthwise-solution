
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-wealthwise-primary overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzJCNTU0MCIgZmlsbC1vcGFjaXR5PSIwLjQiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMzRjMC0yIDEtMyAyLTNzMi45IDEgMyAzdjNjMCAyIDEgMyAzIDNzMy0xIDMtM3YtMWMwLTIgMS00IDMtNHM0IDIgNCA0djEwYzAgMi0xIDMtMyAzcy0zLTEtMy0zVjM2YzAtMS0uNC0yLTEtMnMtMiAuNC0yIDF2MTBjMCAyLTEgMy0zIDNzLTMtMS0zLTN2LTZ2LTRjMC0xLS40LTItMS0ycy0yIC40LTIgMXYxNmMwIDItMSAzLTMgM3MtMy0xLTMtM1YzNHoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Two-column layout for desktop */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 z-10">
        {/* Left column with logo */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-left">
          <img 
            src="/lovable-uploads/5d2cce99-6fc6-40db-b40c-7d0f8ad607db.png" 
            alt="WealthWise Solutions" 
            className="w-64 md:w-80 lg:w-96 animate-float"
          />
        </div>
        
        {/* Right column with text and buttons */}
        <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in-delay-1">
            Your path to financial freedom starts with <span className="text-wealthwise-secondary">WealthWise</span>
          </h1>
          <p className="text-lg md:text-xl opacity-0 animate-fade-in-delay-2 mb-8 text-wealthwise-light">
            Expert financial guidance to help you build and protect your wealth for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-delay-3">
            <button className="button-secondary">Discover Our Services</button>
            <button className="button-primary bg-white/20 hover:bg-white/30 backdrop-blur-sm">
              Schedule a Consultation
            </button>
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

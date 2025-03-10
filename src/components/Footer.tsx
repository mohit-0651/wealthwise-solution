
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wealthwise-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/lovable-uploads/d189fb1f-84da-4d1d-a27e-ffdbfaf60435.png" 
                alt="WealthWise Solutions" 
                className="h-24 md:h-28"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-wealthwise-secondary">
                WealthWise<br />Solutions
              </h3>
            </div>
            <p className="text-wealthwise-light/80 mb-8 text-center md:text-left text-lg">
              Empowering individuals and businesses to achieve financial success through expert guidance and personalized solutions.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-3 rounded-full transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-3 rounded-full transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-3 rounded-full transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-3 rounded-full transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-2xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Investment Planning
                </a>
              </li>
              <li>
                <a href="#" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Wealth Management
                </a>
              </li>
              <li>
                <a href="#" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Retirement Planning
                </a>
              </li>
              <li>
                <a href="#" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Estate Planning
                </a>
              </li>
              <li>
                <a href="#" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Tax Optimization
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-lg text-wealthwise-light/70">
          <p>© {new Date().getFullYear()} WealthWise Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

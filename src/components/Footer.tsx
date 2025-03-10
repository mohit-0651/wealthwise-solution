
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wealthwise-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/5d2cce99-6fc6-40db-b40c-7d0f8ad607db.png" 
              alt="WealthWise Solutions" 
              className="h-20 mb-6"
            />
            <p className="text-wealthwise-light/80 mb-6 text-center md:text-left">
              Empowering individuals and businesses to achieve financial success through expert guidance and personalized solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Investment Planning
                </a>
              </li>
              <li>
                <a href="#" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Wealth Management
                </a>
              </li>
              <li>
                <a href="#" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Retirement Planning
                </a>
              </li>
              <li>
                <a href="#" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Estate Planning
                </a>
              </li>
              <li>
                <a href="#" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Tax Optimization
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-wealthwise-light/70">
          <p>© {new Date().getFullYear()} WealthWise Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

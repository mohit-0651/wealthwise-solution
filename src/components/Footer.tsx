
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wealthwise-primary text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/ec06b161-7102-45e4-b6c1-cb96e4d0b8aa.png" 
                alt="WealthWise Solutions" 
                className="h-40 md:h-44"
              />
            </div>
            <div className="flex space-x-4 mb-4 mt-2">
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
          
          <div className="mt-2">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mt-2">
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Personal Loans
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Business Loans
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Mortgage Loans
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Business Account Opening
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Credit Cards
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mt-2">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-wealthwise-secondary mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-wealthwise-light text-base">Email</h5>
                  <p className="text-wealthwise-light/80 text-base">contact@wealthwisesolutions.ae</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="text-wealthwise-secondary mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-wealthwise-light text-base">Phone</h5>
                  <p className="text-wealthwise-light/80 text-base">+971 50 523 8735</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="text-wealthwise-secondary mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-wealthwise-light text-base">Location</h5>
                  <p className="text-wealthwise-light/80 text-base">Ajman, UAE</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-wealthwise-light/70">
          <p>© {new Date().getFullYear()} WealthWise Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

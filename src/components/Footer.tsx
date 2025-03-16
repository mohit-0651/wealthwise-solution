
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wealthwise-primary text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/ec06b161-7102-45e4-b6c1-cb96e4d0b8aa.png" 
                alt="WealthWise Solutions UAE Financial Advisory Logo" 
                className="h-40 md:h-44"
                width="176"
                height="176"
              />
            </div>
            <div className="flex space-x-4 mb-4 mt-2">
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-2 rounded-full transition-colors" aria-label="Visit our Facebook page">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-2 rounded-full transition-colors" aria-label="Visit our Twitter page">
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-2 rounded-full transition-colors" aria-label="Visit our LinkedIn page">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-wealthwise-secondary hover:text-wealthwise-primary p-2 rounded-full transition-colors" aria-label="Visit our Instagram page">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div className="mt-2">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base" aria-label="Go to home section">
                  <ArrowRight className="h-4 w-4 mr-2" aria-hidden="true" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base" aria-label="Learn about WealthWise Solutions UAE">
                  <ArrowRight className="h-4 w-4 mr-2" aria-hidden="true" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base" aria-label="Explore our financial services in UAE">
                  <ArrowRight className="h-4 w-4 mr-2" aria-hidden="true" />
                  Financial Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base" aria-label="Contact WealthWise Solutions in UAE">
                  <ArrowRight className="h-4 w-4 mr-2" aria-hidden="true" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mt-2">
            <h4 className="text-xl font-semibold mb-4">Our Services in UAE</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base" aria-label="Learn about personal loans in UAE">
                  <ArrowRight className="h-4 w-4 mr-2" aria-hidden="true" />
                  Personal Loans in UAE
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base" aria-label="Learn about business loans in UAE">
                  <ArrowRight className="h-4 w-4 mr-2" aria-hidden="true" />
                  Business Loans in UAE
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base" aria-label="Learn about mortgage loans in Dubai">
                  <ArrowRight className="h-4 w-4 mr-2" aria-hidden="true" />
                  Mortgage Loans in Dubai
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base" aria-label="Learn about business account opening in UAE">
                  <ArrowRight className="h-4 w-4 mr-2" aria-hidden="true" />
                  Business Account Opening
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-base" aria-label="Learn about credit cards in UAE">
                  <ArrowRight className="h-4 w-4 mr-2" aria-hidden="true" />
                  Credit Cards in UAE
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mt-2">
            <h4 className="text-xl font-semibold mb-4">Contact Us in UAE</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-wealthwise-secondary mr-3 mt-1 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h5 className="font-semibold text-wealthwise-light text-base">Email</h5>
                  <a href="mailto:contact@wealthwisesolutions.ae" className="text-wealthwise-light/80 text-base hover:text-wealthwise-secondary transition-colors">contact@wealthwisesolutions.ae</a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="text-wealthwise-secondary mr-3 mt-1 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h5 className="font-semibold text-wealthwise-light text-base">Phone</h5>
                  <a href="tel:+97150523873" className="text-wealthwise-light/80 text-base hover:text-wealthwise-secondary transition-colors">+971 50 523 8735</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="text-wealthwise-secondary mr-3 mt-1 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h5 className="font-semibold text-wealthwise-light text-base">Location</h5>
                  <p className="text-wealthwise-light/80 text-base">Ajman, UAE</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-wealthwise-light/70">
          <p>© {currentYear} WealthWise Solutions UAE. All Rights Reserved. Professional Financial Advisory Services in Dubai and across Emirates.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

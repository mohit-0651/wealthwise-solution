import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wealthwise-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/ec06b161-7102-45e4-b6c1-cb96e4d0b8aa.png" 
                alt="WealthWise Solutions" 
                className="h-44 md:h-48"
              />
            </div>
            <p className="text-wealthwise-light/80 mb-8 text-center md:text-left text-lg">
              UAE's premier financial consulting firm helping individuals and businesses secure the best financial solutions.
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
            <h4 className="text-2xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Personal Loans
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Business Loans
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Mortgage Loans
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Business Account Opening
                </a>
              </li>
              <li>
                <a href="#services" className="text-wealthwise-light/80 hover:text-wealthwise-secondary flex items-center text-lg">
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Credit Cards
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Mail className="text-wealthwise-secondary mr-4 mt-1 h-6 w-6 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-wealthwise-light text-lg">Email</h5>
                  <p className="text-wealthwise-light/80 text-lg">info@wealthwisesolutions.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="text-wealthwise-secondary mr-4 mt-1 h-6 w-6 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-wealthwise-light text-lg">Phone</h5>
                  <p className="text-wealthwise-light/80 text-lg">+91 8700500145</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="text-wealthwise-secondary mr-4 mt-1 h-6 w-6 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-wealthwise-light text-lg">Location</h5>
                  <p className="text-wealthwise-light/80 text-lg">Dubai, UAE</p>
                </div>
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

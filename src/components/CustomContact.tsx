
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const CustomContact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-wealthwise-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">
              Contact Us
            </h2>
            <p className="text-wealthwise-gray mt-6 max-w-3xl mx-auto">
              Have questions or need financial guidance? Reach out to our team of experts today.
              We're here to help you achieve your financial goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-wealthwise-primary mb-8">Get in Touch</h3>
              <ContactForm />
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-wealthwise-primary mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-wealthwise-secondary p-3 rounded-full mr-6">
                    <Mail className="h-6 w-6 text-wealthwise-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-wealthwise-primary text-xl mb-1">Email Us</h4>
                    <p className="text-wealthwise-gray">info@wealthwisesolutions.com</p>
                    <p className="text-wealthwise-gray">support@wealthwisesolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-wealthwise-secondary p-3 rounded-full mr-6">
                    <Phone className="h-6 w-6 text-wealthwise-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-wealthwise-primary text-xl mb-1">Call Us</h4>
                    <p className="text-wealthwise-gray">+91 8700500145</p>
                    <p className="text-wealthwise-gray">+971 4 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-wealthwise-secondary p-3 rounded-full mr-6">
                    <MapPin className="h-6 w-6 text-wealthwise-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-wealthwise-primary text-xl mb-1">Visit Us</h4>
                    <p className="text-wealthwise-gray">
                      Business Bay, Dubai<br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-semibold text-wealthwise-primary text-xl mb-6">Office Hours</h4>
                  <ul className="space-y-3 text-wealthwise-gray">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomContact;

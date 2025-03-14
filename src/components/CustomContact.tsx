
import ContactForm from './ContactForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const CustomContact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="section-title mx-auto text-center">Get in Touch</h2>
          <p className="text-wealthwise-gray mt-6 max-w-2xl mx-auto">
            Ready to take the next step in your financial journey? Our team is here to help.
            Schedule a consultation today and discover the WealthWise difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information - Left Side */}
          <div className="animate-on-scroll bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-wealthwise-primary mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-wealthwise-light p-3 rounded-lg mr-4">
                  <Phone className="text-wealthwise-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-wealthwise-dark">Phone</h4>
                  <p className="text-wealthwise-gray mt-1">+971 50 523 8735</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-wealthwise-light p-3 rounded-lg mr-4">
                  <Mail className="text-wealthwise-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-wealthwise-dark">Email</h4>
                  <p className="text-wealthwise-gray mt-1">contact@wealthwisesolutions.ae</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-wealthwise-light p-3 rounded-lg mr-4">
                  <MapPin className="text-wealthwise-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-wealthwise-dark">Office Address</h4>
                  <p className="text-wealthwise-gray mt-1">Ajman, UAE</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-wealthwise-light p-3 rounded-lg mr-4">
                  <Clock className="text-wealthwise-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-wealthwise-dark">Office Hours</h4>
                  <p className="text-wealthwise-gray mt-1">Monday to Saturday: 9:00 - 6:00</p>
                  <p className="text-wealthwise-gray mt-1">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Right Side */}
          <div className="animate-on-scroll">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomContact;

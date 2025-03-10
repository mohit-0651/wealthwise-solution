
import { Shield, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-wealthwise-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">
              About WealthWise Solutions
            </h2>
            <p className="text-wealthwise-gray mt-6 max-w-3xl mx-auto">
              We are a premier financial advisory firm dedicated to helping individuals and businesses achieve their financial goals with confidence and clarity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-wealthwise-primary mb-4">Our Mission</h3>
              <p className="text-wealthwise-gray mb-6">
                At WealthWise Solutions, we believe everyone deserves a secure financial future. Our mission is to provide personalized financial strategies that align with your unique goals and values.
              </p>
              
              <h3 className="text-2xl font-bold text-wealthwise-primary mb-4">Our Approach</h3>
              <p className="text-wealthwise-gray mb-6">
                We take a holistic approach to financial planning, considering all aspects of your financial life to create comprehensive solutions that evolve with you through every life stage.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm transform transition-transform hover:scale-105">
                  <Shield className="h-10 w-10 text-wealthwise-secondary mb-2" />
                  <h4 className="font-semibold text-wealthwise-primary">Trust</h4>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm transform transition-transform hover:scale-105">
                  <Award className="h-10 w-10 text-wealthwise-secondary mb-2" />
                  <h4 className="font-semibold text-wealthwise-primary">Excellence</h4>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm transform transition-transform hover:scale-105">
                  <TrendingUp className="h-10 w-10 text-wealthwise-secondary mb-2" />
                  <h4 className="font-semibold text-wealthwise-primary">Growth</h4>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-wealthwise-primary/20 z-10 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                  alt="Financial Planning Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-wealthwise-secondary rounded-full z-0"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 border-4 border-wealthwise-secondary rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

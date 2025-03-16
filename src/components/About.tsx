
import { Shield, Award, TrendingUp, Building, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-wealthwise-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">
              About WealthWise Solutions in UAE
            </h2>
            <p className="text-wealthwise-gray mt-6 max-w-3xl mx-auto">
              We are a UAE-based financial consulting firm specializing in helping individuals and businesses 
              in Dubai and across Emirates secure the best financial products and services tailored to their unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-wealthwise-primary mb-4">Who We Are</h3>
              <p className="text-wealthwise-gray mb-6">
                Your Trusted Financial Consulting Partner in the UAE.
                At WealthWise Solutions, we specialize in helping individuals and businesses in Dubai and across Emirates secure the best financial solutions tailored to their needs. We provide expert guidance and seamless processing to ensure you get the best offers available in the UAE market.
                Helping our clients get fast approvals, competitive interest rates, and flexible repayment options for all financial services in the UAE.
              </p>
              
              <h3 className="text-2xl font-bold text-wealthwise-primary mb-4">Why Choose WealthWise Solutions in UAE?</h3>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm transform transition-transform hover:shadow-md">
                  <Users className="h-8 w-8 text-wealthwise-secondary mr-4 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-wealthwise-primary">Personalized Service in UAE</h4>
                    <p className="text-wealthwise-gray text-sm">Tailored financial solutions based on your unique profile in Dubai and UAE markets</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm transform transition-transform hover:shadow-md">
                  <TrendingUp className="h-8 w-8 text-wealthwise-secondary mr-4 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-wealthwise-primary">Fast Approvals in UAE Banks</h4>
                    <p className="text-wealthwise-gray text-sm">We help clients get approved quickly with the best terms available from UAE financial institutions</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm transform transition-transform hover:shadow-md">
                  <Award className="h-8 w-8 text-wealthwise-secondary mr-4 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-wealthwise-primary">Zero Upfront Fees</h4>
                    <p className="text-wealthwise-gray text-sm">Pay only after successful approval & disbursal of your financial product in UAE</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm transform transition-transform hover:shadow-md">
                  <Building className="h-8 w-8 text-wealthwise-secondary mr-4 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-wealthwise-primary">Expert Guidance in UAE Finance</h4>
                    <p className="text-wealthwise-gray text-sm">Professional financial advisors with deep insights into Dubai and UAE banking systems</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-wealthwise-primary font-semibold hover:text-wealthwise-secondary transition-colors"
                  aria-label="Explore our financial services in UAE"
                >
                  Explore our services in UAE →
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-wealthwise-primary/20 z-10 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                  alt="WealthWise Solutions Financial Planning Team in Dubai, UAE" 
                  className="w-full h-full object-cover"
                  width="800"
                  height="600"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-wealthwise-secondary rounded-full z-0" aria-hidden="true"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 border-4 border-wealthwise-secondary rounded-full z-0" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { LineChart, Wallet, BarChart4, Landmark, GanttChart, PiggyBank } from 'lucide-react';
import { useState } from 'react';

const servicesData = [
  {
    id: 1,
    icon: <LineChart className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Investment Planning",
    description: "Develop a tailored investment strategy aligned with your financial goals, risk tolerance, and time horizon."
  },
  {
    id: 2,
    icon: <Wallet className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Wealth Management",
    description: "Comprehensive wealth management services including asset allocation, portfolio diversification, and regular performance reviews."
  },
  {
    id: 3,
    icon: <BarChart4 className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Retirement Planning",
    description: "Create a robust retirement plan to ensure financial security throughout your retirement years."
  },
  {
    id: 4,
    icon: <Landmark className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Estate Planning",
    description: "Develop strategies to efficiently transfer wealth to the next generation while minimizing tax implications."
  },
  {
    id: 5,
    icon: <GanttChart className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Tax Optimization",
    description: "Implement tax-efficient strategies to minimize your tax burden and maximize your after-tax returns."
  },
  {
    id: 6,
    icon: <PiggyBank className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Education Funding",
    description: "Plan and save for education expenses with specialized accounts and investment strategies."
  },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">
              Our Services
            </h2>
            <p className="text-wealthwise-gray mt-6 max-w-3xl mx-auto">
              We offer a comprehensive range of financial services to help you achieve your financial goals and secure your future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className={`service-card group ${
                  hoveredCard === service.id ? 'bg-wealthwise-primary text-white' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  hoveredCard === service.id ? 'text-white' : 'text-wealthwise-primary'
                }`}>
                  {service.title}
                </h3>
                <p className={`${
                  hoveredCard === service.id ? 'text-white/90' : 'text-wealthwise-gray'
                }`}>
                  {service.description}
                </p>
                <button 
                  className={`mt-4 text-sm font-medium flex items-center ${
                    hoveredCard === service.id ? 'text-wealthwise-secondary' : 'text-wealthwise-primary'
                  }`}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="button-primary">View All Services</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

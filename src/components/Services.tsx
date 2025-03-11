
import { CreditCard, Building2, Home, LineChart, Wallet, FileText } from 'lucide-react';
import { useState } from 'react';

const servicesData = [
  {
    id: 1,
    icon: <Wallet className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Personal Loans",
    description: "Compare loan offers from multiple banks, get low interest rates & flexible repayment options with fast processing & higher approval chances."
  },
  {
    id: 2,
    icon: <Building2 className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Business Loans",
    description: "Loans for startups, SMEs, and large businesses. Get working capital financing & expansion funding with hassle-free documentation & quick approval."
  },
  {
    id: 3,
    icon: <Home className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Mortgage Loans",
    description: "Home loans for first-time buyers & investors with competitive interest rates & repayment terms. Loan buyout options to lower monthly payments."
  },
  {
    id: 4,
    icon: <LineChart className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Business Account Opening",
    description: "Open corporate bank accounts quickly & efficiently with assistance for banking requirements & compliance. Multi-currency account setup for international business."
  },
  {
    id: 5,
    icon: <CreditCard className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Credit Cards",
    description: "Exclusive cashback & travel rewards with 0% interest offers on new cards. Cards with no annual fees & high limits tailored to your needs."
  },
  {
    id: 6,
    icon: <FileText className="h-10 w-10 text-wealthwise-secondary" />,
    title: "Debt Consolidation & Loan Buyout",
    description: "Combine multiple loans into one to reduce interest. Lower monthly payments & better repayment terms with free consultation to find the best restructuring option."
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
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`mt-4 text-sm font-medium flex items-center ${
                    hoveredCard === service.id ? 'text-wealthwise-secondary' : 'text-wealthwise-primary'
                  }`}
                >
                  Get in touch
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

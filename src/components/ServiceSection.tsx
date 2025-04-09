import { Link } from "react-router-dom";
import {
  ArrowRight,
  DollarSign,
  Newspaper,
  FileText,
  BarChart,
  Users,
  Globe,
} from "lucide-react";

const ServiceSection = ({ id }: { id?: string }) => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-comm-blue" />,
      title: "Commodity Exchange",
      description:
        "Access our comprehensive commodity exchange platform with real-time trading opportunities across various markets.",
      link: "https://ankuaru.awakilo.com/home",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-comm-blue" />,
      title: "Exchange Rates",
      description:
        "Stay updated with the latest currency exchange rates to make informed financial decisions.",
      link: "https://ankuaru.awakilo.com/home",
    },
    {
      icon: <Newspaper className="h-10 w-10 text-comm-blue" />,
      title: "Business News",
      description:
        "Get the latest market insights, industry trends, and business news affecting commodity markets.",
      link: "https://ankuaru.awakilo.com/home",
    },
    {
      icon: <FileText className="h-10 w-10 text-comm-blue" />,
      title: "Tender Information",
      description:
        "Browse through current tenders and procurement opportunities across multiple industries.",
      link: "https://ankuaru.awakilo.com/home",
    },
    {
      icon: <BarChart className="h-10 w-10 text-comm-blue" />,
      title: "Market Pricing",
      description:
        "Access historical and real-time pricing data for all major commodity markets worldwide.",
      link: "https://ankuaru.awakilo.com/home",
    },
    {
      icon: <Users className="h-10 w-10 text-comm-blue" />,
      title: "Community Building",
      description:
        "Join our network of traders, businesses, and industry experts to share insights and opportunities.",
      link: "https://ankuaru.awakilo.com/home",
    },
  ];

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-comm-blue">
            Our Comprehensive Services
          </h2>
          <div className="mt-4 h-1 w-24 bg-comm-gold mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a wide range of services to help businesses navigate the
            complex world of commodity trading and market intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-comm-blue mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-comm-teal group-hover:text-comm-teal-dark font-medium"
              >
                Learn More{" "}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

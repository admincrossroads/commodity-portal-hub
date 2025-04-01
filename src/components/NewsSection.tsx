
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Global Commodity Markets See Surge in Agricultural Exports",
      excerpt: "The international market for agricultural commodities has experienced significant growth in the past quarter, with exports reaching a five-year high...",
      date: "June 12, 2023",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      id: 2,
      title: "New Regulatory Framework for Commodity Exchanges Announced",
      excerpt: "Financial regulators have introduced a comprehensive framework aimed at increasing transparency and efficiency in commodity trading platforms...",
      date: "May 28, 2023",
      category: "Regulation",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 3,
      title: "Technology Innovations Reshaping Commodity Trading Platforms",
      excerpt: "Advanced blockchain solutions and AI-powered analytics tools are transforming how traders interact with commodity markets, offering unprecedented insights...",
      date: "May 15, 2023",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-comm-blue heading-underline inline-block">Latest Market News</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Stay informed with the latest business news, market trends, and industry insights affecting commodity markets.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button className="bg-comm-blue hover:bg-comm-blue-light">
              View All News <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-comm-teal/10 text-comm-teal px-2 py-1 rounded text-xs font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center ml-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-comm-blue-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link to={`/news/${item.id}`} className="inline-flex items-center text-comm-teal hover:text-comm-teal-dark font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
